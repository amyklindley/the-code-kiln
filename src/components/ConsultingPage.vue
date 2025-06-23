<template>
  <div class="landing-bg" :style="{ minHeight: '100vh', paddingTop: '100px', background: backgroundColor }">
    <span v-for="item in bgSymbols" :key="item.key" class="bg-symbol" :style="{
      top: item.top + '%',
      left: item.left + '%',
      fontSize: item.fontSize + 'rem',
      color: symbolColor,
      filter: `blur(${item.blur}px)` ,
      opacity: item.opacity,
    }" v-html="item.symbol" aria-hidden="true" />

    <!-- Headline & Subheadline -->
    <v-container class="mb-0" style="position: relative; z-index: 1;">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <h1 class="text-h3 font-weight-bold text-center mb-2">Creative Problem Solving, Technical Clarity.</h1>
          <div class="text-h5 text-center mb-6" style="color: var(--v-theme-primary); font-weight: 400;">Not Sure What You Need Built? That's Where I Come In.</div>
          <div class="text-center text-body-1 mb-8" style="max-width: 600px; margin: 0 auto;">
            Tech decisions are hard. I help clients make the right ones.<br>
            Whether you're planning a new system, cleaning up legacy code, or figuring out if something is even possible — I'll help you clarify, prioritize, and move forward.
          </div>
        </v-col>
      </v-row>

      <!-- What I Can Help With -->
      <v-row justify="center" align="stretch" class="mb-8">
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🧭</div>
            <div class="font-weight-bold mb-1">Project Scoping</div>
            <div class="text-body-2">From napkin sketch to scoped roadmap.</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🔧</div>
            <div class="font-weight-bold mb-1">Code Audits & Tech Reviews</div>
            <div class="text-body-2">I'll tell you what's working, what's not, and why.</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🔄</div>
            <div class="font-weight-bold mb-1">Legacy Modernization</div>
            <div class="text-body-2">Plan realistic upgrades to old systems.</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">⚙️</div>
            <div class="font-weight-bold mb-1">API Design</div>
            <div class="text-body-2">Clean, scalable API structures that play well with others.</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">☁️</div>
            <div class="font-weight-bold mb-1">Cloud & Infra Advice</div>
            <div class="text-body-2">Azure, Kubernetes, cost-aware deployment patterns.</div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Who This Is For -->
      <h2 class="text-h5 font-weight-bold text-center mb-2">Who This Is For</h2>
      <div class="text-center mb-8">
        <v-chip class="ma-1" color="secondary" text-color="black">Solo founders or startups</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Established businesses with tech debt</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Project managers</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Teams needing a second set of eyes</v-chip>
      </div>

      <!-- How It Works -->
      <h2 class="text-h5 font-weight-bold text-center mb-2">How It Works</h2>
      <v-timeline align="center" dense class="mb-8">
        <v-timeline-item dot-color="primary" size="small">
          <div class="font-weight-bold">Free intro call (15–30 min)</div>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="small">
          <div class="font-weight-bold">Paid sessions via hourly or scoped deliverable</div>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="small">
          <div class="font-weight-bold">Clear follow-up notes and/or action plan</div>
        </v-timeline-item>
      </v-timeline>

      <!-- Call to Action -->
      <div class="text-center mb-6">
        <h2 class="text-h5 font-weight-bold mb-2">Need a technical sounding board?</h2>
        <v-btn color="primary" size="x-large" class="font-weight-bold" to="/hire">Book a Free Consult</v-btn>
      </div>

      <!-- Optional: Testimonials, Case Study, Pricing -->
      <div class="text-center mt-8" style="opacity: 0.7;">
        <div class="mb-2">Rates available on request. Most consulting starts at <b>$120/hr</b>.</div>
        <!-- <div><a href="#">See a case study</a></div> -->
      </div>
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