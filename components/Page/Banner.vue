<script lang="ts" setup>
import { whatsapplink } from '~/assets/js/common'
defineProps({
  config:{
    type: Object,
    default(){
        return {
            pc: 'https://static.cmereye.com/imgs/2024/05/0b20ccceba0bd119.webp',
            mb: ''
        }
    }
  },
  btn: {
    type: String,
    default: '掛號'
  }
})
</script>

<template>
    <div class="pagebanner">
        <div class="pagebanner-in"><img :src="config.pc" alt=""></div>
        <nuxt-link :to="whatsapplink" class="pagebanner-btn">
            <div class="pagebanner-btn-in">{{btn}}</div>
        </nuxt-link>
    </div>
</template>


<style lang="scss" scoped>
.pagebanner{
  width: 100%;
  position: relative;
//   z-index: 2;
  &-in{
    width: 100%;
    background: url(https://static.cmereye.com/imgs/2024/05/0b20ccceba0bd119.webp) no-repeat;
    background-size: 100% auto;
    background-attachment: fixed;
  }
  img{
    width: 100%;
    opacity: 0;
  }
  &-btn{
    // position: absolute;
    // left: 50%;
    // bottom: 0;
    // transform: translate(-50%,50%);
    display: flex;
    justify-content: center;
    background: #fff;
    position: relative;
    z-index: 2;
    &-in{
        padding: 3px 90px 6px;
        background: #00AEFF;
        font-weight: bold;
        color: #fff;
        font-size: 35px;
        border-radius: 50px;
        position: relative;
        transition: all .3s;
        display: inline-block;
        transform: translateY(-50%);
        &:hover{
            background: #FF9900;
        }
        // &::after{
        //     content: '';
        //     position: absolute;
        //     left: 50%;
        //     top: 50%;
        //     transform: translate(-50%,-50%);
        //     width: calc(100%);
        //     height: calc(100%);
        //     border-radius: 100px;
        //     border: 10px solid rgba(0, 174, 255, .3);
        //     animation: btnAnim 5s infinite;
        //     opacity: 1;
        //     box-sizing: border-box;
        // }
    }
  }
}
// @keyframes btnAnim {
//     10%{
//         opacity: 1;
//         width: calc(100% + 40px);
//         height: calc(100% + 40px);
//         border: 10px solid rgba(0, 174, 255, .3);
//     }
//     30%{
//         width: calc(100% + 40px);
//         height: calc(100% + 40px);
//         border: 0px solid rgba(0, 174, 255, .3);
//         opacity: 0;
//     }
//     100%{
//         width: calc(100% + 40px);
//         height: calc(100% + 40px);
//         border: 0px solid rgba(0, 174, 255, .3);
//         opacity: 0;
//     }
// }
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>