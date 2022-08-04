var C, P;


var window = this.window;

const types = {
    isInvisibleWidget: true,
    type: "JSLH_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/链接.svg",
    title: "浏览器功能集合",
    version: "8.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('编程猫：8525855');
  this.widgetLog('B站：1523540905');
  this.widgetLog('QQ：2635725313');
  this.widgetLog('青B2la 出品');

    }

}

types['events'].push({
    key: 'JSA_OK',
    label: '通知完毕',
    params: [],
    blockOptions: {
    color: "#608FEEFF",
    icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'JSC_OK',
    label: '选择完毕',
    params: [
      {
          key: 'JSC_text',
          label: '选择',
          valueType: 'boolean',
      },],
    blockOptions: {
    color: "#608FEEFF",
    icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'JSP_OK',
    label: '输入完毕',
    params: [
      {
          key: 'JSP_text',
          label: '输入',
          valueType: 'string',
      },],
    blockOptions: {
    color: "#608FEEFF",
    icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})

types['methods'].push({
    key: 'method',
    label: '仅运行',
    params: [
      {
          key: 'param',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '用事件获取放到这里',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.method = function (param,) {

}
types['methods'].push({
    key: 'javascript_alert_JSA',
    label: '弹出通知',
    params: [
      {
          key: 'text_T1',
          label: '',
          valueType: 'string',
          defaultValue: '提示',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_alert_JSA = function (text_T1,) {
      window.alert(text_T1);
  this.emit("JSA_OK");
}
types['methods'].push({
    key: 'javascript_confirm_JSC',
    label: '弹出选择并获取选择',
    params: [
      {
          key: 'text_T1',
          label: '',
          valueType: 'string',
          defaultValue: '提示',
      },],
    valueType: 'boolean',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_confirm_JSC = function (text_T1,) {
      C = (window.confirm(text_T1));
  this.emit("JSC_OK"  , C);return C;
}
types['methods'].push({
    key: 'javascript_prompt_JSP',
    label: '弹出输入并获取输入',
    params: [
      {
          key: 'text_T2',
          label: '',
          valueType: 'string',
          defaultValue: '提示',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_prompt_JSP = function (text_T2,) {
      P = (window.prompt(text_T2));
  this.emit("JSP_OK"  , P);return P;
}
types['methods'].push({
    key: 'javascript_location_href_JSLH',
    label: '当前URL网址',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_href_JSLH = function () {
      return (window.location.href);
}
types['methods'].push({
    key: 'javascript_location_search_JSLS',
    label: '当前URL参数',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_search_JSLS = function () {
      return (window.location.search);
}
types['methods'].push({
    key: 'javascript_location_pathname_JSLP_string',
    label: '当前URL路径',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_pathname_JSLP_string = function () {
      return (window.location.pathname);
}
types['methods'].push({
    key: 'javascript_location_hash_JSLH',
    label: '当前URL锚点',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hash_JSLH = function () {
      return (window.location.hash);
}
types['methods'].push({
    key: 'javascript_location_hostname_JSLH',
    label: '当前URL域名',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hostname_JSLH = function () {
      return (window.location.hostname);
}
types['methods'].push({
    key: 'javascript_location_protocol_JSLP',
    label: '当前URL协议',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_protocol_JSLP = function () {
      return (window.location.protocol);
}
types['methods'].push({
    key: 'javascript_location_port_JSLP',
    label: '当前URL端口',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_port_JSLP = function () {
      return (window.location.port);
}
types['methods'].push({
    key: 'javascript_location_replace_JSLR',
    label: '跳转URL到当前页面',
    params: [
      {
          key: 'location_href_LH',
          label: '',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_replace_JSLR = function (location_href_LH,) {
      window.location.replace(location_href_LH);

}
types['methods'].push({
    key: 'javascript_location_assign_JSLA',
    label: '跳转URL到新的页面',
    params: [
      {
          key: 'replace_R',
          label: '',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_assign_JSLA = function (replace_R,) {
      window.open(replace_R);

}
types['methods'].push({
    key: 'javascript_location_reload_JSLR',
    label: '刷新当前URL',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_location_reload_JSLR = function () {
      window.location.reload;

}
types['methods'].push({
    key: 'javascript_history_length_JSHL',
    label: '历史列表中的网址数',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_history_length_JSHL = function () {
      return (window.history.length);
}
types['methods'].push({
    key: 'javascript_history_back_JSHB',
    label: '跳转历史中的上一个',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_history_back_JSHB = function () {
      window.history.back();

}
types['methods'].push({
    key: 'javascript_history_forward_JSHF',
    label: '跳转历史中的下一个',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_history_forward_JSHF = function () {
      window.history.forward();

}
types['methods'].push({
    key: 'javascript_history_go_JSHG',
    label: '跳转历史中的某一个',
    params: [
      {
          key: 'history_go_HG',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '数字或URL',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_history_go_JSHG = function (history_go_HG,) {
      document.history.go(history_go_HG);

}
types['methods'].push({
    key: 'Unicode_CURI_codeURI_CURI',
    label: '',
    params: [
      {
          key: 'code_URI_ENCURI1',
          label: '网页传参',
          valueType: 'string',
          dropdown: [
    { label: '编码', value: '编码', },

    { label: '解码', value: '解码', },
  ],
      },


      {
          key: 'text_code_TC1',
          label: '',
          valueType: 'string',
          defaultValue: '内容',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.Unicode_CURI_codeURI_CURI = function (code_URI_ENCURI1,text_code_TC1,) {
      return (code_URI_ENCURI1 == '编码' ? (encodeURI(escape(text_code_TC1))) : (code_URI_ENCURI1 == '解码' ? (unescape((decodeURI(text_code_TC1)))) : null));
}
types['methods'].push({
    key: 'Unicode_CURI',
    label: '',
    params: [
      {
          key: 'code_URI_ENCURI1',
          label: 'Unicode',
          valueType: 'string',
          dropdown: [
    { label: '编码', value: '编码', },

    { label: '解码', value: '解码', },
  ],
      },


      {
          key: 'text_code_TC1',
          label: '',
          valueType: 'string',
          defaultValue: '内容',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.Unicode_CURI = function (code_URI_ENCURI1,text_code_TC1,) {
      return (code_URI_ENCURI1 == '编码' ? (escape(text_code_TC1)) : (code_URI_ENCURI1 == '解码' ? (unescape(text_code_TC1)) : null));
}
types['methods'].push({
    key: 'codeURI_CURI',
    label: '',
    params: [
      {
          key: 'code_URI_ENCURI',
          label: 'URL',
          valueType: 'string',
          dropdown: [
    { label: '编码', value: '编码', },

    { label: '解码', value: '解码', },
  ],
      },


      {
          key: 'text_code_TC',
          label: '',
          valueType: 'string',
          defaultValue: '内容',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.codeURI_CURI = function (code_URI_ENCURI,text_code_TC,) {
      return (code_URI_ENCURI == '编码' ? (encodeURI(text_code_TC)) : (code_URI_ENCURI == '解码' ? (decodeURI(text_code_TC)) : null));
}
exports.types = types;
exports.widget = Widget;
