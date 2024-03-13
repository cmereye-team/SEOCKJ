<script lang="ts" setup>
import { log } from "console"

const route = useRoute()
const router = useRouter()
let _nid = route.params.id
let coverageDeatail = ref({
  logo: '',
  link: '',
  id: '',
  img: '',
  desc: '',
  name: '',
  time: '',
  tags: '',
  author: '',
  visits: '',
  source: '',
  news_tag: '',
  content: '',
  pics: [],
  btnText: '',
  btnLink: '',
  hashtag: []
})
useHead({
  title: '牙齒百科',
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
    {
      property: 'og:title',
      content: ()=>{
        return coverageDeatail.value.name
      },
    },
    {
      property: 'og:description',
      content: ()=>{ 
        return coverageDeatail.value.desc
      }
    },
    {
      property: 'og:site_name',
      content: '牙齒百科 | 深圳愛康健口腔醫院',
    },
    {
      property: 'og:url',
      content: ()=>{
        return 'https://www.ckjhk.com/news/news-tooth-wiki/' + coverageDeatail.value.id
      },
    },
    {
      property: 'og:image',
      content: ()=>{
        return coverageDeatail.value.img
      },
    }
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
let pageLoading = ref(false)

function copySpecifiedText(text) {  
    if (navigator.clipboard) {  
        navigator.clipboard.writeText(text).then(function() {  
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
        alert('Clipboard API is not supported by your browser.');  
    }  
}
const copyText = () =>{
  copySpecifiedText(window.location.href)
}
const formatDate = (dateString) =>{  
    var date = new Date(dateString);  
    var year = date.getFullYear();  
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // getMonth() is zero-based  
    var day = ("0" + date.getDate()).slice(-2);  
    return year + "-" + month + "-" + day;  
}  
const getDetail = async () => {
  pageLoading.value = true
  try{
    const _res:any = await useFetch(`https://admin.ckjhk.com/api.php/content/${_nid}`,{
      method: 'post',
    });
    let res = JSON.parse(_res.data.value) || null
    if(_res.data.value === null){
      errorpage.value = true
      return
    }
    if(res){
      // console.log(res)
      let _data = res.data
      let _Showpics = (_data.pics.split(',')[0] === '')
      coverageDeatail.value = {
        id: _data.id || '',
        logo: (_data.ext_news_logo.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${_data.ext_news_logo}`:_data.ext_news_logo) || '',
        link: '',
        img: (_data.ico.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${_data.ico}`:_data.ico) || '',
        desc: _data.ext_news_desc || '',
        name: _data.title || '',
        time: formatDate(_data.update_time) || '',
        tags: _data.tags || '',
        author: _data.author || '',
        visits: _data.visits || '',
        source: _data.source || '',
        news_tag: _data.ext_news_tag || '',
        content: _data.content || '',
        pics: !_Showpics && _data.pics.split(',').map(tt=>{
          return (tt.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${tt}`: tt) || ''
        }) || [],
        btnText: _data.ext_news_btn_text || '',
        btnLink: _data.ext_news_btn_link || '',
        hashtag: _data.ext_news_hashtag.split(',') || [],
      }
      changeassociationData(JSON.parse(_data.ext_news_association || "[]"))
    }
  }catch{
    errorpage.value = true
    pageLoading.value = false
  }
  pageLoading.value = false
}
const toassociation = (_id) => {
  router.push(`/news/news-tooth-wiki/${_id}`)
}

  // [
  //   {
  //     type: 'prev',
  //     id: '31',
  //   },
  //   {
  //     type: 'next',
  //     id: '32',
  //   },
  //   {
  //     type: 'association',
  //     lists: [
  //       {
  //         id: '31',
  //         title: 'hahahahaha'
  //       },
  //       {
  //         id: '32',
  //         title: 'hahahahah'
  //       }
  //     ]
  //   }
  // ]
const changeassociationData = (_data:any) =>{
  if(Array.isArray(_data)){
    _data.forEach(item=>{
      if(item.type === 'prev'){
        if(item.id){
          associationData.value.isshowprev = true
          associationData.value.prev_id = item.id
        }
      }else if(item.type === 'next'){
        if(item.id){
          associationData.value.isshownext = true
          associationData.value.next_id = item.id
        }
      }else if(item.type === 'association'){
        associationData.value.lists = [
          ...item.lists
        ]
      }
    })
  }
}

let associationData = ref({
  isshowprev: false,
  isshownext: false,
  prev_id: '',
  next_id: '',
  lists: <any>[]
})

let topimgSwiperRef = {
  slideToLoop: (a)=>{}
}
const settopimgSwiperRef = (swiper:any) => {
  topimgSwiperRef = swiper;
}
let topimgCur = ref(1)
const handleLineCur = (_value) =>{
  topimgSwiperRef.slideToLoop(_value-1)
  topimgCur.value = _value
}
const changetopimg = (swiper:any) =>{
  topimgCur.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
}

onMounted(()=>{
  setTimeout(()=>{
    getDetail()
  })
})
const handlegetData = () =>{
  getDetail()
}


if(process.server){
  getDetail()
}
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor articlePage">
      <div class="index_title pageCon articlePage-title">牙齒百科</div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>主頁</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>睇牙新資訊</span>
        </nuxt-link>
        <span :title="'牙齒百科'">牙齒百科</span>
      </div>
      <div class="articlePage-in" v-if="!errorpage" v-loading="pageLoading">
        <!-- <div class="content-topimg">
            <img :src="coverageDeatail.img" :alt="coverageDeatail.name" :title="coverageDeatail.name">
        </div> -->
        <div class="content-topimg" v-if="coverageDeatail.pics.length">
          <Swiper @swiper="settopimgSwiperRef" @slideChange="changetopimg">
            <Swiper-slide v-for="(topimg,topimgIndex) in coverageDeatail.pics" :key="topimgIndex">
              <img :src="topimg" alt="">
            </Swiper-slide>
          </Swiper>
          <div class="content-topimg-line" :style="{'max-width': (coverageDeatail.pics.length<5 ? `${50 * coverageDeatail.pics.length}px` : '330px')}" v-if="coverageDeatail.pics.length>1">
            <PageSwiperPointLine :latestNewsNum="coverageDeatail.pics.length" :latestNewsCurrent="topimgCur" @changeLineCur="handleLineCur"></PageSwiperPointLine>
          </div>
        </div>
        <div class="content-topimg" v-else>
            <img :src="coverageDeatail.img" :alt="coverageDeatail.name" :title="coverageDeatail.name">
        </div>
        <div class="content-title">
          <h1>{{coverageDeatail.name}}</h1>
        </div>
        <div class="content" v-html="coverageDeatail.content">
          
        </div>
        <div class="content-bbtn" v-if="coverageDeatail.btnText !== ''">
          <div class="content-bbtn-in">
            <PageAnimBtnTypeTwo :link="coverageDeatail.btnLink" :str="coverageDeatail.btnText" />
            <img class="content-bbtn-in-img" src="@/assets/images/icon_35.svg" alt="">
          </div>
          
        </div>
        <div class="content-hashtag">
          <div class="content-hashtag-in" v-for="(hashtagItem,hashtagIndex) in coverageDeatail.hashtag" :key="hashtagIndex">
            {{hashtagItem}}
          </div>
        </div>
        <div class="content-bdetail">
          <div class="content-bdetail-in">
            <div class="context">
              <!-- <div>資料來源︰<a :href="coverageDeatail.source">原文鏈接</a></div> -->
              <div>瀏覽次數︰{{coverageDeatail.visits || 0}}</div>
              <div>更新時間︰{{coverageDeatail.time}}</div>
              <div class="righeBox">
                <span class="copy" title="複製鏈接" @click="copyText"></span>
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.ckjhk.com/news/news-tooth-wiki/${_nid}`" target="_block" class="facebook" title="分享facebook"></a>
              </div>
            </div>
            <div class="btn">
              <el-button :style="{background: (!associationData.isshowprev ? '#FF85AF': '#FC1682')}" :disabled="!associationData.isshowprev" @click="toassociation(associationData.prev_id)">上一篇</el-button>
              <nuxt-link :to="'/news/tooth-wiki'">返回所有文章目錄</nuxt-link>
              <el-button :style="{background: (!associationData.isshownext ? '#FF85AF': '#FC1682')}" :disabled="!associationData.isshownext" @click="toassociation(associationData.next_id)">下一篇</el-button>
              <!-- <a href="#" v-disabled="true">下一篇</a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="articlePage-err" v-else>
        <span>服務異常或内容已删除！</span>
      </div>
      <!-- <div @click="handlegetData">獲取數據</div> -->
      <NewAddress />
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
.articlePage{
  &-err{
    padding: 100px 0;
    text-align: center;
  }
}
.content-topimg{
  width: 100%;
  max-width: 960px;
  margin: 63px auto 0;
  img{
    width: 100%;
  }
  &-line{
    margin: 40px auto 50px;
  }
}
.content-title{
  width: calc(100% - 60px);
  max-width: 960px;
  margin: 30px auto 0;
  color: var(--indexColor1);
  font-size: 50px;
}
.content{
  width: calc(100% - 60px);
  max-width: 960px;
  margin: 0 auto calc(37 / 1920 * 100%);
  height: auto;
  overflow: hidden;
  :deep(span){
    text-wrap: wrap !important;
    word-break: break-all !important;
  }
  :deep(.content-img img){
    margin: 8px 0;
  }
  :deep(.content-img){
    width: 100%;
  }
  :deep(.content-h1){
    margin-top: 30px;
    color: var(--indexColor1);
    font-size: 50px;
  }
  :deep(.content-time){
    margin: 50px 0;
    color: #666;
    font-size: 28px;
  }
  :deep(.content-h2){
    color: var(--indexColor1);
    font-size: 30px;
  }
  :deep(.content-text){
    color: var(--textColor);
    font-size: 20px;
    font-family: var(--contextFamily);
    span{
      font-family: var(--contextFamily);
    }
  } 
  :deep(.indexColor){
    color: var(--indexColor1);
  }
  :deep(.textColor){
    color: var(--textColor);
  }
  :deep(.md-flex-col){
    flex-direction: row;
  }
  :deep(.md-p-30){
    padding: 0;
  }
  :deep(.justify-between){
    justify-content: space-between;
  }
  :deep(.underline){
    text-decoration: underline;
  }
  :deep(.content-time-2){
    color: var(--textColor);
    font-size: 20px;
    margin-top: 35px;
  }
}
.content-bbtn{
  display: flex;
  justify-content: center;
  padding: 50px 0;
  position: relative;
  &-in{
    position: relative;
    &-img{
      position: absolute;
      z-index: 1;
      right: -5px;
      bottom: -5px;
      width: 45px;
    }
  }
  
}
.content-hashtag{
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 60px);
  max-width: 960px;
  margin: 30px auto 100px;
  &-in{
    font-size: 20px;
    line-height: 100%;
    color: var(--textColor);
    border-bottom: 1px solid var(--textColor);
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
.content-bdetail{
  background: linear-gradient(180deg, rgba(252, 22, 130, 0.40) -68.47%, rgba(252, 22, 130, 0.28) -68.46%, rgba(255, 168, 198, 0.00) 63.88%);
  width: 100%;
  &-in{
    width: calc(100% - 60px);
    max-width: 960px;
    margin: 0 auto;
    padding: 46px 0 0;
    .context{
      color: var(--textColor);
      text-align: justify;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 41.6px */
      letter-spacing: 2.6px;
      position: relative;
      div{
        a{
          color: var(--indexColor1);
          transition: all .3s;
          &:hover{
            color: #FF85AF;
          }
        }
      }
      .righeBox{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        span,a{
          width: 82px;
          height: 82px;
          display: block;
          transition: all .3s;
          cursor: pointer;
          &.copy{
            background: url(@/assets/images/icon_19.svg);
            background-size: 100% 100%;
          }
          &.facebook{
            background: url(@/assets/images/icon_20.svg);
            background-size: 100% 100%;
            margin-left: 14px;
          }
          &:hover{
            opacity: .7;
          }
        }
      }
    }
    .news{
      margin-top: calc(55 / 960 * 100%);
      color: var(--textColor);
      text-align: justify;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 41.6px */
      letter-spacing: 2.6px;
      a{
        color: var(--indexColor1);
        transition: all .3s;
        &:hover{
          color: #FF85AF;
        }
      }
    }
    .tags{
      margin-top: calc(55 / 960 * 100%);
      span{
        color: var(--textColor);
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 41.6px */
        letter-spacing: 2.6px;
        text-decoration: underline;
      }
    }
    .btn{
      display: flex;
      justify-content: space-between;
      margin-top: calc(55 / 960 * 100%);
      button,a{
        color: #fff;
        text-align: center;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 56px */
        letter-spacing: 7px;
        background: var(--indexColor1);
        border-radius: 50px;
        box-shadow: 3px 3px 12.4px 0px rgba(252, 22, 130, 0.50);
        padding: calc(7 / 960 * 100%) calc(40 / 960 * 100%);
        transition: all .3s;
        height: auto;
        border: none;
        &:hover{
          background: #FF85AF;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1600px) {
  .content-bbtn{
    &-in{
      &-img{
        width: 3.5vw;
        max-width: 45px;
        min-width: 35px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 850px) {
  .content-bdetail{
    .btn{
      button,a{
        font-size: 24px;
      }
    }
  }
  
}
@media screen and (max-width: 768px) {
  .articlePage{
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
  .content-topimg{
    margin-top: 30px;
  }
  .content-title{
    margin-top: 30px;
    font-size: 28px;
  }
  .content{
    // width: 100%;
    margin-bottom: 50px;
    :deep(.content-h1){
      // padding: 0 30px;
      margin-top: 30px;
      font-size: 20px;
      span{
        font-size: 28px !important;
        font-weight: 500 !important;
        line-height: 44.8px;
        font-family: var(--indexFontFamily) !important;
      }
    }
    :deep(.content-time){
      padding: 0 30px;
      margin: 10px 0 30px;
      font-size: 16px;
    }
    :deep(.content-h2){
      padding: 0 30px;
      font-size: 20px;
    }
    :deep(.content-text){
      padding: 0 30px;
      font-size: 16px;
      display: inline-block;
      text-align: justify;
    }
    :deep(.md-flex-col){
      flex-direction: column;
    }
    :deep(.md-p-30){
      padding: 0 30px;
    }
    :deep(.content-time-2){
      margin: 0 30px 23px;
      font-size: 16px;
    }

  }
  .content-bbtn{
    padding: 0 0 50px;
    &-in{
      &-img{
        width: 30px;
      }
    }
  }
  .content-hashtag{
    margin: 0px auto 50px;
    &-in{
      font-size: 16px;
    }
  }
  .content-bdetail{
    &-in{
      padding: 35px 0 0;
      .context{
        font-size: 15px;
        letter-spacing: 1px;
        .righeBox{
          span,a{
            width: 40px;
            height: 40px;
            &.facebook{
              margin-left: 10px;
            }
          }
        }
      }
      .news{
        font-size: 15px;
      }
      .tags{
        span{
          font-size: 15px;
        }
      }
      .btn{
        flex-wrap: wrap;
        margin-top: 30px;
        button,a{
          font-size: 22px;
          padding: 8px 29px;
          letter-spacing: 2px;
          width: calc(50% - 15px);
        }
        button:nth-of-type(1){
          order: 2;
        }
        button:nth-of-type(2){
          order: 3;
        }
        a{
          width: 100%;
          order: 1;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>