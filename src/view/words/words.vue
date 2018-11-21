<template>
  <div class="demo-split-words">
    <Split v-model="split1">
      <div slot="left" class="pane-left">
        <side-nav :theme="menuOptions.theme" ref="sideMenu" :collapsed="menuOptions.collapsed" @on-select="turnToPage"
          >
        </side-nav>
      </div>
      <div slot="right" class="pane-right">
        Right Pane
      </div>
    </Split>
  </div>
</template>

<script>
  import SideNav from './components/side-nav'
  export default {
    name: "words",
    components: {
      SideNav,
    },
    data() {
      return {
        split1: '250px',
        menuOptions: {
          collapsed: false,
          theme: 'light'
        },
        menuList: [{
            name: '内容管理',
            id: 1,
            iconType: 'ios-book',
            type: 'MenuGroup',
            children: [{
                name: '文章管理',
                id: 11,
                children: [{
                    name: 'leaf 1-1-1',
                    href: '#/121',
                    id: 111,
                  },
                  {
                    name: 'leaf 1-1-2',
                    href: '#/122',
                    id: 112,
                  }
                ]
              },
              {
                name: '评论管理',
                id: 12,
                children: [{
                    name: 'leaf 1-2-1',
                    href: '#/123',
                    id: 121,
                  },
                  {
                    name: 'leaf 1-2-1',
                    href: '#/124',
                    id: 122,
                  }
                ]
              }
            ]
          },
          {
            name: '内容管理2',
            iconType: 'ios-book',
            href: '#/125',
            id:2,
          }
        ]
      };
    },
    mounted() {
      //
    },
    methods: {
      turnToPage(route) {
        console.log(route)
      }
    }
  };

</script>

<style lang="less">
  .demo-split-words {
    height: 100%;

    .pane-left,
    .pane-right {
      height: 100%;
    }

    .ivu-menu-vertical.ivu-menu-light:after {
      display: none;
    }
    .pane-left i.ivu-menu-submenu-title-icon{
      margin-right: 0 !important;
    }

  }

</style>
