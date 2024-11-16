<script setup>
import NavbarWidget from './widgets/NavbarWidget.vue';
</script>

<template>
  <nav>
    <NavbarWidget></NavbarWidget>
  </nav>
  <div class="app">
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/vars.scss';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: $background-dark-theme;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9c9c9c;
  padding: 30px 300px;
  height: 100vh;
  background-color: $background-dark-theme;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
}

::-webkit-scrollbar-thumb {
  border-left: 0;
  border-right: 0;
  background-color: #c4c7c7;
}

// .main {
//   width: 80%;
//   height: 100%;
// }</style>
