<template>
  <div>
    <h2> {{compTitleVue}}</h2>
    <h3> {{ compDisplay }}</h3>
    <div>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
    </div>

    <div>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
    </div>

    <div>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
    </div>

    <div>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
      <h3> {{ compButton }}</h3>
    </div>
  </div>
 
</template>

<script>
import compButtonVue from './components/compButton.vue'
import compDisplayVue from './components/compDisplay.vue'
import compTitleVue from './components/compTitle.vue'

export default {
  name: 'App',
  date(){
    return{
      compTitleVue,
      compDisplayVue,
      compButtonVue,

    }
  }
}
</script>