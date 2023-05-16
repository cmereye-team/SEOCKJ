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

let currentAddress = ref(0)

const allAddressLists = [
  // 罗湖区
  [
    {
      name: '深圳愛康健口腔醫院（羅湖）',
      address: '深圳市羅湖區火車站大廈C區1-8樓',
      time: '9:00-18:00 （節假日照常應診）',
      phone: '0755-61302632',
      busRoutes: '羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號',
      metroRoutes: '地鐵1號線“羅湖站”C出口； 地鐵9號線“人民南站” A1出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/476419e0bd27692f.png'
    },
    {
      name: '恒潔口腔門診部（羅湖）',
      address: '深圳市羅湖區桂園街道新圍社區深南東路5015號金豐城大廈B座1602、1603',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '深圳書城站：29路、85路、103短線、103路、104路、113路、204路、214路、215路、E8路、M106路、M112路、M133路、M481路、M559路、N4路、大鵬假日專線4路、高快巴士863號、高快巴士97路;都市名苑：7路、8路、14路、M152路、M360路、M383路、M482路',
      metroRoutes: '地鐵1號線“大劇院”站F出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/faf033fd50b18824.png'
    },
    {
      name: '康輝口腔門診部（羅湖）',
      address: '深圳市羅湖區建設路深圳火車站皮帶走廊A12-A15.B11-B14及夾層B8--3號鋪',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號',
      metroRoutes: '地鐵1號線“羅湖站”D出口；地鐵9號線“人民南站”A1出口；',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/b741f54f1b105876.png'
    },
    {
      name: '富康口腔門診部（羅湖）',
      address: '建設路火車站大樓二樓南環廊商鋪（火車站大酒店二樓、羅湖地鐵站D出口垂直電梯3樓）',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號',
      metroRoutes: '地鐵1號線“羅湖站”D出口；地鐵9號線“人民南站”A1出口；',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/fe00a2ba47a161b5.png'
    },
    {
      name: '顏麗口腔診所（羅湖）',
      address: '深圳市罗湖区罗湖口岸商业城1091号',
      time: '9:00-18:00 （节假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '罗湖火车站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰专线73号',
      metroRoutes: '地铁1号线“罗湖站”A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/5f6257f23815c0b8.png'
    }
  ],
  // 福田區
  [
    {
      name: '李川口腔診所（福田）',
      address: '深圳市福田區金田路水圍村金莊商業樓2-5樓',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '福民地鐵站：60路、62路、73路、202路、303路、385路、B689路、B858路、N9路、高快巴士26路',
      metroRoutes: '地鐵4號線和7號線“福民站”D出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/f75bb70e48d1a50e.png'
    },
    {
      name: '王琦口腔診所（福田）',
      address: '深圳市福田區福田街道漁農村社區裕亨路50號海悅華城C107、C108B',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '福田口岸：203路、B618路、B685路、B689路、B858路、B957路、M204路、M441路、M499路',
      metroRoutes: '地鐵4號線”福田口岸"站A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/63dbe40ee13b53e9.png'
    },
  ],
  // 南山区
  [
    {
      name: '恒雅口腔門診部（南山）',
      address: '深圳市南山區南海大道與工業八路交匯處',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '蛇口沃爾瑪：70路、79路、80路、113路、122路、204路、328路、332路、B605路、M106路、M133路、M241路、M400路、M409路、M409區間車、M448路、M484路、M527線、N1路、N4路、NE30線、高快巴士123路、高快巴士874號、前海行8路',
      metroRoutes: '地鐵9號線"南油西" 站 B出口；地鐵12號線“四海站”J出口平安銀行拐角處。',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/4783ff2e8f17beff.png'
    },
    {
      name: '恒美口腔門診部（南山）',
      address: '深圳市南山區商業文化中心區海岸城西座501',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '海岸城：19路、229路、B605路、B964路、B964路、M201路、M209路、M222路、M299路、M429路、M430路、M474路、M475路、M519路、M519線大站快車、M539路、N24路、N8路、高峰專線12路、歐洲城假日專線',
      metroRoutes: '地鐵2號線和11號線"後海" 站 D1出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/d6c09b604319be78.png'
    },
    {
      name: '沈虹口腔診所（南山）',
      address: '深圳市南山區南海大道海典居裙樓1樓&2樓（海雅百貨對面）',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '海雅百貨：19路、37路、70路、80路、113路、226路、245區間車、328路、M106路、M133路、M242路、M398路、M398區間車、M448路、M527線、M539路、N1路、N8路、NE30線、高快巴士123路、高快巴士874號',
      metroRoutes: '地鐵9號線"南山書城"站 D出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/47efa458657fb4a5.png'
    },
  ],
  // 寶安區
  [
    {
      name: '炫雅口腔門診部（寶安）',
      address: '寶安區新安街道建安一路80號香檳廣場一棟四樓402號',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '建行寶安支行： 395路、603路、610路、704路、m235路',
      metroRoutes: '地鐵5號線“靈芝“站A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/009aa648694461bb.png'
    },
  ],
  // 龍華區
  [
    {
      name: '雅健口腔門診部（龍華）',
      address: '深圳市龍華區民治街道大嶺社區紅山6979二期8棟25座202室',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '高級中學北校區： 43路、74路、b917路、b917路、m130路、m340路、m360路、m369路、m405路、m462路、m504路、m554路、m579路、高峰專線119路、高峰專線150路',
      metroRoutes: '地鐵4號線“紅山“站D出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/547f7fa32b8a7154.png'
    },
    {
      name: '恒樂口腔門診部（龍華）',
      address: '深圳市龍華區梅龍路深物業新華城商業F1-03號(工業西路與龍華大道交匯處—壹方城對面)',
      time: '9:00-18:00 （節假日照常上班）',
      phone: '0755-61302632',
      busRoutes: '風和日麗北 : 312路、621路、M152路、M173路、M180路、M222路、M244路、M262路、M269路外環、M365路、M381路順時針、M401路、M577路',
      metroRoutes: '地鐵4號線“龍華站”A出口',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/2d4f2be9d307d63a.png'
    },
  ]
]

