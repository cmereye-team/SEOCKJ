<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('all-ceramic-crowns')
useHead({
  title: "全瓷牙冠 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供全瓷牙冠（牙套）服務，全瓷冠又稱全瓷牙冠、全瓷冠假牙、陶瓷假牙，而牙冠（牙套）是修復牙齒的方法，用於覆蓋形狀參差不齊或變色的牙齒。當牙齒因各種原因損壞時、需要修復裂縫或保護脆弱的牙齒時，會建議使用牙冠（牙套）進行修復。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙套 全瓷冠全瓷牙冠 全瓷冠假牙 陶瓷假牙 假牙 牙冠 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/05/52ea680666b23c0a.webp',
    mbImg: 'https://static.cmereye.com/imgs/2024/05/6ae676e496a04712.jpeg',
  }
]

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.all-ceramic-crowns.introduce.title',
  content: 'pages.dental-service.all-ceramic-crowns.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/8a10c52c1402727d.png',
  pcImg: 'https://static.cmereye.com/imgs/2024/05/6bc1522cd9b10464.webp',
  tabNavName: 'pages.dental-service.all-ceramic-crowns.introduce.tabNavName',
}

const foiblesData = {
  title: '全瓷牙冠及全鋯牙冠點揀好？',
  context: {
    span1: '有多種製作牙冠的物料，包括：',
    span2: '金屬、全鋯及全瓷。每種物料各有優點，可讓患者按需要選擇。',
    span3: '以下為你分析全瓷牙冠及全鋯牙冠的優缺點：'
  },
  foiblesLists: [
    {
      title: '全瓷牙冠',
      meritLists: [
        '仿真度最高，透光度高，顏色相似，自然',
        '適合用於前牙，外觀與真牙相似，不影響美觀',
        '可根據需要的堅固度，選擇不同強度的物料'
      ],
      shortcomingLists: [
        '比金屬牙套的強度較低'
      ],
      img: 'https://static.cmereye.com/imgs/2024/05/ccd01c67528c408f.png',
      mbimg: 'https://static.cmereye.com/imgs/2024/05/71a366efc58e349e.png'
    },
    {
      title: '烤瓷合金牙冠',
      meritLists: [
        '內層金屬，外層陶瓷，可以選擇外層顏色，較為美觀'
      ],
      shortcomingLists: [
        '由於有內外兩層，相對較厚，需磨掉較多牙齒',
        '牙套顏色不夠自然',
        '牙套邊緣會顯出金屬黑影，影響外觀',
        '表層陶瓷較金屬容易剝落或斷裂'
      ],
      img: 'https://static.cmereye.com/imgs/2024/05/18ed9f2d5706ea7f.png',
      mbimg: 'https://static.cmereye.com/imgs/2024/05/cff7e17f2dfdf392.png'
    },
    {
      title: '金屬牙冠',
      meritLists: [
        '耐用度高，適合需要咬合力較強的後牙',
        '損耗度與真牙非常接近',
        '堅固穩定，不用大幅度磨小牙齒，可保留大部分原牙'
      ],
      shortcomingLists: [
        '金屬顏色，不適合用於前牙，影響外觀',
        '價格較為昂貴',
        '有致癌疑慮',
        '較容易發炎或出現過敏'
      ],
      img: 'https://static.cmereye.com/imgs/2024/05/92599038cf25787c.png',
      mbimg: 'https://static.cmereye.com/imgs/2024/05/5cd67bf0be05684e.png'
    }
  ]
}

