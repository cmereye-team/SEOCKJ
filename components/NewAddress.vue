<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { phoneNum } from '~/assets/js/common'
const appState = useAppState()
const mapConShow = ref(true)
const route = useRoute()


let currentAddress = ref(0)

const allAddressLists = [
  // 罗湖区
  [
    {
      id: '101',
      name: 'contactUs.addressLists.address_101.name',
      tabname: 'contactUs.addressLists.address_101.tabname',
      address: 'contactUs.addressLists.address_101.address',
      time: 'contactUs.addressLists.address_101.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_101.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_101.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/09/11e84702229e6caf.jpg',
      googleMap: 'https://goo.gl/maps/yuWB8353yF3u4EJS6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/b3/j3Yu',
      imgLists: [
        'https://static.cmereye.com/imgs/2024/02/2ba7058400f2ed03.png',
        'https://static.cmereye.com/imgs/2024/02/2f20ab9660e0bfa7.webp',
        'https://static.cmereye.com/imgs/2024/02/3cc92ffa0caa8ed1.webp'
      ]
    },
    {
      id: '102',
      name: 'contactUs.addressLists.address_102.name',
      tabname: 'contactUs.addressLists.address_102.tabname',
      address: 'contactUs.addressLists.address_102.address',
      time: 'contactUs.addressLists.address_102.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_102.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_102.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/faf033fd50b18824.png',
      googleMap: 'https://goo.gl/maps/HQsN5jNMTeZNbxuf7?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/36/OZ5',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/f7ee7de8e9f9df40.png']
    },
    {
      id: '103',
      name: 'contactUs.addressLists.address_103.name',
      tabname: 'contactUs.addressLists.address_103.tabname',
      address: 'contactUs.addressLists.address_103.address',
      time: 'contactUs.addressLists.address_103.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_103.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_103.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/b741f54f1b105876.png',
      googleMap: 'https://goo.gl/maps/JMK7Huhaf9k88nbf8?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/24/Rxk',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/debf6ef681488273.png']
    },
    {
      id: '104',
      name: 'contactUs.addressLists.address_104.name',
      tabname: 'contactUs.addressLists.address_104.tabname',
      address: 'contactUs.addressLists.address_104.address',
      time: 'contactUs.addressLists.address_104.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_104.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_104.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/fe00a2ba47a161b5.png',
      googleMap: 'https://goo.gl/maps/nSmd9ZL66E4Yizp67?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/a9/Xgch',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/27b36171a4710159.png']
    },
    {
      id: '105',
      name: 'contactUs.addressLists.address_105.name',
      tabname: 'contactUs.addressLists.address_105.tabname',
      address: 'contactUs.addressLists.address_105.address',
      time: 'contactUs.addressLists.address_105.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_105.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_105.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/5f6257f23815c0b8.png',
      googleMap: 'https://goo.gl/maps/HefFWPuSqmdHbyBo9?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/d3/Awch',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/fdbea97cd80bb259.png']
    }
  ],
  // 福田區
  [
    {
      id: '203',
      name: 'contactUs.addressLists.address_203.name',
      tabname: 'contactUs.addressLists.address_203.tabname',
      address: 'contactUs.addressLists.address_203.address',
      time: 'contactUs.addressLists.address_203.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_203.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_203.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/63dbe40ee13b53e9.png',
      googleMap: 'https://goo.gl/maps/mQgJXrTxvaaLB9Y1A?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/a8/8R4c',
      imgLists: [
        'https://static.cmereye.com/imgs/2024/03/57dee34750b0c30f.webp',
        'https://static.cmereye.com/imgs/2024/03/beb31d58855ac0b5.jpg',
        'https://static.cmereye.com/imgs/2024/03/f9b66026e251ac3e.jpg',
        'https://static.cmereye.com/imgs/2024/02/c496ca0c89fcae13.png'
      ]
    },
    {
      id: '201',
      name: 'contactUs.addressLists.address_201.name',
      tabname: 'contactUs.addressLists.address_201.tabname',
      address: 'contactUs.addressLists.address_201.address',
      time: 'contactUs.addressLists.address_201.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_201.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_201.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/f75bb70e48d1a50e.png',
      googleMap: 'https://goo.gl/maps/evH9Z41S1o4fH3HR6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/ea/Yhh',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/f1c2404b3b3a6369.png']
    },
    {
      id: '202',
      name: 'contactUs.addressLists.address_202.name',
      tabname: 'contactUs.addressLists.address_202.tabname',
      address: 'contactUs.addressLists.address_202.address',
      time: 'contactUs.addressLists.address_202.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_202.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_202.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/63dbe40ee13b53e9.png',
      googleMap: 'https://goo.gl/maps/mQgJXrTxvaaLB9Y1A?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/1f/kY0',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/ace7237946ce2dab.png']
    },
    
  ],
  // 南山区
  [
    {
      id: '301',
      name: 'contactUs.addressLists.address_301.name',
      tabname: 'contactUs.addressLists.address_301.tabname',
      address: 'contactUs.addressLists.address_301.address',
      time: 'contactUs.addressLists.address_301.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_301.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_301.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/4783ff2e8f17beff.png',
      googleMap: 'https://goo.gl/maps/nK2iuEusGFcbqE216?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/2e/Pmif',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/84c4f6a52db6b7c3.png']
    },
    {
      id: '302',
      name: 'contactUs.addressLists.address_302.name',
      tabname: 'contactUs.addressLists.address_302.tabname',
      address: 'contactUs.addressLists.address_302.address',
      time: 'contactUs.addressLists.address_302.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_302.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_302.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/d6c09b604319be78.png',
      googleMap: 'https://goo.gl/maps/WkeuvYNKWeLNhSzE7?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/36/4FH',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/72bf02bf0207c3a8.png']
    },
    {
      id: '303',
      name: 'contactUs.addressLists.address_303.name',
      tabname: 'contactUs.addressLists.address_303.tabname',
      address: 'contactUs.addressLists.address_303.address',
      time: 'contactUs.addressLists.address_303.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_303.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_303.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/47efa458657fb4a5.png',
      googleMap: 'https://goo.gl/maps/ud217ArM8ZGDJ8DJ8?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/b8/Mzj',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/d09f84ed6cb4f741.png']
    },
  ],
  // 寶安區
  [
    {
      id: '401',
      name: 'contactUs.addressLists.address_401.name',
      tabname: 'contactUs.addressLists.address_401.tabname',
      address: 'contactUs.addressLists.address_401.address',
      time: 'contactUs.addressLists.address_401.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_401.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_401.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/009aa648694461bb.png',
      googleMap: 'https://goo.gl/maps/ntfTf49VNaY9D9VL6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/89/2LD',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/dfdf5b2634ade064.png']
    },
  ],
  // 龍華區
  [
    {
      id: '501',
      name: 'contactUs.addressLists.address_501.name',
      tabname: 'contactUs.addressLists.address_501.tabname',
      address: 'contactUs.addressLists.address_501.address',
      time: 'contactUs.addressLists.address_501.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_501.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_501.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/547f7fa32b8a7154.png',
      googleMap: 'https://goo.gl/maps/jtcrLmft7h8s3xfX6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/3a/nbch',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/36aaa47a0c940e94.png']
    },
    {
      id: '502',
      name: 'contactUs.addressLists.address_502.name',
      tabname: 'contactUs.addressLists.address_502.tabname',
      address: 'contactUs.addressLists.address_502.address',
      time: 'contactUs.addressLists.address_502.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_502.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_502.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/2d4f2be9d307d63a.png',
      googleMap: 'https://goo.gl/maps/VKT1orRbiS8mAiN39?coh=178572&entry=tt門診門',
      baiduMap: 'https://j.map.baidu.com/c5/AZ4c',
      imgLists: ['https://static.cmereye.com/imgs/2024/02/9aee3ddfaa56d78f.png']
    },
  ]
]

