<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const props = defineProps({
  isAdPage: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['changeTabCur'])
const appState = useAppState()
const handleAreaTab = (_idx: number) => {
  appState.setCurNum(_idx)
  emits('changeTabCur',_idx)
  if(props.isAdPage){
    history.pushState({}, '', `/medical-team/${appState.areaTabs_url[_idx]}`);
  }
}


</script>

<template>
  <div class="areaTab">
    <div :class="appState.areaTabCurNum === areaTabIndex ? 'isCur' : ''" v-for=" (item,areaTabIndex) in appState.areaTabs" :key="areaTabIndex" @click="handleAreaTab(areaTabIndex)">{{item}}</div>
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
    color: var(--indexColor);
    border-top: 2px solid var(--indexColor);
    border-bottom: 2px solid var(--indexColor);
    border-left: 2px solid var(--indexColor);
    transition: all .5s;
    &:first-child{
      border-radius: 5px 0 0 5px;
    }
    &:last-child{
      border-radius: 0 5px 5px 0;
      border-right: 2px solid var(--indexColor);
    }
    &:hover{
      background: var(--indexColor);
      color: #fff;
      text-shadow: 0px 0px 8px rgba(179, 54, 54, 0.55);
    }
    &.isCur{
      background: var(--indexColor);
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
      // margin-left: 30px;
      // margin-right: 30px;
      width: 100%;
      padding: 0 30px;
      &>div{
        font-size: 1rem;
        // padding: 4px 8.5px;
        padding: 4px 0;
        flex: 1;
        text-align: center;

      }
    }
  }
</style>
