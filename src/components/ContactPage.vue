<script setup lang="ts">
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
      background: backgroundColor,
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
    <v-container style="max-width: 800px; position: relative; z-index: 1;">
      <v-card elevation="8" class="pa-8">
        <h1 class="text-h4 font-weight-bold mb-4 text-primary text-center">Contact Me</h1>
        <p class="mb-8 text-center text-grey-darken-1">Have a project in mind or just want to say hi? Fill out the form below.</p>
        <v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Your Name" variant="outlined" required aria-label="Enter your full name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Your Email" variant="outlined" required type="email" aria-label="Enter your email address"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Your Message" variant="outlined" required rows="5" aria-label="Enter your message"></v-textarea>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn color="primary" size="large" type="submit" aria-label="Send your message">Send Message</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
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