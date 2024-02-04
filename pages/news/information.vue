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
    var date = new Date(dateString);  
    var year = date.getFullYear();  
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // getMonth() is zero-based  
    var day = ("0" + date.getDate()).slice(-2);  
    return year + "年" + month + "月" + day + "日";  
}  

const getNewsLists = async () => {
  try{
    const _res:any = await useFetch('https://admin.ckjhk.com/api.php/list/15',{
      method: 'post',
    });
    let res = JSON.parse(_res.data.value) || null
    if(res){
      console.log(res)
      informationLists.value = res.data.map(item=>{
        return{
          id: item.id || '',
          img: (item.ico.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${item.ico}`:item.ico) || '',
          desc: item.ext_news_desc || '',
          name: item.title || '',
          time: formatDate(item.ext_news_time) || ''
        }
      })
    }
  }catch{
    errorpage.value = true
  }
  // console.log(coverageLists.value)
}


// onMounted(()=>{
//   setTimeout(()=>{
//     getNewsLists()
//   })
// })
if(process.server){
  // console.log('server');
  getNewsLists()
}else{
  // console.log('client');
  getNewsLists()
}
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
          <div class="lists-in" v-for="(item,index) in informationLists" :key="index">
            <div class="lists-in-img">
              <img :src="item.img" alt="">
            </div>
            <div class="lists-in-context">
              <div class="lists-in-context-top">
                <div class="title">
                  {{item.name}}
                </div>
                <div class="time">
                  <span>{{item.time}}</span>
                </div>
              </div>
              <div class="desc" v-html="item.desc">
              </div>
              <div class="btn">
                <a :href="`/news/article/${item.id}?SDLDNZYP=2`">查看全文</a>
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