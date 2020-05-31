<template>
<div class="block-menu-container">
    <div @click = "()=>this.$emit('delete-block')" class="block-menu-btn">&#215;</div>
</div>
</template>
 
<script>
export default {
  name: 'BlockMenu',
  props:['type'],
}
</script>
<style scoped>
    .block-menu-container{
        width: 100%;
        position: absolute;
        top:-3rem;
        left: 0;
        display: flex;
        
    }
    .block-menu-btn{
        color: #ffb196;
        text-align: center;
        line-height: 2.5rem;
        font-size: 2.2rem;
        margin-left: auto;
        cursor: pointer;
    }
    .block-menu-btn:hover{
        text-shadow: 0 0 1px #ff4949;
    }
</style>