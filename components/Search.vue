<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  showSearchBox:{
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['changeStatic'])

const changeSearchStatic = () =>{
  emits('changeStatic',false)
}

let saveKeyWords = ref('')
let Keywords = ref('');

const handleSearchBtn = () =>{
  if(Keywords.value === ''){
    ElMessage({
      showClose: true,
      message: '請輸入搜索内容',
      type: 'warning'
    })
    return
  }
  if(saveKeyWords.value === Keywords.value) return
  totalPageNum.value = 0
  actPageNum.value = 1
  searchLists.value = []
  saveKeyWords.value = Keywords.value
  getData()
}
let totalPageNum = ref(0)
let actPageNum = ref(1) 
let loadingShow = ref(false)
let linkConfig = [
  {
    name: '最新資訊',
    scode: '14',
    link: '/news/article/'
  },
  {
    name: '最新資訊',
    scode: '15',
    link: '/news/news-information/'
  },
  {
    name: '牙齒百科',
    scode: '16',
    link: '/news/news-tooth-wiki/'
  },
  {
    name: '醫生分享',
    scode: '18',
    link: ''
  }
]

const getUrl = (data) => {
  let _a = {
    type: '',
    link: '#'
  }
  let obj = linkConfig.find(item=>item.scode === data.scode)
  if(obj){
    _a.type = obj.name
    if(obj.scode === '18'){
      _a.link = data.ext_videosurl
    }else{
      _a.link = `${obj.link}${data.id}`
    }
  }
  return _a
}

const getData = async () => {
  loadingShow.value = true
  setTimeout(async()=>{
  try{
    let params = new FormData()
    params.append('field', 'title|ext_news_hashtag')
    params.append('keyword', Keywords.value)
    let _res:any = await useFetch(`https://admin.ckjhk.com/api.php/cms/search/page/${actPageNum.value}/num/10`,{
      method: 'post',
      body: params
    });
    let res = JSON.parse(_res.data.value) || null
    if(res){
      totalPageNum.value = res.rowtotal
      let _searchLists = res.data.map(item=>{
        return{
          id: item.id || '',
          img: (item.ico.indexOf('/static/upload/image') !== -1 ? `https://admin.ckjhk.com${item.ico}`:item.ico) || '',
          name: item.title || '',
          // time: formatDate(item.update_time) || '',
          scode: item.scode,
          link: getUrl(item).link,
          type: getUrl(item).type
        }
      })
      searchLists.value = [
        ...searchLists.value,
        ..._searchLists
      ]
    }
    loadingShow.value = false
  }catch{
    loadingShow.value = false
  }
  },1000)
}

const loadMore = () => {
  if(actPageNum.value >= Math.ceil(totalPageNum.value / 10)) return
  actPageNum.value++
  getData()
}

interface listTypes {
  id: string,
  name: string,
  img: string,
  link: string,
  scode: string,
  type: string
}

let searchLists = ref([] as Array<listTypes>);

const handlebgShow = () =>{
  emits('changeStatic',false)
}
</script>

<template>
  <div class="search" :class="{show: showSearchBox}" @click.stop="handlebgShow()">
      <div class="search-in" @click.stop="()=>{}">
        <div class="search-in-t">
          <div class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
              <path d="M13.9922 15.6445C13.2503 16.136 12.5154 16.5066 11.721 16.7549C9.50314 17.4479 7.32315 17.3613 5.19566 16.4208C3.41845 15.6353 2.05693 14.4033 1.10765 12.7557C0.253034 11.2721 -0.099826 9.67442 0.0241054 7.97594C0.132545 6.48405 0.619665 5.11711 1.46567 3.87345C2.31339 2.62812 3.42534 1.65935 4.79288 0.96796C6.16129 0.276574 7.61749 -0.0407965 9.15889 0.00418517C11.0342 0.0583298 12.7211 0.634762 14.2177 1.72515C15.8839 2.93966 16.995 4.52818 17.5019 6.48488C18.0854 8.73563 17.7644 10.8814 16.5836 12.9039C16.396 13.2246 16.3762 13.1238 16.6533 13.3929C18.2317 14.924 19.8118 16.4533 21.3928 17.9819C21.8903 18.4625 22.1166 19.0289 21.941 19.702C21.6011 21.0023 19.934 21.4655 18.8944 20.44C18.1017 19.6579 17.2953 18.8898 16.4949 18.1152C15.71 17.3555 14.9243 16.5958 14.1411 15.8344C14.086 15.7811 14.0456 15.7145 13.9914 15.6445H13.9922ZM2.87969 8.59236C2.86764 11.7861 5.54938 14.3925 8.86885 14.4142C12.1728 14.4358 14.8942 11.8369 14.8942 8.61152C14.8942 5.36034 12.2004 2.79388 8.88865 2.79138C5.57864 2.78889 2.8926 5.38783 2.88055 8.59319L2.87969 8.59236Z" fill="#E15697"/>
            </svg>
            <span>站内搜索</span>
          </div>
          <div class="clear" @click="changeSearchStatic">
            <img src="@/assets/images/icon_7.svg" alt="">
          </div>
        </div>
        <div class="search-in-c">
          <input type="text" v-model="Keywords" maxlength="30" placeholder="輸入搜索内容">
          <div class="btn" @click.stop="handleSearchBtn">
            搜索
          </div>
        </div>
        <div class="search-in-b" v-loading="loadingShow">
          <div class="lists" v-if="searchLists.length">
            <div class="lists-in" v-for="item in searchLists" :key="item.id">
              <nuxt-link :to="item.link" :title="item.name">
                <div class="image">
                  <img :src="item.img" :alt="item.name">
                </div>
                <!-- <h2>{{item.type}}</h2> -->
                <h3>{{item.name}}</h3>
              </nuxt-link>
            </div>
            <div class="lists-in">
              <section v-if="searchLists.length >= totalPageNum">
                沒有更多了
              </section>
              <section v-else>
                <span @click.stop="loadMore">加載更多</span>
              </section>
            </div>
          </div>
          <div class="message">
            <section v-if="!searchLists.length">暫無搜索内容</section>
            <section v-else>
              <!-- 已顯示 <span>{{searchLists.length}}</span> 條記錄， -->
              共 <span>{{totalPageNum}}</span> 條搜索結果
            </section>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
