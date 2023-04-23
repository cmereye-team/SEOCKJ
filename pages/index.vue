<script lang="ts" setup>
const { t } = useLang()
</script>

<template>
  <div class="indexPage">
    <!-- <PageHeader /> -->
    <!-- 最新消息 -->
    <div class="index-latestNews pageCon">
      <div class="title"></div>
    </div>
    <!-- 品牌理念 -->
    <div class="index-brandConcept">
      <div class="brandConcept-left pageCon">
        <div class="index_title">品牌理念</div>
        <div class="brandConcept-title">
          <span>希瑪愛康健品牌</span>
          <span>28年專注你的口腔健康</span>
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
            <img src="@/assets/images/dentalServices_bg01.jpg" alt="" />
            <h3>全科牙科</h3>
            <span>了解更多</span>
          </div>
          <div class="dentalServices-box-in">
            <img src="@/assets/images/dentalServices_bg02.jpg" alt="" />
            <h3>種植牙科</h3>
            <span>了解更多</span>
          </div>
          <div class="dentalServices-box-in">
            <img src="@/assets/images/dentalServices_bg03.jpg" alt="" />
            <h3>矯齒牙科</h3>
            <span>了解更多</span>
          </div>
          <div class="dentalServices-box-in">
            <img src="@/assets/images/dentalServices_bg04.jpg" alt="" />
            <h3>美容牙科</h3>
            <span>了解更多</span>
          </div>
          <div class="dentalServices-box-in">
            <img src="@/assets/images/dentalServices_bg05.jpg" alt="" />
            <h3>兒童牙科</h3>
            <span>了解更多</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 關於我們 -->
    <div class="index-aboutUs pageCon">
      <div>
        科技護航，安全放心
        優質的診療服務，在於醫生的專業素養，"以及匹配的醫療設備的先進程度。愛康健從口腔檢查到臨床手術，全程採購主流牙科設備，與時俱進開展醫生職業技能培訓。我們信奉技術，加進口設備，才能有好的診療功效。"
      </div>
    </div>
    <!-- 醫生團隊 -->
    <div class="index-doctorTeam pageCon">
      羅湖區、福田區、南山區、寶安區、龍華區
    </div>
    <!-- 個案分享 -->
    <div class="index-caseSharing">
      <div class="index_title pageCon">品牌理念</div>
      <div class="index-caseSharing-in pageCon">
        <div class="in-top">
          <div class="in-top-l">
            <!-- <video src=""></video> -->
            <img src="@/assets/images/aboutUs_gb.jpg" alt="">
          </div>
          <div class="in-top-r">
            <div class="name">梁家棋 Joyce</div>
            <div class="skill">種植牙齒療程</div>
            <div class="process">過程舒適無痛</div>
            <div class="text">人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。</div>
            <div class="bg_box"></div>
          </div>
        </div>
        <div class="in-cen">
          <div class="in-cen-in">
            <div class="in-cen-in-t">
              <img src="@/assets/images/Jason.jpg" alt="">
              <span class="text">安心、舒服、無痛</span>
              <div>
                <span class="name">陳裳 Jason</span>
                <span class="skill">種植牙齒療程 </span>
              </div>
            </div>
            <div class="in-cen-in-b">
              人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。
            </div>
          </div>
          <div class="in-cen-in">
            <div class="in-cen-in-t">
              <img src="@/assets/images/Jason.jpg" alt="">
              <span class="text">唔再怕同人合照喇 </span>
              <div>
                <span class="name">蔡梓琪 Mandy</span>
                <span class="skill">牙齒美白療程 </span>
              </div>
            </div>
            <div class="in-cen-in-b">
              人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。
            </div>
          </div>
        </div>
        <div class="in-bottom">
          <span>了解更多</span>
        </div>
      </div>
    </div>
    <!-- 聯絡我們 -->
    <div class="index-contactUs pageCon">
      深圳愛康健口腔醫院（羅湖） 醫院地址：深圳市羅湖區火車站大廈C區1-8樓
      營業時間：9:00-18:00 （節假日照常應診） 諮詢電話： 0755-61302632 交通路線:
      巴士路線
      羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號
      地鐵路線 地鐵1號線“羅湖站”C出口； 地鐵9號線“人民南站” A1出口
    </div>
    <!-- <PageFooter /> -->
  </div>
