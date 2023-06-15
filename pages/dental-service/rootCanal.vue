<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('rootCanal')
useHead({
  title: "根管治療(杜牙根) | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供根管治療（杜牙根）服務，用於治療嚴重蛀牙或牙根受細菌感染的情況。當蛀牙菌感染深入牙髓並引發神經發炎時，需要進行根管治療手術，以徹底清除感染部分。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙齦炎治療 根管治療 杜牙根 杜牙根價錢 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/870d54eb88782632.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/01d15590f9c0df29.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/61ccc7a66efaf1c3.jpg',
  pageName: 'rootCanal',
  pcText: ['根管治療助您解決牙痛，恢復健康的口腔狀態','立即接受專業治療手術，徹底解放美食自由'],
  mbText: ['根管治療助您解決牙痛','恢復健康的口腔狀態']
}

const orthodonticsIntroduceData = {
  title: '根管治療',
  content: '根管治療是治療嚴重蛀牙或牙根受細菌感染的手術，當蛀牙菌的感染深入牙髓，以致牙齒內的神經發炎，便需要以杜牙根手術徹底清除感染的部分。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/3030e00ebf385a45.jpg',
  tabNavName: '根管治療',
  pageName: 'rootCanal',
}

const reasonData = {
  title: '關於根管治療',
  text: '常見根管治療的原因？',
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
  title: '根管治療過程',
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
  ],
  pageName: 'rootCanal'
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
      name: '如醫生處方止痛藥，應按照指示使用。',
    },
    {
      name: '定期到口腔醫院進行檢查和清潔，以確保治療後的牙齒保持健康。',
    }
  ]
}

const problemData = {
  title: '根管治療常見問題',
  lists: [
    {
      Q: '根管治療會很痛嗎？',
      A: '進行手術時，醫生會先在杜牙根位置注射局部麻醉藥，大大減低不適感。手術後應按時服用醫生處方的止痛藥，處理手術後的腫痛不適。麻醉藥過後，杜牙根的牙齒仍有機會有少許痛楚，如有需要可服食止痛藥，一般幾天後不適便會慢慢舒緩。'
    },
    {
      Q: '根管治療過程需時多久？',
      A: '由於牙根消炎需時，中間過程或要多次替換消炎藥，因此通常要覆診2至4次，每次相距1-2星期，當中或會因不同的牙齒狀況而有所不同。'
    },
    {
      Q: '根管治療後是否不會再蛀牙？',
      A: '杜牙根後，牙神經被抽出，牙齒的琺瑯質及象牙質會被保留下來，所以仍有蛀牙的機會。因此完成治療後，應時刻保持口腔衛生，這樣可延長牙齒的壽命，大大提高治療成功率。'
    },
    {
      Q: '完成根管治療後，為何要裝上牙套？',
      A: '根管治療後的牙齒較為脆弱，有機會斷裂，套上牙套能有效地保護該牙齒。'
    },
    {
      Q: '根管治療是否會導致牙齒變黑？',
      A: '根管治療（杜牙根）後的牙齒可能會變黑，這是因為治療過程中使用的藥物可能會影響牙齒的顏色。但是這可以通過美容修復來解決。'
    },
    {
      Q: '根管治療是否適用於所有人？',
      A: '根管治療適用於大多數人，但是有些人可能不適合進行根管治療，例如牙齒過度破壞或已經失去了支撐力的情況。'
    },
    {
      Q: '根管治療後是否需要特殊護理？',
      A: '根管治療後的牙齒需要與其他健康牙齒一樣的護理，包括刷牙，使用牙線和定期洗牙。'
    }
  ]
}

let swiperRef ={
  slidePrev: ()=>{},
  slideNext: ()=>{}
}
const setSwiperRef = (swiper:any) => {
  swiperRef = swiper;
};
const handleProcessBtn = (_type: string) => {
  swiperRef[_type]();
}


