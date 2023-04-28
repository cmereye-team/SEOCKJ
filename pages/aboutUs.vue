<template>
  <div class="bigPageCon">
    <PageHeader
     :headerBg="'https://static.cmereye.com/imgs/2023/04/2fc3c774fd9bc0aa.jpg'"
     :titlePosition="'left'"
     :mbBg="'https://static.cmereye.com/imgs/2023/04/8ef2fe81c92fe697.jpg'"
    />
    <div class="aboutUs">
      <div class="aboutUs-in">
        <div class="index_title pageCon">個案分享</div>
        <div class="aboutUs-in-video pageCon">
          <CaseSharingVideoItem />
        </div>
        <div class="aboutUs-in-video pageCon">
          <CaseSharingVideoItem />
        </div>
        <div class="aboutUs-in-image pageCon">
          <CaseSharingImageItem />
          <CaseSharingImageItem />
        </div>
        <div class="aboutUs-in-image pageCon">
          <CaseSharingImageItem />
          <CaseSharingImageItem />
        </div>
        <div class="aboutUs-in-image pageCon">
          <CaseSharingImageItem />
          <CaseSharingImageItem />
        </div>
      </div>
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .aboutUs{
    background: #fff;
    padding-bottom: 140px;
    &-in{
      padding-top: 143px;
      background: linear-gradient(180deg, rgba(255, 241, 240, 0) 0%, #FFF1F0 44.27%, rgba(255, 241, 240, 0) 100%);
      &-video{
        margin-top: 59px;
      }
      &-image{
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .aboutUs{
      background: #fff;
      padding-bottom: 90px;
    }
  }
</style>
