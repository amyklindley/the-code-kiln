<template>
  <div
    class="landing-bg"
    :style="{
      minHeight: '100vh',
      paddingTop: '100px',
      background: backgroundColor
    }"
  >
    <span
      v-for="item in bgSymbols"
      :key="item.key"
      class="bg-symbol"
      :style="{
        top: item.top + '%',
        left: item.left + '%',
        fontSize: item.fontSize + 'rem',
        color: symbolColor,
        filter: `blur(${item.blur}px)` ,
        opacity: item.opacity,
      }"
      v-html="item.symbol"
      aria-hidden="true"
    />
    <v-container>
      <v-row justify="center" align="center" class="w-100">
        <v-col cols="12" md="12" lg="10">
          <v-card class="pa-8" elevation="12" style="background-color: rgba(var(--v-theme-surface), 0.9); backdrop-filter: blur(10px); position: relative; z-index: 1;">
            <v-card-title class="text-h3 font-weight-bold mb-2 text-center">
              Bring Your App Idea to Life
            </v-card-title>
            <div class="text-h5 text-center mb-4" style="font-weight: 400; color: var(--v-theme-primary);">
              Without the Headaches
            </div>
            <div class="text-center mb-8">
              <v-chip class="ma-1" color="secondary" text-color="black">Reliable</v-chip>
              <v-chip class="ma-1" color="secondary" text-color="black">Communicative</v-chip>
              <v-chip class="ma-1" color="secondary" text-color="black">Efficient with existing codebases</v-chip>
              <v-chip class="ma-1" color="secondary" text-color="black">Fast API & data systems builder</v-chip>
            </div>
            <v-card-subtitle class="text-h6 text-center mb-8">
              👋 Reliable, Communicative, and Efficient.<br>
              I build fast APIs, data systems,<br>
              and work well with existing codebases.
            </v-card-subtitle>
            <v-divider class="my-8"></v-divider>
            <v-row>
              <v-col cols="12" md="6">
                <h2 class="text-h4 font-weight-bold mb-4">🛠 What I Do</h2>
                <v-list lines="one" bg-color="transparent">
                  <v-list-item prepend-icon="mdi-web">Web Apps</v-list-item>
                  <v-list-item prepend-icon="mdi-robot-industrial-outline">Automation</v-list-item>
                  <v-list-item prepend-icon="mdi-transit-connection-variant">APIs & Integrations</v-list-item>
                  <v-list-item prepend-icon="mdi-hospital-box-outline">Healthcare Tech</v-list-item>
                  <v-list-item prepend-icon="mdi-wrench-cog-outline">Maintenance & Enhancements</v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="6">
                <h2 class="text-h4 font-weight-bold mb-4">✅ Why Hire Me?</h2>
                  <v-list-item prepend-icon="mdi-seal">Years of experience</v-list-item>
                  <v-list-item prepend-icon="mdi-calendar-clock">Proven delivery on tight deadlines</v-list-item>
                  <v-list-item prepend-icon="mdi-forum-outline">Strong communication & async-friendly</v-list-item>
                  <v-list-item prepend-icon="mdi-thumb-up-outline">Happy clients & repeat contracts</v-list-item>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()
const backgroundColor = computed(() => theme.current.value.colors.background)

const symbolList = ['{ }', '&lt;/&gt;', '()', '[ ]', ';', '&lt;?&gt;', '=&gt;']
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

const bgSymbols = Array.from({ length: 15 }, (_, i) => {
  const symbol = symbolList[Math.floor(Math.random() * symbolList.length)]
  const top = getRandom(5, 80)
  const left = getRandom(5, 85)
  const fontSize = getRandom(3, 6.5)
  const blur = getRandom(4, 10)
  const opacity = getRandom(0.07, 0.13)
  return { symbol, top, left, fontSize, blur, opacity, key: i }
})

const symbolColor = computed(() =>
  theme.global.current.value.dark ? '#fff' : '#222'
)
</script>

<style>
.landing-bg {
  position: relative;
  overflow: hidden;
}
.bg-symbol {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  font-family: monospace, monospace;
  font-weight: bold;
  transition: color 0.3s;
}
</style> 