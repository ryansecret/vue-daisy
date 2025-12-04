import * as fs from "fs";
import * as path from "path";
import { workspace } from "vscode";
import * as LRU from "lru-cache";

export interface FileInfo {
  name: string;
  path: string;
}

export interface ComponentPrefix {
  path: string;
  alias: string;
}

/**
 * 文件遍历器 - 负责遍历和搜索Vue组件文件
 */
export class FileTraverser {
  private static readonly INNER_IGNORE = ["node_modules", "dist", "build"];
  private static cache = new LRU({ max: 30, maxAge: 5000 });

  /**
   * 遍历组件文件
   */
  static traverse(poster: string, search: string): FileInfo[] {
    const config = workspace.getConfiguration("vue-daisy");
    const cacheKey = `file_${poster}_${search}`;

    let components = this.cache.get<FileInfo[]>(cacheKey);
    if (components) {
      return components;
    }

    let vueFiles: FileInfo[] = [];
    const condition = this.createTraverseCondition(config);

    if (workspace.workspaceFolders && workspace.rootPath) {
      const rootPaths = fs.readdirSync(workspace.rootPath);
      const prefix = config.componentPrefix;

      for (const rootPath of rootPaths) {
        if (condition(rootPath)) {
          const stat = fs.statSync(path.join(workspace.rootPath, rootPath));
          if (stat.isDirectory()) {
            this.traverseHandle(rootPath, vueFiles, prefix, poster, search);
          } else {
            this.traverseAdd(rootPath, rootPath, vueFiles, prefix, poster, search);
          }
        }
      }
    }

    this.cache.set(cacheKey, vueFiles);
    return vueFiles;
  }

  /**
   * 创建遍历条件函数
   */
  private static createTraverseCondition(config: any): (rootPath: string) => boolean {
    if (
      config.componentPath &&
      Array.isArray(config.componentPath) &&
      config.componentPath.length > 0
    ) {
      return (rootPath: string) => config.componentPath.indexOf(rootPath) !== -1;
    } else {
      let ignore = config.componentIgnore || [];
      if (!Array.isArray(ignore)) {
        ignore = [ignore];
      }
      ignore = ignore.concat(this.INNER_IGNORE);

      return (rootPath: string) => !(rootPath.charAt(0) === "." || ignore.indexOf(rootPath) !== -1);
    }
  }

  /**
   * 遍历处理目录
   */
  private static traverseHandle(
    postPath: string,
    vueFiles: FileInfo[],
    prefix: ComponentPrefix,
    poster: string,
    search: string
  ): void {
    const config = workspace.getConfiguration("vue-daisy");

    if (!workspace.rootPath) return;

    const fileDirs = fs
      .readdirSync(path.join(workspace.rootPath, postPath))
      .filter(d => !this.INNER_IGNORE.includes(d));

    for (const rootPath of fileDirs) {
      if (rootPath.charAt(0) !== ".") {
        const dir = path.join(postPath, rootPath);
        const stat = fs.statSync(path.join(workspace.rootPath, dir));

        if (stat.isDirectory()) {
          this.traverseHandle(dir, vueFiles, prefix, poster, search);
        } else if (config.componentDirRgex && new RegExp(config.componentDirRgex).test(dir)) {
          this.traverseAdd(rootPath, dir, vueFiles, prefix, poster, search);
        }
      }
    }
  }

  /**
   * 添加遍历结果
   */
  private static traverseAdd(
    rootPath: string,
    dir: string,
    vueFiles: FileInfo[],
    prefix: ComponentPrefix,
    poster: string,
    search: string
  ): void {
    if (!rootPath.endsWith(poster)) return;

    const posterReg = new RegExp("-?(.*)(" + (poster ? poster : "\\.\\w*") + ")$", "gi");
    let name = this.formatComponentName(rootPath, poster, posterReg);

    dir = dir.replace(posterReg, "$1");

    if (!search || (search && dir.includes(search))) {
      const componentPath = this.buildComponentPath(name, dir, prefix);
      if (componentPath) {
        vueFiles.push(componentPath);
      }
    }
  }

  /**
   * 格式化组件名称
   */
  private static formatComponentName(rootPath: string, poster: string, posterReg: RegExp): string {
    const config = workspace.getConfiguration("vue-daisy");
    let name = rootPath;

    if (poster === ".vue") {
      const tagNameWay = config.tagNameWay || "kebabCase";

      switch (tagNameWay) {
        case "kebabCase":
          name = name
            .replace(/([A-Z_])/g, (_, c) => {
              if (c === "_") {
                return "-";
              } else {
                return c ? "-" + c.toLowerCase() : "";
              }
            })
            .replace(posterReg, "$1");
          break;
        case "camelCase":
          name = name
            .replace(/(-[a-z])/g, (_, c) => {
              return c ? c.toUpperCase() : "";
            })
            .replace(/-/gi, "")
            .replace(posterReg, "$1");
          break;
        case "CamelCase":
          name = name
            .replace(/(-[a-z])/g, (_, c) => {
              return c ? c.toUpperCase() : "";
            })
            .replace(/-/gi, "")
            .replace(posterReg, "$1");

          if (name && name.length > 0) {
            name = name[0].toUpperCase() + name.substr(1, name.length);
          }
          break;
      }
    } else {
      name = name.replace(posterReg, "$1");
    }

    return name;
  }

  /**
   * 构建组件路径
   */
  private static buildComponentPath(
    name: string,
    dir: string,
    prefix: ComponentPrefix
  ): FileInfo | null {
    if (prefix.path === "./" || prefix.path === "") {
      return {
        name: name,
        path: prefix.alias + "/" + dir
      };
    } else {
      if (name.toLowerCase() === "index") {
        name = dir.split("/").reverse()[1];
      }

      return {
        name: name,
        path: dir.replace(new RegExp("^" + prefix.path), prefix.alias)
      };
    }
  }
}
