<template>
  <div class="bigPageCon">
    <PageHeader :headerBg="'https://static.cmereye.com/imgs/2023/04/3bb8b77175f2c68a.jpg'" :titlePosition="'left'" />
    <div class="doctorPage">
      <div class="doctorPage-in pageCon">
        <div class="index_title">醫生團隊</div>
        <div class="doctorPage-in-text">醫療團隊 EXPERTS</div>
        <div class="doctorPage-in-content">傾心打造貼心, 專業的牙科連鎖</div>
        <div class="doctorPage-in-tabNav">
          <div class="doctorPage-in-tabNav-l">
            <span>主頁</span>
            <span>醫生團隊</span>
            <span>羅湖區</span>
          </div>
          <div>
            <AreaTab />
          </div>
        </div>
        <div class="doctorPage-in-lists">
        <div class="doctorItem" v-for="item in 5" :key="item">
          <div class="doctorItem-l">
            <img src="@/assets/images/doctor/doctor01.png" alt="">
          </div>
          <div class="doctorItem-r">
            <div class="title">愛康健口腔醫院院長</div>
            <div class="org">
              機構：深圳愛康健口腔醫院,口腔牙周病科,口腔修復科,牙體牙髓科
            </div>
            <div class="expertise">
              擅長：種植修復，微創美學修復，全口咬合重建等；熟練應用口腔顯微鏡並在顯微放大設備下進行種植手術、牙周美學手術及各類修復操作。熟練處理牙周病及牙體缺失、四環素、氟斑牙的全口美學修...
            </div>
            <div class="name">
              <span>鞏賢平</span> 
              <span>主治醫師, 口腔醫學碩士</span>
            </div>
            <div class="btn">
              了解更多<img src="@/assets/images/icon_04.png" />
            </div>
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
  .doctorPage{
    background: #fff;
    padding-bottom: 143px;
    &-in{
      padding-top: 143px;
      &-text{
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 160%;
        color: #4D4D4D;
        margin-top: 44px;
      }
      &-content{
        font-weight: 700;
        font-size: 3.125rem;
        line-height: 160%;
        margin-top: 19px;
        color: #4D4D4D;
      }
      &-tabNav{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-l{
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 160%;
          color: #CBCBCB;
          span{
            &:not(:last-child)::after{
              content: '';
              width: 20px;
              height: 2px;
              margin: 0 10px;
              background: #CBCBCB;
              display: inline-block;
              vertical-align: middle;
              margin-top: -4px;
            }
            &:last-child{
              color: #FFA09E;
            }
          }
        }
      }
      &-lists{
        margin-top: 68px;
        height: 1491px;
        overflow: hidden;
        overflow-y: auto;
        .doctorItem{
          width: 100%;
          height: 429px;
          margin-top: 68px;
          display: flex;
          &-l{
            width: 429px;
            height: 100%;
            background: #FFDDDA;
            border-radius: 10px;
            position: relative;
            img{
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          &-r{
            flex: 1;
            padding-left: 40px;
            color: #4D4D4D;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title{
              font-weight: 900;
              font-size: 24px;
              line-height: 200%;
            }
            .org{
              font-weight: 600;
              font-size: 24px;
              width: 45%;
            }
            .expertise{
              font-weight: 600;
              font-size: 24px;
            }
            .name{
              font-weight: 900;
              font-size: 24px;
              line-height: 160%;
              color: #4D4D4D;
              span{
                margin-right: 20px;
                &:last-child{
                  font-weight: 700;
                  padding-left: 20px;
                  border-left: 2px solid #4D4D4D;
                }
              }
            }
            .btn{
              font-weight: 500;
              font-size: 23px;
              margin-top: 66px;
              color: #FFA09E;
              cursor: pointer;
              img{
                width: 21px;
                display: inline-block;
                margin-left: 10px;
                vertical-align: middle;
                margin-top: -2px;
              }
            }
          }
          &:first-child{
            margin-top: 30px;
          }
        }
        &::-webkit-scrollbar {
          // width: 20px;
          background: none;
        }
        &::-webkit-scrollbar-thumb{
          background: #FFA09E;
        }
        &::-webkit-scrollbar-track{
          background: #FFF1F0;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .doctorPage{
      padding-bottom: 90px;
    }
  }
</style>