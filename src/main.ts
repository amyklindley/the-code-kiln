import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles/main.sass'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'

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

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

createApp(App).use(vuetify).use(router).mount('#app')
