<template>
  <div id="homepage">
    <!-- Hero Section -->
    <section id="hero" class="section hero">
      <div class="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your tagline or introduction goes here.</p>
        <button @click="scrollToSection('portfolio')">See My Work</button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <h2>About Me</h2>
      <p>A brief description about yourself, your background, and skills.</p>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section portfolio">
      <h2>My Work</h2>
      <PortfolioPage/>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <h2>Experience</h2>
      <ExperiencePage/>
    </section>

    <!-- Education Section -->
    <section id="education" class="section education">
      <h2>Education</h2>
      <EducationPage/>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <h2>Contact Me</h2>
      <ContactPage/>
    </section>
  </div>
</template>

<script lang="js">
import ContactPage from '@/views/ContactPage.vue'
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
.section {
  padding: 60px 20px;
  margin: 0 auto;
  max-width: 1200px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

/* Hero Section */
.hero {
  background: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.hero .content {
  max-width: 600px;
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

/* About Section */
.about {
  background: #f9f9f9;
}

/* Portfolio Section */
.portfolio {
  background: #e9ecef;
}

/* Experience Section */
.experience {
  background: #ffffff;
}

/* Education Section */
.education {
  background: #f9f9f9;
}

/* Contact Section */
.contact {
  background: #e9ecef;
}

.contact h2 {
  margin-bottom: 20px;
}

.contact p {
  text-align: center;
}
</style>