const stepData = {
  title: '服務流程',
  stepLists: [
    {
      name: '牙科診症',
      text: '由我們的牙醫為您進行口腔X Ray檢查並診斷，建議適合您的治療方案。',
      img: 'https://static.cmereye.com/imgs/2024/05/6fa827c648b84026.png'
    },
    {
      name: '牙科治療',
      text: '牙醫將進行治療牙齒，移除受損或蛀牙部分，為牙冠安裝作準備。',
      img: 'https://static.cmereye.com/imgs/2024/05/205095f005fac9cd.png'
    },
    {
      name: '精準掃描及取模',
      text: '使用先進的3D掃描技術，獲得精確的牙齒和口腔結構數據。取得牙齒的模型，以便製作合適的牙冠。',
      img: 'https://static.cmereye.com/imgs/2024/05/008d4d9e8743b81e.png'
    },
    {
      name: '臨時牙冠',
      text: '在等待永久牙冠製作期間，可能會安裝臨時牙冠保護牙齒。',
      img: 'https://static.cmereye.com/imgs/2024/05/67d95d7a4c7df5a7.png'
    },
    {
      name: '牙冠製作',
      text: '在我們的專科實驗室製作高精密度的牙冠。',
      img: 'https://static.cmereye.com/imgs/2024/05/d3393fb46a8be6d8.png'
    },
    {
      name: '牙冠安裝',
      text: '製作完成後，將進行牙冠試戴，確保完美貼合並進行調整。',
      img: 'https://static.cmereye.com/imgs/2024/05/8d8235d083747ea2.png'
    },
    {
      name: '定期覆診',
      text: '完成牙冠安裝後，將定期覆診及監察的牙冠狀況。',
      img: 'https://static.cmereye.com/imgs/2024/05/6798aa4aafd17ae5.png'
    }
  ]
}
const maintainData = {
  title: '牙冠要如何維護保養？',
  lists: [
    {
      name: '日常清潔',
      text: '每天使用牙線和牙刷清潔，特別注意牙冠周圍的牙齦線。',
      img: 'https://static.cmereye.com/imgs/2024/05/cefd1f712cd0bd43.png',
      mbimg: 'https://static.cmereye.com/imgs/2024/05/8c4d9cc3ce4fa000.png',
    },
    {
      name: '定期檢查',
      text: '定期到牙科診所進行專業清潔和檢查，以確保牙冠及周圍組織的健康。',
      img: 'https://static.cmereye.com/imgs/2024/05/f860909a46a01624.png',
      mbimg: 'https://static.cmereye.com/imgs/2024/05/a58fc9c6cc6cbc79.png',
    },
    {
      name: '避免硬物',
      text: '避免用牙冠咀嚼過硬的食物，以防牙冠破裂或脫落。',
      img: 'https://static.cmereye.com/imgs/2024/05/e80db740bd07665c.png',
      mbimg: 'https://static.cmereye.com/imgs/2024/05/299152af40e09595.png'
    }
  ]
}
const problemData = {
  title: '全瓷牙冠和全鋯牙冠常見問題',
  lists: [
    {
      Q: '全瓷牙冠和全鋯牙冠的壽命有多長？',
      A: '全瓷和全鋯牙冠的壽命通常可達10年以上，具體壽命取決於多種因素，如個人口腔衛生習慣、牙冠的照護和維護、以及咀嚼習慣等。'
    },
    {
      Q: '我應該選擇哪一種牙冠？',
      A: '選擇哪種牙冠主要取決於您的具體需要和偏好：\n如果您重視外觀和自然感，尤其是在前牙區域，全瓷牙冠可能是較好的選擇。\n如果您需要一個更強壯且耐用的解決方案，尤其是在承受較大咬合力的後牙區域，全鋯牙冠可能會是更合適的選擇。'
    },
    {
      Q: '如果全瓷牙冠或全鋯牙冠損壞了怎麼辦？',
      A: '及時就醫：如果牙冠破裂、鬆動或脫落，應盡快聯絡牙醫評估。\n臨時措施：在等待修復之前，可以使用藥局提供的臨時牙冠黏合劑作為暫時解決方案。\n修復或更換：牙醫會評估是否可以修復牙冠或需要完全更換。'
    },
  ]
}
</script>


