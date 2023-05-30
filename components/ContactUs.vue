<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
const mapConShow = ref(true)

onMounted(()=>{
  getWindowResize()
  window.addEventListener('resize',getWindowResize)
})

const getWindowResize = () => {
  if(window.innerWidth > 768)
    mapConShow.value = true
  else
    mapConShow.value = false
  // console.log(mapConShow)
}

let currentAddress = ref('0')

const allAddressLists = [
  // 罗湖区
  [
    {
      id: '101',
      name: '深圳愛康健口腔醫院（羅湖）',
      address: '深圳市羅湖區火車站大廈C區1-8樓',
      time: '9:00-18:00 （節假日照常應診）',
      phone: '0755-61302632',
      busRoutes: '羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號',
      metroRoutes: '地鐵1號線“羅湖站”C出口； 地鐵9號線“人民南站” A1出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/476419e0bd27692f.png',
      googleMap: 'https://goo.gl/maps/yuWB8353yF3u4EJS6?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '102',
      name: '恒潔口腔門診部（羅湖）',
      address: '深圳市羅湖區桂園街道新圍社區深南東路5015號金豐城大廈B座1602、1603',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '深圳書城站：29路、85路、103短線、103路、104路、113路、204路、214路、215路、E8路、M106路、M112路、M133路、M481路、M559路、N4路、大鵬假日專線4路、高快巴士863號、高快巴士97路;都市名苑：7路、8路、14路、M152路、M360路、M383路、M482路',
      metroRoutes: '地鐵1號線“大劇院”站F出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/faf033fd50b18824.png',
      googleMap: 'https://goo.gl/maps/HQsN5jNMTeZNbxuf7?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '103',
      name: '康輝口腔門診部（羅湖）',
      address: '深圳市羅湖區建設路深圳火車站皮帶走廊A12-A15.B11-B14及夾層B8--3號鋪',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號',
      metroRoutes: '地鐵1號線“羅湖站”D出口；地鐵9號線“人民南站”A1出口；',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/b741f54f1b105876.png',
      googleMap: 'https://goo.gl/maps/JMK7Huhaf9k88nbf8?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '104',
      name: '富康口腔門診部（羅湖）',
      address: '建設路火車站大樓二樓南環廊商鋪（火車站大酒店二樓、羅湖地鐵站D出口垂直電梯3樓）',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號',
      metroRoutes: '地鐵1號線“羅湖站”D出口；地鐵9號線“人民南站”A1出口；',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/fe00a2ba47a161b5.png',
      googleMap: 'https://goo.gl/maps/nSmd9ZL66E4Yizp67?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '105',
      name: '顏麗口腔診所（羅湖）',
      address: '深圳市罗湖区罗湖口岸商业城1091号',
      time: '9:00-18:00 （节假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '罗湖火车站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰专线73号',
      metroRoutes: '地铁1号线“罗湖站”A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/5f6257f23815c0b8.png',
      googleMap: 'https://goo.gl/maps/HefFWPuSqmdHbyBo9?coh=178572&entry=tt',
      baiduMap: ''
    }
  ],
  // 福田區
  [
    {
      id: '201',
      name: '李川口腔診所（福田）',
      address: '深圳市福田區金田路水圍村金莊商業樓2-5樓',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '福民地鐵站：60路、62路、73路、202路、303路、385路、B689路、B858路、N9路、高快巴士26路',
      metroRoutes: '地鐵4號線和7號線“福民站”D出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/f75bb70e48d1a50e.png',
      googleMap: 'https://goo.gl/maps/evH9Z41S1o4fH3HR6?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '202',
      name: '王琦口腔診所（福田）',
      address: '深圳市福田區福田街道漁農村社區裕亨路50號海悅華城C107、C108B',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '福田口岸：203路、B618路、B685路、B689路、B858路、B957路、M204路、M441路、M499路',
      metroRoutes: '地鐵4號線”福田口岸"站A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/63dbe40ee13b53e9.png',
      googleMap: 'https://goo.gl/maps/mQgJXrTxvaaLB9Y1A?coh=178572&entry=tt',
      baiduMap: ''
    },
  ],
  // 南山区
  [
    {
      id: '301',
      name: '恒雅口腔門診部（南山）',
      address: '深圳市南山區南海大道與工業八路交匯處',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '蛇口沃爾瑪：70路、79路、80路、113路、122路、204路、328路、332路、B605路、M106路、M133路、M241路、M400路、M409路、M409區間車、M448路、M484路、M527線、N1路、N4路、NE30線、高快巴士123路、高快巴士874號、前海行8路',
      metroRoutes: '地鐵9號線"南油西" 站 B出口；地鐵12號線“四海站”J出口平安銀行拐角處。',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/4783ff2e8f17beff.png',
      googleMap: 'https://goo.gl/maps/nK2iuEusGFcbqE216?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '302',
      name: '恒美口腔門診部（南山）',
      address: '深圳市南山區商業文化中心區海岸城西座501',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '海岸城：19路、229路、B605路、B964路、B964路、M201路、M209路、M222路、M299路、M429路、M430路、M474路、M475路、M519路、M519線大站快車、M539路、N24路、N8路、高峰專線12路、歐洲城假日專線',
      metroRoutes: '地鐵2號線和11號線"後海" 站 D1出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/d6c09b604319be78.png',
      googleMap: 'https://goo.gl/maps/WkeuvYNKWeLNhSzE7?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '303',
      name: '沈虹口腔診所（南山）',
      address: '深圳市南山區南海大道海典居裙樓1樓&2樓（海雅百貨對面）',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '海雅百貨：19路、37路、70路、80路、113路、226路、245區間車、328路、M106路、M133路、M242路、M398路、M398區間車、M448路、M527線、M539路、N1路、N8路、NE30線、高快巴士123路、高快巴士874號',
      metroRoutes: '地鐵9號線"南山書城"站 D出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/47efa458657fb4a5.png',
      googleMap: 'https://goo.gl/maps/ud217ArM8ZGDJ8DJ8?coh=178572&entry=tt',
      baiduMap: ''
    },
  ],
  // 寶安區
  [
    {
      id: '401',
      name: '炫雅口腔門診部（寶安）',
      address: '寶安區新安街道建安一路80號香檳廣場一棟四樓402號',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '建行寶安支行： 395路、603路、610路、704路、m235路',
      metroRoutes: '地鐵5號線“靈芝“站A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/009aa648694461bb.png',
      googleMap: 'https://goo.gl/maps/ntfTf49VNaY9D9VL6?coh=178572&entry=tt',
      baiduMap: ''
    },
  ],
  // 龍華區
  [
    {
      id: '501',
      name: '雅健口腔門診部（龍華）',
      address: '深圳市龍華區民治街道大嶺社區紅山6979二期8棟25座202室',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '高級中學北校區： 43路、74路、b917路、b917路、m130路、m340路、m360路、m369路、m405路、m462路、m504路、m554路、m579路、高峰專線119路、高峰專線150路',
      metroRoutes: '地鐵4號線“紅山“站D出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/547f7fa32b8a7154.png',
      googleMap: 'https://goo.gl/maps/jtcrLmft7h8s3xfX6?coh=178572&entry=tt',
      baiduMap: ''
    },
    {
      id: '502',
      name: '恒樂口腔門診部（龍華）',
      address: '深圳市龍華區梅龍路深物業新華城商業F1-03號(工業西路與龍華大道交匯處—壹方城對面)',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '風和日麗北 : 312路、621路、M152路、M173路、M180路、M222路、M244路、M262路、M269路外環、M365路、M381路順時針、M401路、M577路',
      metroRoutes: '地鐵4號線“龍華站”A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/2d4f2be9d307d63a.png',
      googleMap: 'https://goo.gl/maps/VKT1orRbiS8mAiN39?coh=178572&entry=tt門診門',
      baiduMap: ''
    },
  ]
]

