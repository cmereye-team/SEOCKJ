<script lang="ts" setup>
useHead({
  title: "免責條款",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健為香港希瑪眼科醫療控股有限公司（股份代號：3309）旗下的內地牙科品牌，各門診位於內地深圳市，包括: 雅健口腔門診部、恒樂口腔門診、深圳愛康健口腔醫院、富康口腔門診部、李川口腔診所、王琦口腔診所等牙科診所及醫院。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院 愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院 牙科服務 內地牙科 深圳口腔專科希瑪眼科醫療控股有限公司雅健口腔門診部 恒樂口腔門診 富康口腔門診部 李川口腔診所 王琦口腔診所 恒潔口腔門診部 康輝口腔門診部 顏麗口腔診所 恒雅口腔門診部 恒美口腔門診部 沈虹口腔診所 炫雅口腔門診部',
   },
  ]
})
const headerConfigData = {
  img: 'https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/216458f63817b47e.jpg',
  pageName: 'course-new',
  pcText: [],
  mbText: [],
}
const router = useRouter()
const goBack = () =>{
  router.go(-1)
}
</script>

<template>
  <div>
    <div class="disclaimer">
      <div class="disclaimer-title">
        免責條款
      </div>
      <div class="disclaimer-context">
        <p>深圳愛康健口腔醫院網站內的所有資料及內容只能用作一般資訊、教育及參考。如有任何有關健康問題、醫療狀況、護理之事宜，應及時諮詢有關的醫生或醫護人員。 </p>

        <p>雖然本院致力確保此網站內所有資料及內容之準確及適時性，但不作任何擔保，此網站純粹為了方便電腦使用者使用。網站內所有資料及內容可能隨時更改而不作另行通知。 </p>

        <p>本網站可能連結到其他網站之內容、服務、商品及廣告，並非由深圳愛康健口腔醫院維護或控制，深圳愛康健口腔醫院對本網站可能連結到的其他網站、服務及商品之供應，以及其內容或其準確性，概不負責。 </p>

        <p>網上預約系統只為客人在牙科服務作預約，諮詢醫療服務之用。填寫及提交網上預約表格並不保證閣下之預約時間。深圳愛康健口腔醫院職員將酌情處理閣下的申請，並以電郵、電話或短訊等方式就預約，咨询結果聯絡閣下，或就所預約，咨询的日期及時間之改動聯絡閣下。深圳愛康健口腔醫院對透過此網上系統作預約申請未能如願而引致的任何後果，概不負責。在此網站提交的預約申請只作排期用途。提交網上預約表格表示閣下同意受本網站有關網上預約系統的免責聲明約束。 </p>

        <p>本網站部分文章來自於網絡，版權僅歸原作者所有，若作者有版權聲明或從其他網站轉載而附帶原所有站的版權聲明，其版權歸屬以附帶聲明為準；文章僅代表作者個人觀點，與本網站無關。</p>

        <p>本網站部分圖片來自於網絡，如果侵犯到閣下的權益，請及時與本院市場部聯絡，本院將在第一時間內整改、刪除。</p>
      </div>
      <div class="disclaimer-btn" @click="goBack">
        <span>{{'<'}}返回</span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.disclaimer{
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #666666;
  padding: 200px 0;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 1;
  &-btn{
    margin-top: 50px;
    text-align: right;
    max-width: 1000px;
    width: 100%;
    span{
      font-size: 20px;
      color: #666666;
      cursor: pointer;
      transition: all .3s;
      &:hover{
        font-size: 22px;
        color: var(--indexColor1);
        border-bottom: 1px solid var(--indexColor1);
      }
    }
  }
  &-title{
    width: 100%;
    max-width: 1000px;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  &-context{
    width: 100%;
    max-width: 1000px;
    font-size: 22px;
    p{
      margin-bottom: 30px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .disclaimer{
    padding: 0px 30px 100px;
    &-title{
      font-size: 28px;
    }
    &-context{
      font-size: 16px;
    }
  }
}
</style>