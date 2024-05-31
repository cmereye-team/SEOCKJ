<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
const locale = useState<string>('locale.setting')
useHead({
  title: "長者醫療券",
})

let langCur = ref('chinese_traditional')

const bannerConfig = [
  {
    pcImg: `https://static.cmereye.com/imgs/2024/02/4c1e46eab9adb6de_en.webp`,
    mbImg: `https://static.cmereye.com/imgs/2024/02/9798849854855a0c_en.webp`,
  }
]

const pageDetail:any = {
  title: '',
  img: '',
  content: [
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: "On February 19, 2024, the government announced that Shenzhen Aikangjian Dental Hospital has officially become a participating institution in the 'Elderly Medical Vouchers Greater Bay Area Pilot Program'. This program aims to fund eligible elderly individuals to cross border to Aikangjian Dental Hospital and use Elderly Medical Vouchers to pay treatment fees. The government expects to start implementing the plan in the third quarter of this year,"
        },
        {
          type: 'indexColor',
          text: "Approximately 1.7 million eligible elders will benefit from it."
        },
      ],
    },
    {
      type: 'h2',
      text: "Participating institutions in the pilot program for elderly medical vouchers in the Greater Bay Area",
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: "The government has conducted rigorous screening of participating institutions and conducted thorough market research in the pilot program for elderly medical vouchers in the Greater Bay Area. This screening process involves multiple key considerations to ensure that the selected institution can provide high-quality medical services. The factors considered include geographical location, service quality, management and operational experience, service scope and capacity, charging standards and levels, as well as basic understanding of the elderly medical voucher program."
        }
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: "The Hong Kong Department of Health strictly regulates these participating institutions and plays an auditing role to ensure they meet relevant standards. Even if the amount of the elderly's medical voucher has been deducted, they can still pursue any improper behavior. In addition, the Department of Health will establish a training and protection mechanism for elderly medical vouchers, including monitoring overcharging and patient experience. In the event of an accident, there is also a rigorous complaint handling mechanism and supervision from the Guangdong Provincial Health Commission."
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: "In the end, a total of 7 medical institutions in the Bay Area were approved to participate in the plan, including Shenzhen Aikangjian Dental Hospital located at the Luohu Port."
        },
      ],
    },
    {
      type: 'h2',
      text: "Provide more choices for medical voucher users",
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
          text: "According to data from the Government Statistics Department, there are currently approximately 89100 elderly people aged 65 or above residing in mainland cities in the Greater Bay Area. The Greater Bay Area Pilot Program for Elderly Medical Vouchers has expanded the scope of application for elderly medical vouchers, providing more flexible choices and convenience, allowing elderly people to make good use of medical vouchers to enjoy high-quality dental services agreed upon with Hong Kong, in order to meet their dental needs and maintain oral health."
        }
      ]
    },
    {
      type: 'h2',
      text: "The only dental hospital in Shenzhen that participates in the medical voucher program",
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
          text: "Shenzhen Aikangjian Dental Hospital is the only dental hospital in Shenzhen that participates in the Elderly Medical Voucher Program. Since its establishment in 1995, Aikangjian has been dedicated to providing professional, caring, and comprehensive dental services to Hong Kong citizens for over 28 years. Aikangjian has 1 dental hospital and 12 outpatient clinics in Shenzhen, and is committed to updating and upgrading medical equipment, introducing the most advanced equipment and technology to ensure a safe, comfortable, and efficient medical experience for customers."
        }
      ]
    },
    {
      type: 'h3',
      text: "Aikangjian Dental Hospital can provide dental medical services for medical voucher users, including:",
      className: 'nob'
    },
    {
      type: 'ul',
      list: [
        'Toothwashing',
        'Dental filling',
        'extract a tooth'
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
          text: "The Aikangjian medical team has rich clinical experience and professional knowledge, and is able to provide personalized and high-quality dental treatment services for each elderly person in accordance with Hong Kong."
        }
      ]
    },
    {
      type: 'h2',
      text: "Latest intelligence on the use of elderly medical vouchers",
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: "The Elderly Medical Voucher Scheme is for elderly individuals over 65 years old who hold a valid Hong Kong ID card or exemption certificate to receive medical vouchers annually to pay for private medical services. Starting from 2020, the amount of medical vouchers is HKD 2000 per year, and the cumulative limit of medical vouchers is HKD 8000. The medical voucher will be automatically deposited into the elderly medical voucher account on January 1st each year."
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
          text: "In addition, the elderly medical voucher allows two eligible and married elderly individuals to share the remaining balance of the medical voucher."
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: "To encourage the elderly to make good use of medical vouchers for private preventive care and chronic disease management services, the government has launched the 'Elderly Medical Voucher Reward Pilot Program'. This plan will be implemented in"
        },
        {
          type: 'indexColor',
          text: "An additional reward of HKD 500 will be issued annually before December 31, 2026"
        },
        {
          type: 'defule',
          text: ". The reward conditions are:,"
        },
        {
          type: 'indexColor',
          text: "Elderly individuals need to accumulate at least HKD 1000 medical vouchers in the same year for specific primary healthcare services, such as tooth cleaning, extraction, and filling"
        },
        {
          type: 'defule',
          text: ". The Medical Health Pass (Funding) system will automatically distribute rewards to the medical voucher account."
        }
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'For details and the latest information on the use of Elderly Medical Vouchers in the Greater Bay Area Pilot Program, please follow and contact Aikang Health Dental for inquiries.'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'Official WhatsApp of iHealth:'
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
          text: 'Official inquiry hotline of Aikangjian:'
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
          text: 'Ai Kang Jian Hong Kong Official Website:'
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
          text: 'Elderly Medical Voucher Program webpage:'
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
          text: '*Data source:'
        },
        {
          type: 'defule',
          text: 'Hong Kong Special Administrative Region Government News Bulletin, 2023,'
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
    '#Medical vouchers',
    '#Elderly',
    '#Government policies'
  ]
}

</script>

<template>
  <div>
    <PageBanner :bannerConfig="bannerConfig" />
    <div class="health-care-voucher pageIn whitebgColor">
      <div class="smallPageCon health-care-voucher-top">
        <div class="index_title health-care-voucher-title">{{$t('components.header.menuLists.health-care-voucher.name')}}</div>
      </div>
      <div class="tabNav noTitle smallPageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>{{$t('components.footer.nav_index')}}</span>
        </nuxt-link>
        <span>{{$t('components.header.menuLists.health-care-voucher.name')}}</span>
      </div>
      <div class="content">
        <div>
          <img src="https://static.cmereye.com/imgs/2024/02/74d44b6145445bfd.webp" title="灣區長者醫療券" alt="灣區長者醫療券">
        </div>
        <div class="nob">
          <h1>All rights reserved by CKJ Aikangjian Dental. Shenzhen Aikangjian has officially been included in the participating institutions of the Bay Area Elderly Medical Voucher</h1>
        </div>
        <div>
          <p class="time">February 19, 2024</p>
        </div>
        <div v-for="(item,index) in pageDetail.content" :key="index" :class="item.className || ''">
          <section v-if="item.type === 'p'">
            <p :class="'english'">
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
          <a href="https://bit.ly/愛康健長者醫療券預約">WhatsApp</a>
        </div>
        <div class="tags">
          <span v-for="(tagItem,tagIndex) in pageDetail.tags" :key="tagIndex">
            {{tagItem}}
          </span>
        </div>
      </div>
      <NewAddress />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.health-care-voucher-top{
  display: flex;
  justify-content: center;
  // align-items: flex-end;
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
    // flex-direction: column-reverse;
    // flex-wrap: wrap;
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
