<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('healthcare')
useHead({
  title: "兒童牙科"
})

const list = [
  {
    id: 0,
    title: '植牙過程'
  },
  {
    id: 1,
    title: '固定式牙橋過程'
  }
]
let currentIndex = ref(0)
const handleClick = (index:number) => {
  // console.log(index);
  currentIndex.value = index
  // console.log('测试===========', currentIndex);
}
</script>

<template>
  <div>
    <PageHeader /> 
    <div class="step comContent section healthcarePage">
      <div class="comContent meun main-container pageCon">
        <p><nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link></p>
        <p style="margin:0 0.5vw">></p>
        <p style="color:#57B2F3">牙科服務</p>
        <p style="margin:0 0.5vw">></p>
        <p style="color:#57B2F3">兒童牙科保健及治療</p>
      </div>
      <div class="step pageCon">
        <div class="list">
          <ul class="step_list items-center main-container">
            <li>
              <img src="https://static.cmereye.com/static/lkximg/image/healthcare/apple.png" alt="">
              <div class="list_dis">
                <strong>兒童牙科保健及治療</strong>
                <ul>
                  <li>作為家長的你，可能好多人都會時刻關注自己小朋友的身體健康，但在小朋友的口腔健康上，大多數人可能都會認為等待小朋友就讀小一時，參加由政府提供的牙科保健就已經足夠。其實等待小朋友6歲才開始檢查牙齒，可能已經太遲。因為好多小朋友都喜歡食糖或甜食，又不喜歡刷牙，大大增加患上蛀牙的風險。</li>
                  <li>小朋友擁有第一隻牙開始，就可以定期檢查牙齒。定期進行牙科保健，從小了解保持口腔健康的知識和重要性，家長們亦可以緊貼小朋友的牙齒發育進度，及早發現兒童牙齒的潛在問題，作出針對性治療。</li>
                  <li>除了身體健康，小朋友的口腔健康同樣重要，家長可定期找合資格牙醫為孩子進行牙科檢查及諮詢。</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="video main-container">
           <div class="cons-box">
                <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote.png" alt="">
                <div class="porcelain—con">
                  <p>兒童定期牙科保健的重要性</p>
                </div>
                <div class="h"></div>
                <div class="porcelain—cons">
                  <div class="porcelain">
                    <p>及早教育小朋友保護牙齒都好,</p> &nbsp;  
                    <p style="color: #9BD0F5; font-weight:600">預防蛀牙及其他口腔疾病</p>
                  </div>
                  <br>
                  <div class="porcelain">
                    <p>緊貼小朋友牙齒發育進度,</p> &nbsp;  
                    <p style="color: #9BD0F5; font-weight:600">及早作出針對性治療</p>
                  </div>
                  <br>
                  <div class="porcelain">
                    <p>把握小朋友矯齒黃金期,</p> &nbsp;  
                    <p style="color: #9BD0F5; font-weight:600">大大提高改善牙齒排列、面部輪廓、咬字發音等問題的成功率</p>
                  </div>
                </div>
                <div  class="quote">
                  <img src="https://static.cmereye.com/static/lkximg/image/periodontosis/quote2.png" alt="">
                </div>

              </div>
        </div>
      </div>
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
.healthcarePage{
  background: #fff;
  padding: 140px 0;
}
.texts {
  text-align: center;
  margin-top: 2vw;

  h2 {
    font-weight: 500;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

.serve_con {
  color: #79828D;
  margin-top: 2vw;
  // margin-bottom: 2vw;
  font-size: 18px;
}

//pc
@media only screen and (min-width: 760px) {
  .h{
    width: 4%;
    border-bottom: 2px solid #9BD0F5;
    text-align: center;
    margin: 0 auto;
  }
   .porcelain—con{
    //  display: flex;
    text-align:center;
    p{
      padding: 1vw 0;
      color:#57B2F3;
      font-weight: 500;
      font-size: 24px;
    }
  }
  .porcelain—cons{
    padding: 2vw 5vw;
    .porcelain{
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }
    p{
      color:#9BA5B1;

    }
  }
  .quote{
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }
  .icons{
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }
  .newsty {
    background: #ECF7FC;
    border-radius: 0 0 17px 17px !important;

  }

  .nofi {
    margin: 5vw 0vw !important;
  }

  .table-box {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 10vw;
  }

  .lists {
    display: flex;
    margin: 0 18vw;
    margin-top: 5vw;
  }

  .tablesd {
    margin-left: 4vw;
    color: #57B2F3;
    background-color: #fff;
    border: 3px solid #9BD0F5;
    border-radius: 20px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 28%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: none;
      text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0 4.5vw;
    }

    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 17px 17px 0 0;
    }

    .thd {
      color: #57B2F3;
      background-color: #ECF7FC;
      border-radius: 20px 20px 0 0;
    }
  }

  .tablesed {
    margin-left: 4vw;
    color: #57B2F3;
    background-color: #fff;
    border: 3px solid #9BD0F5;
    border-radius: 20px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 28%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: none;
      text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0 4.5vw;
    }

    th {
      text-align: center;
      color: #fff;
      background-color: #57B2F3;
      border-radius: 17px 17px 0 0;
    }

    .thd {
      color: #57B2F3;
      background-color: #ECF7FC;
      border-radius: 20px 20px 0 0;
    }
  }

  .list_disd {
    li {
      font-size: 16px;
      color: #79828D;
      margin-left: 2vw;
    }

    strong {
      color: #79828D;
      font-size: 24px;
      font-weight: 500;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 0.8vw solid #9BD0F5;
        height: 3vw;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .list_cons {
    margin: 2vw 0;
  }

  .video {
    // background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin: 132px auto;
    
  }

  .videos {
    background-image: linear-gradient(to bottom, #fff 0%, #ECF7FC 0);
    // background-color: #ECF7FC;
    margin: 0 8vw;

  }

  .video_con {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // background-image: linear-gradient(to bottom, #fff 65%, #ECF7FC 0);
  }

  .left {
    padding: 2vw 6vw 2vw 2vw !important;

  }

  .right {
    // padding-left: 8vw !important;
    padding: 2vw 0 2vw 0vw !important;
  }

  .contents {
    background-color: #fff;
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    box-shadow: 13px 15px 0 #A2D4F7;
    border-radius: 10px;

    .gcond {
      display: flex;
      // margin: 0 auto;
      width: 78%;
      .gcon{
        // margin: 0 auto;
      }
    }

    .content {
      padding: 1.5vw 1vw;
      display: flex;
      align-items: center;

    }

    p {
      color: #79828D;
      font-size: 18px;
      padding-left: 1vw;
      margin-bottom: 0rem;
      text-align: left;
    }
  }

  ul {
    margin-bottom: -4rem;
  }

  .active {
    float: inherit;
    border: 10px solid hsla(204, 68%, 65%, 0.3) !important;
    // background-clip:content-box;
    background-clip: padding-box;
  }

  .Advantage {
    display: flex;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);

    img {
      width: 66%;
    }

  }

  ::v-deep .Advanbutton {
    display: flex;
    position: absolute;
    bottom: 5rem;

    ul {
      display: flex;

      li {
        padding: 2vw;
      }

      .guoc {
        border: 10px solid rgba(255, 41, 41, 0);
        background-color: rgba(255, 255, 255, 0.8);
        height: 100px;
        /* line-height: 94px; */
        align-self: center;
        width: 100px;
        display: flex;
        border-radius: 100%;
        margin: 1px 4vw;
        text-align: center;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;

        p {
          display: block;
          color: #57B2F3;
          font-weight: bold;
          margin-bottom: 0rem;
          // font-size: 1.2rem;
        }
      }
    }
  }

  .list_con {
    margin-top: 9vw;
    width: 41vw;
  }

  .list_dis {
    margin-top: 198px;
    // width: 41vw;
    // padding-left: 5vw;

    ul {
      padding-top: 1vw;
      list-style-type: none;
      width: 80%;
      li {
        color: #9BA5B1;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 17.5px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
      }
    }
  }

  .meun {
    padding-left: 146px;
    // margin-top: 1vw;
    display: flex;
    font-size: 16px;
  }

  .step_list {
    // margin: 0 20vw;

    img {
      padding: 0 20px;
      width: 414px;
      height: 272px;
    }

    li {
      text-align: left;
      color: #fff;
      // padding-left: 2vw;
      margin: 30px 11px;
      display: flex;

      p {
        padding-left: 40px;
        padding-top: 14px;
        color: #9BA5B1;
        display: flex;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 17.5px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
      }

      strong {
        padding-left: 27px;
        color: #9BA5B1;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height */

        letter-spacing: 0.1em;

        &:before {
          content: "";
          margin-left: 15px;
          padding-left: 15px;
          border-left: 11px solid #9BD0F5;
          height: 35px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .list {
    height: 582px;
    margin-top: 82px;
    background-image: linear-gradient(to bottom, #fff 21%, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 760px) {
  .cons-box{
    margin: 2vw 5.2vw;
  }
    .h{
    width: 25%;
    border-bottom: 3px solid #9BD0F5;
    text-align: center;
    margin: 0 auto;
  }
   .porcelain—con{
    //  display: flex;
    text-align:center;
    p{
      padding: 1vw 0;
      color:#57B2F3;
      font-weight: 500;
      font-size: 24px;
    }
  }
  .porcelain—cons{
    padding: 2vw 12vw;
    .porcelain{
      // display: flex;
      justify-content: center;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      margin-top: 5vw;

    }
    p{
      color:#9BA5B1;
      margin: -9px;
    }
  }
  .quote{
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }
  .pcshow-list{
    display: none !important;
  }
  .nofitext{
    p{
      color: #9BA5B1 !important;
      font-size: 14px !important;
    }
  }
  .video {
    // background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin-top: 132px;
  }
  .list {
    text-align: center;
    margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
  .contents {
    background-color: #fff;
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    box-shadow: 13px 15px 0 #A2D4F7;
    border-radius: 10px;

    .gcond {
      // display: flex;
      margin: 0 auto;
      width: 100%;
    }

    .content {
      padding: 5vw 1vw;
      display: flex;
      align-items: center;

    }

    p {
      color: #79828D;
      font-size: 18px;
      padding-left: 1vw;
      margin-bottom: 0rem;
      text-align: left;
    }
  }

  ul {
    margin-bottom: -4rem;
  }

  .active {
    float: inherit;
    border: 10px solid hsla(204, 68%, 65%, 0.3) !important;
    // background-clip:content-box;
    background-clip: padding-box;
  }

  .Advantage {
    display: flex;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);

    img {
      width: 66%;
    }

  }

  ::v-deep .Advanbutton {
    display: flex;
    position: absolute;
    bottom: 5rem;

    ul {
      display: flex;

      li {
        padding: 2vw;
      }

      .guoc {
        border: 10px solid rgba(255, 41, 41, 0);
        background-color: rgba(255, 255, 255, 0.8);
        height: 100px;
        /* line-height: 94px; */
        align-self: center;
        width: 100px;
        display: flex;
        border-radius: 100%;
        margin: 1px 4vw;
        text-align: center;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;

        p {
          display: block;
          color: #57B2F3;
          font-weight: bold;
          margin-bottom: 0rem;
          // font-size: 1.2rem;
        }
      }
    }
  }

  .list_con {
    margin-top: 9vw;
    padding-left: 5vw;
    text-align: left;
  }

  .list_dis {
    margin-top: 9vw;
    // width: 41vw;
    // padding-left: 5vw;
    text-align: left;
    padding-bottom: 24vw;
    // padding-right: 2vw;
    ul {
      padding-top: 1vw;
      list-style-type: none;

      li {
        color: #9BA5B1;
        margin-top: 4vw;
      }
    }
  }
  .list_disd {
    li {
      font-size: 16px;
      color: #79828D;
      margin-left: 2vw;

    }

    strong {
      color: #79828D;
      font-size: 24px;
      font-weight: 500;

      &:before {
        content: "";
        margin-left: 15px;
        padding-left: 15px;
        border-left: 1.8vw solid #9BD0F5;
        height: 7vw;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .list_cons {
    margin: 2vw 0;
  }

  .icons{
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }
  .newsty {
    background: #ECF7FC;
    border-radius: 0 0 17px 17px !important;

  }

  .nofi {
    margin: 5vw 0vw !important;
  }

  .table-box {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 10vw;
  }

  .lists {
    display: flex;
    margin: 0 6vw;
    margin-top: 10vw;
  }
  .meun {
    padding-left: 6vw;
    display: flex;
  }

  ul {
    padding: 0;

    img {
      width: 90%;

    }
  }

  li {
    // background-image: linear-gradient(to bottom, #fff 30%, #ECF7FC 0);
  }

  p {
   padding: 1vw 1vw;
    color: #9BA5B1;
  }

  strong {
    padding-top: 2vw;
    // padding-left: 4vw;
    color: #9BA5B1;
  }

  strong:before {
    content: "";
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1.8vw solid #9BD0F5;
    height: 7vw;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>