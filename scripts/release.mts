import fs from 'node:fs';
import prompts from 'prompts';
import * as semver from 'semver';
import { cyan } from 'kolorist';
import { $ } from 'zx';

async function release() {
  if (!$.env.ignoreBuild) {
    console.log(cyan('Building...'));

    await $`nr package`;
  }

  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  const { version: currentVersion, name } = pkg;
  const choices = Array.from(['patch', 'minor', 'major'], title => {
   // eslint-disable-next-line 
    const d=title as semver.ReleaseType
    return {
      title,
      value: semver.inc(currentVersion, d),
    };
  })
    .concat(
      Array.from(['prerelease'], title => ({
        title,
        value: title
      }))
    )
    .concat(
      Array.from(['custom'], title => ({
        title,
        value: title
      }))
    );

  const release = await prompts({
    type: 'select',
    name: 't',
    message: 'Select release type',
    choices
  });

  const { t } = release;

  const targetVersion =
    t === 'prerelease'
      ? (
          await prompts({
            type: 'select',
            name: 'value',
            message: 'Select prerelease type',
            choices: Array.from(['alpha', 'beta', 'rc'], title => ({
              title,
              value: semver.inc(currentVersion, 'prerelease', title)
            }))
          })
        ).value
      : t === 'custom'
      ? (
          await prompts({
            type: 'text',
            name: 'value',
            message: 'Input custom version'
          })
        ).value
      : t;

  if (!semver.valid(targetVersion)) {
    throw new Error(`invalid target version: ${targetVersion}`);
  }

  const { yes } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `Releasing v${targetVersion}. Confirm?`
  });

  if (!yes) {
    return;
  }

  pkg.version = targetVersion;
  fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

  console.log(cyan('Publishing...'));

  try {
    await $`vsce publish`;
  } catch (error) {
    console.log(error);
    // 恢复版本号
    pkg.version = currentVersion;
    fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
    return;
  }
  await $`nr changelog`;
  console.log(cyan('Committing...'));
  await $`git add -A`;
  await $`git commit --no-verify -m "release: v${targetVersion}"`;

  console.log(cyan('Pushing...'));
  await $`git push`;
  await $`git tag v${targetVersion}`;
  await $`git push origin refs/tags/v${targetVersion}`;
}

try {
  release();
} catch (e) {
  console.error(e);
}
