<script lang="ts" setup>

useHead({
  title: '最新資訊',
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
  img: 'https://static.cmereye.com/imgs/2024/02/3b281359c56b586d.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/7efb3f385ea64b26.jpg',
  pageName: 'coverage',
  pcText: [],
  mbText: []
}

let errorpage = ref(false)
let coverageLists = ref([
  {
    logo: '',
    link: '',
    id: '',
    img: '',
    desc: '',
    name: ''
  }
])

</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor informationPage">
      <div class="index_title pageCon informationPage-title">最新資訊</div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>主頁</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>睇牙新資訊</span>
        </nuxt-link>
        <span :title="'最新資訊'">最新資訊</span>
      </div>
      <div class="pageCon">
        <div class="lists" v-if="!errorpage">
          <div class="lists-in" v-for="(item,index) in 3" :key="index">
            <div class="lists-in-img">
              <img src="https://static.cmereye.com/imgs/2024/02/8ab0663340a2dfc8.png" alt="">
            </div>
            <div class="lists-in-context">
              <div class="lists-in-context-top">
                <div class="title">
                  一分鐘畸形牙齒測驗 😬
                </div>
                <div class="time">
                  <span>2023年11月11日</span>
                </div>
              </div>
              <div class="desc">
                畸形牙齒由遺傳因素、發育異常、口腔疾病或外部因素所引起。畸形牙齒唔單止影響美觀，仲容易令你面對一系列口腔問題

                畸形牙齒引發以下問題：
                牙齒清潔困難，增加蛀牙同牙周病風險；
                牙齒容易磨損，牙齒對冷熱感覺敏感；
                顎關節容易痛，長期慢性疼痛影響心理健康；
                咀嚼困難，食物無法咬爛；
                面形輪廓唔夠靚。
                一齊做個測驗，睇下有無需要見見牙科醫生
                ......
              </div>
              <div class="btn">
                <a href="#">查看全文</a>
              </div>
            </div>
          </div>
        </div>
        <div class="lists" v-else>服務異常</div>
      </div>
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
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
.lists{
  margin-top: calc(77 / 1448 * 100%);
  &-in{
    display: flex;
    margin-bottom: calc(125 / 1448 * 100%);
    &-img{
      width: calc(500 / 1448* 100%);
      margin-right: calc(26 / 1448* 100%);
      img{
        width: 100%;
      }
    }
    &-context{
      flex: 1;
      display: flex;
      flex-direction: column;
      &-top{
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;
        .title{
          color: var(--indexColor1);
          font-size: 50px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
        }
        .time{
          span{
            display: block;
            text-align: right;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 32px */
            letter-spacing: 2px;
            color: var(--textColor);
          }
        }
      }
      .desc{
        flex: 1;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 2px;
        color: var(--textColor);
      }
      .btn{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        a{
          font-size: 35px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 56px */
          letter-spacing: 7px;
          color: #fff;
          text-align: center;
          background: var(--indexColor1);
          border-radius: 40px;
          padding: calc(7 / 922 * 100%) calc(40 / 922 * 100%);
          transition: all .3s;
          box-shadow: 3px 3px 12.4px 0px rgba(252, 22, 130, 0.50);
          &:hover{
            background: #FF85AF;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .informationPage{
    padding: 0 0 90px;
    &-title{
      z-index: 1;
    }
  }
  .tabNav {
    padding: 23px 30px 0;
    font-size: 1rem;
    margin-top: 0px;
  }
  .lists{
    &-in{
      flex-direction: column;
      margin-bottom: 90px;
      &-img{
        order: 1;
        width: 100%;
        margin-left: 0;
      }
      &-context{
        order: 2;
        padding: 24px 30px 0;
        &-top{
          margin-bottom: 23px;
          flex-direction: column;
          .title{
            font-size: 26px;
          }
          .time{
            span{
              text-align: left;
              font-size: 16px;
            }
          }
        }
        .desc{
          font-size: 16px;
        }
        .btn{
          margin-top: 23px;
          display: flex;
          justify-content: center;
          a{
            margin: 0 auto;
            font-size: 28px;
            padding: 8px 29px;
          }
        }
      }
    }
  }
}
</style>