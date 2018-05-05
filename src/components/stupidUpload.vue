<template lang="html">
  <div id="upload">
    <Upload 
	:action="this.action"
	@open="openHandle">
		<slot/>
		<div slot="tip">
			<slot name="tip"/>
		</div>
    </Upload>
  </div>

</template>
<script>
import { Upload ,Button} from 'element-ui'
export default {
	name:'stupid-upload',
  method:{
	openHandle(e){
			this.$emit('input',e)
		}
  },
  props:{
		action:{
			required:true,
			default:'https://test.com/posts/'
		}
  },
  components:{
    Upload,
    Button,
  }

}
</script>
<style lang="scss">
#upload{
  button{
	  color:red!important;
	  }
}
</style>
