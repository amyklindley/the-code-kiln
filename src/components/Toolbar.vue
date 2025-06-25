<template>
  <v-app-bar
    flat
    style="
      background: rgba(33, 150, 243, 0.55);
      backdrop-filter: blur(16px) saturate(160%);
      -webkit-backdrop-filter: blur(16px) saturate(160%);
      border-bottom: 1.5px solid rgba(255,255,255,0.18);
      box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.12);
    "
  >
    <div class="toolbar-logo-row" style="display: flex; align-items: center; height: 100%; gap: 12px; padding: 0 16px;">
      <v-tooltip text="Back" location="bottom" v-if="showBackButton">
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-arrow-left"
            variant="text"
            v-bind="props"
            @click="goBack"
            aria-label="Go back"
            class="toolbar-back-btn"
            style="color: white; margin-right: 4px;"
          ></v-btn>
        </template>
      </v-tooltip>
      <RouterLink to="/" style="display: flex; align-items: center;">
        <img :src="kilnLogo" alt="The Code Kiln Logo" class="toolbar-logo-img" style="height: 56px; width: auto; vertical-align: middle; cursor: pointer; display: block;" />
      </RouterLink>
      <v-toolbar-title class="d-none d-sm-block" style="color: #fff; font-weight: bold; letter-spacing: 1px;">The Code Kiln</v-toolbar-title>
    </div>
    <v-spacer />

    <div class="d-none d-sm-flex align-center">
      <v-btn variant="text" to="/about" color="white">About</v-btn>
      <v-btn variant="text" to="/contact" color="white">Contact</v-btn>
      <v-btn variant="flat" color="secondary" to="/hire" class="mx-2 font-weight-bold">Hire Me</v-btn>
      
      <v-tooltip text="Toggle light/dark mode" location="bottom">
        <template v-slot:activator="{ props }">
          <v-switch
            v-model="isDark"
            v-bind="props"
            color="secondary"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            hide-details
            inset
            style="margin-right: 8px;"
          >
            <template v-slot:thumb>
              <span style="font-size: 14px;">{{ isDark ? '🔥' : '💨' }}</span>
            </template>
          </v-switch>
        </template>
      </v-tooltip>
    </div>
      
    <!-- Mobile Menu Button -->
    <v-btn
      icon="mdi-menu"
      variant="text"
      class="d-sm-none"
      @click="mobileMenuOpen = !mobileMenuOpen"
      aria-label="Open mobile menu"
      style="color: white; margin-right: 16px;"
    ></v-btn>
  </v-app-bar>
  
  <!-- Mobile Menu -->
  <v-navigation-drawer
    v-model="mobileMenuOpen"
    temporary
    location="end"
  >
    <v-list>
       <!-- Theme toggle for extra-small screens -->
      <v-list-item class="d-sm-none">
        <v-list-item-title>Theme</v-list-item-title>
        <template v-slot:append>
          <v-switch
            v-model="isDark"
            color="secondary"
            hide-details
            inset
          ></v-switch>
        </template>
      </v-list-item>
      <v-divider class="d-sm-none"></v-divider>

      <v-list-item
        to="/"
        @click="mobileMenuOpen = false"
        prepend-icon="mdi-home"
        title="Home"
      ></v-list-item>
      <v-list-item
        to="/about"
        @click="mobileMenuOpen = false"
        prepend-icon="mdi-information"
        title="About"
      ></v-list-item>
      <v-list-item
        to="/contact"
        @click="mobileMenuOpen = false"
        prepend-icon="mdi-email"
        title="Contact"
      ></v-list-item>
      <v-list-item
        to="/hire"
        @click="mobileMenuOpen = false"
        prepend-icon="mdi-briefcase"
        title="Hire Me"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import kilnLogo from '../assets/code-kiln-logo.png'
import { useTheme } from 'vuetify'
import { ref, watch, onMounted, computed } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'

const theme = useTheme()
const isDark = ref(false)
const mobileMenuOpen = ref(false)
const router = useRouter()
const route = useRoute()

// Show back button only if there is history and not on home page
const showBackButton = computed(() => {
  return window.history.length > 1 && route.path !== '/'
})

function goBack() {
  router.back()
}

// Load theme preference from localStorage on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Default to system preference if no saved theme
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  theme.global.name.value = isDark.value ? 'dark' : 'light'
})

// Watch for theme changes and save to localStorage
watch(isDark, (newValue) => {
  theme.global.name.value = newValue ? 'dark' : 'light'
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})
</script>

<style scoped>
/* Ensure the back button is always visible and properly spaced on tablet screens */
@media (min-width: 600px) and (max-width: 960px) {
  .toolbar-logo-row {
    gap: 8px !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
  .toolbar-back-btn {
    margin-right: 8px !important;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .toolbar-logo-img {
    height: 48px !important;
  }
}
</style> 