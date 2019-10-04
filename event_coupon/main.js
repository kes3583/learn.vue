import Vue from "vue";
import couponApp from "./couponApp";
export const EventBus = new Vue();
new Vue(couponApp).$mount('#root')

// export default {
//     el: '#root',
//     components: {
//         nav
//     }
// }