<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
import { defineProps } from "vue";
// import './globals'
defineProps({
  str:{
    type: String,
    default: ''
  }
})
useHead({
  // script:[
  //   {
  //     src:'https://code.jquery.com/jquery-3.6.0.min.js'
  //   },
  //   {
  //     src: 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  //   }
  // ]
})
interface googleface {
  translate: {
    TranslateElement: new (
      options: any,
      elementId: string
    ) => unknown;
  };
}
const google:googleface = {
  translate: {
    TranslateElement: class FakeTranslateElement {},
  },
}
const googleTranslateElementInit = () => {
  new window['google'].translate.TranslateElement({pageLanguage: 'zh-TW'}, 'google_translate_element');
}
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
onMounted(()=>{
  // nextTick(()=>{
    // googleTranslateElementInit()
  // })
  // console.log(window)
  // if(window['google']){
  //   console.log(window['google'])
  // }
})
</script>

<template>
  <div>
    <PageHeader /> 
    <div class="indexPage">
      <!-- <NewAddress /> -->
      <div class="testBoxs">
        <!-- <a href="weixin://" class="wechatbtn">Wechat</a> -->
        <div class="titletest">微信按钮演示</div>
        <client-only>
          <el-button plain @click="handlecopywechatcode">
            Wechat
          </el-button>
          <el-dialog v-model="centerDialogVisible" title="WeChat ID已複製" width="300" center align-center>
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
        </client-only>

        <div class="titletest">按钮动画演示</div>
        <div class="btntest">
          <div class="btntest-in">
            <span>立即預約牙齒檢查</span>
          </div>
        </div>

        <PageAnimBtnTypeTwo />

        <div id="google_translate_element">
          <!-- 语言盒子 -->
        </div>
      </div>
    </div>
    <PageFooter />
    <PageNavbar />
    
  </div>
</template>


<style lang="scss" scoped>
#google_translate_element{
  margin-top: 100px;
}
:deep(body){
  background:#000;
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
.titletest{
  padding-top: 50px;
}
.btntest{
  margin: 50px 0;
  position: relative;
  &-in{
    position: relative;
    &>span{
      padding: 10px 50px;
      color: #fff;
      background: #00AEFF;
      position: relative;
      z-index: 1;
      border-radius: 50px;
      display: block;
      animation: btntestAnima 5.6s infinite;
      box-shadow: 10px 10px 20px rgba(103, 214, 239, .75);
      cursor: pointer;
      transition: all .3s;
    }
    &::after{
      content: '';
      position: absolute;
      display: block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border: 10px solid #B9D9FC;
      z-index: 0;
      border-radius: 50px;
      animation: btntestafterAnima 5.6s infinite;
      transition: all .3s;
    }
    &:hover{
      &>span{
        background: #FF9900;
        box-shadow: 10px 10px 20px rgba(239, 176, 103, .75);
        animation: btntesthoverAnima 5.6s infinite;
      }
      &::after{
        border: 10px solid #FCD1B9;
        animation: btntestafterhoverAnima 5.6s infinite;
      }
    }
  }
}
@keyframes btntestAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntesthoverAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntestafterAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #B9D9FC;
  }
  19%{
    border: 10px solid rgba(185, 217, 252, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    border: 10 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes btntestafterhoverAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #FCD1B9;
  }
  19%{
    border: 10px solid rgba(252, 209, 185, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    border: 10 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>