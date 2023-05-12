<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('dentalImplant')
useHead({
  title: "種植牙"
})

const introduceData = {
  title: '種植牙',
  text: '種植牙，俗稱為「種牙」',
  content: '牙醫會把植體植入病人的牙槽骨內，待骨整合後用以支撐上面的牙套。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/2bc3a5d449c9b42e.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/2b59dbbee76e0717.jpg',
  tabNavName: '種植牙',
}

const noteLists = [
  {
    name: '輕咬紗布止血',
    img: 'https://static.cmereye.com/imgs/2023/05/d3673c7df5e44e00.png'
  },
  {
    name: '28小時內冰敷',
    img: 'https://static.cmereye.com/imgs/2023/05/951895bd4bbb436d.png'
  },
  {
    name: '48小時內熱敷',
    img: 'https://static.cmereye.com/imgs/2023/05/3df84ca0f998c8c0.png'
  },
  {
    name: '依指示按時服藥',
    img: 'https://static.cmereye.com/imgs/2023/05/7a60206e8f58b7e4.png'
  },
  {
    name: '避免飲酒及抽煙',
    img: 'https://static.cmereye.com/imgs/2023/05/8a2cf2b2976bbf5d.png'
  },
  {
    name: '進食流質食物',
    img: 'https://static.cmereye.com/imgs/2023/05/d52b8b6e7a3ba19d.png'
  },
  {
    name: '避免激烈運動',
    img: 'https://static.cmereye.com/imgs/2023/05/f712b7d8611d5769.png'
  },
  {
    name: '謹記定期複診',
    img: 'https://static.cmereye.com/imgs/2023/05/3778c2175a77cfab.png'
  }
]

const stepLists = [
  [
    {
      title: 'Step 1',
      text: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
    },
    {
      title: 'Step 2',
      text: '注射麻醉藥'
    },
    {
      title: 'Step 3',
      text: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
    }
  ],
  [
    {
      title: 'Step 4',
      text: '等待2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽'
    },
    {
      title: 'Step 5',
      text: '牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒'
    },
    {
      title: 'Step 6',
      text: '將義齒固定在植體上，補上缺去的牙齒'
    }
  ]
]
const stepData = {
  title: '認識種植牙的六個步驟',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
      },
      {
        title: 'Step 2',
        text: '注射麻醉藥'
      },
      {
        title: 'Step 3',
        text: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '等待2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽'
      },
      {
        title: 'Step 5',
        text: '牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒'
      },
      {
        title: 'Step 6',
        text: '將義齒固定在植體上，補上缺去的牙齒'
      }
    ]
  ]
}

const reasonData = {
  title: '關於植牙',
  text: '常見種植牙的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/bab7e2cd0e553a7f.jpg',
  reasonLists:[
    {
      context: '常見種植牙的原因傳統治療方法',
    },
    {
      hideIcon: true,
      context: '(牙套、牙橋及假牙托等)',
    },
    {
      context: '無法修復缺牙的情況',
    },
    {
      context: '缺牙影響儀容，嚴重甚至會令面部變形',
    },
    {
      context: '缺牙容易令牙齒移位，影響咬合、發音',
    },
    {
      context: '改善咀嚼問題，回復正常飲食',
    }
  ]
}


</script>


<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader
     :headerBg="'https://static.cmereye.com/imgs/2023/04/306827fc69c5113d.jpg'"
     :mbBg="'https://static.cmereye.com/imgs/2023/04/90e1963571533efa.jpg'"
     :headerImg="'https://static.cmereye.com/imgs/2023/05/c46fcc590da0ffdd.png'"
     :headerBgImg="'https://static.cmereye.com/imgs/2023/05/de7105389a7f04b2.png'"
     :titlePosition="'left'"
    />
    <div class="dentistryServices">
      <div class="index_title pageCon">牙科服務</div>
      <!-- 介绍 -->
      <ServiceIntroduce :introduceData="introduceData" />
      <!-- 原因 -->
      <ServiceReason :reasonData="reasonData" />
      <!-- 六个步骤 -->
      <ServiceStep :stepData="stepData" />
      <div class="note">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in">種植牙後注意事項</div>
          <div class="dentistryServices-title-line"></div>
        </div>
        <div class="noteCard pageCon">
          <div class="noteCard-in" v-for="(note,noteIndex) in noteLists" :key="noteIndex">
            <div class="noteCard-in-image">
              <img :src="note.img" alt="">
            </div>
            <div class="noteCard-in-name">{{note.name}}</div>
          </div>
        </div>
      </div>
      <serviceCard />
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .dentistryServices{
    background: #fff;
    padding: 143px 0;
    //注意事项
    .note{
      margin-top: 96px;
      .noteCard{
        display: flex;
        flex-wrap: wrap;
        margin: 46px auto 0;
        width: 100%;
        max-width: 1090px;
        &-in{
          cursor: pointer;
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 45px;
          box-sizing: border-box;
          &-image{
            width: 100%;
            height: 0;
            padding-top: 100%;
            position: relative;
            background: #FFF1F0;
            border-radius: 10px;
            img{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              max-width: 90%;
              max-height: 90%;
            }
          }
          &:nth-of-type(1)>&-image,&:nth-of-type(3)>&-image,&:nth-of-type(6)>&-image,&:nth-of-type(8)>&-image{
            background: #FFDDDA;
          }
          &-name{
            height: 64px;
            line-height: 64px;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            color: #4D4D4D;
            text-align: center;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1452px) {
    .dentistryServices{
      padding: 110px 0;
      .note{
        .noteCard{
          &-in{
            padding: 0 3vw;
             &-image{
              img{
                max-width: 80%;
                max-height: 80%;
              }
              &-name{
                height: 60px;
                line-height: 60px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 890px) {
    .dentistryServices{
      .note{
        &-in{
          &-ul{
            &-li{
              margin-right: 3vw;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .dentistryServices{
      padding: 90px 0;
      .note{
        .noteCard{
          padding: 0 21.5px;
          box-sizing: border-box;
          &-in{
            width: 50%;
            padding: 0 8.5px;
            &-image{
              img{
                max-width: 70%;
                max-height: 70%;
              }
            }
            &:nth-of-type(1)>&-image,&:nth-of-type(4)>&-image,&:nth-of-type(5)>&-image,&:nth-of-type(8)>&-image{
              background: #FFDDDA;
            }
            &:nth-of-type(3)>&-image,&:nth-of-type(6)>&-image{
              background: #FFF1F0;
            }
            &-name{
              height: 56px;
              line-height: 56px;
            }
          }
        }
      }
    }
  }
</style>