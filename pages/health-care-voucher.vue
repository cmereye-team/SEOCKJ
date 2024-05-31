<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
const locale = useState<string>('locale.setting')
useHead({
  title: "長者醫療券",
})

let langCur = ref('chinese_traditional')

const bannerConfig = [
  {
    pcImg: `https://static.cmereye.com/imgs/2024/02/4c1e46eab9adb6de_${locale.value}.webp`,
    mbImg: `https://static.cmereye.com/imgs/2024/02/9798849854855a0c_${locale.value}.webp`,
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
          text: 'health-care-voucher.pageDetail.content_1.list_1.text_1'
        },
        {
          type: 'indexColor',
          text: 'health-care-voucher.pageDetail.content_1.list_1.text_2'
        },
      ],
    },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_2.text',
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_3.text'
        }
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_4.text'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_5.text'
        },
      ],
    },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_6.text',
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
          text: 'health-care-voucher.pageDetail.content_1.list_7.text'
        }
      ]
    },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_8.text',
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
          text: 'health-care-voucher.pageDetail.content_1.list_9.text'
        }
      ]
    },
    {
      type: 'h3',
      text: 'health-care-voucher.pageDetail.content_1.list_10.text',
      className: 'nob'
    },
    {
      type: 'ul',
      list: [
        'health-care-voucher.pageDetail.content_1.list_11.text_1',
        'health-care-voucher.pageDetail.content_1.list_11.text_2',
        'health-care-voucher.pageDetail.content_1.list_11.text_3'
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
          text: 'health-care-voucher.pageDetail.content_1.list_12.text'
        }
      ]
    },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_13.text',
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_14.text'
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
          text: 'health-care-voucher.pageDetail.content_1.list_15.text'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_16.text_1'
        },
        {
          type: 'indexColor',
          text: 'health-care-voucher.pageDetail.content_1.list_16.text_2'
        },
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_16.text_3'
        },
        {
          type: 'indexColor',
          text: 'health-care-voucher.pageDetail.content_1.list_16.text_4'
        },
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_16.text_5'
        }
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_17.text'
        }
      ]
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_18.text'
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
          text: 'health-care-voucher.pageDetail.content_1.list_19.text'
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
          text: 'health-care-voucher.pageDetail.content_1.list_20.text'
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
          text: 'health-care-voucher.pageDetail.content_1.list_21.text'
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
          text: 'health-care-voucher.pageDetail.content_1.list_22.text_1'
        },
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_22.text_2'
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
    'health-care-voucher.pageDetail.content_1.list_23.text_1',
    'health-care-voucher.pageDetail.content_1.list_23.text_2',
    'health-care-voucher.pageDetail.content_1.list_23.text_3'
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
          <h1>{{$t('health-care-voucher.pageDetail.nob')}}</h1>
        </div>
        <div>
          <p class="time">{{$t('health-care-voucher.pageDetail.time')}}</p>
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
                    {{$t(pitem.text)}}
                  </span>
                </section>
              </section>
            </p>
          </section>
          <section v-else-if="item.type === 'h2'">
            <h2>{{$t(item.text)}}</h2>
          </section>
          <section v-else-if="item.type === 'h3'">
            <h3>{{$t(item.text)}}</h3>
          </section>
          <section v-else-if="item.type === 'img'">
            <section class="imgItem" v-for="(imgItem,imgIndex) in item.list" :key="imgIndex">
              <img :src="imgItem" alt="">
            </section>
          </section>
          <section v-else-if="item.type === 'ul'">
            <ul>
              <li v-for="(liItem,liIndex) in item.list" :key="liIndex">
                {{$t(liItem)}}
              </li>
            </ul>
          </section>
          <section v-else></section>
        </div>
        <div class="btn">
          <a href="https://bit.ly/愛康健長者醫療券預約">{{$t('health-care-voucher.pageDetail.btn')}}</a>
        </div>
        <div class="tags">
          <span v-for="(tagItem,tagIndex) in pageDetail.tags" :key="tagIndex">
            {{$t(tagItem)}}
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
    padding-top: 50px;
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
