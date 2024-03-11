<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
// const cdnUseLang = require('~/assets/js/cdnUseLang')
// import { translate } from '~/assets/js/cdnUseLang'
const locale = useState<string>('locale.setting')
useHead({
  title: "工聯會專區",
})

const headerConfig = ref({
  img: 'https://static.cmereye.com/imgs/2024/03/2b040d97815234be.webp',
  bg: '',
  mbImg: "https://static.cmereye.com/imgs/2024/03/d4617dabf9ce5183.webp",
  pageName: 'health-care-voucher',
  pcText: [],
  mbText: []
})
interface plist {
  type: String,
  text: String
}


const pageDetail:any = {
  title: '',
  img: '',
  content: [
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/03/5cd9553f46182a46.webp',
      ],
      className: 'imgone nob'
    },
    {
      type: "p",
      list: [
        {
          type: "defule",
          text: '自2023年12月18日起，愛康健齒科集團榮幸地與香港工聯會建立了一項長期的會員福利合作計劃。透過這項計劃，我們將為工聯會的會員提供一系列專屬的牙科服務優惠，以表達我們對香港工聯會及其會員群體的支持。'
        }
      ]
    },
    {
      type: 'h2',
      text: '年度免費洗牙服務',
      className: 'nob',
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/03/31f9f52852e9a3a2.webp',
        'https://static.cmereye.com/imgs/2024/03/8c770928be24be4e.webp'
      ],
      className: 'imgLists nob'
    },
    {
      type: "p",
      list: [
        {
          type: "defule",
          text: '每位合資格會員每年可享受一次免費的洗牙服務。（註：需提前預約，並受每月額度限制）'
        }
      ]
    },
    {
      type: 'h2',
      text: '補牙特別優惠',
      className: 'nob',
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/03/974de071493eea28.webp',
        'https://static.cmereye.com/imgs/2024/03/f7b4da216cc1ce9e.webp'
      ],
      className: 'imgLists nob'
    },
    {
      type: "p",
      list: [
        {
          type: "defule",
          text: '洗牙後30天內，首顆德國常規聲波樹脂補牙特價¥275/顆，第二顆起享有85折優惠。'
        }
      ]
    },
    {
      type: 'h2',
      text: '會員專屬價格',
      className: 'nob',
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/03/f74dd051569a6823.webp',
      ],
      className: 'imgone nob'
    },
    {
      type: "p",
      list: [
        {
          type: "defule",
          text: '所有消費即享有愛康健會員價，無需額外消費門檻。'
        }
      ]
    },
    {
      type: 'btn',
      list: [
        "會員預約專線",
        "6912 2011"
      ],
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'textcenter',
          text: '服務時間為09:30-18:30，星期一至五（週末及公眾假期休息）'
        }
      ]
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/03/1df6824262d689e7.jpg',
      ],
      className: 'imgone nob'
    },
    {
      type: 'h4',
      text: '預約流程：',
      className: 'nob',
    },
    {
      type: "p",
      list: [
        {
          type: "pbeford",
          before: '1.',
          text: '會員可撥打預約專線，經過專員初步認證後預約到羅湖口腔醫院應診。'
        },
        {
          type: "pbeford",
          before: '2.',
          text: '亦可透過Whatsapp留言預約，專員見到留言後會盡快聯絡進行認證和預約。'
        },
        {
          type: "pbeford",
          before: '3.',
          text: '預約前一天，會透過SMS提醒會員應診。'
        },
        {
          type: "pbeford",
          before: '4.',
          text: '會員到診時，需出示工聯卡實體卡、工聯App內的電子卡、工人俱樂部實體證或工聯App內的電子證明以進行正式認證並享受優惠。'
        }
      ],
      className: 'pbeford',
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/03/d8b12624866dd235.webp',
      ],
      className: 'imgone nob'
    },
    {
      type: 'h4',
      text: '優惠條款及細則：',
      className: 'nob',
    },
    {
      type: 'ul',
      list: [
        "此會員優惠不可兌回現金，不可與其他優惠同時使用（包括往後的長者醫療券）",
        "此會員優惠只限本人使用，不得轉讓",
        "工聯會會員必須需出示有效工聯咭，才享獲以上優惠",
        "此優惠服務需提前進行預約，而且可能會受到可預約時間限制",
        "如要更改或取消預約，請至少提前48小時內通知愛康健專線客服以作時間調整安排",
        "如有任何爭議，愛康健齒科集團將會保留最後之決定權"
      ]
    }
  ]
}



