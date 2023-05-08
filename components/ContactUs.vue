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
      addressUrl: 'https://surl.amap.com/B2ACE71ab8D'
    },
    {
      name: '恒洁口腔门诊部',
      address: '深圳市罗湖区书城路都市名苑B-C首层（万象城西门对面）',
      time: '9:30-21:00',
      phone: '4000-489-168',
      busRoutes: '深圳书城站、都市名园站：103路、104路、113路、204路、214路、215路、29路、85路、E8路、M106路、M112路、M481路、M559路、103大站快线、M482路',
      metroRoutes: '地铁1号线“大剧院”站F出口',
      addressUrl: 'https://surl.amap.com/B3mfiDR1oq'
    },
    {
      name: '康辉口腔门诊部',
      address: '深圳市火车站皮带走廊一层A11-A15 B11-B14',
      time: '9:00-21:00',
      phone: '4000-489-168',
      busRoutes: '罗湖火车站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、e13路、k545路空调、m112路、m152路、m401路、m508路、n14路、n16路、n18路、n2路、n4路、n7路、高峰专线73号',
      metroRoutes: '地铁1号线“罗湖站”C出口',
      addressUrl: 'https://surl.amap.com/Bc1HmnWea6'
    },
    {
      name: '富康口腔门诊部',
      address: '深圳市火车站南端二楼走廊(火车站大酒店左侧)',
      time: '9:00-21:00 （节假日照常上班）',
      phone: '4000-489-168',
      busRoutes: '罗湖火车站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、e13路、k545路空调、m112路、m152路、m401路、m508路、n14路、n16路、n18路、n2路、n4路、n7路、高峰专线73号',
      metroRoutes: '地铁站：地铁1号线"罗湖站"',
      addressUrl: 'https://surl.amap.com/BcXWblr09o'
    }
  ],
  // 福田區
  [
    {
      name: '李川口腔门诊部',
      address: '深圳市福田区金田路水围村金庄商业楼2-5楼',
      time: '9:00-21:00 （节假日照常上班）',
      phone: '4000489168',
      busRoutes: '福田妇幼保健院：73路、202路、303路、385路、b689路、m172路',
      metroRoutes: '地铁：地铁4号线"福民站"D出口',
      addressUrl: 'https://surl.amap.com/AUyRz1rfjE'
    },
    {
      name: '王琦口腔门诊部',
      address: '深圳福田区渔农村海悦华城C座商铺107号',
      time: '9:00-21:00 （节假日照常上班）',
      phone: '4000489168',
      busRoutes: '福田口岸总站：203路； 渔农村：b858路； 国花路口：26路、52路、62路、b858路、b957路、高快巴士26路',
      metroRoutes: '地铁：地铁4号线"福田口岸"站A出口',
      addressUrl: 'https://surl.amap.com/AOmWezmcZU'
    },
  ],
  // 南山区
  [
    {
      name: '恒雅口腔门诊部',
      address: '深圳市南山区南海大道与工业八路交汇处（蛇口平安银行旁）',
      time: '9:00-20:00',
      phone: '4000-489-168',
      busRoutes: '蛇口沃尔玛：113路、204路、238路、70路、19路、79路、80路、B605路、M106路、M133路、M241路、M400路、M409路、M448路、M484路、M527路、122路、332路、K113路、122路、329路、B702路',
      metroRoutes: '附近暂无地铁开通',
      addressUrl: 'https://surl.amap.com/ATrQar1acMs'
    },
    {
      name: '恒美口腔门诊部',
      address: '深圳市南山区商业文化区海岸城西座501（招商银行南山支行正中间大门进）',
      time: '9:00-18:00',
      phone: '4000-489-168',
      busRoutes: '海岸城：19路、229路、B605路、B964路、M209路、M222路、M299路、M429路、M430路、M474路、M519路、M539路',
      metroRoutes: '地铁2号线后海站、地铁11号线后海站',
      addressUrl: 'https://surl.amap.com/AEVzjh1mcyh'
    },
    {
      name: '沈虹口腔海典旗舰店',
      address: '深圳市南山区南海大道海典居裙楼二楼(海雅百货对面)',
      time: '9:00-20:00(周六日：9:00-18:00)',
      phone: '9:00-20:00(周六日：9:00-18:00)',
      busRoutes: '海雅百货：113路、19路、226路、328路、37路、70路、80路、M133路、M398路、M448路、M527路、M539路',
      metroRoutes: '11号线南山站（需转公交）',
      addressUrl: 'https://surl.amap.com/AyJQZhefr5'
    },
  ],
  // 寶安區
  [
    {
      name: '炫雅口腔门诊部',
      address: '深圳市宝安区新安街道一路80号香缤广场一栋四楼',
      time: '9:00-18:00 （节假日照常上班）',
      phone: '4000489168',
      busRoutes: '新安湖站：395路、613路； 新安影剧院站：605路、718路、m206路、m245路、m246路、m377路、m380路、m385路、m469路、m550路',
      metroRoutes: '地铁：5号线灵芝站',
      addressUrl: 'https://surl.amap.com/AjKijtYbdy'
    },
  ],
  // 龍華區
  [
    {
      name: '恒乐口腔门诊部',
      address: '深圳市龙华区梅龙路813号（深物业·新华城）',
      time: '9:00-18:00 （节假日照常上班）',
      phone: '4000489168',
      busRoutes: '风和日丽北：312路;621路;M152路;M173路;M180路;M222路;M244路;M262路;M269路外环;M365路;M381路顺时针;M401路;M577路； 风和日丽：E37路;M202路;M222路;M381路逆时针;M393路;M401路;M477路;M554路;高峰专线14路； 龙华第二实验学校：B915路;M202路;M477路;M554路',
      metroRoutes: '四号线龙华站',
      addressUrl: 'https://surl.amap.com/AFYtLp91KQ'
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
              <iframe :src="allAddressLists[appState.areaTabCurNum][currentAddress].addressUrl || ''" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <!-- <img src="https://static.cmereye.com/imgs/2023/04/3e6f553114c01879.jpg" alt=""> -->
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
            <iframe :src="allAddressLists[appState.areaTabCurNum][currentAddress].addressUrl || ''" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <!-- <img src="https://static.cmereye.com/imgs/2023/04/3e6f553114c01879.jpg" alt=""> -->
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



