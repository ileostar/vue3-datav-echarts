<template>
    <div class="index">    
      <div class="header">
        <IndexTitle></IndexTitle>
      </div>
      <div class="boxOne">
        <dv-border-box10>
          <StackedLine class="item"></StackedLine>
        </dv-border-box10>
      </div>
      <div class="boxTwo">
        <dv-border-box1>
          <BoxThree></BoxThree>
        </dv-border-box1>
      </div>
      <div class="boxThree">
        <dv-border-box10>    
          <dv-scroll-ranking-board class="item" :config="config" style="width:25vw;height:100%" />
        </dv-border-box10>
      </div>
      <div class="boxFour">
        <dv-border-box3>
          <CircularGraph  class="item"></CircularGraph>
        </dv-border-box3>
      </div>
      <div class="boxFive">
        <dv-border-box9>
          <dv-active-ring-chart class="item" :config="conf" style="width:27vw;height:90%;" />
        </dv-border-box9>
      </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import IndexTitle from './components/IndexTitle.vue';
import StackedLine from './components/StackedLine.vue';
import BoxThree from './components/BoxThree.vue';
import CircularGraph from './components/CircularGraph.vue';
import { BorderBox9 as DvBorderBox9 } from '@kjgl77/datav-vue3'
import { BorderBox10 as DvBorderBox10 } from '@kjgl77/datav-vue3'
import { BorderBox1 as DvBorderBox1 } from '@kjgl77/datav-vue3'
import { BorderBox3 as DvBorderBox3 } from '@kjgl77/datav-vue3'


const conf = reactive({
  lineWidth: 24,
  digitalFlopStyle: {
    fill: 'pink',
  },
  data: [
    {
      name: '未用料',
      value: 200,
    },
    {
      name: '余料',
      value: 80,
    },
    {
      name: '废料',
      value: 10,
    }
  ],
  color: [
    '#62b1ee',
    '#f8f158',
    '#0000ff',
  ]
})


const config = reactive({
  data: [
    {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
    {
      name: '西峡',
      value: 78,
    },
    {
      name: '驻马店',
      value: 66,
    },
    {
      name: '新乡',
      value: 80,
    },
    {
      name: '信阳',
      value: 45,
    },
    {
      name: '漯河',
      value: 29,
    },
  ],
  unit: '万元',
})
</script>

<style scoped>
  .index {
    width:98vw;
    height:96vh;
    margin:0 auto;
    margin-top: 2vh;

    display:grid;      /*grid布局*/
    grid-template-columns:30% auto 30%;  /*设置列*/
    grid-template-rows:10% auto 40%;   /*设置行*/

    grid-template-areas:
    "header header header"
    "boxOne boxTwo boxThree"
    "boxFour boxFour boxFive";

    grid-column-gap: 10px;  /*设置列间距*/
    grid-row-gap: 10px; /*设置行间距*/
  }

  .header {
    grid-area: header;
    display: flex;
    justify-content: center;
  }

  .boxOne {
    grid-area: boxOne;
    overflow: hidden;
  }

  .boxTwo {
    grid-area: boxTwo;
    overflow: hidden;

  }
  .boxThree {
    grid-area: boxThree;
    overflow: hidden;
  }
  .boxFour {
    grid-area: boxFour;
    overflow: hidden;
  }
  .boxFive {
    grid-area: boxFive;
    overflow: hidden;
  }

  .item {
    padding: 20px;
    margin: auto;
  }

</style>
