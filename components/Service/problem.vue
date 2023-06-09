<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  problemData:{
    type: Object,
    default(){
      return{
        title: '',
        lists: [
          
        ]
      }
    }
  }
})
const activeNames = ref(0)
</script>

<template>
  <div class="problem">
    <div class="dentistryServices-title">
      <div class="dentistryServices-title-in bb">{{problemData.title}}</div>
    </div>
    <div class="problem-in pageCon">
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item :name="problemIndex" v-for="(problemItem,problemIndex) in problemData.lists" :key="problemIndex">
          <template #title>
            <div class="problem-in-title">
              <div>Q</div>
              <div>{{problemItem.Q}}</div>
              <div>
                <img src="@/assets/images/icon_9.png" alt="">
              </div>
            </div>
          </template>
          <div class="problem-in-context">
            <span>A</span>
            <span>{{problemItem.A}}</span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.problem{
  margin-top: 98px;
  &-in{
    margin-top: 35px;
    width: 100%;
    max-width: 1224px;
    &-title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      &>div:nth-of-type(1){
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        color: #FFA09E;
        margin-left: 32px;
        margin-top: -6px;
      }
      &>div:nth-of-type(2){
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #505050;
        max-width: calc(100% - 70px);
        flex: 1;
        margin-left: 20px;
      }
      &>div:nth-of-type(3){
        margin-right: 32px;
      }
    }
    &-context{
      display: flex;
      &>span:first-child{
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 160%;
        color: #FFA09E;
        margin-left: 32px;
        margin-top: 20px;
      }
      &>span:last-child{
        flex: 1;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #4D4D4D;
        padding: 45px 82px 26px 19px;
        white-space: pre-wrap;
      }
    }
  }
}
:deep(.el-collapse){
  border: none;
}
:deep(.el-collapse-item){
  margin-bottom: 4px;
  border: none;
}
:deep(.el-collapse-item__wrap){
  border: none;
}
:deep(.el-collapse-item__header){
  padding: 12px 0;
  background: #FFF1F0;
  border: none;
  box-sizing: initial;
  line-height: 160%;
  height: auto;
  min-height: 45px;
}
:deep(.el-collapse-item__header.is-active){
  background: #FFA09E;
  .problem-in-title>div:nth-of-type(1){
    color: #FFF1F0;
  }
  .problem-in-title>div:nth-of-type(2){
    color: #FFFFFF;
  }
}
:deep(.el-icon){
 display: none;
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .problem{
    margin-top: 90px;
    &-in{
      margin-top: 30px;
      width: calc(100% - 60px);
      &-title{
        &>div:nth-of-type(1){
          font-size: 26px;
          margin-left: 3px;
        }
        &>div:nth-of-type(2){
          font-size: 16px;
          margin-left: 0px;
        }
        &>div:nth-of-type(3){
          width: 13px;
          margin-right: 8px;
        }
      }
      &-context{
        &>span:first-child{
          margin-left: 3px;
          font-size: 26px;
        }
        &>span:last-child{
          padding: 20px 17px 1px 14px;
          font-size: 14px;
        }
      }
    }
  }
  :deep(.el-collapse-item__header){
    // height: 43px;
    min-height: 43px;
    box-sizing: border-box;
  }
}
</style>