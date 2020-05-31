<template>
<div class="text-block-container">
  <div  @input="changeContent({data:$event.target.innerText,id})"  
        :style="style" 
        contenteditable="true"
        autocomplete="off" type="text"
        ref = "input">
  </div>
  <BlockMenu :type="'BlockMenu'" @change-font="changeFont" @delete-block="deleteBlock(id)"/>
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
      size: 1,
    }
  },
  methods: {
    changeFont:function(e,type){
      if(type == "sub") this.size =  this.size - .25;
      if(type == "add") this.size =  this.size + .25;
    },
     ...mapMutations([
      'changeContent',
      'deleteBlock'
    ])
  },
  computed: {
    fontSize: function(){
      return  this.size + 'rem';
    },
      style () {
        return {fontSize: this.fontSize};
      }
  },
  mounted:function(){
    this.$refs.input.innerText = this.data;
  },
}
</script>
<style scoped>
  .text-block-container{
    margin: 5rem;
    position: relative;
  }
</style>
 
