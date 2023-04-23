<script lang="ts" setup>
const navbarLists = []
</script>

<template>
  <div class="navbar-content">
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_1.png" alt="" />
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_2.png" alt="" />
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_3.png" alt="" />
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_4.png" alt="" />
    </div>
    <div class="navbar-content-mb">
      <div>2828-2828</div>
      <div>立即預約</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar-content {
  width: 66px;
  position: fixed;
  right: 10vw;
  top: 30vh;
  z-index: 20;
  &-in {
    width: 100%;
    height: 66px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-mb{
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .navbar-content {
    // right: 30px;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 62px;
    background: #FFDDDA;
    box-shadow: 0px -1.5px 0px rgba(255, 204, 199, 0.25);
    &-in{
      position: absolute;
      right: 30px;
      top: -64px;
      width: 34px;
      height: 34px;
    }
    &-in::not(:last-child){
      display: none;
    }
    &-mb{
      display: flex;
      height: 100%;
      &>div{
        height: 100%;
        line-height: 62px;
        text-align: center;
        flex: 1;
        font-weight: 400;
        // font-size: 20px;
        font-size: 1.25rem;
        color: #FFFFFF;
        text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
        &:first-child{
          border-right: 1px solid #fff;
        }
      }
    }
  }
}
</style>
