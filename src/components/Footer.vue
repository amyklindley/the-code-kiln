<script setup lang="ts">
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()
const backgroundColor = computed(() => theme.current.value.colors.background)
</script>

<template>
  <v-footer
    class="d-flex flex-column"
    :style="{ background: backgroundColor }"
    style="padding: 16px 0; border-top: 1px solid rgba(128,128,128,0.2);"
  >
    <div class="d-flex w-100 align-center px-4">
      <div>
        <strong>© {{ new Date().getFullYear() }} The Code Kiln</strong>
        <div style="font-size: 0.9rem; color: rgba(128,128,128,0.8); margin-top: 2px;">
          Built with 🔥 & caffeine.
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/amyklindley"
        target="_blank"
        rel="noopener noreferrer"
        icon="mdi-github"
        variant="text"
        class="mx-2"
        aria-label="GitHub"
      ></v-btn>
      <v-btn
        href="https://www.linkedin.com/in/amy-lindley-6b65b055"
        target="_blank"
        rel="noopener noreferrer"
        icon="mdi-linkedin"
        variant="text"
        class="mx-2"
        aria-label="LinkedIn"
      ></v-btn>
    </div>
  </v-footer>
</template> 