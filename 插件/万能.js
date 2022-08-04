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
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/**
 * 编程猫API2.0
 * 制作：中子星000（QQ：2422481178）
 */

/*
TODO：错误处理
*/

/* 一些常量 */
const BLOCK_COLOR = '#EB3F44B0';
const WIDGET_ICON = 'icon-widget-http-client';
const BLOCK_ICON = 'https://creation.codemao.cn/coconut/web/1.10.0/static/media/internet.8da56d4e.svg';
const AUTHER = '中子星000';
const VERSION = '2.0.0_pre4';
const QQ = 2422481178;
const DEFAULT_BLOCK_OPTIONS = { /*icon: BLOCK_ICON,*/ color: BLOCK_COLOR, callMethodLabel: false, };
const DEFAULT_PARAM_WORK_ID = { key: 'id', label: '作品id', valueType: 'number', defaultValue: '119340779', };
const DEFAULT_PARAM_USER_ID = { key: 'id', label: '用户id', valueType: 'number', defaultValue: '2867423', };

/* 导入库 */
const axios = require('axios');

/* 一些工具函数 */
addSpace = (blockType, key, space) => {
	types[blockType].forEach(block => {
		if (block.key === key) {
			let options = { ...block.blockOptions };
			options.space = space
			block.blockOptions = options;
		}
	});
}

