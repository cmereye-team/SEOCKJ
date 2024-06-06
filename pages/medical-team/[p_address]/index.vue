<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import doctorLists_hk from '~/assets/js/doctor'
import doctorLists_zh from '~/assets/js/doctor_zh'
import { Scrollbar } from 'swiper';
import { toWhatsApp } from '~/assets/js/common'
import { useElementBounding,useWindowSize } from '@vueuse/core'
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

const bannerConfig = [
  {
    pcImg: `https://static.cmereye.com/imgs/2024/06/cf7029ad23e91361.jpg`,
    mbImg: `https://static.cmereye.com/imgs/2024/06/7fe170de5b3fb0e8.jpg`,
  }
]

// ---------------新

let dentalProfessionCur = ref('101')
const dentalProfessionList = [
  {
    id: '101',
    name: '種植科',
  },
  {
    id: '102',
    name: '修復科',
  },
  {
    id: '103',
    name: '矯正科',
  },
  {
    id: '104',
    name: '牙髓病科',
  },
  {
    id: '105',
    name: '牙周病科',
  },
  {
    id: '106',
    name: '兒童牙科',
  },
  {
    id: '107',
    name: '口腔頜面外科',
  },
]

let doctorCur = ref('')

const changleDoctorLists:any = () =>{
  return doctorLists_hk[appState.areaTabCurNum].filter((temp:any)=>{return temp.dentalProfessionId.includes(dentalProfessionCur.value)}) || []
}
const changeDoctorDetail = () => {
  let obj = {
    id: '',
    dentalProfessionId: [],
    imgUrl: '',
    mbImg: '',
    name: '',
    org: '',
    posts: '',
    job:'',
    skilled: '',
    context: '',
    educated: ''
  }
  if(changleDoctorLists().length>0){
    let _obj = changleDoctorLists().find(item=>item.id === doctorCur.value);
    if(_obj){
      obj = JSON.parse(JSON.stringify(_obj))
    }
  }
  return obj
}
const handletab2 =(id:string)=>{
  dentalProfessionCur.value = id;
  doctorCur.value = changleDoctorLists().length>0 ? changleDoctorLists()[0].id : ''
}
const handleDoctorItem = (id:any) =>{
  doctorCur.value = id
}
const changeDentalProfessionList = () =>{
  let _lists:any = []
  if(doctorLists_hk[appState.areaTabCurNum].length>0){
    for(var i = 0; i<doctorLists_hk[appState.areaTabCurNum].length;i++ ){
      _lists = [ ..._lists, ...doctorLists_hk[appState.areaTabCurNum][i].dentalProfessionId]
      _lists = [...new Set(_lists)];
    }
  }
  return dentalProfessionList.filter(item => _lists.includes(item.id)) || []
}
const changeAreaTabCur = (_idx:any) => {
  if(_idx === 4){
    handletab2('102')
  }else{
    handletab2('101')
  }
}

onMounted(()=>{
  if(route.params.p_address){
    let _idx = appState.areaTabs_url.indexOf(String(route.params.p_address))
    if(_idx !== -1) appState.setCurNum(_idx)
  }
  if(route.query.did){
    let _obj = doctorLists.value[appState.areaTabCurNum].find((item:any)=>item.id === route.query.did)
    if(_obj){
      handletab2(_obj.dentalProfessionId[0])
    }
    nextTick(()=>{
      goAnchor(`#d${route.query.did}`)
    })
  }
})
const doctorTeam = ref(null)
</script>

