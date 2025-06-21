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
    <div style="display: flex; align-items: center; height: 100%; gap: 12px; padding: 0 16px;">
      <RouterLink to="/" style="display: flex; align-items: center;">
        <img :src="kilnLogo" alt="The Code Kiln Logo" style="height: 56px; width: auto; vertical-align: middle; cursor: pointer; display: block;" />
      </RouterLink>
      <v-toolbar-title class="d-none d-sm-block" style="color: #fff; font-weight: bold; letter-spacing: 1px;">The Code Kiln</v-toolbar-title>
    </div>
    <v-spacer />
    <v-btn variant="text" to="/about" class="d-none d-sm-block" style="font-weight: 500;" aria-label="About page">About</v-btn>
    <v-btn variant="text" to="/contact" class="d-none d-sm-block" style="margin-right: 12px; font-weight: 500;" aria-label="Contact page">Contact</v-btn>
    
    <!-- Mobile Menu Button -->
    <v-btn
      icon="mdi-menu"
      variant="text"
      class="d-sm-none"
      @click="mobileMenuOpen = !mobileMenuOpen"
      aria-label="Open mobile menu"
      style="color: white; margin-right: 8px;"
    ></v-btn>
    
    <v-tooltip text="Toggle light/dark mode" location="bottom">
      <template v-slot:activator="{ props }">
        <v-switch
          v-model="isDark"
          v-bind="props"
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
  </v-app-bar>
  
  <!-- Mobile Menu -->
  <v-navigation-drawer
    v-model="mobileMenuOpen"
    temporary
    location="end"
  >
    <v-list>
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
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import kilnLogo from '../assets/code-kiln-logo.png'
import { useTheme } from 'vuetify'
import { ref, watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const theme = useTheme()
const isDark = ref(false)
const mobileMenuOpen = ref(false)

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