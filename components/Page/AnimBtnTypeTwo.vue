<script lang="ts" setup>
import { defineProps } from "vue";
import { whatsapplink } from '~/assets/js/common'
defineProps({
  str:{
    type: String,
    default: '立即預約牙齒檢查'
  },
  link: {
    type: String,
    default: whatsapplink
  },
  typeClass: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <div class="animbtntypetwo">
    <nuxt-link :to="link === '' ? whatsapplink : link" class="animbtntypetwo-in" :class="typeClass">
      <span>{{str}}</span>
    </nuxt-link>
  </div>
</template>


<style lang="scss" scoped>
.animbtntypetwo{
  position: relative;
  display: flex;
  &-in{
    position: relative;
    display: inline-block;
    &>span{
      padding: 8px 40px;
      color: #fff;
      background: #00AEFF;
      position: relative;
      z-index: 1;
      border-radius: 50px;
      display: inline-block;
      animation: btntestAnima 5.6s infinite;
      box-shadow: 10px 10px 20px rgba(103, 214, 239, .75);
      cursor: pointer;
      transition: all .5s;
      font-size: 24px;
    }
    &::after{
      content: '';
      position: absolute;
      display: inline-block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border: 10px solid #B9D9FC;
      z-index: 0;
      border-radius: 70px;
      animation: btntestafterAnima 5.6s infinite;
      transition: all .5s;
    }
    &:hover{
      &>span{
        background: #FF9900;
        box-shadow: 10px 10px 20px rgba(239, 176, 103, .75);
        animation: btntesthoverAnima 5.6s infinite;
      }
      &::after{
        border: 10px solid #FCD1B9;
        animation: btntestafterhoverAnima 5.6s infinite;
      }
    }
  }
}
@keyframes btntestAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntesthoverAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntestafterAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #B9D9FC;
  }
  19%{
    border: 10px solid rgba(185, 217, 252, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes btntestafterhoverAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #FCD1B9;
  }
  19%{
    border: 10px solid rgba(252, 209, 185, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@media (min-width: 768px) and (max-width: 1600px) {
  .animbtntypetwo{
    &-in{
      &>span{
        font-size: 1.25vw;
        padding: .4167vw 2.0833vw;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .animbtntypetwo{
    &-in{
      &>span{
        font-size: 20px;
        padding: 8px 30px;
      }
      &::after{
        border: 7px solid #B9D9FC;
      }
      &.smallmb{
        &>span{
          font-size: 16px;
          padding: 5px 20px;
        }
      }
    }
  }
  @keyframes btntestafterAnima {
    0%{
      width: 90%;
      height: 90%;
      border: 7px solid #B9D9FC;
    }
    19%{
      border: 7px solid rgba(185, 217, 252, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24%{
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29%{
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100%{
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
  @keyframes btntestafterhoverAnima {
    0%{
      width: 90%;
      height: 90%;
      border: 7px solid #FCD1B9;
    }
    19%{
      border: 7px solid rgba(252, 209, 185, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24%{
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29%{
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100%{
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
}
</style>