</template>

<style lang="scss" scoped>
.indexPage {
  width: 100%;
  background: #fff;
  padding: 50px 0;
}
.index_title {
  font-style: normal;
  position: relative;
  font-weight: 600;
  // font-size: 30px;
  font-size: 1.875rem;
  line-height: 150%;
  text-indent: 55px;
  color: #4d4d4d;
  background: url(@/assets/images/indexTitle_bg.png) no-repeat;
}
// .index-latestNews {
//   .title {
//   }
// }
//品牌理念
.index-brandConcept {
  width: 100%;
  height: 760px;
  // margin: 50px 0 0;
  box-sizing: border-box;
  position: relative;
  .brandConcept-left {
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
    // background-size: 100% auto;
    background-size: cover;
    // img {
    //   width: 100%;
    // }
  }
}
//牙科服務
.index-dentalServices {
  padding: 70px 0;
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
          width: 100%;
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
//個案分享
.index-caseSharing{
  padding: 35px 0;
  background: linear-gradient(180deg,rgba(255, 241, 240, 0) 0%,#FFF1F0 100%);
  &-in{
    margin-top: 45px;
    .in-top{
      display: flex;
      &-l{
        width: 55%;
        z-index: 1;
        img{
          width: 100%;
          height: 440px;
          background: #FFF1F0;
          box-shadow: 2px 4px 8px rgba(255, 120, 117, 0.35);
        }
      }
      &-r{
        flex: 1;
        padding: 45px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name{
          font-weight: 600;
          // font-size: 34px;
          font-size: 2.12rem;
          line-height: 160%;
          color: #4D4D4D;
          margin-top: 20px;
        }
        .skill{
          font-weight: 700;
          // font-size: 32px;
          font-size: 2rem;
          line-height: 160%;
          color: #FFA09E;
          text-indent: 40px;
        }
        .process{
          font-weight: 700;
          // font-size: 32px;
          font-size: 2rem;
          line-height: 160%;
          color: #FFCECB;
          margin-top: 70px;
          z-index: 1;
        }
        .text{
          font-weight: 500;
          // font-size: 24px;
          font-size: 1.5rem;
          line-height: 160%;
          color: #4D4D4D;
          z-index: 1;
        }
        .bg_box{
          background: #fff;
          position: absolute;
          width: 716px;
          height: 252px;
          right: 0;
          bottom: -30px;
          z-index: 0;
        }
      }
    }
    .in-cen{
      display: flex;
      justify-content: space-between;
      margin-top: 120px;
      &-in{
        width: 716px;
        height: 252px;
        background: #fff;
        padding: 40px;
        box-sizing: border-box;
        &-t{
          width: 100%;
          position: relative;
          img{
            margin: 0 auto;
            margin-top: -120px;
            border-radius: 50%;
            border: 8px solid #fff;
          }
          .text{
            font-weight: 700;
            // font-size: 28px;
            font-size: 1.75rem;
            line-height: 160%;
            color: #FFCECB;
            display: block;
            margin-top: -30px;
          }
          &>div{
            // float: right;
            position: absolute;
            right: -15px;
            top: 100px;
            .name{
              font-weight: 600;
              // font-size: 30px;
              font-size: 1.87rem;
              line-height: 160%;
              color: #4D4D4D;
              display: block;
            }
            .skill{
              font-weight: 700;
              // font-size: 28px;
              font-size: 1.75rem;
              line-height: 160%;
              color: #FFA09E;
              text-indent: 40px;
              display: inline-block;
            }
          }
        }
        &-b{
          width: 100%;
          font-style: normal;
          font-weight: 500;
          // font-size: 20px;
          font-size: 1.25rem;
          line-height: 160%;
          color: #4D4D4D;
          margin-top: 10px;
        }
      }   
    }
    .in-bottom{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 35px;
      span{
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
</style>
