<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
const mapConShow = ref(true)
const route = useRoute()

onMounted(()=>{
  getWindowResize()
  window.addEventListener('resize',getWindowResize)
})

const getWindowResize = () => {
  if(window.innerWidth > 768)
    mapConShow.value = true
  else
    mapConShow.value = false
}

let currentAddress = ref('0')

const allAddressLists = [
  // 罗湖区
  [
    {
      id: '101',
      name: 'contactUs.addressLists.address_101.name',
      address: 'contactUs.addressLists.address_101.address',
      time: 'contactUs.addressLists.address_101.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_101.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_101.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/09/11e84702229e6caf.jpg',
      googleMap: 'https://goo.gl/maps/yuWB8353yF3u4EJS6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/b3/j3Yu'
    },
    {
      id: '102',
      name: 'contactUs.addressLists.address_102.name',
      address: 'contactUs.addressLists.address_102.address',
      time: 'contactUs.addressLists.address_102.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_102.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_102.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/faf033fd50b18824.png',
      googleMap: 'https://goo.gl/maps/HQsN5jNMTeZNbxuf7?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/a5/GtH'
    },
    {
      id: '103',
      name: 'contactUs.addressLists.address_103.name',
      address: 'contactUs.addressLists.address_103.address',
      time: 'contactUs.addressLists.address_103.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_103.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_103.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/b741f54f1b105876.png',
      googleMap: 'https://goo.gl/maps/JMK7Huhaf9k88nbf8?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/24/Rxk'
    },
    {
      id: '104',
      name: 'contactUs.addressLists.address_104.name',
      address: 'contactUs.addressLists.address_104.address',
      time: 'contactUs.addressLists.address_104.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_104.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_104.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/fe00a2ba47a161b5.png',
      googleMap: 'https://goo.gl/maps/nSmd9ZL66E4Yizp67?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/a9/Xgch'
    },
    {
      id: '105',
      name: 'contactUs.addressLists.address_105.name',
      address: 'contactUs.addressLists.address_105.address',
      time: 'contactUs.addressLists.address_105.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_105.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_105.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/5f6257f23815c0b8.png',
      googleMap: 'https://goo.gl/maps/HefFWPuSqmdHbyBo9?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/d3/Awch'
    }
  ],
  // 福田區
  [
    {
      id: '201',
      name: 'contactUs.addressLists.address_201.name',
      address: 'contactUs.addressLists.address_201.address',
      time: 'contactUs.addressLists.address_201.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_201.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_201.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/f75bb70e48d1a50e.png',
      googleMap: 'https://goo.gl/maps/evH9Z41S1o4fH3HR6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/ea/Yhh'
    },
    {
      id: '202',
      name: 'contactUs.addressLists.address_202.name',
      address: 'contactUs.addressLists.address_202.address',
      time: 'contactUs.addressLists.address_202.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_202.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_202.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/63dbe40ee13b53e9.png',
      googleMap: 'https://goo.gl/maps/mQgJXrTxvaaLB9Y1A?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/1f/kY0'
    },
  ],
  // 南山区
  [
    {
      id: '301',
      name: 'contactUs.addressLists.address_301.name',
      address: 'contactUs.addressLists.address_301.address',
      time: 'contactUs.addressLists.address_301.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_301.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_301.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/4783ff2e8f17beff.png',
      googleMap: 'https://goo.gl/maps/nK2iuEusGFcbqE216?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/2e/Pmif'
    },
    {
      id: '302',
      name: 'contactUs.addressLists.address_302.name',
      address: 'contactUs.addressLists.address_302.address',
      time: 'contactUs.addressLists.address_302.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_302.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_302.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/d6c09b604319be78.png',
      googleMap: 'https://goo.gl/maps/WkeuvYNKWeLNhSzE7?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/36/4FH'
    },
    {
      id: '303',
      name: 'contactUs.addressLists.address_303.name',
      address: 'contactUs.addressLists.address_303.address',
      time: 'contactUs.addressLists.address_303.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_303.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_303.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/47efa458657fb4a5.png',
      googleMap: 'https://goo.gl/maps/ud217ArM8ZGDJ8DJ8?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/b8/Mzj'
    },
  ],
  // 寶安區
  [
    {
      id: '401',
      name: 'contactUs.addressLists.address_401.name',
      address: 'contactUs.addressLists.address_401.address',
      time: 'contactUs.addressLists.address_401.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_401.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_401.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/009aa648694461bb.png',
      googleMap: 'https://goo.gl/maps/ntfTf49VNaY9D9VL6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/89/2LD'
    },
  ],
  // 龍華區
  [
    {
      id: '501',
      name: 'contactUs.addressLists.address_501.name',
      address: 'contactUs.addressLists.address_501.address',
      time: 'contactUs.addressLists.address_501.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_501.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_501.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/547f7fa32b8a7154.png',
      googleMap: 'https://goo.gl/maps/jtcrLmft7h8s3xfX6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/3a/nbch'
    },
    {
      id: '502',
      name: 'contactUs.addressLists.address_502.name',
      address: 'contactUs.addressLists.address_502.address',
      time: 'contactUs.addressLists.address_502.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_502.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_502.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/2d4f2be9d307d63a.png',
      googleMap: 'https://goo.gl/maps/VKT1orRbiS8mAiN39?coh=178572&entry=tt門診門',
      baiduMap: 'https://j.map.baidu.com/c5/AZ4c'
    },
  ]
]

