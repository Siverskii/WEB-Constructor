import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex';
import {defaultContent} from './defaultContent'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    activeSection: 'Greeting',
    content:[]
  },
  mutations: {
    saveContentStore(state) {
      localStorage.setItem('webConstructorStore',JSON.stringify(state.content));
		},
    begineConstruct(state) {
      state.content = [];
      state.activeSection = 'constructor';
    },
    continueConstruct(state){
      state.content = JSON.parse(localStorage.getItem('webConstructorStore'));
      state.activeSection = 'constructor';
    },
    changeActiveSection(state,section){
      state.activeSection = section;
    },
    addBlock(state,block){
      if(block == 'text'){
        state.content.push({
          id:Date.now(),
          type:'TextBlock',
          data:defaultContent.text
      });
      }else if(block == 'img'){
        state.content.push({id:Date.now(),type:'ImageBlock',data:defaultContent.image});
      }
    },
    changeContent(state,block){
      let content = state.content.map((item)=>{
          if(item.id == block.id){
            item.data = block.data;
            item.type = "TextBlock"
          } 
        return item;
      })
      state.content = [...content];
    },
    deleteBlock(state,id){
      let content = state.content.filter(item => item.id != id);
      state.content = [...content];
    }
  }
})


new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})


