<template>
  <ViteAntiFlicker>
    <div class="layout">
      <div class="navigation">
        <a href="/" class="logo">
          <img src="./logo.svg" height="30" />
        </a>
        <a href="/markdown">Markdown</a>
        <a href="/star-wars">Data Fetching</a>
        <a href="/hello/alice">Routing</a>
      </div>
      <div class="content"><slot/></div>
    </div>
  </ViteAntiFlicker>
</template>

<script lang="ts">
import ViteAntiFlicker from './ViteAntiFlicker.vue'
const components = { ViteAntiFlicker }
export default { components }
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
