import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


import Calculator from './Calculator'
const store = new Vuex.Store({
    modules:{
        Calculator
    }
    
})
export default store