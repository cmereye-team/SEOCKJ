<script lang="ts" setup>
let curNum = ref(0)
var areaTabs = [
  '羅湖區','福田區','南山區','寶安區','龍華區'
]
</script>

<template>
  <div class="areaTab">
    <div :class="curNum === areaTabIndex ? 'isCur' : ''" v-for=" (areaTab,areaTabIndex) in areaTabs" :key="areaTabIndex" @click="curNum = areaTabIndex">{{areaTab}}</div>
  </div>
</template>

<style lang="scss" scoped>
.areaTab{
  display: flex;
  border-radius: 5px;
  &>div{
    padding: 10px 20px 5px;
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
@media screen and (max-width: 768px) {
  .areaTab{
      margin-top: 34px;
      margin-left: 30px;
      &>div{
        font-size: 1rem;
        padding: 5px 10px;
      }
    }
  }
</style>
