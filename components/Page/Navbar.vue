<script lang="ts" setup>
const navbarLists = [
  {
    img: '@/assets/images/nvaIcon_1.png',
    name: '',
    link: ''
  },
  {
    img: '@/assets/images/nvaIcon_2.png',
    name: '',
    link: ''
  },
  {
    img: '@/assets/images/nvaIcon_3.png',
    name: '',
    link: ''
  },
  {
    img: '@/assets/images/nvaIcon_4.png',
    name: '',
    link: ''
  }
]
</script>

<template>
  <div class="navbar-content">
    <div class="navbar-content-in" v-for="(item,index) in navbarLists" :key="index">
      <img src="@/assets/images/nvaIcon_4.png" alt="">
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