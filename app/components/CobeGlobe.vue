<script setup lang="ts">
import createGlobe from "cobe"

const canvasRef = ref<HTMLCanvasElement | null>(null)
const phi = ref(0)

let globe: ReturnType<typeof createGlobe> | null = null
let width = 0

const onResize = () => canvasRef.value && (width = canvasRef.value.offsetWidth)

onMounted(() => {
  window.addEventListener("resize", onResize)

  onResize()

  globe = createGlobe(canvasRef.value!, {
    devicePixelRatio: 2,
    width: width * 2,
    height: width * 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 3,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1.2, 1.2, 1.2],
    markers: [],
    onRender: (state) => {
      state.phi = phi.value
      phi.value += 0.005
      state.width = width * 2
      state.height = width * 2
    },
  })

  setTimeout(() => canvasRef.value!.style.opacity = "1")
})

onBeforeUnmount(() => {
  globe?.destroy()
  window.removeEventListener("resize", onResize)
})
</script>

<template>
  <div class="relative m-auto aspect-square w-full max-w-[600px]">
    <canvas
      ref="canvasRef"
      class="size-full opacity-0 transition-opacity duration-1000 ease-in"
      style="contain: layout paint size;"
    />
  </div>
</template>
