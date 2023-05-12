<script lang="ts" setup>
import { useAppState } from '~/stores/appState'

const appState = useAppState()
useHead({
  title: "醫生團隊"
})

const doctorLists = [
  // '羅湖區'
  [
    {
      id: '101',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/86681f3a9fe6c1d3.png',
      name: '鞏賢平',
      org: '深圳愛康健口腔醫院,口腔牙周病科,口腔修復科,牙體牙髓科',
      posts: '主治醫師',
      job:'愛康健口腔醫院院長',
      skilled: '種植修復，微創美學修復，全口咬合重建等；熟練應用口腔顯微鏡並在顯微放大設備下進行種植手術、牙周美學手術及各類修復操作。熟練處理牙周病及牙體缺失、四環素、氟斑牙的全口美學修...',
      educated: '口腔醫學碩士'
    },
    {
      id: '102',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/03459bbf16883ac8.png',
      name: '陸卉',
      org: '愛康健口腔醫院',
      posts: '主治醫師',
      job:'愛康健口腔醫院醫師',
      skilled: '現代固定矯治，美國Invisalign隱形矯治，對各類複雜、疑難錯頜牙病例有較深研究。',
      educated: '正畸學碩士'
    },
    {
      id: '103',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/f1208f6a5c38f695.png',
      name: '莊賢安',
      org: '富康口腔门诊',
      posts: '主治醫師',
      job:'愛康健口腔醫院醫師',
      skilled: '电脑微创种植牙修复及治疗，对各种牙痛、牙龈出血、牙松动治疗及复杂牙拔除有丰富的临床经验。',
      educated: '口腔医学学士'
    },
    // {
    //   id: '4',
    //   imgUrl: 'https://static.cmereye.com/imgs/2023/05/f1208f6a5c38f695.png',
    //   name: '郑健',
    //   org: '愛康健口腔醫院',
    //   posts: '执业醫師',
    //   job:'愛康健口腔醫院醫師',
    //   skilled: '擅长麻醉、口腔种植各类上部修复。显微根管治疗，美学树脂充填，微创拔牙，牙体缺损及牙周治疗。',
    //   educated: ''
    // }
  ],
  // '福田區'
  [
  ],
  // '南山區'
  [
  ],
  // '寶安區'
  [
    {
      id: '401',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/4edc3ed2e71f391c.png',
      name: '方宇',
      org: '宝安区 炫雅门诊',
      posts: '主治醫師',
      job:'炫雅口腔门诊院长',
      skilled: '疑难牙体牙髓病治疗、阻生智齿的拔除、各种缺失牙的美容修复、疑难活动义齿修复。尤其在利用高倍显微镜下开展牙髓炎、根尖病变等牙体保存治疗具有较深的造诣。',
      educated: ''
    },
    {
      id: '402',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/9e64ca61ad962a93.png',
      name: '曾紅豔',
      org: '罗湖区,福田区,宝安区,龙华区 李川口腔诊所,康辉门诊,恒洁门诊,雅健门诊,炫雅门诊',
      posts: '牙周醫師',
      job:'深圳爱康健口腔医院牙周科主任',
      skilled: '牙洁治技术、各种牙周疾病的专业治疗及手术治疗（翻瓣术及牙周引导骨组织再造术、龈切除术）以及种植体周围感染疾病的治疗。',
      educated: ''
    },
    {
      id: '403',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/b7da743bf8f1e9d9.png',
      name: '林勉郁',
      org: '寶安區 炫雅門診',
      posts: '主治醫師,種植醫師',
      job:'炫雅口腔門診部醫師',
      skilled: '运用新材料、新技术进行即刻种植即刻修复，恢复美观，追求舒适、种植技术。',
      educated: ''
    },
    {
      id: '404',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/28cd75134a62d7b8.png',
      name: '董唯吉',
      org: '寶安區 炫雅門診',
      posts: '執業醫師',
      job:'炫雅口腔門診部醫師',
      skilled: '活動矯治、隱形矯治、固定矯治，兒童、青少年及成人各類錯頜畸形矯治。方案制定縝密、嚴謹、考慮全面，不僅關註牙列及面部美觀，還關註患者牙周健康、關節健康和氣道健康，特別對於錯頜畸形合並顳下頜關節紊亂病、睡眠暫停低通氣綜合征、生長發育期有口腔不良習慣的患者，能提供協調口頜面部美觀和功能、促進青少年頜骨正常發育的治療方案。',
      educated: '正畸學碩士'
    },
    {
      id: '405',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/dacd93ea06f7e8fa.png',
      name: '張燕',
      org: '寶安區 炫雅門診',
      posts: '執業醫師，兒牙醫師',
      job:'炫雅口腔門診部醫師',
      skilled: '現代根管治療、牙齒美容修復、牙齒美白、微創樹脂充填以及活動牙修復。',
      educated: ''
    },
    {
      id: '406',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/75e9c3b498b3f889.png',
      name: '吳廣學',
      org: '羅湖區,寶安區 富康門診,康輝門診,恒潔門診,炫雅門診,顏麗門診',
      posts: '主治醫師',
      job: '炫雅口腔門診部醫師',
      skilled: '成人隱形矯治；青少年牙列畸形及發育不良的早期診斷、幹預、治療；牙列及面型前突；“地包天”等。對改善呼吸相關的面部發育畸形，笑容美學正畸設計有獨到的見解。',
      educated: '口腔正畸學碩士'
    },
    {
      id: '407',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/4ce86d81805a5d72.png',
      name: '朱艷秀',
      org: '寶安區 炫雅門診',
      posts: '主治醫師，全科醫師',
      job: '炫雅口腔門診部醫師',
      skilled: '各類牙周、牙髓疾病的診斷治療，牙體缺損的修復、各類牙齒的外科拔除。',
      educated: ''
    },
    {
      id: '408',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/c7416cbfed4d1649.png',
      name: '王思',
      org: '福田區,寶安區 王琦口腔診所,炫雅門診',
      posts: '執業醫師，全科醫師',
      job: '炫雅口腔門診部醫師',
      skilled: '各類口腔疾病的診斷與治療；復雜牙的微創拔除；顯微鏡下的根管治療；面部牙齒美學分析、牙體缺損及缺失的微笑美學修復；牙體及牙色美學修復及美白治療等。',
      educated: ''
    },
  ],
  // '龍華區'
  [
    {
      id: '501',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/b79603e6e8075ac9.png',
      name: '韋秋紅',
      org: '罗湖牙周,口腔修复科,牙体牙髓科,雅健门诊,恒乐门诊',
      posts: '主治醫師',
      job:'恒乐口腔门诊院长',
      skilled: '复杂修复设计及龋病、牙体牙髓和牙周病的诊治，尤其在美学修复有较深的造诣，熟练运用MICD微创牙科及DSD数字微笑设计理念，采用德国Sirona CAD/CAM全瓷牙、美国数字化LAVA全瓷牙、瑞典Procera氧化锆美学高强度电脑全瓷牙及德国Cercon氧化锆全瓷牙处理各种牙齿变色、牙齿形态不佳及缺失牙修复。',
      educated: ''
    },
    {
      id: '502',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/9e64ca61ad962a93.png',
      name: '曾紅豔',
      org: '罗湖区,福田区,宝安区,龙华区 李川口腔诊所,康辉门诊,恒洁门诊,雅健门诊,炫雅门诊',
      posts: '牙周醫師',
      job:'深圳爱康健口腔医院牙周科主任',
      skilled: '牙洁治技术、各种牙周疾病的专业治疗及手术治疗（翻瓣术及牙周引导骨组织再造术、龈切除术）以及种植体周围感染疾病的治疗。',
      educated: ''
    },
    {
      id: '503',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/2b043e6a95a97f1c.png',
      name: '錢若谷',
      org: '雅健门诊,海典门诊,恒乐门诊',
      posts: '執業醫師',
      job:'雅健口腔门诊部醫師',
      skilled: '儿童早期干预矫治，青少年及成人各类常见错牙合畸形的矫治，传统固定矫治技术，唇侧活动翼矫治技术，无托槽隐形矫治技术；倡导可视化正畸治疗，包括拥挤，前突，开唇露齿，地包天及成人修复前正畸治疗等。',
      educated: '口腔正畸学硕士'
    },
    {
      id: '504',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/5f623594b86acf8e.png',
      name: '李紅枝',
      org: '罗湖区,龙华区 深圳爱康健口腔医院,儿童牙科,雅健门诊',
      posts: '主治醫師',
      job:'兒童口腔科主任',
      skilled: '儿童及青少年龋病，儿童牙病舒适化诊治和微创治疗，牙髓根尖周病，儿童咬合诱导间隙管理、咬合诱导及早期阻断性矫治、肌功能矫治等。',
      educated: ''
    },
    {
      id: '505',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/ee543a731de9e34d.png',
      name: '李美京',
      org: '龙华区 雅健门诊,恒乐门诊',
      posts: '主治醫師',
      job:'雅健口腔门诊部醫師',
      skilled: '无痛麻醉、微创拔牙、微创种植、种植上部修复、前牙美学修复、全口无牙颌咬合重建等。',
      educated: '口腔醫學學士'
    },
    {
      id: '506',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/70b7540d6be0bd58.png',
      name: '李佳麗',
      org: '龙华区 雅健门诊,恒乐门诊',
      posts: '執業醫師',
      job:'粵港口腔修復醫師',
      skilled: '显微镜根管治疗、舒适洁牙、龋齿的美学树脂修复，牙体缺损的美学修复。',
      educated: '口腔醫學學士'
    },
    {
      id: '506',
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/70b7540d6be0bd58.png',
      name: '杜名玉',
      org: '龍華區 恒樂門診',
      posts: '執業醫師',
      job:'恒乐口腔门诊部醫師',
      skilled: '樹脂補牙、顯微根管治療、阻生智齒拔除、牙周治療、兒童預成冠修復',
      educated: ''
    },
  ]
]




