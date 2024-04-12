<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Autoplay } from 'swiper';
import addressLists from '~/assets/js/address'

const appState = useAppState()
let currentAddress = ref(0)

const allAddressLists = addressLists


const handleAddress = (_idx:any) => {
  currentAddress.value = _idx
  changeImgCurTime()
}

const toAddressLink = (url) => {
  location.href = url
}
let imgCurTimer:any = null
const changeImgCurTime = () =>{
  clearInterval(imgCurTimer)
  if(getDetail().imgLists.length > 1){
    imgCurTimer = setInterval(() => {
      if(imgcur.value+1 === getDetail().imgLists.length){
        imgcur.value = 0
      }else{
        imgcur.value ++ 
      }
    },3000)
  }else{
    imgcur.value = 0
  }
}

const pageLoading = ref(false)
const changedetail = () =>{
  pageLoading.value = true
  isShowlxBox.value = false
  imgcur.value = 0
  pageLoading.value = false
}

const getDetail:any = () =>{
  return allAddressLists[appState.areaTabCurNum][currentAddress.value]
}

let isShowlxBox = ref(false)

const changeTabCur = () =>{
  currentAddress.value = 0
  isShowlxBox.value = false
  changeImgCurTime()
}

let imgcur:any = ref(0)



onMounted(()=>{
  changeImgCurTime()
})

onUnmounted(()=>{
  clearInterval(imgCurTimer)
})

watch(
  appState,
  (n,o)=>{
    currentAddress.value = 0
  }
)

</script>


<template>
  <div class="index-contactUs smallPageCon">
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
            <Swiper
                :modules="[Autoplay]"
                :autoplay="{
                  delay: 3000,
                }"  class="address-r-img-swiper">
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
  padding: 80px 0 20px;
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
        font-size: 20px;
      }
    }
  }
  &-clinicTab{
    display: flex;
    margin-top: 10px;
    &-in{
      flex: 1;
      text-align: center;
      color: #00AEFF;
      transition: all .3s;
      font-size: 18px;
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
            font-size: 26px;
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

@media (min-width: 768px) and (max-width: 1920px) {
  .index-contactUs{
    padding: 4.1667vw 0 1.0417vw;
    &-tab{
      margin-top: 2.0833vw;
      :deep(.areaTab){
        div{
          font-size: 1.0417vw;
        }
      }
    }
    &-clinicTab{
      margin-top: .5208vw;
      &-in{
        font-size: 18px;
        border-top: .1042vw solid #00AEFF;
        border-bottom: .1042vw solid #00AEFF;
        border-left: .1042vw solid #00AEFF;
        padding: .2604vw 0;
        &:first-child{
          border-radius: .2604vw 0 0 .2604vw;
        }
        &:last-child{
          border-radius: 0 .2604vw .2604vw 0;
          border-right: .1042vw solid #00AEFF;
        }
      }
    }
    .address{
      margin-top: 1.5625vw;
      &-l{
        img{
          border-radius: 1.0417vw 0 0 1.0417vw;
        }
      }
      &-r{
        &-img{
          padding: 0 1.5625vw 1.0417vw 1.5625vw;
          &>div{
            max-width: 9.1146vw;
          }
        }
        &-name{
          padding: .2604vw 3.6458vw .2604vw 1.5625vw;
          font-size: 1.8229vw;
        }
        &-content{
          padding: 1.0417vw 0 2.0833vw;
          &>div{
            padding-left: 1.5625vw;
            span{
              font-size: 1.0417vw;
              padding-right: 1.5625vw;
              &:nth-of-type(1){
                font-size: 1.1458vw;
              }
            }
            &:nth-of-type(1){
              span{
                &:nth-of-type(1){
                  &::before{
                    width: .8854vw;
                    height: .8854vw;
                    margin-right: .2604vw;
                  }
                }
              }
            }
            &:nth-of-type(2){
              span{
                &:nth-of-type(1){
                  &::before{
                    width: .8854vw;
                    height: .8854vw;
                    margin-right: .2604vw;
                  }
                }
              }
            }
            &:nth-of-type(3){
              span{
                &:nth-of-type(1){
                  &::before{
                    width: .8854vw;
                    height: .8854vw;
                    margin-right: .2604vw;
                  }
                }
              }
            }
          }
        }
        &-btn{
          padding: 0 1.5625vw;
          &>div{
            filter: drop-shadow(0 .1563vw .2604vw var(--indexColor3));
            -webkit-filter: drop-shadow(0 .1563vw .2604vw var(--indexColor3));
            span{
              padding: .2604vw 2.0833vw;
              border-radius: 2.0833vw;
              font-size: 1.25vw;
            }
          }
          &-lx{
            &>span{
              margin-right: 2.6042vw;
              &::after{
                width: 1.0417vw;
                height: 1.0417vw;
                margin-left: .2604vw;
                margin-top: -0.2604vw;
                background-size: 100% auto;
              }
              &.cur{
                border-radius: 2.0833vw 2.0833vw 0 0;
                padding-bottom: 1.0417vw;
              }
            }
            .lx-box{
              padding: 1.0417vw .5208vw;
              &>div{
                padding: 0 .5208vw;
                span{
                  font-size: 1.0417vw;
                }
              }
              &.cur{
                border-radius: 0 1.5625vw 1.5625vw;
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



