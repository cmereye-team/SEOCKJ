<script lang="ts" setup>
const navbarLists = []
</script>

<template>
  <div class="navbar-content">
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_1.png" alt="">
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_2.png" alt="">
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_3.png" alt="">
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_4.png" alt="">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar-content{
  width: 66px;
  position: fixed;
  right: 15vw;
  top: 30vh;
  z-index: 20;
  &-in{
    width: 100%;
    height: 66px;
    margin-bottom: 20px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 768px){
  .navbar-content{
    right: 30px;
  }
}
</style>