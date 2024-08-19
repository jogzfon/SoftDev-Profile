<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-links">
        <a href="#tools" class="navbar-link">Tools</a>
        <a href="#portfolio" class="navbar-link">Portfolio</a>
        <a href="#experience" class="navbar-link">Experience</a>
        <a href="#education" class="navbar-link">Education</a>
        <a href="#contact" class="navbar-link">Contact</a>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  background: #EEEFDA;
  height: 80px;
}
</style>
