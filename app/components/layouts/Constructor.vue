<template>
<div>
  <TopMenu type='constructor'/>
  <div v-if = "content.length !=0" class="content-container">
    <div v-for="(item,index) in content" :key=index>
        <component :is="item.type" :data="item.data"></component>
    </div>
  </div>
</div>
</template>
 
<script>
import { mapState } from 'vuex';
import TopMenu  from './TopMenu';
import TextBlock  from '../blocks/TextBlock';
import ImageBlock  from '../blocks/ImageBlock';
export default {
  name: 'Constructor',
  components: {
      TopMenu,
      TextBlock,
      ImageBlock
  },
  computed: mapState([
    'content'
  ])
}
</script>
 
