<script lang="ts" setup>

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
let informationLists = ref([
  {
    id: '',
    img: '',
    desc: '',
    name: '',
    time: ''
  }
])
const formatDate = (dateString) =>{
  let _date = new Date(dateString);
  if(
    _date.getTime() > Date.now() - 86400000*2
  ){
    if(Math.floor((Date.now() - _date.getTime())/1000/60/60)){
      return Math.floor((Date.now() - _date.getTime())/1000/60/60)+'小時前'
    }else{
      return '剛剛'
    }
  }else if(
    _date.getTime() > Date.now() - 86400000*7
  ){
    return Math.floor((Date.now() - _date.getTime())/1000/60/60/24)+'天前'
  }else{
    var date = new Date(dateString);  
    var year = date.getFullYear();  
    var month = ("0" + (date.getMonth() + 1)).slice(-2); 
    var day = ("0" + date.getDate()).slice(-2);  
    return year + "年" + month + "月" + day + "日";  
    }
}  

let totalPageNum = ref(1)
let actPageNum = ref(1) 
let loadingShow = ref(false)

const getNewsLists = async () => {
  loadingShow.value = true
  try{
    const _res:any = await useFetch(`https://admin.ckjhk.com/api.php/list/16/page/${actPageNum.value}/num/6`,{
      method: 'post',
    });
    let res = JSON.parse(_res.data.value) || null
    if(res){
      totalPageNum.value = Math.ceil(res.rowtotal / 6)
      informationLists.value = res.data.map(item=>{
        return{
          id: item.id || '',
          img: (item.ico.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${item.ico}`:item.ico) || '',
          desc: item.ext_news_desc || '',
          name: item.title || '',
          time: formatDate(item.update_time) || ''
        }
      })
    }
    sessionStorage.setItem('toothWikiPage', String(actPageNum.value))
    loadingShow.value = false
  }catch{
    errorpage.value = true
    loadingShow.value = false
  }
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

onMounted(()=>{
  if(sessionStorage.getItem('toothWikiPage')){
    actPageNum.value = Number(sessionStorage.getItem('toothWikiPage')) || 1
  }
  setTimeout(()=>{
    getNewsLists()
  })
})


if(process.server){
  // console.log('server');
  getNewsLists()
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
const shareFacebook = (event,id) =>{
  event.preventDefault();
  window.open(`https://www.facebook.com/sharer/sharer.php?u=https://www.ckjhk.com/news/news-tooth-wiki/${id}`)  
}

</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor informationPage">
      <div class="index_title smallPageCon informationPage-title" id="information">牙齒百科</div>
      <div class="tabNav noTitle smallPageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <span>主頁</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>睇牙新資訊</span>
        </nuxt-link>
        <span :title="'牙齒百科'">牙齒百科</span>
      </div>
      <div class="smallPageCon">
        <!-- <nuxt-link to="/news/news-tooth-wiki/102">测试</nuxt-link> -->
        <div class="lists" v-if="!errorpage">
          <div v-loading="loadingShow" class="listsbox">
            <nuxt-link :to="`/news/news-tooth-wiki/${item.id}`" :id="`i${item.id}`" class="lists-in" v-for="(item,index) in informationLists" :key="index" @click="handlelink(item.id)">
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
                      {{item.time}} by ckjhk - Leave a comment
                    </span>
                    <svg @click.stop="shareFacebook($event,item.id)" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M7.4227 20.8082C7.42449 20.0204 7.41199 19.2309 7.44593 18.4448C7.53704 16.295 8.53036 14.2494 10.2714 12.8554C11.3862 11.9634 12.6957 11.406 14.1893 11.1773C14.3956 11.1453 14.6037 11.1285 14.8181 11.1083C14.9066 11.0999 14.9744 11.0293 14.9744 10.9452V8.25734C14.9744 8.11862 15.1451 8.04295 15.2594 8.13039L21.5203 12.9303C21.6061 12.9958 21.6061 13.1194 21.5203 13.185C19.4354 14.7892 17.3622 16.3841 15.2674 17.9958C15.1531 18.0833 14.9825 18.0076 14.9825 17.8689V15.2062C14.9825 15.1078 14.8905 15.0313 14.7869 15.0431C14.4992 15.0759 14.2214 15.1028 13.949 15.1558C11.5148 15.6257 9.69162 16.8852 8.54108 18.9602C8.28293 19.4268 7.86845 20.3197 7.6219 20.8485C7.57724 20.9452 7.4227 20.9149 7.4236 20.809L7.4227 20.8082Z" stroke="#AAAAAA" stroke-width="2" stroke-miterlimit="10"/>
<circle cx="14.5" cy="14.5" r="13.5" stroke="#AAAAAA" stroke-width="2"/>
</svg>
                  </div>
                </div>
                <div class="desc" v-html="item.desc">
                </div>
                <div style="flex: 1;"></div>
                <div class="btn">
                  <PageAnimBtnTypeTwo :link="`/news/news-tooth-wiki/${item.id}`" str="查看原文" />
                </div>
              </div>
            </nuxt-link>
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
        <div class="lists" v-else></div>
      </div>
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
          justify-content: space-between;
          span{
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
          svg{
            display: inline-block;
            vertical-align: middle;
            margin-top: -2px;
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
        border: 2px solid var(--indexColor1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        letter-spacing: -0.8px;
        transition: all .3s;
        &.act{
          background: var(--indexColor1);
          color: #fff;
        }
      }
    }
  }
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
            svg{
              width: 1.5104vw;
              height: 1.5104vw;
              margin-top: -0.1042vw;
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
            span{
              text-align: left;
              font-size: 16px;
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
