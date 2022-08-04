var address, word, certno;



const types = {
  isInvisibleWidget: true,
  type: "MY_WIDGET",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E7%A4%BE%E4%BA%A4/%E9%82%AE%E4%BB%B6.svg",
  title: "邮件发送",
  version: "1.0.0",
  isGlobalWidget: true,
  properties: [
		{
			key: 'xy', label: '协议', valueType: 'string', editorType: 'TextArea',
			defaultValue: `
邮件发送控件免责声明书
本控件由耗子（编程猫ID：3916667 QQ：2323188979）使用Waddle编辑器制作
使用的邮件发送功能由第三方api提供
使用本控件前须同意以下条款
1.本控件仅供非营利性使用，请勿用于违法和商业用途
2.严禁使用本控件进行邮箱轰炸、发送恶意邮件，如含不良信息、图片、网站链接
3.严禁使用本控件发送虚假信息，如诈骗邮件、恶意抹黑事实邮件
4.若有以上情况，发生纠纷乃至法律层面纠纷，耗子概不负责，并立即停止您使用本控件的权利
5.最终解释权归耗子所有
`,
			blockOptions: { generateBlock: false, }
		},
		{
			key: 'ok', label: '我已阅读并同意该协议', valueType: 'boolean', defaultValue: false,
			blockOptions: { generateBlock: false, }
		},
	],
  methods: [],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);

  }

}

types['methods'].push({
  key: 'methodName',
  label: '发送邮件',
  params: [

  {
    key: 'address',
    label: '邮箱地址',
    valueType: 'string',
    defaultValue: '2323188979@qq.com',

  },


  {
    key: 'word',
    label: '标题',
    valueType: 'string',
    defaultValue: '你好，我是你的邮件',

  },


  {
    key: 'certno',
    label: '内容（可用HTML格式）',
    valueType: 'string',
    defaultValue: '发件控件由耗子xWaddle制作',

  },


  ],
})
Widget.prototype.methodName = function (address,word,certno,) {
    const axios = require('axios');
  axios.get((['https://mzystudio.top/api/mail/mail.php?address=',address,'&name=',word,'&certno=',certno].join('')))
    .then((response) => {
      console.log('请求完成');

    })
    .catch((error) => {
      console.log('请求失败');

    });
;
}

exports.types = types;
exports.widget = Widget;
