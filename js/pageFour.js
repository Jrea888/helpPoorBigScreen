//ajax模块化
var service = {
    init: function () {
        this.loadchart1();
        this.loadchart2();
        this.loadchart3();
        this.loadchart4();
        this.loadchart5();
        this.loadchart8();
        this.loadchart10();
        this.loadchart22();
        this.loadchart23();
        this.loadchart24();
        this.loadchart25();
        this.loadchart26();
        this.loadchart27();
        this.loadchart28();
        this.loadchart29();
        this.loadchart30();
        this.loadchart31();
        this.loadchart32();
        // this.loadchart33();
        this.loadchart34();
        this.loadchart35();
        this.loadchart36();
    },

    loadchart1: function () {
        var url = "pageEight8.json";
        this.ajax(url, this.callback.loadchart1Callback);
    },
    loadchart2: function () {
        var url = "pageEight10.json";
        this.ajax(url, this.callback.loadchart2Callback);
    },
    loadchart3: function () {
        var url = "pageNine1.json";
        this.ajax(url, this.callback.loadchart3Callback);
    },
    loadchart4: function() {
        var url = "pageNine2.json";
        this.ajax(url, this.callback.loadchart4Callback);
    },
    loadchart5: function() {
        var url = "pageNine3.json";
        this.ajax(url, this.callback.loadchart5Callback);
    },
    loadchart8: function() {
        var url = "pageNine6.json";
        this.ajax(url, this.callback.loadchart8Callback);
    },
    loadchart10: function() {
        var url = "pageNine8.json";
        this.ajax(url, this.callback.loadchart10Callback);
    },
    loadchart22: function() {
        var url = "pageSeven10.json";
        this.ajax(url, this.callback.loadchart22Callback);
    },
    loadchart23: function() {
        var url = "pageSeven11.json";
        this.ajax(url, this.callback.loadchart23Callback);
    },
    loadchart24: function() {
        var url = "pageSeven12.json";
        this.ajax(url, this.callback.loadchart24Callback);
    },
    loadchart25: function() {
        var url = "pageEight3.json";
        this.ajax(url, this.callback.loadchart25Callback);
    },
    loadchart26: function() {
        var url = "pageEight1.json";
        this.ajax(url, this.callback.loadchart26Callback);
    },
    loadchart27: function() {
        var url = "pageEight2.json";
        this.ajax(url, this.callback.loadchart27Callback);
    },
    loadchart28: function() {
        var url = "pageEight4.json";
        this.ajax(url, this.callback.loadchart28Callback);
    },
    loadchart29: function() {
        var url = "pageEight5.json";
        this.ajax(url, this.callback.loadchart29Callback);
    },
    loadchart30: function() {
        var url = "pageEight6.json";
        this.ajax(url, this.callback.loadchart30Callback);
    },
    loadchart31: function() {
        var url = "pageEight7.json";
        this.ajax(url, this.callback.loadchart31Callback);
    },
    loadchart32: function() {
        var url = "pageEight9.json";
        this.ajax(url, this.callback.loadchart32Callback);
    },
    // loadchart33: function() {
    //     var url = "pageEight11.json";
    //     this.ajax(url, this.callback.loadchart33Callback);
    // },
    loadchart34: function() {
        var url = "pageEight12.json";
        this.ajax(url, this.callback.loadchart34Callback);
    },
    loadchart35: function() {
        var url = "pageEight13.json";
        this.ajax(url, this.callback.loadchart35Callback);
    },
    loadchart36: function() {
        var url = "pageEight14.json";
        this.ajax(url, this.callback.loadchart36Callback);
    },
    ajax: function (url, callback) {
        $.ajax({
            url: '../data/' + url,
            type: "GET",
            dataType: "json",
            scriptCharset: "utf-8",
            success: function (result) {
                callback(result);
            },
            error: function () {
                console.log("数据请求错误")
            }
        });
    },
    callback: {
        loadchart1Callback: function (result) {
            var datayczjzb = [];
            var dataYczpzb = [];
            $.each(result, function (key, values) {
                datayczjzb.push(values[0]);
                dataYczpzb.push(values[1]);
            });
            var chart8 = echarts.init(document.getElementById('yczpzb'));
            var option8 = {
                color: ['#faff4d'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: datayczjzb,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}%'

                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        min: 0,
                        max: 40,
                        interval: 5,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '占比',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                label: {
                                    color: '#fff',
                                    show: true,
                                    type: 'solid',
                                },
                                lineStyle: {
                                    width: 3
                                },
                                areaStyle: {
                                    type: 'default',
                                    color: ['rgba(138,255,169,0.3)','rgba(105,176,238,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#8affa9'
                                }, {
                                    offset: 1,
                                    color: '#69b0ee'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: dataYczpzb
                    },

                ]
            };
            chart8.setOption(option8);
        },
        loadchart2Callback: function(result) {
            var dataqgxyczpzb = [];
            var dataBzxyczpzb = [];
            var dataJyxyczpzb = [];
            var dataLqxyczpzb = [];
            var dataQxyczpzb = [];
            var dataSyxyczpzb = [];
            var dataXpxyczpzb = [];
            var dataWgxyczpzb = [];
            $.each(result,function(key,values){
                dataqgxyczpzb.push(values[0]);
                dataBzxyczpzb.push(values[1]);
                dataJyxyczpzb.push(values[2]);
                dataLqxyczpzb.push(values[3]);
                dataQxyczpzb.push(values[4]);
                dataSyxyczpzb.push(values[5]);
                dataXpxyczpzb.push(values[6]);
                dataWgxyczpzb.push(values[7]);
            });
            console.log(dataqgxyczpzb);
            var chart10 = echarts.init(document.getElementById('qgxyczpzb'));
            var option10 = {
                color: ['#1381ff','#ff7a06','#7a7c6f','#f9ff56','#16ff16','#ab14ff','#ff0c00'],
                tooltip: {
                    trigger:'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',

                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data:dataqgxyczpzb,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data:['彬州市','泾阳县','礼泉县','乾县','三原县','兴平市','武功县'],
                    y: 5,
                    left:10,
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter:'{value}%'
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        min: 0,
                        max: 45,
                        interval: 5,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name:'彬州市',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataBzxyczpzb,
                    },
                    {
                        name:'泾阳县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataJyxyczpzb,
                    },
                    {
                        name:'礼泉县',
                        smooth:true,

                        type: 'line',
                        barGap: 0,
                        data: dataLqxyczpzb,
                    },
                    {
                        name:'乾县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataQxyczpzb,
                    },
                    {
                        name:'三原县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataSyxyczpzb,
                    },
                    {
                        name:'兴平市',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataXpxyczpzb,
                    },
                    {
                        name:'武功县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataWgxyczpzb,
                    },
                ]
            };
            chart10.setOption(option10);
        },
        loadchart3Callback: function(result) {
            var dataxq = [];
            var dataSyhs = [];
            var dataSyrs = [];
            var dataSr = [];
            $.each(result,function(key,values){
                console.log(values[0])
                dataxq.push(values[0])
                dataSyhs.push(values[1]);
                dataSyrs.push(values[2]);
                dataSr.push(values[3]);
            });
            var chart1 = echarts.init(document.getElementById('fpztqk'));
            var option1 = {
                color: ['#ffdf25', '#36a9ce', '#d0e17d'],
                legend: {
                    data:['受益户数','受益人数','总收入（万元）'],
                    y: 5,
                    left:60,
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',

                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data:dataxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'受益户数',
                        type: 'bar',
                        barGap: 0,
                        data: dataSyhs,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff',
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[2, 2, 0, 0]
                            }
                        },
                    },
                    {
                        name: '受益人数',
                        type: 'bar',
                        data: dataSyrs,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff',
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[2, 2, 0, 0]
                            }
                        },
                    },
                    {
                        name: '总收入（万元）',
                        type: 'bar',
                        data: dataSr,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff',
                            }
                        },
                        itemStyle: {
                           normal: {
                               barBorderRadius:[2, 2, 0, 0]
                          }
                       },
                    },

                ]
            };
            chart1.setOption(option1);
        },
        loadchart4Callback: function(result) {
            var datazzxq = [];
            var dataZzyh = [];
            var dataZzysr = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datazzxq.push(values[0])
                dataZzyh.push(values[1]);
                dataZzysr.push(values[2]);
            });
            var chart2 = echarts.init(document.getElementById('zzyhsr'));
            var option2 = {
                color: ['#5e68ff','#ccb958'],
                legend: {
                    data:['种植业户数分布','种植业收入分布'],
                    y: 5,
                    left:60,
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data:datazzxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'种植业户数分布',
                        type: 'bar',
                        data: dataZzyh,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                    barBorderRadius:[2, 2, 0, 0]
                            }
                        },
                    },
                    {
                        name: '种植业收入分布',
                        type: 'bar',
                        data: dataZzysr,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[2, 2, 0, 0]
                            }
                        },
                    },
                ]
            };
            chart2.setOption(option2);
        },
        loadchart5Callback: function(result) {
            var datayzxq = [];
            var dataYzyh = [];
            var dataYzysr = [];
            $.each(result,function(key,values){
                datayzxq.push(values[0])
                dataYzyh.push(values[1]);
                dataYzysr.push(values[2]);
            });
            var chart3 = echarts.init(document.getElementById('yzhsr'));
            var option3 = {
                color: ['#6BFFAE','#DFA277'],
                legend: {
                    data:['养植业户数（户）','养植业收入（万元）'],
                    y: 5,
                    left:60,
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data:datayzxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'养植业户数（户）',
                        type: 'bar',
                        data: dataYzyh,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[2, 2, 0, 0]
                            }
                        },
                    },
                    {
                        name: '养植业收入（万元）',
                        type: 'bar',
                        data: dataYzysr,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[2, 2, 0, 0]
                            }
                        },
                    },
                ]
            };
            chart3.setOption(option3);
        },
        loadchart8Callback: function(result) {
            var dataxmzbxq = [];
            var dataXmzbh = [];
            var dataXmzbsr = [];
            $.each(result,function(key,values){
                console.log(values[0]);
                dataxmzbxq.push(values[0]);
                dataXmzbh.push(values[1]);
                dataXmzbsr.push(values[2]);
            });
            var chart6 = echarts.init(document.getElementById('scxmzb'));
            var option6 = {
                color: ['#4cbcfb', '#f25244'],

                legend: {
                    data:['项目直补户数','项目直补收入（万元）'],
                    y: 5,
                    left:60,
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip:{
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#fff'
                        }
                    }
                },

                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',

                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data:dataxmzbxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }

                    }
                ],
                yAxis: [
                    {
                        type:'value',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        min: 0,
                        max: 8000,
                        interval: 1000,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    },{
                        type:'value',

                        min: 0,
                        max: 700000000,
                        interval:100000000,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }

                    }
                ],

                series: [
                    {
                        name:'项目直补户数',
                        type: 'bar',
                        barGap: 0,
                        barWidth: '25',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#6492f3'
                                }, {
                                    offset: 1,
                                    color: '#10f28b'
                                }]),
                            }
                        },
                        data: dataXmzbh

                    },
                    {
                        name: '项目直补收入（万元）',
                        type: 'line',
                        data: dataXmzbsr
                    },
                ]
            };
            chart6.setOption(option6);
        },
        loadchart10Callback: function(result) {
            var datanvldlxq = [];
            var dataNvldl = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datanvldlxq.push(values[0]);
                dataNvldl.push(values[1]);
            });
            var chart8 = echarts.init(document.getElementById('nvldlqk'));
            var option8 = {
                color: ['#fb403b'],
                tooltip: {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}人',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',

                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data:datanvldlxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name:'人数',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'女性劳动力',
                        type: 'bar',
                        barGap: 0,
                        data: dataNvldl,
                        barWidth: '25',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#a4f381'
                                }, {
                                    offset: 1,
                                    color: '#72f1f2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            chart8.setOption(option8);
        },
        loadchart22Callback: function (result) {
            var dataysrllxmc = [];
            var dataYsrllxzb = [];
            $.each(result, function (key, values) {
                dataysrllxmc.push(values[0]);
                dataYsrllxzb.push(values[1]);
            });
            var chart8 = echarts.init(document.getElementById('ysrllxzb2016'));
            var a = 0, b = 1, c = 2, d = 3, e = 4;
            var option8 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: dataysrllxmc,
                    type: 'scroll',
                    orient: 'horizontal',
                    x: 'center',
                    textStyle: {
                        color: '#fff',
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '60%',
                        name: '2016年建档立卡户主要燃料类型占比分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYsrllxzb[a], name: dataysrllxmc[a]},
                            {value: dataYsrllxzb[b], name: dataysrllxmc[b]},
                            {value: dataYsrllxzb[c], name: dataysrllxmc[c]},
                            {value: dataYsrllxzb[d], name: dataysrllxmc[d]},
                            {value: dataYsrllxzb[e], name: dataysrllxmc[e]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#05D5FF', '#E7E542', '#FF6274', '#FF6274', '#66E385'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart8.setOption(option8);
        },
        loadchart23Callback: function (result) {
            var dataysrllxmc = [];
            var dataYsrllxzb = [];
            $.each(result, function (key, values) {
                dataysrllxmc.push(values[0]);
                dataYsrllxzb.push(values[1]);
            });
            var chart8 = echarts.init(document.getElementById('ysrllxzb2017'));
            var a = 0, b = 1, c = 2, d = 3, e = 4;
            var option8 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: dataysrllxmc,
                    type: 'scroll',
                    orient: 'horizontal',
                    x: 'center',
                    textStyle: {
                        color: '#fff',
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '60%',
                        name: '2017年建档立卡户主要燃料类型占比分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYsrllxzb[a], name: dataysrllxmc[a]},
                            {value: dataYsrllxzb[b], name: dataysrllxmc[b]},
                            {value: dataYsrllxzb[c], name: dataysrllxmc[c]},
                            {value: dataYsrllxzb[d], name: dataysrllxmc[d]},
                            {value: dataYsrllxzb[e], name: dataysrllxmc[e]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#FF6274', '#FE5F5F', '#BE62FF', '#E7E542', '#6DD18D'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart8.setOption(option8);
        },
        loadchart24Callback: function (result) {
            var dataysrllxmc = [];
            var dataYsrllxzb = [];
            $.each(result, function (key, values) {
                dataysrllxmc.push(values[0]);
                dataYsrllxzb.push(values[1]);
            });
            var chart8 = echarts.init(document.getElementById('ysrllxzb2018'));
            var a = 0, b = 1, c = 2, d = 3, e = 4;
            var option8 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: dataysrllxmc,
                    type: 'scroll',
                    orient: 'horizontal',
                    x: 'center',
                    textStyle: {
                        color: '#fff',
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '60%',
                        name: '2018年建档立卡户主要燃料类型占比分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYsrllxzb[a], name: dataysrllxmc[a]},
                            {value: dataYsrllxzb[b], name: dataysrllxmc[b]},
                            {value: dataYsrllxzb[c], name: dataysrllxmc[c]},
                            {value: dataYsrllxzb[d], name: dataysrllxmc[d]},
                            {value: dataYsrllxzb[e], name: dataysrllxmc[e]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#62FFCD', '#7E9EFF', '#BE62FF', '#FF6274', '#FFB156'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart8.setOption(option8);
        },
        loadchart25Callback: function (result) {
            var datagxzpsj = [];
            var dataCwxzpsj = [];
            var dataChxzpsj = [];
            var dataXyxzpsj = [];
            var dataYsxzpsj = [];
            $.each(result, function (key, values) {
                datagxzpsj.push(values[0])
                dataCwxzpsj.push(values[1]);
                dataChxzpsj.push(values[2]);
                dataXyxzpsj.push(values[3]);
                dataYsxzpsj.push(values[4]);
            });
            var chart3 = echarts.init(document.getElementById('gxybzpqk'));
            var option3 = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56'],
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data: datagxzpsj,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['长武县', '淳化县', '旬邑县', '永寿县'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        name:'户数',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '长武县',
                        smooth: true,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        barGap: 0,
                        data: dataCwxzpsj
                    },
                    {
                        name: '淳化县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataChxzpsj
                    },
                    {
                        name: '旬邑县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataXyxzpsj
                    },
                    {
                        name: '永寿县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataYsxzpsj
                    },

                ]
            };
            chart3.setOption(option3);
        },
        loadchart26Callback: function (result) {
            var datasj = [];
            var dataYbzpsj = [];
            $.each(result, function (key, values) {
                datasj.push(values[0]);
                dataYbzpsj.push(values[1]);
            });
            var chart1 = echarts.init(document.getElementById('ybzphs'));
            var option1 = {
                color: ['#4689ff'],
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: datasj,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name:'户数',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '因病致贫',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                label: {
                                    color: '#fff',
                                    show: true,
                                    type: 'solid',
                                },
                                lineStyle: {
                                    width: 3
                                },
                                areaStyle: {
                                    type: 'default',
                                    color: ['rgba(107,163,255,0.3)','rgba(221,119,238,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#6ba3ff'
                                }, {
                                    offset: 1,
                                    color: '#dd77ee'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: dataYbzpsj
                    },

                ]
            };
            chart1.setOption(option1);
        },
        loadchart27Callback: function (result) {
            var dataybzpzbsj = [];
            var dataYbzpzbsj = [];
            $.each(result, function (key, values) {
                dataybzpzbsj.push(values[0]);
                dataYbzpzbsj.push(values[1]);
            });
            var chart2 = echarts.init(document.getElementById('ybzpzb'));
            var option2 = {
                color: ['#ff9703'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: dataybzpzbsj,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}%'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        min: 0,
                        max: 40,
                        interval: 5,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'占比',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                label: {
                                    color: '#fff',
                                    show: true,
                                    type: 'solid',
                                },
                                lineStyle: {
                                    width: 3
                                },
                                areaStyle: {
                                    type: 'default',
                                    color: ['rgba(255,166,128,0.3)','rgba(90,238,255,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ffa680'
                                }, {
                                    offset: 1,
                                    color: '#5aeee1'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: dataYbzpzbsj
                    },
                ]
            };
            chart2.setOption(option2);
        },
        loadchart28Callback: function (result) {
            var datagxzpzb = [];
            var dataChxzpzb = [];
            var dataXyxzpzb = [];
            var dataYsxzpzb = [];
            var dataCwxzpzb = [];
            $.each(result, function (key, values) {
                datagxzpzb.push(values[0]);
                dataChxzpzb.push(values[1]);
                dataXyxzpzb.push(values[2]);
                dataYsxzpzb.push(values[3]);
                dataCwxzpzb.push(values[4]);
            });
            var chart4 = echarts.init(document.getElementById('gxybzpqzb'));
            var option4 = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data: datagxzpzb,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['淳化县', '旬邑县', '永寿县', '长武县'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}%'

                        },
                        min: 0,
                        max: 40,
                        interval: 5,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '淳化县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataChxzpzb
                    },
                    {
                        name: '旬邑县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataXyxzpzb
                    },
                    {
                        name: '永寿县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataYsxzpzb
                    },
                    {
                        name: '长武县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,

                        data: dataCwxzpzb
                    },
                ]
            };
            chart4.setOption(option4);
        },
        loadchart29Callback: function (result) {
            var datagxqzpsj = [];
            var dataLqxzpsj = [];
            var dataQxzpsj = [];
            var dataSyxzpsj = [];
            var dataBzxzpsj = [];
            var dataWgxzpsj = [];
            var dataXpxzpsj = [];
            var dataJyxzpsj = [];
            $.each(result, function (key, values) {
                datagxqzpsj.push(values[0]);
                dataLqxzpsj.push(values[1]);
                dataQxzpsj.push(values[2]);
                dataSyxzpsj.push(values[3]);
                dataBzxzpsj.push(values[4]);
                dataWgxzpsj.push(values[5]);
                dataXpxzpsj.push(values[6]);
                dataJyxzpsj.push(values[7]);
            });
            var chart5 = echarts.init(document.getElementById('qgxybzpqk'));
            var option5 = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56', '#16ff16', '#ab14ff', '#13ff8f'],
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: datagxqzpsj,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['礼泉县', '乾县', '三原县', '彬州市', '武功县', '兴平市', '泾阳县'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '礼泉县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataLqxzpsj
                    },
                    {
                        name: '乾县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataQxzpsj
                    },
                    {
                        name: '三原县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataSyxzpsj
                    },
                    {
                        name: '彬州市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataBzxzpsj
                    },
                    {
                        name: '武功县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataWgxzpsj
                    },
                    {
                        name: '兴平市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataXpxzpsj
                    },
                    {
                        name: '泾阳县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataJyxzpsj
                    },

                ]
            };
            chart5.setOption(option5);
        },
        loadchart30Callback: function (result) {
            var datagxqzpzb = [];
            var dataLqxzpzb = [];
            var dataQxzpzb = [];
            var dataSyxzpzb = [];
            var dataBzxzpzb = [];
            var dataWgxzpzb = [];
            var dataXpxzpzb = [];
            var dataJyxzpzb = [];
            $.each(result, function (key, values) {
                datagxqzpzb.push(values[0])
                dataLqxzpzb.push(values[1]);
                dataQxzpzb.push(values[2]);
                dataSyxzpzb.push(values[3]);
                dataBzxzpzb.push(values[4]);
                dataWgxzpzb.push(values[5]);
                dataXpxzpzb.push(values[6]);
                dataJyxzpzb.push(values[7]);
            });
            var chart6 = echarts.init(document.getElementById('qgxybzpzb'));
            var option6 = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56', '#16ff16', '#ab14ff', '#13ff8f'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data: datagxqzpzb,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['礼泉县', '乾县', '三原县', '彬州市', '武功县', '兴平市', '泾阳县'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLabel: {
                            formatter: '{value}%'

                        },


                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '礼泉县',
                        smooth: true,

                        type: 'line',
                        barGap: 0,
                        data: dataLqxzpzb
                    },
                    {
                        name: '乾县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataQxzpzb
                    },
                    {
                        name: '三原县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataSyxzpzb
                    },
                    {
                        name: '彬州市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataBzxzpzb
                    },
                    {
                        name: '武功县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataWgxzpzb
                    },
                    {
                        name: '兴平市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataXpxzpzb
                    },
                    {
                        name: '泾阳县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataJyxzpzb
                    },
                ]
            };
            chart6.setOption(option6);
        },
        loadchart31Callback: function (result) {
            var datayczjsj = [];
            var dataYczpsj = [];
            $.each(result, function (key, values) {
                datayczjsj.push(values[0])
                dataYczpsj.push(values[1]);
            });
            var chart7 = echarts.init(document.getElementById('yczphs'));
            var option7 = {
                color: ['#2f9dd7'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: datayczjsj,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name:'户数',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '因残致贫',
                        barWidth: 30,
                        type: 'bar',
                        barGap: 0,
                        data: dataYczpsj,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#f38bfe'
                                }, {
                                    offset: 1,
                                    color: '#7c7af2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        emphasis: {
                            color: '#008B45',
                            lineStyle: {        // 系列级个性化折线样式
                                width: 2,
                                type: 'dotted',
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#00FFFF'
                                }, {
                                    offset: 1,
                                    color: '#5F9EA0'
                                }])
                            }
                        }
                    },

                ]
            };
            chart7.setOption(option7);
        },
        loadchart32Callback: function (result) {
            var datagxyczpzb = [];
            var dataChxyczpzb = [];
            var dataXyxyczpzb = [];
            var dataYsxyczpzb = [];
            var dataCwxyczpzb = [];
            $.each(result, function (key, values) {
                datagxyczpzb.push(values[0]);
                dataChxyczpzb.push(values[1]);
                dataXyxyczpzb.push(values[2]);
                dataYsxyczpzb.push(values[3]);
                dataCwxyczpzb.push(values[4]);
            });
            var chart9 = echarts.init(document.getElementById('gxyczpqzb'));
            var option9 = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: datagxyczpzb,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['淳化县', '旬邑县', '永寿县', '长武县'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLabel: {
                            formatter: '{value}%'

                        },
                        min: 0,
                        max: 40,
                        interval: 5,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '淳化县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataChxyczpzb
                    },
                    {
                        name: '旬邑县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataXyxyczpzb
                    },
                    {
                        name: '永寿县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataYsxyczpzb
                    },
                    {
                        name: '长武县',
                        smooth: true,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        barGap: 0,
                        data: dataCwxyczpzb
                    },
                ]
            };
            chart9.setOption(option9);
        },
        // loadchart33Callback: function (result) {
        //     var datapaih1 = [];
        //     var datapaih2 = [];
        //     $.each(result, function (key, values) {
        //         datapaih1.push(values[0]);
        //         datapaih2.push(values[1]);
        //     });
        //     console.log(datapaih1,"datapaih1");
        //     var chart = echarts.init(document.getElementById('paih'));
        //     var option = {
        //         dataset: {
        //             source: [
        //                 ['score', 'product'],
        //                 [30, '三原县'],
        //                 [40, '泾阳县'],
        //                 [50, '旬邑县'],
        //                 [60, '礼泉县'],
        //                 [70, '永寿县'],
        //                 [80, '彬州市'],
        //                 [90, '长武县'],
        //                 [100, '乾县'],
        //                 [110, '淳化县'],
        //                 [120,'武功县'],
        //                 [130,'兴平市']
        //             ]
        //         },
        //         grid: {containLabel: true},
        //         xAxis: {
        //             name: 'amount',
        //             show: false,
        //         },
        //         tooltip : {
        //             trigger: 'axis',
        //             axisPointer : {
        //                 type : 'shadow'
        //             }
        //         },
        //         yAxis: {
        //             type: 'category',
        //             // show:false,
        //             position: 'left',
        //             boundaryGap: false,
        //             // barWidth：20,
        //             axisTick: {
        //                 show: false
        //             }, // y 轴线
        //             axisLine: {
        //                 show: false,
        //                 lineStyle: {
        //                     color: '#FFF',
        //                 }
        //             }, // 分割线设置
        //             splitLine: {
        //                 lineStyle: {
        //                     width: 2,
        //                     color: "red",
        //                 }
        //             },
        //             axisLabel: {},
        //         },
        //         visualMap: {
        //             orient: 'horizontal',
        //             left: 'center',
        //             min: 10,
        //             max: 100,
        //             text: ['高', '低'],
        //             color:'#fff',
        //             dimension: 0,
        //             inRange: {
        //                 color: ['#FFF666', '#0CAF42','#049F8F']
        //             }
        //         },
        //         series: [
        //             {
        //                 type: 'bar',
        //                 barWidth : 15,
        //                 encode: {// Map the "amount" column to X axis.
        //                     x: 'amount', // Map the "product" column to Y axis
        //                     y: 'product'
        //                 },
        //                 itemStyle: {
        //                     normal: {
        //                         barBorderRadius:[10, 10, 10, 10]
        //                     }
        //                 },
        //                 label: {
        //                     normal: {
        //                         show: true,
        //                         position: 'right',
        //                         color: '#fff'
        //                     }
        //                 },
        //             }
        //         ]
        //     };
        //     chart.setOption(option);
        // },
        loadchart34Callback: function (result) {
            var datazlfbxf1 = [];
            var datazlfbxf2 = [];
            var datazlfbxf3 = [];
            var datazlfbxf4 = [];
            var datazlfbxf5 = [];
            var datazlfbxf6 = [];
            var datazlfbxf7 = [];
            var datazlfbxf8 = [];
            $.each(result, function (key, values) {
                datazlfbxf1.push(values[0])
                datazlfbxf2.push(values[1]);
                datazlfbxf3.push(values[2]);
                datazlfbxf4.push(values[3]);
                datazlfbxf5.push(values[4]);
                datazlfbxf6.push(values[5]);
                datazlfbxf7.push(values[6]);
                datazlfbxf8.push(values[7]);
            });

            var zlfbxf = echarts.init(document.getElementById('zlfbxf'));
            var option = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56', '#16ff16', '#ab14ff', '#13ff8f'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a0}:{c0}万元',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data: datazlfbxf1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['医疗总费用', '自付费用', '城乡基本医保', '大病保险', '民政医疗救助', '其他救助'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        name:'万元',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '医疗总费用',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: datazlfbxf3
                    },
                    {
                        name: '自付费用',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: datazlfbxf4
                    },
                    {
                        name: '城乡基本医保',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: datazlfbxf5
                    },
                    {
                        name: '大病保险',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: datazlfbxf6
                    },
                    {
                        name: '民政医疗救助',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: datazlfbxf7
                    },
                    {
                        name: '其他救助',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: datazlfbxf8
                    },
                ]
            };
            zlfbxf.setOption(option);
        },
        loadchart35Callback: function (result) {
            var datazlfyzj1 = [];
            var datazlfyzj2 = [];
            $.each(result, function (key, values) {
                datazlfyzj1.push(values[0]);
                datazlfyzj2.push(values[1]);
            });
            var zlfyzj = echarts.init(document.getElementById('zlfyzj'));
            var option = {
                color: ['#2f9dd7'],
                tooltip: {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}万元',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: datazlfyzj1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name:'万元',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '报销总计',
                        barWidth: 30,
                        type: 'bar',
                        barGap: 0,
                        data: datazlfyzj2,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#7efefb'
                                }, {
                                    offset: 1,
                                    color: '#7c7af2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            zlfyzj.setOption(option);
        },
        loadchart36Callback: function (result) {
            var datafpcyzj1 = [];
            var datafpcyzj2 = [];
            $.each(result, function (key, values) {
                datafpcyzj1.push(values[0]);
                datafpcyzj2.push(values[1]);
            });
            var zlfyzj = echarts.init(document.getElementById('fpcyzj'));
            var option = {
                color: ['#2f9dd7'],
                tooltip: {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}万元',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: datafpcyzj1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name:'万元',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '财政扶贫资金',
                        barWidth: 30,
                        type: 'bar',
                        barGap: 0,
                        data: datafpcyzj2,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#fefbb3'
                                }, {
                                    offset: 1,
                                    color: '#a6f2f1'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            zlfyzj.setOption(option);
        },

    }
};


$(function () {
    service.init();
    //	页面跳转
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==40){ //下
            window.location.href="./pageFive.html";
        }
        if(e && e.keyCode==38){ // 上
            window.location.href="./pageThree.html";
        }
    };
});