import { createApp } from 'vue'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import * as echarts from 'echarts';//引入echarts

const app = createApp(App)

app.config.globalProperties.$echarts = echarts;//全局使用

app.use(DataVVue3).mount('#app')
