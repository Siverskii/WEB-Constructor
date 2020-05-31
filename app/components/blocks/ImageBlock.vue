<template>
<div class="image-block-container">
  <img class="img" :src="require(`../../assets/img/${data}`)">
  <BlockMenu v-on:delete-block =  "deleteBlock(id)"/>
</div>
</template>
 
<script>
import { mapMutations } from 'vuex';
import BlockMenu from './BlockMenu';
export default {
  name: 'ImageBlock',
  props:['data','id'],
  components: {
      BlockMenu
  },
  methods: {
    ...mapMutations([
    'deleteBlock'
  ])
  },
}
</script>

<style scoped>
.image-block-container{
  margin: 5rem;
  position: relative;
  display: flex;
  justify-content: center;
}
.img{
  width: 50%;
}
</style>>