import Vue from 'vue'
//import App from './App.vue'

//Vue.config.productionTip = false

//new Vue({
//  render: h => h(App),
//}).$mount('#app')

import wrap from '@vue/web-component-wrapper';
import FirstWebComponent from './components/FirstWebComponent';

const CustomElement = wrap (Vue, FirstWebComponent);
window.customElements.define('first-web-component', CustomElement);