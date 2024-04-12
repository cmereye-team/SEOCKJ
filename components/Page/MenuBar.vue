<script lang="ts" setup>
import { defineProps } from "vue";
import { useElementBounding } from '@vueuse/core'
import { smallPhoneNum,phoneNum } from '~/assets/js/common' 
const menuBar = ref(null)
const { x, y, top, right, bottom, left, width, height } = useElementBounding(menuBar)
defineProps({
  str:{
    type: String,
    default: ''
  }
})

</script>

<template>
  <div class="menuBar " ref="menuBar">
    <div class="menuBar-in">
      <div class="menuBar-in-l">
        <div class="menuBar-box">
          <img src="@/assets/images/icon_38.svg" alt="">
          <p>深圳市醫保定點醫院</p>
        </div>
        <div class="menuBar-box">
          <img src="@/assets/images/icon_39.svg" alt="">
          <p>深圳二級口腔醫院</p>
        </div>
      </div>
      <div class="menuBar-in-r">
        <nuxtLink :to="`tel: ${phoneNum}`" class="menuBar-box">
          <img src="@/assets/images/navIcon_1.png" alt="">
          <p>香港熱線：(852) {{smallPhoneNum}}</p>
        </nuxtLink>
        <div class="menuBar-box">
          <p>營業時間：9:00-17:30（假日照常應診）</p>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.menuBar{
  width: 100%;
  height: 67px;
  background: var(--indexColor1);
  display: flex;
  padding: 0 80px;
  &-in{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menuBar-box{
      display: flex;
      align-items: center;
      &>img{
        display: inline-block;
        vertical-align: middle;
        margin-top: -5px;
        margin-right: 5px;
      }
      p{
        font-size: 22px;
        color: #fff;
        display: inline-block;
      }
    }
    &-l{
      display: flex;
      align-items: center;
      .menuBar-box{
        margin-right: 57px;
      }
    }
    
    &-r{
      display: flex;
      align-items: center;
      .menuBar-box{
        margin-left: 40px;
        &>img{
          max-height: 24px;
          margin-top: -3px;
        }
      }
    }
    
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>