</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader
      :headerBg="'https://static.cmereye.com/imgs/2023/04/3bb8b77175f2c68a.jpg'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/f044b7e9793c3038.jpg'"
      :headerImg="'https://static.cmereye.com/imgs/2023/05/c46fcc590da0ffdd.png'"
      :headerBgImg="'https://static.cmereye.com/imgs/2023/05/de7105389a7f04b2.png'"
      :titlePosition="'left'"
    />
    <div class="doctorPage">
      <div class="doctorPage-in pageCon">
        <!-- 醫生團隊 -->
        <div class="index_title">醫生團隊</div>
        <!-- 醫療團隊 EXPERTS -->
        <div class="doctorPage-in-text">醫療團隊 EXPERTS</div>
        <!-- 傾心打造貼心,專業的牙科連鎖 -->
        <div class="doctorPage-in-content"><span>傾心打造貼心,</span><span>專業的牙科連鎖</span></div>
        <div class="doctorPage-in-tabNav">
          <div class="doctorPage-in-tabNav-l">
            <!-- 主頁 -->
            <span>主頁</span>
            <!-- 醫生團隊 -->
            <span>醫生團隊</span>
            <span>{{appState.areaTabs[appState.areaTabCurNum]}}</span>
          </div>
          <div>
            <AreaTab />
          </div>
        </div>
        <div class="doctorPage-in-lists pcBox">
          <div class="doctorItem" v-for="(item,index) in doctorLists[appState.areaTabCurNum]" :key="index">
            <div class="doctorItem-l">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="doctorItem-r">
              <div class="title">{{item.job || ''}}</div>
              <!-- 機構： -->
              <div class="org">
                機構：{{item.org || ''}}
              </div>
              <!-- 擅長： -->
              <div class="expertise">
                擅長：{{item.skilled || ''}}
              </div>
              <div class="name">
                <span>{{item.name || ''}}</span> 
                <span>{{item.posts || ''}}{{item.educated ? `,${item.educated}` : ''}}</span>
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
              <div class="doctorItem" v-for="(item,index) in doctorLists[appState.areaTabCurNum]" :key="index">
                <div class="doctorItem-l">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="doctorItem-r">
                  <div class="doctorItem-r-t">
                    <div class="title">{{item.job || ''}}</div>
                    <div class="btn">
                      了解更多<img src="@/assets/images/icon_04.png" />
                    </div>
                  </div>
                  <!-- 機構： -->
                  <div class="org">
                    機構：{{item.org || ''}}
                  </div>
                  <!-- 擅長： -->
                  <div class="expertise">
                    擅長：{{item.skilled || ''}}
                  </div>
                  <div class="name">
                    <span>{{item.name || ''}}</span> 
                    <span>{{item.posts || ''}}{{item.educated ? `,${item.educated}` : ''}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mbDoctorList-b">
            <!-- 主頁 -->
            <span>主頁</span>
            <!-- 醫生團隊 -->
            <span>醫生團隊</span>
            <span>{{appState.areaTabs[appState.areaTabCurNum]}}</span>
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
              height: 110%;
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
                max-width: 85%;
                max-height: calc(100% + 30px);
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
                    max-width: 85%;
                    max-height: calc(100% + 30px);
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