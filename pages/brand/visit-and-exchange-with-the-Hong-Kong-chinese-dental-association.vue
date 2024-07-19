<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
const locale = useState<string>('locale.setting')
useHead({
  title: "活動消息",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: '愛康健集團是大灣區牙科連鎖機構，其口腔醫院為香港政府指定長者醫療券大灣區試點。（香港熱線: 3892 5049）14間門診有超過20種牙科治療項目，專注為港服務超過29年。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 愛康健齒科集團 深圳口腔專科醫院 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 工聯會洗牙 工聯會免費洗牙 愛康健洗牙',
    },
    {
      name: 'author',
      content: '愛康健口腔醫院',
    },
    { property: 'og:image', content: 'https://www.ckjhk.com/favicon.ico' }
  ],
})

const headerConfig = ref({
  img: 'https://static.cmereye.com/imgs/2024/06/84c49b322fe01c0b.jpg',
  bg: '',
  mbImg: "https://static.cmereye.com/imgs/2024/06/03a150ea7e4e0d24.jpg",
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
        'https://static.cmereye.com/imgs/2024/06/42d23f5537e677d9.jpg',
      ],
      className: 'imgone'
    },
    {
      type: "p",
      list: [
        {
          type: "defule",
          text: '香港華人牙醫公會於1940年成立，是香港首個專注於華人牙醫專業發展的註冊組織。公會不斷推動業界的專業發展及公眾口腔健康教育。'
        }
      ]
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/06/a6076e76dd4c13a8.jpg',
      ],
      className: 'imgone'
    },
    // {
    //   type: "p",
    //   list: [
    //     {
    //       type: "defule",
    //       text: '在此次訪問期間，香港華人牙醫公會的代表團深入參觀了將於2024年第3季投入「長者醫療券大灣區試點計劃」的深圳愛康健口腔醫院。雙方就多個關鍵領域進行了深入討論，包括醫院管理、設備現代化、衛生安全控制以及臨床數據管理等。此外，公會分享了他們在香港的牙科技術和醫院管理上的先進經驗，這些經驗對我們的實踐和創新非常有價值。公會對愛康健的醫療設施和專業團隊給予了高度評價，認為愛康健在提供高質量口腔健康服務方面表現出色，具有專科專業水平。並對愛康健的設施和專業能力給予了好評。'
    //     }
    //   ]
    // },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/06/3d075ed1e1c8d1ec.jpg',
      ],
      className: 'imgone'
    },
    {
      type: "p",
      list: [
        {
          type: "defule",
          text: '這次不僅增進了兩地的信息交流，也為愛康健在提升服務質量和擴展創新的解決方案方面提供了新的建議。我们期待著與香港華人牙醫公會持續學習交流，共同推進大灣區口腔健康領域的進步。'
        }
      ]
    },
  ]
}
const introduceData = {
  title: ['香港華人牙醫公會參觀交流'],
  time: '2024年5月30日',
  content: ['2024年5月22日，我們接待了香港華人牙醫公會的訪問團隊，此次訪問旨在進一步加强與香港在口腔醫療領域的學習與交流。作為大灣區的領先口腔醫療機構，愛康健口腔集團致力於提升醫療服務質量，此次交流將有助於推動地區醫療服務的共同發展。'],
  mbImg: 'https://static.cmereye.com/imgs/2024/06/b487c07b1769be56.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/06/ead312667b90d636.jpg',
  tabNavName: '活動消息',
}
const shareFacebook = (event) =>{
  event.preventDefault();
  window.open(`https://www.facebook.com/sharer/sharer.php?u=https://www.ckjhk.com/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association`)  
}
function copySpecifiedText(event) {  
  event.preventDefault();
    if (navigator.clipboard) {  
        navigator.clipboard.writeText(`https://www.ckjhk.com/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association`).then(function() {  
          ElMessage({
            showClose: true,
            message: '已複製到剪切板',
            type: 'success',
          }) 
        }, function(err) {
            ElMessage({
              showClose: true,
              message: '操作異常，請刷新頁面試試',
              type: 'warning',
            })
        });  
    } else {  
        alert('您的瀏覽器不支持此功能，請更新瀏覽器');  
    }  
}

let actShowShare = ref(false)
const handleClick = (event) =>{
  event.preventDefault();
  actShowShare.value = !actShowShare.value
}
</script>

