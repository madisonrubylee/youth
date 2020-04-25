<template>
    <div>
       <HeaderComponent></HeaderComponent>
       <section class="lifeHackInfo"></section>
        <section class="lifeHackSection">
          <b-button v-b-toggle.sidebar-1 class="selectOptionBtn">지역 선택</b-button>
            <b-sidebar id="sidebar-1" title="지역" bg-variant="white"  shadow>
              <template v-slot:default="{ hide }">
               <div class="px-3 py-2">
                <p>
                {{haveToSelect}}를 선택해주세요 ! 
                </p>
              <b-img src="../../assets/map.jpg" fluid thumbnail></b-img>
                  <b-form-select v-model="selectedRegion" :options="regionOptions" class="selectOption" @change="regionChange()"></b-form-select>
                  <b-form-select v-model="selectedCountry" :options="countryOptions" class="selectOption" ></b-form-select>
              <b-button class="selectCountryBtn" variant="primary" block @click="hide">닫기</b-button>
              </div>
              </template>
             </b-sidebar>
          </section>
          <!-- <div v-if="data.length"> -->
             <div v-if="submitted">
                <search-result v-bind:data="searchResult" v-bind:query="query"></search-result>
             </div>
             <div v-else>
               해당 지역에는 리뷰가 없습니다. 찾을 수 없습니다. 
            <!-- <tabs v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tabs> -->
          </div>
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

import lifeHackModel from '../../models/lifeHackModel.js'

export default {
  name: 'lifeHack',
  components: {
    HeaderComponent: HeaderComponent,
    footerComponent: footerComponent
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
    search () {
      lifeHackModel.list().then(data => {
        this.submitted = true
        this.lifeHackSearchList = data
      })
      // 추후에 개발 예정
      // HistoryModel.add(this.query)
      // this.fetchHistory()
    },
    regionChange () {
      this.haveToSelect = '국가'
      this.countryOptions = this.types[this.selectedRegion]
      this.selectedCountry = 'default'
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
  margin-left : 430px;
}
.lifeHackInfo{
  height:150px;
}
.lifeHackSection{
    height : 800px;
}
.selectOption{
  margin-top:10px;
}
.selectCountryBtn{
  margin-top:50px;
}

</style>
