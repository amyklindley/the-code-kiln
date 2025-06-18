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
    <v-app-bar-title>
      <img :src="kilnLogo" alt="The Code Kiln Logo" style="height: 80px; width: auto; margin-right: 2px; vertical-align: middle;" />
      The Code Kiln
    </v-app-bar-title>
    <v-btn icon @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      <span v-if="isDark">🌞</span>
      <span v-else>🌙</span>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import kilnLogo from '../assets/code-kiln-logo.png'
import { useTheme } from 'vuetify'
import { ref } from 'vue'

const theme = useTheme()
const isDark = ref(theme.global.current.value === 'dark')

function toggleTheme() {
  isDark.value = !isDark.value
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}
</script> 