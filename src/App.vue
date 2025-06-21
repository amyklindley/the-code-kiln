<script setup lang="ts">
import Toolbar from './components/Toolbar.vue'
import SiteFooter from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <v-app>
    <Toolbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <SiteFooter />
    <ScrollToTop />
  </v-app>
</template>

<style scoped>
/* Scoped styles for App.vue if needed */
</style>
