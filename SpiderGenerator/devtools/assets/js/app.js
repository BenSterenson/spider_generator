import Vue from 'vue';
import App from './components/App/app.vue';

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);


const app = new Vue({
    el: '#my-app',
    components: {
        App
    },
    render(h) {
        return h(App);
    }
});