<template>
  <div>
    <!-- <PageHeader :headerConfig="headerConfig" />  -->
    <div class="health-care-voucher pageIn whitebgColor">
      <div class="pageCon health-care-voucher-top">
        <div class="index_title health-care-voucher-title">品牌理念</div>
      </div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>{{$t('components.footer.nav_index')}}</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>{{$t('pages.brand.title')}}</span>
        </nuxt-link>
        <span>活動消息</span>
      </div>
      <div class="introduce bigPageCon">
        <div
          class="introduce-in"
          :style="{
        background: `url(${introduceData.pcImg}) no-repeat`,
        backgroundPosition: 'right top',
        backgroundSize: 'auto 100%'
        }"
        >
          <div class="introduce-in-t mbBox">
            <img loading="lazy" :src="introduceData.mbImg" />
          </div>
          <div class="introduce-in-l pageCon">
            <div class="title">
              <span v-for="(titleItem,titleIndex) in introduceData.title" :key="titleIndex">{{titleItem}}</span>
            </div>
            <div class="time">{{introduceData.time}}</div>
            <div class="context">
              <span v-for="(contentItem,contentIndex) in introduceData.content" :key="contentIndex">{{contentItem}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content pageCon">
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
          <section v-else-if="item.type === 'img'">
            <section class="imgItem" v-for="(imgItem,imgIndex) in item.list" :key="imgIndex">
              <img loading="lazy" :src="imgItem" alt="">
            </section>
          </section>
          <section v-else></section>
        </div>
      </div>
      <div class="pageBottom pageCon">
        <div class="pageBottom-l">
          #團體交流
        </div>
        <div class="pageBottom-r">
          <span @click="shareFacebook($event)" title="Facebook 分享">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 36 34" fill="none">
            <path d="M16.3756 0C17.2511 0 18.1258 0 19.0013 0C19.3855 0.0493865 19.7703 0.0954805 20.1538 0.149476C24.2325 0.726969 27.7129 2.42257 30.5499 5.27448C32.9703 7.70758 34.4925 10.5865 35.1075 13.8927C35.2132 14.461 35.2878 15.0352 35.3769 15.6061V18.1084C35.3562 18.1913 35.3279 18.273 35.3154 18.3573C35.2298 18.9321 35.1842 19.5149 35.0577 20.0812C33.8209 25.6118 30.5271 29.6253 25.2116 32.1249C23.7191 32.8269 22.132 33.2661 20.4689 33.515V21.7301H20.8544C21.9945 21.7301 23.1339 21.734 24.274 21.7228C24.3818 21.7215 24.569 21.6365 24.5828 21.5674C24.7189 20.8477 24.8295 20.1233 24.9428 19.3997C25.0748 18.5608 25.2026 17.7218 25.3373 16.852H20.453C20.453 15.6272 20.3811 14.4288 20.4737 13.2422C20.5615 12.1148 21.325 11.2759 22.5466 11.1416C23.3847 11.0487 24.2387 11.0843 25.0858 11.0639C25.2413 11.0599 25.3968 11.0639 25.5488 11.0639V6.92596C25.4431 6.92135 25.3525 6.92267 25.2641 6.91345C24.2394 6.80546 23.2168 6.6652 22.1894 6.5954C21.2683 6.53284 20.3486 6.62635 19.4511 6.85221C17.7893 7.27035 16.5373 8.17511 15.7379 9.64683C15.1775 10.678 14.9744 11.7849 14.935 12.9188C14.8935 14.1028 14.926 15.2887 14.926 16.474C14.926 16.5919 14.926 16.7091 14.926 16.8625H10.4604V21.7393H14.9101V33.5064C14.8486 33.5025 14.8023 33.5038 14.7581 33.4965C10.8439 32.844 7.50516 31.155 4.78418 28.3979C2.38932 25.9714 0.878896 23.1069 0.269473 19.8224C0.163757 19.2535 0.0891333 18.6799 0 18.1084C0 17.2741 0 16.4404 0 15.6061C0.0518217 15.24 0.100189 14.8732 0.156847 14.5078C0.762815 10.6207 2.54203 7.30393 5.53386 4.60019C8.08694 2.29351 11.1085 0.842863 14.5778 0.25681C15.1741 0.156061 15.7759 0.0849448 16.3756 0Z" fill="#4267B2"/>
            </svg>
            Facebook 分享
          </span>
          <span @click="copySpecifiedText($event)" title="複製連結">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path d="M15.289 19.6823C13.5156 19.6015 11.9716 18.9678 10.7686 17.626C10.1446 16.93 10.2146 15.8657 10.856 15.1927C11.4733 14.5447 12.5726 14.4529 13.2992 15.0069C13.7319 15.3369 14.1297 15.7062 14.6815 15.8493C15.6802 16.1072 16.5817 15.9389 17.3433 15.2407C17.9661 14.6704 18.5496 14.0574 19.1484 13.4608C20.5449 12.0677 21.9446 10.6789 23.3334 9.27816C24.5179 8.0828 24.4654 6.25371 23.2318 5.15887C22.1478 4.19735 20.4749 4.25963 19.4008 5.31622C18.2939 6.40668 17.1914 7.5037 16.1053 8.61492C15.8223 8.90556 15.5589 8.96457 15.1852 8.81596C14.2805 8.45539 13.3309 8.31225 12.3595 8.31116C12.1213 8.31116 11.929 8.2456 11.8307 8.01068C11.7345 7.78232 11.8307 7.60531 11.9891 7.44797C13.6904 5.75655 15.3579 4.02908 17.104 2.38355C19.4697 0.15455 23.3542 0.187329 25.7537 2.38792C28.3434 4.76224 28.6646 8.50784 26.5142 11.2963C26.3645 11.4897 26.1984 11.6721 26.0247 11.8459C24.0404 13.8334 22.0615 15.8264 20.0652 17.8019C18.8949 18.9612 17.4744 19.5796 15.8212 19.6485C15.6485 19.6561 15.477 19.6703 15.2901 19.6834L15.289 19.6823Z" fill="#FC1682"/>
            <path d="M12.5768 9.70647C14.1983 9.72176 15.7336 10.3468 17.0098 11.588C17.7376 12.2949 17.7692 13.4062 17.1071 14.1481C16.4711 14.8605 15.3336 14.9501 14.5633 14.3327C14.1513 14.0017 13.7536 13.6673 13.2215 13.5307C12.2643 13.286 11.4065 13.4619 10.6405 14.0836C10.563 14.147 10.4908 14.2158 10.4198 14.2868C8.4781 16.2274 6.53311 18.1646 4.59577 20.1096C3.59268 21.1159 3.43971 22.6052 4.20787 23.7208C5.20221 25.1641 7.23353 25.3455 8.5076 24.0912C9.55768 23.0586 10.5914 22.0097 11.6316 20.9673C11.7343 20.8646 11.8392 20.7641 11.9397 20.6581C12.1146 20.4723 12.3156 20.421 12.5571 20.5149C13.5427 20.8963 14.5644 21.0798 15.621 21.0744C15.8385 21.0733 16.0111 21.1574 16.0996 21.3683C16.2056 21.6229 16.0712 21.8021 15.9029 21.9703C14.3218 23.5514 12.7516 25.1445 11.1508 26.7059C10.7192 27.1265 10.2231 27.5002 9.70628 27.8094C7.21167 29.3009 3.74347 28.7644 1.78756 26.6141C-0.13339 24.5009 -0.532221 21.7496 0.717816 19.1797C1.0347 18.5285 1.47724 17.9647 1.98861 17.4533C3.90956 15.5303 5.82723 13.605 7.75255 11.6863C9.06815 10.3763 10.6023 9.73269 12.5779 9.70647H12.5768Z" fill="#FC1682"/>
            </svg>
            複製連結
          </span>
        </div>
        <div class="shareIcon" @click.stop="handleClick($event)" alt="">
          <div :class="['shareIcon-img',{ act: actShowShare }]" alt="分享" title="分享"><img src="@/assets/images/icon_51.svg" alt=""></div>
          <div class="shareIcon-in" v-if="actShowShare">
            <div class="shareIcon-in-item" @click="shareFacebook($event)" alt="Facebook 分享" title="Facebook 分享"><img src="@/assets/images/icon_53.svg" alt=""><span>Facebook 分享</span></div>
            <div class="shareIcon-in-item" @click="copySpecifiedText($event)" alt="複製連結" title="複製連結"><img src="@/assets/images/icon_52.svg" alt=""><span>複製連結</span></div>
          </div>
        </div>
      </div>
      <NewAddress />
      <ContactForm-new />
    </div>
    <PageFooter />
    <PageNavbar />
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
.introduce {
  &-in {
    margin-top: 56px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #666666;
      padding-bottom: 90px;
      .title {
        font-weight: 700;
        font-size: 50px;
        padding-top: 100px;
        span{
          display: block;
        }
      }
      .context {
        font-weight: 600;
        font-size: 26px;
        max-width: 630px;
        width: 630px;
        margin-top: 56px;
        span{
          display: block;
          &:not(:last-child){
            margin-bottom: 50px;
          }
        }
      }
      .time{
        color: #666;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
      }
    }
  }
}
.content{
  width: 100%;
  margin: 60px auto;
  &>div{
    margin-bottom: 45px;
    &.nob{
      margin-bottom: 0;
    }
    &.imgone{
      width: 1011px;
      margin: 10px auto 45px;
    }
  }
  p{
    color: var(--Grey-Deep, #4D4D4D);
    text-align: justify;
    font-family: "GenSenRounded TW";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; 
  }
}
.pageBottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--indexColor1);
  padding-top: 9px;
  &-l{
    color: var(--Grey-Pale, #AAA);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 44.8px */
  }
  &-r{
    display: flex;
    align-items: center;
    span{
      padding: 5px 20px;
      display: flex;
      align-items: center;
      color: #4267B2;
      font-size: 27.929px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      border-left: 1px solid var(--indexColor1);
      cursor: pointer;
      svg{
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
      &:nth-child(2){
        color: var(--indexColor1);
      }
    }
  }
  .shareIcon{
      position: relative;
      display: none;
      &-img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border: 2px solid #FC1682;
        z-index: 21;
        &>img{
          width: 16px;
          height: auto;
        }
        &.act{
          border: none;
        }
      }
      &-in{
        position: absolute;
        z-index: 20;
        top: 0;
        right: 0;
        width: 159px;
        height: 115px;
        background: url(https://static.cmereye.com/static/ckj/imgs/default/shareIcon-new.svg);
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        filter: drop-shadow(0 2px 3px rgba(0,0,0,.3));
        padding: 12px 0;
        &-item{
          display: flex;
          align-items: center;
          padding: 5px 10px;
          margin: 0 2px;
          border-radius: 3px;
          color: #4267B2;
          &>img{
            width: 20px;
            margin-right: 5px;
          }
          &>span{
            font-size: 14px;
          }
          &:hover{
            background: #F6F6F6;
          }
          &:nth-child(2){
            color: var(--indexColor1);
          }
        }
      }
    }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .introduce {
    &-in {
      margin-top: 2.9167vw;
      height: 32.709vw;
      max-height: 32.7083vw;
      &-l {
        padding-bottom: 4.6875vw;
        .title {
          font-size: 2.6042vw;
          padding-top: 5.2083vw;
        }
        .context {
          font-size: 1.3542vw;
          max-width: 32.8125vw;
          width: 32.8125vw;
          margin-top: 2.9167vw;
          span{
            &:not(:last-child){
              margin-bottom: 2.6042vw;
            }
          }
        }
        .time{
          font-size: 1.0417vw;
        }
      }
    }
  }
  .content{
    margin: 3.125vw auto;
    &>div{
      margin-bottom: 2.3438vw;
      &.imgone{
        width: 52.6563vw;
        margin: .5208vw auto 2.3438vw;
      }
    }
    p{
      font-size: 1.4583vw;
    }
  }
  .pageBottom{
    padding-top: .4688vw;
    &-l{
      font-size: 1.4583vw;
    }
    &-r{
      span{
        padding: .2604vw 1.0417vw;
        font-size: 1.4546vw;
        svg{
          width: 1.8229vw;
          height: 1.8229vw;
          margin-right: .5208vw;
        }
      }
    }
    
  }
}
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
    padding: 23px 30px 17px;
    font-size: 1rem;
    margin-top: 0px;
  }
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
          margin-top: 20px;
        }
        .context {
          font-size: 1rem;
          width: 100%;
          padding: 0 30px;
          margin-top: 20px;
          font-weight: 400;
        }
        .time{
          padding: 0 30px;
        }
      }
    }
  }
  .content{
    margin-top: 40px;
    &>div{
      &.imgone{
        width: 100%;
      }
    }
    p{
      padding: 0 30px;
      font-size: 16px;
      font-weight: 400;
      line-height: 160%;
    }
  }
  .pageBottom{
    border-bottom: 1px solid var(--indexColor1);
    width: auto;
    margin: 0 30px;
    padding-bottom: 9px;
    &-l{
      font-size: 16px;
      font-weight: 700;
    }
    &-r{
      display: none;
    }
    .shareIcon{
      display: block;
    }
  }
}
</style>
