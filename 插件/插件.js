types['methods'].push({
    key: 'methodName',
    label: 's',
    params: [],


})
Widget.prototype.methodName = function () {
      qrode.toCanvas('3',function (error, canvas) {
    var history = this.history;

  })
}

const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "空",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

exports.types = types;
exports.widget = Widget;
