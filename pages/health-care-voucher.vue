<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
// const cdnUseLang = require('~/assets/js/cdnUseLang')
// import { translate } from '~/assets/js/cdnUseLang'
useHead({
  title: "長者醫療券",
})

let langCur = ref('chinese_traditional')
const headerConfig = ref({
  img: `https://static.cmereye.com/imgs/2024/02/4c1e46eab9adb6de_${langCur.value}.webp`,
  bg: '',
  mbImg: `https://static.cmereye.com/imgs/2024/02/9798849854855a0c_${langCur.value}.webp`,
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
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '2024年2月19日政府公布，深圳愛康健齒科已經正式成為「長者醫療券大灣區試點計劃」的參與機構，這個計劃旨在資助符合條件的長者跨境到愛康健齒科口腔醫院使用長者醫療券支付治療費用。政府預計今年第三季開始實施該計劃，'
        },
        {
          type: 'indexColor',
          text: '約有170萬名合資格的長者將從中受益。'
        },
      ],
    },
    {
      type: 'h2',
      text: '長者醫療券大灣區試點計劃參與機構',
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '政府在長者醫療券大灣區試點計劃中對參與機構進行了嚴謹的篩選，並進行了充分的市場調查。此篩選過程涵蓋多個關鍵考量，以確保所選擇的機構能夠提供高品質的醫療服務。其中考慮的因素包括地理位置、服務質量、管理和運營經驗、服務範圍和容量、收費標準和水平，以及對長者醫療券計劃的基本認知。'
        }
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '香港衛生署對這些參與機構進行嚴格監管，扮演著審計角色，以確保其符合相關標準。即使長者的醫療券金額已扣除，他們仍然可以追究任何不當行為。此外，衛生署還將建立長者醫療券培訓和保障機制，包括監管濫收費用和病人體驗等方面。在事故發生的情況下，也設有嚴謹的投訴處理機制，並受廣東省衛健委的監管。'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '最終，共有7家灣區醫療機構獲得批准參與計劃，其中包括位於羅湖口岸的深圳愛康健口腔醫院。'
        },
      ],
    },
    {
      type: 'h2',
      text: '為醫療券使用者提供更多選擇',
      className: 'nob'
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/02/7b9667f3da87e801.webp',
        'https://static.cmereye.com/imgs/2024/02/8b093aa825acf2bf.webp'
      ],
      className: 'imgLists nob'
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '根據政府統計處的數據，目前有大約89,100名年齡在65歲或以上的長者居住在大灣區內地城市*。「長者醫療券大灣區試點計劃」擴大了長者醫療券適用範圍，提供更多靈活選擇和便利性，讓長者能善用醫療券享用與香港相約的高質量牙科醫療服務，以滿足他們對牙科醫療的需求和維護口腔健康。'
        }
      ]
    },
    {
      type: 'h2',
      text: '唯一參與醫療券計劃的深圳口腔醫院',
      className: 'nob'
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/02/b4e5c4e78e6d820e.webp',
      ],
      className: 'imgone nob'
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '深圳愛康健口腔醫院是唯一參與長者醫療券計劃的深圳口腔醫院。愛康健自1995年成立以來，超過28年一直專注為香港市民提供專業、貼心、全面的牙科醫療服務。愛康健在深圳擁有1間口腔醫院及12間門診診所，並致力於更新和升級醫療設備，引進最先進的設備和技術，以確保為客人提供安全、舒適、高效的醫療體驗。'
        }
      ]
    },
    {
      type: 'h3',
      text: '愛康健口腔醫院可為醫療券使用者提供以下牙科醫療服務，包括：',
      className: 'nob'
    },
    {
      type: 'ul',
      list: [
        '洗牙',
        '補牙',
        '拔牙'
      ],
      className: 'nob'
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/02/f3dd07a845186d32.webp',
        'https://static.cmereye.com/imgs/2024/02/5f756747940bec34.webp',
        'https://static.cmereye.com/imgs/2024/02/2fb9546a9917caae.webp',
      ],
      className: 'imgListsMB imgLists nob'
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '愛康健醫療團隊都擁有豐富的臨床經驗和專業知識，能夠為每位長者提供與香港相約的個人化優質牙科治療服務。'
        }
      ]
    },
    {
      type: 'h2',
      text: '使用長者醫療券的最新情報',
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '長者醫療券計劃為年滿65歲並持有效香港身份證、或豁免證明書的長者，每年獲發醫療券支付私營醫療服務費用。從2020年開始，醫療券金額為每年港幣2,000元，而醫療券累積金額上限為港幣8,000元。醫療券將每年於1月1日自動存入長者醫療券戶口。'
        }
      ],
      className: 'nob'
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/02/fe86c3dc96132d93.webp',
        'https://static.cmereye.com/imgs/2024/02/079da74dd10b39ac.webp'
      ],
      className: 'imgLists nob'
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '另外，長者醫療券容許兩名合資格及有配偶關係長者共用醫療券餘額。'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '為鼓勵長者善用醫療券接受私營預防性護理和慢性疾病管理等服務，政府推出了「長者醫療券獎賞先導計劃」。該計劃將在'
        },
        {
          type: 'indexColor',
          text: '2026年12月31日之前每年額外發放港幣500元的獎賞金額'
        },
        {
          type: 'defule',
          text: '。獎賞條件為，'
        },
        {
          type: 'indexColor',
          text: '長者需要在同一年度累計使用至少港幣1,000元的醫療券在特定的基層醫療服務上，例如洗牙、拔牙、補牙等'
        },
        {
          type: 'defule',
          text: '。醫健通（資助）系統即會自動發放獎賞至醫療券戶口。'
        }
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '有關長者醫療券大灣區試點計劃使用詳情及最新的信息，可關注及聯絡愛康健齒科查詢。'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '愛康健官方WhatsApp：'
        },
        {
          type: 'indexColor a',
          text: 'https://bit.ly/愛康健長者醫療券預約',
          link: 'https://bit.ly/愛康健長者醫療券預約'
        }
      ],
      className: 'nob'
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '愛康健官方查詢電話：'
        },
        {
          type: 'indexColor a',
          text: '+852 69338128',
          link: 'tel: +852 69338128'
        }
      ],
      className: 'nob'
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '愛康健香港官方網頁：'
        },
        {
          type: 'indexColor a',
          text: 'https://ckjhk.com/health-care-voucher',
          link: 'https://ckjhk.com/health-care-voucher'
        }
      ],
      className: 'nob'
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '長者醫療券計劃網頁：'
        },
        {
          type: 'indexColor a',
          text: 'https://www.hcv.gov.hk/tc/index.html',
          link: 'https://www.hcv.gov.hk/tc/index.html'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: '*資料來源：'
        },
        {
          type: 'defule',
          text: '香港特別行政區政府新聞公報，2023，'
        },
        {
          type: 'a',
          text: 'https://www.info.gov.hk/gia/general/202305/10/P2023051000264.html',
          link: 'https://www.info.gov.hk/gia/general/202305/10/P2023051000264.html'
        }
      ],
      className: 'lastpa pa nob'
    },
  ],
  tags: [
    '#醫療券',
    '#長者',
    '#政府政策'
  ]
}


