<template>
  <div class="App">
    <IndexView></IndexView>
  </div>
</template>

<script>
import IndexView from './Views/IndexView'
export default {
  name: 'App',
  components: {
    IndexView
  }
}
</script>

<style>
body {
  background: #000;
  margin: 0;
  padding: 0;
}

.App {
  background: url(http://images.liuxinghao.top/other/pan.png) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
