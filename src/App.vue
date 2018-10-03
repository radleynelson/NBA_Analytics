<template>
  <div id="app">
    <navBar/>
    <img class="nbalogo" src="https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png">
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/navBar';
export default {
  name: 'App',
  components: {navBar},
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
.nbalogo{
  width: 5%;
}
</style>