const handleAddress = (_idx: number) => {
  currentAddress.value = _idx
}

const handleLeftBtn = () => {
  if(currentAddress.value > 0){
    currentAddress.value--
  }else{
    currentAddress.value = allAddressLists[appState.areaTabCurNum].length-1
  }
}

const handleRightBtn = () => {
  if(currentAddress.value >= 0 && currentAddress.value < allAddressLists[appState.areaTabCurNum].length-1){
    currentAddress.value++
  }else{
    currentAddress.value = 0
  }
}

</script>


<template>
  <div class="index-contactUs pageCon">
      <!-- <div class="index_title">聯絡我們</div> -->
      <div class="index-contactUs-t">
        <div class="index_title">聯絡我們</div>
        <div>
          <AreaTab />
        </div>
      </div>
      <div class="index-contactUs-in" v-if="allAddressLists[appState.areaTabCurNum].length">
        <div class="index-contactUs-in-l">
          <h3>{{allAddressLists[appState.areaTabCurNum][currentAddress].name || ''}}
            <div class="addressLists" v-if="allAddressLists[appState.areaTabCurNum].length>1">
              <div class="addressLists-in" v-for="(item,index) in allAddressLists[appState.areaTabCurNum]" :key="index" @click="handleAddress(index)">
                <div>{{item.name}}</div>
              </div>
            </div>
          </h3>
          <span>醫院地址：{{allAddressLists[appState.areaTabCurNum][currentAddress].address || ''}}</span>
          <span>營業時間：{{allAddressLists[appState.areaTabCurNum][currentAddress].time || ''}}</span>
          <span>諮詢電話：{{allAddressLists[appState.areaTabCurNum][currentAddress].phone || ''}}</span>
          <div class="contactUsAddressBox">
            <div class="in-l" @click="handleLeftBtn">
              <img src="@/assets/images/icon_5.png" alt="">
            </div>
            <div class="in-c">
              <!-- <iframe :src="allAddressLists[appState.areaTabCurNum][currentAddress].addressUrl || ''" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
              <img :src="allAddressLists[appState.areaTabCurNum][currentAddress].addressUrl" alt="">
            </div>
            <div class="in-r" @click="handleRightBtn">
              <img src="@/assets/images/icon_5.png" alt="">
            </div>
          </div>
          <span class="showIcon" @click="mapConShow = !mapConShow">交通路線:</span>
          <span v-show="mapConShow">巴士路線</span>
          <span v-show="mapConShow">{{allAddressLists[appState.areaTabCurNum][currentAddress].busRoutes || ''}}</span>
          <span v-show="mapConShow">地鐵路線</span>
          <span v-show="mapConShow">{{allAddressLists[appState.areaTabCurNum][currentAddress].metroRoutes || ''}}</span>
          <div class="mapBtn" v-show="mapConShow">
            <div class="mapBtn-in">Google地圖</div>
            <div class="mapBtn-in">百度地圖</div>
          </div>
        </div>
        <div class="index-contactUs-in-r">
          <div class="in-l" @click="handleLeftBtn">
            <img src="@/assets/images/icon_5.png" alt="">
          </div>
          <div class="in-c">
            <!-- <iframe :src="allAddressLists[appState.areaTabCurNum][currentAddress].addressUrl || ''" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
            <img :src="allAddressLists[appState.areaTabCurNum][currentAddress].addressUrl" alt="">
          </div>
          <div class="in-r" @click="handleRightBtn">
            <img src="@/assets/images/icon_5.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

