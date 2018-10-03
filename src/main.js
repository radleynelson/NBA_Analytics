// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Charts from 'fusioncharts/fusioncharts.charts';
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts/core";
import Pie3D from "fusioncharts/viz/pie3d";
import axios from 'axios';
import VCharts from 'v-charts'



// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Pie3D, Charts);
//Charts(FusionCharts);
Vue.use(VCharts)



Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
