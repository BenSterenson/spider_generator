import Vue from 'vue';
import App from './components/App/app.vue';

const app = new Vue({
    el: '#my-app',
    components: {
        App
    },
    render(h) {
        return h(App);
    }
});