<template>
  <div>
    <PageBanner :bannerConfig="bannerConfig" />
    <div class="doctorPage">
      <div class="doctorPage-in smallPageCon">
        <div class="index_title">{{$t('pages.medical_team.title')}}</div>
        <div class="doctorPage-in-tabNav">
          <div class="doctorPage-in-tabNav-l">
            <span>{{$t('pages.index.title')}}</span>
            <span>{{$t('pages.medical_team.title')}}</span>
            <span>{{$t(appState.areaTabs[appState.areaTabCurNum])}}</span>
          </div>
        </div>
        <div class="doctorPage-in-content"><span>{{$t('pages.medical_team.content.span_1')}}</span><span>{{$t('pages.medical_team.content.span_2')}}</span></div>
        <div class="index-doctorTeam" ref="doctorTeam">
          <div class="index-doctorTeam-tab1 index-doctorTeam-con">
              <AreaTab @changeTabCur="changeAreaTabCur" />
          </div>
          <div class="index-doctorTeam-tab2 index-doctorTeam-con">
            <div class="index-doctorTeam-tab2-in" :class="`tablang-${changeDentalProfessionList().length}`">
              <div :class="[{'index-doctorTeam-tab2-in-active': dentalProfessionCur === dentalProfessionItem.id},`textlang-${dentalProfessionItem.name.length}`]" v-for="(dentalProfessionItem,dentalProfessionIndex) in changeDentalProfessionList()" :key="dentalProfessionIndex" @click="handletab2(dentalProfessionItem.id)">
                {{dentalProfessionItem.name}}
              </div>
            </div>
          </div>
          <div>
          <section v-for="doctorItem in changleDoctorLists()" :key="doctorItem.id">
            <div class="index-doctorTeam-detail index-doctorTeam-con" :id="`d${doctorItem.id}`">
              <div class="index-doctorTeam-detail-l">
                <div class="index-doctorTeam-detail-l-in">
                  <img :srcset="'https://static.cmereye.com/imgs/2024/02/3305056d2ab78db8.webp 768w, https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp'" src="https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp" alt="">
                  <img :srcset="`${doctorItem.mbImg} 768w, ${doctorItem.imgUrl}`" :src="doctorItem.imgUrl" :alt="doctorItem.name" :title="doctorItem.name">
                </div>
              </div>
              <div class="index-doctorTeam-detail-r">
                <div class="detail-1">
                  <span>{{doctorItem.name}}</span>
                  <span>{{doctorItem.text}}</span>
                </div>
                <div class="detail-2" v-if="doctorItem.newOrg">
                  <span>{{doctorItem.newOrg}}</span>
                </div>
                <div class="detail-3">
                  <span v-for="(jobItem,jobIndex) in doctorItem.newJobs" :key="jobIndex">{{jobItem}}</span>
                </div>
                <div class="detail-4">
                  <span>擅長項目：</span>
                  <span>
                    {{doctorItem.newSkilled}}
                  </span>
                </div>
                <div class="detail-5">
                  <span v-for="(tagItem,tagIndex) in doctorItem.tags" :key="tagIndex">
                    {{tagItem}}
                  </span>
                </div>
                <div class="detail-6"><span @click="toWhatsApp">線上咨詢</span></div>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
      <NewAddress />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .doctorPage{
    background: #fff;
    padding-bottom: 143px;
    position: relative;
    z-index: 1;
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
        font-size: 30px;
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
      .index-doctorTeam{
        margin: 60px auto;
        // &-t{
        //   display: flex;
        //   justify-content: space-between;
        //   align-items: flex-end;
        // }
        &-tab1{
          :deep(.areaTab){
            div{
              flex: 1;
              text-align: center;
              font-size: 35px;
            }
          }
        }
        &-tab2{
          margin-top: 30px;
          &-in{
            width: 100%;
            display: flex;
            &>div{
              flex: 1;
              color: #00AEFF;
              transition: all .3s;
              border-top: 2px solid #00AEFF;
              border-bottom: 2px solid #00AEFF;
              border-left: 2px solid #00AEFF;
              padding: 5px 0;
              font-size: 35px;
              text-align: center;
              letter-spacing: 3px;
              cursor: pointer;
              &:nth-of-type(4){
                flex: 1.3;
              }
              &:nth-of-type(5){
                flex: 1.3;
              }
              &:nth-of-type(6){
                flex: 1.3;
              }
              &:nth-of-type(7){
                flex: 1.7;
              }
              &:first-child{
                border-radius: 5px 0 0 5px;
              }
              &:last-child{
                border-radius: 0 5px 5px 0;
                border-right: 2px solid #00AEFF;
              }
              &:hover,&.index-doctorTeam-tab2-in-active{
                color: #fff;
                background: #00AEFF;
              }
            }
          }
        }
        &-lists{
          width: 100%;
          .pcLists{
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            &-in{
              cursor: pointer;
              margin-bottom: 30px;
              &:not(:last-child){
                margin-right: 30px;
              }
              &-img{
                width: 150px;
                height: 150px;
                border-radius: 10px;
                overflow: hidden;
                background: rgba(254, 169, 209,.5);
                transition: all .3s;
              }
              &:hover,&.acitve{
                .pcLists-in-img{
                  background: #FFA8C6;
                }
              }
            }
          }
          .mbLists{
            width: calc(100% - 40px);
            margin: 0 auto;
            display: none;
            &-in{
              width: 100%;
              overflow: visible;
              &-img{
                // width: calc(100% - 20px);
                margin: 0 10px;
                height: auto;
                border-radius: 10px;
                overflow: hidden;
                background: rgba(254, 169, 209,.7);
              }
            }
          }
        }
        &-detail{
          padding: 20px;
          display: flex;
          margin-top: 50px;
          &-l{
            width: calc(434 / 1365 * 100%);
            max-width: 434px;
            position: relative;
            height: max-content;
            &-in{
              width: 100%;
              &::after{
                content: '';
                position: absolute;
                top: -20px;
                left: -20px;
                width: 100%;
                height: 100%;
                border-radius: 30px;
                background: rgba(254, 169, 209,.7);
                z-index: 0;
              }
            }
            img{
              position: relative;
              border-radius: 30px;
              z-index: 1;
              &:nth-of-type(1){
                border: 3px solid var(--indexColor1);
              }
              &:nth-of-type(2){
                position: absolute;
                bottom: 3px;
                left: 50%;
                transform: translateX(-50%);
                // width: calc(100% - 3px);
                // max-width: 80%;
                max-height: calc(92% - 3px);
                display: block;
              }
            }

          }
          &-r{
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 100%;
            padding-bottom: 5px;
            .detail-1{
              color: var(--indexColor1);
              padding-left: 20px;
              span{
                font-size: 20px;
                &:nth-of-type(1){
                  font-size: 35px;
                  margin-right: 5px;
                }
              }
            }
            .detail-2{
              color: #fff;
              span{
                font-size: 28px;
                padding: 5px 70px 5px 20px;
                display: inline-block;
                background: var(--indexColor1);
                clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
              }
            }
            .detail-3{
              color: var(--textColor);
              padding-left: 20px;
              font-size: 20px;
              margin-bottom: 30px;
              margin-top: 10px;
              span{
                // white-space: pre-wrap;
                &:not(:last-child){
                  &::after{
                    content: '、';
                  }
                }
              }
            }
            .detail-4{
              flex: 1;
              color: var(--textColor);
              padding-left: 20px;
              font-size: 20px;
              margin-bottom: 20px;
              span{
                display: block;
                // display: -webkit-box;  
                // -webkit-line-clamp: 3; 
                // line-clamp: 3; 
                // -webkit-box-orient: vertical;  
                // overflow: hidden;  
                // text-overflow: ellipsis; 
              }
            }
            .detail-5{
              color: var(--textColor);
              padding-left: 20px;
              font-size: 20px;
              span{
                border-bottom: 1px solid var(--textColor);
                &:not(:last-child){
                  margin-right: 10px;
                }
              }
            }
            .detail-6{
              margin-top: 30px;
              margin-left: 20px;
              span{
                cursor: pointer;
                color: #fff;
                background: var(--indexColor1);
                font-size: 35px;
                border-radius: 50px;
                padding: 10px 30px;
                box-shadow: 0 5px 10px var(--indexColor1);
                transition: all .3s;
                &:hover{
                  opacity: .7;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1920px) {
  .doctorPage{
    padding-bottom: 7.4479vw;
    &-in{
      padding-top: 7.4479vw;
      &-text{
        font-size: 1.4583vw;
        margin-top: 2.2917vw;
      }
      &-content{
        font-size: 1.5625vw;
        margin-top: .9896vw;
      }
      &-tabNav{
        margin-top: 2.0833vw;
        &-l{
          font-size: 1.0417vw;
          span{
            &:not(:last-child)::after{
              width: 1.0417vw;
              height: .1042vw;
              margin: 0 .5208vw;
              margin-top: -0.2083vw;
            }
          }
        }
      }
      .index-doctorTeam{
        margin: 3.125vw auto;
        &-tab1{
          :deep(.areaTab){
            div{
              font-size: 1.8229vw;
            }
          }
        }
        &-tab2{
          margin-top: 1.5625vw;
          &-in{
            &>div{
              padding: .2604vw 0;
              font-size: 1.8229vw;
              letter-spacing: .1563vw;
              &:first-child{
                border-radius: .2604vw 0 0 .2604vw;
              }
              &:last-child{
                border-radius: 0 .2604vw .2604vw 0;
              }
            }
          }
        }
        &-lists{
          .pcLists{
            &-in{
              margin-bottom: 1.5625vw;
              &:not(:last-child){
                margin-right: 1.5625vw;
              }
              &-img{
                width: 7.8125vw;
                height: 7.8125vw;
                border-radius: .5208vw;
              }
            }
          }
          .mbLists{
            width: calc(100% - 2.0833vw);
            &-in{
              &-img{
                margin: 0 .5208vw;
                border-radius: .5208vw;
              }
            }
          }
        }
        &-detail{
          padding: 1.0417vw;
          margin-top: 2.6042vw;
          &-l{
            max-width: 22.6042vw;
            &-in{
              width: 100%;
              &::after{
                top: -1.0417vw;
                left: -1.0417vw;
                border-radius: 1.5625vw;
              }
            }
            img{
              border-radius: 1.5625vw;
            }
          }
          &-r{
            padding-bottom: .2604vw;
            .detail-1{
              padding-left: 1.0417vw;
              span{
                font-size: 1.0417vw;
                &:nth-of-type(1){
                  font-size: 1.8229vw;
                  margin-right: .2604vw;
                }
              }
            }
            .detail-2{
              span{
                font-size: 1.4583vw;
                padding: .2604vw 3.6458vw .2604vw 1.0417vw;
              }
            }
            .detail-3{
              padding-left: 1.0417vw;
              font-size: 1.0417vw;
              margin-bottom: 1.5625vw;
              margin-top: .5208vw;
            }
            .detail-4{
              padding-left: 1.0417vw;
              font-size: 1.0417vw;
              margin-bottom: 1.0417vw;
            }
            .detail-5{
              padding-left: 1.0417vw;
              font-size: 1.0417vw;
              span{
                &:not(:last-child){
                  margin-right: .5208vw;
                }
              }
            }
            .detail-6{
              margin-top: 1.5625vw;
              margin-left: 1.0417vw;
              span{
                font-size: 1.8229vw;
                border-radius: 2.6042vw;
                padding: .5208vw 1.5625vw;
                box-shadow: 0 .2604vw .5208vw var(--indexColor3);
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
          // display: none;
          margin-top: 20px;
          padding: 0 30px;
          &-l{
            font-size: 16px;
          }
        }
        .index-doctorTeam{
          margin: 50px 0;
          width: 100%;
          &-t{
            flex-direction: column;
            align-items: flex-start;
            box-sizing: border-box;
          }
          &-tab1{
            :deep(.areaTab){
              div{
                font-size: 16px;
              }
            }
          }
          &-tab2{
            padding: 0 30px;
            margin-top: 20px;
            &-in{
              display: flex;
              flex-wrap: wrap;
              border: 1px solid #00AEFF;
              border-radius: 5px;
              &>div{
                font-size: 16px;
                border: none;
                &:not(:nth-of-type(n+4)){
                  border-right: 1px solid #00AEFF;
                }
                &:not(:nth-of-type(n+5)){
                  border-bottom: 1px solid #00AEFF;
                }
                &:nth-of-type(n+6){
                  border-left: 1px solid #00AEFF;
                }
                &.textlang-3,&.textlang-4{
                  min-width: calc(100% / 4);
                }
                &:first-child{
                  border-radius: 0;
                }
                &:last-child{
                  border-right: none;
                  border-radius: 0;
                }
                &:hover{
                  color: #00AEFF;
                  background: #fff;
                }
                &.index-doctorTeam-tab2-in-active{
                  color: #fff;
                  background: #00AEFF;
                }
              }
              &.tablang-1,&.tablang-2,&.tablang-3,&.tablang-4{
                &>div{
                  border-bottom: none;
                  &:last-child{
                    border-right: none;
                  }
                }
              }
            }
          }
          &-lists{
            margin-top: 20px;
            overflow: hidden;
            .pcLists{
              display: none;
            }
            .mbLists{
              display: block;
            }
          }
          &-detail{
            flex-direction: column;
            align-items: center;
            padding: 0;
            margin-top: 30px;
            &-l{
              width: 100%;
              &-in{
                &::after{
                  display: none;
                }
              }
              img{
                border-radius: 0;
                &:nth-of-type(1){
                  border: none;
                }
                &:nth-of-type(2){
                  // width: 55%;
                  height: 100%;
                  max-height: 90%;
                  left: 50%;
                  top: auto;
                  bottom: 0;
                  transform: translateX(-50%);
                }
              }
            }
            &-r{
              width: 100%;
              .detail-1{
                margin: 5px 0;
                padding: 0 30px;
                span{
                  font-size: 18px;
                  display: inline-block;
                  &:nth-of-type(1){
                    font-size: 30px;
                    letter-spacing: 2px;
                    margin-right: 5px;
                  }
                }
              }
              .detail-2{
                &>span{
                  width: 100%;
                  font-size: 20px;
                  padding: 5px 75px 5px 30px;
                  clip-path: polygon(0 0, 85% 0, 90% 100%, 0 100%);
                }
              }
              .detail-3{
                margin-top: 10px;
                padding: 0 30px;
                font-size: 16px;
              }
              .detail-4{
                font-size: 16px;
                padding: 0 30px;
                margin-bottom: 30px;
                span{
                  text-align: justify;
                }
              }
              .detail-5{
                font-size: 12px;
                padding: 0 30px;
                display: flex;
                justify-content: center;
              }
              .detail-6{
                display: flex;
                justify-content: center;
                margin-left: 0;
                span{
                  font-size: 28px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>