let contactUsSwiperRef ={
  // slideTo: (a,b)=>{}
}

const setContactUsSwiperRef = (swiper:any) => {
  // contactUsSwiperRef = swiper;
};

const onSlideContactUsSwiperChange = (swiper:any) => {
  // currentAddress.value = swiper.realIndex
}

const handleAddress = (_idx:any) => {
  currentAddress.value = _idx
  // changedetail()
}

const toAddressLink = (url) => {
  location.href = url
}

const handleAddresslx = () => {

}
// let addressDatail():any = ref({
//   id: '101',
//   name: 'contactUs.addressLists.address_101.name',
//   tabname: 'contactUs.addressLists.address_101.tabname',
//   address: 'contactUs.addressLists.address_101.address',
//   time: 'contactUs.addressLists.address_101.time',
//   phone: phoneNum,
//   busRoutes: 'contactUs.addressLists.address_101.busRoutes',
//   metroRoutes: 'contactUs.addressLists.address_101.metroRoutes',
//   addressUrl: 'https://static.cmereye.com/imgs/2023/09/11e84702229e6caf.jpg',
//   googleMap: 'https://goo.gl/maps/yuWB8353yF3u4EJS6?coh=178572&entry=tt',
//   baiduMap: 'https://j.map.baidu.com/b3/j3Yu',
//   imgLists: [
//     'https://static.cmereye.com/imgs/2024/02/2ba7058400f2ed03.png',
//     'https://static.cmereye.com/imgs/2024/02/2f20ab9660e0bfa7.webp',
//     'https://static.cmereye.com/imgs/2024/02/3cc92ffa0caa8ed1.webp'
//   ]
// })

