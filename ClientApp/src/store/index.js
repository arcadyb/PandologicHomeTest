import { createStore } from 'vuex';
import jobsModule from './JobsModule/index';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        jobsModule: jobsModule
    }
});
// https://next.vuex.vuejs.org/guide/modules.html#accessing-global-assets-in-namespaced-modules
// https://stackoverflow.com/questions/63216740/use-mapactions-or-mapgetters-with-vuex-4-and-vue-3