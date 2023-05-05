<script lang="ts" setup>

const activeIndex = 0
const handleNewsItem = (_idx:number) =>{
  newsLists.value[_idx].isShow = true
}
const newsLists = ref([
  {
    isShow: false
  },
  {
    isShow: false
  },
  {
    isShow: false
  },
  {
    isShow: false
  }
])

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

</script>

<template>
  <div class="bigPageCon">
    <PageHeader
      :headerBg="'https://static.cmereye.com/imgs/2023/04/fbca451e1a8a9ba4.jpg'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/65b135487a85f4f0.jpg'"
      :titlePosition="'left'"
    /> 
    <div class="newsPage">
      <LatestNews :titleLeftShow="true" />
      <div class="newsBox pageCon">
        <div class="newsItem" v-for="(newItem,newIndex) in newsLists" :key="newIndex" @click="handleNewsItem(newIndex)">
          <div class="newsItem-in">
            <div class="newsItem-in-l"></div>
            <div class="newsItem-in-c">
              <div class="title">【新年期間營業時間更改通知】</div>
              <svg v-show="!newItem.isShow" class="mbBox" width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0H0L6.25 10L12.5 0Z" fill="#FFA09E"/>
                <path d="M12.5 13H0L6.25 23L12.5 13Z" fill="#FFA09E"/>
              </svg>
              <!-- <div class="pcShow" v-show="true"> -->
                <div :class="'content'" v-show="windowWidth > 768 ? true : newItem.isShow">
                  <span>農曆新年期間，我們的門店會繼續營業，</span>
                  <span>但營業時間將有以下更改： 不便之處, 敬請原諒</span>
                </div>
                <div class="time" v-show="windowWidth > 768 ? true : newItem.isShow">
                  <span>年三十晚 (24/1)：11:00am – 7:00pm</span>
                  <span>年初一、初二 (25-26/1)：11:00am-6:00pm</span>
                  <span>年初三、初四 (27-28/1)：照常營業 (11:00am-9:30pm)</span>
                </div>
                <div class="btn" v-show="windowWidth > 768 ? true : newItem.isShow">營業時間安排</div>
              </div>
            <!-- </div> -->
            <div class="newsItem-in-r">
              <span>11</span>
              <span>JAN</span>
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
  .newsPage{
    background: #fff;
    padding-bottom: 140px;
  }
  .newsItem{
    width: 100%;
    height: 550px;
    background: #FFF1F0;
    border-radius: 15px;
    margin-top: 76px;
    padding: 43px;
    box-sizing: border-box;
    &-in{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      &-l{
        width: 464px;
        height: 100%;
        background: #FFDDDA;
      }
      &-c{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 25px;
        box-sizing: border-box;
        font-family: 'Arial';
        font-weight: 400;
        color: #FFA09E;
        justify-content: space-between;
        svg{
          margin: 10px auto 0;
        }
        .title{
          height: 60px;
          font-size: 3.125rem;
          line-height: 130%;
          border-left: 20px solid #FFCECB;
        }
        .content{
          font-size: 1.75rem;
          line-height: 160%;
          // margin-top: 24px;
          span{
            width: 100%;
            display: inline-block;
          }
        }
        .time{
          font-size: 1.75rem;
          line-height: 160%;
          // margin-top: 36px;
          span{
            width: 100%;
            display: inline-block;
            &::before{
              content: '';
              width: 7px;
              height: 7px;
              display: inline-block;
              background: #FFA09E;
              border-radius: 50%;
              vertical-align: middle;
              margin-top: -5px;
              margin-right: 10px;
            }
          }
        }
        .btn{
          background: #fff;
          display: inline-block;
          width: 240px;
          height: 70px;
          line-height: 70px;
          font-size: 2rem;
          color: #FFA09E;
          text-align: center;
          // margin-top: 46px;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          border-radius: 40px;
        }
      }
      &-r{
        width: 150px;
        height: 150px;
        background: #FFCECB;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 160%;
          text-align: center;
          color: #FFFFFF;
          width: 100px;
          display: block;
          &:first-child{
            border-bottom: 4px solid #fff;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .newsPage{
      padding-bottom: 90px;
    }
    .newsBox{
      padding: 30px;
      box-sizing: border-box;
    }
    .newsItem{
      padding: 24px 24px 22px;
      height: auto;
      position: all .3s;
      margin-top: 17px;
      &:first-child{
        margin-top: 0;
      }
      &-in{
        flex-direction: column;
        position: relative;
        &-l{
          width: 100%;
          padding-top: 100%;
        }
        &-c{
          width: 100%;
          text-align: center;
          padding-left: 0;
          margin-top: 60px;
          .title{
            height: auto;
            width: 100%;
            font-size: 1.125rem;
            border-left: none;
          }
          .content{
            font-size: .875rem;
            text-align: left;
            margin-top: 12px;
          }
          .time{
            font-size: .875rem;
            text-align: left;
            margin-top: 12px;
            margin-left: 10px;
            span{
              display: block;
              &::before{
                content: '';
                width: 4px;
                height: 4px;
                margin-top: -4px;
                margin-left: -10px;
              }
            }
            
          }
          .btn{
            width: 158px;
            height: 46px;
            line-height: 46px;
            font-size: 1.125rem;
            margin: 20px auto 0;
          }
        }
        &-r{
          width: 26.66vw;
          height: 26.66vw;
          // width: 100px;
          // height: 100px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          // top: 215px;
          top: 58vw;
          span{
            font-weight: 400;
            font-size: 2.4rem;
            width: 70px;
            line-height: 130%;
            &:last-child{
              font-size: 1.67rem;
              line-height: 160%;
            }
          }
        }
      }
    }
  }
</style>