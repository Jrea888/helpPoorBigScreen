//ajax模块化
var service = {
    init: function () {
        // this.loadchart1();
        // this.loadchart2();
        // this.loadchart3();
        this.loadchartNum4();
        this.loadchartHold4();
        this.loadchartDoor5();
        this.loadchartYear5();
        this.loadchart6();
        this.loadchart7();
        this.loadchart8();
        this.loadchart9();
        this.loadchart10();
        this.loadchart11();
        this.loadchart12();
        this.loadchart13();
        this.loadchart14();
        this.loadchart15();
        this.loadchart16();
        this.loadchart17();
        this.loadchart20();
        this.loadchart21();
        this.loadchart22();
        this.loadchart23();
        this.loadchart25();
    },
    // loadchart1: function () {
    //     var url = "pageOne1.json";
    //     this.ajax(url, this.callback.loadchart1Callback);
    // },
    // loadchart2: function () {
    //     var url = "pageOne2.json";
    //     this.ajax(url, this.callback.loadchart2Callback);
    // },
    // loadchart3: function () {
    //     var url = "pageOne3.json";
    //     this.ajax(url, this.callback.loadchart3Callback);
    // },
    loadchartNum4: function () {
        var url = "pageOneNum4.json";
        this.ajax(url, this.callback.loadchart4CallbackNum);
    },
    loadchartHold4: function () {
        var url = "pageOneHold4.json";
        this.ajax(url, this.callback.loadchart4CallbackHold);
    },
    loadchartDoor5: function () {
        var url = "pageOneDoor5.json";
        this.ajax(url, this.callback.loadchart5CallbackDoor);
    },
    loadchartYear5: function () {
        var url = "pageOneYear5.json";
        this.ajax(url, this.callback.loadchart5CallbackYear);
    },
    loadchart6: function () {
        var url = "pageOne6.json";
        this.ajax(url, this.callback.loadchart6Callback);
    },
    loadchart7: function () {
        var url = "pageOne7.json";
        this.ajax(url, this.callback.loadchart7Callback);
    },
    loadchart8: function () {
        var url = "pageOne8.json";
        this.ajax(url, this.callback.loadchart8Callback);
    },
    loadchart9: function () {
        var url = "pageOne9.json";
        this.ajax(url, this.callback.loadchart9Callback);
    },
    loadchart10: function () {
        var url = "pageOne10.json";
        this.ajax(url, this.callback.loadchart10Callback);
    },
    loadchart11: function () {
        var url = "pageOne11.json";
        this.ajax(url, this.callback.loadchart11Callback);
    },
    loadchart12: function () {
        var url = "pageOne12.json";
        this.ajax(url, this.callback.loadchart12Callback);
    },
    loadchart13: function () {
        var url = "pageOne13.json";
        this.ajax(url, this.callback.loadchart13Callback);
    },
    loadchart14: function () {
        var url = "pageOne14.json";
        this.ajax(url, this.callback.loadchart14Callback);
    },
    loadchart15: function () {
        var url = "pageOne15.json";
        this.ajax(url, this.callback.loadchart15Callback);
    },
    loadchart16: function () {
        var url = "pageOne16.json";
        this.ajax(url, this.callback.loadchart16Callback);
    },
    loadchart17: function () {
        var url = "pageOne17.json";
        this.ajax(url, this.callback.loadchart17Callback);
    },
    loadchart20: function () {
        var url = "pageOne20.json";
        this.ajax(url, this.callback.loadchart20Callback);
    },
    loadchart21: function () {
        var url = "pageOne21.json";
        this.ajax(url, this.callback.loadchart21Callback);
    },
    loadchart22: function () {
        var url = "pageOne18.json";
        this.ajax(url, this.callback.loadchart22Callback);
    },
    loadchart23: function () {
        var url = "pageTwo23.json";
        this.ajax(url, this.callback.loadchart23Callback);
    },
    loadchart25: function () {
        var url = "pageTwo25.json";
        this.ajax(url, this.callback.loadchart25Callback);
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
        // loadchart1Callback: function (result) {
        //     var firstData = [];
        //     var firstSeries1 = [];
        //     $.each(result, function (key, values) {
        //         firstData.push(values[0]);
        //         firstSeries1.push(values[1]);
        //     });
        //     var chargeFirst = echarts.init(document.getElementById('chartOneFirst'));
        //     var option = {
        //         tooltip: {
        //             trigger: 'axis',
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: firstData,
        //                 axisPointer: {
        //                     type: 'shadow'
        //                 },
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 axisLabel: {
        //                     interval: 0,
        //                 }
        //             }
        //         ],
        //         grid: {
        //             left: '3%',
        //             right: '3%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 min: 0,
        //                 axisLabel: {
        //                     formatter: '{value}'
        //                 },
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 splitLine:{
        //                     show:true,
        //                     lineStyle:{
        //                         type:'dashed',
        //                         color:'#3E3A70'
        //                     }
        //                 },
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '人口',
        //                 type: 'bar',
        //                 data: firstSeries1,
        //                 barWidth: '25',
        //                 itemStyle: {
        //                     normal: {
        //                         color: '#00fe18'
        //                     }
        //                 },
        //                 markPoint: {
        //                     data: [
        //                         {type: 'max', name: '最大值'},
        //                         {type: 'min', name: '最小值'}
        //                     ]
        //                 },
        //             }
        //         ]
        //     };
        //     chargeFirst.setOption(option);
        // },
        // loadchart2Callback: function (result) {
        //     var secondData = [];
        //     var secondSeries1 = [];
        //     var secondSeries2 = [];
        //     var secondSeries3 = [];
        //     $.each(result, function (key, values) {
        //         secondData.push(values[0]);
        //         secondSeries1.push(values[1]);
        //         secondSeries2.push(values[2]);
        //         secondSeries3.push(values[3]);
        //     });
        //     var chartOneSecond = echarts.init(document.getElementById('chartOneSecond'));
        //     var option = {
        //         tooltip: {
        //             trigger: 'axis',
        //         },
        //         legend: {
        //             data: ['2018年底贫困发生率', '2017年底贫困发生率', '降幅'],
        //             y: 5,
        //             left:60,
        //             textStyle: {
        //                 color: '#fff',
        //             },
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '3%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: secondData,
        //                 axisPointer: {
        //                     type: 'shadow'
        //                 },
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 axisLabel: {
        //                     interval: 0,
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 min: 0,
        //                 name: '贫困发生率',
        //                 axisLabel: {
        //                     formatter: '{value}',
        //                 },
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 splitLine:{
        //                     show:true,
        //                     lineStyle:{
        //                         type:'dashed',
        //                         color:'#3E3A70'
        //                     }
        //                 },
        //             },
        //             {
        //                 type: 'value',
        //                 min: 0,
        //                 name: '降幅',
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 axisLabel: {
        //                     formatter: '{value}'
        //                 },
        //                 splitLine:{
        //                     show:true,
        //                     lineStyle:{
        //                         type:'dashed',
        //                         color:'#3E3A70'
        //                     }
        //                 },
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '2018年底贫困发生率',
        //                 type: 'bar',
        //                 data: secondSeries1,
        //                 itemStyle: {
        //                     normal: {
        //                         color: '#00e8ff'
        //                     }
        //                 },
        //                 markPoint: {
        //                     data: [
        //                         {type: 'max', name: '最大值'},
        //                         {type: 'min', name: '最小值'}
        //                     ]
        //                 },
        //             },
        //             {
        //                 name: '2017年底贫困发生率',
        //                 type: 'bar',
        //                 data: secondSeries2,
        //                 itemStyle: {
        //                     normal: {
        //                         color: '#ff00fa'
        //                     }
        //                 },
        //                 markPoint: {
        //                     data: [
        //                         {type: 'max', name: '最大值'},
        //                         {type: 'min', name: '最小值'}
        //                     ]
        //                 },
        //             },
        //             {
        //                 name: '降幅',
        //                 type: 'line',
        //                 yAxisIndex: 1,
        //                 smooth: true,
        //                 data: secondSeries3,
        //                 itemStyle: {
        //                     normal: {
        //                         color: '#ff0003'
        //                     }
        //                 }
        //             }
        //         ]
        //     };
        //     chartOneSecond.setOption(option);
        // },
        // loadchart3Callback: function (result) {
        //     var thirdData = [];
        //     var thirdSeries1 = [];
        //     $.each(result, function (key, values) {
        //         thirdData.push(values[0]);
        //         thirdSeries1.push(values[1]);
        //     });
        //     var chartOneThird = echarts.init(document.getElementById('chartOneThird'));
        //     var option = {
        //         tooltip: {
        //             trigger: 'axis',
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '3%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: thirdData,
        //                 axisPointer: {
        //                     type: 'shadow'
        //                 },
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 axisLabel: {
        //                     interval: 0,
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 min: 0,
        //                 axisLabel: {
        //                     formatter: '{value}'
        //                 },
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 splitLine:{
        //                     show:true,
        //                     lineStyle:{
        //                         type:'dashed',
        //                         color:'#3E3A70'
        //                     }
        //                 },
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '2018年底',
        //                 type: 'bar',
        //                 data: thirdSeries1,
        //                 barWidth: '25',
        //                 itemStyle: {
        //                     normal: {
        //                         color: '#ff0004'
        //                     }
        //                 },
        //                 markPoint: {
        //                     data: [
        //                         {type: 'max', name: '最大值'},
        //                         {type: 'min', name: '最小值'}
        //                     ]
        //                 }
        //             }
        //         ]
        //     };
        //     chartOneThird.setOption(option);
        // },
        loadchart4CallbackNum: function (result) {
            var fourthDataNum = [];
            var fourthSeriesNum1 = [];
            $.each(result, function (key, values) {
                fourthDataNum.push(values[0]);
                fourthSeriesNum1.push(values[1]);
            });
            var chartOneFourthNum = echarts.init(document.getElementById('chartOneFourthNum'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: fourthDataNum,
                    // type: 'scroll',
                    orient: 'horizontal',
                    left: 20,
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    top: 30,
                    containLabel: true
                },
                series: [
                    {
                        type: 'pie',
                        radius: '65%',
                        name: '贫困人数占比',
                        center: ['50%', '45%'],
                        selectedMode: 'single',
                        data: [
                            {value: fourthSeriesNum1[a], name: fourthDataNum[a]},
                            {value: fourthSeriesNum1[b], name: fourthDataNum[b]},
                            {value: fourthSeriesNum1[c], name: fourthDataNum[c]},
                            {value: fourthSeriesNum1[d], name: fourthDataNum[d]},
                            {value: fourthSeriesNum1[e], name: fourthDataNum[e]},
                            {value: fourthSeriesNum1[f], name: fourthDataNum[f]},
                            {value: fourthSeriesNum1[g], name: fourthDataNum[g]},
                            {value: fourthSeriesNum1[h], name: fourthDataNum[h]},
                            {value: fourthSeriesNum1[i], name: fourthDataNum[i]},
                            {value: fourthSeriesNum1[j], name: fourthDataNum[j]},
                            {value: fourthSeriesNum1[k], name: fourthDataNum[k]}
                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#63a5f1', '#bc96ea', '#def34b', '#e8605d', '#e7c9bd', '#4feaf2', '#00f600', '#35f792', '#51f1f1', '#fe8463', '#d6f685'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chartOneFourthNum.setOption(option);
        },
        loadchart4CallbackHold: function (result) {
            var fourthDataHold = [];
            var fourthSeriesHold1 = [];
            $.each(result, function (key, values) {
                fourthDataHold.push(values[0]);
                fourthSeriesHold1.push(values[1]);
            });
            var chartOneFourthHold = echarts.init(document.getElementById('chartOneFourthHold'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: fourthDataHold,
                    orient: 'horizontal',
                    right: 0,
                    textStyle: {
                        color: '#fff',
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '65%',
                        name: '贫困户占比',
                        center: ['50%', '45%'],
                        selectedMode: 'single',
                        data: [
                            {value: fourthSeriesHold1[a], name: fourthDataHold[a]},
                            {value: fourthSeriesHold1[b], name: fourthDataHold[b]},
                            {value: fourthSeriesHold1[c], name: fourthDataHold[c]},
                            {value: fourthSeriesHold1[d], name: fourthDataHold[d]},
                            {value: fourthSeriesHold1[e], name: fourthDataHold[e]},
                            {value: fourthSeriesHold1[f], name: fourthDataHold[f]},
                            {value: fourthSeriesHold1[g], name: fourthDataHold[g]},
                            {value: fourthSeriesHold1[h], name: fourthDataHold[h]},
                            {value: fourthSeriesHold1[i], name: fourthDataHold[i]},
                            {value: fourthSeriesHold1[j], name: fourthDataHold[j]},
                            {value: fourthSeriesHold1[k], name: fourthDataHold[k]}
                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#fee70d', '#c5d3f1', '#f48d93', '#ADFF2F', '#00CED1', '#FF00FF', '#4F81BD', '#BDA29A', '#ffb980', '#38f6f8', '#ffb980'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chartOneFourthHold.setOption(option);
        },
        loadchart5CallbackDoor: function (result) {
            var fifthDataDoor = [];
            var fifthSeriesDoor1 = [];
            $.each(result, function (key, values) {
                fifthDataDoor.push(values[0]);
                fifthSeriesDoor1.push(values[1]);
            });
            console.log(fifthSeriesDoor1,"fifthSeriesDoor1-----")
            var chartOneFifthDoor = echarts.init(document.getElementById('chartOneFifthDoor'));
            var a = 0, b = 1, c = 2;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    bottom: '10',
                    data: fifthDataDoor,
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
                        radius: '55%',
                        name: '贫困户属性占比',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: fifthSeriesDoor1[a], name: fifthDataDoor[a]},
                            {value: fifthSeriesDoor1[b], name: fifthDataDoor[b]},
                            {value: fifthSeriesDoor1[c], name: fifthDataDoor[c]},
                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#65acf9', '#fa6764', '#c7ee6d'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chartOneFifthDoor.setOption(option);
        },
        loadchart5CallbackYear: function (result) {
            var fifthDataYear = [];
            var fifthSeries2014 = [];
            var fifthSeries2015 = [];
            var fifthSeries2016 = [];
            var fifthSeries2017 = [];
            var fifthSeries2018 = [];
            $.each(result, function (key, values) {
                fifthDataYear.push(values[0]);
                fifthSeries2014.push(values[1]);
                fifthSeries2015.push(values[2]);
                fifthSeries2016.push(values[3]);
                fifthSeries2017.push(values[4]);
                fifthSeries2018.push(values[5]);
            });
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10;
            var chartOneFifthYear = echarts.init(document.getElementById('chartOneFifthYear'));
            var option = {
                tooltip: {},
                legend: {
                    bottom: 10,
                    data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                radar: {
                    indicator: [
                        {name: fifthDataYear[a], max: 7700},
                        {name: fifthDataYear[b], max: 8000},
                        {name: fifthDataYear[c], max: 5800},
                        {name: fifthDataYear[d], max: 5500},
                        {name: fifthDataYear[e], max: 6200},
                        {name: fifthDataYear[f], max: 7300},
                        {name: fifthDataYear[g], max: 9400},
                        {name: fifthDataYear[h], max: 6450},
                        {name: fifthDataYear[i], max: 7400},
                        {name: fifthDataYear[j], max: 5700},
                        {name: fifthDataYear[k], max: 6900},
                    ],
                    // shape: 'circle',
                    splitNumber: 10,
                    name: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [
                                '#6e7270', '#041',
                                '#82827f', '#041',
                                '#235cde', '#041',
                            ].reverse()
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#617882'
                        }
                    }
                },
                series: [
                    {
                        type: 'radar',
                        symbolSize: 8,
                        areaStyle: {
                            normal: {
                                opacity: 0
                            }
                        },
                        data: [
                            {
                                value: fifthSeries2014,
                                name: '2014年',
                                itemStyle: {
                                    normal: {
                                        width: 6,
                                        color: '#34eff1',
                                    }

                                },
                            },
                            {
                                value: fifthSeries2015,
                                name: '2015年',
                                itemStyle: {
                                    normal: {
                                        width: 6,
                                        color: '#f88c92',
                                    }
                                },
                            },
                            {
                                value: fifthSeries2016,
                                name: '2016年',
                                itemStyle: {
                                    normal: {
                                        width: 6,
                                        color: '#38f2f4',
                                    }
                                },
                            },
                            {
                                value: fifthSeries2017,
                                name: '2017年',
                                itemStyle: {
                                    normal: {
                                        width: 6,
                                        color: '#f8e20d',
                                    }
                                },
                            },
                            {
                                value: fifthSeries2018,
                                name: '2018年',
                                itemStyle: {
                                    normal: {
                                        width: 6,
                                        color: '#FFB980',
                                    }
                                },
                            }
                        ]
                    }
                ]
            };
            chartOneFifthYear.setOption(option);
        },
        loadchart6Callback: function (result) {
            var sixthSeries1 = [];
            var sixthSeries2 = [];
            var sixthSeries3 = [];
            var sixthSeries4 = [];
            var sixthSeries5 = [];
            var sixthSeries6 = [];
            var sixthSeries7 = [];
            var sixthSeries8 = [];
            var sixthSeries9 = [];
            var sixthSeries10 = [];
            var sixthSeries11 = [];
            var sixthSeries12 = [];
            var sixthSeries13 = [];
            var sixthSeries14 = [];
            $.each(result, function (key, values) {
                sixthSeries1.push(values[0]);
                sixthSeries2.push(values[1]);
                sixthSeries3.push(values[2]);
                sixthSeries4.push(values[3]);
                sixthSeries5.push(values[4]);
                sixthSeries6.push(values[5]);
                sixthSeries7.push(values[6]);
                sixthSeries8.push(values[7]);
                sixthSeries9.push(values[8]);
                sixthSeries10.push(values[9]);
                sixthSeries11.push(values[10]);
                sixthSeries12.push(values[11]);
                sixthSeries13.push(values[12]);
                sixthSeries14.push(values[13]);
            });
            var chartOneSixth = echarts.init(document.getElementById('chartOneSixth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 40,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries1,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries2,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries3,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries4,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries5,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries6,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries7,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries8,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries9,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries10,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries11,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries12,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries13,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: sixthSeries14,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneSixth.setOption(option);
        },
        loadchart7Callback: function (result) {
            var seventhSeries1 = [];
            var seventhSeries2 = [];
            var seventhSeries3 = [];
            var seventhSeries4 = [];
            var seventhSeries5 = [];
            var seventhSeries6 = [];
            var seventhSeries7 = [];
            var seventhSeries8 = [];
            var seventhSeries9 = [];
            var seventhSeries10 = [];
            var seventhSeries11 = [];
            var seventhSeries12 = [];
            var seventhSeries13 = [];
            var seventhSeries14 = [];
            $.each(result, function (key, values) {
                seventhSeries1.push(values[0]);
                seventhSeries2.push(values[1]);
                seventhSeries3.push(values[2]);
                seventhSeries4.push(values[3]);
                seventhSeries5.push(values[4]);
                seventhSeries6.push(values[5]);
                seventhSeries7.push(values[6]);
                seventhSeries8.push(values[7]);
                seventhSeries9.push(values[8]);
                seventhSeries10.push(values[9]);
                seventhSeries11.push(values[10]);
                seventhSeries12.push(values[11]);
                seventhSeries13.push(values[12]);
                seventhSeries14.push(values[13]);
            });
            var chargeSeventh = echarts.init(document.getElementById('chartOneSeventh'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 40,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries1,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries2,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries3,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries4,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries5,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries6,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries7,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries8,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries9,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries10,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries11,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries12,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries13,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: seventhSeries14,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chargeSeventh.setOption(option);
        },
        loadchart8Callback: function (result) {
            var eighthSeries1 = [];
            var eighthSeries2 = [];
            var eighthSeries3 = [];
            var eighthSeries4 = [];
            var eighthSeries5 = [];
            var eighthSeries6 = [];
            var eighthSeries7 = [];
            var eighthSeries8 = [];
            var eighthSeries9 = [];
            var eighthSeries10 = [];
            var eighthSeries11 = [];
            var eighthSeries12 = [];
            var eighthSeries13 = [];
            var eighthSeries14 = [];
            $.each(result, function (key, values) {
                eighthSeries1.push(values[0]);
                eighthSeries2.push(values[1]);
                eighthSeries3.push(values[2]);
                eighthSeries4.push(values[3]);
                eighthSeries5.push(values[4]);
                eighthSeries6.push(values[5]);
                eighthSeries7.push(values[6]);
                eighthSeries8.push(values[7]);
                eighthSeries9.push(values[8]);
                eighthSeries10.push(values[9]);
                eighthSeries11.push(values[10]);
                eighthSeries12.push(values[11]);
                eighthSeries13.push(values[12]);
                eighthSeries14.push(values[13]);
            });
            var chartOneEighth = echarts.init(document.getElementById('chartOneEighth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 40,
                    interval: 10,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries1,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries2,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries3,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries4,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries5,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries6,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries7,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries8,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries9,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries10,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries11,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries12,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries13,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: eighthSeries14,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneEighth.setOption(option);
        },
        loadchart9Callback: function (result) {
            var ninthSeries1 = [];
            var ninthSeries2 = [];
            var ninthSeries3 = [];
            var ninthSeries4 = [];
            var ninthSeries5 = [];
            var ninthSeries6 = [];
            var ninthSeries7 = [];
            var ninthSeries8 = [];
            var ninthSeries9 = [];
            var ninthSeries10 = [];
            var ninthSeries11 = [];
            var ninthSeries12 = [];
            var ninthSeries13 = [];
            var ninthSeries14 = [];
            $.each(result, function (key, values) {
                ninthSeries1.push(values[0]);
                ninthSeries2.push(values[1]);
                ninthSeries3.push(values[2]);
                ninthSeries4.push(values[3]);
                ninthSeries5.push(values[4]);
                ninthSeries6.push(values[5]);
                ninthSeries7.push(values[6]);
                ninthSeries8.push(values[7]);
                ninthSeries9.push(values[8]);
                ninthSeries10.push(values[9]);
                ninthSeries11.push(values[10]);
                ninthSeries12.push(values[11]);
                ninthSeries13.push(values[12]);
                ninthSeries14.push(values[13]);
            });
            var chartOneninth = echarts.init(document.getElementById('chartOneNinth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 40,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries1,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries2,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries3,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries4,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries5,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries6,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries7,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries8,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries9,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries10,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries11,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries12,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries13,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: ninthSeries14,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneninth.setOption(option);
        },
        loadchart10Callback: function (result) {
            var tenthSeries1 = [];
            var tenthSeries2 = [];
            var tenthSeries3 = [];
            var tenthSeries4 = [];
            var tenthSeries5 = [];
            var tenthSeries6 = [];
            var tenthSeries7 = [];
            var tenthSeries8 = [];
            var tenthSeries9 = [];
            var tenthSeries10 = [];
            var tenthSeries11 = [];
            var tenthSeries12 = [];
            var tenthSeries13 = [];
            var tenthSeries14 = [];
            $.each(result, function (key, values) {
                tenthSeries1.push(values[0]);
                tenthSeries2.push(values[1]);
                tenthSeries3.push(values[2]);
                tenthSeries4.push(values[3]);
                tenthSeries5.push(values[4]);
                tenthSeries6.push(values[5]);
                tenthSeries7.push(values[6]);
                tenthSeries8.push(values[7]);
                tenthSeries9.push(values[8]);
                tenthSeries10.push(values[9]);
                tenthSeries11.push(values[10]);
                tenthSeries12.push(values[11]);
                tenthSeries13.push(values[12]);
                tenthSeries14.push(values[13]);
            });
            var chartOneTenth = echarts.init(document.getElementById('chartOneTenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 40,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries1,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries2,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries3,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries4,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries5,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries6,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries7,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries8,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries9,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries10,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries11,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries12,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries13,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: tenthSeries14,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneTenth.setOption(option);
        },
        loadchart11Callback: function (result) {
            var eleventhSeries1 = [];
            var eleventhSeries2 = [];
            var eleventhSeries3 = [];
            var eleventhSeries4 = [];
            var eleventhSeries5 = [];
            var eleventhSeries6 = [];
            var eleventhSeries7 = [];
            var eleventhSeries8 = [];
            var eleventhSeries9 = [];
            var eleventhSeries10 = [];
            var eleventhSeries11 = [];
            var eleventhSeries12 = [];
            var eleventhSeries13 = [];
            var eleventhSeries14 = [];
            $.each(result, function (key, values) {
                eleventhSeries1.push(values[0]);
                eleventhSeries2.push(values[1]);
                eleventhSeries3.push(values[2]);
                eleventhSeries4.push(values[3]);
                eleventhSeries5.push(values[4]);
                eleventhSeries6.push(values[5]);
                eleventhSeries7.push(values[6]);
                eleventhSeries8.push(values[7]);
                eleventhSeries9.push(values[8]);
                eleventhSeries10.push(values[9]);
                eleventhSeries11.push(values[10]);
                eleventhSeries12.push(values[11]);
                eleventhSeries13.push(values[12]);
                eleventhSeries14.push(values[13]);
            });
            var chartOneEleventh = echarts.init(document.getElementById('chartOneEleventh'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 40,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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

                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries1,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries2,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries3,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries4,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries5,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries6,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries7,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries8,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries9,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries10,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries11,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries12,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries13,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: eleventhSeries14,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneEleventh.setOption(option);
        },
        loadchart12Callback: function (result) {
            var twelfthSeries1 = [];
            var twelfthSeries2 = [];
            var twelfthSeries3 = [];
            var twelfthSeries4 = [];
            var twelfthSeries5 = [];
            var twelfthSeries6 = [];
            var twelfthSeries7 = [];
            var twelfthSeries8 = [];
            var twelfthSeries9 = [];
            var twelfthSeries10 = [];
            var twelfthSeries11 = [];
            var twelfthSeries12 = [];
            var twelfthSeries13 = [];
            var twelfthSeries14 = [];
            $.each(result, function (key, values) {
                twelfthSeries1.push(values[0]);
                twelfthSeries2.push(values[1]);
                twelfthSeries3.push(values[2]);
                twelfthSeries4.push(values[3]);
                twelfthSeries5.push(values[4]);
                twelfthSeries6.push(values[5]);
                twelfthSeries7.push(values[6]);
                twelfthSeries8.push(values[7]);
                twelfthSeries9.push(values[8]);
                twelfthSeries10.push(values[9]);
                twelfthSeries11.push(values[10]);
                twelfthSeries12.push(values[11]);
                twelfthSeries13.push(values[12]);
                twelfthSeries14.push(values[13]);
            });
            var chartOneTwelfth = echarts.init(document.getElementById('chartOneTwelfth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 60,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries1,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries2,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries3,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries4,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries5,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries6,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries7,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries8,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries9,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries10,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries11,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries12,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries13,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: twelfthSeries14,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneTwelfth.setOption(option);
        },
        loadchart13Callback: function (result) {
            var thirteenthSeries1 = [];
            var thirteenthSeries2 = [];
            var thirteenthSeries3 = [];
            var thirteenthSeries4 = [];
            var thirteenthSeries5 = [];
            var thirteenthSeries6 = [];
            var thirteenthSeries7 = [];
            var thirteenthSeries8 = [];
            var thirteenthSeries9 = [];
            var thirteenthSeries10 = [];
            var thirteenthSeries11 = [];
            var thirteenthSeries12 = [];
            var thirteenthSeries13 = [];
            var thirteenthSeries14 = [];
            $.each(result, function (key, values) {
                thirteenthSeries1.push(values[0]);
                thirteenthSeries2.push(values[1]);
                thirteenthSeries3.push(values[2]);
                thirteenthSeries4.push(values[3]);
                thirteenthSeries5.push(values[4]);
                thirteenthSeries6.push(values[5]);
                thirteenthSeries7.push(values[6]);
                thirteenthSeries8.push(values[7]);
                thirteenthSeries9.push(values[8]);
                thirteenthSeries10.push(values[9]);
                thirteenthSeries11.push(values[10]);
                thirteenthSeries12.push(values[11]);
                thirteenthSeries13.push(values[12]);
                thirteenthSeries14.push(values[13]);
            });
            var chartOneThirteenth = echarts.init(document.getElementById('chartOneThirteenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 40,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries1,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries2,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries3,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries4,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries5,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries6,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries7,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries8,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries9,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries10,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries11,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries12,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries13,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: thirteenthSeries14,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneThirteenth.setOption(option);
        },
        loadchart14Callback: function (result) {
            var fourteenthSeries1 = [];
            var fourteenthSeries2 = [];
            var fourteenthSeries3 = [];
            var fourteenthSeries4 = [];
            var fourteenthSeries5 = [];
            var fourteenthSeries6 = [];
            var fourteenthSeries7 = [];
            var fourteenthSeries8 = [];
            var fourteenthSeries9 = [];
            var fourteenthSeries10 = [];
            var fourteenthSeries11 = [];
            var fourteenthSeries12 = [];
            var fourteenthSeries13 = [];
            var fourteenthSeries14 = [];
            $.each(result, function (key, values) {
                fourteenthSeries1.push(values[0]);
                fourteenthSeries2.push(values[1]);
                fourteenthSeries3.push(values[2]);
                fourteenthSeries4.push(values[3]);
                fourteenthSeries5.push(values[4]);
                fourteenthSeries6.push(values[5]);
                fourteenthSeries7.push(values[6]);
                fourteenthSeries8.push(values[7]);
                fourteenthSeries9.push(values[8]);
                fourteenthSeries10.push(values[9]);
                fourteenthSeries11.push(values[10]);
                fourteenthSeries12.push(values[11]);
                fourteenthSeries13.push(values[12]);
                fourteenthSeries14.push(values[13]);
            });
            console.log(fourteenthSeries1, "fourteenthSeries1");
            var chartOneFourteenth = echarts.init(document.getElementById('chartOneFourteenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 50,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries1,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries2,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries3,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries4,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries5,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries6,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries7,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries8,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries9,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries10,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries11,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries12,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries13,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: fourteenthSeries14,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneFourteenth.setOption(option);
        },
        loadchart15Callback: function (result) {
            var fifteenthSeries1 = [];
            var fifteenthSeries2 = [];
            var fifteenthSeries3 = [];
            var fifteenthSeries4 = [];
            var fifteenthSeries5 = [];
            var fifteenthSeries6 = [];
            var fifteenthSeries7 = [];
            var fifteenthSeries8 = [];
            var fifteenthSeries9 = [];
            var fifteenthSeries10 = [];
            var fifteenthSeries11 = [];
            var fifteenthSeries12 = [];
            var fifteenthSeries13 = [];
            var fifteenthSeries14 = [];
            $.each(result, function (key, values) {
                fifteenthSeries1.push(values[0]);
                fifteenthSeries2.push(values[1]);
                fifteenthSeries3.push(values[2]);
                fifteenthSeries4.push(values[3]);
                fifteenthSeries5.push(values[4]);
                fifteenthSeries6.push(values[5]);
                fifteenthSeries7.push(values[6]);
                fifteenthSeries8.push(values[7]);
                fifteenthSeries9.push(values[8]);
                fifteenthSeries10.push(values[9]);
                fifteenthSeries11.push(values[10]);
                fifteenthSeries12.push(values[11]);
                fifteenthSeries13.push(values[12]);
                fifteenthSeries14.push(values[13]);
            });
            var chartOneFifteenth = echarts.init(document.getElementById('chartOneFifteenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 45,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries1,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries2,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries3,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries4,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries5,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries6,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries7,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries8,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries9,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries10,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries11,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries12,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries13,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: fifteenthSeries14,
                        symbol: 'circle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneFifteenth.setOption(option);
        },
        loadchart16Callback: function (result) {
            var sixteenthSeries1 = [];
            var sixteenthSeries2 = [];
            var sixteenthSeries3 = [];
            var sixteenthSeries4 = [];
            var sixteenthSeries5 = [];
            var sixteenthSeries6 = [];
            var sixteenthSeries7 = [];
            var sixteenthSeries8 = [];
            var sixteenthSeries9 = [];
            var sixteenthSeries10 = [];
            var sixteenthSeries11 = [];
            var sixteenthSeries12 = [];
            var sixteenthSeries13 = [];
            var sixteenthSeries14 = [];
            $.each(result, function (key, values) {
                sixteenthSeries1.push(values[0]);
                sixteenthSeries2.push(values[1]);
                sixteenthSeries3.push(values[2]);
                sixteenthSeries4.push(values[3]);
                sixteenthSeries5.push(values[4]);
                sixteenthSeries6.push(values[5]);
                sixteenthSeries7.push(values[6]);
                sixteenthSeries8.push(values[7]);
                sixteenthSeries9.push(values[8]);
                sixteenthSeries10.push(values[9]);
                sixteenthSeries11.push(values[10]);
                sixteenthSeries12.push(values[11]);
                sixteenthSeries13.push(values[12]);
                sixteenthSeries14.push(values[13]);
            });
            var chartOneSixteenth = echarts.init(document.getElementById('chartOneSixteenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 50,
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
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
                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries1,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries2,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries3,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries4,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries5,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries6,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries7,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries8,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries9,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries10,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries11,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries12,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries13,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: sixteenthSeries14,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneSixteenth.setOption(option);
        },
        loadchart17Callback: function (result) {
            var seventeenthSeries1 = [];
            var seventeenthSeries2 = [];
            var seventeenthSeries3 = [];
            var seventeenthSeries4 = [];
            var seventeenthSeries5 = [];
            var seventeenthSeries6 = [];
            var seventeenthSeries7 = [];
            var seventeenthSeries8 = [];
            var seventeenthSeries9 = [];
            var seventeenthSeries10 = [];
            var seventeenthSeries11 = [];
            var seventeenthSeries12 = [];
            var seventeenthSeries13 = [];
            var seventeenthSeries14 = [];
            $.each(result, function (key, values) {
                seventeenthSeries1.push(values[0]);
                seventeenthSeries2.push(values[1]);
                seventeenthSeries3.push(values[2]);
                seventeenthSeries4.push(values[3]);
                seventeenthSeries5.push(values[4]);
                seventeenthSeries6.push(values[5]);
                seventeenthSeries7.push(values[6]);
                seventeenthSeries8.push(values[7]);
                seventeenthSeries9.push(values[8]);
                seventeenthSeries10.push(values[9]);
                seventeenthSeries11.push(values[10]);
                seventeenthSeries12.push(values[11]);
                seventeenthSeries13.push(values[12]);
                seventeenthSeries14.push(values[13]);
            });
            var chartOneSeventeenth = echarts.init(document.getElementById('chartOneSeventeenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2014', '2015', '2016', '2017', '2018'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    max: 65,
                    axisLabel: {
                        formatter: '{value}%'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#FFF',
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type:'dashed',
                            color:'#3E3A70'
                        }
                    },

                },
                series: [
                    {
                        name: '交通条件落后',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries1,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00ff30"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺技术',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries2,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#faff00"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺劳力',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries3,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff8200"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺水',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries4,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff00ee"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺土地',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries5,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#1200ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '缺资金',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries6,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#00e7ff"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因病',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries7,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ff849c"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因残',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries8,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#86ffc6"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因婚',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries9,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#ffe09f"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因丧',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries10,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#77d6c2"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因学',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries11,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#9fd692"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '因灾',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries12,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#605fbd"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '自身发展动力不足',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries13,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#bd0040"//折线颜色
                                }
                            }
                        }
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: seventeenthSeries14,
                        symbol: 'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,//折线宽度
                                    color: "#fff307"//折线颜色
                                }
                            }
                        }
                    }
                ]
            };
            chartOneSeventeenth.setOption(option);
        },
        loadchart20Callback: function (result) {
            console.log(result,"result20");
            var rkgmSeries1 = [];
            var rkgmSeries2 = [];
            var rkgmSeries3 = [];
            $.each(result, function (key, values) {
                rkgmSeries1.push(values[0]);
                rkgmSeries2.push(values[1]);
                rkgmSeries3.push(values[2]);
            });
            var rkgm = echarts.init(document.getElementById('rkgm'));
            var option = {
                title: {
                    text: '剩余贫困人口规模',
                    x: '180',
                    y: 'center',
                    itemGap: 20,
                    textStyle : {
                        color : '#fff',
                        fontFamily : '微软雅黑',
                        fontSize : 25,
                        fontWeight : 'bolder'
                    }
                },
                tooltip : {
                    show: true,
                    formatter: "{b} : <br/>{c} ({d}%)"
                },
                legend: {
                    orient : 'horizontal',
                    data:rkgmSeries1,
                    textStyle: {
                        color: '#fff',
                    },
                    bottom: '10',
                    x: 'center',
                },
                series : [
                    {
                        name:'人口规模',
                        type:'pie',
                        clockWise:false,
                        radius : [100, 125],
                        itemStyle : {
                            normal: {
                                label: {show:false},
                                labelLine: {show:false},
                                color: function (params) {
                                    var colorList = [
                                        '#00f90b'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            },
                        },
                        data:[
                            {
                                value:rkgmSeries2[0],
                                name:'全市剩余贫困户'
                            },
                            {
                                value:rkgmSeries3[0],
                                name:'invisible',
                                itemStyle :  {
                                    normal : {
                                        color: 'rgba(0,0,0,0)',
                                        label: {show:false},
                                        labelLine: {show:false}
                                    },
                                    emphasis : {
                                        color: 'rgba(0,0,0,0)'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name:'人口规模',
                        type:'pie',
                        clockWise:false,
                        radius : [125, 150],
                        itemStyle : {
                            normal: {
                                label: {show:false},
                                labelLine: {show:false},
                                color: function (params) {
                                    var colorList = [
                                        '#10fef8'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            },
                        },
                        data:[
                            {
                                value:rkgmSeries2[1],
                                name:'全市剩余贫困人口'
                            },
                            {
                                value:rkgmSeries3[1],
                                name:'invisible',
                                itemStyle :  {
                                    normal : {
                                        color: 'rgba(0,0,0,0)',
                                        label: {show:false},
                                        labelLine: {show:false}
                                    },
                                    emphasis : {
                                        color: 'rgba(0,0,0,0)'
                                    }
                                }
                            }
                        ]
                    }
                ]
            };
            rkgm.setOption(option);
        },
        loadchart21Callback: function (result) {
            var pkrszbData = [];
            var pkrszbSeries = [];
            $.each(result, function (key, values) {
                pkrszbData.push(values[0]);
                pkrszbSeries.push(values[1]);
            });
            console.log(pkrszbData,"pkrszbData")
            var pkrszb = echarts.init(document.getElementById('pkrszb'));
            var a = 0, b = 1, c = 2;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    bottom: '10',
                    data: pkrszbData,
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
                        radius: '55%',
                        name: '贫困人数属性占比',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: pkrszbSeries[a], name: pkrszbData[a]},
                            {value: pkrszbSeries[b], name: pkrszbData[b]},
                            {value: pkrszbSeries[c], name: pkrszbData[c]},
                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#65acf9', '#fa6764', '#c7ee6d'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            pkrszb.setOption(option);
        },
        loadchart22Callback: function (result) {
            var eighteenthSeries1 = [];
            var eighteenthSeries2 = [];
            var eighteenthSeries3 = [];
            $.each(result, function (key, values) {
                eighteenthSeries1.push(values[0]);
                eighteenthSeries2.push(values[1]);
                eighteenthSeries3.push(values[2]);
            });
            var chartOneEighteenth = echarts.init(document.getElementById('chartOneEighteenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['2014年', '2018年'],
                    y: '10',
                    left:'100',
                    textStyle: {
                        color: '#fff',
                    },
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: eighteenthSeries1,
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        axisLabel: {
                            interval: 0,
                        }
                    }
                ],
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: [
                    {
                        type: 'value',
                        name:'户数',
                        axisLabel: {
                            formatter: '{value}',
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },

                    }
                ],
                series: [
                    {
                        name: '2014年',
                        type: 'bar',
                        data: eighteenthSeries2,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        itemStyle: {
                            normal: {
                                color: '#70ff00',
                                barBorderRadius:[4,4,2,2]
                            }
                        }
                    },
                    {
                        name: '2018年',
                        type: 'bar',
                        data: eighteenthSeries2,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        itemStyle: {
                            normal: {
                                color: '#005efe',
                                barBorderRadius:[4,4,2,2]
                            }
                        }
                    }
                ]
            };
            chartOneEighteenth.setOption(option);
        },
        loadchart23Callback: function (result) {
            var zpyyzjSeries1 = [];
            var zpyyzjSeries2 = [];
            $.each(result, function (key, values) {
                zpyyzjSeries1.push(values[0]);
                zpyyzjSeries2.push(values[1]);
            });
            var zpyyzj = echarts.init(document.getElementById('zpyyzj'));
            var option = {
                legend: {
                    data: ['总计'],
                    type: 'scroll',
                    orient: 'horizontal',
                    left: 10,
                    top: 5,
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a0}:{c0}',
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
                        data: zpyyzjSeries1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name:'户数',
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: '脱贫原因总计',
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                label: {
                                    color:'#fff',
                                    show: true,
                                    type: 'solid',
                                },
                                lineStyle: {
                                    width: 3
                                },
                                areaStyle: {
                                    type: 'default',
                                    color: ['rgba(255,252,124,0.3)','rgba(189,68,238,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#fffc7c'
                                }, {
                                    offset: 1,
                                    color: '#bd44ee'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: zpyyzjSeries2
                    }
                ]
            };
            zpyyzj.setOption(option);
        },
        loadchart25Callback: function (result) {
            var chart = echarts.init(document.getElementById('hjrk'));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                        data: ['2014', '2015', '2016', '2017', '2018'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: '户均人口',
                        type: 'bar',
                        barWidth: '30%',
                        data: result[0],
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
                                    color: '#46f387'
                                }, {
                                    offset: 1,
                                    color: '#965df2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    }
                ]
            };
            chart.setOption(option);
        },
    }
};

$(function () {
    service.init();
	//	页面跳转
	document.onkeydown=function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==40){ //下
			window.location.href="./pageTwo.html";
		}
		if(e && e.keyCode==38){ // 上
			window.location.href="../index.html";
		}
	};
});