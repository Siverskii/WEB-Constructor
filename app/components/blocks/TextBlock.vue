<template>
<div contenteditable="true" class="text-block-container">
      {{data}}
</div>
</template>
 
<script>
export default {
  name: 'TextBlock',
  props:['data'],
}
</script>
<style scoped>
  .text-block-container{
    margin: 5rem;
  }
</style>>
 
