<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: ''
  }
})

const addressItem = {
      id: '202',
      name: 'contactUs.addressLists.address_202.name',
      address: 'contactUs.addressLists.address_202.address',
      time: 'contactUs.addressLists.address_202.time',
      phone: phoneNum,
      busRoutes: 'contactUs.addressLists.address_202.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_202.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/05/63dbe40ee13b53e9.png',
      googleMap: 'https://goo.gl/maps/mQgJXrTxvaaLB9Y1A?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/1f/kY0'
    }
</script>

<template>
  <div>
    <PageHeader /> 
    <div class="indexPage">
      <!-- <NewAddress /> -->
      <div class="testBoxs">
        <div class="testBoxs-in">
          <div class="address-box">
            <h3>{{$t(addressItem.name)}}(幼圆)</h3>
            <div class="content">
              <span>{{$t('contactUs.hospital_address')}}：{{$t(addressItem.address)}}</span>
              <span>{{$t('contactUs.hours_of_Operation')}}：{{$t(addressItem.time)}}</span>
              <span>{{$t('contactUs.check_the_phone')}}：{{addressItem.phone}}</span>
            </div>
            <div class="route">
              <span>{{$t('contactUs.bus_route')}}</span>
              <span>{{$t(addressItem.busRoutes)}}</span>
              <span>{{$t('contactUs.metro_lines')}}</span>
              <span>{{$t(addressItem.metroRoutes)}}</span>
            </div>
          </div>
        </div>
        <div class="testBoxs-in">
          <div class="address-box">
            <h3>{{$t(addressItem.name)}}(源泉圓體L)</h3>
            <div class="content">
              <span>{{$t('contactUs.hospital_address')}}：{{$t(addressItem.address)}}</span>
              <span>{{$t('contactUs.hours_of_Operation')}}：{{$t(addressItem.time)}}</span>
              <span>{{$t('contactUs.check_the_phone')}}：{{addressItem.phone}}</span>
            </div>
            <div class="route">
              <span>{{$t('contactUs.bus_route')}}</span>
              <span>{{$t(addressItem.busRoutes)}}</span>
              <span>{{$t('contactUs.metro_lines')}}</span>
              <span>{{$t(addressItem.metroRoutes)}}</span>
            </div>
          </div>
        </div>
        <div class="testBoxs-in">
          <div class="address-box">
            <h3>{{$t(addressItem.name)}}(Noto Serif HK)</h3>
            <div class="content">
              <span>{{$t('contactUs.hospital_address')}}：{{$t(addressItem.address)}}</span>
              <span>{{$t('contactUs.hours_of_Operation')}}：{{$t(addressItem.time)}}</span>
              <span>{{$t('contactUs.check_the_phone')}}：{{addressItem.phone}}</span>
            </div>
            <div class="route">
              <span>{{$t('contactUs.bus_route')}}</span>
              <span>{{$t(addressItem.busRoutes)}}</span>
              <span>{{$t('contactUs.metro_lines')}}</span>
              <span>{{$t(addressItem.metroRoutes)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
// @font-face {
//   font-family: "GenSenRounded";
//   src: url("https://static.cmereye.com/static/font/GenSenRounded-L.woff");
// }
.testBoxs{
  display: flex;
  min-height: 600px;
  background: #fff;
  align-items: center;
  flex-wrap: wrap;
  &-in{
    flex: 1;
    width: 600px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 10% 50px;
    .address-box{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .route-cc{
        flex: 1;
      }
      .mapBtn{
        a{
          width: 30%;
          min-width: 200px;
        }
      }
    }
    h3{
      font-weight: 500;
      font-size: 26px;
      line-height: 160%;
      color: var(--indexColor1);
      position: relative;
      display: inline-block;
      cursor: pointer;
      padding-bottom: 10px;
    }
    span{
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      color: #666666;
      display: block;
    }
    &:nth-of-type(1){
      h3,span{
        font-family: youyuan;
      }
    }
    &:nth-of-type(2){
      // h3,span{
      //   font-family: "GenSenRounded";
      // }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>