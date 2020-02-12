import Vue from 'vue';
import App from './components/App/app.vue';

import { MdButton, MdContent, MdCard, MdField} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdCard);
Vue.use(MdField);


const app = new Vue({
    el: '#my-app',
    components: {
        App
    },
    render(h) {
        return h(App);
    }
});