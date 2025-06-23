<script setup lang="ts">
import kilnLogo from '../assets/code-kiln-logo.png'
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()
const backgroundColor = computed(() => theme.current.value.colors.background)

const symbolList = ['{ }', '&lt;/&gt;', '()', '[ ]', ';', '&lt;?&gt;', '=&gt;']
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

const bgSymbols = Array.from({ length: 9 }, (_, i) => {
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
    <section style="text-align: center; margin-bottom: 48px; position: relative; z-index: 1;">
      <img :src="kilnLogo" alt="The Code Kiln Logo" style="height: 240px; width: auto; margin-bottom: 4px;" />
      <h1 style="font-size: 2.8rem; font-weight: bold; margin-bottom: 0.5rem;">We Solve Problems.</h1>
      <div style="font-size: 1.3rem; color: #A65C1B; margin-bottom: 1.5rem;">Custom software, creative solutions.</div>
    </section>
    <v-container>
      <v-row justify="center" align="stretch" gap="4">
        <v-col cols="12" md="4" class="d-flex">
          <v-card elevation="8" class="flex-grow-1 pa-4" to="/web-apps">
            <v-card-title class="text-h6 font-weight-bold">Web Apps</v-card-title>
            <v-card-text>
              <span style="font-size: 2rem; color: #2196f3;">&lt;/&gt;</span>
              <div>Modern, scalable web applications tailored to your business needs.</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex">
          <v-card elevation="8" class="flex-grow-1 pa-4" to="/automation">
            <v-card-title class="text-h6 font-weight-bold">Automation</v-card-title>
            <v-card-text>
              <span style="font-size: 2rem; color: #FFD166;">{ }</span>
              <div>Automate repetitive tasks and workflows to save time and money.</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex">
          <v-card elevation="8" class="flex-grow-1 pa-4" to="/consulting">
            <v-card-title class="text-h6 font-weight-bold">Consulting</v-card-title>
            <v-card-text>
              <span style="font-size: 2rem; color: #A65C1B;">&lt;?&gt;</span>
              <div>Expert advice and creative problem-solving for your toughest challenges.</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Call to Action Section -->
    <v-container style="text-align: center; margin-top: 48px; position: relative; z-index: 1;">
      <v-btn
        href="mailto:hello@thecodekiln.com?subject=Let's Work Together - Project Inquiry&body=Hi there!%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0AProject details:%0D%0A- %0D%0A- %0D%0A- %0D%0A%0D%0AExpected timeline:%0D%0A- %0D%0A%0D%0ABudget range:%0D%0A- %0D%0A%0D%0AHow did you find me:%0D%0A- %0D%0A%0D%0AThanks!%0D%0A"
        color="primary"
        size="x-large"
        elevation="8"
        style="
          font-size: 1.2rem;
          font-weight: bold;
          padding: 16px 32px;
          background: linear-gradient(135deg, #A65C1B 0%, #F7973A 100%);
          border: 2px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
        "
        aria-label="Send email to start working together"
      >
        <v-icon icon="mdi-email" style="margin-right: 8px;"></v-icon>
        Let's Work Together
      </v-btn>
    </v-container>
  </div>
</template>

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