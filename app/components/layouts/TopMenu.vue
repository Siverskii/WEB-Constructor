<template>
    <div class="topMenu-container">
        <div class="item-container">
            <div v-if = 'type === "constructor"'  @click="changeActiveSection('Greeting')" class="item">
                Меню
            </div>
            <div v-if = 'type === "constructor"' class="item block">
                 +Блок
                <div class="block-menu">
                    <div @click="addBlock('text')" class="block-item">Тесктовый блок</div>
                    <div @click="addBlock('img')" class="block-item">Изображение</div>
                </div>    
            </div>
        </div>
        <div class='title-container'>
            &#171;&#171; ES WEB CONSTRUCTOR &#187;&#187;
        </div>
        <div class="item-container">
            <div @click="saveContentStore()" v-if = 'type === "constructor"' class="item left">
                Сохранить
            </div>
        </div>
    </div>
</template>
 
<script>
import { mapMutations } from 'vuex';
export default {
  name: 'TopMenu',
  props: ['type'],
    methods: {
    ...mapMutations([
      'changeActiveSection',
      'addBlock',
      'saveContentStore'
    ])
  }
}
</script>

<style scoped>
.topMenu-container{
    width: 100%;
    height: 3.5rem;
    background: #100b04;
    display: flex;
    justify-content: center;
}
.title-container{
  font-size: 1.5rem;
  color: whitesmoke;
  line-height: 3.5rem;
  flex-grow: 1;
  text-align: center;
}
.item-container{
   width: 25%;
   color: whitesmoke;
   display: flex;
}
.item{
    height: 100%;
    line-height: 3.5rem;
    padding: 0 .25rem;
    cursor: pointer;
    border-right: 1px solid #b1b1b1;
    transition: all .15s;
    text-align: center;
}
.item:hover{
    border-color: #ffb196;
    color: #ffb196;
}

.block{
    position: relative;
    z-index: 100;
}

.block:hover > div{
    display: block;
}


.block-menu{
    width: 10rem;
    height: 7rem;
    display: none;
    position: absolute;
    top:3.5rem;
    left: -1px;
    background: #100b04;
    color: whitesmoke;
    transition: all .15s; 
}
.block-item:hover{
    color: #ffb196;
}
.left{
    margin-left: auto;
    border-right: none;
    border-left: 1px solid #b1b1b1;
}
</style>
 