// --------------------------------------------------
let contactUsSwiperRef ={
  slideTo: (a,b)=>{}
}
//轮播图setRef事件
const setContactUsSwiperRef = (swiper:any) => {
  contactUsSwiperRef = swiper;
};

const onSlideContactUsSwiperChange = (swiper:any) => {
  // console.log('Change',swiper.realIndex)
  currentAddress.value = swiper.realIndex
}
// --------------------------------------------------

const handleAddress = (_idx: string) => {
  console.log(_idx)
  if(currentAddress.value === _idx){
    currentAddress.value = '0'
    return
  }
  currentAddress.value = _idx
  // contactUsSwiperRef.slideTo(currentAddress.value, 0);
}

// const handleLeftBtn = () => {
//   // console.log('left',currentAddress.value)
//   if(currentAddress.value > 0){
//     currentAddress.value--
//   }else{
//     currentAddress.value = allAddressLists[appState.areaTabCurNum].length-1
//   }
//   contactUsSwiperRef.slideTo(currentAddress.value, 0);
// }

// const handleRightBtn = () => {
//   // console.log('right',currentAddress.value)
//   if(currentAddress.value >= 0 && currentAddress.value < allAddressLists[appState.areaTabCurNum].length-1){
//     currentAddress.value++
//   }else{
//     currentAddress.value = 0
//   }
//   contactUsSwiperRef.slideTo(currentAddress.value, 0);
// }

