<template>
    <div class="index">    
      <div class="header">
        <IndexTitle></IndexTitle>
      </div>
      <div class="boxTwo">
        <dv-border-box13>   
          <BoxTwo></BoxTwo>
        </dv-border-box13>
      </div>
      <div class="boxThree">
        <BoxThree></BoxThree>
      </div>
      <div class="boxFour">
        <BoxFour></BoxFour>
      </div>
    </div>
</template>

<script setup>
import IndexTitle from './components/IndexTitle.vue';
import BoxTwo from './components/BoxTwo.vue';
import BoxThree from './components/BoxThree.vue';
import BoxFour from './components/BoxFour.vue';
import { BorderBox13 as DvBorderBox13 } from '@kjgl77/datav-vue3'
</script>

<style scoped>
  .index {
    width:98vw;
    height:98vh;
    margin:0 auto;
    margin-top: 1vh;

    display:grid;      /*grid布局*/
    grid-template-columns:33% auto 30%;  /*设置列*/
    grid-template-rows:10% auto 50%;   /*设置行*/

    grid-template-areas:
    "header header header"
    "boxTwo .  boxThree"
    "boxFour boxFour boxFour";

    grid-column-gap: 10px;  /*设置列间距*/
    grid-row-gap: 10px; /*设置行间距*/
  }

  .header {
    grid-area: header;
    display: flex;
    justify-content: center;
  }
  .boxTwo {
    grid-area: boxTwo;
  }
  .boxThree {
    grid-area: boxThree;
  }
  .boxFour {
    grid-area: boxFour;
  }


</style>
