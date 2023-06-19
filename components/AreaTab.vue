<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { defineEmits } from 'vue'
const emits = defineEmits(['changeTabCur'])

const appState = useAppState()
const handleAreaTab = (_idx: number) => {
  appState.setCurNum(_idx)
  emits('changeTabCur',_idx)
}


</script>

<template>
  <div class="areaTab">
    <div :class="appState.areaTabCurNum === areaTabIndex ? 'isCur' : ''" v-for=" (item,areaTabIndex) in appState.areaTabs" :key="areaTabIndex" @click="handleAreaTab(areaTabIndex)">{{$t(item)}}</div>
  </div>
</template>

<style lang="scss" scoped>
.areaTab{
  display: flex;
  border-radius: 5px;
  &>div{
    padding: 5px 20px;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.31rem;
    color: #FFA09E;
    border-top: 2px solid #FFA09E;
    border-bottom: 2px solid #FFA09E;
    border-left: 2px solid #FFA09E;
    transition: all .5s;
    &:first-child{
      border-radius: 5px 0 0 5px;
    }
    &:last-child{
      border-radius: 0 5px 5px 0;
      border-right: 2px solid #FFA09E;
    }
    &:hover{
      background: #FFA09E;
      color: #fff;
      text-shadow: 0px 0px 8px rgba(179, 54, 54, 0.55);
    }
    &.isCur{
      background: #FFA09E;
      color: #fff;
      text-shadow: 0px 0px 8px rgba(179, 54, 54, 0.55);
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .areaTab{
    &>div{
      padding: 5px 10px 3px;
    }
  }
}
@media screen and (max-width: 768px) {
  .areaTab{
      margin-top: 34px;
      margin-left: 30px;
      &>div{
        font-size: 1rem;
        padding: 4px 8.5px;
      }
    }
  }
</style>
