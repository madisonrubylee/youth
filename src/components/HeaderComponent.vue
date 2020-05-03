<template>
    <!-- <nav id="nav-bar">
    <ul>
        <li> <a class="menuLink" href="#"><img class='main-logo' src= '../../images/logo.gif'></a> </li>
        <li> <a class="menuLink" href="#">
            Home
            </a>
        </li>
        <li>
            <a class="menuLink" href="#">
            리뷰
            </a>
        </li>
        <li>
            <a class="menuLink" href="#">
             커뮤니티
            </a>
        </li>
        <li>
            <a class="menuLink" href="#">
            이벤트
            </a>
        </li>
        <li>
            <a class="menuLink" href="#">
            공지사항
            </a>
        </li>
    </ul>
    </nav>  -->

    <div class="navDivClass">
    <b-navbar variant="faded" type="light" class="mainNav">
        <b-navbar-brand href="#"><img src="../../images/logo.gif" class="logoImg"></b-navbar-brand>
        <b-navbar-nav class="menuNav">
            <b-nav-item-dropdown text="리뷰" right >
            <b-dropdown-item class="has-link">
                <router-link to="/lifeHack">
                    생활팁
                </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">후기</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="커뮤니티" right class="secondMenu">
            <b-dropdown-item href="#"></b-dropdown-item>
                <router-link to="/comunity">
                    북미
                 </router-link>
            <b-dropdown-item href="#">유럽</b-dropdown-item>
            <b-dropdown-item href="#">아시아</b-dropdown-item>
            <b-dropdown-item href="#">기타지역</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#" class="thirdMenu">이벤트</b-nav-item>
            <b-nav-item  href="#" class="fourthMenu">공지사항</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="rightNav">
            <p class="h1"><b-icon icon="bell-fill" class="border rounded p-2"></b-icon></p>
            <b-dropdown id="dropdown-right" right class="userProfile" variant="primary">
                <template v-slot:button-content class="userBtnContent">
                    <p class="h4 user">
                        <b-icon icon="person" arria-hidden="true" class="personIcon"></b-icon>
                    </p>
                </template>
                <b-dropdown-item>프로필</b-dropdown-item>
                <b-dropdown-item>활동내역</b-dropdown-item>
                <b-dropdown-item>쪽지함</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item v-if="loginFlag">로그아웃</b-dropdown-item>
                <b-dropdown-item v-else>
                    <router-link to='/login'>
                    로그인
                    </router-link>
                </b-dropdown-item>
            </b-dropdown>
        </b-navbar-nav>
    </b-navbar>
    </div>

<!-- <b-navbar class='is-warning'>
        <template slot="brand">
            <b-navbar-item  tag="router-link" :to="{ path: '/' }" class="logo">
                Youth
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-dropdown label="리뷰">
                <b-navbar-item  tag="router-link" :to="{ path: '/' }">
                    생활팁
                </b-navbar-item>
                <b-navbar-item  tag="router-link" :to="{ path: '/' }">
                    후기
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="커뮤니티">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    북미
                </b-navbar-item>
                <b-navbar-item  tag="router-link" :to="{ path: '/' }">
                    유럽
                </b-navbar-item>
                <b-navbar-item  tag="router-link" :to="{ path: '/' }">
                    아시아
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    기타지역
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item  tag="router-link" :to="{ path: '/' }">
                이벤트
            </b-navbar-item>
            <b-navbar-item  tag="router-link" :to="{ path: '/' }">
                공지사항
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar> -->

</template>

<script>

export default {
  name: 'MainHeader',
  //  props: ['menus', 'selectedMenu']
  //   methods: {
  //   }
  data () {
    return {
      loginFlag: false
    }
  }
}

</script>

<style>
 .mainNav {
     height : 90px;
 }
 .menuNav{
     width:1350px;
 }
  .logoImg {
     height: 200px;
 } 
 .logo{
     font-size   : large;
     font-weight : bold;
     font-family : Helvetica;
 }
 .navbar-light .navbar-nav .nav-link{
        font-size:20px;
        color : #000000;
        font-family:'Passion One';
        line-height: 0.8;
 }
 .navDivClass {
     background-color : #ffffff;
     height: 90px;
 }
 .secondMenu {
     margin-left : 20px;
 }
.thirdMenu {
     margin-left : 20px;
 }
.fourthMenu {
     margin-left : 20px;
}
.user {
    margin-left:20px;
}
.userProfile {
    height:40px;
    top:6px;
}
#dropdown-right{
    margin-left:10px;
}
#dropdown-right__BV_toggle_{
    width:36px;
}
.personIcon {
    margin-left: -31px;
}

</style>
