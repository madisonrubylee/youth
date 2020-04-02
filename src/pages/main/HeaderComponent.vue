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
    <div>
    <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
            <img src="../../../images/logo.gif">
        </b-navbar-brand>
        <b-nav-item-dropdown text="리뷰" right>
        <b-dropdown-item href="#">생활팁</b-dropdown-item>
        <b-dropdown-item href="#">후기</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item-dropdown text="커뮤니티" right>
        <b-dropdown-item href="#">북미</b-dropdown-item>
        <b-dropdown-item href="#">유럽</b-dropdown-item>
        <b-dropdown-item href="#">아시아</b-dropdown-item>
        <b-dropdown-item href="#">기타지역</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item text="이벤트" right></b-nav-item>
        <b-nav-item text="공지사항" right></b-nav-item>
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
