
export const projectMenu = [
    {
        text: "前端",
        icon: "web",
        key:"前端",
        subMenus: [
            { text: "web端", key: 'web端' },
            { text: "移动端", key: '移动端' },
            { text: "桌面端", key: '桌面端' },
        ],
    },
    {
        text: "后端",
        icon: "backend",
        subMenus: [
            { text: "编程语言", key: '编程语言' },
            { text: "框架设计", key: '框架设计' },
            { text: "操作系统", key: '操作系统' },
        ],
        key:"后端",
    },
    {
        text: "数据技术与储存",
        icon: "database",
        subMenus: [
            { text: "数据库", key: '数据库' },
            { text: "数据处理", key: '数据处理' },
            { text: "数据分析", key: '数据分析' },
        ],
        key:"数据技术与储存",
    },
    {
        text: "云原⽣与基础设施",
        icon: "cloudApp",
        subMenus: [
            { text: "云计算", key: '云计算' },
            { text: "容器", key: '容器' }
        ],
        key:"云原⽣与基础设施",
    },
    {
        text: "⽹络通信",
        icon: "network",
        subMenus: [
            { text: "传输协议", key: '传输协议' },
            { text: "网络安全", key: '网络安全' }
        ],
        key:"⽹络通信",
    },
    {
        text: "⼈⼯智能",
        icon: "ai",
        subMenus: [
            { text: "AI框架", key: 'AI框架' },
            { text: "机器学习/深度学习", key: '机器学习/深度学习' },
            { text: "大模型", key: '大模型' },
            { text: "计算机视觉", key: '计算机视觉' }
        ],
        key:"⼈⼯智能",
    },
    {
        text: "开发⼯具",
        icon: "tool",
        subMenus: [
            { text: "版本控制", key: '版本控制' },
            { text: "插件", key: '插件' },
            { text: "编译/构建/部署", key: '编译/构建/部署' },
        ],
        key:"开发⼯具",
    },
    
].map((x, i) => {
    // 添加 index，可用于默认展开 default-openeds 属性，和激活状态 efault-active 属性的设置
    return {
        ...x,
        // 子菜单就拼接${父菜单index}-${子菜单index}
        subMenus: (x.subMenus || []).map((y, j) => {
            return { ...y, index: `${i}-${j}` };
        }),
        // 父菜单就把 index 加上好了
        index: `${i}`
    };
});


export const projectMenuByBizType = [
    {
        text: "企业应⽤",
        key:"企业应⽤",
        icon: "app",
        subMenus:[
            { text: "ERP", key: 'ERP' },
            { text: "CRM", key: 'CRM' },
            { text: "OA", key: 'OA' },
        ]
    },
    {
        text: "C端应⽤",
        key:"C端应⽤",
        icon: "app",
        subMenus:[
            { text: "社交娱乐", key: '社交娱乐' },
            { text: "电子商务", key: '电子商务' },
            { text: "生活服务", key: '生活服务' },
        ]
    },
    {
        text: "⼯业应⽤",
        key:"⼯业应⽤",
        icon: "app",
        subMenus:[
            { text: "智能制造", key: '社交娱乐' },
            { text: "IOT", key: 'IOT' },
            { text: "供应链管理", key: '供应链管理' },
            { text: "能源管理", key: '能源管理' },
            { text: "质量控制", key: '质量控制' },
        ]
    },
    {
        text: "⾦融科技",
        key:"⾦融科技",
        icon: "app",
        subMenus:[
            { text: "量化投资", key: '量化投资' },
            { text: "风险管理", key: '风险管理' },
            { text: "数字货币", key: '数字货币' },
        ]
    },
    {
        text: "安全信⽤",
        key:"安全信⽤",
        icon: "app",
        subMenus:[
            { text: "区块链", key: '区块链' },
            { text: "隐私计算", key: '隐私计算' },
        ]
    },
    {
        text: "医疗健康",
        key:"医疗健康",
        icon: "app",
        subMenus:[
            { text: "电子病历", key: '电子病历' },
            { text: "远程医疗", key: '远程医疗' },
            { text: "AI辅助诊疗", key: 'AI辅助诊疗' },
        ]
    },
    {
        text: "港航物流",
        key:"港航物流",
        icon: "app",
        subMenus:[
            { text: "无人驾驶", key: '无人驾驶' },
            { text: "仓储管理", key: '仓储管理' }
        ]
    },


].map((x, i) => {
    // 添加 index，可用于默认展开 default-openeds 属性，和激活状态 efault-active 属性的设置
    return {
        ...x,
        // 子菜单就拼接${父菜单index}-${子菜单index}
        subMenus: (x.subMenus || []).map((y, j) => {
            return { ...y, index: `${i}-${j}` };
        }),
        // 父菜单就把 index 加上好了
        index: `${i}`
    };
});