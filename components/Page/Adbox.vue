<script lang="ts" setup>
import { defineProps } from "vue";
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
  }, 2000);
})
</script>

<template>
  <div :class="['adccbox',{show:_bool}]">
    <div :class="['adccbox-in',{'show-in':_bool}]">
      <div class="close">
        <img src="@/assets/images/icon_7.png" alt="" @click="_bool = false">
      </div>
      <!-- <div class="content"></div>
      <div class="form">
        <input type="text">
        <button></button>
      </div> -->
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
    min-height: 400px;
    max-width: 768px;
    border-radius: 30px;
    background: #fff;
    z-index: 1000;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &.show-in{
      animation: topIn 1s .5s ease-out forwards;
    }
    .close{
      position: absolute;
      right: 20px;
      top: 20px;
      img{
        width: 30px;
        height: 30px;
        transition: all .3s;
        &:hover{
          transform: rotate(90deg);
        }
      }
    }
    .content{

    }
    .form{

    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .adccbox{
    &-in{
      border-radius: 20px;
    }
  }
}
</style>