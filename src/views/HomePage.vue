<template>
  <div id="homepage">
    <header> Home Page </header>
    <section id="tools">
      <ToolsPage/>
    </section>
    <section id="portfolio">
      <PortfolioPage/>
    </section>
    <section id="experience">
      <ExperiencePage/>
    </section>
    <section id="education">
      <EducationPage/>
    </section>
    <section id="contact">
      <ContactPage/>
    </section>
  </div>
</template>

<script lang="js">
import ContactPage from '@/views/ContactPage.vue'
import EducationPage from '@/views/EducationPage.vue'
import ExperiencePage from '@/views/ExperiencePage.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'
import ToolsPage from '@/views/ToolsPage.vue'

export default {
  name: 'HomePage',
  components: {
    ContactPage, 
    EducationPage, 
    ExperiencePage,
    PortfolioPage,
    ToolsPage
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