.search{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.4);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: all .3s;
  &-in{
    width: 50%;
    max-width: 1280px;
    min-height: 300px;
    max-height: 70vh;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    box-shadow: 0 0 8px 3px rgba(225, 86, 151,.5);
    display: flex;
    flex-direction: column;
    &-t{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title{
        display: flex;
        align-items: center;
        svg{
          width: 22px;
          height: 21px;
        }
        span{
          font-size: 18px;
          color: var(--indexColor1);
          font-weight: 600;
          padding-left: 10px;
        }
      }
      .clear{
        cursor: pointer;
      }
    }
    &-c{
      display: flex;
      margin-top: 20px;
      input{
        flex: 5;
        border-radius: 50px 0 0 50px;
        border: 1px solid var(--indexColor1);
        text-indent: 20px;
        color: var(--indexColor1);
        &:focus-visible{
          border: 2px solid var(--indexColor1);
          outline: initial;
        }
      }
      .btn{
        flex: 1;
        background: var(--indexColor1);
        border-radius: 0 50px 50px 0;
        padding: 5px 20px;
        color: #fff;
        text-align: center;
        cursor: pointer;
      }
    }
    &-b{
      margin-top: 20px;
      flex: 1;
      display: flex;
      max-height: 100%;
      flex-direction: column;
      overflow: hidden;
      .lists{
        width: 100%;
        max-height: 100%;
        overflow: hidden;
        overflow-y: auto;
        &-in{
          margin: 10px 0;
          cursor: pointer;
          width: 100%;
          padding: 0 10px;
          &>a{
            display: flex;
            gap: 15px;
            align-items: center;
            width: 100%;
            height: 50px;
            overflow: hidden;
            .image{
              width: 50px;
              img{
                width: 100%;
                height: auto;
              }
            }
            // h2{
            //   width: 70px;
            //   font-size: 16px;
            // }
            h3{
              font-size: 16px;
              flex: 1;
              display: -webkit-box;  
              -webkit-line-clamp: 1; 
              line-clamp: 1; 
              -webkit-box-orient: vertical;  
              overflow: hidden;  
              text-overflow: ellipsis;
            }
          }
          &:hover{
            background: rgba(225, 86, 151,.1);
          }
          &:last-child{
            text-align: center;
            span{
              color: var(--indexColor1);
              font-size: 18px;
            }
            &:hover{
              background: #fff;
            }
          }
        }
        &::-webkit-scrollbar{
          width: 10px;
        }
        &::-webkit-scrollbar-thumb{
          background: var();
          background: rgba(225, 86, 151,.4);
          border: 2px solid rgba(225, 86, 151,.4);
        }
        &::-webkit-scrollbar-track{
          background: rgba(225, 86, 151,.1);
          border-left: none;
          border-radius: 5px;
        }
      }
      .message{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: var(--textColor);
        margin-top: 20px;
        span{
          color: var(--indexColor1);
        }
      }
    }
  }
  &.show{
    transform: translateY(0);
    opacity: 1;
    visibility: unset;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .search{
    &-in{
      width: 90%;
      max-height: 80vh;
      padding: 10px 15px;
      &-c{
        margin-top: 15px;
        input{
          flex: initial;
          width: 70%;
        }
        .btn{
          flex: 1;
          width: 30%;
        }
      }
      &-b{
        margin-top: 15px;
        .lists{
          &-in{
            margin: 7px 0;
            &>a{
              gap: 10px;
              height: 40px;
              .image{
                width: 40px;
              }
              h3{
                font-size: 14px;
              }
            }
            &:last-child{
              span{
                font-size: 16px;
              }
            }
          }
          &::-webkit-scrollbar{
            width: 6px;
          }
        }
        .message{
          font-size: 14px;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>