const pageLoading = ref(false)
const changedetail = () =>{
  pageLoading.value = true
  isShowlxBox.value = false
  imgcur.value = 0
  // let _obj = allAddressLists[appState.areaTabCurNum].find(item=>item.id === currentAddress.value)
  // if(_obj){
    // getDetail().value = _obj
    // imgcur.value = (_obj.imgLists.length ? _obj.imgLists[0] : '')
  // }else{
    // currentAddress.value = allAddressLists[appState.areaTabCurNum][0].id
    // getDetail().value = allAddressLists[appState.areaTabCurNum][0]
  // }
  pageLoading.value = false
}

const getDetail:any = () =>{
  return allAddressLists[appState.areaTabCurNum][currentAddress.value]
}

let isShowlxBox = ref(false)

const changeTabCur = () =>{
  // currentAddress.value = allAddressLists[appState.areaTabCurNum][0].id
  currentAddress.value = 0
  isShowlxBox.value = false
  // changedetail()
}

let imgcur:any = ref(0)

onMounted(()=>{
  // changedetail()
  // getWindowResize()
  // window.addEventListener('resize',getWindowResize)
})
watch(
  appState,
  (n,o)=>{
    // console.log(n.areaTabCurNum)
    currentAddress.value = 0
  }
)

</script>


