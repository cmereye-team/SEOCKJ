<script lang="ts" setup>
useHead({
  title: "醫生團隊"
})
const doctorDetailLists = [
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/86681f3a9fe6c1d3.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/03459bbf16883ac8.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/f1208f6a5c38f695.png',
  },
]

</script>

<template>
  <div class="bigPageCon">
    <PageHeader
      :headerBg="'https://static.cmereye.com/imgs/2023/04/3bb8b77175f2c68a.jpg'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/f044b7e9793c3038.jpg'"
      :titlePosition="'left'"
    />
    <div class="doctorPage">
      <div class="doctorPage-in pageCon">
        <div class="index_title">醫生團隊</div>
        <div class="doctorPage-in-text">醫療團隊 EXPERTS</div>
        <div class="doctorPage-in-content"><span>傾心打造貼心,</span><span>專業的牙科連鎖</span></div>
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
        <div class="doctorPage-in-lists pcBox">
          <div class="doctorItem" v-for="(item,index) in doctorDetailLists" :key="index">
            <div class="doctorItem-l">
              <img :src="item.imgUrl" alt="">
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
        <div class="mbDoctorList mbBox mbBox">
          <div class="mbDoctorList-t">
            <AreaTab />
          </div>
          <div class="mbDoctorList-c">
            <div class="doctorPage-in-lists">
              <div class="doctorItem" v-for="(item,index) in doctorDetailLists" :key="index">
                <div class="doctorItem-l">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="doctorItem-r">
                  <div class="doctorItem-r-t">
                    <div class="title">愛康健口腔醫院院長</div>
                    <div class="btn">
                      了解更多<img src="@/assets/images/icon_04.png" />
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
          <div class="mbDoctorList-b">
            <span>主頁</span>
            <span>醫生團隊</span>
            <span>羅湖區</span>
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
        // height: 1491px;
        // overflow: hidden;
        // overflow-y: auto;
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
  @media (min-width: 768px) and (max-width: 1452px) {
    .doctorPage{
      &-in{
        &-lists{
          .doctorItem{
            height: 28vw;
            &-l{
              width: 28vw;
              img{
                width: 85%;
              }
            }
            &-r{
              padding-left: 3vw;
              .title{
                font-weight: 900;
                font-size: 1.5vw;
                line-height: 200%;
              }
              .org{
                font-weight: 600;
                font-size: 1.5vw;
              }
              .expertise{
                font-weight: 600;
                font-size: 1.5vw;
              }
              .name{
                font-weight: 900;
                font-size: 1.5vw;
                line-height: 160%;
                span{
                  margin-right: 1.4vw;
                  &:last-child{
                    padding-left: 1.4vw;
                  }
                }
              }
              .btn{
                font-size: 1.6vw;
                margin-top: 4.8vw;
                img{
                  width: 1.4vw;
                  margin-left: .75vw;
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .doctorPage{
      padding-bottom: 90px;
      &-in{
        padding-top: 90px;
        &-text{
          margin-top: 34px;
          font-size: 1.25rem;
          font-weight: 600;
          padding: 0 30px;
        }
        &-content{
          font-size: 1.625rem;
          padding: 0 30px;
          margin-top: 13px;
          span{
            display: block;
            &:last-child{
              margin-left: 100px;
            }
          }
        }
        &-tabNav{
          display: none;
        }
        .mbDoctorList{
          &-c{
            margin: 0 auto;
            box-sizing: border-box;
            width: calc(100% - 60px);
            .doctorPage-in-lists{
              width: 100%;
              margin-top: 50px;
              display: flex;
              overflow-x: scroll;
              scroll-snap-type: x mandatory;
              &::-webkit-scrollbar{
                height: 5px;
              }
              &::-webkit-scrollbar-thumb{
                background: #FFA09E;
                border: none;
                height: 5px;
              }
              &::-webkit-scrollbar-track{
                background: #FFF1F0;
                height: 5px;
              }
              .doctorItem{
                width: calc(100vw - 60px);
                display: block;
                flex-shrink: 0;
                float: left;
                height: auto;
                margin: 30px 30px 30px 0;
                scroll-snap-align: start;
                &-l{
                  width: 100%;
                  padding-top: 100%;
                  height: 0;
                  img{
                    width: 83%;
                  }
                }
                &-r{
                  padding-left: 0;
                  margin-top: 19px;
                  &-t{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  }
                  .title{
                    font-size: 1.25rem;
                    font-weight: 600;
                  }
                  .org{
                    font-weight: 500;
                    font-size: 1rem;
                    width: 100%;
                    margin-top: 20px;
                  }
                  .expertise{
                    margin-top: 25px;
                    font-weight: 500;
                    font-size: 1rem;
                  }
                  .name{
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin-top: 25px;
                    span{
                      margin-right: 20px;
                      &:last-child{
                        padding-left: 20px;
                        border-left: 2px solid #4D4D4D;
                      }
                    }
                  }
                  .btn{
                    font-size: 1rem;
                    margin-top: 0;
                    img{
                      width: 14px;
                      margin-left: 5px;
                    }
                  }
                }
              }
            }
          }
          &-b{
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 160%;
            color: #CBCBCB;
            margin-top: 36px;
            padding: 0 30px;
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
      }
    }
  }
</style>