</script>


<template>
  <div class="index-contactUs">
      <!-- <div class="index_title">聯絡我們</div> -->
      <div class="index-contactUs-t pageCon">
        <div class="index_title">聯絡我們</div>
        <div>
          <AreaTab />
        </div>
      </div>
      <div class="address">
        <div class="address-in" v-for="(addressItem,addressIndex) in allAddressLists[appState.areaTabCurNum]" :key="addressIndex">
          <h3>{{addressItem.name || ''}}</h3>
          <div class="content">
            <span>醫院地址：{{addressItem.address || ''}}</span>
            <span>營業時間：{{addressItem.time || ''}}</span>
            <span>諮詢電話：{{addressItem.phone || ''}}</span>
          </div>
          <span class="showIcon" @click="handleAddress(addressItem.id)">交通路線:</span>
          <div class="route" v-show="currentAddress === addressItem.id ">
            <span>巴士路線</span>
            <span>{{addressItem.busRoutes || ''}}</span>
            <span>地鐵路線</span>
            <span>{{addressItem.metroRoutes || ''}}</span>
          </div>
          <div class="mapBtn">
            <a :href="addressItem.googleMap">
            <div class="mapBtn-in">Google地圖</div>
            </a>
            <a :href="addressItem.baiduMap">
              <div class="mapBtn-in">百度地圖</div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

.index-contactUs{
  padding: 140px 0 0;
  max-width: 1550px; 
  margin: 0 auto;
  &-t{
    display: flex;
    justify-content: space-between;
  }
  .address{
    display: flex;
    flex-wrap: wrap;
    margin-top: 79px;
    &-in{
      width: 33.33%;
      padding: 0 50px 100px;
      h3{
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 160%;
        color: #FFA09E;
        position: relative;
        display: inline-block;
        cursor: pointer;
        padding-bottom: 10px;
      }
      span{
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: #4D4D4D;
        display: block;
      }
      .content{
        min-height: 160px;
      }
      .route{
        span{
          &:nth-of-type(1){
            margin-top: 18px;
          }
          &:nth-of-type(3){
            margin-top: 18px;
          }
        }
      }
      .showIcon{
        cursor: pointer;
      }
      .showIcon::after{
        content: '';
        width: 0px;
        height: 0px;
        border: 7px solid;
        border-color: #4D4D4D transparent transparent transparent;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        margin-top: 5px;
      }
      .mapBtn{
        width: 100%;
        margin-top: 22px;
        display: flex;
        justify-content: space-between;
        a{
          flex: 1;
          &:first-child{
            margin-right: 22px;
          }
        }
        &-in{
          width: 100%;
          background: #FFFFFF;
          box-shadow: 1px 1px 4px #FFA09E;
          border-radius: 40px;
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          font-size: 2rem;
          line-height: 160%;
          text-align: center;
          color: #FFA09E;
          display: inline-block;
          padding: 13px 0;
          cursor: pointer;
          transition: all .5s;
          &:hover{
            color: #FFFFFF;
            background: #FFA09E;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-contactUs{
    padding: 110px 0 0;
    .address{
      margin-top: 50px;
      &-in{
        padding: 0 30px 75px;
        h3{
          font-size: 19px;
        }
        span{
          font-size: 18px;
        }
        .content{
          min-height: 150px;
        }
        .route{
          span{
            &:nth-of-type(1){
              margin-top: 14px;
            }
            &:nth-of-type(3){
              margin-top: 14px;
            }
          }
        }
        .mapBtn{
          &-in{
            font-size: 26px;
            padding: 10px 0;
            &:first-child{
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .index-contactUs{
    .address{
      &-in{
        width: 50%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .index-contactUs{
    padding: 90px 0 0;
    &-t{
      flex-direction: column;
    }
    .address{
      margin-top: 24px;
      &-in{
        width: 100%;
        padding: 0 30px 45px;
        h3{
          font-size: 18px;
        }
        span{
          font-size: 16px;
        }
        .content{
          min-height: 120px;
        }
        .route{
          span{
            &:nth-of-type(1){
              margin-top: 10px;
            }
            &:nth-of-type(3){
              margin-top: 10px;
            }
          }
        }
        .mapBtn{
          &-in{
            font-weight: 400;
            font-size: 20.0245px;
            padding: 8px 0;
            &:first-child{
              margin-right: 17px;
            }
          }
        }
      }
    }
  }
}
</style>