const processData = {
  title: '顯微根管治療',
  context: ['愛康健引進德國蔡司顯微鏡根管治療儀，','結合顯微鏡技術和醫學技術，可清晰觀察牙齒的結構和根管形態。這項技術不僅適用於常規根管治療，還可用於根尖顯微外科手術，幫助醫生更好地維護正常組織，提高手術治療效率。'],
  lists: [
    [
      {
        title: 'Step 1',
        text: '使用X-Ray拍片確定患處結構，制定治療方案'
      },
      {
        title: 'Step 2',
        text: '施以口腔局部麻醉，減輕患者對治療的恐懼'
      },
      {
        title: 'Step 3',
        text: '施術前進行術區消毒隔離，手術器械消毒滅菌，專人專次使用，防止交叉感染。'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '在顯微鏡下打開牙髓腔，挑出壞死牙髓，擴大根管，沖洗根管內部'
      },
      {
        title: 'Step 5',
        text: '使用顯微鏡進行根管預備，清理根管內的感染物質，施以消炎藥封口。'
      },
      {
        title: 'Step 6',
        text: '在顯微鏡輔助下進行根管內的嚴密填充，隔絕根管和根尖周組織，防止再次感染。'
      },
    ]
  ]
}

</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" /> 
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
    <!-- 过程1 -->
    <ServiceStep :stepData="stepData" />
    <!-- 过程2 -->
    <div class="process">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{processData.title}}</div>
      </div>
      <div class="process-context pageCon">
        <span v-for="(processContextItem,processContextIndex) in processData.context" :key="processContextIndex">{{processContextItem}}</span>
      </div>
      <div class="process-step pageCon">
        <div class="step-in">
          <div class="step-in-box"
            v-for="(step,stepIndex) in processData.lists" :key="stepIndex">
            <div class="step-itemLists">
              <div class="step-itemLists-in" v-for="(stepChild,stepChildIndex) in step" :key="stepChildIndex">
                <div :class="['line', { 'lineNone' : step.length === 2 && stepChildIndex === 1 }]"></div>
                <span class="round"></span>
                <span class="title">{{stepChild.title}}</span>
                <span class="text">
                  <div>{{stepChild.text}}</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 注意事项 -->
    <ServiceNote :noteData="noteData" />
    <!-- 荣誉 -->
    <div class="honor">
      <div class="honor-bg">
        <div class="honor-title">
          <span>愛康健齒科品牌連鎖</span>
        </div>
        <div class="honor-text">
          致力於口腔健康28年，多次榮獲殊榮，信心保證
        </div>
        <div class="honor-in pageCon">
          <div class="leftBtn" @click="handleProcessBtn('slidePrev')"></div>
          <swiper
            slidesPerView="auto"
            :loop="true"
            class="honorSwiper"
            @swiper="setSwiperRef"
          >
            <swiper-slide class="swiper-slide">
              <img src="https://static.cmereye.com/imgs/2023/06/154e36113fa5e579.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="https://static.cmereye.com/imgs/2023/06/ac0aa9264119857f.png" alt="">
            </swiper-slide>
          </swiper>
          <div class="rightBtn" @click="handleProcessBtn('slideNext')"></div>
        </div>
      </div>
    </div>
     <!-- 问题 -->
    <ServiceProblem :problemData="problemData" />
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
    font-size: 30px;
    line-height: 160%;
    text-align: center;
    color: #666666;
  }
  &-lists{
    display: flex;
    max-width: 1229px;
    margin:  34px auto 42px;
    &-in{
      color: #666666;
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
      color: #666666;
    }
  }
}
.honor{
  margin-top: 157px;
  &-bg{
    padding: 70px 0 106px;
    background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
  }
  &-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span{
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      &:last-child{
        border-bottom: 4px solid #FFA09E;
      }
    }
  }
  &-text{
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 160%;
    text-align: center;
    color: #FFA09E;
    margin-top: 35px;
  }
  &-in{
    margin-top: 39.2px;
    display: flex;
    .leftBtn{
      width: 70px;
      background: #FFF1F0;
      cursor: pointer;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-75%,-50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent #fff transparent transparent;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .rightBtn{
      width: 70px;
      background: #FFCECB;
      cursor: pointer;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-25%,-50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent transparent transparent #fff;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .honorSwiper{
      width: calc(100% - 140px);
      overflow: hidden;
      margin: 0;
      .swiper-slide{
        img{
          width: 100%;
        }
      }
    }
  }
}
.process{
  background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
  margin-top: 153px;
  padding-top: 70px;
  &-context{
    text-align: center;
    width: calc(100% - 60px);
    max-width: 1102px;
    margin: 35px auto;
    span{
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      color: #666666;
    }
  }
  &-step{
    padding-bottom: 106px;
    .step-in{
        width: 100%;
        background: #FFFFFF;
        display: flex;
        padding: 44px 65px;
        box-sizing: border-box;
        height: 100%;
        min-height: 460px;
        &-box{
          width: 50%;
          height: 100%;
          .step-itemLists{
            width: 100%;
            &-in{
              padding-bottom: 90px;
              display: flex;
              align-items: flex-start;
              cursor: pointer;
              position: relative;
              .line{
                width: 4px;
                height: 100%;
                background: #FFF1F0;
                position: absolute;
                top: 20px;
                left: 10px;
                z-index: 0;
                &.lineNone{
                  height: 0;
                }
              }
              .round{
                width: 24px;
                height: 24px;
                margin-right: 14px;
                margin-top: 8px;
                border-radius: 50%;
                background: #FFF1F0;
                display: block;
                z-index: 1;
              }
              .title{
                margin-right: 28px;
                font-weight: 700;
                font-size: 28px;
                line-height: 160%;
                color: #666666;
                display: block;
              }
              .text{
                flex: 1;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 160%;
                color: #666666;
                display: block;
                padding-top: 10px;
              }
              &:last-child{
                margin-bottom: 0;
                padding-bottom: 0;
                .line{
                  // height: calc(50% - 24px);
                  height: 0;
                  &.lineNone{
                    height: 0;
                  }
                }
              }
              &:hover .round{
                background: #FFCECB;
              }
            }
          }
          &:first-child{
            padding-right: 40px;
          }
          &:last-child{
            margin-left: 40px;
          }
        }
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
  .honor{
    margin-top: 90px;
    &-bg{
      padding: 44px 30px;
      background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.3) 12.5%, rgba(255, 241, 240, 0.3) 81.99%, rgba(255, 241, 240, 0) 100%);
    }
    &-title{
      span{
        font-size: 26px;
        &:last-child{
          border-bottom: 2.5px solid #FFA09E;
        }
      }
    }
    &-text{
      font-weight: 600;
      font-size: 14px;
      margin-top: 8px;
    }
    &-in{
      margin-top: 22px;
      .leftBtn{
        width: 15.5px;
        &::after{
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent #fff transparent transparent;
        }
      }
      .rightBtn{
        width: 15.5px;
        &::after{
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent transparent transparent #fff;
        }
      }
      .honorSwiper{
        width: calc(100% - 31px);
      }
    }
  }
  .process{
    background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
    margin-top: 69px;
    padding-top: 44px;
    &-context{
      margin-top: 15px;
      span{
        font-weight: 500;
        font-size: 14px;
        width: 100%;
        display: inline-block;
        text-align: center;
      }
    }
    &-step{
      padding: 0 30px 46px;
      .step-in{
        flex-direction: column;
        padding: 23px 0 23px 24px;
        // margin-top: 28px;
        &-box{
          width: 100%;
          .step-itemLists{
            &-in{
              height: auto;
              padding-right: 10px;
              padding-bottom: 40px;
              .line{
                width: 2px;
                left: 7px;
              }
              .round{
                width: 16px;
                height: 16px;
                margin-top: 4px;
                margin-right: 7px;
              }
              .title{
                font-weight: 500;
                font-size: 1rem;
                margin-right: 12px;
              }
              .text{
                font-weight: 500;
                font-size: 16px;
                padding-top: 0;
              }
              &:first-child{
                margin-bottom: 0px;
                margin-top: 0;
              }
              &:last-child{
                align-items: flex-start;
                padding-bottom: 40px;
                .round{
                  margin-top: 4px;
                }
              }
            }
            &-in:last-child{
              .line{
                width: 2px;
                left: 7px;
                height: 100%;
              }
            }
          }
          &:first-child{
            padding-right: 0;
          }
          &:last-child{
            margin-left: 0;
            .step-itemLists{
              &-in:last-child{
                padding-bottom: 0;
                .line{
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>