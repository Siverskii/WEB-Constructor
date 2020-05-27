<template>
  <section class="greeting-container">
    <TopMenu type='greeting'/>
    <div class='btn' @click="begineConstruct()">Создать новую страницу</div>
    <div v-show="isContinue" class='btn' @click="continueConstruct()">Продолжить редактирование</div>
  </section>
</template>
 
<script>
import { mapMutations } from 'vuex';
import TopMenu  from './TopMenu';
export default {
  name: 'Greeting',
  data: function () {
    return {
      isContinue:false
    }
  },
  components: {
      TopMenu
  },
  methods: {
    ...mapMutations([
      'begineConstruct',
      'continueConstruct'
    ])
  },
  created(){
    if(localStorage.getItem('webConstructorStore') != undefined){
      this.isContinue = true;
    }
  }

}
</script>

<style scoped>
html,body{
  width: 100%;
  height: 100%;
}
.greeting-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}
.btn{
  background: #ffbda6;
  border-radius: .25rem;
  height: 2rem;
  padding: .25rem;
  margin: 2rem;
  font-size: 1.15rem;
  line-height: 2rem;
  box-shadow: 0px 0px 2px 0px #737373;
  cursor: pointer;
}
.btn:active{
  box-shadow: 0px 0px 1px 0px #737373;
}
.btn:hover{
  background:#ffb196;
}
</style>
 
