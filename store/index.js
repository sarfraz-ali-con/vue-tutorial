import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  // ... store configuration ...
  state: {
    msg: 'Hello Message',
    dataFromApi: null,
  },
  mutations: {
    update(state, payload) {
      state.msg = 'update';
      state.dataFromApi = payload;
    },
  },
  actions: {
    updateMessage(context){
      context.commit("update");
    },
  
    async fetchDataFromApi(context) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/show');
        context.commit('update', response);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    },
  },
      
});
export default store;
