import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connected: false,
        api_key: localStorage.getItem('api_key') || null,
        user: (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null),
        customer: null,
        rentalProducts: [],
    },
    mutations: {
        login(state, data) {
            state.user = data
            state.api_key = data.SESSIONID
        },
        logout(state) {
            localStorage.removeItem('user')
            localStorage.removeItem('api_key')
            state.user = null
            state.api_key = null
            state.customer = null
            state.rentalProducts = []
            router.push('/login')
        },
        updateCustomer(state, customer) {
            state.customer = customer
        },
        updateRentalProducts(state, products) {
            state.rentalProducts = products
        }
    }
})
