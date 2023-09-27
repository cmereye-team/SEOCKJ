<script lang="ts" setup>
useHead({
  title: "私隱政策",
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
const router = useRouter()
const goBack = () =>{
  router.go(-1)
}
</script>

<template>
  <div>
    <!-- <PageHeader /> -->
    <div class="privacyPolicy">
      
      <div class="privacyPolicy-title">
        私隱政策
      </div>
      <div class="privacyPolicy-context">
        <p>以下是深圳愛康健口腔醫院與其附屬公司根據《個人資料(私隱)條例》(第486章)之規定所訂之私隱政策聲明。我們將確保我們之職員將執行有關政策，嚴格保密你的個人資料。</p>
        
        <p>任何個人資料的收集將按本集團的《個人資料收集聲明》的條款所進行。個人資料將會安全穩妥儲存於我們的系統內，而本集團將採取所有切實可行的步驟，以確保個人資料的保存時間不超過將其保存以貫徹該資料被使用於或會被使用於的目的（包括任何直接有關的目的）所需的時間。只有經培訓及獲授權的職員才可獲准查閱該等個人資料，除《個人資料收集聲明》所載之人士除外，我們不會向任何本集團以外的人士發佈該等個人資料，用戶有權根據載於《個人資料收集聲明》的程序，要求存取及更正其個人資料。</p>

        <p>惟在法律准許的情況下，深圳愛康健口腔醫院不會負責任何因以下情況而引致的損失、損毀或責任（不論直接或間接產生），包括但不限於收入、利潤或信譽的損失：(1) 任何因電腦、網路、電話、技術或系統的不正常運作或其他問題，包括由電腦系統病毒感染、缺陷、篡改、未經授權的干擾、欺詐、技術故障或其他超出了深圳愛康健口腔醫院的控制範圍的任何原因；(2) 任何由第三者所提供的服務的缺乏或不足之處；(3) 任何因資料傳送上的錯誤而導致通知的誤傳、延誤、更改或遺失。 客戶亦需確保所有登記資料均為真實、準確及完整的資料，以及沒有冒用或盜用任何第三者之資料。如客戶因冒用或盜用任何第三者之資料而引致深圳愛康健口腔醫院或其他第三者有任何損害，客戶須負上一切相關損失、損毀或責任，並對深圳愛康健口腔醫院或其他第三者因此所承受的任何損害作出彌償及使其免於損害。</p>

        <p>本集團可不時根據用戶之個人資料向他們寄出宣傳產品及服務之直接市場推廣訊息。在直接市場推廣過程中，我們將提供適當之「拒絕服務選擇」。</p>

        <p>本集團將竭盡所能，確保用戶之私隱獲得妥善保障。然而，鑑於互聯網之性質，我們不能擔保可以做到「完全保障」。</p>

        <p>本集團會起用第三者內容供應商及服務供應商，並提供接駁其他網站之連結。此等第三者可於用戶使用其服務時收集有關用戶之個人資料。此等第三者將依其私隱政策行事，而我們的《私隱政策聲明》及《個人資料收集聲明》並不涵蓋該等第三者。</p>

        <p>用戶如對我們之私隱政策及慣例有任何疑問，請電郵info@ckjhk.com致深圳愛康健口腔醫院市場部。</p>

        <p>如有任何爭議，深圳愛康健口腔醫院保留最終決定權​。</p>
      </div>
      <div class="privacyPolicy-btn" @click="goBack">
        <span>{{'<'}}返回</span>
      </div>
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
.privacyPolicy{
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #666666;
  padding: 200px 0;
  align-items: center;
  background: #fff;
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
  .privacyPolicy{
    padding: 100px 30px;
    &-title{
      font-size: 28px;
    }
    &-context{
      font-size: 16px;
    }
  }
}
</style>