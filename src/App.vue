<template>
  <div id="app">
    <ace-editor class="editor" v-model="code" language="json" theme="twilight" />
    <div class="content">{{ code }}</div>
  </div>
</template>

<script>
import AceEditor from './components/AceEditor'
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

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.editor {
  flex: 1;
  font-size: 14px;
}
.content {
  flex: 1;
  padding-top: 45px;
  text-align: center;
}
</style>
