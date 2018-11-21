<template>
<div style="display:none;">
  <div class="contentmenu ivu-select-dropdown" >
    <slot></slot>
  </div>
  <div class="contentmenu-cover" @click="close()"></div>
</div>
</template>
<script>
  export default {
    name: 'Contentmenu',
    mixins: [],
    props: {
      
    },
    methods: {
      handleEvent(name, parent) {
        
      },
      show(x,y) {
        this.$el.firstElementChild.style.top = y+'px';
        this.$el.firstElementChild.style.left = x+'px';
        this.$el.style.display = '';
      },
      close() {
        this.$el.style.display = 'none';
      }
    }
  }

</script>
<style>
.contentmenu{
  position: absolute;
  z-index: 1112;
}
.contentmenu-cover{
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  height:100%;
  background: #fff;
  z-index: 1111;
  opacity: 0;
}
</style>
