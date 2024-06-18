<template>
<div>
  <compTitle/>
  <compDisplay/>
  <compButton/>

</div>

</template>

<script>
import compButton from "./components/compButton.vue"
import compDisplay from "./components/compDisplay.vue"
import compTitle from './components/compTitle.vue'
import compTitle from "./components/compTitle.vue"

export default{
  components: { compTitle },
  name: 'App',
  date(){
    return{
      compTitle,
      compDisplay,
      compButton
    }
  }
} 
</script>
