<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: ''
  }
})
const centerDialogVisible = ref(false)
const handlecopywechatcode = () =>{
  if (navigator.clipboard) {  
      navigator.clipboard.writeText('ckjhongkong').then(function() {  
        // ElMessage({
        //   showClose: true,
        //   message: '已複製到剪切板',
        //   type: 'success',
        // }) 
        centerDialogVisible.value = true
      }, function(err) {
          ElMessage({
            showClose: true,
            message: '操作異常，請刷新頁面試試',
            type: 'warning',
          })
      });  
  } else {  
      alert('Clipboard API is not supported by your browser.');  
  }  
}

const handleopenwechat = () =>{
  window.location.href = "weixin://"
}
</script>

<template>
  <div>
    <PageHeader /> 
    <div class="indexPage">
      <!-- <NewAddress /> -->
      <div class="testBoxs">
        <!-- <a href="weixin://" class="wechatbtn">Wechat</a> -->
        <div>微信按钮演示</div>
        <el-button plain @click="handlecopywechatcode">
          Wechat
        </el-button>
        <el-dialog v-model="centerDialogVisible" title="WeChat ID已複製" width="300" center>
          <span>
            點擊「打開微信」進入微信，點右上⊕，粘貼ID，添加客服開始免費咨詢！
          </span>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="handleopenwechat">
                打開微信
              </el-button>
            </div>
          </template>
        </el-dialog>
        <div>按钮动画演示</div>
        <div class="btntest">
          <div class="btntest-in">
            <span>立即預約牙齒檢查</span>
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
body{
  width: 100% !important;
}
.testBoxs{
  display: flex;
  min-height: 600px;
  background: #fff;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
}
.wechatbtn{
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid var(--indexColor1);
}
.btntest{
  &-in{
    &>span{
      color: #fff;
      background: #00AEFF;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>