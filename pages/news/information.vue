<script lang="ts" setup>
import { whatsapplink } from '~/assets/js/common'
import { useWindowSize } from '@vueuse/core'
import { formatDate,toDateType } from '~/assets/js/utils'
const { width } = useWindowSize()
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


const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/06/99b4542e84f6fd1e.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2024/06/cb4c9a34a7e67357.jpg',
  }
]

let errorpage = ref(false)
let informationLists:any = ref([])

let totalPageNum = ref(1)
let actPageNum = ref(1) 
let loadingShow = ref(false)
let curTab = ref(2)
let PageSize = ref(6)
let pageType = ref('date')

let saveData = ref({
  lists_0: [],
  actPageNum_0: 0,
  lists_1: [],
  actPageNum_1: 0,
  totalPageNum: 1
})
let isPc = ref(false)
const getNewsLists = async () => {
  loadingShow.value = true
  PageSize.value = width.value > 768 ? 6 : 10
  pageType.value = width.value > 768 ? 'date' : (curTab.value === 1 ? 'date' : 'visits')
  isPc.value = width.value > 768
  try{
    const _res:any = await useFetch(`https://admin.ckjhk.com/api.php/list/15/page/${actPageNum.value}/num/${PageSize.value}/order/${pageType.value}`,{
      method: 'post',
    });
    let res = JSON.parse(_res.data.value) || null
    if(res){
      totalPageNum.value = Math.ceil(res.rowtotal / PageSize.value)
      informationLists.value = res.data.map(item=>{
        return{
          id: item.id || '',
          img: (item.ico.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${item.ico}`:item.ico) || '',
          desc: item.ext_news_desc || '',
          name: item.title || '',
          time: formatDate(item.ext_news_time) || '',
          videos: item.ext_news_videos || '',
          hashtag: [null,''].includes(item.ext_news_hashtag) ? [] : item.ext_news_hashtag.split(',')
        }
      })
      if(width.value <= 768){
        saveData.value[`lists_${curTab.value}`] = informationLists.value
        saveData.value[`actPageNum_${curTab.value}`] = actPageNum.value
        saveData.value.totalPageNum = totalPageNum.value
        mbListsConfig.value.lists = informationLists.value
        sessionStorage.setItem('informationPageCurTab',String(curTab.value))
      }
    }
    sessionStorage.setItem('informationPage', String(actPageNum.value))
    loadingShow.value = false
  }catch{
    errorpage.value = true
    loadingShow.value = false
  }
  // console.log(coverageLists.value)
}

const subNum = () => {
  if(actPageNum.value > 1){
    actPageNum.value --
    window.location.href = "#information"
    getNewsLists()
  }
}

const addNum = () => {
  if(actPageNum.value < totalPageNum.value){
    actPageNum.value ++
    window.location.href = "#information"
    getNewsLists()
  }
}

const toPage = (_page) => {
  if(actPageNum.value === _page){
    return
  }
  actPageNum.value = _page
  window.location.href = "#information"
  getNewsLists()
}

const handlelink = (id) =>{
  // sessionStorage.setItem('informationid', String(id))
}
const goAnchor = (_hash: any)=>{
  const a = document.querySelector(_hash);
  let top = a.offsetTop-300
  if(a){
    let b = 0
    const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = b += 50;
      if (b >= top) {
          clearInterval(timeTop);
      }
  }, 10);
  }
}
onBeforeMount(()=>{
  if(sessionStorage.getItem('informationPageCurTab')){
    curTab.value = Number(sessionStorage.getItem('informationPageCurTab')) || 0
  }
})
onMounted(()=>{
  if(sessionStorage.getItem('informationPage')){
    actPageNum.value = Number(sessionStorage.getItem('informationPage')) || 1
  }
  setTimeout(()=>{
    getNewsLists()
  })
})


if(process.server){
  // console.log('server');
  getNewsLists()
}else{
  // console.log('client');
  // getNewsLists()
}

const shareFacebook = (event,id) =>{
  event.preventDefault();
  window.open(`https://www.facebook.com/sharer/sharer.php?u=https://www.ckjofficial.com/news/news-information/${id}`)  
}
function copySpecifiedText(event,text) {  
  event.preventDefault();
    if (navigator.clipboard) {  
        navigator.clipboard.writeText(`https://www.ckjofficial.com/news/news-information/${text}`).then(function() {  
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

const getPagination = (pageitem) => {
  if(actPageNum.value>=4 && actPageNum.value<totalPageNum.value-3){
    return actPageNum.value-3+pageitem
  }else{
    if(actPageNum.value<4){
      return pageitem + 1
    }else if(actPageNum.value>=totalPageNum.value-3){
      return totalPageNum.value-6+pageitem
    }else{
      return 0
    }
  }
}

let actShowShare = ref('')
const handleClick = (event,_id) =>{
  event.preventDefault();
  if(actShowShare.value === _id){
    actShowShare.value = ''
  }else{
    actShowShare.value = _id
  }
}

const mbListsConfig = ref({
  title: '',
  tab: ['最熱門','最新'],
  lists: [],
  linkL: '/news/news-information/'
})
const handleListsType = async (idx) => {
  if(curTab.value === idx) return
  curTab.value = idx
  let _lists = saveData.value[`lists_${idx}`]
  if(_lists && _lists.length){
    mbListsConfig.value.lists = _lists
    actPageNum.value = saveData.value[`actPageNum_${curTab.value}`]
    totalPageNum.value = saveData.value.totalPageNum
  }else{
    actPageNum.value = 1
    getNewsLists()
  }
}


watch(width,(n,o)=>{
  if(n <= 768){
    if(isPc.value){
      isPc.value = false
      handleListsType(0)
    }
  }else{
    if(!isPc.value){
      isPc.value = true
      curTab.value = 2
      actPageNum.value = 1
      getNewsLists()
    }
  }
})
</script>

<template>
  <div>
    <PageBanner :isApiConfig="true" :apiId="'186'" />
    <div class="pageIn whitebgColor informationPage">
      <div class="informationPage-title" id="information">
        <div class="index_title">最新資訊</div>
      </div>
      <div class="tabNav noTitle smallPageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>主頁</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>睇牙新資訊</span>
        </nuxt-link>
        <span :title="'最新資訊'">最新資訊</span>
      </div>
      <div class="smallPageCon">
        <div class="lists" v-loading="loadingShow">
          <div v-if="width>768" class="listsbox">
            <nuxt-link :to="`/news/news-information/${item.id}`" :id="`i${item.id}`" :alt="item.name" :title="item.name" class="lists-in" v-for="(item,index) in informationLists" :key="index">
              <div class="lists-in-img">
                <img :src="item.img" alt="">
              </div>
              <div class="lists-in-context">
                <div class="lists-in-context-top">
                  <div class="title">
                    {{item.name}}
                  </div>
                  <div class="time">
                    <span>
                      {{item.time}} by ckjhk
                    </span>
                    <div class="shareIcon" @click.stop="handleClick($event,item.id)" alt="">
                      <div :class="['shareIcon-img',{ act: actShowShare === item.id }]" alt="分享" title="分享"><img src="@/assets/images/icon_47.svg" alt=""></div>
                      <div class="shareIcon-in" v-if="actShowShare === item.id">
                        <div class="shareIcon-in-item" @click="shareFacebook($event,item.id)" alt="Facebook 分享" title="Facebook 分享"><img src="@/assets/images/icon_49.svg" alt=""><span>Facebook 分享</span></div>
                        <div class="shareIcon-in-item" @click="copySpecifiedText($event,item.id)" alt="複製連結" title="複製連結"><img src="@/assets/images/icon_48.svg" alt=""><span>複製連結</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="desc" v-html="item.desc">
                </div>
                <div style="flex: 1;"></div>
                <div class="btn">
                  <PageAnimBtnTypeTwo :link="`/news/news-information/${item.id}`" str="查看原文" />
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="listsbox" v-else>
            <NewsLists :listsConfig="mbListsConfig" :thameType="'5'" :defaultCur="curTab" @changeNewsCur="handleListsType" />
          </div>
          <div class="lists-btn">
            <div @click="subNum" :class="{btndisabled: actPageNum === 1}">
              <span class="subNum">
                <img src="@/assets/images/icon_25.svg" alt="">
              </span>
            </div>
            <div class="lists-btn-page">
              <section v-if="totalPageNum<=7">
                <span class="y" :class="{act: actPageNum === pageitem}" v-for="pageitem in totalPageNum" :key="pageitem" @click="toPage(pageitem)">
                  {{ pageitem }}
                </span>
              </section>
              <section v-else>
                <span class="y" :class="{act: actPageNum === 1}" @click="toPage(1)">1</span>
                <span v-if="actPageNum>4">...</span>
                <span class="y" :class="{act: actPageNum === getPagination(pageitem)}" v-for="pageitem in 5" :key="pageitem" @click="toPage(getPagination(pageitem))">
                    {{getPagination(pageitem)}}
                </span>
                <span v-if="actPageNum<=totalPageNum-4">...</span>
                <span class="y" :class="{act: actPageNum === totalPageNum}" @click="toPage(totalPageNum)">{{totalPageNum}}</span>
              </section>
            </div>
            <div @click="addNum" :class="{btndisabled: actPageNum === totalPageNum}">
              <span class="addNum">
                <img src="@/assets/images/icon_25.svg" alt="">
              </span>
            </div>
          </div>
        </div>
        <div class="lists" v-if="errorpage">服務異常</div>
      </div>
      <nuxtLink :to="whatsapplink" class="bigPageCon whatsappLink">
        <img style="width:100%;" srcset="https://static.cmereye.com/imgs/2024/06/efe552a37181d177.png 768w,https://static.cmereye.com/imgs/2024/06/71d5adf71dddd841.jpg" src="https://static.cmereye.com/imgs/2024/06/2712bd5db3f82a5b.jpg" alt="">
      </nuxtLink>
      <NewAddress />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.informationPage{
  &-title{
    display: flex;
    justify-content: center;
  }
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
.lists{
  margin-top: calc(77 / 1448 * 100%);
  min-height: 300px;
  .listsbox{
    display: flex;
    flex-wrap: wrap;
  }
  &-in{
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    margin-bottom: 80px;
    padding: 0 30px;
    &-img{
      width: 100%;
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
        flex-direction: column;
        margin-bottom: 10px;
        margin-top: 15px;
        .title{
          color: var(--textColor);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%;
          display: -webkit-box;  
          -webkit-line-clamp: 1; 
          line-clamp: 1; 
          -webkit-box-orient: vertical;  
          overflow: hidden;  
          text-overflow: ellipsis; 
        }
        .time{
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          color: #aaa;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &>span{
            max-width: 340px;
            white-space: nowrap; 
            overflow: hidden;
            position: relative;
            flex: 1;
            &::after{
              content: '';
              height: 100%;
              width: 30px;
              background: linear-gradient(90deg,transparent,#fff);
              position: absolute;
              right: 0;
              top: 0;
            }
          }
          .shareIcon{
            position: relative;
            &-img{
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              border: 2px solid #aaa;
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
              background: url(https://static.cmereye.com/static/ckj/imgs/default/shareIcon.svg);
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
              }
            }
          }
        }
      }
      .desc{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 2px;
        color: #aaa;
        display: -webkit-box;  
        -webkit-line-clamp: 2; 
        line-clamp: 2; 
        -webkit-box-orient: vertical;  
        overflow: hidden;  
        text-overflow: ellipsis;
      }
      .btn{
        display: flex;
        padding: 20px;
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
  &-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    &>div{
      font-size: 26px;
      margin: 0 10px;
      color: var(--textColor);
      span{
        color: var(--indexColor1);
        cursor: pointer;
        &:hover{
          opacity: .7;
        }
      }
      &.btndisabled{
        span{
          opacity: .7;
          cursor: not-allowed;
        }
      }
    }
    .subNum,.addNum{
      img{
        width: 12px;
        height: auto;
      }
    }
    .addNum{
      img{
        transform: rotate(180deg);
      }
    }
    &-page{
      display: flex;
      &>section{
        display: flex;
        height: 30px;
      }
      .y{
        margin: 0 5px;
        color: var(--indexColor1);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: block;
        // border: 2px solid var(--indexColor1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        letter-spacing: -0.8px;
        transition: all .3s;
        font-weight: 900;
        &.act{
          background: var(--indexColor1);
          color: #fff;
        }
      }
    }
  }
}
.whatsappLink{
  width: 100%;
  margin-top: 65px;
  display: block;
}
@media (min-width: 768px) and (max-width: 1920px) {
  .lists{
    &-in{
      margin-bottom: 4.1667vw;
      padding: 0 1.5625vw;
      &-context{
        &-top{
          margin-bottom: .5208vw;
          margin-top: .7813vw;
          .title{
            font-size: 1.0417vw;
          }
          .time{
            font-size: .7813vw;
            margin-top: .5208vw;
            span{
              max-width: 17.7083vw;
              &::after{
                width: 1.5625vw;
              }
            }
          }
        }
        .desc{
          font-size: .8333vw;
          letter-spacing: .1042vw;
        }
        .btn{
          padding: 1.0417vw;
          a{
            font-size: 1.8229vw;
            letter-spacing: .3646vw;
            border-radius: 2.0833vw;
          }
        }
      }
    }
    &-btn{
      &>div{
        font-size: 1.3542vw;
        margin: 0 .5208vw;
      }
      .subNum,.addNum{
        img{
          width: .625vw;
        }
      }
      &-page{
        &>section{
          height: 1.5625vw;
        }
        .y{
          margin: 0 .2604vw;
          width: 1.5625vw;
          height: 1.5625vw;
          font-size: 1.0417vw;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .whatsappLink{
    display: none;
  }
  .informationPage{
    padding: 50px 0 90px;
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
      width: 100%;
      margin-bottom: 90px;
      padding: 0;
      &-img{
        order: 1;
        width: 100%;
        margin-left: 0;
      }
      &-context{
        order: 2;
        padding: 10px 30px 0;
        &-top{
          margin-bottom: 10px;
          flex-direction: column;
          .title{
            font-size: 20px;
            color: var(--indexColor1);
          }
          .time{
            &>span{
              text-align: left;
              font-size: 16px;
            }
            .shareIcon{
              &-in{
                &-item{
                  padding: 3px 10px;
                }
              }
            }
          }
        }
        .desc{
          font-size: 16px;
          text-align: justify;
        }
        .btn{
          margin-top: 10px;
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
    &-btn{
      &>div{
        font-size: 20px;
        margin: 0 5px;
      }
      &-page{
        &>section{
          height: 25px;
        }
        .y{
          width: 25px;
          height: 25px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>