//一些常量
const auther = "小宏XeLa"//作者
const version = "1.0.0"//版本号
const qq = 3174251894//作者QQ
const color = "#66ccff"//积木颜色
const icon = 'icon-toolbox-feature';//图标
//一些变量
var document = this.document;//获取document的调用权限
var window = this.window;//获取window的调用权限

var types = {//自定义控件设置
    type: 'XH_JSONZK_WIDGET',//控件编号
    icon,//控件图标
    title: 'JSON',//控件名称
    platforms: ['android', 'ios', 'web'],//控件可用范围
    version,//控件版本
    auther,//控件作者
    isInvisibleWidget: true,//是功能控件
    isGlobalWidget: true,//是全局控件
    properties: [],//属性
    methods: [//方法
        {
            key: 'start',
            label: '执行',
            valueType: ['string','array','object'],
            params: [
                {
                    key: "mode",
                    label: "",
                    valueType: "string",
                    defaultValue: "parse",
                    dropdown: [
                        { label: '将数据转换成文本', value: 'stringify', },
                        { label: '将文本转换为数据', value: 'parse', },
                    ]
                },
                {
                    key: "t",
                    label: "",
                    valueType: ['string','array','object'],
                    defaultValue: `{"a":"1","b":1,"c":true,"d":[1,2,3],"e":{"a":"1","b":2,"c":["1"],d:null}}`,
                },
            ],
            blockOptions: {
                color,
            }
        },
    ],
    events: [],//事件   
};

class Widget extends VisibleWidget {//控件函数代码
    //构造器
    constructor(props) {
        super(props);
        this.widgetLog(`制作者：小宏XeLa`);
        this.widgetLog(`编程猫个人主页：https://shequ.codemao.cn/user/9232151`);
    };
    start(mode, t){
        if(mode=="stringify"){return(JSON.stringify(t))}else{return(JSON.parse(t))}
    };
};

//导出控件
exports.types = types;
exports.widget = Widget;