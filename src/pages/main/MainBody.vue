<template>
  <div class="mainBody">
   <b-card overlay img-src="../../../images/bodyImage.jpg" class="bodyImage">
      <b-card-text class="bodyText">
          교환학생, 유학생 커뮤니티 Y O U T H 🏃‍♀🏃‍♂🌎
      </b-card-text>
       <b-form-input size="sm" class="mr-sm-2 searchForm" placeholder="궁금한 정보를 검색해보세요"></b-form-input>
       <b-button size="sm" class="my-2 my-sm-0 searchBG" type="submit" ><b-icon icon="search" class="searchIcon"></b-icon></b-button>
  </b-card>
</div>
</template>

<script>
// import bodyImage from "../../../images/bodyImage.jpg"

export default {
  name: 'mainBodyComponent'
  // data(){
  //   return {
  //     img : {
  //       bodyImage
  //     }
  //   }
  // }
}
</script>

<style>
    .bodyText{
        font-size:50px;
        font-weight: bold;
        color : #ffffff;
        margin-top:100px;
        text-align:center;
    }
    .mainBody {
      height:750px;
    }
    .bodyImage{
      /* opacity:0.9; */
    }
    .searchForm{
      display:inline-block;
      width: 500px;
      height:50px;
      margin-left:650px;
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
