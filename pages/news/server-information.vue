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

const formatDate = (dateString) =>{  
    var date = new Date(dateString);  
    var year = date.getFullYear();  
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // getMonth() is zero-based  
    var day = ("0" + date.getDate()).slice(-2);  
    return year + "年" + month + "月" + day + "日";  
}  

let pageNumber = ref(1)
let totalPageNum = ref(1)
let maxPage = 50;

let serverInformationLists:any = ref([])
const getServerNewsLists = async () => {
  try{
    const _res:any = await useFetch(`https://admin.ckjhk.com/api.php/list/15/page/${pageNumber.value}/num/100`,{
      method: 'post',
    });
    let res = JSON.parse(_res.data.value) || null
    if(res){
      totalPageNum.value = Math.ceil(res.rowtotal / 100)
      let _arr = res.data.map(item=>{
        return{
          id: item.id || '',
          img: (item.ico.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${item.ico}`:item.ico) || '',
          desc: item.ext_news_desc || '',
          name: item.title || '',
          time: formatDate(item.ext_news_time) || ''
        }
      })
      serverInformationLists.value = [...serverInformationLists.value, ..._arr]
      if(pageNumber.value < totalPageNum.value && pageNumber.value < maxPage){
        pageNumber.value++
        getServerNewsLists()
      }
    }
  }catch{
    console.log('error')
  }
}

if(process.server){
  getServerNewsLists()
}

</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor informationPage">
      <div class="index_title pageCon informationPage-title" id="information">最新資訊</div>
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
        <div class="serveLink">
          <nuxt-link :to="`/news/news-information/${serverItem.id}`" v-for="(serverItem,serverIndex) in serverInformationLists" :key="serverIndex">
            {{serverItem.name}}
          </nuxt-link>
        </div>
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
.serveLink{
  a{
    font-size: 30px;
    display: block;
    margin-top: 30px;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  
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
  .serveLink{
    a{
      font-size: 20px;
    }
  }
}
</style>