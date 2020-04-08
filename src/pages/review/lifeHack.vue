<template>
    <div>
       <HeaderComponent></HeaderComponent>
       <footerComponent></footerComponent>
    </div>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue'
import footerComponent from '../../components/FooterComponent.vue'

export default {
  name: 'lifeHack',
  components: {
    HeaderComponent: HeaderComponent,
    footerComponent: footerComponent

  }
}

</script>

<style lang="css">
  
</style>
