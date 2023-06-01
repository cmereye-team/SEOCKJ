<script lang="ts" setup>
import { useAppState } from '~/stores/appState'

const appState = useAppState()
useHead({
  title: "聯絡我們"
})
const handleAreaTab = (_idx: number) => {
  appState.setCurNum(_idx)
}


</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader
      :headerBg="'https://static.cmereye.com/imgs/2023/04/b398478bdd2d7847.jpg'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/aa3a789ff99a6ba3.jpg'"
    />
    <div class="contactUs">
      <ContactUs />
      <ContactForm />
      <div class="environment">
        <div class="environment-title">
          <div class="index_title">診所環境</div>
        </div>
        <div class="environment-in pageCon">
          <div class="bigImg">
            <img src="https://static.cmereye.com/imgs/2023/06/c3c41b41f0a766d0.jpg" alt="">
          </div>
          <div class="areaNav">
            <div class="areaNav-in" v-for="(areaItem,areaIndex) in appState.areaTabs" :key="areaIndex" @click="handleAreaTab(areaIndex)">
              <span :class="{'current': appState.areaTabCurNum === areaIndex}">{{areaItem}}</span>
            </div>
          </div>
          <div class="imgLists">
            <div class="imgLists-in" v-for="imgItem in 5" :key="imgItem">
              <img src="https://static.cmereye.com/imgs/2023/06/c3c41b41f0a766d0.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- <AboutUs /> -->
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .contactUs{
    background: #fff;
    padding-bottom: 143px;
  }
  .environment{
    margin-top: 154px;
    &-title{
      display: flex;
      justify-content: center;
    }
    &-in{
      margin-top: 46px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .areaNav{
        margin-top: 35px;
        width: 100%;
        max-width: 840px;
        display: flex;
        justify-content: space-between;
        &-in{
          width: 121px;
          height: 49px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            border-bottom: 1px solid #4D4D4D;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 160%;
            color: #4D4D4D;
            &:hover{
              border-bottom: 1px solid #FFA09E;
              color: #FFA09E;
            }
            &.current{
              border-bottom: 1px solid #FFA09E;
              color: #FFA09E;
            }
          }
        }
      }
      .imgLists{
        margin-top: 16px;
        display: flex;
        width: 100%;
        max-width: 1068px;
        flex-wrap: wrap;
        padding-left: 41px;
        box-sizing: border-box;
        &-in{
          width: 33.33%;
          padding-right: 41px;
          box-sizing: border-box;
          margin-bottom: 16px;
          cursor: pointer;
          img{
            width: 100%;
            height: auto;
            max-width: 329px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .contactUs{
      padding-bottom: 90px;
    }
    .environment{
      margin-top: 50px;
      &-in{
        margin-top: 28px;
        .areaNav{
          padding: 0 20px;
          margin-top: 15px;
          &-in{
            span{
              font-size: 16px;
            }
          }
        }
        .imgLists{
          padding-right: 10px;
          padding-left: 30px;
          margin-top: 6px;
          &-in{
            padding-right: 20px;
            margin-bottom: 6px;
          }
        }
      }
    }
  }
</style>

