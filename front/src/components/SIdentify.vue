<template>
  <div class="s-canvas">
    <canvas id="s-canvas" :width="props.contentWidth" :height="props.contentHeight"></canvas>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';

const props = defineProps({
  identifyCode: {
    type: String,
    default: '1234'
  },
  fontSizeMin: {
    type: Number,
    default: 35
  },
  fontSizeMax: {
    type: Number,
    default: 35
  },
  backgroundColorMin: {
    type: Number,
    default: 180
  },
  backgroundColorMax: {
    type: Number,
    default: 240
  },
  colorMin: {
    type: Number,
    default: 50
  },
  colorMax: {
    type: Number,
    default: 160
  },
  lineColorMin: {
    type: Number,
    default: 100
  },
  lineColorMax: {
    type: Number,
    default: 200
  },
  dotColorMin: {
    type: Number,
    default: 0
  },
  dotColorMax: {
    type: Number,
    default: 255
  },
  contentWidth: {
    type: Number,
    default: 120
  },
  contentHeight: {
    type: Number,
    default: 40
  }
})

// Generate a random number
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// Generate a random color
const randomColor = (min, max) => {
  let r = randomNum(min, max)
  let g = randomNum(min, max)
  let b = randomNum(min, max)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

// Draw interference lines
const drawLine = (ctx) => {
  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = randomColor(props.lineColorMin, props.lineColorMax)
    ctx.beginPath()
    ctx.moveTo(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight))
    ctx.lineTo(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight))
    ctx.stroke()
  }
}

const drawText = (ctx, txt, i) => {
  ctx.fillStyle = randomColor(props.colorMin, props.colorMax)
  ctx.font = randomNum(props.fontSizeMin, props.fontSizeMax) + 'px SimHei'
  let x = (i + 1) * (props.contentWidth / (props.identifyCode.length + 1))
  let y = randomNum(props.fontSizeMax, props.contentHeight - 5)
  var deg = randomNum(-10, 10)
  // Modify the coordinate origin and rotation angle
  ctx.translate(x, y)
  ctx.rotate(deg * Math.PI / 100)
  ctx.fillText(txt, 0, 0)
  // Restore coordinate origin and rotation angle
  ctx.rotate(-deg * Math.PI / 100)
  ctx.translate(-x, -y)
}

const drawDot = (ctx) => {
  // Draw interference points
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = randomColor(0, 255)
    ctx.beginPath()
    ctx.arc(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight), 1, 0, 2 * Math.PI)
    ctx.fill()
  }
}

const drawPic = () => {
  let canvas = document.getElementById('s-canvas')
  let ctx = canvas.getContext('2d')
  ctx.textBaseline = 'bottom'
  // Drawing the background
  ctx.fillStyle = randomColor(props.backgroundColorMin, props.backgroundColorMax)
  ctx.fillRect(0, 0, props.contentWidth, props.contentHeight)
  // Draw Text
  for (let i = 0; i < props.identifyCode.length; i++) {
    drawText(ctx, props.identifyCode[i], i)
  }
  drawLine(ctx)
  drawDot(ctx)
}

watch(() => props.identifyCode, (newValue, oldValue) => {
  drawPic()
})

onMounted(() => {
  drawPic()
})
</script>
<style scoped lang='css'>
.s-canvas {
  cursor: pointer;
}
</style>
