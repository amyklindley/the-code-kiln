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
          <h1 class="text-h3 font-weight-bold text-center mb-2">Custom Web Apps That Just Work.</h1>
          <div class="text-h5 text-center mb-6" style="color: var(--v-theme-primary); font-weight: 400;">From Idea to App — Done Right.</div>
          <div class="text-center text-body-1 mb-8" style="max-width: 600px; margin: 0 auto;">
            I design and build web apps that solve real problems — not just pretty UIs, but fully functional systems that integrate with your business, scale with your needs, and are easy to maintain.
          </div>
        </v-col>
      </v-row>

      <!-- What I Build -->
      <h2 class="text-h5 font-weight-bold text-center mb-4">What I Build</h2>
      <v-row justify="center" align="stretch" class="mb-8">
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🧾</div>
            <div class="font-weight-bold mb-1">Internal Tools</div>
            <div class="text-body-2">Dashboards, reporting suites, and admin portals</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">💳</div>
            <div class="font-weight-bold mb-1">Client Portals</div>
            <div class="text-body-2">Secure web experiences for your customers</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">⚙️</div>
            <div class="font-weight-bold mb-1">Workflow Apps</div>
            <div class="text-body-2">Multi-step processes, document review flows, claims processing</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🧬</div>
            <div class="font-weight-bold mb-1">Healthcare Apps</div>
            <div class="text-body-2">HIPAA-aware interfaces and API-connected systems</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🛠️</div>
            <div class="font-weight-bold mb-1">APIs + UIs</div>
            <div class="text-body-2">Full-stack delivery: backend to frontend (REST APIs, Vue/React, Bootstrap, etc.)</div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Tech Stack -->
      <h2 class="text-h5 font-weight-bold text-center mb-2">Tech Stack</h2>
      <div class="text-center mb-8">
        <v-chip class="ma-1" color="secondary" text-color="black">ASP.NET Core</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">C#</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">EF Core</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Dapper</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Vue.js</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Bootstrap</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Azure</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Kubernetes</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">SQL Server</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">REST APIs</v-chip>
        <v-chip class="ma-1" color="secondary" text-color="black">Integrations</v-chip>
      </div>

      <!-- Why It Matters -->
      <h2 class="text-h5 font-weight-bold text-center mb-2">Why It Matters</h2>
      <v-row justify="center" class="mb-8">
        <v-col cols="12" sm="3">
          <v-card elevation="4" class="pa-4 text-center">
            <div style="font-size: 2rem;">✅</div>
            <div class="font-weight-bold mb-1">Clean, maintainable code</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card elevation="4" class="pa-4 text-center">
            <div style="font-size: 2rem;">🔒</div>
            <div class="font-weight-bold mb-1">Secure from day one</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card elevation="4" class="pa-4 text-center">
            <div style="font-size: 2rem;">📈</div>
            <div class="font-weight-bold mb-1">Built to scale</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card elevation="4" class="pa-4 text-center">
            <div style="font-size: 2rem;">📱</div>
            <div class="font-weight-bold mb-1">Mobile-responsive & accessible</div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Recent Projects -->
      <h2 class="text-h5 font-weight-bold text-center mb-2">Recent Projects</h2>
      <div class="text-center mb-8">
        <v-list lines="one" bg-color="transparent" style="display: inline-block; text-align: left;">
          <v-list-item>
            <v-list-item-title>API Gateway with OAuth2 token routing</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Claims Automation Web Admin</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Letter Generator System w/ Scheduling Dashboard</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>

      <!-- Call to Action -->
      <div class="text-center mb-6">
        <h2 class="text-h5 font-weight-bold mb-2">Have an idea you want to bring to life?</h2>
        <v-btn color="primary" size="x-large" class="font-weight-bold mr-2" to="/hire">Let's Build It</v-btn>
        <v-btn color="secondary" size="x-large" class="font-weight-bold" to="/hire">Hire Me</v-btn>
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