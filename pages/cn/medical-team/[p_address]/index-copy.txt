<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import doctorLists_hk from '~/assets/js/doctor'
import doctorLists_zh from '~/assets/js/doctor_zh'
import { Scrollbar } from 'swiper';
const locale = useState<string>('locale.setting')
const appState = useAppState()
useHead({
  title: "醫生團隊｜牙科醫生",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健擁有強大的牙科醫生團隊，牙科醫生分布在不同地區，包括羅湖區牙科醫生團隊、福田區牙科醫生團隊、南山區牙科醫生團隊、寶安區牙科醫生團隊及龍華區牙科醫生團隊。我們的牙科醫生團隊具有豐富的口腔全科診療經驗，為客人提供安全可靠的牙科服務，由一般口腔檢查服務、到美容牙科服務至高階牙科服務。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙科團隊 牙科醫生 牙科服務 牙科護理 牙科醫生團隊 羅湖牙科醫生 福田牙科醫生 南山牙科醫生 寶安牙科醫生 龍華牙科醫生 深圳牙科醫生 深圳牙科團隊 深圳牙科服務 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})
let doctorObjs = {
  doctorLists_hk,
  doctorLists_zh
}
let doctorLists = ref(doctorObjs[`doctorLists_${locale.value}`])
watch(
  locale,(newValue,oldValue)=>{
    doctorLists.value = doctorObjs[`doctorLists_${locale.value}`]
  },
  {
    deep:true
  }
)


const route = useRoute()

let doctorPageSwiperRef ={
  slideTo: (a,b)=>{}
}
const setdoctorPageSwiperRef = (swiper:any) => {
  doctorPageSwiperRef = swiper;
}
const doctorPageSwiperChange = (_idx: number) => {
  
}
const goAnchor = (_hash: any)=>{
  const a = document.querySelector(_hash)
  let top = a.offsetTop-400
  if(a){
    let b = 0
    const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = b += 50;
      if (b >= top) {
          clearInterval(timeTop);
      }
  }, 10);
  }
  
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/02/1a291fb37036bf95.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/5289ce266f8e363e.jpg',
  pageName: 'coverage',
  pcText: [],
  mbText: []
}