const types = {
	type: 'CODEMAO_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '编程猫API',
	version: VERSION,
	auther: AUTHER,
	platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	docs: {
		url: 'https://www.yuque.com/coco-central/widget/widgetguide'
	},
	properties: [
		{
			key: 'xy', label: '协议', valueType: 'string', editorType: 'TextArea',
			defaultValue: `
编程猫API控件免责声明书
作者（中子星000）制作本控件仅为创作者提供方便，供控件使用者学习、使用CoCo制作APP等使用，但不包含使用其进行恶意操作（刷浏览、刷赞、发布不良信息等）
任何控件使用者都应签订使用责任书。这是对用户个人隐私的保护，也是对控件使用者负责。
本控件为非赢利性质控件如在别处发现付费使用等，请联系作者中子星000（QQ：2422481178）

免责条款
此次控件属于非赢利性质控件
严禁滥用点赞、收藏等API，使用前应获得用户同意，且让用户了解这么做的影响
凡控件使用者均视为具有完全民事行为能力的人，如在使用中进行不当操作、恶意操作，控件作者中子星000不承担赔偿责任
由被损害人依据法律规定和本声明依法解决，凡使用均视为接受本声明。 
`,
			blockOptions: { generateBlock: false, }
		},
		{
			key: 'ok', label: '我已阅读协议', valueType: 'boolean', defaultValue: false,
			blockOptions: { generateBlock: false, }
		},
	],
	methods: [
		/* 额，这个积木名字不改了！ */
		{ key: 'meaninglessBlock', label: '', tooltip: `用来执行不想获取返回值的积木`, blockOptions: DEFAULT_BLOCK_OPTIONS, params: [{ key: 'meaninglessInput', valueType: ['string', 'number', 'boolean', 'image', 'object'], defaultValue: '', checkType: ['string', 'number', 'boolean', 'image', 'object'] }] },
		/* 登录相关 */
		{/*login*/
			key: 'login', label: '登录编程猫',
			tooltip: `登录编程猫\n输入：\n·账号\n·密码`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				{ key: 'account', label: '账号', valueType: 'string', defaultValue: '手机号/用户名/邮箱', },
				{ key: 'password', label: '密码', valueType: 'string', defaultValue: '密码', },
			],
		}, {/*logout*/
			key: 'logout', label: '退出编程猫',
			tooltip: `退出编程猫\n还会退出你的编辑器，开发环境下慎用`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [],
		}, {/*isLogin*/
			key: 'isLogin', label: '登录状态', valueType: 'boolean',
			tooltip: `登陆状态\n输出：\n·状态，已登录则true，未登录false`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [],
		},
		/* 自己信息相关 */
		{/*profile*/
			key: 'profile', label: '完整用户信息', valueType: 'array',
			tooltip: `用户信息\n需要先登录\n输出：\n·用户信息`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [],
		}, {/*easyProfile*/
			key: 'easyProfile', label: '用户信息', valueType: 'string',
			tooltip: `用户信息\n需要先登录\n输出：\n·用户信息`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				{
					key: 'key', label: '', valueType: 'string', defaultValue: 'nickname',
					dropdown: [
						{ label: '训练师id', value: 'id' },
						{ label: '用户名', value: 'nickname' },
						{ label: '头像url', value: 'avatar_url' },
						{ label: '性别', value: 'sex' },
						{ label: '生日时间戳', value: 'birthday' },
						{ label: '简介', value: 'description' },
					],
				}
			],
		},
		/* 三连相关 */
		{/*like*/
			key: 'like', label: '点赞',
			tooltip: `点赞\n输入：作品id`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_WORK_ID,
			],
		}, {/*disLike*/
			key: 'disLike', label: '取消点赞',
			tooltip: `取消点赞\n输入：作品id`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_WORK_ID,
			],
		}, {/*collection*/
			key: 'collection', label: '收藏',
			tooltip: `收藏\n输入：作品id`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_WORK_ID,
			],
		}, {/*disCollection*/
			key: 'disCollection', label: '取消收藏',
			tooltip: `取消收藏\n输入：作品id`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_WORK_ID,
			],
		}, {/*fork*/
			key: 'fork', label: '再创作',
			tooltip: `再创作\n输入：作品id`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_WORK_ID,
			],
		}, {/*follow*/
			key: 'follow', label: '关注',
			tooltip: `关注\n输入：用户id`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_USER_ID,
			],
		}, {/*disFollow*/
			key: 'disFollow', label: '取消关注',
			tooltip: `取消关注\n输入：用户id`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_USER_ID,
			],
		},
		/* 社区作品相关 */
		{/*workInfo*/
			key: 'workInfo', label: '完整作品信息', valueType: 'array',
			tooltip: `作品信息\n输出：\n·作品信息`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_WORK_ID,
			],
		}, {/*easyWorkInfo*/
			key: 'easyWorkInfo', label: '作品信息', valueType: 'string',
			tooltip: `作品信息\n输出：\n·作品信息`,
			blockOptions: DEFAULT_BLOCK_OPTIONS,
			params: [
				DEFAULT_PARAM_WORK_ID,
				{
					key: 'key', label: '', valueType: 'string', defaultValue: 'is_praised',
					dropdown: [
						{ label: '是否收藏', value: 'is_collected' },
						{ label: '是否已再创作', value: 'is_owned' },
						{ label: '是否点赞', value: 'is_praised' },
						{ label: '作品类型', value: 'ide_type' },
						{ label: '是否能再创作', value: 'fork_enable' },
						{ label: '作品名', value: 'work_name' },
						{ label: '作品介绍', value: 'description' },
						{ label: '操作说明', value: 'operation' },
						{ label: '评论次数', value: 'comment_times' },
						{ label: '收藏次数', value: 'collect_times' },
						{ label: '点赞次数', value: 'praise_times' },
						{ label: '浏览次数', value: 'view_times' },
						{ label: '作者id', value: 'author_id' },
						{ label: '作者昵称', value: 'nickname' },
					],
				}
			],
		},

		{
			key: 'get',
			label: 'get',
			valueType: 'array',
			params: [
				{
					key: 'url',
					label: '网址',
					valueType: 'string',
					defaultValue: '/tiger/v3/web/accounts/profile',
				},
			],
			tooltip: `get请求\n输入：url\n输出：列表[状态码,请求结果]`,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
		},
		{
			key: 'post',
			label: 'post',
			valueType: 'array',
			params: [
				{
					key: 'url',
					label: '网址',
					valueType: 'string',
					defaultValue: '/tiger/accounts/login',
				},
				{
					key: 'data',
					label: '数据',
					valueType: 'string',
					defaultValue: '{"identity":"YOUR_ACCOUNT","password":"YOUR_PASSWORD","pid":"OqMVXvXp"}',
				},
			],
			tooltip: `post请求\n输入：url,请求数据\n输出：列表[状态码,请求结果]`,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
		},

	],
	events: []
};

addSpace('methods', 'isLogin', 40);
addSpace('methods', 'easyProfile', 40);
addSpace('methods', 'disFollow', 40);


