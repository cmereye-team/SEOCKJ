<script lang="ts" setup>
import { Pagination } from 'swiper';
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: "矯齒牙科"
})
let judgeActive = ref(1)
const drawBegin = (e:number) => {
  if (e === 1) {
    judgeActive.value = 2
  } else {
    judgeActive.value = 1
  }
}

// let problemActive = ref(1)
// let openBoxHeight = ref(0)
// const handleProblem = (e:any,_idx:number) => {
//   if(e.target.className.includes('activeBox')) return
//   if(e.target.className === 'problem-list-in-t'){
//     openBoxHeight.value = e.target.nextElementSibling.clientHeight
//   }else if(e.target.className === 'problemBox-Q-r'){
//     openBoxHeight.value = e.target.parentElement.nextElementSibling.clientHeight 
//   }else{
//     openBoxHeight.value = e.target.parentElement.parentElement.nextElementSibling.clientHeight 
//   }
//   problemActive.value = _idx
// }
// const problemList = ref(null)
// onMounted(()=>{
//   openBoxHeight.value = problemList.value[0].children[1].clientHeight || 0;
// })

</script>


<template>
<div>
  <PageHeader /> 
  <div class="step comContent section orthodonticsPage">
    <div class="comContent meun main-container pageCon">
      <p>
        <nuxt-link style="color: #000; text-decoration: none;" to="/">首頁</nuxt-link>
      </p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">牙科服務</p>
      <p style="margin:0 0.5vw">></p>
      <p style="color:#57B2F3">矯齒</p>
    </div>
    <div class="step">
      <div class="list">
        <ul class="step_list items-center main-container pageCon">
          <div class="jiaochi">
            <img src="https://static.cmereye.com/static/lkximg/image/toothStraighten/apple.png" alt="">
            <div class="list_con">
              <strong>矯齒（箍牙）</strong>
              <p>
                矯齒（箍牙）治療除了能矯正不整齊排列的牙齒，改善外觀外，更能有助減低患上各種牙齒問題的風險。
              </p>
            </div>
            <div class="list_dis">
              <strong style="padding:0px;">矯齒（箍牙）目的</strong>
              <ul>
                <li>因先天或其他因素引致上顎或下顎較為突出，影響臉型，透過矯齒可改善臉部與牙齒的平衡</li>
                <li>當出現上下顎咬合不正的情況，容易導致蛀牙、影響進食及口腔健康，矯齒能有效改善情況</li>
                <li>牙齒排列不整，例如前後重疊、高低不等，影響進食、發音、清潔等，更容易引致牙周病等情況，矯齒能將位置對齊，減少對口腔健康的影響</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
      <div class="video main-container pageCon">
        <div class="flex flex-col justify-center texts">
          <h2>矯齒（箍牙）過程</h2>
          <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
          <div class="contents">
            <div class="gcond">
              <div class="gcon">
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num1.svg" height="50vw" width="50vw"
                    alt="">
                  <p>醫生會先進行檢查及評估，確認矯齒的需要</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num2.svg" height="50vw" width="50vw"
                    alt="">
                  <p>拍攝牙齒外觀照片，包括全口腔及側面X光照片，以印製牙模</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/3.svg" height="50vw" width="50vw"
                    alt="">
                  <p>醫生講解情況及治療方案</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num4.svg" height="50vw" width="50vw"
                    alt="">
                  <p>配戴牙箍及定期覆診</p>
                </div>
                <div class="content ">
                  <img src="https://static.cmereye.com/static/lkximg/image/implant/num5.svg" height="50vw" width="50vw"
                    alt="">
                  <p>矯齒完成後，需定期覆診，晚上佩戴固定器，防止牙齒移位</p>
                </div>
                <div class="content ">
                  <p>*不建議牙齒還沒完成發育、智慧齒還沒長出的人士接受牙齒矯正治療</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white py-5 pb-0 py-xs-2  bacsty">
          <div class="flex flex-col justify-center texts">
            <h2>想箍牙要點揀？</h2>
            <img class="icons" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
            <p>箍牙主要可分為三類，固定式外箍、內箍及透明配戴式牙箍。矯正時間因人而異，一般為一年至一年半左右，複雜個案需要兩年或以上。心思思想箍牙，但你又知唔知道各種牙箍的分別？</p>
          </div>
          <div class="swiperWrap mbBox">
            <swiper :pagination="{ clickable: true }" :modules="[Pagination]" slidesPerView="1.1" class="swiper-wrapper">
              <swiper-slide class="swiper-slide box">
                <div class="table-box " id="move_div">
                  <table class="tables">
                    <tr>
                      <td>原理</td>
                    </tr>
                    <tr style=" background: #ECF7FC">
                      <td>物料</td>
                    </tr>
                    <tr>
                      <td>拆卸</td>
                    </tr>
                    <tr style=" background: #ECF7FC; ">
                      <td>美觀</td>
                    </tr>
                    <tr>
                      <td>清潔</td>
                    </tr>
                    <tr style=" background: #ECF7FC; ">
                      <td>成效</td>
                    </tr>
                    <tr>
                      <td>其他</td>
                    </tr>
                  </table>
                  <table class="tablesd">
                    <tr style="height: 2vw;">
                      <th>固定式外箍/內箍</th>
                    </tr>
                    <tr>
                      <td>
                        <ul class="teshu">
                          <li>將矯正器黏貼在牙齒表面，以鋼絲連上牙釘，施加外力移動牙齒</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC;">
                      <td>
                        <ul>
                          <li>金屬/ 搪瓷/ 樹脂</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>不能自行拆卸</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC ">
                      <td>
                        <ul>
                          <li>•牙箍固定於牙齒外側會外露（固定式外箍）</li>
                          <li>•牙箍固定於牙齒內側，較難察覺（固定式內箍）</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>需以工具輔助清潔矯正器與鋼絲死角</li>
                        </ul>
                      </td>
                    </tr>
                    <tr style=" background: #ECF7FC ">
                      <td>
                        <ul>
                          <li>比較適合齒列嚴重不正的人士</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>牙箍可能會引起不適</li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide box swiper-slideB">
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>透明配戴式牙箍</th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>運用電腦模擬牙齒移動位置，按牙齒移動速度，定期更換度身訂造牙箍，慢慢移動牙齒</li>

                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>醫學塑膠</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>能隨時戴上及脫下</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>透明牙箍，近乎隱形，極難察覺</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>拆卸後獨立清洗</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>適合輕度或中度齒列不正的人士</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>隱形牙套表面平滑</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="boxs pcBox">
          <div class="box">
            <div class="card" @click="drawBegin(judgeActive)">
              <div class="table-box">
                <table class="tables">
                  <tr>
                    <td>原理</td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>物料</td>
                  </tr>
                  <tr>
                    <td>拆卸</td>
                  </tr>
                  <tr style=" background: #ECF7FC; ">
                    <td>美觀</td>
                  </tr>
                  <tr>
                    <td>清潔</td>
                  </tr>
                  <tr style=" background: #ECF7FC; ">
                    <td>成效</td>
                  </tr>
                  <tr>
                    <td>其他</td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>固定式外箍/內箍</th>
                  </tr>
                  <tr>
                    <td>
                      <ul class="teshu">
                        <li>將矯正器黏貼在牙齒表面，以鋼絲連上牙釘，施加外力移動牙齒</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC;">
                    <td>
                      <ul>
                        <li>金屬/ 搪瓷/ 樹脂</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>不能自行拆卸</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC ">
                    <td>
                      <ul>
                        <li>•牙箍固定於牙齒外側會外露（固定式外箍）</li>
                        <li>•牙箍固定於牙齒內側，較難察覺（固定式內箍）</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>需以工具輔助清潔矯正器與鋼絲死角</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC ">
                    <td>
                      <ul>
                        <li>比較適合齒列嚴重不正的人士</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>牙箍可能會引起不適</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                <table class="tablesd">
                  <tr style="height: 2vw;">
                    <th>透明配戴式牙箍</th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>運用電腦模擬牙齒移動位置，按牙齒移動速度，定期更換度身訂造牙箍，慢慢移動牙齒</li>

                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul>
                        <li>醫學塑膠</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>能隨時戴上及脫下</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>透明牙箍，近乎隱形，極難察覺</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>拆卸後獨立清洗</li>
                      </ul>
                    </td>
                  </tr>
                  <tr style=" background: #ECF7FC">
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>適合輕度或中度齒列不正的人士</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul style="margin: 0.6vw 0;">
                        <li>隱形牙套表面平滑</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="problem pageCon">
      <div class="problem-list">
        <div class="problem-list-in" v-for="item in 3" ref="problemList" :key="item">
          <div :class="['problem-list-in-t',{'activeBox': problemActive === item}]" @click="handleProblem($event,item)">
            <div class="problemBox-Q-l">
              <div class="icon_Q">Q</div>
              <div class="context">牙齒美白的效果能維持多久？</div>
            </div>
            <div class="problemBox-Q-r" v-show="problemActive !== item">图标</div>
          </div>
          <div class="problem-list-in-b">
            <div class="problemBox-A-l">A</div>
            <div class="problemBox-A-r">
              接受牙齒美白後，效果最長可維持3年。如有吸煙習慣、飲用過量紅酒，茶或咖啡等習慣亦容易令色素積聚，大大縮短美白能維持的時間。
            </div>
          </div>
          <div class="problem-list-in-c" :style="{height: (problemActive === item ? `${openBoxHeight}px`: 0)}">
            <div class="problemBox-A-l">A</div>
            <div class="problemBox-A-r">
              接受牙齒美白後，效果最長可維持3年。如有吸煙習慣、飲用過量紅酒，茶或咖啡等習慣亦容易令色素積聚，大大縮短美白能維持的時間。
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.problem{
  &-list{
    width: 70%;
    margin: 100px auto 0;
    border-top: 1px solid #ebeef5;
    &-in{
      border-bottom: 1px solid #ebeef5;
      position: relative;
      &-t{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        height: 80px;
        align-items: center;
        padding: 0 30px;
        box-sizing: border-box;
        .problemBox-Q-l{
          display: flex;
          align-items: center;
          .icon_Q{
            font-size: 35px;
            font-weight: 600;
            display: block;
            transform: skewX(-10deg);
            color: #a2d4f7;
            margin-right: 10px;
            font-family: '微软雅黑';
            margin-top: -10px;
          }
          .context{
            margin-left: 10px;
            font-size: 20px;
          }
        }
        &.activeBox{
          background: #ecf7fc;
        }
      }
      &-b,&-c{
        display: flex;
        // height: 0;
        // padding: 30px;
        overflow: hidden;
        transition: all .3s;
        .problemBox-A-l{
          font-size: 35px;
          font-weight: 600;
          transform: skewX(-10deg);
          color: #FFCECB;
          margin-right: 10px;
          font-family: '微软雅黑';
          margin-top: 15px;
          margin-left: 30px;
        }
        .problemBox-A-r{
          margin-left: 10px;
          margin-top: 30px;
          font-size: 20px;
          padding-bottom: 30px;
        }
      }
      &-b{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: -1;
      }
    }
  }
}
.orthodonticsPage{
  background: #fff;
  padding: 140px 0;
}
.texts {
  text-align: center;
  margin-top: 2vw;
  h2 {
    font-weight: 500;
    font-size: 35px;
    color: #79828D;
    margin-bottom: 0vw;
  }
  &>img {
    // text-align: center;
    margin: 10px auto;
    width: 50px;
  }
}
.bacsty {
  background-color: #ECF7FC !important;
  padding-top: 50px;
}
//pc
@media only screen and (min-width: 760px) {
  .tables {
    color: #57B2F3;
    background-color: #fff;
    border: 2px solid #9BD0F5;
    border-radius: 10px;
    border-collapse: separate;
    border-spacing: 0;
    border-spacing: 1;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;
    word-wrap: break-word;
    word-break: break-all;
    width: 6vw;
    tr {
      height: 6vw;
      text-align: center;
    }
  }
  .icons {
    margin-bottom: 40px;
    margin-top: 10px;
  }
  .table-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 5vw;
  }
  .lists {
    display: flex;
    margin: 0 8vw;
    margin-top: 3vw;
  }
  .card {
    border: 0;
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
    width: 23%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;
    tr {
      height: 6vw;
    }
    li {
      padding: 0 1vw;
    }
    ul {
      list-style-type: none;
      // text-align: center;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      padding: 0;
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
  .card {
    display: inline-block;
    /*行内块元素*/
    // line-height: 300px;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff0 !important;
    background-clip: border-box;
    // border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 0.25rem;
    margin-top: 25px;
  }
  .video {
    background-image: linear-gradient(to bottom, #fff 491px, #ECF7FC 0);
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
      margin: 0 auto;
      width: 100%;
      .gcon {
        margin: 0 auto;
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
  .Advantage {
    display: flex;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);
    img {
      width: 66%;
    }
  }
  .list_con {
    margin-top: 198px;
    width: 42%;
  }
  .list_dis {
    margin-top: 198px;
    padding-left: 5vw;

    ul {
      padding-top: 1vw;
      list-style-type: none;

      li {
        color: #9BA5B1;
        font-family: 'Noto Sans CJK TC';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
      }
    }
  }
  .texts {
    p {
      padding: 0 50px;
      font-size: 18px;
    }
  }
  .meun {
    padding-left: 146px;
    display: flex;
    font-size: 16px;
  }
  .step_list {
    img {
      padding: 0 20px;
      width: 414px;
      height: 272px;
    }
    ul {
      list-style-type: disc;
    }
    .jiaochi {
      text-align: left;
      color: #fff;
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
    height: 472px;
    margin-top: 82px;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
}

//md
@media only screen and (max-width: 760px) {
  .orthodonticsPage{
    padding: 90px 0;
  }
  .swiperWrap{
    padding: 30px 0;
  }
  .swiper-wrapper{
    padding-bottom: 30px;
  }
 :deep(.swiper-pagination-bullet-active) {
    background-color: #57B2F3;
    width: 15px;
    height: 15px;
  }
  :deep(.swiper-pagination-bullet) {
    width: 15px;
    height: 15px;
    background-color: #9BD0F5;
  }
  .texts {
    p {
      color: #79828D;
      padding: 1vw 4vw;
    }
  }

  .box {
    white-space: pre-line;
  }

  /*隐藏下面的滚动条*/
  .box::-webkit-scrollbar {
    display: none;
  }

  .card {
    display: inline-block;
    /*行内块元素*/
    // line-height: 300px;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff0 !important;
    background-clip: border-box;
    border: 0px solid rgba(255, 255, 255, 0);
    border-radius: 0.25rem;
  }

  .porcelain—con {
    // display: flex;
    text-align: center;

    p {
      padding: 1vw 0;
      color: #57B2F3;
      font-weight: 500;
      font-size: 22px;
    }
  }

  .porcelain—cons {
    padding: 0 12vw;

    p {
      color: #9BA5B1;

    }
  }

  .quote {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  .boxs {
    // display: block;
    text-align: center;
    margin: 8vw 0;
  }

  .icons {
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }

  .coin {
    padding: 1vw 2vw;
    display: block;
    text-align: center;

    p {
      color: #79828D;
      font-size: 16px;
      padding: 1vw 0;
    }
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
    width: 16%;
    height: 25vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;

    ul {
      list-style-type: disc;
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      margin: 2vw 0;
      width: 56vw;
    }

    td {
      height: 30vw !important;
    }

    .teshu {
      margin: 1vw 0;
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

    td:nth-child(3) {
      border-radius: 0 0 20px 20px;
    }
  }
  .tables {
    color: #57B2F3;
    background-color: #fff;
    border: 2px solid #9BD0F5;
    border-radius: 10px;
    border-collapse: separate;
    border-spacing: 0;
    border-spacing: 1;
    box-shadow: 13px 15px 0 #a2d4f7;
    border-spacing: 0;
    width: 7%;
    height: 211vw;
    font-weight: 550;
    letter-spacing: 0.1vw;
    font-size: 17px;
    word-wrap: break-word;
    word-break: break-all;
    width: 25vw;
    tr {
      text-align: center;
    }
  }

  .icons {
    margin-bottom: 3.5vw;
    margin-top: 0.5vw;
  }

  .table-box {
    display: flex;
    align-items: flex-end;
     margin: 0 3vw;
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
      text-align: left;
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

  .video {
    background-image: linear-gradient(to bottom, #fff 27%, #ECF7FC 0);
    margin-top: 90px;
  }


  .contents {
    background-color: #fff;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    box-shadow: 13px 15px 0 #A2D4F7;
    border-radius: 10px;

    .gcond {
      display: flex;
      margin: 0 auto;
      width: 100%;

      .gcon {
        margin: 0 auto;
      }
    }

    .content {
      padding: 5.5vw 5vw;
      display: flex;
      align-items: center;
      img{
        min-width: 50px;
        margin-right: 10px;
      }
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

  .Advantage {
    display: flex;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to top, #fff 37%, #ECF7FC 0);

    img {
      width: 66%;
    }

  }

  .list_con {
    margin-top: 9vw;
  }

  .list_dis {
    margin-top: 9vw;

    ul {
      list-style-type: disc;
      padding: 6vw 8vw;

      li {
        color: #9BA5B1;

      }
    }
  }

  .meun {
    padding-left: 6vw;
    margin-top: 1vw;
    display: flex;
  }

  .step_list {

    .jiaochi {
      text-align: left;
      color: #fff;
      p {
        padding-left: 3vw;
        padding-top: 3vw;
        color: #9BA5B1;
        display: flex;
      }

      strong {
        color: #9BA5B1;

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
  }

  p {
    padding: 1vw;
  }

  .list {
    margin-top: 5vw;
    background-image: linear-gradient(to bottom, #fff 22%, #ECF7FC 0);
  }
}
</style>