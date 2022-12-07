<template>
  <div id="app">
    <nav-bar />
    <div class="main-content">
          <router-view class="view" />
    </div>
  </div>
</template>

<script setup>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content{
  height: 100vh;
}
.view{
  margin-top:20%;
}
</style>
