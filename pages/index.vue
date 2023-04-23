<script lang="ts" setup>
const { t } = useLang()
const doctorTeamTabDatas = [
  '羅湖區','福田區','南山區','寶安區','龍華區'
]
const doctorLists = ['','','','','','','','','','','','']
</script>

<template>
  <div class="indexPage">
    <!-- <PageHeader /> -->
    <!-- 最新消息 -->
    <div class="index-latestNews">
      <div class="index_title pageCon">最新消息</div>
      <div class="index-latestNews-in pageCon">
        <div class="index-latestNews-in-l">
          <img src="@/assets/images/banner_bg.jpg" alt="">
        </div>
        <div class="index-latestNews-in-r">
          <img src="@/assets/images/icon_10.png" alt="">
          <div class="btn">
            <span>了解更多</span>
          </div>
          <div class="point">
            <img src="@/assets/images/icon_09.png" alt="">
          </div>
        </div>
      </div>
    </div>
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
    <div class="index-aboutUs">
      <div class="index_title pageCon">關於我們</div>
      <div class="index-aboutUs-in pageCon">
        <div class="index-aboutUs-in-l">
          <img src="@/assets/images/aboutUs_gb.jpg" alt="">
        </div>
        <div class="index-aboutUs-in-r">
          <div>科技護航，安全放心</div>
          <span>優質的診療服務，在於醫生的專業素養，</span>
          <span>"以及匹配的醫療設備的先進程度。愛康健從口腔檢查到臨床手術，全程採購主流牙科設備，與時俱進開展醫生職業技能培訓。我們信奉技術，加進口設備，才能有好的診療功效。"</span>
          <img src="@/assets/images/icon_09.png" alt="">
        </div>
      </div>
    </div>
    <!-- 醫生團隊 -->
    <div class="index-doctorTeam">
      <div class="index-doctorTeam-t pageCon">
        <div class="index_title">醫生團隊</div>
        <div class="doctorTeamTab">
          <div v-for=" (doctorTeamTabItem,doctorTeamTabIndex) in doctorTeamTabDatas" :key="doctorTeamTabIndex">{{doctorTeamTabItem}}</div>
        </div>
      </div>
      <div class="index-doctorTeam-c pageCon">
        <div class="doctorTeamPage">
          <div v-for="(doctorItem,doctorIndex) in doctorLists" :key="doctorIndex">
            <img src="@/assets/images/doctor_01.png" alt="">
          </div>
        </div>
      </div>
      <div class="index-doctorTeam-b pageCon">
        <img src="@/assets/images/icon_09.png" alt="">
      </div>
    </div>
    <!-- 個案分享 -->
    <div class="index-caseSharing">
      <div class="index_title pageCon">個案分享</div>
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
      <div class="index_title">聯絡我們</div>
      <div class="index-contactUs-in ">
        <div class="index-contactUs-in-l">
          <h3>深圳愛康健口腔醫院（羅湖）</h3>
          <span>醫院地址：深圳市羅湖區火車站大廈C區1-8樓</span>
          <span>營業時間：9:00-18:00 （節假日照常應診）</span>
          <span>諮詢電話： 0755-61302632 交通路線:</span>
          <div class="contactUsAddressBox">
            <div class="in-l">
              <img src="@/assets/images/icon_5.png" alt="">
            </div>
            <div class="in-c">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29481.217675310527!2d114.02476072311399!3d22.535970303249012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f41aefc37f09%3A0x4782830b3613ad88!2z54ix5bq35YGl6b2_56eR!5e0!3m2!1szh-CN!2ssg!4v1682218578472!5m2!1szh-CN!2ssg" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="in-r">
              <img src="@/assets/images/icon_5.png" alt="">
            </div>
          </div>
          <span>巴士路線</span>
          <span>羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號</span>
          <span>地鐵路線</span>
          <span>地鐵1號線“羅湖站”C出口； 地鐵9號線“人民南站” A1出口</span>
        </div>
        <div class="index-contactUs-in-r">
          <div class="in-l">
            <img src="@/assets/images/icon_5.png" alt="">
          </div>
          <div class="in-c">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29481.217675310527!2d114.02476072311399!3d22.535970303249012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f41aefc37f09%3A0x4782830b3613ad88!2z54ix5bq35YGl6b2_56eR!5e0!3m2!1szh-CN!2ssg!4v1682218578472!5m2!1szh-CN!2ssg" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="in-r">
            <img src="@/assets/images/icon_5.png" alt="">
          </div>
          <!-- <img src="" alt=""> -->
        </div>
      </div>
    </div>
    <!-- <PageFooter /> -->
  </div>
</template>

