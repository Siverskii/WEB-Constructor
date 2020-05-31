<template>
<div class="block-menu-container">
    <div v-if = "type == 'BlockMenu'" class = "fontContainer">
        Шрифт: 
        <div @click = "$emit('change-font',$event,'add')" class="fontSizeReg">+</div>
        <div @click = "$emit('change-font',$event,'sub')" class="fontSizeReg">-</div>
    </div>
    <div @click = "$emit('delete-block')" class="block-menu-btn">&#215;</div>
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
        justify-content: space-between;
        
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
    .fontContainer{
        width: 5rem;
        margin-right: auto;
        display: flex;
        line-height: 2.5rem;
    }
    .fontSizeReg{
        font-size: 1.75rem;
        padding: 0 .5rem;
        cursor: pointer;
    }
    .fontSizeReg:hover{
        text-shadow: 0 0 1px #ff4949;
    }
</style>