<template>
  <div class="index-contactUs pageCon">
      <div class="index-contactUs-t">
        <div class="index_title">{{$t('contactUs.title')}}</div>
      </div>
      <div class="index-contactUs-tab">
        <AreaTab @changeTabCur="changeTabCur" />
      </div>
      <div class="index-contactUs-clinicTab">
        <div class="index-contactUs-clinicTab-in" :class="[`index-contactUs-clinicTab-in-${clinicItem.id}`,{active: currentAddress === clinicIndex}]" v-for="(clinicItem,clinicIndex) in allAddressLists[appState.areaTabCurNum]" :key="clinicItem.id" @click="handleAddress(clinicIndex)">
          {{$t(clinicItem.tabname)}}
        </div>
      </div>
      <div class="address" v-loading="pageLoading">
        <!-- {{getDetail}} -->
        <div class="address-l">
          <img :src="getDetail().imgLists[imgcur]" :alt="$t(getDetail().name)" />
        </div>
        <div class="address-r">
          <div class="address-r-img">
            <div :class="{cur: imgcur === imgIndex}" v-for="(imgItem,imgIndex) in getDetail().imgLists" :key="imgIndex" @click="imgcur = imgIndex">
              <img :src="imgItem" :alt="$t(getDetail().name)">
            </div>
          </div>
          <div class="address-r-img mbimg">
            <Swiper class="address-r-img-swiper">
              <Swiper-slide class="address-r-img-swiper-slide" v-for="(imgItem,imgIndex) in getDetail().imgLists" :key="imgIndex">
                <img :src="imgItem" :alt="$t(getDetail().name)">
              </Swiper-slide >
            </Swiper>
          </div>
          <div class="address-r-name">
            <span class="pcname">{{$t(getDetail().name)}}</span>
            <span class="mbname">{{$t(appState.areaTabs[appState.areaTabCurNum])}} {{$t(getDetail().tabname)}}</span>
          </div>
          <div class="address-r-content">
            <div>
              <span>{{$t("contactUs.hospital_address")}}</span>
              <span>
                {{$t(getDetail().address)}}
              </span>
            </div>
            <div>
              <span>{{$t("contactUs.hours_of_Operation")}}</span>
              <span>{{$t(getDetail().time)}}</span>
            </div>
            <div>
              <span>{{$t("contactUs.check_the_phone")}}</span>
              <span>{{getDetail().phone}}</span>
            </div>
          </div>
          <div class="address-r-btn">
            <div class="address-r-btn-lx">
              <span :class="{cur: isShowlxBox}" @click="isShowlxBox = !isShowlxBox">{{$t("contactUs.traffic_route")}}</span>
              <div class="lx-box" :class="{cur: isShowlxBox}">
                <div class="lx-box-l">
                  <span>{{$t("contactUs.bus_route")}}</span>
                  <span>{{$t(getDetail().busRoutes)}}</span>
                </div>
                <div class="lx-box-r">
                  <span>{{$t("contactUs.metro_lines")}}</span>
                  <span>{{$t(getDetail().metroRoutes)}}</span>
                </div>
              </div>
            </div>
            <div class="address-r-btn-bd">
              <span @click="toAddressLink(getDetail().baiduMap)">{{$t("contactUs.baidu_map")}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

.index-contactUs{
  padding: 140px 0 100px;
  // max-width: 1550px; 
  margin: 0 auto;
  &-t{
    display: flex;
    justify-content: space-between;
  }
  &-tab{
    margin-top: 40px;
    :deep(.areaTab){
      div{
        flex: 1;
        text-align: center;
        font-size: 35px;
      }
    }
  }
  &-clinicTab{
    display: flex;
    margin-top: 30px;
    &-in{
      flex: 1;
      text-align: center;
      color: #00AEFF;
      transition: all .3s;
      font-size: 30px;
      cursor: pointer;
      border-top: 2px solid #00AEFF;
      border-bottom: 2px solid #00AEFF;
      border-left: 2px solid #00AEFF;
      padding: 5px 0;
      flex-wrap: wrap;
      &:first-child{
        border-radius: 5px 0 0 5px;
      }
      &:last-child{
        border-radius: 0 5px 5px 0;
        border-right: 2px solid #00AEFF;
      }
      &:hover,&.active{
        color: #fff;
        background: #00AEFF;
      }
      &-101{
        flex: 1.3;
      }
    }
  }
  .address{
    display: flex;
    margin-top: 30px;
    &-l{
      width: calc( 600 / 1460 * 100%);
      img{
        width: 100%;
        border-radius: 20px 0 0 20px;
      }
    }
    &-r{
      flex: 1;
      &-img{
        padding: 0 30px 20px 30px;
        display: flex;
        &>div{
          cursor: pointer;
          // width: calc(175 / 860 * 100%);
          max-width: 175px;
          flex: 1;
          box-sizing: border-box;
          display: flex;
          border: 1px solid #fff;
          &:not(:last-child){
            margin-right: calc(30 / 860 * 100%);
          }
          img{
            width: 100%;
          }
          &.cur{
            border: 1px solid var(--indexColor1);
          }
        }
        &.mbimg{
          display: none;
        }
      }
      &-name{
        display: inline-block;
        color: #fff;
        background: var(--indexColor1);
        padding: 5px 70px 5px 30px;
        font-size: 35px;
        clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
        span{
          &.mbname{
            display: none;
          }
        }
      }
      &-content{
        display: flex;
        padding: 20px 0 40px;
        &>div{
          flex: 1;
          padding-left: 30px;
          span{
            display: inline-block;
            font-size: 20px;
            line-height: 1.6;
            color: var(--textColor);
            padding-right: 30px;
            white-space: pre-wrap;
            width: 100%;
            &:nth-of-type(1){
              font-size: 22px;
              line-height: 1.6;
              color: var(--indexColor1);
              font-weight: 600;
            }
          }
          &:nth-of-type(1){
            flex: 1.4;
            span{
              &:nth-of-type(1){
                &::before{
                  content: '';
                  width: 17px;
                  height: 17px;
                  display: inline-block;
                  background: url(@/assets/images/icon_21.svg) no-repeat;
                  margin-right: 5px;
                }
              }
            }
          }
          &:nth-of-type(2){
            span{
              &:nth-of-type(1){
                &::before{
                  content: '';
                  width: 17px;
                  height: 17px;
                  display: inline-block;
                  background: url(@/assets/images/icon_22.svg) no-repeat;
                  background-size: 100% 100%;
                  margin-right: 5px;
                }
              }
            }
          }
          &:nth-of-type(3){
            span{
              &:nth-of-type(1){
                &::before{
                  content: '';
                  width: 17px;
                  height: 17px;
                  display: inline-block;
                  background: url(@/assets/images/icon_23.svg) no-repeat;
                  margin-right: 5px;
                }
              }
            }
          }
          &:not(:last-child){
            span{
              &:not(:first-child){
                border-right: 1px solid #FDD3E3;
              }
            }
          }
        }
      }
      &-btn{
        display: flex;
        padding: 0 30px;
        &>div{
          filter: drop-shadow(0 3px 5px var(--indexColor3));
          -webkit-filter: drop-shadow(0 3px 5px var(--indexColor3));
          max-width: calc(100% / 2);
          span{
            display: inline-block;
            padding: 5px 40px;
            border-radius: 40px;
            cursor: pointer;
            font-size: 35px;
            transition: all .3s;
            opacity: 1;
          }
        }
        &-lx{
          position: relative;
          z-index: 20;
          &>span{
            color: var(--indexColor1);
            background: #fff;
            margin-right: 50px;
            &::after{
              content: '';
              display: inline-block;
              width: 20px;
              height: 20px;
              background: url(@/assets/images/icon_24.svg) no-repeat;
              margin-left: 5px;
              transition: all .3s;
              transform: rotate(-90deg);
              vertical-align: middle;
              margin-top: -5px;
            }
            &.cur{
              border-radius: 40px 40px 0 0;
              padding-bottom: 20px;
              &::after{
                transform: none;
              }
            }
          }
          .lx-box{
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            display: flex;
            width: 200%;
            max-width: 200%;
            padding: 20px 10px;
            display: none;
            opacity: 0;
            &>div{
              flex: 1;
              padding: 0 10px;
              span{
                text-align: justify;
                font-size: 20px;
                line-height: 1.6;
                padding: 0;
                width: 100%;
                &:nth-of-type(1){
                  color: var(--indexColor1);
                }
                &:nth-of-type(2){
                  color: var(--textColor);
                }
              }
            }
            &.cur{
              border-radius: 0 30px 30px;
              display: flex;
              animation: lxAinma .5s .3s forwards;
            }
          }
        }
        &-bd{
          &>span{
            color: #fff;
            background: var(--indexColor1);
            &:hover{
              opacity: .8;
            }
          }
        }
      }
    }
  }
}
@keyframes lxAinma {
  100%{
    opacity: 1;
  }
}
@media (min-width: 768px) and (max-width: 1600px) {
  .index-contactUs{
    &-tab{
      :deep(.areaTab){
        div{
          font-size: 24px;
        }
      }
    }
    &-clinicTab{
      &-in{
        font-size: 20px;
      }
    }
    .address{
      &-r{
        &-name{
          font-size: 2.4vw;
        }
        &-content{
          &>div{
            padding-left: 1vw;
            span{
              font-size: 1.2vw;
              padding-right: 1vw;
              &:nth-of-type(1){
                font-size: 1.6vw;
              }
            }
          }
        }
        &-btn{
          &>div{
            max-width: 50%;
            span{
              font-size: 2vw;
              padding: 5px 2vw;
            }
          }
          &-lx{
            &>span{
              margin-right: 3vw;
              &::after{
                width: 1.2vw;
                height: 1.2vw;
                background-size: 100% auto;
              }
            }
            .lx-box{
              max-width: 200%;
              &>div{
                span{
                  font-size: 1.2vw;
                }
              }
            }
          }
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
    &-tab{
      :deep(.areaTab){
        div{
          font-size: 16px;
        }
      }
    }
    &-clinicTab{
      width: auto;
      flex-wrap: wrap;
      margin: 30px 30px 0;
      border-radius: 5px;
      border: 2px solid #00AEFF;
      &-in{
        min-width: 50%;
        border: none;
        font-size: 15px;
        border-top: 2px solid #00AEFF;
        border-right: 2px solid #00AEFF;
        &:nth-of-type(1),&:nth-of-type(2){
          border-top: none
        }
        &:nth-of-type(2),&:nth-of-type(3){
          border-right: none;
        }
        &:first-child{
          border-radius: 0;
        }
        &:last-child{
          border-radius: 0;
          border-right: none;
        }
        &-101{
          min-width: 100%;
          border-right:  none;
        }
        &-102{
          border-top: 2px solid #00AEFF !important;
          border-right: 2px solid #00AEFF !important;
        }
        &:hover{
          color: #00AEFF;
          background: #fff;
        }
        &.active{
          color: #fff;
          background: #00AEFF;
        }
      }
    }
    .address{
      &-l{
        display: none;
      }
      &-r{
        width: 100%;
        &-img{
          display: none;
          width: 100%;
          overflow: hidden;
          &>div{
            max-width: 100%;
          }
          &.mbimg{
            display: block;
          }
          &-swiper{
            width: 80% !important;
            overflow: visible;
            &-slide{
              padding: 0 15px;
              img{
                width: 100%;
              }
            }
          }
        }
        &-name{
          max-width: 90%;
          padding: 5px 50px 5px 30px;
          font-size: 20px;
          clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
          span{
            &.mbname{
              display: block;
            }
            &.pcname{
              display: none;
            }
          }
        }
        &-content{
          flex-direction: column;
          padding: 20px 30px 20px 0;
          &>div{
            display: flex;
            span{
              padding-right: 0;
              font-size: 16px;
              line-height: 2;
              // white-space: initial;
              // display: initial;
              &:nth-of-type(1){
                font-size: 16px;
                line-height: 2;
                max-width: 35%;
                // color: var(--textColor);
                // font-weight: initial;
              }
            }
            &:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3){
              span{
                &:nth-of-type(1){
                  &::before{
                  //   display: none;
                    margin-top: -5px;
                    vertical-align: middle;
                  }
                  // &::after{
                  //   content: '：';
                  //   background: none;
                  // }
                }
              }
            }
            &:not(:last-child){
              margin-bottom: 20px;
              span{
                &:not(:first-child){
                  border-right: none;
                }
              }
            }
          }
        }
        &-btn{
          display: block;
          position: relative;
          padding: 0 20px;
          &>div{
            max-width: 100%;
            span{
              padding: 7px 25px;
              border-radius: 30px;
              font-size: 20px;
              font-weight: 600;
            }
          }
          &-lx{
            width: 100%;
            padding: 10px;
            &>span{
              &::after{
                width: 10px;
                height: 10px;
                background-size: 100% auto;
              }
              &.cur{
                padding-bottom: 20px;
                border-radius: 30px 30px 0 0;
              }
            }
            .lx-box{
              position: initial;
              max-width: 100%;
              padding: 10px 10px;
              &>div{
                span{
                  font-size: 16px;
                  line-height: 2;
                }
              }
              &.cur{
                display: block;
              }
            }
          }
          &-bd{
            padding: 10px 0;
            position: absolute;
            right: 30px;
            top: 0;
          }
        }
      }
    }
  }
}
</style>



