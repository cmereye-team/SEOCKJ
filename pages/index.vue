<script lang="ts" setup>
const { t } = useLang()

let doctorTeamCurrent = ref(1)
const doctorTeamTabDatas = [
  '羅湖區','福田區','南山區','寶安區','龍華區'
]
const doctorLists = ['','','','','','','','','','','','']

const onSlideDoctorTeamSwiperChange = (swiper:any) => {
  doctorTeamCurrent.value = swiper.realIndex + 1
}

const swiperOption = {
  loop: true,
  autoplay: true
}
</script>

<template>
  <div class="bigPageCon">
    <PageHeader /> 
    <div class="indexPage">
    
    <!-- 最新消息 -->
      <LatestNews />
      <!-- 品牌理念 -->
      <div class="index-brandConcept">
        <div class="brandConcept-left pageCon">
          <div class="index_title">品牌理念</div>
          <div class="brandConcept-title">
            <span>希瑪愛康健品牌</span>
            <span>28年專注你的口腔健康</span>
          </div>
          <div class="brandConceptBg">
            <img src="@/assets/images/brandConcept_bg.jpg" alt="" />
          </div>
          <div class="content">
            作為深圳口腔專科醫院，深圳愛康健口腔醫院秉承著“專科·專業”的服務宗旨，對醫療資源進行了科學、合理的整合。醫師團隊是畢業於國內知名口腔學院的專業人員；醫院各專業帶頭人，包括種植醫師、美學修復醫師、牙周病醫師等共同組成，帶領一批醫護人員一起構成愛康健口腔醫院的服務團隊。全程式預約一體化診療服務，讓每一位顧客享受健康微笑之旅。
          </div>
        </div>
        <div class="brandConcept-right">
          <!-- <img src="@/assets/images/brandConcept_bg.jpg" alt="" /> -->
        </div>
      </div>
      <!-- 牙科服務 -->
      <!-- 全科牙科,種植牙科,矯齒牙科,美容牙科,兒童牙科 -->
      <div class="index-dentalServices">
        <div class="index_title pageCon">牙科服務</div>
        <div class="index-dentalServices-in">
          <div class="dentalServices-box pageCon">
            <div class="dentalServices-box-in">
              <img class="pcBox" src="@/assets/images/dentalServices_bg01.jpg" alt="">
              <img class="mbBox" src="@/assets/images/dentalServices_bg06.jpg" alt="">
              <h3>全科牙科</h3>
              <span>了解更多</span>
            </div>
            <div class="dentalServices-box-in">
              <img class="pcBox" src="@/assets/images/dentalServices_bg02.jpg" alt="">
              <img class="mbBox" src="@/assets/images/dentalServices_bg07.jpg" alt="">
              <h3>種植牙科</h3>
              <span>了解更多</span>
            </div>
            <div class="dentalServices-box-in">
              <img class="pcBox" src="@/assets/images/dentalServices_bg03.jpg" alt="">
              <img class="mbBox" src="@/assets/images/dentalServices_bg08.jpg" alt="">
              <h3>矯齒牙科</h3>
              <span>了解更多</span>
            </div>
            <div class="dentalServices-box-in">
              <img class="pcBox" src="@/assets/images/dentalServices_bg04.jpg" alt="">
              <img class="mbBox" src="@/assets/images/dentalServices_bg09.jpg" alt="">
              <h3>美容牙科</h3>
              <span>了解更多</span>
            </div>
            <div class="dentalServices-box-in">
              <img class="pcBox" src="@/assets/images/dentalServices_bg05.jpg" alt="">
              <img class="mbBox" src="@/assets/images/dentalServices_bg10.jpg" alt="">
              <h3>兒童牙科</h3>
              <span>了解更多</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 關於我們 -->
      <AboutUs />
      <!-- 醫生團隊 -->
      <div class="index-doctorTeam">
        <div class="index-doctorTeam-t pageCon">
          <div class="index_title">醫生團隊</div>
          <AreaTab />
        </div>
        <div class="index-doctorTeam-c pageCon">
            <Swiper
              class="swiperBox"
              :loop="true"
              :autoplay="{
                disableOnInteraction: true,
              }"
              @slideChange="onSlideDoctorTeamSwiperChange"
            >
              <SwiperSlide v-for="slide in 3" :key="slide" >
                <div class="doctorTeamPage">
                  <div class="doctorItem" v-for="(doctorItem,doctorIndex) in doctorLists" :key="doctorIndex">
                    <img src="@/assets/images/doctor_01.png" alt="">
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
        <div class="index-doctorTeam-b pageCon">
          <div class="index-doctorTeam-b-in">
            <PageSwiperPointLine :latestNewsNum="3" :latestNewsCurrent="doctorTeamCurrent"></PageSwiperPointLine>
          </div>
        </div>
      </div>
      <!-- 個案分享 -->
      <div class="index-caseSharing">
        <div class="index_title pageCon">個案分享</div>
        <div class="index-caseSharing-in pageCon">
          <div class="in-top">
            <CaseSharingVideoItem />
          </div>
          <div class="in-cen">
            <CaseSharingImageItem />
            <CaseSharingImageItem />
          </div>
          <div class="in-bottom">
            <span>了解更多</span>
          </div>
        </div>
      </div>
      <!-- 聯絡我們 -->
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
.indexPage {
  width: 100%;
  background: #fff;
  padding-bottom: 140px;
}
//品牌理念
.index-brandConcept {
  width: 100%;
  min-height: 760px;
  // margin: 50px 0 0;
  margin-top: 143px;
  box-sizing: border-box;
  position: relative;
  .brandConcept-left {
    padding-top: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .brandConcept-title {
      font-style: normal;
      font-weight: 700;
      // font-size: 28px;
      font-size: 1.75rem;
      line-height: 160%;
      color: #4d4d4d;
      margin-top: 100px;
      span {
        display: block;
      }
    }
    .brandConceptBg{
      width: 100%;
      display: none;
    }
    .content {
      width: 30%;
      font-style: normal;
      font-weight: 500;
      // font-size: 20px;
      font-size: 1.25rem;
      line-height: 160%;
      color: #4d4d4d;
      margin-top: 70px;
    }
  }
  .brandConcept-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: url(@/assets/images/brandConcept_bg.jpg) no-repeat center center;
    background-size: cover;
  }
}
//牙科服務
.index-dentalServices {
  padding: 140px 0 0;
  width: 100%;
  // background: linear-gradient(180deg, #FFF1F0 0%, rgba(255, 241, 240, 0) 100%);
  // 
  &-in {
    background: linear-gradient(180deg, #FFF1F0 0%, rgba(255, 241, 240, 0) 100%);
    padding: 80px 0;
    margin-top: 30px;
    .dentalServices-box {
      display: flex;
      justify-content: space-between;
      &-in{
        cursor: pointer;
        width: 280px;
        height: 539px;
        background: #ffffff;
        box-shadow: 4px 4px 6px rgba(255, 163, 158, 0.25),
          inset 1px -1px 0px #ffccc7;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: calc(100% - 1px);
          margin-left: 2px;
        }
        h3 {
          font-weight: 700;
          // font-size: 30px;
          font-size: 1.87rem;
          line-height: 160%;
          color: #4D4D4D;
          text-indent: 15px;
          margin-top: 34px;
        }
        span {
          display: inline-block;
          text-indent: 15px;
          font-weight: 500;
          // font-size: 15px;
          font-size: 0.94rem;
          line-height: 160%;
          color: #4D4D4D;
          margin-top: 30px;
          position: relative;
          &::after {
            content: '';
            background: url(@/assets/images/icon_4.png) no-repeat;
            background-size: 100% 100%;
            width: 15px;
            height: 15px;
            display: block;
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            // width: ;
          }
        }
        &:hover{
          h3{
            color: #FFA09E;
          }
        }
      }
    }
  }
}
//醫生團隊
.index-doctorTeam{
  margin: 140px 0;
  &-t{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &-c{
    margin-top: 45px;
    .doctorTeamPage{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .doctorItem{
        cursor: pointer;
        width: 16.55%;
        mix-blend-mode: multiply;
        box-shadow: inset -1px -1px 0px #FFA39E;
        transition: all .5s;
        // transform: matrix(-1, 0, 0, 1, 0, 0);
        img{
          width: 100%;
        }
        &:hover{
          background: #FFDDDA;
        }
      }
    }
  }
  &-b{
    padding-top: 60px;
    display: flex;
    justify-content: center;
    &-in{
      width: 225px;
    }
  }
}
//個案分享
.index-caseSharing{
  padding: 35px 0;
  background: linear-gradient(180deg,rgba(255, 241, 240, 0) 0%,#FFF1F0 100%);
  &-in{
    margin-top: 45px;
    .in-top{
      display: flex;
    }
    .in-cen{
      display: flex;
      justify-content: space-between;
      margin-top: 120px;
    }
    .in-bottom{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 35px;
      span{
        cursor: pointer;
        font-style: normal;
        font-weight: 600;
        font-size: 2rem;
        line-height: 160%;
        color: #FFFFFF;
        text-align: center;
        display: inline-block;
        padding: 10px 70px;
        background: #FFCECB;
      }
    }
  }
}


@media screen and (max-width: 768px) {
  .indexPage {
    width: 100%;
    background: #fff;
    padding: 0 0 90px;
  }
  //品牌理念
  .index-brandConcept {
    min-height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    .brandConcept-left{
      padding-top: 0;
      .brandConcept-title {
        display: none;
      }
      .brandConceptBg{
        width: 100%;
        margin-top: 34px;
        display: block;
      }
      .content{
        width: 100%;
        padding: 30px 30px 0;
        margin-top: 0px;
        box-sizing: border-box;
        font-size: 1rem;
      }
    }
    .brandConcept-right{
      display: none;
    }
  }
  //醫生團隊
  .index-doctorTeam{
    margin: 90px 0;
    &-t{
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
    }
    &-c{
      margin-top: 20px;
      .doctorTeamPage{
        .doctorItem{
          width: 33.33%;
        }
      }
    }
    &-b{
      &-in{
        width: 134px;
      }
    }
  }
  //牙科服務
  .index-dentalServices {
    padding: 90px 0 0;
    &-in {
      background: linear-gradient(270deg, rgba(255, 204, 199, 0.7) 0.02%, rgba(255, 241, 240, 0) 62%);
      padding: 16px 30px;
      .dentalServices-box {
        flex-direction: column;
        &-in{
          width: 100%;
          height: 100px;
          margin-bottom: 10px;
          position: relative;
          img{
            position: absolute;
            right: 0;
            top: 0;
            width: 50%;
            // height: 100%;
            height: calc(100% - 1px);
            
          }
          h3{
            margin-top: 0;
            font-size: 1.25rem;
            margin-top: 15px;
          }
          span{
            margin-top: 20px;
            font-size: .625rem;
            &::after{
              width: 9px;
              height: 9px;
              right: -12px;
              top: 9px;
            }
          }
          &:last-child{
            margin-bottom: 0;
          }
          &::before{
            content: '';
            position: absolute;
            top: 0px;
            left: 50%;
            width: 50%;
            height: 99px;
            z-index: 2;
            background: linear-gradient(to right, #fff, rgba(0,0,0,0));
          }
        }
      }
    }
  }
  //個案分享
  .index-caseSharing{
    padding: 0;
    &-in{
      margin-top: 35px;
      .in-top{
        display: none;
      }
      .in-cen{
        margin-top: 34px;
        flex-direction: column;
      }
      .in-bottom{
        width: 100%;
        background: linear-gradient(0deg, rgba(255, 241, 240, 0.7) 41.54%, rgba(255, 241, 240, 0) 137.31%);
        padding: 20px 0;
        margin-top: 0;
        span{
          width: 137px;
          height: 40px;
          font-weight: 500;
          font-size: 1rem;
          background: #FFFFFF;
          line-height: 40px;
          padding: 0;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          color: #4D4D4D;
          transition: all .3s;
          &:hover{
            background: #FFDDDA;
            color: #FFFFFF;
            text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
          }
        }
      }
    }
  }
}
</style>
