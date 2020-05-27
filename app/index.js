import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex';

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
          type:'TextBlock',
          data:`Я помню чудное мгновенье:
          Передо мной явилась ты,
          Как мимолетное виденье,
          Как гений чистой красоты.
          В томленьях грусти безнадежной,
          В тревогах шумной суеты,
          Звучал мне долго голос нежный
          И снились милые черты.
          Шли годы. Бурь порыв мятежный
          Рассеял прежние мечты,
          И я забыл твой голос нежный,
          Твои небесные черты.
          В глуши, во мраке заточенья
          Тянулись тихо дни мои
          Без божества, без вдохновенья,
          Без слез, без жизни, без любви.
          Душе настало пробужденье:
          И вот опять явилась ты,
          Как мимолетное виденье,
          Как гений чистой красоты.
          И сердце бьется в упоенье,
          И для него воскресли вновь
          И божество, и вдохновенье,
          И жизнь, и слезы, и любовь.`
      });
      }else if(block == 'img'){
        state.content.push({type:'ImageBlock',data:"picture.jpg"});
      }
    }
  }
})


new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})


