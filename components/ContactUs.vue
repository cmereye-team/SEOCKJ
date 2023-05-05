<script lang="ts" setup>
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
      <div class="index-contactUs-in">
        <div class="index-contactUs-in-l">
          <h3>深圳愛康健口腔醫院（羅湖）</h3>
          <span>醫院地址：深圳市羅湖區火車站大廈C區1-8樓</span>
          <span>營業時間：9:00-18:00 （節假日照常應診）</span>
          <span>諮詢電話： 0755-61302632</span>
          <div class="contactUsAddressBox">
            <div class="in-l">
              <img src="@/assets/images/icon_5.png" alt="">
            </div>
            <div class="in-c">
              <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29481.217675310527!2d114.02476072311399!3d22.535970303249012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f41aefc37f09%3A0x4782830b3613ad88!2z54ix5bq35YGl6b2_56eR!5e0!3m2!1szh-CN!2ssg!4v1682218578472!5m2!1szh-CN!2ssg" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
              <img src="https://static.cmereye.com/imgs/2023/04/3e6f553114c01879.jpg" alt="">
            </div>
            <div class="in-r">
              <img src="@/assets/images/icon_5.png" alt="">
            </div>
          </div>
          <span class="showIcon" @click="mapConShow = !mapConShow">交通路線:</span>
          <span v-show="mapConShow">巴士路線</span>
          <span v-show="mapConShow">羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號</span>
          <span v-show="mapConShow">地鐵路線</span>
          <span v-show="mapConShow">地鐵1號線“羅湖站”C出口； 地鐵9號線“人民南站” A1出口</span>
          <div class="mapBtn" v-show="mapConShow">
            <div class="mapBtn-in">Google地圖</div>
            <div class="mapBtn-in">百度地圖</div>
          </div>
        </div>
        <div class="index-contactUs-in-r">
          <div class="in-l">
            <img src="@/assets/images/icon_5.png" alt="">
          </div>
          <div class="in-c">
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29481.217675310527!2d114.02476072311399!3d22.535970303249012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f41aefc37f09%3A0x4782830b3613ad88!2z54ix5bq35YGl6b2_56eR!5e0!3m2!1szh-CN!2ssg!4v1682218578472!5m2!1szh-CN!2ssg" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
            <img src="https://static.cmereye.com/imgs/2023/04/3e6f553114c01879.jpg" alt="">
          </div>
          <div class="in-r">
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
        font-size: 20px;
        line-height: 160%;
        color: #FFCECB;
        position: relative;
        display: inline-block;
        cursor: pointer;
        &:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #FFCECB transparent transparent transparent;
          position: absolute;
          // right: -20px;
          top: 10px;
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



