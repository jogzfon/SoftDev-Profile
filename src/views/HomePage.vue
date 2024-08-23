<template>
  <div id="homepage">
    <!-- Hero Section -->
    <section id="hero" class="section hero">
      <div class="content">
        <h4>Hey there! I'm</h4>
        <h1>SHEER JAY PIODOS</h1>
        <h4>a Software Developer</h4>
        <p>Hesitation is Defeat.</p>

      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <ToolsPage/>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section portfolio">
      <PortfolioPage/>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <ExperiencePage/>
    </section>

    <!-- Education Section -->
    <section id="education" class="section education">
      <EducationPage/>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <ContactPage/>
    </section>
  </div>
</template>

<script lang="js">
import ContactPage from '@/views/ContactPage.vue'
import ToolsPage from '@/views/ToolsPage.vue'
import EducationPage from '@/views/EducationPage.vue'
import ExperiencePage from '@/views/ExperiencePage.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'

export default {
  name: 'HomePage',
  components: {
    ContactPage, 
    EducationPage, 
    ExperiencePage,
    PortfolioPage,
    ToolsPage,
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
/* Base Styles */
#homepage {
  margin: 0;
  padding: 0;
  background-color: #F7F7F2;
}


.section {
  width: 100vw;
  box-sizing: border-box; 
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

/* Hero Section */
.hero {
  background: #F7F7F2;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.hero button {
  background: white;
  color: #007bff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.hero button:hover {
  background: #0056b3;
  color: white;
}
</style>