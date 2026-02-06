---
icon: 
home: true
heroFullScreen: true
heroImage: /img/nbopen.svg
bgImage: /img/banner-background.webp
heroText: 开源宁波(NBopen)社区
tagline: 汇聚宁波市本地优质项目，提供针对项目成长全流程的扶持计划。加入本计划，见证你的项目从“星星火种”到“燎原之火”
actions:
  - text: 🔥CSDN博客
    link: https://nbopen.csdn.net/
    type: primary

features:
  - title: 使命
    icon: shiming
    details: 汇聚开源力量，赋能数实融合
  - title: 愿景
    icon: yuanjing
    details: 打造长三角开源创新枢纽，构建活力迸发的产学研协同开源生态
  - title: 口号
    icon: kouhao
    details: 海纳百川"甬"动开源，智创未来和合共荣
  - title: 价值观
    icon: jiazhiguan
    details: 坚持开放共享，促进平权；坚持创新驱动，追求卓越；坚持协作共赢，共谋发展；坚持伦理至上，安全可信

head:
  - - meta
    - name: keywords
      content: NBopen, 宁波开源, 宁波开源社区, 宁波开源项目
  - - meta
    - name: description
      content: 宁波开源社区


tinderProject:
  - name: F5-TTS
    desc: 基于流匹配的全非自回归文本到语音转换系统
    logo: /img/site/f5tts.png
    url: https://github.com/SWivid/F5-TTS
    preview: /img/site/f5tts-preview.jpeg
    repo: ['https://github.com/SWivid/F5-TTS']

  - name: YuE
    desc: 基于LLaMA2架构的音乐生成和理解模型
    logo: /img/site/yue.png
    url: https://github.com/multimodal-art-projection/YuE
    preview: /img/site/yue-preview.jpeg
    repo: ['https://github.com/multimodal-art-projection/YuE']

  - name: Step-Audio
    desc: 产品级开源语音交互模型
    logo: /img/site/stepAudio.png
    url: https://github.com/stepfun-ai/Step-Audio
    preview: /img/site/stepAudio-preview.jpeg
    repo: ['https://github.com/stepfun-ai/Step-Audio']

  - name: EDA工具集
    desc: 聚焦EDA数字逻辑的前端设计工具
    logo: /img/site/also.png
    url: https://gitee.com/zfchu/also
    preview: /img/site/also-preview.jpeg
    repo: ['https://gitee.com/zfchu/also']

  - name: Microi吾码
    desc: 开源低代码平台
    logo: /img/site/micro.png
    url: https://gitee.com/ITdos/Dos.ORM
    preview: /img/site/micro-preview.jpeg
    repo: ['https://gitee.com/ITdos/Dos.ORM']

  - name: TenonOS
    desc: 基于LibOS架构的榫卯操作系统
    logo: /img/site/TenonOS.png
    url: https://gitee.com/tenonos
    preview: /img/site/TenonOS-preview.png
    repo: ['https://gitee.com/tenonos']
  - name: fast-request
    desc: IDEA 版 Postman，为简化 API 调试而生
    logo: /img/site/fastRequest.svg
    url: https://api-buddy.cn
    preview: /img/site/fastRequest-preview.png
    repo: ['https://gitee.com/dromara/fast-request','https://github.com/dromara/fast-request']
  - name: Boden Around View Monitor Dataset
    desc: 一个用于自动驾驶、自动泊车模型训练的开源数据集
    logo: /img/site/BodenAVMDataset.jpeg
    url: https://github.com/BodenAI/BodenAVMDataset
    preview: /img/site/BodenAVMDataset-preview.jpg
    repo: ['https://github.com/BodenAI/BodenAVMDataset']

  - name: EITFWH
    desc: 专门用于气动声学领域的计算软件
    logo: /img/site/EITFWH.jpeg
    url: https://github.com/EITAeroacoustics/EITFWH
    preview: /img/site/EITFWH-preview.jpg
    repo: ['https://github.com/EITAeroacoustics/EITFWH']

  - name: LLM2Things
    desc: 专门针对AI与物联网领域的开源实战入门项目
    logo: /img/site/nayotaAiotEdgelab.jpeg
    url: https://gitee.com/nayota-iot/nayota-aiot-edgelab
    preview: /img/site/nayotaAiotEdgelab-preview.jpeg
    repo: ['https://gitee.com/nayota-iot/nayota-aiot-edgelab']

  - name: Open supOS
    desc: 开源的工业物联网 (IIoT) 平台
    logo: /img/site/supOS.jpg
    url: https://github.com/supOS-Project
    preview: /img/site/supOS-preview.jpeg
    repo: ['https://github.com/supOS-Project',"https://gitee.com/supos-community-edition"]

  - name: DigitalNB-KMS
    desc: 为企业构建一套智能化、高效化的知识管理平台
    logo: /img/site/DigitalNB.jpeg
    url: https://github.com/DigitalNB-AI/DigitalNB-KMS
    preview: /img/site/DigitalNB-preview.jpg
    repo: ['https://github.com/DigitalNB-AI/DigitalNB-KMS',"https://gitee.com/DigitalNB/digital-nb-kms"]
  - name: 更多项目
    desc: NBopen所有项目
    logo:
    url: projects/
    preview: /img/site/empty-preview.svg
---

## 火种项目

<SiteInfo v-for="item in $frontmatter.tinderProject" :key="item.link" v-bind="item" :repo="item.repo"/>
