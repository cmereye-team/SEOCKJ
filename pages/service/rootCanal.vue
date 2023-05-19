<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('rootCanal')
useHead({
  title: "杜牙根"
})

const orthodonticsIntroduceData = {
  title: '根管治療（杜牙根）',
  content: '根管治療（杜牙根）是治療嚴重蛀牙或牙根受細菌感染的手術，當蛀牙菌的感染深入牙髓，以致牙齒內的神經發炎，便需要以杜牙根手術徹底清除感染的部分。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/3030e00ebf385a45.jpg',
  tabNavName: '杜牙根',
  pageName: 'rootCanal',
}

const reasonData = {
  title: '關於杜牙根',
  text: '常見杜牙根的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/6e9ea22364596cbd.jpg',
  reasonLists:[
    {
      context: '切除受感染的牙髓神經，解決牙痛問題',
    },
    {
      context: '防止牙髓感染蔓延至牙周組織和牙槽骨，導致更嚴重的口腔問題',
    },
    {
      context: '患者出現牙痛問題，經醫生評估後，認為牙齒仍有保留價值而確定保留真牙',
    },
    {
      context: '牙齒被蛀蝕得太深、撞斷或嚴重磨耗，需徹底清除牙髓內的感染，解決牙髓壞死、化膿等問題',
    }
  ]
}

const stageData = {
  title: {
    span1: '根管治療用以治理蛀牙，',
    span2: '蛀牙可分為以下數個階段：'
  },
  stageLists: [
    {
      num: 1,
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/26f87784ff84ce3f.jpg',
      name: '受到感染',
      text: '當琺瑯質被破壞，蛀洞擴大至牙本質（即琺瑯質下面的一層），牙齒便會受到感染或有膿腫。',
    },
    {
      num: 2,
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/0e76a7c55a53e406.jpg',
      name: '影響深遠',
      text: '最終蛀進牙神經，亦即牙髓，此階段蛀牙已導致永久的發炎，牙神經開始壞死。',
    },
    {
      num: 3,
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/672e9cafcbb9a069.jpg',
      name: '腫痛難耐',
      text: '此時釋放出的化學物質可造成牙根頂部感染，導致紅腫及疼痛。這時牙痛感覺變得十分明顯。',
    },
    {
      num: 4,
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/ee7dc07f02961402.jpg',
      name: '立即求醫',
      text: '病人通常會求醫，以求減輕痛楚及進行根管治療。',
    }
  ],
  remark: {
    p1: '*根管治療非常複雜，需適當地進行，',
    p2: '因此你應該找個在此領域經驗豐富的牙醫。'
  }
}

const stepData = {
  title: '根管治療(杜牙根)過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '為受感染的牙齒照X光，了解根管形狀及長度'
      },
      {
        title: 'Step 2',
        text: '局部麻醉，進行牙根消毒'
      },
      {
        title: 'Step 3',
        text: '從牙冠進入牙髓腔，把牙髓組織刮除或吸出'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '以藥水徹底消毒乾淨根管內壁'
      },
      {
        title: 'Step 5',
        text: ' 把牙冠髓腔填封及覆蓋牙洞，以降低蛀牙菌再度入侵的機會'
      },
      {
        title: 'Step 6',
        text: '如經治療後的牙齒太脆弱，需為牙齒套上牙套，預防再被咬崩而要拔除'
      }
    ]
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '避免咀嚼食物或咬硬物，以免損壞治療後的牙齒。',
    },
    {
      name: '避免用治療後的牙齒咬開堅硬的食物，例如堅果、糖果等。',
    },
    {
      name: '在治療後的前幾天內，嘗試避免刷牙或使用牙線，以免影響治療區域的恢復。',
    },
    {
      name: '如果需要刷牙，可以使用軟毛刷，輕柔地刷牙，避免刷太用力或刷到治療區域。',
    },
    {
      name: '如果感覺到疼痛或不適，可以使用過濾口的冰水或冰袋敷在治療區域附近，以減輕疼痛和腫脹。',
    },
    {
      name: '如果有醫生開立的止痛藥，應按照指示使用。',
    },
    {
      name: '定期到牙醫診所進行檢查和清潔，以確保治療後的牙齒保持健康。',
    }
  ]
}

</script>


<template>
<div>
  <PageHeader /> 
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <div class="stage">
      <div class="stage-title">
        <span>{{stageData.title.span1}}</span>
        <span>{{stageData.title.span2}}</span>
      </div>
      <div class="stage-lists">
        <div class="stage-lists-in" v-for="(stage,index) in stageData.stageLists" :key="index">
          <div class="num">{{stage.num}}</div>
          <div class="image">
            <img :src="stage.imgUrl" alt="">
          </div>
          <div class="name">{{stage.name}}</div>
          <div class="text">{{stage.text}}</div>
        </div>
      </div>
      <div class="stage-remark">
        <p>{{stageData.remark.p1}}</p>
        <p>{{stageData.remark.p2}}</p>
      </div>
    </div>
    <!-- 六个步骤 -->
    <ServiceStep :stepData="stepData" />
    <!-- 注意事项 -->
    <ServiceNote :noteData="noteData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>

.stage{
  margin-top: 126px;
  &-title{
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 160%;
    text-align: center;
    color: #4D4D4D;
  }
  &-lists{
    display: flex;
    max-width: 1229px;
    margin:  34px auto 42px;
    &-in{
      color: #4D4D4D;
      font-style: normal;
      width: 23.3%;
      .num{
        font-weight: 700;
        font-size: 50px;
        z-index: 2;
        position: relative;
      }
      .image{
        margin-top: -10px;
        position: relative;
        z-index: 1;
      }
      .name{
        font-weight: 700;
        font-size: 28px;
        margin-top: 15px;
        line-height: 160%;
      }
      .text{
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        margin-top: 17px;
      }
      &:not(:last-child){
        margin-right: 28px;
      }
      &:last-child{
        .image{
          margin-top: calc(-7% - 10px);
        }
      }
    }
  }
  &-remark{
    max-width: 1229px;
    margin:  0 auto;
    p{
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      color: #4D4D4D;
    }
  }
}
@media only screen and (max-width: 760px) {
  .stage{
    padding: 0 20px;
    box-sizing: border-box;
    &-title{
      font-size: 28px;
      span{
        display: block;
        text-align: center;
      }
    }
    &-lists{
      flex-wrap: wrap;
      margin:  34px auto 0;
      &-in{
        padding: 0 10px;
        box-sizing: border-box;
        width: 50%;
        margin-bottom: 20px;
        .num{
          font-size: 26px;
          font-weight: 700;
        }
        .image{
          width: 100%;
        }
        .name{
          font-weight: 600;
          font-size: 20px;
          margin-top: 7px;
        }
        .text{
          font-weight: 600;
          font-size: 15px;
          margin-top: 10px;
        }
        &:not(:last-child){
          margin-right: 0;
        }
      }
    }
    &-remark{
      margin-left: 10px;
      p{
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
}
</style>