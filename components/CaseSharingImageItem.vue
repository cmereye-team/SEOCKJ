<template>
  <div class="caseSaringImageItem">
    <div class="caseSaringImageItem-t">
      <img src="@/assets/images/Jason.jpg" alt="">
      <span class="text">安心、舒服、無痛</span>
      <div>
        <span class="name">陳裳 Jason</span>
        <span class="skill">種植牙齒療程 </span>
      </div>
    </div>
    <div class="caseSaringImageItem-b">
      人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。
    </div>
  </div>
</template>

<style lang="scss" scoped>
.caseSaringImageItem{
  width: 716px;
  height: 252px;
  background: #fff;
  padding: 40px;
  box-sizing: border-box;
  &-t{
    width: 100%;
    position: relative;
    img{
      width: 30%;
      margin: -17% auto 0;
      border-radius: 50%;
      border: 8px solid #fff;
    }
    .text{
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 160%;
      color: #FFCECB;
      display: block;
      margin-top: -30px;
    }
    &>div{
      position: absolute;
      right: -15px;
      top: 100px;
      .name{
        font-weight: 600;
        font-size: 1.87rem;
        line-height: 160%;
        color: #4D4D4D;
        display: block;
      }
      .skill{
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 160%;
        color: #FFA09E;
        text-indent: 40px;
        display: inline-block;
      }
    }
  }
  &-b{
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 160%;
    color: #4D4D4D;
    margin-top: 10px;
  }
} 


@media screen and (max-width: 768px) {
  .caseSaringImageItem{
    width: 100%;
    padding: 30px;
    height: auto;
    &-t{
      width: 100%;
      height: 125px;
      img{
        width: 125px;
        margin: 0;
        border-radius: 50%;
        border: none;
        display: inline-block;
      }
      .text{
        font-weight: 600;
        font-size: 1.25rem;
        margin-top: -30px;
        float: right;
        margin-top: 90px;
      }
      &>div{
        right: 0;
        top: 30px;
        .name{
          font-size: 1.25rem;
        }
        .skill{
          font-size: 1.125rem;
        }
      }
    }
    &-b{
      width: 100%;
      font-size: 1rem;
    }
    &:first-child{
      background: linear-gradient(270deg, rgba(255, 241, 240, 0) 0.02%, rgba(255, 204, 199, 0.7) 90%);
    }
    &:last-child{
      background: linear-gradient(270deg, rgba(255, 241, 240, 0.7) 0.02%, rgba(255, 241, 240, 0) 62%);
    }
  }
}
</style>
