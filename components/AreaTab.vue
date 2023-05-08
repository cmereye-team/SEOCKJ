<script lang="ts" setup>
import { useAppState } from '~/stores/appState'

var areaTabs = [
  '羅湖區','福田區','南山區','寶安區','龍華區'
]
const appState = useAppState()
const handleAreaTab = (_idx: number) => {
  appState.setCurNum(_idx)
}
</script>

<template>
  <div class="areaTab">
    <div :class="appState.areaTabCurNum === areaTabIndex ? 'isCur' : ''" v-for=" (item,areaTabIndex) in areaTabs" :key="areaTabIndex" @click="handleAreaTab(areaTabIndex)">{{item}}</div>
  </div>
</template>

<style lang="scss" scoped>
.areaTab{
  display: flex;
  border-radius: 5px;
  &>div{
    padding: 5px 20px;
    cursor: pointer;
    background: #FFDDDA;
    font-weight: 500;
    font-size: 1.31rem;
    color: #fff;
    text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
    margin-left: 1px;
    &:first-child{
      border-radius: 5px 0 0 5px;
    }
    &:last-child{
      border-radius: 0 5px 5px 0;
    }
    &:hover{
      background: #FFA09E;
    }
    &.isCur{
      background: #FFA09E;
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
