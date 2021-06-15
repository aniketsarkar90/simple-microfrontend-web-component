import Vue from 'vue'
//import App from './App.vue'

//Vue.config.productionTip = false

//new Vue({
//  render: h => h(App),
//}).$mount('#app')

import wrap from '@vue/web-component-wrapper';
import FooterWebComponent from './components/FooterWebComponent';

const CustomElement = wrap (Vue, FooterWebComponent);
window.customElements.define('footer-web-component', CustomElement);