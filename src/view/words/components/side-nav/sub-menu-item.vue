<template>
  <MenuItem :name="`${item.href}`">
  <template v-if="!item.isEdit">
    <Icon :type="item.iconType" :v-if="item.iconType" />
    <span @contextmenu="handleEvent(item, parentItem)">{{item.name}}</span>
  </template>
  <template v-else>
    <Input v-model="name" size="small" placeholder="" style="width: 75%;margin-right:5px;" :autofocus="true" />
    <Checkbox v-model="iconType" label="twitter" style="float:right;margin-right:0;margin-top:2px;">
            <Icon type="ios-arrow-down" /> 
        </Checkbox>
    <div style="position:absolute;right:3px; top:13px;color:#ff0000;" @click="save()">
        <Icon type="md-checkmark" />
    </div>
  </template>
  </MenuItem>


</template>
<script>
  export default {
    name: 'SubMenuItem',
    mixins: [],
    data() {
      return {
        name: '',
        iconType: '',
      }
    },
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      },
      parentItem: {
        type: Object,
        default () {
          return {}
        }
      },
    },
    methods: {
      handleEvent(item, parentItem) {
        event.preventDefault();
        this.$emit('on-contentmenu', event, item, parentItem);
      },
      save() {

      }
    }
  }

</script>
