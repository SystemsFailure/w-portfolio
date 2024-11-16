<script setup>
import NavbarWidget from './widgets/NavbarWidget.vue';
</script>

<template>
  <nav> <NavbarWidget></NavbarWidget> </nav>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './styles/vars.scss';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7e7e7e;
  padding: 30px 350px;
  height: 100vh;
  background-color: $background-dark-theme;
}
</style>
