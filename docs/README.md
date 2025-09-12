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
  - name: YuE
    desc: 基于LLaMA2架构的音乐生成和理解模型
    logo: /img/site/yue.png
    url: https://github.com/multimodal-art-projection/YuE
    preview: /img/site/yue-preview.jpeg
    repo: ['https://github.com/multimodal-art-projection/YuE']
  - name: F5-TTS
    desc: 基于流匹配的全非自回归文本到语音转换系统
    logo: /img/site/f5tts.png
    url: https://github.com/SWivid/F5-TTS
    preview: /img/site/f5tts-preview.jpeg
    repo: ['https://github.com/SWivid/F5-TTS']
  - name: Step-Audio
    desc: 产品级开源语音交互模型
    logo: /img/site/stepAudio.png
    url: https://github.com/stepfun-ai/Step-Audio
    preview: /img/site/stepAudio-preview.jpeg
    repo: ['https://github.com/stepfun-ai/Step-Audio']  
  - name: also
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
  - name: RSIC-V适配工具集
    desc: 低代码流程设计器
    logo: /img/site/rescv.png
    url: https://gitee.com/riscv-porting-tools
    preview: /img/site/rescv-preview.jpeg
    repo: ['https://gitee.com/riscv-porting-tools']
  - name: 更多项目
    desc: NBopen所有项目
    logo:
    url: projects/
    preview: /img/site/empty-preview.svg
---

## 火种项目

<SiteInfo v-for="item in $frontmatter.tinderProject" :key="item.link" v-bind="item" :repo="item.repo"/>