class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);

		this.ok = props.ok
		if (!this.ok) {
			for (let i = 0; i < 3; i++) { this.widgetError('请在20秒内停止程序并在属性面板阅读协议，否则你的程序将崩溃'); };
			setTimeout(() => { this.widgetInterrupt('请在20秒内停止程序并在属性面板阅读协议，否则你的程序将崩溃'); }, 20000);
		}

		axios.defaults.baseURL = 'https://api.codemao.cn/';
		this.widgetLog(`
/**
 * 编程猫API2.0
 * 制作：中子星000（QQ：2422481178）
 */
`);
	};
	meaninglessBlock = (block) => { };

	/* 登录相关 */
	login = async (account, password) => { await this.post('/tiger/accounts/login', {}, { identity: account, password: password, pid: 'OqMVXvXp' }); }; /* 登录pid使用kitten的，不再让用户选择 */
	isLogin = async () => { return (await this.get('/tiger/v3/web/accounts/profile'))[0] === 200; }
	logout = async () => { await this.post('/tiger/v3/web/accounts/logout'); };

	/* 个人信息相关 */
	profile = async () => { console.log(this.get('/tiger/v3/web/accounts/profile')); return await this.get('/tiger/v3/web/accounts/profile'); }
	easyProfile = async (key) => { return (await this.profile())[1][key]; }/*二次封装*/

	/* 三连 */
	like = async (id) => { await this.post(`/nemo/v2/works/${id}/like`); };
	disLike = async (id) => { await this.delete(`/nemo/v2/works/${id}/like`); };
	collection = async (id) => { await this.post(`/nemo/v2/works/${id}/collection`); };
	disCollection = async (id) => { await this.delete(`/nemo/v2/works/${id}/collection`); };
	fork = async (id) => { await this.post(`/nemo/v2/works/${id}/fork`); };
	follow = async (id) => { await this.post(`/nemo/v2/user/${id}/follow`); };
	disFollow = async (id) => { await this.delete(`/nemo/v2/user/${id}/follow`); };

	workInfo = async (id) => { return await this.get(`/creation-tools/v1/works/${id}`); };
	easyWorkInfo = async (id, key) => {
		let abilities = ['is_collected', 'is_owned', 'is_praised'];/*收藏、再创作、点赞*/
		let user_info = ['author_id', 'nickname'];/*id、用户名*/
		if (abilities.indexOf(key) !== -1) {
			return (await this.workInfo(id))[1].abilities[key];
		} else if (user_info.indexOf(key) !== -1) {
			return (await this.workInfo(id))[1].user_info[key === 'author_id' ? 'id' : key];
		} else {
			console.log((await this.workInfo(id)), (await this.workInfo(id))[1], key, (await this.workInfo(id))[1][key])
			return (await this.workInfo(id))[1][key];
		}
	};/*二次封装*/


	get = async (url, params = {}) => {
		let result = await axios(
			{
				method: 'get',
				url: url,
				params: params,
				withCredentials: true,
			}
		);
		if (result.data) {
			return [result.status, result.data];
		} else if (result.message) {
			return [0, result.message]
		} else if (1) {/*需要错误处理*/ }
		return [-1, '鬼知道发生了啥错误？'];
	};
	delete = async (url, params = {}) => {
		let result = await axios(
			{
				method: 'delete',
				url: url,
				params: params,
				withCredentials: true,
			}
		);
		if (result.data) {
			return [result.status, result.data];
		} else if (result.message) {
			return [0, result.message]
		} else if (1) {/*需要错误处理*/ }
		return [-1, '鬼知道发生了啥错误？'];
	};
	post = async (url, params = {}, data = {}) => {
		let result = await axios(
			{
				method: 'post',
				url: url,
				params: params,
				data: data,
				withCredentials: true,
			}
		);
		if (result.data) {
			return [result.status, result.data];
		} else if (result.message) {
			return [0, result.message]
		} else if (1) {/*需要错误处理*/ }
		return [-1, '鬼知道发生了啥错误？'];
	};

}

console.log(`
/**
 * 编程猫API2.0
 * 制作：中子星000（QQ：2422481178）
 */
`);

exports.types = types;
exports.widget = Widget;
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/*
* 嘿，欢迎使用地理定位，由中子星000制作
* 需要和 更多权限 控件配合使用
* 作者：中子星000
* 主页：https://shequ.codemao.cn/user/2867423
* QQ：2422481178
*/

