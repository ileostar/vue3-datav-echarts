<template>
    <div class="CircularGraph">
      <div ref="huanOne" class="chart"></div>
      <div ref="huanTwo" class="chart"></div>
      <div ref="huanThree" class="chart"></div>
      <div ref="huanFour" class="chart"></div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from "vue";

const huanOne = ref();
const huanTwo = ref();
const huanThree = ref();
const huanFour = ref();

onMounted(() => {
    One()
    Two()
    Three()
    Four()
})

const One =()=> {
    const myChart = echarts.init(huanOne.value);
    
    // 此处粘贴图表代码
    let option = {
        
        tooltip: {
            trigger: 'none' // 取消触发显示对应数字
        },
        legend: {
            show: false
        },

        series: [{
            name: '',
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            // adjust the start angle
            startAngle: 220,
            label: {
                show: true,
                position: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                formatter(param) {
                    // correct the percentage
                    return (
                        param.name + '\n' + ' (' + Math.ceil(param.percent * 1.34) + '%)'
                    );
                }
            },

            data: [{
                    value: 1200,
                    name: '出货及时率',
                    itemStyle: {
                        color: 'rgb(159, 224, 128)'
                    }
                }, {
                    value: 800,
                    name: '出货超时率',
                    itemStyle: {
                        color: 'rgb(238, 238, 238)'
                    }
                },

                {
                    // make an record to fill the bottom 50%
                    value: 148 + 530 + 18,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                            symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }]
    }
    
    myChart.setOption(option)
}
const Two =()=> {
    const myChart = echarts.init(huanTwo.value);
    
    // 此处粘贴图表代码
    let option = {
        tooltip: {
            trigger: 'none' // 取消触发显示对应数字
        },
        legend: {
            show: false
        },

        series: [{
            name: '',
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            // adjust the start angle
            startAngle: 220,
            label: {
                show: true,
                position: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                formatter(param) {
                    // correct the percentage
                    return (
                        param.name + '\n' + ' (' + Math.ceil(param.percent * 1.34) + '%)'
                    );
                }
            },

            data: [{
                    value: 1500,
                    name: '生产及时率',
                    itemStyle: {
                        color: 'rgb(249, 203, 128)'
                    }
                }, {
                    value: 500,
                    name: '生产超时率',
                    itemStyle: {
                        color: 'rgb(238, 238, 238)'
                    }
                },

                {
                    // make an record to fill the bottom 50%
                    value: 148 + 530 + 18,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                            symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }]
    }
    
    myChart.setOption(option)
}
const Three =()=> {
    const myChart = echarts.init(huanThree.value);
    
    // 此处粘贴图表代码
    let option = {
        tooltip: {
            trigger: 'none' // 取消触发显示对应数字
        },
        legend: {
            show: false
        },

        series: [{
            name: '',
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            // adjust the start angle
            startAngle: 220,
            label: {
                show: true,
                position: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                formatter(param) {
                    // correct the percentage
                    return (
                        param.name + '\n' + ' (' + Math.ceil(param.percent * 1.34) + '%)'
                    );
                }
            },

            data: [{
                    value: 1400,
                    name: '订单进度',
                    itemStyle: {
                        color: 'rgb(98, 177, 238)'
                    }
                }, {
                    value: 600,
                    name: '未完成订单',
                    itemStyle: {
                        color: 'rgb(238, 238, 238)'
                    }
                },

                {
                    // make an record to fill the bottom 50%
                    value: 148 + 530 + 18,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                            symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }]
    }
    
    myChart.setOption(option)
}
const Four =()=> {
    const myChart = echarts.init(huanFour.value);
    
    // 此处粘贴图表代码
    let option = {
        tooltip: {
            trigger: 'none' // 取消触发显示对应数字
        },
        legend: {
            show: false
        },

        series: [{
            name: '',
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            // adjust the start angle
            startAngle: 220,
            tooltip: {
                trigger: 'none' // 取消触发显示对应数字
            },
            label: {
                show: true,
                position: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                formatter(param) {
                    // correct the percentage
                    return (
                        param.name + '\n' + ' (' + Math.ceil(param.percent * 1.34) + '%)'
                    );
                }
            },

            data: [{
                    value: 1800,
                    name: '设备状态',
                    itemStyle: {
                        color: 'rgb(248, 241, 88)'
                    }
                }, {
                    value: 200,
                    name: '设备故障',
                    itemStyle: {
                        color: 'rgb(238, 238, 238)'
                    }
                },

                {
                    // make an record to fill the bottom 50%
                    value: 148 + 530 + 18,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                            symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }]
    }
    
    myChart.setOption(option)
}
</script>

<style scoped>
.CircularGraph {
  width: 100%;
  height: 100%;
  display: flex;
}
.chart {
  Width: 23.5%;
  Height: 84%;
  margin-top: -10px;
}
</style>