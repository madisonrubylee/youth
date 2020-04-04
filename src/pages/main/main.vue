<template>
    <div>
       <HeaderComponent></HeaderComponent>
       <MainBodyComponent></MainBodyComponent>
       <ContentsComponent></ContentsComponent>
       <footerComponent></footerComponent>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import footerComponent from './footerComponent.vue'
import MainBodyComponent from './MainBody.vue'
import ContentsComponent from './contentsComponent.vue'

export default {
//  extends: HeaderComponent, footer
  components: {
    HeaderComponent: HeaderComponent,
    footerComponent: footerComponent,
    MainBodyComponent: MainBodyComponent,
    ContentsComponent: ContentsComponent
  }
}
</script>

<style lang="css">
  /* @import "../style.css"; */
</style>
