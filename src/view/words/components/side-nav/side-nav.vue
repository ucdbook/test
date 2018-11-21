<template>
  <div class="side-menu-wrapper">
    <Menu ref="menu" :active-name="activeName" :open-names="openedNames" :accordion="accordion" :theme="theme" width="auto"
      @on-select="handleSelect" @on-open-change="handleOpenChange">
      <template v-for="(item, index) in menuList">
        <sub-menu-items :item="item" :pratent-item="{}" :index-string="`${index}`" @on-contentmenu="handleContentmenu"></sub-menu-items>
      </template>
    </Menu>
    <contentmenu ref="contentmenu">
      <ul class="ivu-dropdown-menu">
        <li class="ivu-dropdown-item" @click="addItem()">添加同级目录</li>
        <li class="ivu-dropdown-item">添加下级目录</li>
        <li class="ivu-dropdown-item" @click="editItem()">编辑当前目录</li>
        <li class="ivu-dropdown-item">删除当前目录</li>
      </ul>
    </contentmenu>
  </div>
</template>
<script>
  import SubMenuItems from './sub-menu-items.vue';
  import Contentmenu from '@/components/contentmenu';
  import { mapActions } from 'vuex'
  import { sideNav } from './store';
  import { getNavs } from './api';
  export default {
    name: 'SideNav',
    mixins: [],
    components: {
      SubMenuItems,
      Contentmenu,
    },
    mounted:function() {
      //console.log(9999999, this.getMenuList);
      //this.getMenuList().then(function(data) {
      //  console.log(777, data)
      //});
      getNavs().then(data => {
        const menuListA = [];
        this.parseData(data.data.data || [], menuListA, null);
        this.menuList = menuListA;
      })
    },
    data() {
      return {
        openedNames: [],
        menuList: [],
        currentItem: {}
      };
    },
    props: {
      collapsed: {
        type: Boolean
      },
      theme: {
        type: String,
        default: 'dark'
      },
      rootIconSize: {
        type: Number,
        default: 20
      },
      iconSize: {
        type: Number,
        default: 16
      },
      accordion: Boolean,
      activeName: {
        type: String,
        default: ''
      },
      openNames: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      ...mapActions([
        'getMenuList',
      ]),
      addItem() {

      },
      editItem() {
        const currentItem = this.currentItem;
        this.$contentmenu.close();
        this.$set(currentItem, 'isEdit', true);
      },
      parseData(data, parentData, parentId) {
        if(!data) {
          return;
        }
        data.map(item => {
          const currentItem = item;
          if(!parentId && !item.parentId) {
            this.parseData(data, currentItem, item.id);
            parentData.push(currentItem);
          }
          else if(item.parentId === parentId) {
            parentData.children = parentData.children || [];
            this.parseData(data, currentItem, item.id);
            parentData.children.push(currentItem);
          }
        })
      },
      handleOpenChange(name) {
        console.log(66666666, name)
      },
      handleSelect(name) {
        this.$emit('on-select', name)
      },
      handleContentmenu(event, item, parentItem) {
        this.$contentmenu = this.$refs.contentmenu;
        const x = event.clientX - this.$el.getBoundingClientRect().x;
        const y = event.clientY - this.$el.getBoundingClientRect().y;
        this.$contentmenu.show(x,y);
        this.currentItem = item;
        
      }
    },
    computed: {
      textColor() {
        return this.theme === 'dark' ? '#fff' : '#495060'
      }
    }
  }

</script>
<style lang="less">
  @import './side-nav.less';

</style>
