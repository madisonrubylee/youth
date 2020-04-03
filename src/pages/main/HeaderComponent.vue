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
    </nav> -->
    <div class="navDivClass">
    <b-navbar variant="faded" type="light" class="mainNav">
        <b-navbar-brand href="#"><img src="../../../images/logo.gif" class="logoImg"></b-navbar-brand>
        
        <b-navbar-nav>
            <b-nav-item-dropdown text="리뷰" right>
            <b-dropdown-item href="#">생활팁</b-dropdown-item>
            <b-dropdown-item href="#">후기</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="커뮤니티" right class="secondMenu">
            <b-dropdown-item href="#">북미</b-dropdown-item>
            <b-dropdown-item href="#">유럽</b-dropdown-item>
            <b-dropdown-item href="#">아시아</b-dropdown-item>
            <b-dropdown-item href="#">기타지역</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#" class="thirdMenu">이벤트</b-nav-item>
            <b-nav-item  href="#" class="fourthMenu">공지사항</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    </div>
</template>

<script>

export default {
  name: 'MainHeader'
//  props: ['menus', 'selectedMenu']
//   methods: {
//   }
}

</script>

<style>
 .mainNav {
     height : 110px;
 }
 .logoImg {
     height: 200px;
 }
 .navbar-light .navbar-nav .nav-link{
        font-size:20px;
        color : #000000;
 }
 .navDivClass {
     background-color : #9ba9b878;
     height: 110px;
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
</style>
