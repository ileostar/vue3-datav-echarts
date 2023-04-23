<template>
  <div class="boxThree">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

var app = {};

// 一进来就调用
onMounted(() => {
  init()
})

const chart = ref();
const categories = (function () {
  let now = new Date();
  let res = [];
  let len = 10;
  while (len--) {
    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
    now = new Date(+now - 2000);
  }
  return res;
})();
const categories2 = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(10 - len - 1);
  }
  return res;
})();
const data = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(Math.round(Math.random() * 1000));
  }
  return res;
})();
const data2 = (function () {
  let res = [];
  let len = 0;
  while (len < 10) {
    res.push(+(Math.random() * 10 + 5).toFixed(1));
    len++;
  }
  return res;
})();

const  init = async ()=> {
  let myChart = echarts.init(chart.value);
  let option = {
    title: {
      text: 'Dynamic Data',
      textStyle:{
          fontSize: 12,//字体大小
          color: '#ffffff'//字体颜色
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {
      textStyle:{
          fontSize: 12,//字体大小
          color: '#ffffff'//字体颜色
      },
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: categories,
      },
      {
        type: 'category',
        boundaryGap: true,
        data: categories2
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Price',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: 'Order',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: 'Dynamic Bar',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data
      },
      {
        name: 'Dynamic Line',
        type: 'line',
        data: data2
      }
    ],
    textStyle:{
          fontSize: 12,//字体大小
          color: '#ffffff'//字体颜色
      },
  };


app.count = 11;
setInterval(function () {
    let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
    data.shift();
    data.push(Math.round(Math.random() * 1000));
    data2.shift();
    data2.push(+(Math.random() * 10 + 5).toFixed(1));
    categories.shift();
    categories.push(axisData);
    categories2.shift();
    categories2.push(app.count++);
    myChart.setOption({
      xAxis: [
        {
          data: categories
        },
        {
          data: categories2
        }
      ],
      series: [
        {
          data: data
        },
        {
          data: data2
        }
      ]
    });
  }, 2100);

  myChart.setOption(option)
}
</script>

<style scoped>

.boxThree {
  Width: 90%;
  Height: 100%;
  padding: 20px;
}
.chart {
  Width: 100%;
  Height: 100%;
}
</style>