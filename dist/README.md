# vue-ace-editor-valid
[ace editor](https://github.com/ajaxorg/ace) for vue

## Feature
* official syntax validation for 'coffee', 'css', 'html', 'javascript', 'json', 'lua', 'php', 'xml' and 'xquery'
* only use CDN source

## How to use
##### 1. add ace [CDN source](https://cdnjs.com/libraries/ace) to index.html
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.7/ace.js" integrity="sha256-C7DTYRJLG+B/VEzHGeoPMw699nsTQYPAXHKXZb+q04E=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.7/mode-json.js" integrity="sha256-WH3EjHkUnhbOt45gfu5MvEYSqvYUXE25FwAtxukgi9U=" crossorigin="anonymous"></script>
```
##### 2. config CDN
```js
// vue.config.js

module.exports = {
  configureWebpack: {
    externals: {
      ace: 'ace'
    }
  }
}
```
##### 3. install vue-ace-editor-valid
```
npm install --save vue-ace-editor-valid
```

##### 4. use vue-ace-editor-valid
```vue
<template>
    <ace-editor class="editor" v-model="code" />
</template>

<script>
import AceEditor from 'vue-ace-editor-valid'
const welcome = { welcome: { ace: 'hello world' } }

export default {
  name: 'App',
  data: () => ({
    code: JSON.stringify(welcome, null, '\t')
  }),
  components: {
    AceEditor
  }
}
</script>
```

## Documentation
|  props   | description  | default |
|  ----  | ----  |  ----  |
| v-model(code)  | content of editor (String) | '' |
| options  | options of editor (Object) same as ace options | {} |
| language  | language of editor (String) | 'json' |
| theme  | theme of editor (String) | '' |
| height  | height of editor (Number) | '100%' |
| width  | width of editor (Number) | '100%' |

|  event   | description  | params |
|  ----  | ----  | ---- |
| mounted  | editor was mounted | the instance of editor |
| change  | content was changed | content |
| validationFailed  | format verification failed | failed info |

## Thanks
Inspired by [vue2-ace-editor](https://github.com/chairuosen/vue2-ace-editor)

