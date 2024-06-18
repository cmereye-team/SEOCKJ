
<script lang="ts" setup>

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
  },
  smallLine: {
    type: Boolean,
    default: false
  },
})
const emits = defineEmits(['changeLineCur'])
const handleSwiperItem = (idx: Number) => {
  // console.log(idx)
  emits('changeLineCur', idx)
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
  <div :class="['point',{small:smallLine}]" :style="{width: (isAutoWidth?`calc(${lineWidth}px * ${latestNewsNum} - 5px)`: 'calc(100% - 5px)')}">
    <div class="boxLine" v-show="latestNewsNum !== 1"></div>
    <div class="boxLine-current" v-show="latestNewsNum !== 1" :style="{width:`calc(${ (latestNewsCurrent-1) * 100/(latestNewsNum-1) }% - 5px)`}"></div>
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
      width: calc(100% - 5px);
      height: 4px;
      background: var(--indexColor2);
      margin: 0 auto;
    }
    .boxLine-current{
      height: 4px;
      background: var(--indexColor);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 2.5px;
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
        background: var(--indexColor2);
        border-radius: 50%;
        .current{
          width: 100%;
          height: 100%;
          background: var(--indexColor);
          border-radius: 50%;
          transition: all .5s;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1920px) {
    .point{
      .boxLine{
        height: .2083vw;
      }
      .boxLine-current{
        height: .2083vw;
      }
      .boxRound{
        top: -0.5208vw;
        &-in{
          width: 1.25vw;
          height: 1.25vw;
        }
      }
    }
  }
// @media (min-width: 1000px) and (max-width: 1452px) {
//   .point{
//     .boxLine{
//       height: 3px;
//     }
//     .boxLine-current{
//       height: 3px;
//     }
//     .boxRound{
//       top: -8px;
//       &-in{
//         width: 20px;
//         height: 20px;
//       } 
//     }
//   }
// }
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
    &.small{
      .boxRound{
        top: -3px;
        &-in{
          width: 8px;
          height: 8px;
        }
      }
    }
  }  
}
</style>