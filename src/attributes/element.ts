export default{
  "el-alert/title": {
      "type": "string",
      "description": "title\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/type": {
      "type": "string",
      "options": [
          "success",
          "warning",
          "info",
          "error"
      ],
      "description": "Component type, default: info.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/description": {
      "type": "string",
      "description": "Descriptive text. Can also be passed with the default slot\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/closable": {
      "type": "boolean",
      "description": "If closable or not, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/center": {
      "type": "boolean",
      "description": "Whether to center the text, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/close-text": {
      "type": "string",
      "description": "Customized close button text\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/show-icon": {
      "type": "boolean",
      "description": "If a type icon is displayed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/effect": {
      "type": "string",
      "options": [
          "light",
          "dark"
      ],
      "description": "Choose theme, default: light.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-alert/close": {
      "type": "event",
      "description": "fires when alert is closed\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/alert)"
  },
  "el-avatar-avatar/icon": {
      "type": "string",
      "description": "set representation type to Icon, more info on Icon Component\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-avatar-avatar/size": {
      "type": "number|string",
      "options": [
          "number",
          "large",
          "medium",
          "small"
      ],
      "description": "set avatar size, default: large.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-avatar-avatar/shape": {
      "type": "string",
      "options": [
          "circle",
          "square"
      ],
      "description": "set avatar shape, default: circle.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-avatar-avatar/src": {
      "type": "string",
      "description": "the address of the image for an image avatar\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-avatar-avatar/src-set": {
      "type": "string",
      "description": "A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-avatar-avatar/alt": {
      "type": "string",
      "description": "This attribute defines an alternative text description of the image\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-avatar-avatar/fit": {
      "type": "string",
      "options": [
          "fill",
          "contain",
          "cover",
          "none",
          "scale-down"
      ],
      "description": "set how the image fit its container for an image avatar, default: cover.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-avatar-avatar/error": {
      "type": "event",
      "description": "handler when img load error, return false to prevent default fallback behavior\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/avatar)"
  },
  "el-backtop/target": {
      "type": "string",
      "description": "the target to trigger scroll\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/backtop)"
  },
  "el-backtop/visibility-height": {
      "type": "number",
      "description": "the button will not show until the scroll height reaches this value, default: 200.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/backtop)"
  },
  "el-backtop/right": {
      "type": "number",
      "description": "right distance, default: 40.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/backtop)"
  },
  "el-backtop/bottom": {
      "type": "number",
      "description": "bottom distance, default: 40.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/backtop)"
  },
  "el-backtop/click": {
      "type": "event",
      "description": "triggers when click\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/backtop)"
  },
  "el-badge/value": {
      "type": "string|number",
      "description": "display value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/badge)"
  },
  "el-badge/max": {
      "type": "number",
      "description": "maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/badge)"
  },
  "el-badge/is-dot": {
      "type": "boolean",
      "description": "if a little dot is displayed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/badge)"
  },
  "el-badge/hidden": {
      "type": "boolean",
      "description": "hidden badge, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/badge)"
  },
  "el-badge/type": {
      "type": "string",
      "options": [
          "primary",
          "success",
          "warning",
          "danger",
          "info"
      ],
      "description": "button type\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/badge)"
  },
  "el-breadcrumb/separator": {
      "type": "string",
      "description": "separator character, default: /.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/breadcrumb)"
  },
  "el-breadcrumb/separator-class": {
      "type": "string",
      "description": "class name of icon separator\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/breadcrumb)"
  },
  "el-breadcrumb-item/to": {
      "type": "string|object",
      "description": "target route of the link, same as `to` of `vue-router`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/breadcrumb)"
  },
  "el-breadcrumb-item/replace": {
      "type": "boolean",
      "description": "if `true`, the navigation will not leave a history record, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/breadcrumb)"
  },
  "el-button/size": {
      "type": "string",
      "description": "button size, default: small.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/type": {
      "type": "string",
      "description": "button type\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/plain": {
      "type": "boolean",
      "description": "determine whether it's a plain button, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/round": {
      "type": "boolean",
      "description": "determine whether it's a round button, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/circle": {
      "type": "boolean",
      "description": "determine whether it's a circle button, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/loading": {
      "type": "boolean",
      "description": "determine whether it's loading, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/disabled": {
      "type": "boolean",
      "description": "disable the button, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/icon": {
      "type": "string",
      "description": "icon class name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/autofocus": {
      "type": "boolean",
      "description": "same as native button's `autofocus`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-button/native-type": {
      "type": "string",
      "description": "same as native button's `type`, default: button.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/button)"
  },
  "el-calendar/model-value": {
      "type": "date|string|number",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/calendar)"
  },
  "el-calendar/range": {
      "type": "array",
      "description": "time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/calendar)"
  },
  "el-calendar/first-day-of-week": {
      "type": "number",
      "options": [
          "1 to 7"
      ],
      "description": "fisrt day of week, default: 1.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/calendar)"
  },
  "el-card/header": {
      "type": "string",
      "description": "title of the card. Also accepts a DOM passed by `slot#header`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/card)"
  },
  "el-card/body-style": {
      "type": "object",
      "description": "CSS style of body, default: { padding: '20px' }.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/card)"
  },
  "el-card/shadow": {
      "type": "string",
      "options": [
          "always",
          "hover",
          "never"
      ],
      "description": "when to show card shadows, default: always.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/card)"
  },
  "el-carousel/height": {
      "type": "string",
      "description": "height of the carousel\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/initial-index": {
      "type": "number",
      "description": "index of the initially active slide (starting from 0), default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/trigger": {
      "type": "string",
      "options": [
          "hover",
          "click"
      ],
      "description": "how indicators are triggered, default: hover.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/autoplay": {
      "type": "boolean",
      "description": "whether automatically loop the slides, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/interval": {
      "type": "number",
      "description": "interval of the auto loop, in milliseconds, default: 3000.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/indicator-position": {
      "type": "string",
      "options": [
          "outside",
          "none"
      ],
      "description": "position of the indicators\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/arrow": {
      "type": "string",
      "options": [
          "always",
          "hover",
          "never"
      ],
      "description": "when arrows are shown, default: hover.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/type": {
      "type": "string",
      "options": [
          "card"
      ],
      "description": "type of the Carousel\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/loop": {
      "type": "boolean",
      "description": "display the items in loop, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/direction": {
      "type": "string",
      "options": [
          "horizontal",
          "vertical"
      ],
      "description": "display direction, default: horizontal.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel/change": {
      "type": "event",
      "description": "triggers when the active slide switches\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel-item/name": {
      "type": "string",
      "description": "name of the item, can be used in `setActiveItem`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-carousel-item/label": {
      "type": "string",
      "description": "text content for the corresponding indicator\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/carousel)"
  },
  "el-cascader/model-value": {
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/options": {
      "type": "array",
      "description": "data of the options，the key of `value` and `label` can be customize by `Props`.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/props": {
      "type": "object",
      "description": "configuration options, see the following table.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "size of input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/placeholder": {
      "type": "string",
      "description": "placeholder of input, default: Select.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/disabled": {
      "type": "boolean",
      "description": "whether Cascader is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/clearable": {
      "type": "boolean",
      "description": "whether selected value can be cleared, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/show-all-levels": {
      "type": "boolean",
      "description": "whether to display all levels of the selected value in the input, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/collapse-tags": {
      "type": "boolean",
      "description": "whether to collapse tags in multiple selection mode, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/separator": {
      "type": "string",
      "description": "option label separator, default: ' / '.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/filterable": {
      "type": "boolean",
      "description": "whether the options can be searched\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/filter-method": {
      "type": "function",
      "description": "customize search logic, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/debounce": {
      "type": "number",
      "description": "debounce delay when typing filter keyword, in milliseconds, default: 300.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/before-filter": {
      "type": "function",
      "description": "hook function before filtering with the value to be filtered as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, filtering will be aborted\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/popper-class": {
      "type": "string",
      "description": "custom class name for Cascader's dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/change": {
      "type": "event",
      "description": "triggers when the binding value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/expand-change": {
      "type": "event",
      "description": "triggers when expand option changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/blur": {
      "type": "event",
      "description": "triggers when Cascader blurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/focus": {
      "type": "event",
      "description": "triggers when Cascader focuses\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/visible-change": {
      "type": "event",
      "description": "triggers when the dropdown appears/disappears\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader/remove-tag": {
      "type": "event",
      "description": "triggers when remove tag in multiple selection mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader-panel/model-value": {
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader-panel/options": {
      "type": "array",
      "description": "data of the options，the key of `value` and `label` can be customize by `Props`.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader-panel/props": {
      "type": "object",
      "description": "configuration options, see the following table.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader-panel/change": {
      "type": "event",
      "description": "triggers when the binding value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-cascader-panel/expand-change": {
      "type": "event",
      "description": "triggers when expand option changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/cascader)"
  },
  "el-checkbox/model-value": {
      "type": "string|number|boolean",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/label": {
      "type": "string|number|boolean",
      "description": "value of the Checkbox when used inside a `checkbox-group`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/true-label": {
      "type": "string|number",
      "description": "value of the Checkbox if it's checked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/false-label": {
      "type": "string|number",
      "description": "value of the Checkbox if it's not checked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/disabled": {
      "type": "boolean",
      "description": "whether the Checkbox is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/border": {
      "type": "boolean",
      "description": "whether to add a border around Checkbox, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/size": {
      "type": "string",
      "description": "size of the Checkbox, only works when `border` is true\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/name": {
      "type": "string",
      "description": "native 'name' attribute\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/checked": {
      "type": "boolean",
      "description": "if the Checkbox is checked, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/indeterminate": {
      "type": "boolean",
      "description": "same as `indeterminate` in native checkbox, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox/change": {
      "type": "event",
      "description": "triggers when the binding value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/model-value": {
      "type": "array",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/size": {
      "type": "string",
      "description": "size of checkbox buttons or bordered checkboxes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/disabled": {
      "type": "boolean",
      "description": "whether the nesting checkboxes are disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/min": {
      "type": "number",
      "description": "minimum number of checkbox checked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/max": {
      "type": "number",
      "description": "maximum number of checkbox checked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/text-color": {
      "type": "string",
      "description": "font color when button is active, default: #ffffff.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/fill": {
      "type": "string",
      "description": "border and background color when button is active, default: #409EFF.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-group/change": {
      "type": "event",
      "description": "triggers when the binding value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-button/label": {
      "type": "string|number|boolean",
      "description": "value of the checkbox when used inside a `checkbox-group`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-button/true-label": {
      "type": "string|number",
      "description": "value of the checkbox if it's checked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-button/false-label": {
      "type": "string|number",
      "description": "value of the checkbox if it's not checked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-button/disabled": {
      "type": "boolean",
      "description": "whether the checkbox is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-button/name": {
      "type": "string",
      "description": "native 'name' attribute\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-checkbox-button/checked": {
      "type": "boolean",
      "description": "if the checkbox is checked, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/checkbox)"
  },
  "el-collapse/model-value": {
      "type": "string ",
      "description": "currently active panel\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/collapse)"
  },
  "el-collapse/accordion": {
      "type": "boolean",
      "description": "whether to activate accordion mode, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/collapse)"
  },
  "el-collapse/change": {
      "type": "event",
      "description": "triggers when active panels change\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/collapse)"
  },
  "el-collapse-item/name": {
      "type": "string|number",
      "description": "unique identification of the panel\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/collapse)"
  },
  "el-collapse-item/title": {
      "type": "string",
      "description": "title of the panel\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/collapse)"
  },
  "el-collapse-item/disabled": {
      "type": "boolean",
      "description": "disable the collapse item\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/collapse)"
  },
  "el-color-picker/model-value": {
      "type": "string",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/disabled": {
      "type": "boolean",
      "description": "whether to disable the ColorPicker, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/size": {
      "type": "string",
      "description": "size of ColorPicker, default: medium / small / mini.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/show-alpha": {
      "type": "boolean",
      "description": "whether to display the alpha slider, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/color-format": {
      "type": "string",
      "options": [
          "hsl",
          "hsv",
          "hex",
          "rgb"
      ],
      "description": "color format of v-model, default: hex (when show-alpha is false)/ rgb (when show-alpha is true).\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/popper-class": {
      "type": "string",
      "description": "custom class name for ColorPicker's dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/predefine": {
      "type": "array",
      "description": "predefined color options\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/change": {
      "type": "event",
      "description": "triggers when input value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-color-picker/active-change": {
      "type": "event",
      "description": "triggers when the current active color changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/color-picker)"
  },
  "el-container/direction": {
      "type": "string",
      "options": [
          "horizontal",
          "vertical"
      ],
      "description": "layout direction for child elements, default: vertical when nested with `el-header` or `el-footer`; horizontal otherwise.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/container)"
  },
  "el-header/height": {
      "type": "string",
      "description": "height of the header, default: 60px.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/container)"
  },
  "el-aside/width": {
      "type": "string",
      "description": "width of the side section, default: 300px.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/container)"
  },
  "el-footer/height": {
      "type": "string",
      "description": "height of the footer, default: 60px.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/container)"
  },
  "el-date-picker/model-value": {
      "type": "date",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/readonly": {
      "type": "boolean",
      "description": "whether DatePicker is read only, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/disabled": {
      "type": "boolean",
      "description": "whether DatePicker is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/editable": {
      "type": "boolean",
      "description": "whether the input is editable, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/clearable": {
      "type": "boolean",
      "description": "whether to show clear button, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/placeholder": {
      "type": "string",
      "description": "placeholder in non-range mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/start-placeholder": {
      "type": "string",
      "description": "placeholder for the start date in range mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/end-placeholder": {
      "type": "string",
      "description": "placeholder for the end date in range mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/type": {
      "type": "string",
      "options": [
          "year",
          "month",
          "date",
          "dates",
          "datetime",
          "week",
          "datetimerange",
          "daterange",
          "monthrange"
      ],
      "description": "type of the picker, default: date.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/format": {
      "type": "string",
      "description": "format of the displayed value in the input box, default: yyyy-MM-dd.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/align": {
      "type": "left|center|right",
      "options": [
          "left"
      ],
      "description": "alignment\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/popper-class": {
      "type": "string",
      "description": "custom class name for DatePicker's dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/picker-options": {
      "type": "object",
      "description": "additional options, check the table below, default: {}.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/range-separator": {
      "type": "string",
      "description": "range separator, default: '-'.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/default-value": {
      "type": "date",
      "options": [
          "anything accepted by new Date()"
      ],
      "description": "optional, default date of the calendar\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/default-time": {
      "type": "string[]",
      "options": [
          "Array with length 2, each item is a string like 12:00:00. The first item for the start date and then second item for the end date"
      ],
      "description": "optional, the time value to use when selecting date range\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/value-format": {
      "type": "string",
      "description": "optional, format of binding value. If not specified, the binding value will be a Date object\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/name": {
      "type": "string",
      "description": "same as `name` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/unlink-panels": {
      "type": "boolean",
      "description": "unlink two date-panels in range-picker, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/prefix-icon": {
      "type": "string",
      "description": "Custom prefix icon class, default: el-icon-date.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/clear-icon": {
      "type": "string",
      "description": "Custom clear icon class, default: el-icon-circle-close.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/validate-event": {
      "type": "boolean",
      "description": "whether to trigger form validation, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/change": {
      "type": "event",
      "description": "triggers when user confirms the value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/blur": {
      "type": "event",
      "description": "triggers when Input blurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-date-picker/focus": {
      "type": "event",
      "description": "triggers when Input focuses\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/date-picker)"
  },
  "el-descriptions/border": {
      "type": "boolean",
      "description": "with or without border, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/column": {
      "type": "number",
      "description": "numbers of `Descriptions Item` in one line, default: 3.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/direction": {
      "type": "string",
      "options": [
          "vertical",
          "horizontal"
      ],
      "description": "direction of list, default: horizontal.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "size of list\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/title": {
      "type": "string",
      "description": "title text, display on the top left\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/extra": {
      "type": "string",
      "description": "extra text, display on the top right\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/colon": {
      "type": "boolean",
      "description": "change default props colon value of Descriptions Item, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/label-class-name": {
      "type": "string",
      "description": "custom label class name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/content-class-name": {
      "type": "string",
      "description": "custom content class name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/label-style": {
      "type": "object",
      "description": "custom label style\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions/content-style": {
      "type": "object",
      "description": "custom content style\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions-item/label": {
      "type": "string",
      "description": "label text\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions-item/span": {
      "type": "number",
      "description": "colspan of column, default: 1.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions-item/label-class-name": {
      "type": "string",
      "description": "custom label class name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions-item/content-class-name": {
      "type": "string",
      "description": "custom content class name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions-item/label-style": {
      "type": "object",
      "description": "custom label style\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-descriptions-item/content-style": {
      "type": "object",
      "description": "custom content style\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/descriptions)"
  },
  "el-dialog/visible": {
      "type": "boolean",
      "description": "visibility of Dialog, supports the .sync modifier, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/title": {
      "type": "string",
      "description": "title of Dialog. Can also be passed with a named slot (see the following table)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/width": {
      "type": "string",
      "description": "width of Dialog, default: 50%.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/fullscreen": {
      "type": "boolean",
      "description": "whether the Dialog takes up full screen, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/top": {
      "type": "string",
      "description": "value for `margin-top` of Dialog CSS, default: 15vh.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/modal": {
      "type": "boolean",
      "description": "whether a mask is displayed, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/modal-append-to-body": {
      "type": "boolean",
      "description": "whether to append modal to body element. If false, the modal will be appended to Dialog's parent element, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/append-to-body": {
      "type": "boolean",
      "description": "whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/lock-scroll": {
      "type": "boolean",
      "description": "whether scroll of body is disabled while Dialog is displayed, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/custom-class": {
      "type": "string",
      "description": "custom class names for Dialog\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/close-on-click-modal": {
      "type": "boolean",
      "description": "whether the Dialog can be closed by clicking the mask, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/close-on-press-escape": {
      "type": "boolean",
      "description": "whether the Dialog can be closed by pressing ESC, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/show-close": {
      "type": "boolean",
      "description": "whether to show a close button, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/before-close": {
      "type": "function，done is used to close the dialog",
      "description": "callback before Dialog closes, and it will prevent Dialog from closing\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/center": {
      "type": "boolean",
      "description": "whether to align the header and footer in center, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/destroy-on-close": {
      "type": "boolean",
      "description": "Destroy elements in Dialog when closed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/open": {
      "type": "event",
      "description": "triggers when the Dialog opens\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/opened": {
      "type": "event",
      "description": "triggers when the Dialog opening animation ends\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/close": {
      "type": "event",
      "description": "triggers when the Dialog closes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-dialog/closed": {
      "type": "event",
      "description": "triggers when the Dialog closing animation ends\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dialog)"
  },
  "el-divider/direction": {
      "type": "string",
      "options": [
          "horizontal",
          "vertical"
      ],
      "description": "Set divider's direction, default: horizontal.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/divider)"
  },
  "el-divider/content-position": {
      "type": "string",
      "options": [
          "left",
          "right",
          "center"
      ],
      "description": "customize the content on the divider line, default: center.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/divider)"
  },
  "el-drawer/open": {
      "type": "event",
      "description": "Triggered before Drawer opening animation begins\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/drawer)"
  },
  "el-drawer/opened": {
      "type": "event",
      "description": "Triggered after Drawer opening animation ended\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/drawer)"
  },
  "el-drawer/close": {
      "type": "event",
      "description": "Triggered before Drawer closing animation begins\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/drawer)"
  },
  "el-drawer/closed": {
      "type": "event",
      "description": "Triggered after Drawer closing animation ended\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/drawer)"
  },
  "el-dropdown/type": {
      "type": "string",
      "description": "menu button type, refer to `Button` Component, only works when `split-button` is true\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "menu size, also works on the split button\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/split-button": {
      "type": "boolean",
      "description": "whether a button group is displayed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/placement": {
      "type": "string",
      "options": [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end"
      ],
      "description": "placement of pop menu, default: bottom-end.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/trigger": {
      "type": "string",
      "options": [
          "hover",
          "click"
      ],
      "description": "how to trigger, default: hover.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/hide-on-click": {
      "type": "boolean",
      "description": "whether to hide menu after clicking menu-item, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/show-timeout": {
      "type": "number",
      "description": "Delay time before show a dropdown (only works when trigger is `hover`), default: 250.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/hide-timeout": {
      "type": "number",
      "description": "Delay time before hide a dropdown (only works when trigger is `hover`), default: 150.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/tabindex": {
      "type": "number",
      "description": "[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/disabled": {
      "type": "boolean",
      "description": "whether the Dropdown is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/click": {
      "type": "event",
      "description": "if `split-button` is `true`, triggers when left button is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/command": {
      "type": "event",
      "description": "triggers when a dropdown item is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown/visible-change": {
      "type": "event",
      "description": "triggers when the dropdown appears/disappears\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown-menu-item/command": {
      "type": "string|number|object",
      "description": "a command to be dispatched to Dropdown's `command` callback\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown-menu-item/disabled": {
      "type": "boolean",
      "description": "whether the item is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown-menu-item/divided": {
      "type": "boolean",
      "description": "whether a divider is displayed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-dropdown-menu-item/icon": {
      "type": "string",
      "description": "icon class name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/dropdown)"
  },
  "el-empty/image": {
      "type": "string",
      "description": "image URL\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/empty)"
  },
  "el-empty/image-size": {
      "type": "number",
      "description": "image size (width)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/empty)"
  },
  "el-empty/description": {
      "type": "string",
      "description": "description\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/empty)"
  },
  "el-form/model": {
      "type": "object",
      "description": "data of form component\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/rules": {
      "type": "object",
      "description": "validation rules of form\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/inline": {
      "type": "boolean",
      "description": "whether the form is inline, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/label-position": {
      "type": "string",
      "options": [
          "left",
          "right",
          "top"
      ],
      "description": "position of label. If set to 'left' or 'right', `label-width` prop is also required, default: right.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/label-width": {
      "type": "string",
      "description": "width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/label-suffix": {
      "type": "string",
      "description": "suffix of the label\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/hide-required-asterisk": {
      "type": "boolean",
      "description": "whether to hide a red asterisk (star) next to the required field label., default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/show-message": {
      "type": "boolean",
      "description": "whether to show the error message, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/inline-message": {
      "type": "boolean",
      "description": "whether to display the error message inline with the form item, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/status-icon": {
      "type": "boolean",
      "description": "whether to display an icon indicating the validation result, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/validate-on-rule-change": {
      "type": "boolean",
      "description": "whether to trigger validation when the `rules` prop is changed, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "control the size of components in this form\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/disabled": {
      "type": "boolean",
      "description": "whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form/validate": {
      "type": "event",
      "description": "triggers after a form item is validated\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/prop": {
      "type": "string",
      "options": [
          "keys of model that passed to form"
      ],
      "description": "a key of `model`. In the use of validate and resetFields method, the attribute is required\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/label": {
      "type": "string",
      "description": "label\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/label-width": {
      "type": "string",
      "description": "width of label, e.g. '50px'. Width `auto` is supported.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/required": {
      "type": "boolean",
      "description": "whether the field is required or not, will be determined by validation rules if omitted, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/rules": {
      "type": "object",
      "description": "validation rules of form\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/error": {
      "type": "string",
      "description": "field error message, set its value and the field will validate error and show this message immediately\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/show-message": {
      "type": "boolean",
      "description": "whether to show the error message, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/inline-message": {
      "type": "boolean",
      "description": "inline style validate message, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-form-item/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "control the size of components in this form-item\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/form)"
  },
  "el-image/src": {
      "type": "string",
      "description": "Image source, same as native\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/fit": {
      "type": "string",
      "description": "Indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/alt": {
      "type": "string",
      "description": "Native alt\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/referrer-policy": {
      "type": "string",
      "description": "Native referrerPolicy\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/lazy": {
      "type": "boolean",
      "description": "Whether to use lazy load, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/scroll-container": {
      "type": "string|htmlelement",
      "description": "The container to add scroll listener when using lazy load, default: The nearest parent container whose overflow property is auto or scroll.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/preview-src-list": {
      "type": "array",
      "description": "allow big image preview\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/z-index": {
      "type": "number",
      "description": "set image preview z-index, default: 2000.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/load": {
      "type": "event",
      "description": "Same as native load\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-image/error": {
      "type": "event",
      "description": "Same as native error\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/image)"
  },
  "el-infinite-scroll/infinite-scroll-disabled": {
      "type": "boolean",
      "description": "is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/infiniteScroll)"
  },
  "el-infinite-scroll/infinite-scroll-delay": {
      "type": "number",
      "description": "throttle delay (ms), default: 200.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/infiniteScroll)"
  },
  "el-infinite-scroll/infinite-scroll-distance": {
      "type": "number",
      "description": "trigger distance (px), default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/infiniteScroll)"
  },
  "el-infinite-scroll/infinite-scroll-immediate": {
      "type": "boolean",
      "description": "Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state., default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/infiniteScroll)"
  },
  "el-input-number/model-value": {
      "type": "number",
      "description": "binding value, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/min": {
      "type": "number",
      "description": "the minimum allowed value, default: -Infinity.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/max": {
      "type": "number",
      "description": "the maximum allowed value, default: Infinity.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/step": {
      "type": "number",
      "description": "incremental step, default: 1.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/step-strictly": {
      "type": "boolean",
      "description": "whether input value can only be multiple of step, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/precision": {
      "type": "number",
      "description": "precision of input value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/size": {
      "type": "string",
      "options": [
          "large",
          "small"
      ],
      "description": "size of the component\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/disabled": {
      "type": "boolean",
      "description": "whether the component is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/controls": {
      "type": "boolean",
      "description": "whether to enable the control buttons, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/controls-position": {
      "type": "string",
      "options": [
          "right"
      ],
      "description": "position of the control buttons\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/name": {
      "type": "string",
      "description": "same as `name` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/label": {
      "type": "string",
      "description": "label text\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/placeholder": {
      "type": "string",
      "description": "placeholder in input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/change": {
      "type": "event",
      "description": "triggers when the value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/blur": {
      "type": "event",
      "description": "triggers when Input blurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input-number/focus": {
      "type": "event",
      "description": "triggers when Input focuses\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input-number)"
  },
  "el-input/type": {
      "type": "string",
      "description": "type of input, default: text.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/model-value": {
      "type": "string|number",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/maxlength": {
      "type": "number",
      "description": "same as `maxlength` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/minlength": {
      "type": "number",
      "description": "same as `minlength` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/show-word-limit": {
      "type": "boolean",
      "description": "whether show word count，only works when `type` is 'text' or 'textarea', default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/placeholder": {
      "type": "string",
      "description": "placeholder of Input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/clearable": {
      "type": "boolean",
      "description": "whether to show clear button, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/show-password": {
      "type": "boolean",
      "description": "whether to show toggleable password input, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/disabled": {
      "type": "boolean",
      "description": "whether Input is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "size of Input, works when `type` is not 'textarea'\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/prefix-icon": {
      "type": "string",
      "description": "prefix icon class\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/suffix-icon": {
      "type": "string",
      "description": "suffix icon class\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/rows": {
      "type": "number",
      "description": "number of rows of textarea, only works when `type` is 'textarea', default: 2.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/autosize": {
      "type": "boolean|object",
      "description": "whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 }, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/autocomplete": {
      "type": "string",
      "options": [
          "on",
          "off"
      ],
      "description": "same as `autocomplete` in native input, default: off.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/auto-complete": {
      "type": "string",
      "options": [
          "on",
          "off"
      ],
      "description": "@DEPRECATED in next major version, default: off.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/name": {
      "type": "string",
      "description": "same as `name` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/readonly": {
      "type": "boolean",
      "description": "same as `readonly` in native input, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/max": {
      "description": "same as `max` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/min": {
      "description": "same as `min` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/step": {
      "description": "same as `step` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/resize": {
      "type": "string",
      "options": [
          "none, both, horizontal, vertical"
      ],
      "description": "control the resizability\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/autofocus": {
      "type": "boolean",
      "description": "same as `autofocus` in native input, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/form": {
      "type": "string",
      "description": "same as `form` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/label": {
      "type": "string",
      "description": "label text\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/tabindex": {
      "type": "string",
      "description": "input tabindex\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/validate-event": {
      "type": "boolean",
      "description": "whether to trigger form validation, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/blur": {
      "type": "event",
      "description": "triggers when Input blurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/focus": {
      "type": "event",
      "description": "triggers when Input focuses\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/change": {
      "type": "event",
      "description": "triggers only when the input box loses focus or the user presses Enter\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/input": {
      "type": "event",
      "description": "triggers when the Input value change\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-input/clear": {
      "type": "event",
      "description": "triggers when the Input is cleared by clicking the clear button\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/placeholder": {
      "type": "string",
      "description": "the placeholder of Autocomplete\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/clearable": {
      "type": "boolean",
      "description": "whether to show clear button, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/disabled": {
      "type": "boolean",
      "description": "whether Autocomplete is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/value-key": {
      "type": "string",
      "description": "key name of the input suggestion object for display, default: value.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/icon": {
      "type": "string",
      "description": "icon name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/value": {
      "type": "string",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/debounce": {
      "type": "number",
      "description": "debounce delay when typing, in milliseconds, default: 300.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/placement": {
      "type": "string",
      "description": "placement of the popup menu, default: bottom-start.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/fetch-suggestions": {
      "type": "function",
      "description": "a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/popper-class": {
      "type": "string",
      "description": "custom class name for autocomplete's dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/trigger-on-focus": {
      "type": "boolean",
      "description": "whether show suggestions when input focus, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/name": {
      "type": "string",
      "description": "same as `name` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/select-when-unmatched": {
      "type": "boolean",
      "description": "whether to emit a `select` event on enter when there is no autocomplete match, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/label": {
      "type": "string",
      "description": "label text\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/prefix-icon": {
      "type": "string",
      "description": "prefix icon class\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/suffix-icon": {
      "type": "string",
      "description": "suffix icon class\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/hide-loading": {
      "type": "boolean",
      "description": "whether to hide the loading icon in remote search, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/popper-append-to-body": {
      "type": "boolean",
      "description": "whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/highlight-first-item": {
      "type": "boolean",
      "description": "whether to highlight first item in remote search suggestions by default, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/select": {
      "type": "event",
      "description": "triggers when a suggestion is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-autocomplete/change": {
      "type": "event",
      "description": "triggers when the icon inside Input value change\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/input)"
  },
  "el-row/gutter": {
      "type": "number",
      "description": "grid spacing, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-row/type": {
      "type": "string",
      "description": "layout mode, you can use flex, works in modern browsers\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-row/justify": {
      "type": "string",
      "options": [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
      ],
      "description": "horizontal alignment of flex layout, default: start.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-row/align": {
      "type": "string",
      "options": [
          "top",
          "middle",
          "bottom"
      ],
      "description": "vertical alignment of flex layout\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-row/tag": {
      "type": "string",
      "description": "custom element tag, default: div.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/span": {
      "type": "number",
      "description": "number of column the grid spans, default: 24.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/offset": {
      "type": "number",
      "description": "number of spacing on the left side of the grid, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/push": {
      "type": "number",
      "description": "number of columns that grid moves to the right, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/pull": {
      "type": "number",
      "description": "number of columns that grid moves to the left, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/xs": {
      "type": "number|object ",
      "description": "`<768px` Responsive columns or column props object\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/sm": {
      "type": "number|object ",
      "description": "`≥768px` Responsive columns or column props object\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/md": {
      "type": "number|object ",
      "description": "`≥992px` Responsive columns or column props object\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/lg": {
      "type": "number|object ",
      "description": "`≥1200px` Responsive columns or column props object\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/xl": {
      "type": "number|object ",
      "description": "`≥1920px` Responsive columns or column props object\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-col/tag": {
      "type": "string",
      "description": "custom element tag, default: div.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/layout)"
  },
  "el-link/type": {
      "type": "string",
      "description": "type, default: default.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/link)"
  },
  "el-link/underline": {
      "type": "boolean",
      "description": "whether the component has underline, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/link)"
  },
  "el-link/disabled": {
      "type": "boolean",
      "description": "whether the component is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/link)"
  },
  "el-link/href": {
      "type": "string",
      "description": "same as native hyperlink's `href`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/link)"
  },
  "el-link/icon": {
      "type": "string",
      "description": "class name of icon\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/link)"
  },
  "el-menu/select": {
      "type": "event",
      "description": "callback function when menu is activated\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/menu)"
  },
  "el-menu/open": {
      "type": "event",
      "description": "callback function when sub-menu expands\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/menu)"
  },
  "el-menu/close": {
      "type": "event",
      "description": "callback function when sub-menu collapses\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/menu)"
  },
  "el-menu-item/click": {
      "type": "event",
      "description": "callback function when menu-item is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/menu)"
  },
  "el-page-header/title": {
      "type": "string",
      "description": "main title, default: Back.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/page-header)"
  },
  "el-page-header/content": {
      "type": "string",
      "description": "content\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/page-header)"
  },
  "el-page-header/back": {
      "type": "event",
      "description": "triggers when right side is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/page-header)"
  },
  "el-pagination/small": {
      "type": "boolean",
      "description": "whether to use small pagination, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/background": {
      "type": "boolean",
      "description": "whether the buttons have a background color, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/page-size": {
      "type": "number",
      "description": "item count of each page, supports the .sync modifier, default: 10.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/total": {
      "type": "number",
      "description": "total item count\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/page-count": {
      "type": "number",
      "description": "total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/pager-count": {
      "type": "number",
      "options": [
          "odd number between 5 and 21"
      ],
      "description": "number of pagers. Pagination collapses when the total page count exceeds this value, default: 7.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/current-page": {
      "type": "number",
      "description": "current page number, supports the .sync modifier, default: 1.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/layout": {
      "type": "string",
      "options": [
          "sizes, prev, pager, next, jumper, ->, total, slot"
      ],
      "description": "layout of Pagination, elements separated with a comma, default: 'prev, pager, next, jumper, ->, total'.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/page-sizes": {
      "type": "number[]",
      "description": "options of item count per page, default: [10, 20, 30, 40, 50, 100].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/popper-class": {
      "type": "string",
      "description": "custom class name for the page size Select's dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/prev-text": {
      "type": "string",
      "description": "text for the prev button\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/next-text": {
      "type": "string",
      "description": "text for the next button\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/disabled": {
      "type": "boolean",
      "description": "whether Pagination is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/hide-on-single-page": {
      "type": "boolean",
      "description": "whether to hide when there's only one page\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/size-change": {
      "type": "event",
      "description": "triggers when `page-size` changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/current-change": {
      "type": "event",
      "description": "triggers when `current-page` changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/prev-click": {
      "type": "event",
      "description": "triggers when the prev button is clicked and current page changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-pagination/next-click": {
      "type": "event",
      "description": "triggers when the next button is clicked and current page changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/pagination)"
  },
  "el-popconfirm/title": {
      "type": "string",
      "description": "Title\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/confirm-button-text": {
      "type": "string",
      "description": "Confirm button text\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/cancel-button-text": {
      "type": "string",
      "description": "Cancel button text\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/confirm-button-type": {
      "type": "string",
      "description": "Confirm button type, default: Primary.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/cancel-button-type": {
      "type": "string",
      "description": "Cancel button type, default: Text.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/icon": {
      "type": "string",
      "description": "Icon, default: el-icon-question.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/icon-color": {
      "type": "string",
      "description": "Icon color, default: #f90.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/hide-icon": {
      "type": "boolean",
      "description": "is hide Icon, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/confirm": {
      "type": "event",
      "description": "triggers when click confirm button\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popconfirm/cancel": {
      "type": "event",
      "description": "triggers when click cancel button\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popconfirm)"
  },
  "el-popover/trigger": {
      "type": "string",
      "options": [
          "click",
          "focus",
          "hover",
          "manual"
      ],
      "description": "how the popover is triggered, default: click.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/title": {
      "type": "string",
      "description": "popover title\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/content": {
      "type": "string",
      "description": "popover content, can be replaced with a default `slot`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/width": {
      "type": "string|number",
      "description": "popover width, default: Min width 150px.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/placement": {
      "type": "string",
      "options": [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end"
      ],
      "description": "popover placement, default: bottom.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/disabled": {
      "type": "boolean",
      "description": "whether Popover is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/model-value": {
      "type": "boolean",
      "description": "whether popover is visible, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/offset": {
      "type": "number",
      "description": "popover offset, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/transition": {
      "type": "string",
      "description": "popover transition animation, default: el-fade-in-linear.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/visible-arrow": {
      "type": "boolean",
      "description": "whether a tooltip arrow is displayed or not. For more info, please refer to [Vue-popper](https://github.com/element-component/vue-popper), default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/popper-options": {
      "type": "object",
      "description": "parameters for [popper.js](https://popper.js.org/documentation.html), default: { boundariesElement: 'body', gpuAcceleration: false }.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/popper-class": {
      "type": "string",
      "description": "custom class name for popover\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/open-delay": {
      "type": "number",
      "description": "delay before appearing when `trigger` is hover, in milliseconds\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/close-delay": {
      "type": "number",
      "description": "delay before disappearing when `trigger` is hover, in milliseconds, default: 200.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/tabindex": {
      "type": "number",
      "description": "[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/show": {
      "type": "event",
      "description": "triggers when popover shows\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/after-enter": {
      "type": "event",
      "description": "triggers when the entering transition ends\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/hide": {
      "type": "event",
      "description": "triggers when popover hides\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-popover/after-leave": {
      "type": "event",
      "description": "triggers when the leaving transition ends\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/popover)"
  },
  "el-progress/percentage": {
      "type": "number",
      "options": [
          "0-100"
      ],
      "description": "percentage, **required**, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-progress/type": {
      "type": "string",
      "options": [
          "line",
          "circle",
          "dashboard"
      ],
      "description": "the type of progress bar, default: line.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-progress/status": {
      "type": "string",
      "options": [
          "success",
          "exception",
          "warning"
      ],
      "description": "the current status of progress bar\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-progress/color": {
      "type": "string|function|array",
      "description": "background color of progress bar. Overrides `status` prop, default: ''.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-progress/width": {
      "type": "number",
      "description": "the canvas width of circle progress bar, default: 126.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-progress/show-text": {
      "type": "boolean",
      "description": "whether to show percentage, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-progress/stroke-linecap": {
      "type": "string",
      "options": [
          "butt",
          "round",
          "square"
      ],
      "description": "circle/dashboard type shape at the end path, default: round.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-progress/format": {
      "type": "function",
      "description": "custom text format\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/progress)"
  },
  "el-radio/model-value": {
      "type": "string|number|boolean",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio/label": {
      "type": "string|number|boolean",
      "description": "the value of Radio\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio/disabled": {
      "type": "boolean",
      "description": "whether Radio is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio/border": {
      "type": "boolean",
      "description": "whether to add a border around Radio, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "size of the Radio, only works when `border` is true\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio/name": {
      "type": "string",
      "description": "native 'name' attribute\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio/change": {
      "type": "event",
      "description": "triggers when the bound value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-group/model-value": {
      "type": "string|number|boolean",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-group/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "the size of radio buttons or bordered radios\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-group/disabled": {
      "type": "boolean",
      "description": "whether the nesting radios are disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-group/text-color": {
      "type": "string",
      "description": "font color when button is active, default: #ffffff.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-group/fill": {
      "type": "string",
      "description": "border and background color when button is active, default: #409EFF.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-group/change": {
      "type": "event",
      "description": "triggers when the bound value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-button/label": {
      "type": "string|number",
      "description": "the value of radio\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-button/disabled": {
      "type": "boolean",
      "description": "whether radio is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-radio-button/name": {
      "type": "string",
      "description": "native 'name' attribute\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/radio)"
  },
  "el-rate/model-value": {
      "type": "number",
      "description": "binding value, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/max": {
      "type": "number",
      "description": "max rating score, default: 5.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/disabled": {
      "type": "boolean",
      "description": "whether Rate is read-only, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/allow-half": {
      "type": "boolean",
      "description": "whether picking half start is allowed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/low-threshold": {
      "type": "number",
      "description": "threshold value between low and medium level. The value itself will be included in low level, default: 2.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/high-threshold": {
      "type": "number",
      "description": "threshold value between medium and high level. The value itself will be included in high level, default: 4.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/colors": {
      "type": "array|object",
      "description": "colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color, default: ['#F7BA2A', '#F7BA2A', '#F7BA2A'].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/void-color": {
      "type": "string",
      "description": "color of unselected icons, default: #C6D1DE.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/disabled-void-color": {
      "type": "string",
      "description": "color of unselected read-only icons, default: #EFF2F7.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/icon-classes": {
      "type": "array|object",
      "description": "class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class, default: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/void-icon-class": {
      "type": "string",
      "description": "class name of unselected icons, default: el-icon-star-off.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/disabled-void-icon-class": {
      "type": "string",
      "description": "class name of unselected read-only icons, default: el-icon-star-on.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/show-text": {
      "type": "boolean",
      "description": "whether to display texts, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/show-score": {
      "type": "boolean",
      "description": "whether to display current score. show-score and show-text cannot be true at the same time, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/text-color": {
      "type": "string",
      "description": "color of texts, default: #1F2D3D.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/texts": {
      "type": "array",
      "description": "text array, default: ['极差', '失望', '一般', '满意', '惊喜'].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/score-template": {
      "type": "string",
      "description": "score template, default: {value}.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-rate/change": {
      "type": "event",
      "description": "Triggers when rate value is changed\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/rate)"
  },
  "el-result/title": {
      "type": "string",
      "description": "title\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/result)"
  },
  "el-result/sub-title": {
      "type": "string",
      "description": "sub title\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/result)"
  },
  "el-result/icon": {
      "type": "string",
      "options": [
          "success",
          "warning",
          "info",
          "error"
      ],
      "description": "icon type, default: info.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/result)"
  },
  "el-select/model-value": {
      "type": "boolean|string|number",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/multiple": {
      "type": "boolean",
      "description": "whether multiple-select is activated, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/disabled": {
      "type": "boolean",
      "description": "whether Select is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/value-key": {
      "type": "string",
      "description": "unique identity key name for value, required when value is an object, default: value.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/size": {
      "type": "string",
      "options": [
          "large",
          "small",
          "mini"
      ],
      "description": "size of Input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/clearable": {
      "type": "boolean",
      "description": "whether select can be cleared, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/collapse-tags": {
      "type": "boolean",
      "description": "whether to collapse tags to a text when multiple selecting, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/multiple-limit": {
      "type": "number",
      "description": "maximum number of options user can select when `multiple` is `true`. No limit when set to 0, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/name": {
      "type": "string",
      "description": "the name attribute of select input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/autocomplete": {
      "type": "string",
      "description": "the autocomplete attribute of select input, default: off.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/auto-complete": {
      "type": "string",
      "description": "@DEPRECATED in next major version, default: off.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/placeholder": {
      "type": "string",
      "description": "placeholder, default: Select.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/filterable": {
      "type": "boolean",
      "description": "whether Select is filterable, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/allow-create": {
      "type": "boolean",
      "description": "whether creating new items is allowed. To use this, `filterable` must be true, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/filter-method": {
      "type": "function",
      "description": "custom filter method\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/remote": {
      "type": "boolean",
      "description": "whether options are loaded from server, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/remote-method": {
      "type": "function",
      "description": "custom remote search method\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/loading": {
      "type": "boolean",
      "description": "whether Select is loading data from server, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/loading-text": {
      "type": "string",
      "description": "displayed text while loading data from server, default: Loading.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/no-match-text": {
      "type": "string",
      "description": "displayed text when no data matches the filtering query, you can also use slot `empty`, default: No matching data.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/no-data-text": {
      "type": "string",
      "description": "displayed text when there is no options, you can also use slot `empty`, default: No data.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/popper-class": {
      "type": "string",
      "description": "custom class name for Select's dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/reserve-keyword": {
      "type": "boolean",
      "description": "when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/default-first-option": {
      "type": "boolean",
      "description": "select first matching option on enter key. Use with `filterable` or `remote`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/popper-append-to-body": {
      "type": "boolean",
      "description": "whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/automatic-dropdown": {
      "type": "boolean",
      "description": "for non-filterable Select, this prop decides if the option menu pops up when the input is focused, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/change": {
      "type": "event",
      "description": "triggers when the selected value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/visible-change": {
      "type": "event",
      "description": "triggers when the dropdown appears/disappears\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/remove-tag": {
      "type": "event",
      "description": "triggers when a tag is removed in multiple mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/clear": {
      "type": "event",
      "description": "triggers when the clear icon is clicked in a clearable Select\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/blur": {
      "type": "event",
      "description": "triggers when Input blurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-select/focus": {
      "type": "event",
      "description": "triggers when Input focuses\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-option-group/label": {
      "type": "string",
      "description": "name of the group\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-option-group/disabled": {
      "type": "boolean",
      "description": "whether to disable all options in this group, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-option/value": {
      "type": "string|number|object",
      "description": "value of option\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-option/label": {
      "type": "string|number",
      "description": "label of option, same as `value` if omitted\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-option/disabled": {
      "type": "boolean",
      "description": "whether option is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/select)"
  },
  "el-skeleton/animated": {
      "type": "boolean",
      "description": "whether showing the animation, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/skeleton)"
  },
  "el-skeleton/count": {
      "type": "number",
      "description": "how many fake items to render to the DOM, default: 1.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/skeleton)"
  },
  "el-skeleton/loading": {
      "type": "boolean",
      "description": "whether showing the skeleton, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/skeleton)"
  },
  "el-skeleton/rows": {
      "type": "number",
      "description": "numbers of the row, only useful when no template slot were given, default: 4.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/skeleton)"
  },
  "el-skeleton/throttle": {
      "type": "number",
      "description": "Rendering delay in millseconds, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/skeleton)"
  },
  "el-skeleton-item/variant": {
      "type": "enum",
      "description": "The current rendering skeleton type, default: text.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/skeleton)"
  },
  "el-slider/model-value": {
      "type": "number",
      "description": "binding value, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/min": {
      "type": "number",
      "description": "minimum value, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/max": {
      "type": "number",
      "description": "maximum value, default: 100.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/disabled": {
      "type": "boolean",
      "description": "whether Slider is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/step": {
      "type": "number",
      "description": "step size, default: 1.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/show-input": {
      "type": "boolean",
      "description": "whether to display an input box, works when `range` is false, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/show-input-controls": {
      "type": "boolean",
      "description": "whether to display control buttons when `show-input` is true, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/input-size": {
      "type": "string",
      "options": [
          "large",
          "medium",
          "small",
          "mini"
      ],
      "description": "size of the input box, default: small.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/show-stops": {
      "type": "boolean",
      "description": "whether to display breakpoints, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/show-tooltip": {
      "type": "boolean",
      "description": "whether to display tooltip value, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/format-tooltip": {
      "type": "function",
      "description": "format to display tooltip value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/range": {
      "type": "boolean",
      "description": "whether to select a range, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/vertical": {
      "type": "boolean",
      "description": "vertical mode, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/height": {
      "type": "string",
      "description": "Slider height, required in vertical mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/label": {
      "type": "string",
      "description": "label for screen reader\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/debounce": {
      "type": "number",
      "description": "debounce delay when typing, in milliseconds, works when `show-input` is true, default: 300.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/tooltip-class": {
      "type": "string",
      "description": "custom class name for the tooltip\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/marks": {
      "type": "object",
      "description": "marks， type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/change": {
      "type": "event",
      "description": "triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-slider/input": {
      "type": "event",
      "description": "triggers when the data changes (It'll be emitted in real time during sliding)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/slider)"
  },
  "el-steps/space": {
      "type": "number|string",
      "description": "the spacing of each step, will be responsive if omitted. Supports percentage.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-steps/direction": {
      "type": "string",
      "options": [
          "vertical",
          "horizontal"
      ],
      "description": "display direction, default: horizontal.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-steps/active": {
      "type": "number",
      "description": "current activation step, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-steps/process-status": {
      "type": "string",
      "options": [
          "wait",
          "process",
          "finish",
          "error",
          "success"
      ],
      "description": "status of current step, default: process.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-steps/finish-status": {
      "type": "string",
      "options": [
          "wait",
          "process",
          "finish",
          "error",
          "success"
      ],
      "description": "status of end step, default: finish.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-steps/align-center": {
      "type": "boolean",
      "description": "center title and description, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-steps/simple": {
      "type": "boolean",
      "description": "whether to apply simple theme, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-step/title": {
      "type": "string",
      "description": "step title\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-step/description": {
      "type": "string",
      "description": "step description\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-step/icon": {
      "type": "step icon's class name. icons can be passed via named slot as well",
      "options": [
          "string"
      ],
      "description": "step icon\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-step/status": {
      "type": "wait|process|finish|error|success",
      "description": "current status. It will be automatically set by Steps if not configured.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/steps)"
  },
  "el-switch/model-value": {
      "type": "boolean|string|number",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/disabled": {
      "type": "boolean",
      "description": "whether Switch is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/width": {
      "type": "number",
      "description": "width of Switch, default: 40.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/active-icon-class": {
      "type": "string",
      "description": "class name of the icon displayed when in `on` state, overrides `active-text`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/inactive-icon-class": {
      "type": "string",
      "description": "class name of the icon displayed when in `off` state, overrides `inactive-text`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/active-text": {
      "type": "string",
      "description": "text displayed when in `on` state\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/inactive-text": {
      "type": "string",
      "description": "text displayed when in `off` state\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/on-text": {
      "type": "string",
      "description": "text displayed when in on state\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/off-text": {
      "type": "string",
      "description": "text displayed when in off state\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/active-value": {
      "type": "boolean|string|number",
      "description": "switch value when in `on` state, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/inactive-value": {
      "type": "boolean|string|number",
      "description": "switch value when in `off` state, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/name": {
      "type": "string",
      "description": "input name of Switch\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/validate-event": {
      "type": "boolean",
      "description": "whether to trigger form validation, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-switch/change": {
      "type": "event",
      "description": "triggers when value changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/switch)"
  },
  "el-table/data": {
      "type": "array",
      "description": "Table data\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/height": {
      "type": "string|number",
      "description": "Table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/max-height": {
      "type": "string|number",
      "description": "Table's max-height. The legal value is a number or the height in px.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/size": {
      "type": "string",
      "options": [
          "medium",
          "small"
      ],
      "description": "size of Table\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/fit": {
      "type": "boolean",
      "description": "whether width of column automatically fits its container, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/show-header": {
      "type": "boolean",
      "description": "whether Table header is visible, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/highlight-current-row": {
      "type": "boolean",
      "description": "whether current row is highlighted, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/current-row-key": {
      "type": "string|number",
      "description": "key of current row, a set only prop\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/row-class-name": {
      "type": "function|string",
      "description": "function that returns custom class names for a row, or a string assigning class names for every row\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/row-style": {
      "type": "function|object",
      "description": "function that returns custom style for a row, or an object assigning custom style for every row\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/cell-class-name": {
      "type": "function|string",
      "description": "function that returns custom class names for a cell, or a string assigning class names for every cell\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/cell-style": {
      "type": "function|object",
      "description": "function that returns custom style for a cell, or an object assigning custom style for every cell\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/header-row-class-name": {
      "type": "function|string",
      "description": "function that returns custom class names for a row in table header, or a string assigning class names for every row in table header\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/header-row-style": {
      "type": "function|object",
      "description": "function that returns custom style for a row in table header, or an object assigning custom style for every row in table header\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/header-cell-class-name": {
      "type": "function|string",
      "description": "function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/header-cell-style": {
      "type": "function|object",
      "description": "function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/row-key": {
      "type": "function|string",
      "description": "key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/empty-text": {
      "type": "string",
      "description": "Displayed text when data is empty. You can customize this area with `slot=\"empty\"`, default: No Data.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/default-expand-all": {
      "type": "boolean",
      "description": "whether expand all rows by default, works when the table has a column type=\"expand\" or contains tree structure data, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/expand-row-keys": {
      "type": "array",
      "description": "set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/default-sort": {
      "type": "object",
      "options": [
          "order: ascending, descending"
      ],
      "description": "set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order, default: if `prop` is set, and `order` is not set, then `order` is default to ascending.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/tooltip-effect": {
      "type": "string",
      "options": [
          "dark",
          "light"
      ],
      "description": "tooltip `effect` property\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/show-summary": {
      "type": "boolean",
      "description": "whether to display a summary row, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/sum-text": {
      "type": "string",
      "description": "displayed text for the first column of summary row, default: Sum.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/summary-method": {
      "type": "function",
      "description": "custom summary method\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/span-method": {
      "type": "function",
      "description": "method that returns rowspan and colspan\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/select-on-indeterminate": {
      "type": "boolean",
      "description": "controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected., default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/indent": {
      "type": "number",
      "description": "horizontal indentation of tree data, default: 8.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/lazy": {
      "type": "boolean",
      "description": "whether to lazy loading data\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/load": {
      "type": "function",
      "description": "method for loading child row data, only works when `lazy` is true\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/tree-props": {
      "type": "object",
      "description": "configuration for rendering nested data, default: { hasChildren: 'hasChildren', children: 'children' }.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/select": {
      "type": "event",
      "description": "triggers when user clicks the checkbox in a row\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/select-all": {
      "type": "event",
      "description": "triggers when user clicks the checkbox in table header\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/selection-change": {
      "type": "event",
      "description": "triggers when selection changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/cell-mouse-enter": {
      "type": "event",
      "description": "triggers when hovering into a cell\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/cell-mouse-leave": {
      "type": "event",
      "description": "triggers when hovering out of a cell\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/cell-click": {
      "type": "event",
      "description": "triggers when clicking a cell\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/cell-dblclick": {
      "type": "event",
      "description": "triggers when double clicking a cell\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/row-click": {
      "type": "event",
      "description": "triggers when clicking a row\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/row-contextmenu": {
      "type": "event",
      "description": "triggers when user right clicks on a row\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/row-dblclick": {
      "type": "event",
      "description": "triggers when double clicking a row\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/header-click": {
      "type": "event",
      "description": "triggers when clicking a column header\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/header-contextmenu": {
      "type": "event",
      "description": "triggers when user right clicks on a column header\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/sort-change": {
      "type": "event",
      "description": "triggers when Table's sorting changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/filter-change": {
      "type": "event",
      "description": "column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/current-change": {
      "type": "event",
      "description": "triggers when current row changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/header-dragend": {
      "type": "event",
      "description": "triggers after changing a column's width by dragging the column header's border\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table/expand-change": {
      "type": "event",
      "description": "triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/type": {
      "type": "string",
      "options": [
          "selection",
          "index",
          "expand"
      ],
      "description": "type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/index": {
      "type": "number|function",
      "description": "customize indices for each row, works on columns with `type=index`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/label": {
      "type": "string",
      "description": "column label\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/column-key": {
      "type": "string",
      "options": [
          "string"
      ],
      "description": "column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/prop": {
      "type": "string",
      "description": "field name. You can also use its alias: `property`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/width": {
      "type": "string",
      "description": "column width\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/min-width": {
      "type": "string",
      "description": "column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/fixed": {
      "type": "string|boolean",
      "options": [
          "true",
          "left",
          "right"
      ],
      "description": "whether column is fixed at left/right. Will be fixed at left if `true`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/render-header": {
      "type": "function",
      "description": "render function for table header of this column\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/sortable": {
      "type": "boolean|string",
      "options": [
          "true, false, custom"
      ],
      "description": "whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/sort-method": {
      "type": "function",
      "description": "sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/sort-by": {
      "type": "function|string|array",
      "description": "specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/sort-orders": {
      "type": "array",
      "options": [
          "the elements in the array need to be one of the following: ascending, descending and null (restores to the original order)"
      ],
      "description": "the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array, default: ['ascending', 'descending', null].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/resizable": {
      "type": "boolean",
      "description": "whether column width can be resized, works when `border` of `el-table` is `true`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/formatter": {
      "type": "function",
      "description": "function that formats cell content\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/show-overflow-tooltip": {
      "type": "boolean",
      "description": "whether to hide extra content and show them in a tooltip when hovering on the cell, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/align": {
      "type": "string",
      "options": [
          "left",
          "center",
          "right"
      ],
      "description": "alignment, default: left.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/header-align": {
      "type": "string",
      "options": [
          "left",
          "center",
          "right"
      ],
      "description": "alignment of the table header. If omitted, the value of the above `align` attribute will be applied\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/class-name": {
      "type": "string",
      "description": "class name of cells in the column\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/label-class-name": {
      "type": "string",
      "description": "class name of the label of this column\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/selectable": {
      "type": "function",
      "description": "function that determines if a certain row can be selected, works when `type` is 'selection'\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/reserve-selection": {
      "type": "boolean",
      "description": "whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/filters": {
      "type": "array[{ text|value }]",
      "description": "an array of data filtering options. For each element in this array, `text` and `value` are required\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/filter-placement": {
      "type": "string",
      "options": [
          "same as Tooltip's placement"
      ],
      "description": "placement for the filter dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/filter-multiple": {
      "type": "boolean",
      "description": "whether data filtering supports multiple options, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/filter-method": {
      "type": "function",
      "description": "data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-table-column/filtered-value": {
      "type": "array",
      "description": "filter value for selected data, might be useful when table header is rendered with `render-header`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/table)"
  },
  "el-tabs/model-value": {
      "type": "string",
      "description": "binding value, name of the selected tab, default: name of first tab.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/type": {
      "type": "string",
      "options": [
          "card",
          "border-card"
      ],
      "description": "type of Tab\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/closable": {
      "type": "boolean",
      "description": "whether Tab is closable, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/addable": {
      "type": "boolean",
      "description": "whether Tab is addable, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/editable": {
      "type": "boolean",
      "description": "whether Tab is addable and closable, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/tab-position": {
      "type": "string",
      "options": [
          "top",
          "right",
          "bottom",
          "left"
      ],
      "description": "position of tabs, default: top.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/stretch": {
      "type": "boolean",
      "description": "whether width of tab automatically fits its container, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/before-leave": {
      "type": "function",
      "description": "hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/tab-click": {
      "type": "event",
      "description": "triggers when a tab is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/tab-remove": {
      "type": "event",
      "description": "triggers when tab-remove button is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/tab-add": {
      "type": "event",
      "description": "triggers when tab-add button is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tabs/edit": {
      "type": "event",
      "description": "triggers when tab-add button or tab-remove is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tab-pane/label": {
      "type": "string",
      "description": "title of the tab\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tab-pane/disabled": {
      "type": "boolean",
      "description": "whether Tab is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tab-pane/name": {
      "type": "string",
      "description": "identifier corresponding to the name of Tabs, representing the alias of the tab-pane, default: ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1'.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tab-pane/closable": {
      "type": "boolean",
      "description": "whether Tab is closable, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tab-pane/lazy": {
      "type": "boolean",
      "description": "whether Tab is lazily rendered, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tabs)"
  },
  "el-tag/type": {
      "type": "string",
      "options": [
          "success",
          "info",
          "warning",
          "danger"
      ],
      "description": "component type\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/closable": {
      "type": "boolean",
      "description": "whether Tag can be removed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/disable-transitions": {
      "type": "boolean",
      "description": "whether to disable animations, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/hit": {
      "type": "boolean",
      "description": "whether Tag has a highlighted border, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/color": {
      "type": "string",
      "description": "background color of the Tag\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/size": {
      "type": "string",
      "options": [
          "medium",
          "small",
          "mini"
      ],
      "description": "tag size\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/effect": {
      "type": "string",
      "options": [
          "dark",
          "light",
          "plain"
      ],
      "description": "component theme, default: light.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/click": {
      "type": "event",
      "description": "triggers when Tag is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-tag/close": {
      "type": "event",
      "description": "triggers when Tag is removed\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tag)"
  },
  "el-time-picker/model-value": {
      "type": "date",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/readonly": {
      "type": "boolean",
      "description": "whether TimePicker is read only, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/disabled": {
      "type": "boolean",
      "description": "whether TimePicker is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/editable": {
      "type": "boolean",
      "description": "whether the input is editable, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/clearable": {
      "type": "boolean",
      "description": "whether to show clear button, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/placeholder": {
      "type": "string",
      "description": "placeholder in non-range mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/start-placeholder": {
      "type": "string",
      "description": "placeholder for the start time in range mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/end-placeholder": {
      "type": "string",
      "description": "placeholder for the end time in range mode\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/is-range": {
      "type": "boolean",
      "description": "whether to pick a time range, only works with `<el-time-picker>`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/arrow-control": {
      "type": "boolean",
      "description": "whether to pick time using arrow buttons, only works with `<el-time-picker>`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/align": {
      "type": "left|center|right",
      "options": [
          "left"
      ],
      "description": "alignment\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/popper-class": {
      "type": "string",
      "description": "custom class name for TimePicker's dropdown\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/picker-options": {
      "type": "object",
      "description": "additional options, check the table below, default: {}.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/range-separator": {
      "type": "string",
      "description": "range separator, default: '-'.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/default-value": {
      "type": "date for timepicker|string for timeselect",
      "options": [
          "anything accepted by new Date() for TimePicker, selectable value for TimeSelect"
      ],
      "description": "optional, default date of the calendar\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/value-format": {
      "type": "string",
      "description": "optional, only for TimePicker, format of binding value. If not specified, the binding value will be a Date object\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/name": {
      "type": "string",
      "description": "same as `name` in native input\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/prefix-icon": {
      "type": "string",
      "description": "Custom prefix icon class, default: el-icon-time.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/clear-icon": {
      "type": "string",
      "description": "Custom clear icon class, default: el-icon-circle-close.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/change": {
      "type": "event",
      "description": "triggers when user confirms the value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/blur": {
      "type": "event",
      "description": "triggers when Input blurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-time-picker/focus": {
      "type": "event",
      "description": "triggers when Input focuses\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/time-picker)"
  },
  "el-timeline/reverse": {
      "type": "boolean",
      "description": "whether the node is ascending or descending, default is ascending, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-timeline-item/timestamp": {
      "type": "string",
      "description": "timestamp content\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-timeline-item/hide-timestamp": {
      "type": "boolean",
      "description": "whether to show timestamp, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-timeline-item/placement": {
      "type": "string",
      "options": [
          "top",
          "bottom"
      ],
      "description": "position of timestamp, default: bottom.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-timeline-item/type": {
      "type": "string",
      "options": [
          "primary",
          "success",
          "warning",
          "danger",
          "info"
      ],
      "description": "node type\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-timeline-item/color": {
      "type": "string",
      "options": [
          "hsl",
          "hsv",
          "hex",
          "rgb"
      ],
      "description": "background color of node\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-timeline-item/size": {
      "type": "string",
      "options": [
          "normal",
          "large"
      ],
      "description": "node size, default: normal.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-timeline-item/icon": {
      "type": "string",
      "description": "icon class name\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/timeline)"
  },
  "el-tooltip/effect": {
      "type": "string",
      "options": [
          "dark",
          "light"
      ],
      "description": "Tooltip theme, default: dark.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/content": {
      "type": "string",
      "description": "display content, can be overridden by `slot#content`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/placement": {
      "type": "string",
      "options": [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end"
      ],
      "description": "position of Tooltip, default: bottom.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/model-value": {
      "type": "boolean",
      "description": "visibility of Tooltip, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/disabled": {
      "type": "boolean",
      "description": "whether Tooltip is disabled, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/offset": {
      "type": "number",
      "description": "offset of the Tooltip, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/transition": {
      "type": "string",
      "description": "animation name, default: el-fade-in-linear.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/visible-arrow": {
      "type": "boolean",
      "description": "whether an arrow is displayed. For more information, check [Vue-popper](https://github.com/element-component/vue-popper) page, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/popper-options": {
      "type": "object",
      "description": "[popper.js](https://popper.js.org/documentation.html) parameters, default: { boundariesElement: 'body', gpuAcceleration: false }.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/open-delay": {
      "type": "number",
      "description": "delay of appearance, in millisecond, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/manual": {
      "type": "boolean",
      "description": "whether to control Tooltip manually. `mouseenter` and `mouseleave` won't have effects if set to `true`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/popper-class": {
      "type": "string",
      "description": "custom class name for Tooltip's popper\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/enterable": {
      "type": "boolean",
      "description": "whether the mouse can enter the tooltip, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/hide-after": {
      "type": "number",
      "description": "timeout in milliseconds to hide tooltip, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-tooltip/tabindex": {
      "type": "number",
      "description": "[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Tooltip, default: 0.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tooltip)"
  },
  "el-transfer/model-value": {
      "type": "array",
      "description": "binding value\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/data": {
      "type": "array[{ key|label|disabled }]",
      "description": "data source, default: [ ].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/filterable": {
      "type": "boolean",
      "description": "whether Transfer is filterable, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/filter-placeholder": {
      "type": "string",
      "description": "placeholder for the filter input, default: Enter keyword.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/filter-method": {
      "type": "function",
      "description": "custom filter method\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/target-order": {
      "type": "string",
      "options": [
          "original",
          "push",
          "unshift"
      ],
      "description": "order strategy for elements in the target list. If set to `original`, the elements will keep the same order as the data source. If set to `push`, the newly added elements will be pushed to the bottom. If set to `unshift`, the newly added elements will be inserted on the top, default: original.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/titles": {
      "type": "array",
      "description": "custom list titles, default: ['List 1', 'List 2'].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/button-texts": {
      "type": "array",
      "description": "custom button texts, default: [ ].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/render-content": {
      "type": "function",
      "description": "custom render function for data items\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/format": {
      "type": "object{nochecked|haschecked}",
      "description": "texts for checking status in list header, default: { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/props": {
      "type": "object{key|label|disabled}",
      "description": "prop aliases for data source\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/left-default-checked": {
      "type": "array",
      "description": "key array of initially checked data items of the left list, default: [ ].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/right-default-checked": {
      "type": "array",
      "description": "key array of initially checked data items of the right list, default: [ ].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/change": {
      "type": "event",
      "description": "triggers when data items change in the right list\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/left-check-change": {
      "type": "event",
      "description": "triggers when end user changes the checked state of any data item in the left list\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-transfer/right-check-change": {
      "type": "event",
      "description": "triggers when end user changes the checked state of any data item in the right list\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/transfer)"
  },
  "el-tree/data": {
      "type": "array",
      "description": "tree data\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/empty-text": {
      "type": "string",
      "description": "text displayed when data is void\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-key": {
      "type": "string",
      "description": "unique identity key name for nodes, its value should be unique across the whole tree\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/props": {
      "type": "object",
      "description": "configuration options, see the following table\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/render-after-expand": {
      "type": "boolean",
      "description": "whether to render child nodes only after a parent node is expanded for the first time, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/load": {
      "type": "function",
      "description": "method for loading subtree data, only works when `lazy` is true\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/render-content": {
      "type": "function(h|{ node|data|store }",
      "description": "render function for tree node\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/highlight-current": {
      "type": "boolean",
      "description": "whether current node is highlighted, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/default-expand-all": {
      "type": "boolean",
      "description": "whether to expand all nodes by default, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/expand-on-click-node": {
      "type": "boolean",
      "description": "whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon., default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/check-on-click-node": {
      "type": "boolean",
      "description": "whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox., default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/auto-expand-parent": {
      "type": "boolean",
      "description": "whether to expand father node when a child node is expanded, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/default-expanded-keys": {
      "type": "array",
      "description": "array of keys of initially expanded nodes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/show-checkbox": {
      "type": "boolean",
      "description": "whether node is selectable, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/check-strictly": {
      "type": "boolean",
      "description": "whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true`, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/default-checked-keys": {
      "type": "array",
      "description": "array of keys of initially checked nodes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/current-node-key": {
      "type": "string|number",
      "description": "key of initially selected node\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/filter-node-method": {
      "type": "function",
      "description": "this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/accordion": {
      "type": "boolean",
      "description": "whether only one node among the same level can be expanded at one time, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/indent": {
      "type": "number",
      "description": "horizontal indentation of nodes in adjacent levels in pixels, default: 16.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/icon-class": {
      "type": "string",
      "description": "custome tree node icon\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/lazy": {
      "type": "boolean",
      "description": "whether to lazy load leaf node, used with `load` attribute, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/draggable": {
      "type": "boolean",
      "description": "whether enable tree nodes drag and drop, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/allow-drag": {
      "type": "function",
      "description": "this function will be executed before dragging a node. If `false` is returned, the node can not be dragged\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/allow-drop": {
      "type": "function",
      "description": "this function will be executed before the dragging node is dropped. If `false` is returned, the dragging node can not be dropped at the target node. `type` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-click": {
      "type": "event",
      "description": "triggers when a node is clicked\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-contextmenu": {
      "type": "event",
      "description": "triggers when a node is clicked by right button\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/check-change": {
      "type": "event",
      "description": "triggers when the selected state of the node changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/check": {
      "type": "event",
      "description": "triggers after clicking the checkbox of a node\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/current-change": {
      "type": "event",
      "description": "triggers when current node changes\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-expand": {
      "type": "event",
      "description": "triggers when current node open\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-collapse": {
      "type": "event",
      "description": "triggers when current node close\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-drag-start": {
      "type": "event",
      "description": "triggers when dragging starts\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-drag-enter": {
      "type": "event",
      "description": "triggers when the dragging node enters another node\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-drag-leave": {
      "type": "event",
      "description": "triggers when the dragging node leaves a node\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-drag-over": {
      "type": "event",
      "description": "triggers when dragging over a node (like mouseover event)\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-drag-end": {
      "type": "event",
      "description": "triggers when dragging ends\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-tree/node-drop": {
      "type": "event",
      "description": "triggers after the dragging node is dropped\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/tree)"
  },
  "el-upload/action": {
      "type": "string",
      "description": "required, request URL\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/headers": {
      "type": "object",
      "description": "request headers\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/multiple": {
      "type": "boolean",
      "description": "whether uploading multiple files is permitted\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/data": {
      "type": "object",
      "description": "additions options of request\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/name": {
      "type": "string",
      "description": "key name for uploaded file, default: file.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/with-credentials": {
      "type": "boolean",
      "description": "whether cookies are sent, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/show-file-list": {
      "type": "boolean",
      "description": "whether to show the uploaded file list, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/drag": {
      "type": "boolean",
      "description": "whether to activate drag and drop mode, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/accept": {
      "type": "string",
      "description": "accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode` is `true`\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/on-preview": {
      "type": "function",
      "description": "hook function when clicking the uploaded files\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/on-remove": {
      "type": "function",
      "description": "hook function when files are removed\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/on-success": {
      "type": "function",
      "description": "hook function when uploaded successfully\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/on-error": {
      "type": "function",
      "description": "hook function when some errors occurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/on-progress": {
      "type": "function",
      "description": "hook function when some progress occurs\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/on-change": {
      "type": "function",
      "description": "hook function when select file or upload file success or upload file fail\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/before-upload": {
      "type": "function",
      "description": "hook function before uploading with the file to be uploaded as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, uploading will be aborted\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/before-remove": {
      "type": "function",
      "description": "hook function before removing a file with the file and file list as its parameters. If `false` is returned or a `Promise` is returned and then is rejected, removing will be aborted.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/thumbnail-mode": {
      "type": "boolean",
      "description": "whether thumbnail is displayed, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/file-list": {
      "type": "array",
      "description": "default uploaded files, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}], default: [].\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/list-type": {
      "type": "string",
      "options": [
          "text",
          "picture",
          "picture-card"
      ],
      "description": "type of fileList, default: text.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/auto-upload": {
      "type": "boolean",
      "description": "whether to auto upload file, default: true.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/http-request": {
      "type": "function",
      "description": "override default xhr behavior, allowing you to implement your own upload-file's request\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/disabled": {
      "type": "boolean",
      "description": "whether to disable upload, default: false.\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/limit": {
      "type": "number",
      "description": "maximum number of uploads allowed\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  },
  "el-upload/on-exceed": {
      "type": "function",
      "description": "hook function when limit is exceeded\n\n[Docs](https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/upload)"
  }
};