let contactUsSwiperRef ={
  slideTo: (a,b)=>{}
}

const setContactUsSwiperRef = (swiper:any) => {
  contactUsSwiperRef = swiper;
};

const onSlideContactUsSwiperChange = (swiper:any) => {
  currentAddress.value = swiper.realIndex
}

const handleAddress = (_idx: string) => {
  // console.log(_idx)
  if(currentAddress.value === _idx){
    currentAddress.value = '0'
    return
  }
  currentAddress.value = _idx
}

</script>


<template>
  <div class="index-contactUs">
      <div class="index-contactUs-t pageCon">
        <div class="index_title">{{$t('contactUs.title')}}</div>
        <div>
          <AreaTab />
        </div>
      </div>
      <div class="address">
        <div class="address-in" :class="{'firstBox': addressItem.id === '101' && route.path === '/contactUs'}" v-for="(addressItem,addressIndex) in allAddressLists[appState.areaTabCurNum]" :key="addressIndex">
          <div class="address-img" v-if="addressItem.id === '101' && route.path === '/contactUs'">
            <img :src="addressItem.addressUrl" alt="">
          </div>
          <div class="address-box">
            <h3>{{$t(addressItem.name)}}</h3>
            <div class="content">
              <span>{{$t('contactUs.hospital_address')}}：{{$t(addressItem.address)}}</span>
              <span>{{$t('contactUs.hours_of_Operation')}}：{{$t(addressItem.time)}}</span>
              <span>{{$t('contactUs.check_the_phone')}}：{{addressItem.phone}}</span>
            </div>
            <span class="showIcon" @click="handleAddress(addressItem.id)">{{$t('contactUs.traffic_route')}}:</span>
            <div class="route" v-show="currentAddress === addressItem.id ">
              <span>{{$t('contactUs.bus_route')}}</span>
              <span>{{$t(addressItem.busRoutes)}}</span>
              <span>{{$t('contactUs.metro_lines')}}</span>
              <span>{{$t(addressItem.metroRoutes)}}</span>
            </div>
            <div class="mapBtn">
              <!-- <a :href="addressItem.googleMap" target="_blank">
              <div class="mapBtn-in">{{$t('contactUs.google_map')}}</div>
              </a> -->
              <a :href="addressItem.baiduMap" target="_blank">
                <div class="mapBtn-in">{{$t('contactUs.baidu_map')}}</div>
              </a>
            </div>
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
      &.firstBox{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .address-img{
          max-width: 577px;
          width: 100%;
          margin-right: 74px;
        }
      }
      width: 33.33%;
      padding: 0 50px 100px;
      h3{
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 160%;
        color: var(--indexColor1);
        position: relative;
        display: inline-block;
        cursor: pointer;
        padding-bottom: 10px;
      }
      span{
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
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
        border-color: #666666 transparent transparent transparent;
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
          width: 50%;
          &:first-child{
            margin-right: 22px;
          }
        }
        &-in{
          width: 100%;
          background: #FFFFFF;
          box-shadow: 1px 1px 4px var(--indexColor1);
          border-radius: 40px;
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          font-size: 2rem;
          line-height: 160%;
          text-align: center;
          color: var(--indexColor1);
          display: inline-block;
          padding: 13px 0;
          cursor: pointer;
          transition: all .5s;
          &:hover{
            color: #FFFFFF;
            background: var(--indexColor1);
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



