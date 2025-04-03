<template>
  <div class="bg-default">
    <div class="join-container">
      <h1 class="title">宁波市开源“火种计划”</h1>
      <p class="description">汇聚宁波市本地优质项目，提供针对项目成长全流程的扶持计划。加入本计划，见证你的项目从“星星火种”到“燎原之火”</p>
    </div>
  </div>
  <div class="join-program">
    <div class="center">
      <el-text class="mx-1 join-title-desc" type="primary" tag="b">加入开源"火种计划",让百万开发者看到你的优秀项目</el-text>  
    </div>
    
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="requirements">
            <h3>如何成为火种计划一员</h3>
            <ul>
              <li><el-icon><Check /></el-icon> 由宁波本地企业、高校、科研院所或个人开发者独立或联合发起的开源项目</li>
              <li><el-icon><Check /></el-icon> 具备完整清晰的项目信息与 README 文档</li>
              <li><el-icon><Check /></el-icon> 年度更新次数至少10次</li>
              <li><el-icon><Check /></el-icon> 积极响应用户反馈</li>
              <li><el-icon><Check /></el-icon> 通过宁波开源专委会评审认可（评判标准包括但不限于项目的影响力、创意、潜力、产业赋能等指标）</li>
            </ul>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="benefits">
            <h3>获得权益</h3>
            <ul>
              <li><el-icon><Check /></el-icon> 火种项目专属标识和奖牌</li>
              <li><el-icon><Check /></el-icon> 优质展示位</li>
              <li><el-icon><Check /></el-icon> 列入宁波市开源项目推广应用目录</li>
              <li><el-icon><Check /></el-icon> 获得国内先进开源组织及第三方专业机构相关运营资源</li>
              <li><el-icon><Check /></el-icon> 优先参加本地开源生态活动</li>
            </ul>
          </div>
        </el-col>
      </el-row>

      <el-form
          ref="formRef"
          :model="formData"
          :rules="rules"
          label-width="150px"
          class="application-form"
      >
        <el-form-item label="项目地址" prop="XiangmuDZ">
          <el-input v-model="formData.XiangmuDZ" placeholder="请输入内容"/>
        </el-form-item>

        <el-form-item label="申请说明" prop="ShenqingSM">
          <el-input
              v-model="formData.ShenqingSM"
              type="textarea"
              :rows="4"
              placeholder="请简要介绍项目及申请理由"
          />
        </el-form-item>

        <el-form-item label="项目负责人姓名" prop="XiangmuFZRXM">
          <el-input v-model="formData.XiangmuFZRXM" placeholder="请输入内容"/>
        </el-form-item>

        <el-form-item label="联系方式" prop="LianxiFS">
          <el-input v-model="formData.LianxiFS" placeholder="手机/微信/QQ/邮箱"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<style scoped>
.join-program {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.join-title-desc {
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
}

.content {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.requirements, .benefits {
  h3 {
    margin-bottom: 20px;
    color: #303133;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      color: #606266;

      .el-icon {
        margin-right: 8px;
        color: #409EFF;
      }
    }
  }
}

.application-form {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>



<script setup lang="ts">
import {ElCol, ElRow, ElForm,ElButton,ElIcon,ElInput,ElFormItem,ElText} from "element-plus";
import { ref, reactive, watchEffect, computed, onMounted } from "vue";
import { useClientData } from "vuepress/client";
import {Project, Projects, projectMenu,post} from "../composables/section/index.js";
const { siteData } = useClientData();

const allPagesFrontmatter = siteData.value.frontmatter;
import { Document, Check } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const formRef = ref(null)

const formData = reactive({
  XiangmuDZ: '',
  ShengingSM: '',
  XiangmuFZRXM: '',
  LianxiFS: '',
})

const rules = {
  XiangmuDZ: [
    { required: true, message: '请输入项目地址', trigger: 'blur' }
  ],
  ShenqingSM: [
    { required: true, message: '请输入申请说明', trigger: 'blur' }
  ],
  XiangmuFZRXM: [
    { required: true, message: '请输入负责人姓名', trigger: 'blur' }
  ],
  LianxiFS: [
    { required: true, message: '请输入联系方式', trigger: 'blur' }
  ]
}

const submitForm = async () => {
  if (!formRef.value) return

  await formRef.value.validate((valid) => {
    if (valid) {
      post('https://api.nbweixin.cn/apiengine/add_XiangmuJoin--OsClient--opennb--', formData);
      ElMessage.success('提交成功!')
    }
  })
}



</script>
<style>
.vp-page-title {
  display: none;
}
.center{
text-align: -webkit-center;
}

.join-container {
  height: 422px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  background: url("/img/banner/project.png") no-repeat;

  background-size: cover;
  background-position: center;

  @media (min-width: 960px) {
    padding-left: 6rem;
  }

  h1 {
    margin: 0;
    color: #171b25;
    font-size: 44px;
    font-weight: 900;
  }

  .title{
    font-size: 48px;
    font-weight: bolder;
  }
  .description {
    max-width: 700px;
    padding-right: 52%;
    color: #61687c;
    font-size: 26px;
    line-height: 28px;
  }
}

.join-main{
  margin-top: 10px;

}
</style>