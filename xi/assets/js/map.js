function china(){

var dom = document.getElementById("container1");
var myChart1 = echarts.init(dom);
var app = {};
option = null;
var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028],
    '三亚': [109.512,18.2557],
    '澳门': [113.5491,22.2034],
    '香港': [114.1654,22.2784]
};
var data12_ = [
    [{name:'北京'}, {name:'广州',value:90}]
    
];

var data13_ = [
    [{name:'北京'},{name:'兰州',value:95}],
    [{name:'北京'},{name:'三亚',value:90}],
    [{name:'北京'},{name:'天津',value:80}],
    [{name:'北京'},{name:'成都',value:70}],
    [{name:'北京'},{name:'石家庄',value:60}],
    [{name:'北京'},{name:'长沙',value:80}],
    [{name:'北京'},{name:'济南',value:70}]  
    
];

var data14_ = [
    [{name:'北京'},{name:'呼和浩特',value:95}],
    [{name:'北京'},{name:'郑州',value:90}],
    [{name:'北京'},{name:'石家庄',value:80}],
    [{name:'北京'},{name:'乌鲁木齐',value:70}],
    [{name:'北京'},{name:'上海',value:60}],
    [{name:'北京'},{name:'南京',value:60}],
    [{name:'北京'},{name:'福州',value:60}],
    [{name:'北京'},{name:'澳门',value:60}]
    
];
var data15_ = [
    [{name:'北京'},{name:'昆明',value:50}],
    [{name:'北京'},{name:'杭州',value:40}],
    [{name:'北京'},{name:'贵阳',value:30}],
    [{name:'北京'},{name:'长春',value:20}]
];

var data16_ = [
    [{name:'北京'}, {name:'重庆',value:60}],
    [{name:'北京'}, {name:'合肥',value:50}],
    [{name:'北京'}, {name:'石家庄',value:40}]
];

var data17_ = [
   
    [{name:'北京'},{name:'石家庄',value:50}],
    [{name:'北京'},{name:'南宁',value:40}],
    [{name:'北京'},{name:'澳门',value:60}],
    [{name:'北京'},{name:'香港',value:60}]
];

