<template>
    <div>
       <HeaderComponent></HeaderComponent>
       <div class="comunityInfo"></div>
        <div class="comunitySection">
             <div class="list">
              <!-- <div v-if="submitted"> -->
                <div>
                    <tableComponent v-bind:data="comunitySearchList" ></tableComponent>
                </div>
              <!-- <div v-else>
                <p class="noResult">
                    아직 글이 없습니다. 글을 작성해주세요.
                </p>               
              </div> -->
            </div>
          </div>
          <div>
          <!-- {{query}} 검색어로 찾을수 없습니다  -->
          </div>
       <footerComponent></footerComponent>
    </div>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue'
import footerComponent from '../../components/FooterComponent.vue'
import tableComponent from '../../components/tableComponent.vue'

import comunityModel from '../../models/comunityModel.js'

export default {
  name: 'comunity',
  components: {
    'HeaderComponent': HeaderComponent,
    'footerComponent': footerComponent,
    'tableComponent': tableComponent
  },
  data () {
    return {
      comunitySearchList: [],
      query: '',
      submitted: false,
      options: null
    }
  },
  methods: {
    searchComunityData () {
      comunityModel.coumnityList().then(data => {
        this.comunitySearchList = data
        console.log('data', data)
      })
    },
    created () {
      this.searchComunityData()
      console.log('created')
    }
    // ,mounted () {
    //   this.search()
    //   console.log('mounted')
    // },
    // beforeMount () {
    //   this.search()
    //   console.log('beforeMount')
    // }

  }
  // computed: {
  //   country: function (e) {
  //     return this.types[this.options]
  //   }
  // }
}
</script>

<style lang="css">
.comunitySection{
    height : auto; 
    margin: 1px auto 100%;
    min-height: 100%;
    position: relative;
    padding-bottom: 19px; /* footer height */
}

</style>
