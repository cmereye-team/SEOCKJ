<template>
  <div class="bigPageCon">
    <PageHeader :headerBg="'https://static.cmereye.com/imgs/2023/04/fbca451e1a8a9ba4.jpg'" :titlePosition="'left'" /> 
    <div class="newsPage">
      <LatestNews />
      <div class="pageCon">
        <div class="newsItem" v-for="item in 4" :key="item">
          <div class="newsItem-in">
            <div class="newsItem-in-l"></div>
            <div class="newsItem-in-c">
              <div class="title">
                【新年期間營業時間更改通知】
              </div>
              <div class="content">
                <span>農曆新年期間，我們的門店會繼續營業，</span>
                <span>但營業時間將有以下更改： 不便之處, 敬請原諒</span>
              </div>
              <div class="time">
                <span>年三十晚 (24/1)：11:00am – 7:00pm</span>
                <span>年初一、初二 (25-26/1)：11:00am-6:00pm</span>
                <span>年初三、初四 (27-28/1)：照常營業 (11:00am-9:30pm)</span>
              </div>
              <div class="btn">營業時間安排</div>
            </div>
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
        .title{
          height: 60px;
          font-weight: 400;
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
  }
</style>