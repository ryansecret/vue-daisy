export default {
  'el-alert': {
    attributes: [
      'title',
      'type',
      'description',
      'closable',
      'center',
      'close-text',
      'show-icon',
      'effect',
      'close'
    ],
    description:
      'Displays important alert messages.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)'
  },
  'el-avatar': {
    attributes: ['icon', 'size', 'shape', 'src', 'src-set', 'alt', 'fit', 'error'],
    description:
      'Avatars can be used to represent people or objects. It supports images, Icons, or characters.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)'
  },
  'el-backtop': {
    attributes: ['target', 'visibility-height', 'right', 'bottom', 'click'],
    description:
      'A button to back to top\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/backtop)'
  },
  'el-badge': {
    attributes: ['value', 'max', 'is-dot', 'hidden', 'type'],
    description:
      'A number or status mark on buttons and icons.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/badge)'
  },
  'el-breadcrumb': {
    attributes: ['to', 'replace'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/breadcrumb)'
  },
  'el-button': {
    attributes: [
      'size',
      'type',
      'plain',
      'round',
      'circle',
      'loading',
      'disabled',
      'icon',
      'autofocus',
      'native-type'
    ],
    description:
      'Commonly used button.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)'
  },
  'el-calendar': {
    attributes: ['model-value', 'range', 'first-day-of-week'],
    description:
      'Display date.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/calendar)'
  },
  'el-card': {
    attributes: ['header', 'body-style', 'shadow'],
    description:
      'Integrate information in a card container.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/card)'
  },
  'el-carousel': {
    attributes: ['name', 'label'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)'
  },
  'el-cascader': {
    attributes: ['model-value', 'options', 'props', 'change', 'expand-change'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)'
  },
  'el-checkbox': {
    attributes: ['label', 'true-label', 'false-label', 'disabled', 'name', 'checked'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)'
  },
  'el-collapse': {
    attributes: ['name', 'title', 'disabled'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/collapse)'
  },
  'el-color-picker': {
    attributes: [
      'model-value',
      'disabled',
      'size',
      'show-alpha',
      'color-format',
      'popper-class',
      'predefine',
      'change',
      'active-change'
    ],
    description:
      'ColorPicker is a color selector supporting multiple color formats.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)'
  },
  'el-container': {
    attributes: ['height'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/container)'
  },
  'el-date-picker': {
    attributes: [
      'model-value',
      'readonly',
      'disabled',
      'editable',
      'clearable',
      'placeholder',
      'start-placeholder',
      'end-placeholder',
      'type',
      'format',
      'align',
      'popper-class',
      'picker-options',
      'range-separator',
      'default-value',
      'default-time',
      'value-format',
      'name',
      'unlink-panels',
      'prefix-icon',
      'clear-icon',
      'validate-event',
      'change',
      'blur',
      'focus'
    ],
    description:
      'Use Date Picker for date input.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)'
  },
  'el-descriptions': {
    attributes: [
      'label',
      'span',
      'label-class-name',
      'content-class-name',
      'label-style',
      'content-style'
    ],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)'
  },
  'el-dialog': {
    attributes: [
      'visible',
      'title',
      'width',
      'fullscreen',
      'top',
      'modal',
      'modal-append-to-body',
      'append-to-body',
      'lock-scroll',
      'custom-class',
      'close-on-click-modal',
      'close-on-press-escape',
      'show-close',
      'before-close',
      'center',
      'destroy-on-close',
      'open',
      'opened',
      'close',
      'closed'
    ],
    description:
      'Informs users while preserving the current page state.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)'
  },
  'el-divider': {
    attributes: ['direction', 'content-position'],
    description:
      'The dividing line that separates the content.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/divider)'
  },
  'el-drawer': {
    attributes: [
      'append-to-body',
      'before-close',
      'close-on-press-escape',
      'custom-class',
      'destroy-on-close',
      'modal',
      'modal-append-to-body',
      'direction',
      'show-close',
      'size',
      'title',
      'visible',
      'wrapper-closable',
      'with-header',
      'open',
      'opened',
      'close',
      'closed'
    ],
    description:
      "Sometimes, `Dialog` does not always satisfy our requirements, let's say you have a massive form, or you need space to display something like `terms & conditions`, `Drawer` has almost identical API with `Dialog`, but it introduces different user experience.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/drawer)"
  },
  'el-dropdown': {
    attributes: ['command', 'disabled', 'divided', 'icon'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)'
  },
  'el-empty': {
    attributes: ['image', 'image-size', 'description'],
    description:
      'Placeholder hints for empty states.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/empty)'
  },
  'el-form': {
    attributes: [
      'prop',
      'label',
      'label-width',
      'required',
      'rules',
      'error',
      'show-message',
      'inline-message',
      'size'
    ],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)'
  },
  'el-image': {
    attributes: [
      'src',
      'fit',
      'alt',
      'referrer-policy',
      'lazy',
      'scroll-container',
      'preview-src-list',
      'z-index',
      'load',
      'error'
    ],
    description:
      'Besides the native features of img, support lazy load, custom placeholder and load failure, etc.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)'
  },
  'el-infinite-scroll': {
    attributes: [
      'infinite-scroll-disabled',
      'infinite-scroll-delay',
      'infinite-scroll-distance',
      'infinite-scroll-immediate'
    ],
    description:
      'Load more data while reach bottom of the page\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/infiniteScroll)'
  },
  'el-input-number': {
    attributes: [
      'model-value',
      'min',
      'max',
      'step',
      'step-strictly',
      'precision',
      'size',
      'disabled',
      'controls',
      'controls-position',
      'name',
      'label',
      'placeholder',
      'change',
      'blur',
      'focus'
    ],
    description:
      'Input numerical values with a customizable range.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)'
  },
  'el-input': {
    attributes: [
      'placeholder',
      'clearable',
      'disabled',
      'value-key',
      'icon',
      'value',
      'debounce',
      'placement',
      'fetch-suggestions',
      'popper-class',
      'trigger-on-focus',
      'name',
      'select-when-unmatched',
      'label',
      'prefix-icon',
      'suffix-icon',
      'hide-loading',
      'popper-append-to-body',
      'highlight-first-item',
      'select',
      'change'
    ],
    description:
      'You can get some recommended tips based on the current input.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)'
  },
  'el-layout': {
    attributes: ['span', 'offset', 'push', 'pull', 'xs', 'sm', 'md', 'lg', 'xl', 'tag'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)'
  },
  'el-link': {
    attributes: ['type', 'underline', 'disabled', 'href', 'icon'],
    description:
      'Text hyperlink\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/link)'
  },
  'el-menu': {
    attributes: ['click'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/menu)'
  },
  'el-page-header': {
    attributes: ['title', 'content', 'back'],
    description:
      'If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/page-header)'
  },
  'el-pagination': {
    attributes: [
      'small',
      'background',
      'page-size',
      'total',
      'page-count',
      'pager-count',
      'current-page',
      'layout',
      'page-sizes',
      'popper-class',
      'prev-text',
      'next-text',
      'disabled',
      'hide-on-single-page',
      'size-change',
      'current-change',
      'prev-click',
      'next-click'
    ],
    description:
      'If you have too much data to display in one page, use pagination.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)'
  },
  'el-popconfirm': {
    attributes: [
      'title',
      'confirm-button-text',
      'cancel-button-text',
      'confirm-button-type',
      'cancel-button-type',
      'icon',
      'icon-color',
      'hide-icon',
      'confirm',
      'cancel'
    ],
    description:
      'A simple confirmation dialog of an element click action.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)'
  },
  'el-popover': {
    attributes: [
      'trigger',
      'title',
      'content',
      'width',
      'placement',
      'disabled',
      'model-value',
      'offset',
      'transition',
      'visible-arrow',
      'popper-options',
      'popper-class',
      'open-delay',
      'close-delay',
      'tabindex',
      'show',
      'after-enter',
      'hide',
      'after-leave'
    ],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)'
  },
  'el-progress': {
    attributes: [
      'percentage',
      'type',
      'status',
      'color',
      'width',
      'show-text',
      'stroke-linecap',
      'format'
    ],
    description:
      'Progress is used to show the progress of current operation, and inform the user the current status.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)'
  },
  'el-radio': {
    attributes: ['label', 'disabled', 'name'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)'
  },
  'el-rate': {
    attributes: [
      'model-value',
      'max',
      'disabled',
      'allow-half',
      'low-threshold',
      'high-threshold',
      'colors',
      'void-color',
      'disabled-void-color',
      'icon-classes',
      'void-icon-class',
      'disabled-void-icon-class',
      'show-text',
      'show-score',
      'text-color',
      'texts',
      'score-template',
      'change'
    ],
    description:
      'Used for rating\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)'
  },
  'el-result': {
    attributes: ['title', 'sub-title', 'icon'],
    description:
      "Used to give feedback on the result of user's operation or access exception.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/result)"
  },
  'el-select': {
    attributes: ['value', 'label', 'disabled'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)'
  },
  'el-skeleton': {
    attributes: ['variant'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/skeleton)'
  },
  'el-slider': {
    attributes: [
      'model-value',
      'min',
      'max',
      'disabled',
      'step',
      'show-input',
      'show-input-controls',
      'input-size',
      'show-stops',
      'show-tooltip',
      'format-tooltip',
      'range',
      'vertical',
      'height',
      'label',
      'debounce',
      'tooltip-class',
      'marks',
      'change',
      'input'
    ],
    description:
      'Drag the slider within a fixed range.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)'
  },
  'el-steps': {
    attributes: ['title', 'description', 'icon', 'status'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)'
  },
  'el-switch': {
    attributes: [
      'model-value',
      'disabled',
      'width',
      'active-icon-class',
      'inactive-icon-class',
      'active-text',
      'inactive-text',
      'on-text',
      'off-text',
      'active-value',
      'inactive-value',
      'name',
      'validate-event',
      'change'
    ],
    description:
      'Switch is used for switching between two opposing states.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)'
  },
  'el-table': {
    attributes: [
      'type',
      'index',
      'label',
      'column-key',
      'prop',
      'width',
      'min-width',
      'fixed',
      'render-header',
      'sortable',
      'sort-method',
      'sort-by',
      'sort-orders',
      'resizable',
      'formatter',
      'show-overflow-tooltip',
      'align',
      'header-align',
      'class-name',
      'label-class-name',
      'selectable',
      'reserve-selection',
      'filters',
      'filter-placement',
      'filter-multiple',
      'filter-method',
      'filtered-value'
    ],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)'
  },
  'el-tabs': {
    attributes: ['label', 'disabled', 'name', 'closable', 'lazy'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)'
  },
  'el-tag': {
    attributes: [
      'type',
      'closable',
      'disable-transitions',
      'hit',
      'color',
      'size',
      'effect',
      'click',
      'close'
    ],
    description:
      'Used for marking and selection.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)'
  },
  'el-time-picker': {
    attributes: [
      'model-value',
      'readonly',
      'disabled',
      'editable',
      'clearable',
      'placeholder',
      'start-placeholder',
      'end-placeholder',
      'is-range',
      'arrow-control',
      'align',
      'popper-class',
      'picker-options',
      'range-separator',
      'default-value',
      'value-format',
      'name',
      'prefix-icon',
      'clear-icon',
      'change',
      'blur',
      'focus'
    ],
    description:
      'Use Time Picker for time input.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)'
  },
  'el-timeline': {
    attributes: ['timestamp', 'hide-timestamp', 'placement', 'type', 'color', 'size', 'icon'],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)'
  },
  'el-tooltip': {
    attributes: [
      'effect',
      'content',
      'placement',
      'model-value',
      'disabled',
      'offset',
      'transition',
      'visible-arrow',
      'popper-options',
      'open-delay',
      'manual',
      'popper-class',
      'enterable',
      'hide-after',
      'tabindex'
    ],
    description:
      'Display prompt information for mouse hover.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)'
  },
  'el-transfer': {
    attributes: [
      'model-value',
      'data',
      'filterable',
      'filter-placeholder',
      'filter-method',
      'target-order',
      'titles',
      'button-texts',
      'render-content',
      'format',
      'props',
      'left-default-checked',
      'right-default-checked',
      'change',
      'left-check-change',
      'right-check-change'
    ],
    description:
      '[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)'
  },
  'el-tree': {
    attributes: [
      'data',
      'empty-text',
      'node-key',
      'props',
      'render-after-expand',
      'load',
      'render-content',
      'highlight-current',
      'default-expand-all',
      'expand-on-click-node',
      'check-on-click-node',
      'auto-expand-parent',
      'default-expanded-keys',
      'show-checkbox',
      'check-strictly',
      'default-checked-keys',
      'current-node-key',
      'filter-node-method',
      'accordion',
      'indent',
      'icon-class',
      'lazy',
      'draggable',
      'allow-drag',
      'allow-drop',
      'node-click',
      'node-contextmenu',
      'check-change',
      'check',
      'current-change',
      'node-expand',
      'node-collapse',
      'node-drag-start',
      'node-drag-enter',
      'node-drag-leave',
      'node-drag-over',
      'node-drag-end',
      'node-drop'
    ],
    description:
      'Display a set of data with hierarchies.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)'
  },
  'el-upload': {
    attributes: [
      'action',
      'headers',
      'multiple',
      'data',
      'name',
      'with-credentials',
      'show-file-list',
      'drag',
      'accept',
      'on-preview',
      'on-remove',
      'on-success',
      'on-error',
      'on-progress',
      'on-change',
      'before-upload',
      'before-remove',
      'thumbnail-mode',
      'file-list',
      'list-type',
      'auto-upload',
      'http-request',
      'disabled',
      'limit',
      'on-exceed'
    ],
    description:
      'Upload files by clicking or drag-and-drop\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)'
  }
}