var dateData={
    2012:{ '广州': ['12月7日-8日','在广东省进行考察']}
}
//var data12_ = data13_ = data14_ = data15_ = data16_ = data17_ = [];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9','#aac88c','#acc44c','#ff0000'];
var series = [];
[['2012年', data12_],['2013年', data13_], ['2014年', data14_], ['2015年', data15_],['2016年', data16_],['2017年', data17_]].forEach(function (item, i) {
    series.push(
    {
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                textStyle:{
                    color:'black',
                    fontSize:12    
                }
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle:{
                normal: {
                    color: color[i]
                }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

var mapData=[{
            name: '2012',
            type: 'map',
            geoIndex: 0,
            data:[
                 {name:'广东',value:73290},
                 {name:'江苏',value:95390},
                 {name:'山东',value:67364},
                 {name:'浙江',value:83923},
                 {name:'河南',value:42363},
                 {name:'四川',value:39835},
                 {name:'湖北',value:55196},
                 {name:'河北',value:42866},
                 {name:'湖南',value:46063},
                 {name:'福建',value:74288},
                 {name:'上海',value:113719},
                 {name:'北京',value:114717},
                 {name:'安徽',value:39257},
                 {name:'辽宁',value:50287},
                 {name:'陕西',value:40437},
                 {name:'内蒙古',value:74203},
                 {name:'江西',value:40223},
                 {name:'广西',value:38042},
                 {name:'天津',value:115617},
                 {name:'重庆',value:58208},
                 {name:'黑龙江',value:40365},
                 {name:'吉林',value:54066},
                 {name:'云南',value:31357},
                 {name:'山西',value:35284},
                 {name:'贵州',value:33274},
                 {name:'新疆',value:40756},
                 {name:'甘肃',value:27513},
                 {name:'海南',value:44405},
                 {name:'宁夏',value:47165},
                 {name:'青海',value:43718},
                 {name:'西藏',value:35499}
             ]
         },{
            name: '2013',
            type: 'map',
            geoIndex: 0,
            data:[
                {name:'广东',value:73290},
                 {name:'江苏',value:95390},
                 {name:'山东',value:67364},
                 {name:'浙江',value:83923},
                 {name:'河南',value:42363},
                 {name:'四川',value:39835},
                 {name:'湖北',value:55196},
                 {name:'河北',value:42866},
                 {name:'湖南',value:46063},
                 {name:'福建',value:74288},
                 {name:'上海',value:113719},
                 {name:'北京',value:114717},
                 {name:'安徽',value:39257},
                 {name:'辽宁',value:50287},
                 {name:'陕西',value:40437},
                 {name:'内蒙古',value:74203},
                 {name:'江西',value:40223},
                 {name:'广西',value:38042},
                 {name:'天津',value:115617},
                 {name:'重庆',value:58208},
                 {name:'黑龙江',value:40365},
                 {name:'吉林',value:54066},
                 {name:'云南',value:31357},
                 {name:'山西',value:35284},
                 {name:'贵州',value:33274},
                 {name:'新疆',value:40756},
                 {name:'甘肃',value:27513},
                 {name:'海南',value:44405},
                 {name:'宁夏',value:47165},
                 {name:'青海',value:43718},
                 {name:'西藏',value:35499}
             ]
         },
         {
            name: '2014',
            type: 'map',
            geoIndex: 0,
            data:[
                {name:'广东',value:73290},
                 {name:'江苏',value:95390},
                 {name:'山东',value:67364},
                 {name:'浙江',value:83923},
                 {name:'河南',value:42363},
                 {name:'四川',value:39835},
                 {name:'湖北',value:55196},
                 {name:'河北',value:42866},
                 {name:'湖南',value:46063},
                 {name:'福建',value:74288},
                 {name:'上海',value:113719},
                 {name:'北京',value:114717},
                 {name:'安徽',value:39257},
                 {name:'辽宁',value:50287},
                 {name:'陕西',value:40437},
                 {name:'内蒙古',value:74203},
                 {name:'江西',value:40223},
                 {name:'广西',value:38042},
                 {name:'天津',value:115617},
                 {name:'重庆',value:58208},
                 {name:'黑龙江',value:40365},
                 {name:'吉林',value:54066},
                 {name:'云南',value:31357},
                 {name:'山西',value:35284},
                 {name:'贵州',value:33274},
                 {name:'新疆',value:40756},
                 {name:'甘肃',value:27513},
                 {name:'海南',value:44405},
                 {name:'宁夏',value:47165},
                 {name:'青海',value:43718},
                 {name:'西藏',value:35499}
             ]
         },
         {
            name: '2015',
            type: 'map',
            geoIndex: 0,
            data:[
                 {name:'广东',value:73290},
                 {name:'江苏',value:95390},
                 {name:'山东',value:67364},
                 {name:'浙江',value:83923},
                 {name:'河南',value:42363},
                 {name:'四川',value:39835},
                 {name:'湖北',value:55196},
                 {name:'河北',value:42866},
                 {name:'湖南',value:46063},
                 {name:'福建',value:74288},
                 {name:'上海',value:113719},
                 {name:'北京',value:114717},
                 {name:'安徽',value:39257},
                 {name:'辽宁',value:50287},
                 {name:'陕西',value:40437},
                 {name:'内蒙古',value:74203},
                 {name:'江西',value:40223},
                 {name:'广西',value:38042},
                 {name:'天津',value:115617},
                 {name:'重庆',value:58208},
                 {name:'黑龙江',value:40365},
                 {name:'吉林',value:54066},
                 {name:'云南',value:31357},
                 {name:'山西',value:35284},
                 {name:'贵州',value:33274},
                 {name:'新疆',value:40756},
                 {name:'甘肃',value:27513},
                 {name:'海南',value:44405},
                 {name:'宁夏',value:47165},
                 {name:'青海',value:43718},
                 {name:'西藏',value:35499}
             ]
         },
         {
            name: '2016',
            type: 'map',
            geoIndex: 0,
            data:[
                {name:'广东',value:73290},
                 {name:'江苏',value:95390},
                 {name:'山东',value:67364},
                 {name:'浙江',value:83923},
                 {name:'河南',value:42363},
                 {name:'四川',value:39835},
                 {name:'湖北',value:55196},
                 {name:'河北',value:42866},
                 {name:'湖南',value:46063},
                 {name:'福建',value:74288},
                 {name:'上海',value:113719},
                 {name:'北京',value:114717},
                 {name:'安徽',value:39257},
                 {name:'辽宁',value:50287},
                 {name:'陕西',value:40437},
                 {name:'内蒙古',value:74203},
                 {name:'江西',value:40223},
                 {name:'广西',value:38042},
                 {name:'天津',value:115617},
                 {name:'重庆',value:58208},
                 {name:'黑龙江',value:40365},
                 {name:'吉林',value:54066},
                 {name:'云南',value:31357},
                 {name:'山西',value:35284},
                 {name:'贵州',value:33274},
                 {name:'新疆',value:40756},
                 {name:'甘肃',value:27513},
                 {name:'海南',value:44405},
                 {name:'宁夏',value:47165},
                 {name:'青海',value:43718},
                 {name:'西藏',value:35499}
             ]
         },
        {
            name: '2017',
            type: 'map',
            geoIndex: 0,
            data:[
                {name:'广东',value:73290},
                 {name:'江苏',value:95390},
                 {name:'山东',value:67364},
                 {name:'浙江',value:83923},
                 {name:'河南',value:42363},
                 {name:'四川',value:39835},
                 {name:'湖北',value:55196},
                 {name:'河北',value:42866},
                 {name:'湖南',value:46063},
                 {name:'福建',value:74288},
                 {name:'上海',value:113719},
                 {name:'北京',value:114717},
                 {name:'安徽',value:39257},
                 {name:'辽宁',value:50287},
                 {name:'陕西',value:40437},
                 {name:'内蒙古',value:74203},
                 {name:'江西',value:40223},
                 {name:'广西',value:38042},
                 {name:'天津',value:115617},
                 {name:'重庆',value:58208},
                 {name:'黑龙江',value:40365},
                 {name:'吉林',value:54066},
                 {name:'云南',value:31357},
                 {name:'山西',value:35284},
                 {name:'贵州',value:33274},
                 {name:'新疆',value:40756},
                 {name:'甘肃',value:27513},
                 {name:'海南',value:44405},
                 {name:'宁夏',value:47165},
                 {name:'青海',value:43718},
                 {name:'西藏',value:35499}
             ]
         }];
series.push(
        {   name: '2012',
            type: 'map',
            geoIndex: 0,
            data:[
                 {name:'广东',value:73290},
                 {name:'江苏',value:95390},
                 {name:'山东',value:67364},
                 {name:'浙江',value:83923},
                 {name:'河南',value:42363},
                 {name:'四川',value:39835},
                 {name:'湖北',value:55196},
                 {name:'河北',value:42866},
                 {name:'湖南',value:46063},
                 {name:'福建',value:74288},
                 {name:'上海',value:113719},
                 {name:'北京',value:114717},
                 {name:'安徽',value:39257},
                 {name:'辽宁',value:50287},
                 {name:'陕西',value:40437},
                 {name:'内蒙古',value:74203},
                 {name:'江西',value:40223},
                 {name:'广西',value:38042},
                 {name:'天津',value:115617},
                 {name:'重庆',value:58208},
                 {name:'黑龙江',value:40365},
                 {name:'吉林',value:54066},
                 {name:'云南',value:31357},
                 {name:'山西',value:35284},
                 {name:'贵州',value:33274},
                 {name:'新疆',value:40756},
                 {name:'甘肃',value:27513},
                 {name:'海南',value:44405},
                 {name:'宁夏',value:47165},
                 {name:'青海',value:43718},
                 {name:'西藏',value:35499}
             ]
         })
           
                    
           
option1 = {
    title: {
        text: '习近平参观考察行程',
        // subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
        // sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var cName=/[\u4e00-\u9fa5]+/g;
            var eName=/[A-Za-z]+/g;
            var where=params.name;
               return where;
            }
    },
     legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['2012年','2013年', '2014年', '2015年','2016年','2017年'],
        selected:{
            '2012年':true,
            '2013年':false,
            '2014年':false,
            '2015年':false,
            '2016年':false,
            '2017年':false
        },
        textStyle: {
            color: 'blue'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true 
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    visualMap: {
        min: 0,
        max: 100,
        pieces:[
                {min: 65000,label:'发达地区'},
                {min: 40000, max: 64999,label:'中等发达地区'},
                {min: 0, max: 39999,label:'欠发达地区'},
                ],
        splitNumber: 3,
        seriesIndex:18,
        color: ['#F8A788','#C0CA91','#CA9A87'],
        textStyle: {
            color: 'red'
        }
    }
    ,series: series
};
if (option1 && typeof option1 === "object") {
    myChart1.setOption(option1, true);
}
var isselected='2012年';
myChart1.on('legendselectchanged',function(params){
	console.log(params)
    switch(params.name){
        case '2012年':
            option1.legend.selected[isselected]=false;
            option1.legend.selected['2012年']=true;
            series[18]=mapData[0];
            myChart1.setOption(option1, true);
            isselected='2012年';
            break;
        case '2013年':
            option1.legend.selected[isselected]=false;
             option1.legend.selected['2013年']=true;
            series[18]=mapData[1];
            myChart1.setOption(option1, true);
            isselected='2013年';
            break;
        case '2014年':
            option1.legend.selected[isselected]=false;
            option1.legend.selected['2014年']=true;
            series[18]=mapData[2];
            myChart1.setOption(option1, true);
            isselected='2014年';
            break;
         case '2015年':
            option1.legend.selected[isselected]=false;
            option1.legend.selected['2015年']=true;
            series[18]=mapData[3];
            myChart1.setOption(option1, true);
            isselected='2015年';
            break;
         case '2016年':
            option1.legend.selected[isselected]=false;
            option1.legend.selected['2016年']=true;
            series[18]=mapData[4];
            myChart1.setOption(option1, true);
            isselected='2016年';
            break;
         case '2017年':
            option1.legend.selected[isselected]=false;
            option1.legend.selected['2017年']=true;
            series[18]=mapData[5];
            myChart1.setOption(option1, true);
            isselected='2017年';
            break;
    }
})
}

function world(){
var dom = document.getElementById("container2");
var myChart = echarts.init(dom);
var app = {};
option = null;
var geoCoordMap = {
    '北京':[116.420206,39.921086],
    '土库曼斯坦-阿什哈巴德': [58.274968,37.918469],
    '俄罗斯-圣彼得堡': [ 30.340542,59.882547],
    '哈萨克斯坦-阿斯塔纳': [71.395590,51.165697],
    '乌兹别克斯坦-塔什干': [69.242279,41.284576],
    '吉尔吉斯斯坦-比什凯克': [74.597689,42.870247],
    '印度尼西亚-雅加达': [106.863496,-6.196620],
    '马来西亚-吉隆坡': [101.690420,3.150502],
    '俄罗斯-索契': [39.724440,43.607418],
    '荷兰-阿姆斯特丹': [4.886790,52.369730],
    '法国-巴黎': [2.359642,48.856841],
    '德国-柏林': [13.401887,52.515687],
    '比利时-布鲁赛尔': [4.352511,50.846645],
    '韩国-首尔': [127.002030,37.552194],
    '希腊-罗德岛': [28.217458,36.433928],
    '巴西-巴西利亚': [-47.881903,-15.796958],
    '阿根廷-布宜诺斯艾利斯': [-58.389860,-34.605099],
    '委内瑞拉首都-加拉加斯': [-66.904079,10.477892],
    '古巴-哈瓦那': [-82.367829,23.108306],
    '古巴-圣地亚哥': [-75.830316,20.015096],
    '葡萄牙-特拉塞岛': [-9.139898,38.721061],
    '蒙古国-乌兰巴托': [106.905004,47.891525],
    '塔吉克斯坦首都-杜尚别': [68.786873,38.558803],
    '马尔代夫-马累': [73.509839,4.175482],
    '斯里兰卡-科伦坡': [79.861644,6.926106],
    '印度-艾哈迈达巴德': [72.571864,23.021027],
    '印度-新德里': [77.206597,28.608971],
    '澳大利亚-布里斯班': [153.025151,-27.469835],
    '澳大利亚-堪培拉': [149.131183,-35.281770],
    '澳大利亚-霍巴特': [147.328720,-42.883471],
    '澳大利亚-悉尼': [151.211791,-33.869275],
    '新西兰-奥克兰': [174.765455,-36.850177],
    '斐济-楠迪': [177.429446,-17.778652],
    '巴基斯坦-伊斯兰堡': [73.092317,33.727951],
    '印度尼西亚-雅加达': [106.845657,-6.211147],
    '哈萨克斯坦-阿斯塔纳': [71.470491,51.159011],
    '俄罗斯-莫斯科': [37.617337,55.753907],
    '白俄罗斯-明斯克': [27.560429,53.902737],
    '俄罗斯-乌法': [55.978849,54.737787],
    '美国-西雅图': [-122.333544,47.612622],
    '美国-华盛顿': [-77.062567,38.973699],
    '美国-纽约': [-74.006137,40.715751],
    '英国-伦敦': [-0.127791,51.507273],
    '英国-曼彻斯特': [-2.244234,53.478970],
    '越南-河内': [105.839653,21.033434],
    '新加坡': [103.867838,1.348868],
    '土耳其-安塔利亚': [30.715207,36.898117],
    '菲律宾-马尼拉': [120.982237,14.601257],
    '法国-巴黎': [2.352596,48.856296],
    '津巴布韦-哈拉雷': [31.034611,-17.828301],
    '南非共和国-比勒陀利亚': [28.214169,-25.739566],
    '南非共和国-约翰内斯堡': [28.046355,-26.203729],
    '沙特阿拉伯-利雅得': [46.695142,24.672007],
    '埃及-开罗': [31.235796,30.044245],
    '埃及-卢克索': [32.638477,25.697707],
    '伊朗-德黑兰': [51.391576,35.690223],
    '捷克共和国-布拉格': [14.439920,50.075169],
    '塞尔维亚-贝尔格莱德': [20.447025,44.784639],
    '波兰-华沙': [21.011285,52.229022],
    '乌兹别克斯坦-布哈拉': [64.454462,39.766298],
    '乌兹别克斯坦-塔什干': [69.238086,41.299318],
    '柬埔寨-金边': [104.893472,11.544479],
    '孟加拉国-达卡': [90.412194,23.809002],
    '印度-果阿': [73.846498,15.386366],
    '意大利-撒丁岛': [9.073250,40.126158],
    '厄瓜多尔-基多': [-78.450589,-0.175971],
    '秘鲁-利马': [-77.038458,-12.046541],
    '智利-圣地亚哥': [-70.670439,-33.451187],
    '西班牙-大加那利岛': [-15.547663,27.919936],
    '瑞士-苏黎世': [8.531908,47.380474],
    '瑞士-伯尔尼': [7.444319,46.946500],
    '瑞士-达沃斯': [9.839035,46.802229],
    '瑞士-日内瓦': [6.140218,46.226588],
    '芬兰-赫尔辛基': [24.952594,60.169461],
    '美国-海湖庄园': [-80.037130,26.677057],
    '美国-安克雷奇': [-149.861336,61.212680],
    '哈萨克斯坦-阿斯塔纳': [71.434503,51.23754]
};
var transData={
    2013:{
        'Turkmenistan': '土库曼斯坦-阿什哈巴德',
         'Russia':'俄罗斯-圣彼得堡',
         'Kazakhstan':'哈萨克斯坦-阿斯塔纳',
         'Uzbekistan':'乌兹别克斯坦-塔什干',
         'Kyrgyzstan':'吉尔吉斯斯坦-比什凯克',
         'Indonesia':'印度尼西亚-雅加达',
         'Malaysia':'马来西亚-吉隆坡',
         'China':'中国-北京'
    },
    2014:{
        'Argentina':'阿根廷-布宜诺斯艾利斯', 
         'Australia':'澳大利亚-堪培拉', 
         'Belgium':'比利时-布鲁赛尔' ,
         'Brazil' : '巴西-巴西利亚',
         'Cuba':'古巴-哈瓦那',
         'Germany':'德国-柏林',
         'Fiji':'斐济-楠迪',
         'Greece':'希腊-罗德岛',
         'South Korea':'韩国-首尔',
         'Sri Lanka':'斯里兰卡-科伦坡',
         'Mongolia':'蒙古国-乌兰巴托',
         'Netherlands': '荷兰-阿姆斯特丹',
         'New Zealand': '新西兰-奥克兰',
         'Portugal': '葡萄牙-特拉塞岛',
         'Tajikistan':'塔吉克斯坦-杜尚别',  
         'Venezuela': '委内瑞拉首都-加拉加斯',                         
         'Maldives':'马尔代夫-马累',
         'France': '法国-巴黎',
         'India': '印度-新德里',
         'Russia':'俄罗斯-索契',
         'China':'中国-北京'
    },
    2015:{
         'Pakistan':'巴基斯坦-伊斯兰堡',
         'Indonesia':'印度尼西亚-雅加达',
         'Kazakhstan':'哈萨克斯坦-阿斯塔纳',
         'Russia':'俄罗斯-莫斯科',
         'Belarus':'白俄罗斯-明斯克',
         'United States of America':'美国-华盛顿',
         'United Kingdom':'英国-伦敦',
         'Vietnam':'越南-河内',
         'Singapore':'新加坡',
         'Turkey':'土耳其-安塔利亚',
         'Philippines':'菲律宾-马尼拉',
         'France':'法国-巴黎',
         'Zimbabwe':'津巴布韦-哈拉雷',
         'South Africa':'南非共和国-约翰内斯堡',
         'China':'中国-北京'
    },
    2016:{
         'Saudi Arabia':'沙特阿拉伯-利雅得', 
         'Egypt':'埃及-开罗', 
         'Iran':'伊朗-德黑兰', 
         'Czech Republic':'捷克共和国-布拉格', 
         'United States of America':'美国-华盛顿',
         'Republic of Serbia':'塞尔维亚-贝尔格莱德', 
         'Poland':'波兰-华沙', 
         'Uzbekistan':'乌兹别克斯坦-塔什干',
         'Cambodia':'柬埔寨-金边', 
         'Bangladesh':'孟加拉国-达卡', 
         'India':'印度-果阿', 
         'Italy': '意大利-撒丁岛', 
         'Ecuador':'厄瓜多尔-基多', 
         'Peru':'秘鲁-利马', 
         'Chile':'智利-圣地亚哥', 
         'Spain': '西班牙-大加那利岛',
         'China':'中国-北京' 
    },
    2017:{
         'Switzerland':'瑞士-苏黎世', 
         'Finland':'芬兰-赫尔辛基', 
         'United States of America':'美国-海湖庄园', 
         'Kazakhstan':'哈萨克斯坦-阿斯塔纳',
         'China':'中国-北京' 
    }
}
var dateData={
    2013:{ '土库曼斯坦-阿什哈巴德': ['9月3日-9月4日','习近平抵达阿什哈巴德开始对土库曼斯坦进行国事访问'],
            '俄罗斯-圣彼得堡':['9月4日-9月5日','习近平抵达圣彼得堡出席二十国集团领导人第八次峰会'],
            '哈萨克斯坦-阿斯塔纳': ['9月6日-9月7日','习近平抵达阿斯塔纳开始对哈萨克斯坦进行国事访问'],
            '乌兹别克斯坦-塔什干': ['9月8日-9月9日','习近平抵达塔什干开始对乌兹别克斯坦进行国事访问'],
            '吉尔吉斯斯坦-比什凯克':['9月10日-9月13日','习近平抵达比什凯克开始对吉尔吉斯斯坦进行国事访问并出席上海合作组织峰会'] ,
            '印度尼西亚-雅加达': ['10月2日-10月3日','习近平将访问印度尼西亚和马来西亚并出席APEC会议'],
            '马来西亚-吉隆坡': ['10月3日-10月4日','习近平抵达吉隆坡开始对马来西亚进行国事访问']
        },
    2014:{
            '俄罗斯-索契': ['2月6日-2月8日','习近平抵达俄罗斯索契出席第22届冬奥会开幕式'],
            '荷兰-阿姆斯特丹':['3月22日-3月25日','习近平抵达荷兰阿姆斯特丹开启欧洲之旅并出席第三届核安全峰会'],
            '法国-巴黎':['3月25日-3月27日','习近平同法国总统奥朗德举行会谈,开创紧密持久的中法全面战略伙伴关系新时代'],
            '德国-柏林':['3月28日-3月29日','习近平抵达柏林开始对德国进行国事访问'] ,
            '比利时-布鲁赛尔': ['3月30日-4月1日','习近平会见比利时国王菲利普'],
            '韩国-首尔': ['7月3日-7月4日','习近平离京对韩国进行国事访问'],
            '希腊-罗德岛':['7月13日','习近平离京出席金砖国家领导人第六次会晤并访问巴西等四国'],
            '巴西-巴西利亚':['7月14日-7月17日','习近平出席金砖国家领导人第六次会晤'],
            '阿根廷-布宜诺斯艾利斯':['7月18日-7月20日','习近平抵达布宜诺斯艾利斯开始对阿根廷进行国事访问'] ,
            '委内瑞拉首都-加拉加斯':['7月20日-7月21日','习近平抵达加拉加斯开始对委内瑞拉进行国事访问'],
            '古巴-哈瓦那':['7月21日-7月22日','习近平抵达哈瓦那开始对古巴进行国事访问'],
            '葡萄牙-特拉塞岛':['7月24日','习近平会见葡萄牙总统代表、副总理波塔斯'],
            '蒙古国-乌兰巴托':['8月21日-8月22日','习近平对蒙古国进行国事访问'],
            '塔吉克斯坦-杜尚别':['9月11日-9月13日','习近平抵达杜尚别:我这次访问是友谊之旅、合作之旅'],
            '马尔代夫-马累':['9月14日-9月15日','习近平抵达马累开始对马尔代夫进行国事访问'],
            '斯里兰卡-科伦坡':['9月16日-9月17日','习近平抵达科伦坡开始对斯里兰卡进行国事访问'],
            '印度-新德里':['9月17日-9月19日','习近平对印度进行国事访问'],
            '澳大利亚-堪培拉':['11月16日-11月19日','习近平出席G20峰会并访问澳大利亚'],
            '新西兰-奥克兰':['11月20日-11月21日','习近平和约翰·基共同出席中国-新西兰市长论坛启动仪式'],
            '斐济-楠迪':['11月21日-11月22日','习近平抵达楠迪开始对斐济进行国事访问'],
        },
    2015:{
            '巴基斯坦-伊斯兰堡':['4月21日','习近平抵达伊斯兰堡开始对巴基斯坦进行国事访问'],
            '印度尼西亚-雅加达':['4月22日-4月24日','习近平抵达雅加达出席亚非领导人会议和万隆会议60周年纪念活动'],
            '哈萨克斯坦-阿斯塔纳':['5月7日','习近平抵达阿斯塔纳开始访问哈萨克斯坦'],
            '俄罗斯-莫斯科':['5月8日-5月9日','习近平抵达莫斯科出席纪念卫国战争胜利70周年庆典并访问俄罗斯'],
            '白俄罗斯-明斯克':['5月10日-5月11日','习近平抵达明斯克开始对白俄罗斯进行国事访问'],
            // '俄罗斯-乌法':'7月9日-7月10日',
            '美国-华盛顿':['9月24日-9月25日','习近平将对美国进行国事访问并出席联合国成立70周年系列峰会'],
            '英国-伦敦':['10月19日-10月22日','习近平抵达伦敦开始对英国进行国事访问'],
            '越南-河内':['11月5日-11月6日','习近平抵达河内开始对越南进行国事访问'],
            '新加坡':['11月6日-11月7日','习近平抵达新加坡开始对新加坡进行国事访问'],
            '土耳其-安塔利亚':['11月14日-11月6日','习近平抵达土耳其安塔利亚出席二十国集团领导人第十次峰会'],
            '菲律宾-马尼拉':['11月17日-11月19日','习近平抵达菲律宾马尼拉 出席亚太经合组织第二十三次领导人非正式会议'],
            '法国-巴黎':['11月30日','习近平抵达法国巴黎出席气候变化巴黎大会开幕活动'],
            '津巴布韦-哈拉雷':['12月1日','习近平抵达哈拉雷开始对津巴布韦进行国事访问'],
            '南非共和国-约翰内斯堡':['12月3日-12月5日','习近平和彭丽媛出席中非合作论坛峰会欢迎宴会'],
    },
   2016:{
            '沙特阿拉伯-利雅得':['1月19日-1月20日','习近平抵达利雅得开始对沙特进行国事访问'],
            '埃及-开罗':['1月20日','习近平抵达开罗开始对埃及进行国事访问'],
            '伊朗-德黑兰':['1月23日','习近平抵达德黑兰开始对伊朗进行国事访问'],
            '捷克共和国-布拉格':['3月28日-3月30日','习近平将对捷克进行国事访问并赴美国出席第四届核安全峰会'],
            '美国-华盛顿':['3月31日-4月1日','习近平抵达华盛顿出席第四届核安全峰会'],
            '塞尔维亚-贝尔格莱德':['6月17日-6月19日','习近平离京对塞尔维亚等三国进行国事访问并出席上合峰会'],
            '波兰-华沙':['6月19日-6月20日','习近平抵达华沙 开始对波兰共和国进行国事访问'],
            '乌兹别克斯坦-塔什干':['6月21日-6月24日','习近平抵达布哈拉开始对乌兹别克斯坦共和国进行国事访问并出席在塔什干举行的上海合作组织成员国元首理事会第十六次会议'],
            '柬埔寨-金边':['10月13日','习近平抵达金边开始对柬埔寨王国进行国事访问'],
            '孟加拉国-达卡':['10月14日','习近平抵达达卡 开始对孟加拉国进行国事访问'],
            '印度-果阿':['10月15日-10月16日','习近平出席在印度果阿举行的金砖国家领导人第八次会晤'],
            '意大利-撒丁岛':['11月16日','习近平在意大利撒丁岛会见意大利总理伦齐'],
            '厄瓜多尔-基多':['11月17日-11月18日','习近平抵达基多开始对厄瓜多尔共和国进行国事访问'],
            '秘鲁-利马': ['11月18日-11月21日','主席访问秘鲁将把两国关系提升至新高度--访秘鲁第二副总统阿劳斯'],
            '智利-圣地亚哥': ['11月22日','习近平抵达圣地亚哥对智利共和国进行国事访问'],
            '西班牙-大加那利岛':['11月24日','习近平会见西班牙副首相萨恩斯'],
         },
    2017:{
            '瑞士-苏黎世':['1月15日' ,''],
            '芬兰-赫尔辛基':['4月4日-4月6日' ,''],
            '美国-海湖庄园':['4月6日-4月7日' ,''],
            '哈萨克斯坦-阿斯塔纳':['6月7日-6月10日',''],
        }     
}
var data13 = [
    [{name:'北京'}, {name:'土库曼斯坦-阿什哈巴德',value:50}], 
    [{name:'北京'}, {name:'俄罗斯-圣彼得堡',value:50}],       
    [{name:'北京'}, {name:'哈萨克斯坦-阿斯塔纳',value:50}],   
    [{name:'北京'}, {name:'乌兹别克斯坦-塔什干',value:50}],   
    [{name:'北京'}, {name:'吉尔吉斯斯坦-比什凯克',value:50}], 
    [{name:'北京'}, {name:'印度尼西亚-雅加达',value:50}],     
    [{name:'北京'}, {name:'马来西亚-吉隆坡',value:50}],         
];

var data14 = [
    [{name:'北京'},{name:'俄罗斯-索契',value:50}],
    [{name:'北京'},{name:'荷兰-阿姆斯特丹',value:50}],
    [{name:'北京'},{name:'法国-巴黎',value:50}],
    [{name:'北京'},{name:'德国-柏林',value:50}],
    [{name:'北京'},{name:'比利时-布鲁赛尔',value:50}],
    [{name:'北京'},{name:'韩国-首尔',value:50}],
    [{name:'北京'},{name:'希腊-罗德岛',value:50}],
    [{name:'北京'},{name:'巴西-巴西利亚',value:50}],
    [{name:'北京'},{name:'阿根廷-布宜诺斯艾利斯',value:50}],
    [{name:'北京'},{name:'委内瑞拉首都-加拉加斯',value:50}],
    [{name:'北京'},{name:'古巴-哈瓦那',value:50}],
    [{name:'北京'},{name:'葡萄牙-特拉塞岛',value:50}],
    [{name:'北京'},{name:'蒙古国-乌兰巴托',value:50}],
    [{name:'北京'},{name:'塔吉克斯坦首都-杜尚别',value:50}],
    [{name:'北京'},{name:'马尔代夫-马累',value:50}],
    [{name:'北京'},{name:'斯里兰卡-科伦坡',value:50}],
    [{name:'北京'},{name:'印度-新德里',value:50}],
    [{name:'北京'},{name:'澳大利亚-堪培拉',value:50}],
    [{name:'北京'},{name:'新西兰-奥克兰',value:50}],
    [{name:'北京'},{name:'斐济-楠迪',value:50}]
];

var data15 = [
    [{name:'北京'},{name:'巴基斯坦-伊斯兰堡',value:50}],
    [{name:'北京'},{name:'印度尼西亚-雅加达',value:50}],
    [{name:'北京'},{name:'哈萨克斯坦-阿斯塔纳',value:50}],
    [{name:'北京'},{name:'俄罗斯-莫斯科',value:50}],
    [{name:'北京'},{name:'白俄罗斯-明斯克',value:50}],
    [{name:'北京'},{name:'美国-华盛顿',value:50}],
    [{name:'北京'},{name:'英国-伦敦',value:50}],
    [{name:'北京'},{name:'越南-河内',value:50}],
    [{name:'北京'},{name:'新加坡',value:50}],
    [{name:'北京'},{name:'土耳其-安塔利亚',value:50}],
    [{name:'北京'},{name:'菲律宾-马尼拉',value:50}],
    [{name:'北京'},{name:'法国-巴黎',value:50}],
    [{name:'北京'},{name:'津巴布韦-哈拉雷',value:50}],
    [{name:'北京'},{name:'南非共和国-约翰内斯堡',value:50}]

];
var data16 = [
    [{name:'北京'},{name:'沙特阿拉伯-利雅得',value:50}],
    [{name:'北京'},{name:'埃及-开罗',value:50}],
    [{name:'北京'},{name:'伊朗-德黑兰',value:50}],
    [{name:'北京'},{name:'捷克共和国-布拉格',value:50}],
    [{name:'北京'},{name:'美国-华盛顿',value:50}],
    [{name:'北京'},{name:'塞尔维亚-贝尔格莱德',value:50}],
    [{name:'北京'},{name:'波兰-华沙',value:50}],
    [{name:'北京'},{name:'乌兹别克斯坦-塔什干',value:50}],
    [{name:'北京'},{name:'柬埔寨-金边',value:50}],
    [{name:'北京'},{name:'孟加拉国-达卡',value:50}],
    [{name:'北京'},{name:'印度-果阿',value:50}],
    [{name:'北京'},{name:'意大利-撒丁岛',value:50}],
    [{name:'北京'},{name:'厄瓜多尔-基多',value:50}],
    [{name:'北京'},{name:'秘鲁-利马',value:50}],
    [{name:'北京'},{name:'智利-圣地亚哥',value:50}],
    [{name:'北京'},{name:'西班牙-大加那利岛',value:50}]

];
var data17 = [
    [{name:'北京'},{name:'瑞士-苏黎世',value:50}],
    [{name:'北京'},{name:'芬兰-赫尔辛基',value:50}],
    [{name:'北京'},{name:'美国-海湖庄园',value:50}],
    [{name:'北京'},{name:'哈萨克斯坦-阿斯塔纳',value:50}]
];


var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9','#aac88c','#acc44c'];
var series = [];
[['2013年', data13], ['2014年', data14], ['2015年', data15],['2016年', data16],['2017年', data17]].forEach(function (item, i) {
    series.push(
    {
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                textStyle:{
                    color:'black',
                    fontSize:12    
                }
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle:{
                normal: {
                    color: color[i]
                }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

var mapData=[{
            name: '2013',
            type: 'map',
            geoIndex: 0,
            data:[
             {name: 'Turkmenistan', value: 479.319/4884887*100000000},
             {name: 'Russia', value:21090.2/140041247*100000000},
             {name: 'Kazakhstan', value:2201.41/15399437*100000000},
             {name: 'Uzbekistan', value: 626.439/27606007*100000000},
             {name: 'Kyrgyzstan', value: 74.044/5431747*100000000},
             {name: 'Indonesia', value: 10068.9/240271522*100000000},
             {name: 'Malaysia', value: 3400.02/25715819*100000000},
             {name: 'China', value: 103856.6/1369202232*100000000}
             ]
         },{
            name: '2014',
            type: 'map',
            geoIndex: 0,
            data:[
                {name: 'Argentina', value: 5371.17/40913584*100000000},
                {name: 'Australia', value: 15980.7/21262641*100000000},
                {name: 'Belgium', value: 5111.45/10414336*100000000},       
                {name: 'Brazil', value: 25038.7/198739269*100000000},
                {name: 'China', value: 103856.6/1369202232*100000000},
                {name: 'Cuba', value: 786.94/11451652*100000000}, 
                {name: 'Germany', value: 38682.9/82329758*100000000},
                {name: 'Fiji', value: 150.962/944720*100000000},
                {name: 'Greece', value: 2359.06/10737428*100000000},
                {name: 'South Korea', value: 12340.4/48508972*100000000},
                {name: 'Sri Lanka', value: 788.236/21324791*100000000},
                {name: 'Mongolia', value: 120.159/3041142*100000000},
                {name: 'Netherlands', value: 7670.96/16715999*100000000},
                {name: 'New Zealand', value:1740.35/4213418*100000000},
                {name: 'Portugal', value: 2066.23/10707924*100000000},
                {name: 'Tajikistan', value: 92.416/7349145*100000000},
                {name: 'Venezuela', value: 3496.56/26814843*100000000},                              
                {name: 'Maldives',value:30.618/396334*100000000},
                {name: 'France', value: 25656.2/64420073*100000000},
                {name: 'India', value: 21172.8/1166079217*100000000},
                {name: 'Russia', value:21090.2/140041247*100000000 }            
             ]
         },
         {
            name: '2015',
            type: 'map',
            geoIndex: 0,
            data:[
                {name: 'Pakistan', value:2366.25/176242949*100000000},
                {name: 'Indonesia', value: 10068.9/240271522*100000000 },
                {name: 'Kazakhstan', value:2201.41/15399437*100000000},
                {name: 'Russia', value:21090.2/140041247*100000000},
                {name: 'Belarus', value: 589.33/9648533*100000000},
                {name: 'United States of America', value:174979.6/307212123*100000000},
                {name: 'United Kingdom', value: 25320.5/61113205*100000000},
                {name: 'Vietnam', value: 1518.76/86967524*100000000},
                {name: 'Singapore',value:2778.6/4657542*100000000},
                {name: 'Turkey', value: 8389.73/76805524*100000000},
                {name: 'Philippines', value: 2585.17/97976603*100000000},
                {name: 'France', value: 25656.2/64420073*100000000},
                {name: 'Zimbabwe', value: 144.19/11392629*100000000},
                {name: 'China', value: 103856.6/1369202232*100000000},
                {name: 'South Africa', value:4021.52/49052489*100000000}, 
             ]
         },
         {
            name: '2016',
            type: 'map',
            geoIndex: 0,
            data:[
                {name: 'Saudi Arabia', value:6825.83/28686633*100000000},
                {name: 'Egypt', value:2758.68/83082869*100000000},
                {name: 'Iran', value:5148.21/66429284*100000000},
                {name: 'Czech Republic', value:1925.97/10011904*100000000},
                {name: 'United States of America', value:174979.6/307212123*100000000},
                {name: 'Republic of Serbia', value: 438.664/7379339*100000000},
                {name: 'Poland', value: 4967.41/38482919*100000000},
                {name: 'Uzbekistan', value: 626.439/27606007*100000000},
                {name: 'Cambodia', value: 167.778/14494293*100000000},
                {name: 'Bangladesh', value: 1266.54/156050883*100000000 },
                {name: 'India', value: 21172.8/1166079217*100000000},
                {name: 'Italy', value:19538.2/58126212*100000000},
                {name: 'Ecuador', value:763.95/14573101*100000000},
                {name: 'Peru', value:2119.8/29546963*100000000},
                {name: 'Chile', value: 2919.69/16601707*100000000},
                {name: 'Spain', value: 13111.2/40525002*100000000},
                {name: 'China', value: 103856.6/1369202232*100000000}
             ]
         },
         {
            name: '2017',
            type: 'map',
            geoIndex: 0,
            data:[
                {name: 'Switzerland', value: 6165.95/7604467*100000000},
                {name: 'Finland', value: 2521.63/5250275*100000000},
                {name: 'United States of America', value:174979.6/307212123*100000000},
                {name: 'Kazakhstan', value:2201.41/15399437*100000000},
                {name: 'China', value: 103856.6/1369202232*100000000}
             ]
         }];
series.push(
        {
            name: '2013',
            type: 'map',
            geoIndex: 0,
            data:[
             {name: 'Turkmenistan', value: 479.319/4884887*100000000},
             {name: 'Russia', value:21090.2/140041247*100000000},
             {name: 'Kazakhstan', value:2201.41/15399437*100000000},
             {name: 'Uzbekistan', value: 626.439/27606007*100000000},
             {name: 'Kyrgyzstan', value: 74.044/5431747*100000000},
             {name: 'Indonesia', value: 10068.9/240271522*100000000},
             {name: 'Malaysia', value: 3400.02/25715819*100000000},
             {name: 'China', value: 103856.6/1369202232*100000000}
             ]
         })
option = {
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var cName=/[\u4e00-\u9fa5]+/g;
            var eName=/[A-Za-z]+/g;
            var whichYear=parseInt(params.seriesName);
            var whereCountry=params.name;
            if(whereCountry&&cName.test(whereCountry)){
               return whichYear+'年'+dateData[whichYear][whereCountry][0]+'<br/>'+dateData[whichYear][whereCountry][1];
            }else if(eName.test(whereCountry)){
                if(whereCountry=='China'){
                    return '中国-北京';
                }
                else if(transData[whichYear][whereCountry]){
                     return whichYear+'年'+dateData[whichYear][transData[whichYear][whereCountry]][0]+'<br/>'+dateData[whichYear][transData[whichYear][whereCountry]][1];
                }
               
            }
        }
    },
     legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['2013年', '2014年', '2015年','2016年','2017年'],
        selected:{
            '2013年':true,
            '2014年':false,
            '2015年':false,
            '2016年':false,
            '2017年':false
        },
        textStyle: {
            color: 'blue'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true 
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    visualMap: {
        min: 0,
        max: 210000,
        pieces:[
                {min: 13000,label:'13000~ 发达国家'},
                {min: 1000, max: 13000,label:'1000~13000 发展中国家'},
                {min: 0, max: 800,label:'0~1000 贫穷国家'},
                ],
        splitNumber: 3,
        seriesIndex:15,
        color: ['#F8A788','#C0CA91','#CA9A87'],
        textStyle: {
            color: 'red'
        }
    },
    series: series
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
var isselected='2013年';
myChart.on('legendselectchanged',function(params){
    switch(params.name){
        case '2013年':
            option.legend.selected[isselected]=false;
             option.legend.selected['2013年']=true;
            series[15]=mapData[0];
            myChart.setOption(option, true);
            isselected='2013年';
            break;
        case '2014年':
            option.legend.selected[isselected]=false;
            option.legend.selected['2014年']=true;
            series[15]=mapData[1];
            myChart.setOption(option, true);
            isselected='2014年';
            break;
         case '2015年':
            option.legend.selected[isselected]=false;
            option.legend.selected['2015年']=true;
            series[15]=mapData[2];
            myChart.setOption(option, true);
            isselected='2015年';
            break;
         case '2016年':
            option.legend.selected[isselected]=false;
            option.legend.selected['2016年']=true;
            series[15]=mapData[3];
            myChart.setOption(option, true);
            isselected='2016年';
            break;
         case '2017年':
            option.legend.selected[isselected]=false;
            option.legend.selected['2017年']=true;
            series[15]=mapData[4];
            myChart.setOption(option, true);
            isselected='2017年';
            break;
    }
})

}


function c1() {
var dom = document.getElementById("c1");
var myChart2 = echarts.init(dom);
var app = {};
var	option2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['发达地区','中等发达地区','欠发达地区']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2012','2013','2014','2015','2016','2017']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'发达地区',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[3, 3, 6, 1, 0, 3]
        },
        {
            name:'中等发达地区',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 3, 3, 1, 2, 1]
        },
        {
            name:'欠发达地区',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 2, 0, 2, 1, 1]
        }
    ]
};
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
}
}


function c2() {
var dom = document.getElementById("c3");
var myChart3 = echarts.init(dom);
var app = {};
var	option3 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['发达国家','发达中国家','欠发达国家']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2013','2014','2015','2016','2017']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'发达国家',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[3, 13, 7, 5, 4]
        },
        {
            name:'发达中国家',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[4, 7, 7, 12, 0]
        },
        {
            name:'欠发达国家',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 0, 0, 0, 0]
        }
    ]
};
if (option3 && typeof option3 === "object") {
    myChart3.setOption(option3, true);
}
}

function c3() {
var dom = document.getElementById("c4");
var myChart4 = echarts.init(dom);
var app = {};
var	option4 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['亚洲','欧洲','美洲','非洲','大洋洲']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2013','2014','2015','2016','2017']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'亚洲',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[6, 5, 6, 6, 1]
        },
        {
            name:'欧洲',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[1, 8, 5, 5, 2]
        },
        {
            name:'美洲',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 4, 1, 3, 1]
        },
        {
            name:'非洲',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 0, 2, 2, 0]
        },
        {
            name:'大洋洲',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 3, 0, 0, 0]
        }
    ]
};
if (option4 && typeof option4 === "object") {
    myChart4.setOption(option4, true);
}
}

china();
world();
c1();
c2();
c3();
