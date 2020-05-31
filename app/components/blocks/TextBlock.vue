<template>
<div class="text-block-container">
  <div @input="changeContent({data:$event.target.innerText,id})" :style="style" contenteditable="true">
        {{data}}    
  </div>
  <BlockMenu v-on:delete-block = "deleteBlock(id)"/>
  </div>
</template>
 
<script>
import { mapMutations } from 'vuex';
import BlockMenu from './BlockMenu';
export default {
  name: 'TextBlock',
  props:['data','id'],
  components: {
      BlockMenu
  },
  data:function(){
    return{
      fontSize: '1rem'
    }
  },
  methods: {
     ...mapMutations([
      'changeContent',
      'deleteBlock'
    ])
  },
  computed: {
      style () {
        return {fontSize: this.fontSize};
      }
  },
}
</script>
<style scoped>
  .text-block-container{
    margin: 5rem;
    position: relative;
  }
</style>
 
