<template>
    <div>
       <HeaderComponent></HeaderComponent>
       <!-- <MainBodyComponent></MainBodyComponent> -->
       <div class="mainBody">
         <b-card overlay img-src="../../../images/bodyImage.jpg" class="bodyImage">
          <b-card-text class="bodyText">
          <!-- 교환학생, 유학생 커뮤니티 Y O U T H 🏃‍♀🏃‍♂🌎 -->
          100 % 실제 여행 커뮤니티 U A R T H 🏃‍♀🏃‍♂🌎
          </b-card-text>
          <b-form-input size="sm" class="mr-sm-2 searchForm" placeholder="궁금한 정보를 검색해보세요"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 searchBG" type="submit" ><b-icon icon="search" class="searchIcon"></b-icon></b-button>
        </b-card>
      </div>
       <b-card text-variant="white" class="contents">
        <b-card-text>
          최신업데이트 등이 나올 항목
        </b-card-text>
       </b-card>
       <!-- <ContentsComponent></ContentsComponent> -->
       <footerComponent></footerComponent>
    </div>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue'
import footerComponent from '../../components/FooterComponent.vue'
// import MainBodyComponent from './MainBody.vue'
// import ContentsComponent from './contentsComponent.vue'

export default {
//  extends: HeaderComponent, footer
  components: {
    HeaderComponent: HeaderComponent,
    footerComponent: footerComponent
    // MainBodyComponent: MainBodyComponent
    // ContentsComponent: ContentsComponent 
  }
}
</script>

<style lang="css">
  /* @import "../style.css"; */
    .contents{
        height:500px;
    }
     .bodyText{
        font-size:50px;
        font-weight: bold;
        color : #f8f229;
        margin-top:100px;
        text-align:center;
    }
    .mainBody {
      height:750px;
    }
    .searchForm{
      display:inline-block;
      width: 500px;
      height:50px;
      margin-left:650px;
      margin-top:50px;
    }
    .searchBG{
      background-color:#fff200;
      width:50px;
      height:50px;
    }
    .searchIcon{
      color:black;
      height:50px;
      margin-top:-4px;
    }
</style>
