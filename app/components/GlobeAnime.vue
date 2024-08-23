<script setup lang="ts">
// import { UseClipboard } from "@vueuse/components"
import anime from "animejs"
import Typed from "typed.js"

const darkMode = useDark()

const { copy, copied } = useClipboard({ source: "npm install eldoraui" })

const refContainer = ref<HTMLElement | null>(null)
const typerRef = ref<HTMLElement | null>(null)

const dots = [
  {
    id: "dot1",
    type: "dot",
    left: "50%",
    top: "29.9%",
    delay: 1,
  },
  {
    id: "dot2",
    type: "dot",
    left: "24.3%",
    top: "50.2%",
    delay: 1,
  },
  {
    id: "dot3",
    type: "dot",
    left: "77.8%",
    top: "63.4%",
    delay: 1,
  },
]

const svgs = [
  {
    id: "svg1",
    type: "svg",
    viewbox: "0 0 155 284",
    width: "15.244%",
    height: "41.24%",
    left: "38.8%",
    top: "31.2%",
    path: "M.797 283.216c14.605-22.693 64.498-78.738 87.739-104.396-22.406-17.823-47.852-46.354-57.983-58.555 36.536-29.153 96.735-65.699 122.267-80.327-6.727-8.041-21.226-27.282-26.518-39.053",
    x1: "100%",
    x2: "100%",
    y1: "-20%",
    y1config: {
      initial: "-20%",
      frames: ["-20%", "100%"],
    },
    y2: "0",
    y2config: {
      initial: "0",
      frames: ["0", "130%"],
    },
    duration: 350,
    delay: 1350,
    offset: 0,
    easing: "linear",
  },
  {
    id: "svg2",
    type: "svg",
    viewbox: "0 0 272 235",
    width: "27.458%",
    height: "34.045%",
    left: "50.8%",
    top: "31.4%",
    path: "M271.749 233.614C215.075 230.474 159.599 210.964 138.945 201.602C144.38 186.681 156.517 152.612 161.587 135.71C126.058 122.39 44.25 76.75 1.25 0.75",
    x1: "100%",
    x2: "100%",
    y1: "-20%",
    y1config: {
      initial: "-20%",
      frames: ["-20%", "100%"],
    },
    y2: "0",
    y2config: {
      initial: "0",
      frames: ["0", "130%"],
    },
    duration: 300,
    delay: 1350,
    offset: 0,
    easing: "linear",
  },
  {
    id: "svg3",
    type: "svg",
    viewbox: "0 0 261 144",
    width: "26.687%",
    height: "20.49%",
    left: "25.1%",
    top: "31.4%",
    path: "M260.5 1.5C157.75 30.75 67.75 89 1.13281 143.202",
    x1: "100%",
    x2: "100%",
    y1: "-20%",
    y1config: {
      initial: "-20%",
      frames: ["-20%", "100%"],
    },
    y2: "0",
    y2config: {
      initial: "0",
      frames: ["0", "130%"],
    },
    duration: 200,
    delay: 1350,
    offset: 0,
    easing: "linear",
  },
]

function animate() {
  const tl = anime.timeline({
    loop: false,
    autoplay: true,
  })

  svgs.forEach((s) => {
    tl.add(
      {
        targets: `#functions-hero #${s.id} linearGradient`,
        y2: s.y2config.frames,
        easing: s.easing,
        duration: s.duration,
        delay: s.delay,
      },
      s.offset,
    )
  })

  const typed = new Typed(typerRef.value, {
    strings: ["npm install eldoraui"],
    typeSpeed: 10,
    startDelay: 300,
    showCursor: false,
    loop: false,
  })

  setTimeout(() => {
    typed.start()
    tl.play()
  }, 100)

  return () => {
    typed.destroy()
  }
}

onMounted(() => {
  animate()
})
</script>

<template>
  <div
    id="functions-hero"
    ref="refContainer"
    class="
      absolute inset-0
      -left-28 top-4 aspect-[978/678] w-[150%] sm:-left-32
      sm:-top-2 md:-left-44
      md:w-[150%]
      lg:-left-10 lg:-top-10 lg:w-[130%]
      xl:-left-32 xl:w-[130%]
    "
  >
    <!-- Snippet element -->
    <div
      class="
        animate-fade-in absolute left-1/4 top-[2%] z-20 flex h-auto w-3/5 flex-1
        items-center justify-center opacity-0
        sm:left-[34%] sm:top-[6%] sm:w-[35%]
        md:left-[33.5%] md:top-[6%] md:w-[35%]
        lg:left-[26%] lg:top-[3%] lg:w-[52%]
        xl:left-[28%] xl:top-[3%] xl:w-[48%]
        2xl:left-[32%] 2xl:top-[3%] 2xl:w-2/5
      "
    >
      <button
        class="hover:border-strong bg-alternative group flex w-full items-center gap-1 rounded-xl border px-3 py-2 sm:gap-2"
        @click="copy()"
      >
        <div class="font-mono text-sm text-foreground">
          $
        </div>

        <div ref="typerRef" class="animate-fade-in flex-1 text-left font-mono text-xs text-foreground opacity-0 md:text-sm" />

        <div class="rounded p-1.5 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          <span v-if="copied" className="text-foregound">
            <LucideCheck class-name="w-3 h-3.5" />
          </span>
          <LucideCopy v-else class-name="w-3.5 h-3.5" />
        </div>
      </button>
    </div>

    <!-- Animated svgs in globe -->
    <svg
      v-for="s in svgs"
      :id="s.id"
      :key="s.id"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      :viewBox="s.viewbox"
      class="absolute"
      :style="{ width: s.width, height: s.height, left: s.left, top: s.top }"
    >
      <path :stroke="`url(#lg-${s.id})`" strokeWidth="1.396" :d="s.path" />

      <defs>
        <linearGradient :id="`lg-${s.id}`" x1="100%" x2="100%" :y1="s.y2config.initial" :y2="s.y2config.frames[1]" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="darkMode ? '#000000' : '#FFFFFF'" stop-opacity="0" />
          <stop offset="0.5" :stop-color="darkMode ? '#000000' : '#FFFFFF'" stop-opacity="0.6" />
          <stop offset="1" :stop-color="darkMode ? '#000000' : '#FFFFFF'" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>

    <!-- Dots on globe -->
    <div
      v-for="dot in dots"
      :id="dot.id"
      :key="dot.id"
      :style="{ left: dot.left, top: dot.top }"
      class="animate-fade-in absolute flex h-[3.6%] w-[2.5%] origin-center items-center justify-center opacity-0 transition-opacity delay-75"
    >
      <span class="absolute inset-0 size-full rounded-full bg-black/20 dark:bg-white" />
      <span class="absolute size-4/5 rounded-full bg-black/90 dark:bg-white" />
    </div>

    <div className="absolute left-[51.15%] top-[10%] w-px h-[20%] overflow-hidden">
      <span className="absolute inset-0 w-full bg-gradient-to-t from-current to-transparent h-full delay-1200 animate-slide-in" />
    </div>

    <!-- Globe background -->
    <NuxtImg
      src="/usage/globe-light.svg"
      alt="globe wireframe"
      :width="400"
      :height="400"
      class="size-full"
      :class="darkMode ? 'hidden' : 'block'"
      :quality="100"
    />
    <NuxtImg
      src="/usage/globe.svg"
      alt="globe wireframe"
      :width="400"
      :height="400"
      class="size-full"
      :class="darkMode ? 'block' : 'hidden'"
      :quality="100"
    />
  </div>
</template>
