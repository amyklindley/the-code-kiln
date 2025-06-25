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
          <h1 class="text-h3 font-weight-bold text-center mb-2">Work Less. Automate More.</h1>
          <div class="text-h5 text-center mb-6" style="color: var(--v-theme-primary); font-weight: 400;">Replace Repetition with Results.</div>
          <div class="text-center text-body-1 mb-8" style="max-width: 600px; margin: 0 auto;">
            Repetitive work wastes time, introduces errors, and burns out teams. I build custom automation tools that let businesses move faster with fewer mistakes — from backend processing to external integrations.
          </div>
        </v-col>
      </v-row>

      <!-- What I Automate -->
      <h2 class="text-h5 font-weight-bold text-center mb-4">What I Automate</h2>
      <v-row justify="center" align="stretch" class="mb-8">
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🔁</div>
            <div class="font-weight-bold mb-1">Data Syncing</div>
            <div class="text-body-2">Automatically move data between systems, validate it, and transform it for use.</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">📤</div>
            <div class="font-weight-bold mb-1">Vendor Integrations</div>
            <div class="text-body-2">Connect your internal systems to clearinghouses, claims vendors, CRMs, etc.</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">📑</div>
            <div class="font-weight-bold mb-1">Document Generation & Delivery</div>
            <div class="text-body-2">Automate letters, reports, PDFs — and get them where they need to go (email, API, SFTP, or physical mail).</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">📞</div>
            <div class="font-weight-bold mb-1">API-Driven Calling Systems</div>
            <div class="text-body-2">Set up outbound IVR systems that check claim status or perform routine follow-up calls.</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4 text-center">
            <div style="font-size: 2rem;">🕵️</div>
            <div class="font-weight-bold mb-1">Monitoring & Alerts</div>
            <div class="text-body-2">Automated job monitoring, file watching, and logging — with alerts if things go sideways.</div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Tech I Use -->
      <h2 class="text-h5 font-weight-bold text-center mb-2">Tech I Use</h2>
      <div class="text-center mb-8">
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">.NET 8</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Windows Services</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Azure Functions</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Entity Framework Core</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Dapper</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">SQL Server</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Message Queues</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Service Buses</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">NLog</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Custom Monitoring Hooks</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">JSON</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">CSV</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">HL7</v-chip>
        <v-chip class="ma-1" color="secondary" style="background-color:#A65C1B !important;color:#fff !important;">Custom File Formats</v-chip>
      </div>

      <!-- Common Results -->
      <h2 class="text-h5 font-weight-bold text-center mb-2">Common Results</h2>
      <v-row justify="center" class="mb-8">
        <v-col cols="12" sm="4">
          <v-card elevation="4" class="pa-4 text-center">
            <div style="font-size: 2rem;">⏱️</div>
            <div class="font-weight-bold mb-1">80% time saved</div>
            <div class="text-body-2">on manual claim uploads</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card elevation="4" class="pa-4 text-center">
            <div style="font-size: 2rem;">💰</div>
            <div class="font-weight-bold mb-1">Thousands saved</div>
            <div class="text-body-2">in missed billing due to automation</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card elevation="4" class="pa-4 text-center">
            <div style="font-size: 2rem;">📉</div>
            <div class="font-weight-bold mb-1">90%+ error reduction</div>
            <div class="text-body-2">Error rates cut by over 90%</div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Client Example Placeholder -->
      <div class="text-center mb-8" style="opacity: 0.7;">
        <em>Client example coming soon: Letter Generator system, Availity coverage checker, etc.</em>
      </div>

      <!-- Call to Action -->
      <div class="text-center mb-6">
        <h2 class="text-h5 font-weight-bold mb-2">Ready to automate your bottlenecks?</h2>
        <v-btn color="primary" size="x-large" class="font-weight-bold" to="/hire">Let's Talk</v-btn>
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