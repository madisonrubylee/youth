<template>
    <div>
       <HeaderComponent></HeaderComponent>
       <section class="lifeHackInfo"></section>
        <section class="lifeHackSection">
          <div class="list">
            <b-button v-b-toggle.sidebar-1 class="selectOptionBtn" variant="info">지역 선택</b-button>
          </div>
            <b-sidebar id="sidebar-1" title="지역" bg-variant="white"  shadow>
              <template v-slot:default="{ hide }">
               <div class="px-3 py-2">
                <p>
                {{haveToSelect}}를 선택해주세요 ! 
                </p>
              <b-img src="../../assets/map.jpg" fluid thumbnail></b-img>
                  <b-form-select v-model="selectedRegion"  :options="regionOptions" class="selectOption" @change="regionChange()"></b-form-select>
                  <b-form-select v-model="selectedCountry" :options="countryOptions" class="selectOption" ></b-form-select>
              <b-button class="selectCountryBtn" variant="info" block @click="hide" v-on:click="searchList"  v-bind:value="query">검색</b-button>
              <b-button class="selectCountryBtn" variant="secondary" block @click="hide">닫기</b-button>
              </div>
              </template>
             </b-sidebar>
             <div class="list">
              <!-- 20.04.27 submitted 아니면 전체 정보를 보여주는 식으로 ? -->
              <div v-if="submitted">
                  <!-- <lifeHack-result v-bind:data="lifeHackSearchList" v-bind:query="query"></lifeHack-result> -->
                    <list v-bind:data="lifeHackSearchList" ></list>
              </div>
              <div v-else>
                <p class="noResult">
                    아직 리뷰가 없습니다.
                </p>               
              <!-- <tabs v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tabs> -->
              </div>
            </div>
          </section>
          <!-- <div v-if="data.length"> -->
             
          <!-- <div v-else> -->
          <div>
          <!-- {{query}} 검색어로 찾을수 없습니다  -->
          </div>
       <footerComponent></footerComponent>
    </div>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue'
import footerComponent from '../../components/FooterComponent.vue'
import resultComponent from '../../components/resultComponent.vue'
import ratingComponent from '../../components/ratingComponent.vue'
import contentBoxComponent from '../../components/ContentBoxComponent.vue'

import lifeHackModel from '../../models/lifeHackModel.js'

export default {
  name: 'lifeHack',
  components: {
    'HeaderComponent': HeaderComponent,
    'footerComponent': footerComponent,
    'list': resultComponent,
    'ratingComponent': ratingComponent,
    'contentBox': contentBoxComponent
  },
  data () {
    return {
      haveToSelect: '지역',
      selectedRegion: null,
      selectedCountry: null,
      regionOptions: [
        { value: null, text: '지역' },
        { value: 'NORTHAMERICA', text: '북미' },
        { value: 'EUROPE', text: '유럽' },
        { value: 'ASIA', text: '아시아' },
        { value: 'SOUTHAMERICA', text: '남미' },
        // { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'ETC', text: '기타' }
      ],
      countryOptions: [
        {value: null, text: '국가'}
      ],
      types: {
        NORTHAMERICA: [
          {value: 'default', text: '국가'},
          { value: 'AMERICA', text: '미국' },
          { value: 'CANADA', text: '캐나다' },
          { value: 'MEXICO', text: '멕시코' },
          { value: 'CUBA', text: '쿠바' },
          { value: 'NA_ETC', text: '기타' }
        ],
        EUROPE: [
          {value: 'default', text: '국가'},
          { value: 'NETHERLAND', text: '네덜란드' },
          { value: 'GERMANY', text: '독일' },
          { value: 'RUSSIA', text: '러시아' },
          { value: 'SWEDEN', text: '스웨덴' },
          { value: 'SWISS', text: '스위스' },
          { value: 'SPAIN', text: '스페인' },
          { value: 'ISLAND', text: '아일랜드' },
          { value: 'ENGLAND', text: '영국' },
          { value: 'ITALY', text: '이탈리아' },
          { value: 'PROTU', text: '포르투갈' },
          { value: 'FRANCE', text: '프랑스' },
          { value: 'EU_ETC', text: '기타' }
        ],
        ASIA: [
          {value: 'default', text: '국가'},
          { value: 'SINGAPORE', text: '싱가포르' },
          { value: 'TAIWAN', text: '대만' },
          { value: 'JAPAN', text: '일본' },
          { value: 'CHINA', text: '중국' },
          { value: 'AS_ETC', text: '기타' }
        ],
        SOUTHAMERICA: [
          {value: 'default', text: '국가'},
          { value: 'BRAZILE', text: '브라질' },
          { value: 'ARGENTINA', text: '아르헨티나' },
          { value: 'CHILE', text: '칠레' },
          { value: 'COLOMBIA', text: '콜롬비아' },
          { value: 'SA_ETC', text: '기타' }
        ]
      },
      lifeHackSearchList: [],
      query: '',
      submitted: false,
      options: null
    }
  },
  methods: {
    searchList () {
      // this.query = query
      this.search()
      // 추후에 개발 예정
      // HistoryModel.add(this.query)
      // this.fetchHistory()
    },
    regionChange () {
      this.haveToSelect = '국가'
      this.countryOptions = this.types[this.selectedRegion]
      this.selectedCountry = 'default'
    },
    openSideBar () {
      this.haveToSelect = '지역'
    },
    search () {
      lifeHackModel.list().then(data => {
        this.submitted = true
        this.lifeHackSearchList = data
        console.log(data)
      })
    }

  }
  
  // computed: {
  //   country: function (e) {
  //     return this.types[this.options]
  //   }
  // }
}
</script>

<style lang="css">
.selectOptionBtn{
  /* margin-left : 430px; */
  margin-bottom : 30px;
}
.lifeHackInfo{
  height:150px;
}
.lifeHackSection{
    /* height : 800px; */
    margin: 1px auto 200px;
}
.selectOption{
  margin-top:10px;
}
.selectCountryBtn{
  margin-top:50px;
}

</style>
