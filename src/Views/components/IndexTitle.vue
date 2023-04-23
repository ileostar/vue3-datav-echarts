<template>
    <div small-bg>
      <dv-decoration-11 class="title">
        <div color-white font-600 bg="~ dark/0" class="title-text" ref="chart">        
        </div>
      </dv-decoration-11>
    </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

// 一进来就调用
onMounted(() => {
  init()
})

const chart = ref();

const  init = async ()=> {
  const myChart = echarts.init(chart.value);
  let option = {
    graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: '门窗加工产线MES系统驾驶舱',
          fontSize: 23,
          fontWeight: 'normal',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#fff',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 3000,
          loop: true,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              // Stop for a while.
              percent: 3.2,
              style: {
                fill: 'transparent'
              }
            },
            {
              percent: 1,
              style: {
                fill: '#fff'
              }
            }
          ]
        }
      }
    ]
  }
  };
  myChart.setOption(option)
}

</script>

<style scoped>
.title {
  width:400px;
  height:60px;
  margin:0 auto;
}
.title-text {
  width: 80%;
  height: 55%;
}
</style>