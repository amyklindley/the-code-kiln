<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  const shouldShow = window.scrollY > 300
  showButton.value = shouldShow
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-fade-transition>
    <v-btn
      v-show="showButton"
      icon="mdi-arrow-up"
      color="primary"
      size="large"
      elevation="8"
      @click="scrollToTop"
      aria-label="Scroll to top of page"
      style="
        position: fixed;
        bottom: 100px;
        right: 24px;
        z-index: 1000;
        background: rgba(33, 150, 243, 0.6);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.2);
        transition: background-color 0.3s ease;
      "
      class="scroll-to-top-btn"
    ></v-btn>
  </v-fade-transition>
</template>

<style scoped>
.scroll-to-top-btn:hover {
  background: rgba(33, 150, 243, 0.95) !important;
}
</style> 