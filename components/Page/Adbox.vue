<script lang="ts" setup>
import { defineProps } from "vue";
import { whatsAppNum } from '~/assets/js/common'
defineProps({
  str:{
    type: String,
    default: ''
  }
})
let _bool = ref(false)

onMounted(()=>{
  setTimeout(() => {
    _bool.value = true
  }, 500);
})
</script>

<template>
  <div :class="['adccbox',{show:_bool}]" @click="_bool=false">
    <div :class="['adccbox-in',{'show-in':_bool}]" @click.stop="">
      <div class="close">
        <img src="@/assets/images/icon_16.png" alt="" @click="_bool = false">
      </div>
      <div class="content">
        <a :href="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`">
          <img :data-cfsrc="'https://static.cmereye.com/imgs/2024/01/e272eab6fd020a3c.jpg'" :srcset="`https://static.cmereye.com/imgs/2024/01/75d9f6d2c17e5b31.jpg 768w, https://static.cmereye.com/imgs/2024/01/e272eab6fd020a3c.jpg`" src="https://static.cmereye.com/imgs/2024/01/e272eab6fd020a3c.jpg" alt="新春限定優惠">
        </a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@keyframes contentIn {
  to{
    opacity: 1;
  }
}
@keyframes topIn {
  50%{
    top: 52%;
  }
  75%{
    top: 49%;
  }
  100%{
    top: 50%;
    opacity: 1;
  }
}
.adccbox{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0,0,0,.3);
  opacity: 0;
  display: none;
  // animation: contentIn 1s 3s forwards;
  &.show{
    display: block;
    animation: contentIn 1s forwards;
  }
  &-in{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-50%);
    width: calc(100% - 60px);
    height: auto;
    // min-height: 400px;
    max-width: 768px;
    // border-radius: 30px;
    // background: #fff;
    z-index: 1000;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // overflow: hidden;
    &.show-in{
      animation: topIn 1s .3s ease-out forwards;
    }
    .close{
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      img{
        width: 50px;
        height: 50px;
        transition: all .3s;
        &:hover{
          transform: rotate(90deg);
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .adccbox{
    &-in{
      border-radius: 20px;
      .close{
        right: 10px;
        top: 10px;
        img{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>