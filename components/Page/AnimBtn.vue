<script lang="ts" setup>
import { defineProps } from "vue";
import { whatsAppNum } from '~/assets/js/common'
let prop = defineProps({
  str:{
    type: String,
    default: '與我們了解更多'
  },
  link: {
    type: String,
    default: `https://api.whatsapp.com/send/?phone=${whatsAppNum}`
  },
  refName: {
    type: String,
    default: 'animBtn'
  }
})

const showYaAnim = ref(false)
const _randomNum = Math.floor(Math.random() * 10000);
let _key = ref('')
const scrollWatch = () => {
  let _dome:any = document.getElementsByClassName(_key.value)
  let _offsetTop = 0
  if(_dome && _dome.length){
    _offsetTop = _dome[0].offsetTop
  }
  if(window.scrollY>=_offsetTop-600 && window.scrollY<=_offsetTop){
    showYaAnim.value = true
    // if(!showYaAnim.value){
    //   showYaAnim.value = true
    //   setTimeout(()=>{
    //     showYaAnim.value = false
    //   },5000)
    // }
  }else{
    showYaAnim.value = false
  }
}
// watch(
//   showYaAnim,
//   (n,o)=>{
//     console.log(o,'---->',n)
//   }
// )
onMounted(()=>{
  _key.value = `${prop.refName}${_randomNum}`
  scrollWatch()
  window.addEventListener('scroll',scrollWatch)
})
</script>

<template>
  <div class="animbtn">
    <a :href="link" :class="_key" class="animbtn-in" :alt="str">
      <span>
        <slot name="animbtnAfter">{{str}}</slot>
      </span>
      <span :class="{ showYaAnim: showYaAnim }">
        <slot name="animbtnFront">{{str}}</slot>
      </span>
    </a>
  </div>
</template>


<style lang="scss" scoped>
  @keyframes btnAnim {
    0%{
      clip-path: polygon(-10% 0,0 0,-10% 100%,-20% 100%);
    }
    50%{
      clip-path: polygon(50% 0, 60% 0, 50% 100%,40% 100%);
    }
    100%{
      clip-path: polygon(110% 0, 120% 0,110% 100%,100% 100%);
    }
  }
  .animbtn{
    width: 100%;
    display: flex;
    justify-content: center;
    &-in {
      position: relative;
      // width: 100%;
      display: flex;
      justify-content: center;
      &>span {
        box-shadow: 0px 1.74695px 3.4939px 0px rgba(252, 22, 130, 0.38);
        font-size: 35px;
        font-weight: 900;
        color: #fff;
        border-radius: 40px;
        padding: 5px 90px;
        background: var(--indexColor1);
        cursor: pointer;
        top: 0;
        width: max-content;
        .bigBan{
          font-size: 44px;
        }
        &:nth-of-type(2) {
          color: var(--indexColor1);
          background: #fff;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          // animation: btnAnim 1s linear;
          // animation-fill-mode: forwards;
          width: max-content;
          display: none;
          // opacity: 0;
        }
        &.showYaAnim {
          display: block;
          // opacity: 1;
          animation: btnAnim 1s linear;
          animation-fill-mode: forwards;
        }
      }
    }
  }
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .animbtn{
    &-in {
      &>span {
        font-size: 20px;
        padding: 5px 70px;
        box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
        .bigBan{
          font-size: 28px;
        }
      }
    }
  }
}
</style>