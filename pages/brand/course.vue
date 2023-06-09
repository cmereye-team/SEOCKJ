<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setBrand('course')
useHead({
  title: '品牌歷程 | 口腔專科醫院',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '愛康健作為深圳愛康健口腔醫院是一家專業口腔醫院，秉承著「專科·專業」的服務理念，科學、合理地整合醫療資源。我們的醫師團隊均畢業於國內知名口腔學院，包括種植醫師、美學修復醫師、牙周病醫師等專業人員。他們帶領著醫護人員共同構成我們的服務團隊，為患者提供專業、優質的口腔醫療服務。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 愛康健',
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/a9937a33f4c1e5aa.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/d85c660d38bd5f93.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/8756debfc7f1a54b.jpg',
  pageName: 'brand',
  pcText: ['健齒為本 嚴謹治療','專科 · 專業 · 實力保證'],
  mbText: ['健齒為本 嚴謹治療','專科 · 專業 · 實力保證']
}

const introduceData = {
  title: '品牌歷程',
  content:
    '我們致力於為客人提供全面、專業、貼心的口腔醫療服務，為客人的口腔健康保駕護航。我們注重醫療設備的更新和升級，引進了最先進的設備和技術，為客人提供更加安全、舒適、高效的醫療體驗。我們還注重醫療研究和教育，提升各醫生的專業水平和技術能力。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/2dad0e643e10a596.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/558375ea7ebd62ca.jpg',
  tabNavName: '品牌歷程',
}

const courseData = {
  title: '發展歷程',
  lists: [
    {
      timeNode: '1995年',
      events: [
        {
          month: '',
          context: '愛康健齒科集團第一間門診	(富康門診)  在羅湖成立',
        },
      ],
    },
    {
      timeNode: '2000年',
      events: [
        {
          month: '',
          context: '集團發展為擁有66間口腔門診的連鎖機構',
        },
      ],
    },
    {
      timeNode: '2006年',
      events: [
        {
          month: '',
          context: '被邀請成為「ATV	亞洲小姐競選大賽」指定專科牙齒美容機構',
        },
      ],
    },
    {
      timeNode: '2008年',
      events: [
        {
          month: '5月',
          context:
            '攜手美、韓種植體研究與教育中心，合作成立中美韓口腔種植技術專科',
        },
        {
          month: '7月',
          context: '集團第10家連鎖門診——恆美門診開業',
        },
        {
          month: '10月',
          context: '與中山大學光華口腔醫學院附屬口腔醫院簽約技術合作',
        },
        {
          month: '11月',
          context:
            '成功舉辦華南口腔種植國際論壇，中華口腔醫學會會長王興教授蒞臨並為大會致辭',
        },
      ],
    },
    {
      timeNode: '2009年',
      events: [
        {
          month: '4月',
          context: '成功舉辦華南口腔正畸國際論壇',
        },
        {
          month: '6月',
          context: '成功舉辦首屆華南口腔牙周國際論壇',
        },
        {
          month: '7月',
          context: '成為中山大學光華口腔醫學院研究生課程深圳教學基地',
        },
      ],
    },
    {
      timeNode: '2010年',
      events: [
        {
          month: '4月',
          context: '成功舉辦華南口腔正畸國際論壇',
        },
      ],
    },
    {
      timeNode: '2011年',
      events: [
        {
          month: '',
          context:
            '建立廣州愛康健口腔門診，標誌著愛康健齒科集團的事業版圖走出深圳，迅速擴張',
        },
      ],
    },
    {
      timeNode: '2012年',
      events: [
        {
          month: '',
          context:
            '在羅湖區衛生和人口計劃生育局民營醫療機構醫療服務整體管理與醫療品質控制評估中，獲評	「A級單位級單位	」',
        },
      ],
    },
    {
      timeNode: '2014年',
      events: [
        {
          month: '',
          context:
            '先後與IBM、萬科集團、中國銀行、建設銀行、中信銀行、中國平安、招商局集團等近百家500强企業簽約合作，成為企業員工口腔健康信任品牌',
        },
      ],
    },
    {
      timeNode: '2015年',
      events: [
        {
          month: '',
          context: '榮獲廣東省著名商標評選委員會認定的「廣東省牙科著名商標」',
        },
      ],
    },
    {
      timeNode: '2016年',
      events: [
        {
          month: '1月',
          context:
            '掛牌成立深圳市二級專業資質的口腔醫院——深圳愛康健口腔醫院',
        },
        {
          month: '12月',
          context:
            '集團榮獲“深圳老字號”榮譽及牌匾\n榮獲深圳都市報評選的「最具口碑影響力企業」',
        },
      ],
    },
    {
      timeNode: '2017年',
      events: [
        {
          month: '5月',
          context:
            '成為世界五大種植體品牌之一的——瑞士STRUAMANN(士卓曼)公司「鉑金合作夥伴」',
        },
        {
          month: '8月',
          context:
            '愛康健入駐寶安區，成立寶安區第一家旗艦店——炫雅口腔門診部',
        },
      ],
    },
    {
      timeNode: '2018年',
      events: [
        {
          month: '',
          context:
            '在深圳口腔醫療口碑榜中，深圳愛康健口腔醫院獲得2018年度「受市民喜愛種植牙·專科口腔醫療機構」',
        },
      ],
    },
    {
      timeNode: '2019年',
      events: [
        {
          month: '',
          context:
            '集團在深圳龍華區開設旗艦分院——雅健口腔門診部獲得「廣東省口腔醫療機構感染預防與控制A級單位」',
        },
      ],
    },
    {
      timeNode: '2020年',
      events: [
        {
          month: '11月',
          context:
            '深圳市口腔醫療行業協會第一屆口腔護理專業及院感專業委員會成立，愛康健護理與防控水平獲認可，10名專業護理人員受聘為副主任委員/委員',
        },
        {
          month: '12月',
          context:
            '榮獲第三屆「圳能量」深圳愛康健摘得 「最值得最線民信賴品牌」 獎\n榮獲深圳電視台第一現場《名醫直播問診》優質合作伙伴獎/委員',
        },
      ],
    },
    {
      timeNode: '2021年',
      events: [
        {
          month: '6月',
          context: '龍華旗艦店恆樂口腔門診部盛大開業',
        },
        {
          month: '9月',
          context:
            '港資眼科上市集團（3309.HK）達成戰略合作通過共享資源和客戶群體不斷提高市場服務規模和服務效率，開啟醫療服務領域「眼科+口腔」的國民大健康趨勢',
        },
        {
          month: '12月',
          context: '榮獲第四屆「圳能量」及「最值得最線民信賴品牌」大獎',
        },
      ],
    },
  ],
}
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">品牌理念</div>
      <div class="introduce bigPageCon">
        <div
          class="introduce-in"
          :style="{
        background: `url(${introduceData.pcImg}) no-repeat`,
        backgroundPosition: 'right top',
        backgroundSize: 'auto 100%'
        }"
        >
          <div class="tabNav noTitle pageCon">
            <nuxt-link :to="'/'">
              <span>主頁</span>
            </nuxt-link>
            <nuxt-link :to="''">
              <span>品牌理念</span>
            </nuxt-link>
            <span>{{introduceData.tabNavName}}</span>
          </div>
          <div class="introduce-in-t mbBox">
            <img :src="introduceData.mbImg" />
          </div>
          <div class="introduce-in-l pageCon">
            <div class="title">{{introduceData.title}}</div>
            <div class="content">{{introduceData.content}}</div>
          </div>
        </div>
      </div>
      <div class="course">
        <div class="course-bg">
          <div class="course-title pageCon">
            <div class="course-title-in">
              {{courseData.title}}
            </div>
          </div>
          <div class="course-in">
            <div class="courseBox" v-for="(courseItem,courseIndex) in courseData.lists" :key="courseIndex">
              <div class="courseBox-l">
                <div class="round"></div>
                <div class="line"></div>
              </div>
              <div class="courseBox-in">
                <div class="timeNode">{{courseItem.timeNode}}</div>
                <div class="courseBox-in-lists">
                  <div class="courseBox-in-listItem" v-for="(courseTimeNodeItem,courseTimeNodeIndex) in courseItem.events" :key="courseTimeNodeIndex">
                    <div class="month">{{courseTimeNodeItem.month}}</div>
                    <div class="context">{{courseTimeNodeItem.context}}</div>
                  </div>
                </div>
              </div>
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
// 介绍
.introduce {
  &-in {
    margin-top: 45px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #4d4d4d;
      padding-bottom: 90px;
      .title {
        font-weight: 700;
        font-size: 50px;
        margin-top: 96px;
      }
      .content {
        font-weight: 600;
        font-size: 26px;
        max-width: 630px;
        width: 630px;
        margin-top: 56px;
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 83px;
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
    color: #ffa09e;
  }
}
.course{
  margin-top: 157px;
  &-bg{
    padding: 70px 0 106px;
    background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
  }
  &-title{
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 160%;
    color: #4D4D4D;
    &-in{
      border-bottom: 4px solid #FFA09E;
      display: inline-block;
    }
  }
  &-in{
    width: 100%;
    max-width: 1452px;
    margin: 35px auto 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px #FFDDDA;
    padding: 54px 65px 44px;
    box-sizing: border-box;
    .courseBox{
      display: flex;
      &-l{
        width: 44px;
        .round{
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FFA09E;
        }
        .line{
          height: 100%;
          width: 3px;
          background: #FFA09E;
          margin-left: 10px;
        }
      }
      &-in{
        flex: 1;
        padding-bottom: 60px;
        .timeNode{
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 160%;
          color: #FFA09E;
          margin-top: -10px;
        }
        &-lists{
          margin-top: 10px;
        }
        &-listItem{
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          .month{
            color: #FFA09E;
          }
          .context{
            color: #4D4D4D;
            white-space: pre-wrap;
          }
        }
      }
      &:last-child{
        .courseBox-l{
          .line{
            display: none;
          }
        }
        .courseBox-in{
          padding-bottom: 0;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  .introduce {
    &-in {
      margin-top: 3.5vw;
      &-l {
        padding-bottom: 7vw;
        .title {
          font-size: 2.2vw;
          margin-top: 6vw;
        }
        .content {
          font-size: 1.5vw;
          margin-top: 3vw;
          width: 42vw;
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 6vw;
  }
  .course{
    margin-top: 120px;
  }
}

//md
@media only screen and (max-width: 760px) {
  .introduce {
    &-in {
      height: auto;
      max-height: 300%;
      background: none !important;
      margin-top: 0;
      &-t {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &-l {
        padding-bottom: 0;
        .title {
          padding: 0 30px;
          font-weight: 700;
          font-size: 26px;
          margin-top: 0;
        }
        .content {
          font-size: 1rem;
          width: 95%;
          padding: 0 30px;
          margin-top: 30px;
        }
      }
    }
  }
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 20px;
  }
  .course{
    margin-top: 90px;
    &-bg{
      padding: 44px 0;
      background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
    }
    &-title{
      font-size: 26px;
      display: flex;
      justify-content: center;
    }
    &-in{
      width: calc(100% - 60px);
      padding: 24px;
      .courseBox{
        &-l{
          width: 23px;
          .round{
            width: 16px;
            height: 16px;
          }
          .line{
            width: 2px;
            margin-left: 7px;
          }
        }
        &-in{
          padding-bottom: 30px;
          .timeNode{
            font-weight: 500;
            font-size: 16px;
            margin-top: -5px;
          }
          &-lists{
            margin-top: 2px;
          }
          &-listItem{
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>