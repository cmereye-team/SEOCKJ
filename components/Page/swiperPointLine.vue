
<script lang="ts" setup>
import { defineProps } from "vue"
defineProps({
  // 个数
  latestNewsNum: {
    type: Number,
    default: 3,
  },
  //默认选中
  latestNewsCurrent:{
    type: Number,
    default: 1,
  },
  isAutoWidth: {
    type: Boolean,
    default: false
  }
})
const handleSwiperItem = (idx: Number) => {
  console.log(idx)
}

let lineWidth = ref(0)
const getWindowResize = () => {
  if(window.innerWidth > 768)
    lineWidth.value = 80
  else
    lineWidth.value = 50
  // console.log(mapConShow)
}
onMounted(()=>{
  getWindowResize()
  window.addEventListener('resize',getWindowResize)
})
</script>

<template>
  <div class="point" :style="{width: (isAutoWidth?`calc(${lineWidth}px * ${latestNewsNum}`: '100%')}">
    <div class="boxLine" v-show="latestNewsNum !== 1"></div>
    <div class="boxLine-current" v-show="latestNewsNum !== 1" :style="{width:`${ (latestNewsCurrent-1) * 100/(latestNewsNum-1) }%`}"></div>
    <div class="boxRound">
      <div class="boxRound-in" v-for="boxRoundIndex in latestNewsNum" :key="boxRoundIndex" @click="handleSwiperItem(boxRoundIndex)">
        <div v-show="boxRoundIndex <= latestNewsCurrent" class="current"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .point{
    position: relative;
    width: 100%;
    .boxLine{
      width: 100%;
      height: 4px;
      background: #FFF1F0;
    }
    .boxLine-current{
      height: 4px;
      background: #FFCECB;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      transition: all .5s;
    }
    .boxRound{
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      &-in{
        width: 24px;
        height: 24px;
        background: #FFF1F0;
        border-radius: 50%;
        .current{
          width: 100%;
          height: 100%;
          background: #FFCECB;
          border-radius: 50%;
          transition: all .5s;
        }
      }
    }
  }
@media (min-width: 1000px) and (max-width: 1452px) {
  .point{
    .boxLine{
      height: 3px;
    }
    .boxLine-current{
      height: 3px;
    }
    .boxRound{
      top: -8px;
      &-in{
        width: 20px;
        height: 20px;
      } 
    }
  }
}
@media screen and (max-width: 1000px) {
  .point{
    .boxLine{
      height: 2px;
    }
    .boxLine-current{
      height: 2px;
    }
    .boxRound{
      top: -7px;
      &-in{
        width: 16px;
        height: 16px;
      }
    }
  }  
}
</style>