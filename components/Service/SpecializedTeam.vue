<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  doctorData: {
    type: Object,
    default(){
      return {
        title: '',
        lists: []
      }
    }
  }
})
</script>

<template>
  <div class="Specialized_team">
    <div class="dentistryServices-title">
      <div class="dentistryServices-title-in bb">
        {{doctorData.title}}
      </div>
    </div>
    <div class="Specialized_team-content">
      <div class="Specialized_team-content-in">
        <Swiper
          class="Specialized_team_swiper"
          :slidesPerView="2"
        >
          <SwiperSlide class="Specialized_team_swiper_slide" v-for="(doctorItem,doctorIndex) in doctorData.lists" :key="doctorIndex">
            <div class="doctorContent">
              <div class="doctorContent-img">
                <img :src="doctorItem.img || ''" alt="">
              </div>
              <div class="doctorContent-name">
                {{doctorItem.name || ''}}
                <span>{{doctorItem.job || ''}}</span>
              </div>
              <div class="doctorContent-address">{{doctorItem.addressname || ''}}</div>
              <div class="doctorContent-context">
                <span></span>
                <span>{{doctorItem.text || ''}}</span>
              </div>
              <div class="doctorContent-btn">

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.Specialized_team{
  &-content{
    margin-top: 50px;
    &-in{
      width: 100%;
      max-width: 784px;
      margin: 0 auto;
      .Specialized_team_swiper{
        width: 100%;
        .Specialized_team_swiper_slide{
          padding: calc(150 / 750 * 100%) 15px 20px;
          .doctorContent{
            width: 100%;
            background: #FEE6F1;
            height: 300px;
            filter: drop-shadow(0 5px 7px rgba(255, 96, 150,.5));
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>