</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" /> 
    <div class="health-care-voucher pageIn whitebgColor">
      <div class="pageCon health-care-voucher-top">
        <div class="index_title health-care-voucher-title">工聯會專區</div>
      </div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>{{$t('components.footer.nav_index')}}</span>
        </nuxt-link>
        <span>工聯會專區</span>
      </div>
      <div class="content">
        <div class="nob">
          <h1>香港工聯會福利 — 會員免費洗牙</h1>
        </div>
        <div v-for="(item,index) in pageDetail.content" :key="index" :class="item.className || ''">
          <section v-if="item.type === 'p'">
            <p>
              <section v-for="(pitem,pindex) in item.list" :key="pindex">
                <section v-if="pitem.type.includes('a')">
                  <a :href="pitem.link" :class="pitem.type">{{pitem.text}}</a>
                </section>
                <section v-else-if="pitem.type === 'pbeford'">
                  <p :class="pitem.type">
                    <span>{{pitem.before || ''}}</span>
                    <span>{{pitem.text}}</span>
                  </p>
                </section>
                <section v-else>
                  <span :class="pitem.type">
                    {{pitem.text}}
                  </span>
                </section>
              </section>
            </p>
          </section>
          <section v-else-if="item.type === 'h2'">
            <h2>{{item.text}}</h2>
          </section>
          <section v-else-if="item.type === 'h3'">
            <h3>{{item.text}}</h3>
          </section>
          <section v-else-if="item.type === 'h4'">
            <h4>{{item.text}}</h4>
          </section>
          <section v-else-if="item.type === 'img'">
            <section class="imgItem" v-for="(imgItem,imgIndex) in item.list" :key="imgIndex">
              <img :src="imgItem" alt="">
            </section>
          </section>
          <section v-else-if="item.type === 'ul'">
            <ul>
              <li v-for="(liItem,liIndex) in item.list" :key="liIndex">
                {{liItem}}
              </li>
            </ul>
          </section>
          <section v-else-if="item.type === 'btn'">
            <nuxt-link to="https://bit.ly/FTU洗牙" class="contentbtn">
              <div class="contentbtn-l">
                <div>
                  <span v-for="(btnText,btnTextIndex) in item.list" :key="btnTextIndex">{{btnText}}</span>
                </div>
              </div>
              <div class="contentbtn-r">
                <img src="https://static.cmereye.com/imgs/2024/03/82eb8b5a33ce229f.png" alt="">
              </div>
            </nuxt-link>
          </section>
          <section v-else></section>
        </div>
        <div class="btn">
          <!-- <PageAnimBtn link="https://bit.ly/FTU洗牙" str="立即預約會員洗牙" /> -->
          <PageAnimBtnTypeTwo link="https://bit.ly/FTU洗牙" str="立即預約會員洗牙" />
        </div>
      </div>
      <NewAddress />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
