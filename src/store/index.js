import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    // url:'/api',
    url: 'http://localhost:8000/api',
    // url: 'https://redgoldinvest.com/api',
    domains:[],
    profiles:[],
    accounts:[],
    deposits:[],
    payments:[],
    withdraw:[],
    users:[],
    coins:[],
    filteredCoins:[]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
