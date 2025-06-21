<script setup lang="ts">
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()
const backgroundColor = computed(() => theme.current.value.colors.background)
const aboutTextColor = computed(() =>
  theme.global.current.value.dark ? '#eee' : '#333'
)

const symbolList = ['{ }', '&lt;/&gt;', '()', '[ ]', ';', '&lt;?&gt;', '=&gt;']
const getRandom = (min, max) => Math.random() * (max - min) + min

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
    />
    <v-container class="about-container" style="max-width: 900px; position: relative; z-index: 1;">
      <v-row>
        <v-col cols="12">
          <v-card elevation="8" color="surface" class="pa-6 mb-6">
            <h1 class="text-h4 font-weight-bold mb-2 text-primary">About The Code Kiln</h1>
            <div class="mb-4 about-text" :style="{ color: aboutTextColor }">
              Welcome to <b>The Code Kiln</b> — where ideas get fired into reality.<br /><br />
              I'm <b>Mo</b>, a solo full stack developer with a passion for building clean, practical, and sometimes delightfully unnecessary software. I've been in the game for years, specializing in healthcare tech, automation, and API-driven platforms. If it talks to a database, transforms data, or needs to run 24/7 without drama — I'm into it.
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card elevation="4" color="surface" class="pa-4 mb-6">
            <h2 class="text-h6 font-weight-bold mb-2 text-primary">🔧 My Tools of Choice</h2>
            <ul class="about-list about-text" :style="{ color: aboutTextColor }">
              <li><b>Frontend:</b> JavaScript, Vue, Bootstrap</li>
              <li><b>Backend:</b> C#, ASP.NET Core, Entity Framework, Dapper</li>
              <li><b>Data:</b> SQL Server, T-SQL</li>
              <li><b>Infra:</b> Azure, Kubernetes, Windows Services</li>
              <li><b>Testing:</b> xUnit, nUnit</li>
              <li><b>Logging & Monitoring:</b> NLog, custom observability hacks</li>
            </ul>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card elevation="4" color="surface" class="pa-4 mb-6">
            <h2 class="text-h6 font-weight-bold mb-2 text-primary">🎮 Outside the Kiln</h2>
            <ul class="about-list about-text" :style="{ color: aboutTextColor }">
              <li>Strategizing in a video game</li>
              <li>Listening to audiobooks (fantasy usually!)</li>
              <li>Getting a massage at my favorite local spa</li>
              <li>Building side projects I swear are just "for fun"</li>
            </ul>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card elevation="2" color="surface" class="pa-4">
            <h2 class="text-h6 font-weight-bold mb-2 text-primary">💡 Why "The Code Kiln"?</h2>
            <div class="about-text" :style="{ color: aboutTextColor }">
              A kiln is where raw material becomes something strong and lasting — that's how I approach code. Whether it's a rapid prototype or a production-grade system, it gets forged with care, heat, and the occasional bug exorcism.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.about-list {
  margin: 0 0 0 1.2em;
  padding: 0;
  font-size: 1.08rem;
}
.about-list li {
  margin-bottom: 0.5em;
  line-height: 1.5;
}
.about-container {
  margin-bottom: 80px;
}
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