onMounted(()=>{
  if(route.params.p_address){
    let _idx = appState.areaTabs_url.indexOf(String(route.params.p_address))
    if(_idx !== -1) appState.setCurNum(_idx)
  }
  if(route.query.did){
    setTimeout(()=>{
      if(window.innerWidth > 768){
        goAnchor(`#d${route.query.did}`)
      }else{
        goAnchor('#dp')
        let _index = doctorLists.value[appState.areaTabCurNum].findIndex((item:any)=>item.id === route.query.did)
        doctorPageSwiperRef.slideTo(_index, 0);
      }
    },500)
  }
})
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="doctorPage">
      <div class="doctorPage-in pageCon">
        <div class="index_title">{{$t('pages.medical_team.title')}}</div>
        <div class="doctorPage-in-text">{{$t('pages.medical_team.text')}}</div>
        <div class="doctorPage-in-content"><span>{{$t('pages.medical_team.content.span_1')}}</span><span>{{$t('pages.medical_team.content.span_2')}}</span></div>
        <div class="doctorPage-in-tabNav">
          <div class="doctorPage-in-tabNav-l">
            <span>{{$t('pages.index.title')}}</span>
            <span>{{$t('pages.medical_team.title')}}</span>
            <span>{{$t(appState.areaTabs[appState.areaTabCurNum])}}</span>
          </div>
          <div>
            <AreaTab :isAdPage="true" />
          </div>
        </div>
        <div class="doctorPage-in-lists pcBox">
          <div class="doctorItem" v-for="(item,index) in doctorLists[appState.areaTabCurNum]" :key="index" :id="`d${item.id}`">
            <div class="doctorItem-l">
              <img :src="item.imgUrl" :alt="item.name">
            </div>
            <div class="doctorItem-r">
              <div class="title">{{item.job || ''}}</div>
              <div class="name">
                <span>{{item.name || ''}}</span> 
                <span>{{item.posts || ''}}{{(item.posts && item.educated) ? '，': '' }}{{item.educated || ''}}</span>
              </div>
              <div class="org">
                {{$t('pages.medical_team.org')}}：{{item.org || ''}}
              </div>
              <!-- 擅長： -->
              <!-- <div class="expertise">
                擅長：{{item.skilled.length > 100? `${item.skilled.slice(0,110)}...`:item.skilled}}
              </div> -->
              <div class="expertise">
                {{$t('pages.medical_team.expertise')}}：{{item.skilled || ''}}
              </div>
              <div class="btn">
                <!-- 了解更多<img src="@/assets/images/icon_04.png" /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="mbDoctorList mbBox mbBox" id="dp">
          <div class="mbDoctorList-t">
            <AreaTab :isAdPage="true" />
          </div>
          <div class="mbDoctorList-c">
            <div class="doctorPage-in-lists">
              <Swiper
                class="swiperBox"
                :loop="true"
                :scrollbar="{
                  hide: true,
                }"
                :modules="[Scrollbar]"
                @swiper="setdoctorPageSwiperRef"
                @slideChange="doctorPageSwiperChange"
              >
                <SwiperSlide v-for="(item,index) in doctorLists[appState.areaTabCurNum]" :key="index" :id="item.id">
                  <div class="doctorItem">
                    <div class="doctorItem-l">
                      <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="doctorItem-r">
                      <div class="doctorItem-r-t">
                        <div class="title">{{item.job || ''}}</div>
                        <!-- <div class="btn">
                          了解更多<img src="@/assets/images/icon_04.png" />
                        </div> -->
                      </div>
                      <div class="name">
                        <span>{{item.name || ''}}</span> 
                        <span>{{item.posts || ''}}{{(item.posts && item.educated) ? '，': '' }}{{item.educated || ''}}</span>
                      </div>
                      <div class="org">
                        {{$t('pages.medical_team.org')}}：{{item.org || ''}}
                      </div>
                      <!-- <div class="expertise">
                        擅長：{{item.skilled.length > 100? `${item.skilled.slice(0,110)}...`:item.skilled}}
                      </div> -->
                      <div class="expertise">
                        {{$t('pages.medical_team.expertise')}}：{{item.skilled || ''}}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div class="mbDoctorList-b">
            <!-- 主頁 -->
            <span>{{$t('pages.index.title')}}</span>
            <!-- 醫生團隊 -->
            <span>{{$t('pages.medical_team.title')}}</span>
            <span>{{$t(appState.areaTabs[appState.areaTabCurNum])}}</span>
          </div>
        </div>
      </div>
      <ContactUs :isAdPage="true" />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .doctorPage{
    background: #fff;
    padding-bottom: 143px;
    .index_title{
      z-index: 1;
    }
    &-in{
      padding-top: 143px;
      &-text{
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 160%;
        color: #666666;
        margin-top: 44px;
      }
      &-content{
        font-weight: 700;
        font-size: 3.125rem;
        line-height: 160%;
        margin-top: 19px;
        color: #666666;
      }
      &-tabNav{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-l{
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 160%;
          color: #CBCBCB;
          span{
            &:not(:last-child)::after{
              content: '';
              width: 20px;
              height: 2px;
              margin: 0 10px;
              background: #CBCBCB;
              display: inline-block;
              vertical-align: middle;
              margin-top: -4px;
            }
            &:last-child{
              color: var(--indexColor1);
            }
          }
        }
      }
      &-lists{
        margin-top: 68px;
        .doctorItem{
          width: 100%;
          height: 429px;
          margin-top: 68px;
          display: flex;
          &-l{
            width: 429px;
            height: 100%;
            border-radius: 10px;
            position: relative;
            img{
              position: absolute;
              bottom: 0;
              height: 110%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          &-r{
            flex: 1;
            padding-left: 40px;
            color: #666666;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title{
              font-weight: 900;
              font-size: 24px;
              line-height: 200%;
            }
            .org{
              font-weight: 600;
              font-size: 20px;
            }
            .expertise{
              font-weight: 600;
              font-size: 18px;
            }
            .name{
              font-weight: 900;
              font-size: 20px;
              line-height: 160%;
              color: #666666;
              span{
                margin-right: 20px;
                &:last-child{
                  font-weight: 700;
                  padding-left: 20px;
                  border-left: 2px solid #666666;
                }
              }
            }
            .btn{
              font-weight: 500;
              font-size: 23px;
              margin-top: 66px;
              color: var(--indexColor1);
              cursor: pointer;
              img{
                width: 21px;
                display: inline-block;
                margin-left: 10px;
                vertical-align: middle;
                margin-top: -2px;
              }
            }
          }
          &:nth-of-type(odd){
            .doctorItem-l{
              background: var(--indexColor3);
            }
          }
          &:nth-of-type(even){
            .doctorItem-l{
              background: #BAE0FF;
            }
          }
          &:first-child{
            margin-top: 30px;
          }
        }
        &::-webkit-scrollbar {
          background: none;
        }
        &::-webkit-scrollbar-thumb{
          background: var(--indexColor1);
        }
        &::-webkit-scrollbar-track{
          background: var(--indexColor2);
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1452px) {
    .doctorPage{
      &-in{
        &-lists{
          .doctorItem{
            height: 28vw;
            &-l{
              width: 28vw;
              img{
                max-width: 85%;
                max-height: calc(100% + 30px);
              }
            }
            &-r{
              padding-left: 3vw;
              .title{
                font-weight: 900;
                font-size: 1.5vw;
                line-height: 200%;
              }
              .org{
                font-weight: 600;
                font-size: 1.5vw;
              }
              .expertise{
                font-weight: 600;
                font-size: 1.5vw;
              }
              .name{
                font-weight: 900;
                font-size: 1.5vw;
                line-height: 160%;
                span{
                  margin-right: 1.4vw;
                  &:last-child{
                    padding-left: 1.4vw;
                  }
                }
              }
              .btn{
                font-size: 1.6vw;
                margin-top: 4.8vw;
                img{
                  width: 1.4vw;
                  margin-left: .75vw;
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .doctorPage{
      padding-bottom: 90px;
      &-in{
        padding-top: 0px;
        &-text{
          margin-top: 34px;
          font-size: 1.25rem;
          font-weight: 600;
          padding: 0 30px;
        }
        &-content{
          font-size: 1.625rem;
          padding: 0 30px;
          margin-top: 13px;
          span{
            display: block;
            &:last-child{
              margin-left: 100px;
            }
          }
        }
        &-tabNav{
          display: none;
        }
        .mbDoctorList{
          &-c{
            box-sizing: border-box;
            .doctorPage-in-lists{
              width: 100%;
              margin-top: 33px;
              display: flex;
              .swiper{
                padding-bottom: 30px;
              }
              :deep(.swiper-scrollbar){
                opacity: 1 !important;
                width: calc(100% - 60px);
                margin: 0 30px;
                background: var(--indexColor2);
              }
              :deep(.swiper-scrollbar-drag){
                background: var(--indexColor1);
              }
              &::-webkit-scrollbar{
                height: 5px;
              }
              &::-webkit-scrollbar-thumb{
                background: var(--indexColor1);
                border: none;
                height: 5px;
              }
              &::-webkit-scrollbar-track{
                background: var(--indexColor2);
                height: 5px;
              }
              .doctorItem{
                display: block;
                flex-shrink: 0;
                float: left;
                height: auto;
                padding: 0 30px;
                scroll-snap-align: start;
                &-l{
                  width: 100%;
                  padding-top: 100%;
                  height: 0;
                  img{
                    max-width: 85%;
                    max-height: calc(100% + 30px);
                  }
                }
                &-r{
                  padding-left: 0;
                  margin-top: 19px;
                  &-t{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .title{
                      font-size: 1.25rem;
                      font-weight: 600;
                      line-height: 160%;
                      white-space: pre-wrap;
                    }
                    .btn{
                      min-width: 83px;
                      font-size: 1rem;
                      margin-top: 0;
                      img{
                        width: 14px;
                        margin-left: 5px;
                      }
                    }
                  }
                  .org{
                    margin-top: 19px;
                    font-weight: 500;
                    font-size: 1rem;
                    width: 100%;
                  }
                  .expertise{
                    margin-top: 25px;
                    font-weight: 500;
                    font-size: 1rem;
                  }
                  .name{
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin-top: 25px;
                    display: flex;
                    span{
                      display: flex;
                      align-items: center;
                      &:first-child{
                        max-width: 60px;
                        margin-right: 20px;
                      }
                      &:last-child{
                        padding-left: 20px;
                        flex: 1;
                        border-left: 2px solid #666666;
                        margin-right: 0;
                      }
                    }
                  }
                }
              }
            }
          }
          &-b{
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 160%;
            color: #CBCBCB;
            margin-top: 36px;
            padding: 0 30px;
            span{
              &:not(:last-child)::after{
                content: '';
                width: 20px;
                height: 2px;
                margin: 0 10px;
                background: #CBCBCB;
                display: inline-block;
                vertical-align: middle;
                margin-top: -4px;
              }
              &:last-child{
                color: var(--indexColor1);
              }
            }
          }
        }
      }
    }
  }
</style>