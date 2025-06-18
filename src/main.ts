import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#A65C1B',      // Kiln Brown
          secondary: '#FFD166',    // Flame Yellow
          accent: '#F7973A',       // Flame Orange
          background: '#FFF8F1',   // Light background
          surface: '#fff',
          contrast: '#2196f3',     // Blue for contrast
          error: '#f44336',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#ff9800',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#FFD166',      // Flame Yellow
          secondary: '#F7973A',    // Flame Orange
          accent: '#A65C1B',       // Kiln Brown
          background: '#1A120B',   // Dark background
          surface: '#232a36',
          contrast: '#2196f3',     // Blue for contrast
          error: '#f44336',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#ff9800',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
