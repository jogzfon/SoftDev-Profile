<template>
  <div id="app">
      <nav class="navbar">
        <div class="logo">
          <img src="@/assets/logo.png" alt="SheerFolio Logo" />
          <span class="logo-text">SheerFolio</span>
        </div>
        <div class="navbar-links">
          <a href="#experience" class="navbar-link">Experience</a>
          <a href="#tools" class="navbar-link">Tools</a>
          <a href="#portfolio" class="navbar-link">Project</a>
          <a href="#about" class="navbar-link">About</a>
        </div>
        <button class="contact-btn">Contact Me</button>
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
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEEFDA; 
  padding: 15px 30px; 
  box-sizing: border-box; 
  border-bottom: 2px solid #000000; 
  z-index: 1000; 
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-link {
  text-decoration: none;
  color: #000000;
  font-size: 18px;
}

.contact-btn {
  background-color: #899878;
  color: #ffffff; 
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
}

.contact-btn:hover {
  background-color: #828d73; 
}

</style>