<template>
<div>
  <PageBanner :isApiConfig="true" :apiId="'180'" />
  <div class="pageIn whitebgColor">
    <div class="smallPageCon pageTitle">
      <div class="index_title">{{$t('pages.dental-service.title')}}</div>
    </div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <div class="ltimg">
      <img srcset="https://static.cmereye.com/imgs/2024/05/f8cf5af81800962b.png 768w, https://static.cmereye.com/imgs/2024/05/da662d9a9e97417b.webp" src="https://static.cmereye.com/imgs/2024/05/da662d9a9e97417b.webp" />
    </div>
    <div class="step">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          {{stepData.title}}
        </div>
      </div>
      <div class="step-in">
        <div class="step-in-list">
          <div class="lists-in" v-for="(item,index) in stepData.stepLists.slice(0, 4)" :key="index">
            <img :src="item.img" :alt="item.text" :title="item.text">
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
          </div>
          <div class="line"></div>
        </div>
        <div class="step-in-list">
          <div class="lists-in" v-for="(item,index) in stepData.stepLists.slice(4, 7)" :key="index">
            <img :src="item.img" :alt="item.text" :title="item.text">
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="foibles">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          {{foiblesData.title}}
        </div>
      </div>
      <div class="foibles-text">
        <p>有多種製作牙冠的物料，包括：金屬、烤瓷合金及全瓷。每種物料各有優點，可讓患者按需要選擇。</p>
        <p>以下為你分析全瓷牙冠及全鋯牙冠的優缺點：</p>
      </div>
      <div class="foibles-in">
        <div class="list-in">
          <div class="title"></div>
          <div class="img"></div>
          <div class="merit">
            <img src="https://static.cmereye.com/imgs/2024/05/5dbd219b6720d596.png" alt="">
            <span>優點</span>
          </div>
          <div class="shortcoming">
            <img src="https://static.cmereye.com/imgs/2024/05/df82206323e591ae.png" alt="">
            <span>缺點</span>
          </div>
        </div>
        <div class="list-in" v-for="(item,index) in foiblesData.foiblesLists" :key="index">
          <div class="title">
            <span>{{item.title}}</span>
          </div>
          <div class="img">
            <img :srcset="`${item.mbimg} 768w, ${item.img}`" :src="item.img" alt="">
          </div>
          <div class="merit">
            <div class="mbl">
              <img src="https://static.cmereye.com/imgs/2024/05/5dbd219b6720d596.png" alt="">
              <span>優點</span>
            </div>
            <div class="spanLists">
              <span v-for="(meritItem,meritIndex) in item.meritLists" :key="meritIndex">
                {{meritItem}}
              </span>
            </div>
          </div>
          <div class="shortcoming">
            <div class="mbl">
              <img src="https://static.cmereye.com/imgs/2024/05/df82206323e591ae.png" alt="">
              <span>缺點</span>
            </div>
            <div class="spanLists">
              <span v-for="(shortcomingItem,shortcomingIndex) in item.shortcomingLists" :key="shortcomingIndex">
                {{shortcomingItem}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="maintain">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          {{maintainData.title}}
        </div>
      </div>
      <div class="maintain-in">
        <div class="list-in" v-for="(item,index) in maintainData.lists" :key="index">
          <img :srcset="`${item.mbimg} 768w,${item.img}`" :src="item.img" :alt="item.name" :title="item.name">
          <h3>{{item.name}}</h3>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <NewAddress />
  </div>
</div>
</template>



<style lang="scss" scoped>
.ltimg{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 114px;
  padding-bottom: 100px;
  background: url(https://static.cmereye.com/imgs/2024/05/4e7cd0b335c399a0.png) no-repeat;
  background-size: 100% 80%;
  background-position: center 200px;
  img{
    width: 1080px;
  }
}
.step{
  margin-top: 106px;
  &-in{
    width: 100%;
    margin-top: 7px;
    &-list{
      max-width: 1080px;
      margin: 50px auto;
      display: grid;
      gap: 70px;
      grid-template-columns: repeat(4,1fr);
      position: relative;
      .lists-in{
        width: auto;
        img{
          width: 100%;
        }
        h3{
          color: var(--indexColor1);
          text-align: center;
          font-family: FakePearl;
          font-size: 23px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          margin-top: 10px;
        }
        p{
          margin-top: 10px;
          color: var(--textColor);
          line-height: 160%; /* 30.4px */
          letter-spacing: 3.8px;
          font-size: 19px;
          text-align: center;
        }
      }
      &:nth-of-type(2){
        max-width: 810px;
        grid-template-columns: repeat(3,1fr);
      }
      .line{
        width: 100vw;
        height: 0;
        position: absolute;
        left: 50%;
        top: 32%;
        transform: translateX(-50%);
        border-bottom: 1px solid var(--indexColor1);
        z-index: -1;
      }
      &::before{
        content: '';
        position: absolute;
        background: url(https://static.cmereye.com/imgs/2024/05/0245d98d5d39cd83.png) no-repeat;
        background-size: 100% 100%;
        width: 14px;
        height: 21px;
        top: 32%;
        left: -50px;
        transform: translateY(-50%);
      }
      &::after{
        content: '';
        position: absolute;
        background: url(https://static.cmereye.com/imgs/2024/05/0245d98d5d39cd83.png) no-repeat;
        background-size: 100% 100%;
        width: 14px;
        height: 21px;
        top: 32%;
        right: -50px;
        transform: translateY(-50%);
      }
    }
  }
}
.maintain{
  margin-top: 100px;
  &-in{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 112px;
    max-width: 950px;
    width: 100%;
    margin: 20px auto 0;
    .list-in{
      img{
        width: 100%;
      }
      h3{
        color: var(--Grey-Deep, #4D4D4D);
        text-align: center;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        letter-spacing: 3px;
        margin-top: 5px;
      }
      p{
        color: var(--Grey-Deep, #4D4D4D);
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 5px;
        text-align: center;
      }
    }
  }
}
.foibles{
  margin-top: 100px;
  &-text{
    margin-top: 25px;
    p{
      color: var(--Black, var(--Grey-Deep, #4D4D4D));
      text-align: center;
      font-size: 19px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 30.4px */
      letter-spacing: 3.8px;
      &:last-child{
        color: var(--indexColor1);
      }
    }
  }
  &-in{
    display: grid;
    grid-template-columns: .65fr 1fr 1fr 1fr;
    width: 100%;
    max-width: 1499px;
    margin: 120px auto 0;
    .list-in{
      &>div{
        border-bottom: 2px solid #aaa;
        border-right: 2px solid #aaa;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .title{
        color: var(--Grey-Deep, #4D4D4D);
        text-align: center;
        font-size: 23px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        height: 69px;
        background: #FFCECB;
      }
      .img{
        height: 280px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .merit{
        color: var(--Grey-Deep, #4D4D4D);
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 3.8px;
        height: 227px;
        padding: 0 54px;
        .mbl{
          display: none;
        }
        .spanLists{
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        span{
          padding-left: 15px;
          position: relative;
          &::before{
            content: '·';
            position: absolute;
            left: 0;
            top: 0;
            font-size: 30px;
          }
        }
      }
      .shortcoming{
        color: var(--Grey-Deep, #4D4D4D);
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 3.8px;
        height: 260px;
        padding: 0 50px;
        .mbl{
          display: none;
        }
        .spanLists{
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        span{
          padding-left: 15px;
          position: relative;
          &::before{
            content: '·';
            position: absolute;
            left: 0;
            top: 0;
            font-size: 30px;
          }
        }
      }
      &:nth-of-type(1){
        &>div{
          align-items: center;
        }
        .title{
          border: none;
          background: none;
        }
        .merit{
          font-size: 23px;
          color: var(--indexColor1);
          background: #F4F4F4;
          border-left: 2px solid #aaa;
          flex-direction: row;
          letter-spacing: initial;
          padding: 0;
          img{
            width: 103px;
          }
          span{
            padding-left: 0;
            &::before{
              display: none;
            }
          }
        }
        .shortcoming{
          font-size: 23px;
          background: #F4F4F4;
          border-left: 2px solid #aaa;
          flex-direction: row;
          letter-spacing: initial;
          padding: 0;
          img{
            width: 48px;
          }
          span{
            &::before{
              display: none;
            }
          }
        }
      }
      &:nth-of-type(2){
        .title{
          position: relative;
          border-left: none;
          border-right: 2px solid rgba(0,0,0,0);
          border-top: 2px solid #aaa;
          border-radius: 40px 0 0 0;
          color: #fff;
          span{
            position: relative;
            z-index: 1;
          }
          &::after{
            content: '';
            position: absolute;
            z-index: 0;
            width: 100%;
            height: calc(100% + 18px);
            left: 50%;
            bottom: -3px;
            transform: translate(-50%,0);
            box-sizing: initial;
            background: var(--indexColor1);
            border-left: 7px solid var(--indexColor1);
            border-right: 7px solid var(--indexColor1);
            border-radius: 40px 40px 0 0;
          }
          &::before{
            content: '';
            width: 204px;
            height: 103px;
            background: url(https://static.cmereye.com/imgs/2024/05/600b314de50aa2ad.png) no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 50%;
            bottom: 80%;
            z-index: 1;
            transform: translateX(-50%);
          }
        }
        .img{
          position: relative;
          &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: calc(100% + 4px);
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            box-sizing: initial;
            border-left: 7px solid var(--indexColor1);
            border-right: 7px solid var(--indexColor1);
          }
        }
        .merit{
          color: var(--indexColor1);
          position: relative;
          &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: calc(100% + 4px);
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            box-sizing: initial;
            border-left: 7px solid var(--indexColor1);
            border-right: 7px solid var(--indexColor1);
          }
        }
        .shortcoming{
          position: relative;
          &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: calc(100% + 4px);
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            box-sizing: initial;
            border-left: 7px solid var(--indexColor1);
            border-right: 7px solid var(--indexColor1);
            border-bottom: 7px solid var(--indexColor1);
          }
        }
      }
      &:nth-of-type(3){
        .title{
          border-top: 2px solid #aaa;
        }
      }
      &:nth-of-type(4){
        .title{
          border-top: 2px solid #aaa;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .ltimg{
    margin-top: 5.9375vw;
    padding-bottom: 5.2083vw;
    background-position: center 10.4167vw;
    img{
      width: 56.25vw;
    }
  }
  .step{
    margin-top: 5.5208vw;
    &-in{
      margin-top: .3646vw;
      &-list{
        max-width: 56.25vw;
        margin: 2.6042vw auto;
        gap: 3.6458vw;
        .lists-in{
          h3{
            font-size: 1.1979vw;
            margin-top: .5208vw;
          }
          p{
            margin-top: .5208vw;
            letter-spacing: .1979vw;
            font-size: .9896vw;
          }
        }
        &:nth-of-type(2){
          max-width: 42.1875vw;
        }
        &::before{
          width: .7292vw;
          height: 1.0938vw;
          left: -2.6042vw;
        }
        &::after{
          width: .7292vw;
          height: 1.0938vw;
          right: -2.6042vw;
        }
      }
    }
  }
  .maintain{
    margin-top: 5.2083vw;
    &-in{
      gap: 5.8333vw;
      max-width: 49.4792vw;
      margin: 1.0417vw auto 0;
      .list-in{
        h3{
          font-size: 1.5625vw;
          letter-spacing: .1563vw;
          margin-top: .2604vw;
        }
        p{
          font-size: 1.0417vw;
          letter-spacing: .2604vw;
        }
      }
    }
  }
  .foibles{
    margin-top: 5.2083vw;
    &-text{
      margin-top: 1.3021vw;
      p{
        font-size: .9896vw;
        letter-spacing: .1979vw;
      }
    }
    &-in{
      max-width: 78.0729vw;
      margin: 6.25vw auto 0;
      .list-in{
        .title{
          font-size: 1.1979vw;
          height: 3.5938vw;
        }
        .img{
          height: 14.5833vw;
        }
        .merit{
          font-size: .9896vw;
          letter-spacing: .1979vw;
          height: 11.8229vw;
          padding: 0 2.8125vw;
          span{
            padding-left: .7813vw;
            &::before{
              font-size: 1.5625vw;
            }
          }
        }
        .shortcoming{
          font-size: .9896vw;
          letter-spacing: .1979vw;
          height: 13.5417vw;
          padding: 0 2.6042vw;
          span{
            padding-left: .7813vw;
            &::before{
              font-size: 1.5625vw;
            }
          }
        }
        &:nth-of-type(1){
          .merit{
            font-size: 1.1979vw;
            img{
              width: 5.3646vw;
            }
          }
          .shortcoming{
            font-size: 1.1979vw;
            img{
              width: 2.5vw;
            }
          }
        }
        &:nth-of-type(2){
          .title{
            border-radius: 2.0833vw 0 0 0;
            &::after{
              height: calc(100% + .9375vw);
              bottom: -0.1563vw;
              border-left: .3646vw solid var(--indexColor1);
              border-right: .3646vw solid var(--indexColor1);
              border-radius: 2.0833vw 2.0833vw 0 0;
            }
            &::before{
              width: 10.625vw;
              height: 5.3646vw;
            }
          }
          .img{
            &::after{
              height: calc(100% + .2083vw);
              border-left: .3646vw solid var(--indexColor1);
              border-right: .3646vw solid var(--indexColor1);
            }
          }
          .merit{
            &::after{
              height: calc(100% + .2083vw);
              border-left: .3646vw solid var(--indexColor1);
              border-right: .3646vw solid var(--indexColor1);
            }
          }
          .shortcoming{
            &::after{
              height: calc(100% + .2083vw);
              border-left: .3646vw solid var(--indexColor1);
              border-right: .3646vw solid var(--indexColor1);
              border-bottom: .3646vw solid var(--indexColor1);
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .ltimg{
    margin-top: 50px;
    padding: 0 0 60px 10px;
  }
  .step{
    &-in{
      padding: 0 30px;
      margin-top: 45px;
      &-list{
        grid-template-columns: repeat(2,1fr);
        gap: 30px;
        margin: 30px auto;
        .lists-in{
          h3{
            font-size: 16px;
          }
          p{
            font-family: "Noto Sans HK";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 200%; /* 32px */
            letter-spacing: 1.6px;
            text-align: left;
            margin-top: 5px;
          }
          &:nth-of-type(2){
            p{
              text-align: center;
            }
          }
        }
        &:nth-of-type(2){
          grid-template-columns: repeat(2,1fr);
        }
        .line{
          display: none;
        }
        &::before,&::after{
          display: none;
        }
      }
    }
  }
  .maintain{
    padding: 0 30px;
    &-in{
      grid-template-columns: repeat(2,1fr);
      gap: 30px 45px;
      margin-top: 45px;
      .list-in{
        h3{
          font-size: 20px;
        }
        p{
          letter-spacing: 3.75px;
          font-size: 15px;
        }
      }
    }
  }
  .foibles{
    &-text{
      margin-top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
        width: 100%;
        padding: 0 40px;
        font-size: 16px;
        &:last-child{
          width: 80%;
        }
      }
    }
    &-in{
      grid-template-columns: 1fr;
      padding: 0 30px;
      margin: 100px auto 0;
      .list-in{
        &>div{
          border-bottom: 1px solid #aaa;
          border-right: 1px solid #aaa;
        }
        .title{
          height: 38px;
          font-size: 15px;
        }
        .img{
          height: 126px;
        }
        .merit{
          height: auto;
          font-size: 12px;
          padding: 0;
          min-height: 103px;
          flex-direction: row;
          letter-spacing: 1.2px;
          .mbl{
            display: flex;
            width: 60px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-right: 1px solid #aaa;
            background: #F4F4F4;
            img{
              width: 36px;
              margin-bottom: 5px;
            }
            span{
              color: var(--indexColor1);
              text-align: center;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 130%;
              padding-left: 0;
              letter-spacing: initial;
              &::before{
                display: none;
              }
            }
          }
          .spanLists{
            flex: 1;
            padding: 20px 12px;
          }
          span{
            padding-left: 10px;
            &::before{
              font-size: 20px;
            }
          }
        }
        .shortcoming{
          height: auto;
          font-size: 12px;
          padding: 0;
          min-height: 103px;
          flex-direction: row;
          letter-spacing: 1.2px;
          .mbl{
            display: flex;
            width: 60px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-right: 1px solid #aaa;
            background: #F4F4F4;
            img{
              width: 32px;
              margin-bottom: 5px;
            }
            span{
              color: #4C4C4C;
              text-align: center;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 130%;
              padding-left: 0;
              letter-spacing: initial;
              &::before{
                display: none;
              }
            }
          }
          .spanLists{
            flex: 1;
            padding: 20px 12px;
          }
          span{
            padding-left: 10px;
            &::before{
              font-size: 20px;
            }
          }
        }
        &:nth-of-type(1){
          display: none;
        }
        &:nth-of-type(2){
          border-left: 1px solid #aaa;
          .title{
            border-radius: 20px 20px 0 0;
            &::after{
              border-left: 5px solid var(--indexColor1);
              border-right: 5px solid var(--indexColor1);
              border-radius: 25px 25px 0 0;
              bottom: -2px;
            }
            &::before{
              width: 125px;
              bottom: 90%;
              height: calc(103 / 204 * 125px);
            }
          }
          .img{
            &::after{
              border-left: 4px solid var(--indexColor1);
              border-right: 4px solid var(--indexColor1);
            }
          }
          .merit{
            &::after{
              border-left: 4px solid var(--indexColor1);
              border-right: 4px solid var(--indexColor1);
            }
          }
          .shortcoming{
            &::after{
              border-left: 4px solid var(--indexColor1);
              border-right: 4px solid var(--indexColor1);
              border-bottom: 4px solid var(--indexColor1);
            }
          }
        }
        &:nth-of-type(3){
          border-left: 1px solid #aaa;
          .title{
            border-top: none;
          }
        }
        &:nth-of-type(4){
          border-left: 1px solid #aaa;
          .title{
            border-top: none;
          }
        }
      }
    }
  }
}
</style>