@keyframes btntestAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntesthoverAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntestafterAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #B9D9FC;
  }
  19%{
    border: 10px solid rgba(185, 217, 252, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    // border: 10px solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes btntestafterhoverAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #FCD1B9;
  }
  19%{
    border: 10px solid rgba(252, 209, 185, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    // border: 10px solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
.health-care-voucher-top{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .lang{
    display: flex;
    span{
      cursor: pointer;
      color: var(--textColor);
      &:hover{
        color: var(--indexColor1);
      }
      &:not(:last-child){
        &::after{
          content: '|';
          display: inline-block;
          color: var(--textColor);
          margin: 0 10px;
        }
      }
    }
  }
}
.health-care-voucher{
  padding-top: 100px;
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 44px;
  a {
    &:not(:last-child)::after {
      content: '';
      width: 20px;
      height: 2px;
      margin: 0 10px;
      background: #cbcbcb;
      display: inline-block;
      vertical-align: middle;
      margin-top: -4px;
    }
  }
  & > span {
    cursor: pointer;
    color: var(--indexColor1);
  }
}
.content{
  width: 100%;
  max-width: 960px;
  margin: 60px auto;
  &>div{
    margin-bottom: 45px;
    &.nob{
      margin-bottom: 0;
    }
    &.imgLists{
      margin: 10px 0;
      section{
        display: flex;
      }
      .imgItem:not(:last-child){
        margin-right: 10px;
      }
    }
    &.imgone{
      margin: 10px 0;
    }
    &.lastpa{
      p{
        font-size: 14px;
        letter-spacing: 1.5px;
      }
    }
    &.btn{
      display: flex;
      justify-content: center;
      margin: 80px auto 0;
      max-width: calc(100% - 30px);
      a{
        font-size: 35px;
        line-height: 160%;
        background: var(--indexColor1);
        padding: 10px 35px;
        border-radius: 50px;
        color: #fff;
        transition: all .3s;
        position: relative;
        box-shadow: 0 5px 10px rgba(252, 22, 130, .5);
        text-align: center;
        &:hover{
          background: #FF85AF;
        }
        &::after{
          content: '';
          position: absolute;
          right: -15px;
          top: 30%;
          background: url(https://static.cmereye.com/imgs/2024/02/e750f6e517ea0dee.png);
          background-size: 100% 100%;
          width: 50px;
          height: 60px;
        }
      }
    }
    &.tags{
      margin-top: 60px;
      span{
        font-size: 20px;
        line-height: 160%;
        margin-right: 20px;
        color: var(--textColor);
        border-bottom: 1px solid var(--textColor);
      }
    }
  }
  h1{
    font-size: 48px;
    line-height: 130%;
    color: var(--indexColor1);
  }
  h2{
    font-size: 30px;
    line-height: 160%;
    color: var(--indexColor1);
  }
  h3{
    font-size: 28px;
    line-height: 160%;
    color: var(--textColor);
  }
  h4{
    font-size: 24px;
    line-height: 160%;
    color: var(--indexColor1);
  }
  ul{
    margin: 10px 0;
    li{
      font-size: 20px;
      line-height: 160%;
      color: var(--textColor);
      display: flex;
      &::before{
        content: '·';
        margin-right: 10px;
      }
    }
  }
  p{
    font-size: 20px;
    line-height: 160%;
    color: var(--textColor);
    text-align: justify;
    letter-spacing: 2px;
    &.english{
      text-align: initial;
    }
    section{
      display: initial;
    }
    span{
      &.indexColor{
        color: var(--indexColor1);
      }
      &.textcenter{
        display: block;
        text-align: center;
        margin-top: 5px;
        letter-spacing: 1px;
      }
    }
    .pbeford{
      display: flex;
      padding: 0;
      &>span{
        &:first-child{
          margin-right: 5px;
          display: block;
        }
      }
    }
    a{
      word-break: break-all; /* 允许在单词内换行 */  
      white-space: normal;
      &.indexColor{
        color: var(--indexColor1);
      }
    }
    &.time{
      font-size: 28px;
      line-height: 160%;
    }
  }
  .contentbtn{
    display: flex;
    justify-content: center;
    align-items: center;
    &-l{
      position: relative;
      &>div{
        color: #fff;
        font-size: 30px;
        background: #00AEFF;
        border-radius: 50px;
        padding: 10px 30px;
        transition: all .3s;
        box-shadow: 10px 10px 20px rgba(103, 214, 239, .75);
        animation: btntestAnima 5.6s infinite;
        position: relative;
        z-index: 1;
        &>span{
          letter-spacing: 2px;
          &:not(:last-child){
            margin-right: 20px;
          }
        }
      }
      &::after{
        content: '';
        position: absolute;
        display: inline-block;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        width: 90%;
        height: 90%;
        border: 10px solid #B9D9FC;
        z-index: 0;
        border-radius: 50px;
        animation: btntestafterAnima 5.6s infinite;
        transition: all .5s;
      }
    }
    &-r{
      margin-left: -25px;
      position: relative;
      z-index: 2;
    }
    &:hover{
      .contentbtn-l{
        &>div{
          background: #FF9900;
          box-shadow: 10px 10px 20px rgba(239, 176, 103, .75);
          animation: btntesthoverAnima 5.6s infinite;
        }
        &::after{
          border: 10px solid #FCD1B9;
          animation: btntestafterhoverAnima 5.6s infinite;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .health-care-voucher-top{
    flex-direction: column-reverse;
    flex-wrap: wrap;
    .lang{
      width: calc(100% - 30px);
      // margin-right: 30px;
      margin-left: 30px;
      // margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .health-care-voucher{
    position: relative;
    z-index: 1;
    padding-top: 0px;
  }
  .tabNav {
    padding: 23px 30px 0;
    font-size: 1rem;
    margin-top: 0px;
  }
  .content{
    margin: 30px auto 0;
    &>div{
      margin-bottom: 35px;
      &.imgLists{
        margin: 10px 0;
        .imgItem:not(:last-child){
          margin-right: 5px;
        }
      }
      &.imgListsMB{
        // display: flex;
        padding: 0 30px;
        section{
          flex-direction: column;
          .imgItem{
            width: 100%;
            img{
              width: 100%;
            }
          }
          .imgItem:not(:last-child){
            margin-right: 0px;
            margin-bottom: 8px;
          }
        }
      }
      &.imgone{
        margin: 10px 0;
      }
      &.pa{
        span{
          display: block;
          letter-spacing: 1.5px;
        }
      }
      &.lastpa{
        p{
          font-size: 12px;
        }
      }
      &.btn{
        margin-top: 30px;
        a{
          font-size: 26px;
          padding: 5px 20px;
          
          &::after{
            right: -10px;
            top: 45%;
            width: 28px;
            height: 33px;
          }
        }
      }
      &.tags{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 40px;
        margin-bottom: 0;
        span{
          font-size: 16px;
          border-bottom: 0;
          text-decoration-line: underline;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
    h1{
      font-size: 20px;
      color: var(--indexColor1);
      padding: 0 30px;
    }
    h2{
      font-size: 20px;
      line-height: 200%;
      padding: 0 30px;
    }
    h3{
      font-size: 20px;
      padding: 0 30px;
    }
    h4{
      font-size: 18px;
      padding: 0 30px;
    }
    ul{
      padding: 0 30px;
      li{
        font-size: 16px;
        line-height: 200%;
      }
    }
    p{
      padding: 0 30px;
      font-size: 16px;
      line-height: 200%;
      letter-spacing: 3px;
      text-align: justify;
      &.time{
        font-size: 16px;
        margin-top: 20px;
      }
      a{
        text-align: initial;
        display: block;
        letter-spacing: 1px;
      }
      span{
        &.textcenter{
          padding: 10px 10px 0; 
        }
      }
    }
    .contentbtn{
      &-l{
        &>div{
          font-size: 28px;
          border-radius: 26px;
          &>span{
            display: block;
            &:not(:last-child){
              margin-right: 0px;
            }
            &:first-child{
              letter-spacing: 2px;
            }
            &:last-child{
              letter-spacing: 4px;
            }
          }
        }
        &::after{
          border-radius: 40px;
        }
      }
    }
  }
}
</style>