.index-contactUs{
  padding: 140px 0 0;
  &-t{
    display: flex;
    justify-content: space-between;
  }
  &-in{
    display: flex;
    margin-top: 46px;
    &-l{
      width: 40%;
      padding-right: 80px;
      box-sizing: border-box;
      h3{
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 160%;
        color: #FFA09E;
        position: relative;
        display: inline-block;
        cursor: pointer;
        padding-bottom: 10px;
        &:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #FFA09E transparent transparent transparent;
          position: absolute;
          top: 10px;
          right: -30px;
        }
        .addressLists{
          position: absolute;
          width: 300px;
          top: 40px;
          left: 0;
          font-size: 1.25rem;
          line-height: 160%;
          background: #fff;
          padding: 5px 20px;
          box-sizing: border-box;
          background: #FFFFFF;
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
          transition: all .5s;
          display: none;
          &-in{
            padding: 5px 0;
            cursor: pointer;
            color: #4D4D4D;
            &:hover{
              color: #FFA09E;
            }
          }
        }
        &:hover .addressLists{
          display: block;
        }
      }
      .contactUsAddressBox{
        display: none;
      }
      span{
        font-weight: 500;
        // font-size: 20px;
        font-size: 1.25rem;
        line-height: 160%;
        color: #4D4D4D;
        display: block;
        &:nth-of-type(4){
          margin-top: 50px;
        }
        &:nth-of-type(5){
          margin-top: 25px;
        }
        &:nth-of-type(7){
          margin-top: 25px;
        }
        &:last-child{
          margin-top: 25px;
        }
      }
      .mapBtn{
        width: 100%;
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        &-in{
          width: 240px;
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
        }
      }
    }
    &-r{
      flex: 1;
      height: 704px;
      display: flex;
      &>div{
        height: 100%;
      }
      .in-l{
        width: 80px;
        background: #FFF1F0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .in-c{
        flex: 1;
        img{
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #FFF1F0 50%, #FFCECB 50%);
        }
      }
      .in-r{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        background: #FFCECB;
        cursor: pointer;
        img{
          transform: rotate(180deg);
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-contactUs{
    padding: 110px 0 0;
    &-in{
      &-l{
        padding-right: 30px;
        span{
          font-size: 1rem;
          &:nth-of-type(4){
            margin-top: 4vw;
          }
          &:nth-of-type(5){
            margin-top: 2vw;
          }
          &:last-child{
            margin-top: 2vw;
          }
        }
        .mapBtn{
          // padding: 0 30px;
          margin-top: 45px;
          &-in{
            width: 45%;
            max-width: 220px;
            font-size: 1.3rem;
          }
        }
      }
      &-r{
        height: 50vw;
        .in-l,.in-r{
          width: 50px;
        }
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
    &-in{
      flex-direction: column;
      margin-top: 35px;
      &-l{
        padding: 0;
        width: 100%;
        h3{
          font-size: 1.25rem;
          padding: 0 30px;
          box-sizing: border-box;
          &:after {
            content: '';
            width: 0px;
            height: 0px;
            border: 10px solid;
            border-color: #FFCECB transparent transparent transparent;
            position: absolute;
            right: -20px;
            top: 10px;
          }
        }
        .contactUsAddressBox{
          display: flex;
          height: calc(100vw - 60px);
          margin: 20px 0;
          &>div{
            height: 100%;
          }
          .in-l{
            width: 30px;
            background: #FFF1F0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .in-c{
            flex: 1;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .in-r{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            background: #FFCECB;
            img{
              transform: rotate(180deg);
            }
          }
        }
        span{
          padding: 0 30px;
          box-sizing: border-box;
          font-size: 1rem;
          &:nth-of-type(4){
            margin-top: 0px;
          }
          &.showIcon{
            position: relative;
            cursor: pointer;
          }
          &.showIcon::after{
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
        }
        .mapBtn{
          padding: 0 30px;
          margin-top: 30px;
          &-in{
            width: 150px;
            font-size: 1.25rem;
          }
        }
      }
      &-r{
        display: none;
      }
    }
  }
}
</style>



