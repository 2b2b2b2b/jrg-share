<template lang="html">
  <div id="upload">
    <Upload
      ref="upload"
      v-bind="finalAttr"
      v-on="finalListener">
    </Upload>
  </div>

</template>
<script>
import { Upload ,Button} from 'element-ui'
export default {
  name:'hoc-upload',
  inheritAttrs:false,
  computed:{
    finalAttr(){
      return Object.assign({},{
        action:'https://test.com/posts/'
      },this.$attrs)
    },
    finalListener(){
      let vm = this
      return Object.assign({},
        {
          input(e){
            //这里可以对value格式进行修改
            vm.$emit('input',e.target.value)
          }
        },
        this.$listeners
      )
    }
  },
  mounted(){
    this.$refs.upload.$slots = Object.assign({},this.$refs.upload.$slots,this.$slots)
    this.$refs.upload.$forceUpdate()
  },
  components:{
    Upload,
    Button,
  }

}
</script>
<style lang="scss" scoped>
#upload{
  /deep/ button{color:red}
}
</style>