<style lang="scss" scoped>
.indexPage {
  width: 100%;
  background: #fff;
  // padding: 50px 0;
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
//最新消息
.index-latestNews {
  padding: 90px 0 143px;
  &-in{
    margin-top: 45px;
    // height: 550px;
    background: #FFDDDA;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    &-l{
      width: 58%;
      // height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-r{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &>img{
        margin: 80px 0;
        width: 490px;
      }
      .btn{
        width: 274px;
        height: 80px;
        line-height: 80px;
        background: #FFCECB;
        box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
        font-weight: 600;
        // font-size: 32px;
        font-size: 2rem;
        // line-height: 160%;
        text-align: center;
        color: #FFFFFF;
      }
      .point{
        width: 200px;
        margin-top: 30px;
      }
    }
  }
}
//品牌理念
.index-brandConcept {
  width: 100%;
  min-height: 760px;
  // margin: 50px 0 0;
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
    // background-size: 100% auto;
    background-size: cover;
    // img {
    //   width: 100%;
    // }
  }
}
//牙科服務
.index-dentalServices {
  padding: 140px 0;
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
//關於我們
.index-aboutUs{
  &-in{
    display: flex;
    margin-top: 45px;
    &-l{
      width: 55%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-r{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      padding-left: 100px;
      div{
        font-weight: 700;
        font-size: 28px;
        line-height: 160%;
        color: #FFA09E;
        margin-bottom: 70px;
      }
      span{
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: #4D4D4D;
      }
      img{
        width: 200px;
        margin-top: 70px;
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
    .doctorTeamTab{
      display: flex;
      border-radius: 5px;
      &>div{
        padding: 10px 20px 5px;
        cursor: pointer;
        background: #FFDDDA;
        font-weight: 500;
        // font-size: 21px;
        font-size: 1.31rem;
        // line-height: 160%;
        color: #fff;
        text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
        margin-left: 1px;
        &:first-child{
          border-radius: 5px 0 0 5px;
        }
        &:last-child{
          border-radius: 0 5px 5px 0;
        }
        &:hover{
          background: #FFA09E;
        }
      }
    }
  }
  &-c{
    margin-top: 45px;
    .doctorTeamPage{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &>div{
        width: 16.55%;
        mix-blend-mode: multiply;
        box-shadow: inset -1px -1px 0px #FFA39E;
        // transform: matrix(-1, 0, 0, 1, 0, 0);
        img{
          width: 100%;
        }
      }
    }
  }
  &-b{
    img{
      margin: 60px auto;
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
            margin: -120px auto 0;
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
//聯絡我們
.index-contactUs{
  padding: 140px 0;
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
        &:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #FFCECB transparent transparent transparent;
          position: absolute;
          right: -20px;
          top: 20px;
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


@media screen and (max-width: 768px) {
  .indexPage {
    width: 100%;
    background: #fff;
    // padding: 50px 0;
    padding: 0;
  }
  .index_title {
    width: calc(100% - 30px);
    font-size: 1.25rem;
    background-size: auto 100%;
    text-indent: 40px;
    margin-left: 30px;
  }
  //最新消息
  .index-latestNews {
    padding: 90px 0 90px;
    &-in{
      width: calc(100% - 60px);
      box-sizing: border-box;
      height: auto;
      flex-direction: column;
      &-l{
        width: 100%;
      }
      &-r{
        padding-bottom: 24px;
        &>img{
          margin: 18px 0;
          width: 230px;
        }
        .btn{
          width: 137px;
          height: 40px;
          line-height: 40px;
          font-size: 1rem;
        }
      }
    }
  }
  //品牌理念
  .index-brandConcept {
    min-height: auto;
    display: flex;
    flex-direction: column;
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
      .doctorTeamTab{
        margin-top: 34px;
        margin-left: 30px;
        &>div{
          font-size: 1rem;
          padding: 5px 10px;
        }
      }
    }
    &-c{
      margin-top: 20px;
      .doctorTeamPage{
        &>div{
          width: 33.33%;
        }
      }
    }
    &-b{
      img{
        margin: 20px auto;
      }
    }
  }
  //關於我們
  .index-aboutUs{
    &-in{
      flex-direction: column;
      &-l{
        width: 100%;
      }
      &-r{
        padding: 10px 30px;
        align-items: center;
        div{
          margin-bottom: 0;
          font-weight: 600;
          font-size: 1.125rem;
        }
        span{
          text-align: center;
          font-size: 1rem;
        }
        img{
          margin-top: 30px;
        }
      }
    }
  }
  //牙科服務
  .index-dentalServices {
    padding: 90px 0;
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
            width: auto;
            height: 100%;
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
        &-in{
          width: 100%;
          padding: 30px;
          height: auto;
          &-t{
            width: 100%;
            height: 125px;
            img{
              width: 125px;
              margin: 0;
              border-radius: 50%;
              border: none;
              display: inline-block;
            }
            .text{
              font-weight: 600;
              font-size: 1.25rem;
              margin-top: -30px;
              float: right;
              margin-top: 90px;
            }
            &>div{
              // position: static;
              right: 0;
              top: 30px;
              .name{
                font-size: 1.25rem;
              }
              .skill{
                font-size: 1.125rem;
              }
            }
          }
          &-b{
            width: 100%;
            font-size: 1rem;
          }
          &:first-child{
            background: linear-gradient(270deg, rgba(255, 241, 240, 0) 0.02%, rgba(255, 204, 199, 0.7) 90%);
          }
          &:last-child{
            background: linear-gradient(270deg, rgba(255, 204, 199, 0.7) 0.02%, rgba(255, 241, 240, 0) 62%);
          }
        }
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
        }
      }
    }
  }
  //聯絡我們
  .index-contactUs{
    padding: 90px 0;
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
          height: 330px;
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
        }
      }
      &-r{
        display: none;
      }
    }
  }
}
</style>
