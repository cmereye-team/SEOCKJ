<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  listsConfig:{
    type: Object,
    default(){
      return{
        title: '牙齒百科',
        tab: ['最熱門','最新'],
        lists: [

        ],
        linkL: ''
      }
    }
  },
  thameType: {
    type: String,
    default: '1'
  },
  defaultCur: {
    type: Number,
    default: 0
  }
})

let newsLists_cur_tab = ref(0)
const emits = defineEmits(['changeNewsCur'])
const hangdleTab = (idx:number) =>{
  newsLists_cur_tab.value = idx
  emits('changeNewsCur', idx)
}
onMounted(()=>{
  newsLists_cur_tab.value = props.defaultCur === 2 ? 0 : props.defaultCur
})
</script>

<template>
  <div class="newsLists" :class="`thameType${thameType}`">
    <div class="newsLists-title" v-if="listsConfig.title !== ''">
      <div class="index_title">
        <span>{{listsConfig.title}}</span>
      </div>
    </div>
    <div class="newsLists-tab">
      <div :class="{cur: newsLists_cur_tab === index}" v-for="(item,index) in listsConfig.tab" :key="index" @click="hangdleTab(index)">
        {{item}}
      </div>
    </div>
    <div class="newsLists-content">
      <nuxtLink :to="thameType === '2' ? '#' : `${listsConfig.linkL}${item.id}`" class="list-in" v-for="item in listsConfig.lists" :key="item.id">
        <div class="list-in-t" v-if="thameType === '1'">
          <div class="list-in-t-l">
            <img :src="item.img" alt="">
          </div>
          <div class="list-in-t-r">
            <h2>{{item.name}}</h2>
            <p>{{item.desc}}</p>
          </div>
        </div>
        <div class="list-in-t" v-if="thameType === '2'">
          <div class="list-in-t-l">
            <div class="iframeBox">
              <iframe width="560" height="315" :src="item.videos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          <div class="list-in-t-r">
            <h2><span>醫生專享</span>{{item.name}}</h2>
          </div>
        </div>
        <div class="list-in-t" v-if="thameType === '3'">
          <div class="list-in-t-l">
            <img :style="{'z-index': 4-imgIndex,'margin-left': `-${imgIndex === 0 ? 0 : 33}px`}" v-for="(imgItem,imgIndex) in item.pics.slice(0,4)" :key="imgIndex" :src="imgItem" alt="">
          </div>
          <div class="list-in-t-r">
            <h2>{{item.name}}</h2>
            <p>{{item.desc}}</p>
          </div>
        </div>
        <div class="list-in-t" v-if="thameType === '4'">
          <div class="list-in-t-l">
            <img :src="item.img" alt="">
          </div>
          <div class="list-in-t-r">
            <h2>
              <img :src="item.logo" alt="">
              <span>{{item.name}}</span>
            </h2>
            <p>{{item.desc}}</p>
          </div>
        </div>
        <div class="list-in-t" v-if="thameType === '5'">
          <div class="list-in-t-l">
            <img :src="item.img" alt="">
          </div>
          <div class="list-in-t-r">
            <h2>{{item.name}}</h2>
            <p>{{item.desc}}</p>
          </div>
        </div>
        <div class="list-in-b">
          <div class="list-in-b-l">
            <span v-for="(tagItem,tagIndex) in item.hashtag" :key="tagIndex">{{tagItem}}</span>
          </div>
          <div class="list-in-b-r">
            {{item.time}}
          </div>
        </div>
      </nuxtLink>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.newsLists{
  width: 100%;
  padding: 0 17px;
  max-width: 768px;
  margin: 0 auto;
  &-tab{
    display: flex;
    margin-top: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--indexColor1);
    &>div{
      color: var(--indexColor1);
      display: inline-block;
      font-size: 20px;
      padding: 3px 25px;
      border-radius: 50px;
      cursor: pointer;
      margin-left: 20px;
      position: relative;
      &::after{
        content: '';
        width: 24px;
        height: 32px;
        position: absolute;
        left: 50%;
        top: calc(100% + 5px);
        transform: translateX(-50%);
        box-sizing: border-box;
        border-left: 12px solid rgba(255,255,255,0);
        border-top: 16px solid var(--indexColor1);
        border-right: 12px solid rgba(255,255,255,0);
        border-bottom: 16px solid rgba(255,255,255,0);
        display: none;
      }
      &.cur{
        background: var(--indexColor1);
        color: #fff;
        &::after{
          display: block;
        }
      }
    }
  }
  &-content{
    margin-top: 22px;
    .list-in{
      margin-bottom: 12px;
      display: block;
      &-t{
        display: grid;
        grid-template-columns: 1fr 1.7fr;
        gap: 19px;
        align-items: center;
        padding-bottom: 15px;
        &-l{
          width: 100%;
          img{
            width: 100%;
          }
        }
        &-r{
          flex: 1;
          h2{
            display: -webkit-box;  
            -webkit-line-clamp: 2; 
            line-clamp: 2; 
            -webkit-box-orient: vertical;  
            overflow: hidden;  
            text-overflow: ellipsis;
            color: var(--indexColor1);
            font-size: 14px;
            line-height: 1.3;
            font-weight: 700;
          }
          p{
            display: -webkit-box;  
            -webkit-line-clamp: 2; 
            line-clamp: 2; 
            -webkit-box-orient: vertical;  
            overflow: hidden;  
            text-overflow: ellipsis;
            font-size: 12px;
            font-weight: 400;
            line-height: 130%;
            color: var(--textColor);
          }
        }
      }
      &-b{
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 5px 0;
        border-top: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
        &-l{
          font-size: 18px;
          letter-spacing: 1.8px;
          position: relative;
          text-decoration: underline;
          overflow: hidden;
          white-space: nowrap;
          span{
            margin-right: 10px;
          }
          &::after{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 100%;
            background: linear-gradient(90deg,rgba(255, 255, 255, 0),#fff);
          }
        }
        &-r{
          background: #fff;
          font-size: 20px;
          color: #aaa;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
  &.thameType2{
    background: #FFF1F0;
    padding: 22px 0;
    .newsLists-title{
      padding: 0 20px;
      .index_title{
        span{
          position: relative;
          z-index: 1;
        }
        &::after{
          z-index: 0;
        }
      }
    }
    .newsLists-content{
      .list-in{
        margin-bottom: 18px;
        &-t{
          grid-template-columns: 1fr;
          &-l{
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: calc(315 / 560 * 100%);
            .iframeBox{
              position: absolute;
              width: 100%;
              height: 100%;
              iframe{
                width: 100%;
                height: 100%;
              }
            }
          }
          &-r{
            padding: 0 18px;
            h2{
              color: var(--textColor);
              font-size: 15px;
              line-height: 140%;
              span{
                color: var(--indexColor1);
              }
            }
          }
        }
        &-b{
          padding: 5px 17px;
          &-l{
            &::after{
              background: linear-gradient(90deg,rgba(255, 255, 255, 0),#FFF1F0);
            }
          }
          &-r{
            background: #FFF1F0;
          }
        }
      }
    }
  }
  &.thameType3{
    .newsLists-content{
      .list-in{
        &-t{
          display: flex;
          &-l{
            width: auto;
            height: 66px;
            max-width: 50%;
            display: flex;
            position: relative;
            img{
              width: 66px;
              height: 66px;
              position: relative;
            }
          }
          &-r{
            flex: 1;
          }
        }
      }
    }
  }
  &.thameType4{
    .newsLists-content{
      .list-in{
        &-t{
          &-r{
            h2{
              img{
                display: inline-block;
                max-width: 40px;
                height: auto;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
  &.thameType5{
    .newsLists-content{
      .list-in{
        &-t{
          grid-template-columns: 1fr 4fr;
          &-r{
            h2{
              -webkit-line-clamp: 1; 
              line-clamp: 1; 
            }
            p{
              -webkit-line-clamp: 3; 
              line-clamp: 3;  
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .newsLists{
  .newsLists-title{
    padding: 0 10px;
  }
  .newsLists-tab{
    &>div{
      font-size: 15px;
      font-weight: 700;
      &::after{
        width: 12px;
        height: 16px;
        border-left: 6px solid rgba(255,255,255,0);
        border-top: 8px solid var(--indexColor1);
        border-right: 6px solid rgba(255,255,255,0);
        border-bottom: 8px solid rgba(255,255,255,0);
      }
    }
  }
  .newsLists-content{
    margin-top: 18px;
    .list-in{
      margin-bottom: 10px;
      &-t{
        padding-bottom: 10px;
        &-r{
          h2{
            font-size: 14px;
            line-height: 1.3;
          }
          p{
            font-size: 12px;
          }
        }
      }
      &-b{
        &-l{
          font-size: 13px;
        }
        &-r{
          font-size: 13px;
        }
      }
    }
  }
}
}
</style>