onMounted(()=>{
  // mac不兼容
  // translate.language.setLocal('chinese_traditional'); 
  // translate.service.use('client.edge');
  // translate.nomenclature.append('chinese_traditional','english',`
  // 此篩選過程涵蓋多個關鍵考量，=This screening process covers multiple key considerations, 
  // 以確保所選擇的機構能夠提供高品質的醫療服務。=to ensure that the selected institution can provide high-quality medical services.
  // 為醫療券使用者提供更多選擇=Provide more choices for medical voucher users
  // 愛康健口腔醫院可為醫療券使用者提供以下牙科醫療服務，=Aikangjian Dental Hospital can provide the following dental medical services for medical voucher users,
  // 包括=include
  // 醫療券=Medical vouchers
  // 長者=Elderly
  // 政府政策=government policy
  // `);
  // translate.listener.renderTaskFinish = function(task){
  //   var _text = "'FakePearl-Regular','幼圆', Serif"
  //   if(translate.to === 'chinese_simplified'){
	// 		_text = "微软雅黑"
	// 	}
  //   langCur.value = translate.to || 'chinese_traditional'
  //   document.documentElement.style.setProperty("--indexFontFamily", _text);
  // }
  // translate.selectLanguageTag.languages = 'english,chinese_simplified,chinese_traditional';
  // translate.selectLanguageTag.show = false;
  // translate.execute();
})
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" /> 
    <div class="health-care-voucher pageIn whitebgColor">
      <div class="pageCon health-care-voucher-top">
        <div class="index_title health-care-voucher-title">長者醫療券</div>
        <!-- <div class="lang">
          <span @click="translate.changeLanguage('english');" class="ignore">Eng</span>
          <span @click="translate.changeLanguage('chinese_simplified');" class="ignore">简中</span>
          <span @click="translate.changeLanguage('chinese_traditional');" class="ignore">繁中</span>
        </div> -->
        <!-- <div id="translate"></div> -->
      </div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>主頁</span>
        </nuxt-link>
        <span>長者醫療券</span>
      </div>
      <div class="content">
        <div>
          <img src="https://static.cmereye.com/imgs/2024/02/74d44b6145445bfd.webp" title="灣區長者醫療券" alt="灣區長者醫療券">
        </div>
        <div class="nob">
          <h1>深圳愛康健正式納入灣區長者醫療券參與機構</h1>
        </div>
        <div>
          <p class="time">2024年2月19日</p>
        </div>
        <div v-for="(item,index) in pageDetail.content" :key="index" :class="item.className || ''">
          <section v-if="item.type === 'p'">
            <p :class="{english:langCur === 'english'}">
              <section v-for="(pitem,pindex) in item.list" :key="pindex">
                <section v-if="pitem.type.includes('a')">
                  <a :href="pitem.link" :class="pitem.type">{{pitem.text}}</a>
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
          <section v-else></section>
        </div>
        <div class="btn">
          <a href="https://bit.ly/愛康健長者醫療券預約">WhatsApp查詢長者醫療券</a>
        </div>
        <div class="tags">
          <span v-for="(tagItem,tagIndex) in pageDetail.tags" :key="tagIndex">
            {{tagItem}}
          </span>
        </div>
      </div>
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar :langType="langCur" />
  </div>
</template>


<style lang="scss" scoped>
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
      margin: 5px 0;
      section{
        display: flex;
      }
      .imgItem:not(:last-child){
        margin-right: 10px;
      }
    }
    &.imgone{
      margin: 5px 0;
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
  ul{
    margin: 10px 0;
    li{
      font-size: 20px;
      line-height: 160%;
      color: var(--textColor);
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
    }
  }
}
</style>
