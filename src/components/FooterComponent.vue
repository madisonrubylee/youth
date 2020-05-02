<template>
<footer>
    <b-card text-variant="white" title="Youth" class="footer">
      <b-card-text>
        With supporting text below as a natural lead-in to additional content.<br>
        문의 : telepopmujik@gmail.com
      </b-card-text>  
     <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
 </footer>   
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style>
footer {
  bottom: 0;
  /* position: absolute; */
  width: 100%;
}
.footer {
  background-color: #ffce44;
  /* position:absolute;
  bottom:0;
  width:100%;
  height:70px;    */
  /* position:absolute;  */
  left:0px; 
  bottom:0px; 
  width:100%; 
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
