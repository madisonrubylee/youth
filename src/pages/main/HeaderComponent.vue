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

        <b-navbar-nav class="menuNav">
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

        <b-navbar-nav class="rightNav">
            <p class="h1"><b-icon icon="bell-fill" class="border rounded p-2"></b-icon></p>
            <b-dropdown id="dropdown-right" right class="userProfile" variant="primary">
                <template v-slot:button-content class="userBtnContent">
                    <p class="h4 user">
                        <b-icon icon="person" arria-hidden="true" class="personIcon"></b-icon>
                    </p>
                </template>
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
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
     height : 90px;
 }
 .menuNav{
     width:1350px;
 }
 .logoImg {
     height: 200px;
 }
 .navbar-light .navbar-nav .nav-link{
        font-size:20px;
        color : #000000;
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