const BLOCK_COLOR = '#FF7540DD';
const WIDGET_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_t1wOE7iE2S_1647491399348';
const BLOCK_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_JHxj1ECN8A_1647491399351';
const AUTHER = '中子星000';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const Types = {
	type: 'GEOLOCATION_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '地理定位',
	version: '1.0.0',
	platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	docs: {
		url: 'https://w3c.github.io/geolocation-api/#position_error_interface'
	},
	properties: [],
	methods: [
		{
			key: 'permissions',
			label: '是否有权限',
			valueType: 'boolean',
			params: [],
			tooltip: `检测是否有权限`,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
		},
		{
			key: 'isSupport',
			label: '是否支持获取地理定位',
			valueType: 'boolean',
			params: [],
			tooltip: `检测是否支持获取地理定位`,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
		},
		{
			key: 'getCurrentPosition',
			label: '获取坐标',
			params: [
				{
					key: 'jing_du',
					label: '获取',
					labelAfter: '地理坐标',
					valueType: 'boolean',
					defaultValue: false,
					dropdown: [
						{ label: '低精度', value: false },
						{ label: '高精度', value: true },
					],
				},
				{
					key: 'chao_shi',
					label: '超时',
					labelAfter: '毫秒',
					valueType: 'number',
					defaultValue: 5000,
				},
				{
					key: 'label',
					label: '标签',
					valueType: 'string',
					defaultValue: '',
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `\
获取坐标
输入：
- 精度：布尔值，高精度、低精度（高精度耗电且慢）
- 超时时间：单位毫秒
- 标签（可选）：事件积木原样返回，可以用于给开发者知道是哪块积木调用时触发事件
触发事件：
- 获取成功时
- 发生错误时
（参数见对应事件积木）\
`,
		},
	],
	events: [
		{
			key: 'succeed',
			label: '获取成功时',
			params: [
				{
					key: 'latitude',
					label: '纬度',
					valueType: 'string',
				},
				{
					key: 'longitude',
					label: '经度',
					valueType: 'string',
				},
				{
					key: 'accuracy',
					label: '精度',
					valueType: 'string',
				},
				{
					key: 'label',
					label: '标签',
					valueType: 'string',
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `\
当获取成功时
输出：
- 纬度
- 经度
- 精度：单位米
- 标签：事件积木原样返回，可以用于给开发者知道是哪块积木调用时触发事件
\
`,
		},
		{
			key: 'error',
			label: '获取失败时',
			params: [
				{
					key: 'code',
					label: '错误代码',
					valueType: 'number',
				},
				{
					key: 'message',
					label: '错误信息',
					valueType: 'string',
				},
				{
					key: 'label',
					label: '标签',
					valueType: 'string',
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `\
当获取失败（超时）时
输出：
- 错误代码：-1为不支持，其他见https://w3c.github.io/geolocation-api/#position_error_interface
- 错误信息
- 标签：事件积木原样返回，可以用于给开发者知道是哪块积木调用时触发事件
\
`,
		}
	]
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);

		this.widgetLog('嘿，欢迎使用地理定位，由中子星000制作，按F12查看更多');
		this.widgetLog('需要和 更多权限 控件配合使用');
	}

	permissions() {
		return this.__get();
	}

	__get() {
		var dom = document.getElementById('zzxGetterElement');
		if (dom != null) {
			dom.onclick();
			if (typeof zzx != 'undefined') {
				return 1;
			}
		}
		this.widgetError('获取失败，请添加控件 更多权限');
		return 0;
	}

	isSupport() {
		return navigator.geolocation;
	}

	getCurrentPosition(jing_du, chao_shi, label) { // 精度，超时
		if (this.__get()) {
			if (zzx.navigator.geolocation) {
				zzx.navigator.geolocation.getCurrentPosition(
					pos => {
						this.emit('succeed', pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy, label)
					},
					err => {
						this.emit('error', err.code, err.message, label)
					},
					{
						enableHighAccuracy: jing_du,
						timeout: chao_shi,
						maximumAge: 0
					}
				)
			}
			else {
				this.emit('error', -1, '不支持获取地理定位')
			}
		}
	}

}

console.log('嘿，欢迎使用地理定位，由中子星000制作');
console.log('需要和 更多权限 控件配合使用');
console.log('作者：中子星000');
console.log('主页：https://shequ.codemao.cn/user/2867423');
console.log('QQ：2422481178');
console.log('使用方法：字面意思');

exports.types = Types;
exports.widget = Widget;
