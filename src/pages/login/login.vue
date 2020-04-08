<template>
  <div>
    <HeaderComponent></HeaderComponent>
      <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
      <section class="loginSection">
      <b-form class="loginForm">
      <b-form-group
        id="input-group-1"
        label="아이디:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="비밀번호:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group id="checkboxes-4">
          <b-form-checkbox value="me">로그인유지</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">로그인</b-button>
      <b-button type="reset" variant="danger">아이디,비밀번호 찾기</b-button>

      <b-button type="reset" variant="primary" class="joinBtn">회원가입</b-button>
    </b-form>
    </section>
    <FooterComponent></FooterComponent>
   </div> 
</template>

<script>

import HeaderComponent from '../../components/HeaderComponent.vue'
import FooterComponent from '../../components/FooterComponent.vue'

export default {
  name: 'login',
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent
  }
}
</script>

<style>

.loginSection{
  height : 600px;
}
.loginForm{
  width: 500px;
  margin-left: 700px;
  margin-top: 100px;
}
.joinBtn{
  margin-left:149px;
}
</style>
