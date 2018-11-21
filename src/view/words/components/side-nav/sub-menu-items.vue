<template>
  <div class="side-nav-sub-menu-item">
    <template v-if="item.type === 'MenuGroup'">
      <MenuGroup>
        <div class="ivu-menu-item-group-title" style="" @contextmenu="handleEvent(item, pratentItem)">
          {{item.name}}
        </div>
        <template v-for="(subItem,subIndex) in item.children">
          <template v-if="subItem.children && subItem.children.length >= 1">
            <sub-menu-items :item="subItem" :pratent-item="item" :index-string="`${indexString}_${subIndex}`" @on-contentmenu="handleContentmenu"></sub-menu-items>
          </template>
          <template v-else>
            <sub-menu-item :item="subItem" :parentItem="item" @on-contentmenu="handleContentmenu"></sub-menu-item>
          </template>
        </template>
      </MenuGroup>
    </template>

    <template v-else>
      <template v-if="item.children && item.children.length >= 1">
        <Submenu :name="getNameValue(item,indexString)">
          <template slot="title">
            <Icon :type="item.iconType" v-if="item.iconType" />
            <span @contextmenu="handleEvent(item, pratentItem)">{{item.name}}</span>
          </template>
          <template v-if="item.children && item.children.length >= 1">
            <template v-for="(subItem, subIndex) in item.children">
              <template v-if="subItem.children && subItem.children.length >= 1">
                <sub-menu-items :item="subItem" :pratent-item="item" :index-string="`${indexString}_${subIndex}`" @on-contentmenu="handleContentmenu"></sub-menu-items>
              </template>
              <template v-else>
                <sub-menu-item :item="subItem" :parentItem="item" @on-contentmenu="handleContentmenu"></sub-menu-item>
              </template>
            </template>
          </template>
        </Submenu>
      </template>
      <template v-else>
        <sub-menu-item :item="item" :parentItem="pratentItem" @on-contentmenu="handleContentmenu"></sub-menu-item>
      </template>
    </template>
  </div>
  
</template>
<script>
  import SubMenuItem from './sub-menu-item.vue';
  export default {
    name: 'SubMenuItems',
    components: {
      SubMenuItem,
    },
    mixins: [],
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      },
      pratentItem: {
        type: Object,
        default () {
          return {}
        }
      },
      indexString: {
        type: String,
        default () {
          return '-1'
        }
      },
      onContextmenu: {
        type: Function,
        default () {
          return function() {

          }
        }
      }
    },
    methods: {
      handleEvent(item, parentItem) {
        event.preventDefault();
        this.$emit('on-contentmenu', event, item, parentItem);
      },
      handleContentmenu(event, item, parentItem) {
        this.$emit('on-contentmenu', event, item, parentItem);
      },
      getNameValue(item, indexString) {
        return item.id || indexString;
      },
    }
  }

</script>
<style>
  .side-nav-sub-menu-item .ivu-menu-item-group>.ivu-menu-item-group-title {
    display: none;
  }

</style>
