---
icon: 
home: true
heroFullScreen: true
heroImage: /img/nbopen.svg
bgImage: /img/banner-background.webp
heroText: 开源宁波(NBopen)社区
tagline: 汇聚宁波市本地优质项目，提供针对项目成长全流程的扶持计划。加入本计划，见证你的项目从“星星火种”到“燎原之火”


features:
  - title: 开放
    icon: origin
    details: 技术栈全面开源共建、 保持社区中立、兼容社区兼容开源生态，随时欢迎参与各种贡献

  - title: 愿景
    icon: effective
    details: 让每一位开源爱好者，体会到开源的快乐

  - title: 口号
    icon: features
    details: 为往圣继绝学，一个人或许能走得更快，但一群人会走得更远

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
    preview: /img/site/yue-preview.png
    repo: ['https://github.com/multimodal-art-projection/YuE']
  - name: F5-TTS
    desc: 基于流匹配的全非自回归文本到语音转换系统
    logo: 
    url: https://github.com/SWivid/F5-TTS
    preview: /img/site/f5tts-preview.png
    repo: ['https://github.com/SWivid/F5-TTS']
  - name: Step-Audio
    desc: 产品级开源语音交互模型
    logo: /img/site/stepAudio.png
    url: https://github.com/stepfun-ai/Step-Audio
    preview: /img/site/stepAudio-preview.png
    repo: ['https://github.com/stepfun-ai/Step-Audio']  
  - name: also
    desc: 聚焦EDA数字逻辑的前端设计工具
    logo: 
    url: https://gitee.com/zfchu/also
    preview: /img/site/also-preview.png
    repo: ['https://gitee.com/zfchu/also'] 
  - name: 吾码Micro
    desc: 低代码平台
    logo: /img/site/micro.png
    url: https://gitee.com/ITdos/Dos.ORM
    preview: /img/site/micro-preview.png
    repo: ['https://gitee.com/ITdos/Dos.ORM'] 
  - name: RSIC-V适配工具集
    desc: 低代码流程设计器
    logo:
    url: https://gitee.com/riscv-porting-tools
    preview: /img/site/riscv-preview.png
    repo: ['https://gitee.com/riscv-porting-tools']
  - name: 更多项目
    desc: NBopen所有项目
    logo:
    url: /projects/
    preview: /img/site/empty-preview.svg
---

## 火种项目

<SiteInfo v-for="item in $frontmatter.tinderProject" :key="item.link" v-bind="item" :repo="item.repo"/>
