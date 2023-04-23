<template>
    <div class="StackedLine">
      <div ref="line" class="chart"></div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from "vue";

const line = ref();

onMounted(() => {
  init()
})

const init =()=> {
    const myChart = echarts.init(line.value);
    
    // 此处粘贴图表代码
    let option = {
      title: {
        text: '车间实时产量统计',
        textStyle:{
            fontSize: 12,//字体大小
            color: '#ffffff'//字体颜色
        },
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['计划产量', '实际产量'],
        textStyle:{
            fontSize: 12,//字体大小
            color: '#ffffff'//字体颜色
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '3月', '5月', '7月', '9月', '11月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '计划产量',
          type: 'line',
          data: [200, 190, 220, 170, 230, 230]
        },
        {
          name: '实际产量',
          type: 'line',
          data: [220, 180, 250, 190, 200, 330]
        }
      ],
      
      textStyle:{
            fontSize: 12,//字体大小
            color: '#ffffff'//字体颜色
        },
    }
    
    myChart.setOption(option)
}

</script>

<style scoped>
.StackedLine {
  Width: 90%;
  Height: 90%;
  padding: 20px;
}
.chart {
  Width: 100%;
  Height: 100%;
}
</style>