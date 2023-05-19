<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  differData:{
    type: Object,
    default(){
      return{
        title: '',
        text: '',
        firstTextTh: '',
        secondTextTh: '',
        listDatas: [
        ],
        pageName: ''
      }
    }
  }
})

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

let differCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  differCurrent.value = swiper.realIndex + 1
}
</script>

<template>
  <div class="differ">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          <div v-if="windowWidth > 768 ||  differData.title.length <= 10">{{differData.title}}</div>
          <div v-if="windowWidth <= 768 && differData.title.length > 10">{{differData.title.slice(0,6)}}</div>
          <div v-if="windowWidth <= 768 && differData.title.length > 10">{{differData.title.slice(7,differData.title.length)}}</div>
        </div>
      </div>
      <div class="differ-text" v-if="differData.text">
        {{differData.text}}
      </div>
      <div class="differ-in">
        <swiper :slidesPerView="windowWidth>768 ? '2': '1.1'" class="swiper-wrapper" @slideChange="onSlideChange">
            <swiper-slide class="swiper-slide">
              <div class="box">
                <div class="box-in">
                  <div :class="['box-in-l',differData.pageName]"></div>
                  <div :class="['box-in-r',differData.pageName]">
                    {{differData.firstTextTh}}
                  </div>
                </div>
                <div class="box-in" v-for="(leftItem,leftItemIndex) in differData.listDatas" :key="leftItemIndex" >
                  <div :class="['box-in-l',differData.pageName]">{{leftItem.name}}</div>
                  <div :class="['box-in-r',differData.pageName]">
                    <div v-if="!leftItem.isArrayType">{{leftItem.firstText}}</div>
                    <div v-else v-for="(firstTextItem,firstTextIndex) in leftItem.firstText" :key="firstTextIndex">
                      {{firstTextItem}}
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box">
                <div :class="['box-in','boxRight',differData.pageName]">
                  <div class="box-in-r">
                    {{differData.secondTextTh}}
                  </div>
                </div>
                <div :class="['box-in','boxRight',differData.pageName]" v-for="(rightItem,rightItemIndex) in differData.listDatas" :key="rightItemIndex">
                  <div class="box-in-r bra">
                    <div>{{rightItem.secondText}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
        </swiper>
      </div>
      <div class="differ-line mbBox">
        <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="differCurrent"></PageSwiperPointLine>
      </div>
    </div>
</template>


<style lang="scss" scoped>
.differ{
  width: 100%;
  max-width: 1450px;
  margin: 96px auto 0;
  &-text{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #4D4D4D;
    padding: 28px 15% 0;
    text-align: center;
  }
  &-in{
    width: 90%;
    margin: 70px auto 0;
    .box{
      .box-in{
        height: 112px;
        margin-top: 15px;
        display: flex;
        &>div{
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          color: #4D4D4D;
        }
        .box-in-l{
          width: 102px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 60px 0px 0px 60px;
        }
        .box-in-r{
          flex: 1;
          padding: 0 70px;
          margin-left: 3px;
          display: flex;
          &>div{
            width: 100%;
          }
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          &.bra{
            border-radius: 0 60px 60px 0;
          }
        }
        &:first-child{
          height: auto;
          &>div{
            font-weight: 700;
            font-size: 28px;
          }
          .box-in-r{
            align-items: center;
          }
        }
        &:not(:first-child):nth-of-type(odd){
          &>div{
            background: #FFDDDA;
          }
        }
        &:nth-of-type(even){
          &>div{
            background: #FFF1F0;
          }
        }
        &.boxRight:not(:first-child):nth-of-type(odd){
          &>div{
            background: #BAE0FF;
          }
        }
        &.boxRight.invisalign:not(:first-child):nth-of-type(odd){
          &>div{
            background: #FFDDDA;
          }
        }
        &.boxRight:nth-of-type(even){
          &>div{
            background: #E6F4FF;
          }
        }
        &.boxRight.invisalign:nth-of-type(even){
          &>div{
            background: #FFF1F0;
          }
        }
        &.boxRight.invisalign{
          &>div{
            color: #CBCBCB;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .differ{
    &-in{
      .box{
        .box-in{
          &>div{
            font-size: 1.2vw;
          }
          .box-in-r{
            padding: 0 3vw;
          }
          &:first-child{
            &>div{
              font-size: 2vw;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .differ{
    &-text{
      text-align: left;
      font-weight: 500;
      font-size: 16px;
      padding: 28px 30px 0;
    }
    &-in{
      width: 100%;
      margin: 28px auto 0;
      .box{
        .box-in{
          height: 106px;
          margin-top: 0;
          &>div{
            font-weight: 500;
            font-size: 15px;
          }
          .box-in-l{
            width: 48px;
            &.invisalign{
              width: 96px;
            }
          }
          .box-in-r{
            padding: 0 36px;
            &.invisalign{
              padding: 0 10px;
            }
          }
          &:first-child{
            margin-bottom: 5px;
            &>div{
              font-weight: 600;
              font-size: 20px;
            }
            .box-in-r{
              align-items: flex-start;
            }
          }
        }
      }
      .swiper-slide{
        &:first-child{
          padding-left: 30px;
        }
        &:last-child{
          padding-right: 30px;
        }
      }
    }
    &-line{
      width: 83px;
      margin: 22px auto;
    }
  }
}
</style>