<template>
    <div>
       <HeaderComponent></HeaderComponent>
       <footerComponent></footerComponent>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import footerComponent from './Footer.vue'

export default {
//  extends: HeaderComponent, footer
  components: {
    HeaderComponent: HeaderComponent,
    footerComponent: footerComponent
  }
}
</script>

<style lang="css">
  /* @import "../style.css"; */
</style>
