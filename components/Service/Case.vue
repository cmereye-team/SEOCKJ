<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: ''
  }
})
const caseLists = [
  {
    img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Ellipse-203.6m59zrsucm00.jpg',
    name: '王先生',
    jos: '退休人士',
    context: '年紀大上顎漸漸甩晒啲牙，食唔到野身體都差咗。我仔帶我去植牙之後，咬到食物之餘講野仲清楚咗。'
  },
  {
    img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Ellipse-202.4xq7h8rvl680.png',
    name: 'Mrs Chan',
    jos: '中學老師',
    context: '因課外活動小意外，其中隻門牙嚴重斷開咗。經同事介紹搵愛康健，翌日就可以安排到植牙，醫生專業及服務效率度高，深圳植牙信心推薦！'
  },
  {
    img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Ellipse-204.59hem870vfw0.png',
    name: 'Hugo',
    jos: '金融界新人',
    context: '下排左邊智慧齒橫生好難清潔，智慧齒及旁邊隻大牙嚴重蛀牙。唔想咁後生少隻大牙用，所以就選擇植牙。依加牙齒依然整齊、有力。'
  },
]
</script>

<template>
  <div class="case">
    <div class="case-title">
      <div class="index_title">個案分享</div>
    </div>
    <div class="case-context">
      <span>
        種植牙專科實力
      </span>
      <span>
        我揀愛康健！
      </span>
    </div>
    <div class="case-content">
      <div class="case-content-in">
        <div v-for="(caseItem,caseIndex) in caseLists" :key="caseIndex">
          <div class="case-content-in-l">
            <div>
              <img :src="caseItem.img" alt="">
            </div>
            <div>
              <span>{{caseItem.jos}}</span>
              <span>{{caseItem.name}}</span>
            </div>
          </div>
          <div class="case-content-in-r">
            {{caseItem.context}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.case{
  width: 100%;
  margin-top: 97px;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-context{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 21px;
    span{
      color: #FC1682;
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; 
    }
  }
  &-content{
    display: flex;
    justify-content: center;
    margin-top: 46px;
    padding: 58px 0 62px;
    background: linear-gradient(279deg, rgba(252, 22, 130, 0.40) -0.55%, rgba(252, 22, 130, 0.28) -0.54%, rgba(255, 168, 198, 0.00) 99.3%);
    &-in{
      width: 80%;
      max-width: 1560px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      
      &>div{
        display: flex;
        width: calc(100% / 3);
        flex-direction: column;
        background: #fff;
        padding: 14px 29px 25px;
        box-sizing: border-box;
        &:not(:first-child){
          margin-left: 16px;
        }
      }
      
      &-l{
        display: flex;
        img{
          border-radius: 50%;
          margin-top: -36%;
          border: 8px solid #fff;
        }
        span{
          display: block;
          margin-left: 18px;
          &:nth-of-type(1){
            color: #4D4D4D;
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }
          &:nth-of-type(2){
            color: #FC1682;
            font-size: 21px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }
        }
      }
      &-r{
        margin-top: 15px;
        color: #4D4D4D;
        text-align: justify;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1800px) {
  .case{
    &-content{
      &-in{
        &>div{
          padding: .8vw 1.6vw 1.4vw;
        }
        &-l{
          span{
            &:nth-of-type(1){
              font-size: 1.5VW;
            }
            &:nth-of-type(2){
              font-size: 1.2VW;
            }
          }
        }
        &-r{
          font-size: 1.1VW;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .case{
    margin-top: 40px;
    &-title{
      .index_title{
        width: auto;
        margin-left: 0;
        background: none;
        position: relative;
        text-indent: 0;
        font-weight: 600;
        font-size: 1.625rem;
        line-height: 1.6;
        &::before{
          content: '';
          height: 3px;
          border-radius: 1.5px;
          width: 100%;
          background: var(--indexColor);
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
    &-context{
      display: none;
    }
    &-content{
      background: none;
      margin-top: 15px;
      padding: 11px 0 0;
      &-in{
        flex-direction: column;
        &>div{
          width: 100%;
          padding: 14px 36px 25px;
          padding: 14px 0 25px;
          &:not(:first-child){
            margin-left: 0px;
          }
        }
        &-l{
          align-items: center;
          img{
            width: 125px;
            height: 125px;
            margin-top: 0;
            border: none;
          }
          span{
            margin-left: 15px;
            &:nth-of-type(1){
              font-size: 20px;
            }
            &:nth-of-type(2){
              font-size: 18px;
            }
          }
        }
        &-r{
          margin-top: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>