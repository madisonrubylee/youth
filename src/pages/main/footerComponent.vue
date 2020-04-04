<template>
    <b-card text-variant="white" title="Youth" class="footerColor">
      <b-card-text>
        With supporting text below as a natural lead-in to additional content.<br>
        문의 : telepopmujik@gmail.com
      </b-card-text>
      
  <b-button href="#" variant="primary">Go somewhere</b-button>
</b-card>
</template>

<script>
export default {
  name: 'footerComponent'
}
</script>

<style>
.footerColor {
  background-color: #ffce44;
}
.btn-primary{
  background-color: #7fcdc4;
  border-color:#c2c2c3;
}
.btn-primary:hover{
  background-color: #5e807c;
  border-color:#c2c2c3;
}
.show>.btn-primary.dropdown-toggle{
   background-color: #5e807c;
  border-color:#c2c2c3;
}
</style>
