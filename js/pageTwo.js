//ajax模块化
var service = {
    init: function () {
        this.loadchart1();
        this.loadchart2();
        this.loadchart3();
        this.loadchart4();
        this.loadchart5();
        this.loadchart6();
        // this.loadchart15();
        // this.loadchart16();
        // this.loadchart17();
        // this.loadchart18();
        this.loadchart19();
        // this.loadchart20();
        // this.loadchart21();
        // this.loadchart22();
        this.loadchart24();
        this.loadchart25();
        this.loadchart26();
        this.loadchart27();
        this.loadchart28();
        this.loadchart29();
        this.loadchart30();
        this.loadchart31();
        this.loadchart32();
        this.loadchart33();
        this.loadchart34();
    },
    loadchart1: function () {
        var url = "pageTwo1.json";
        this.ajax(url, this.callback.loadchart1Callback);
    },
    loadchart2: function () {
        var url = "pageTwo2.json";
        this.ajax(url, this.callback.loadchart2Callback);
    },
    loadchart3: function () {
        var url = "pageTwo3.json";
        this.ajax(url, this.callback.loadchart3Callback);
    },
    loadchart4: function () {
        var url = "pageTwo4.json";
        this.ajax(url, this.callback.loadchart4Callback);
    },
    loadchart5: function () {
        var url = "pageTwo5.json";
        this.ajax(url, this.callback.loadchart5Callback);
    },
    loadchart6: function () {
        var url = "pageTwo6.json";
        this.ajax(url, this.callback.loadchart6Callback);
    },
    // loadchart15: function () {
    //     var url = "pageOne15.json";
    //     this.ajax(url, this.callback.loadchart15Callback);
    // },
    // loadchart16: function () {
    //     var url = "pageOne16.json";
    //     this.ajax(url, this.callback.loadchart16Callback);
    // },
    // loadchart17: function () {
    //     var url = "pageOne17.json";
    //     this.ajax(url, this.callback.loadchart17Callback);
    // },
    // loadchart18: function () {
    //     var url = "pageOne18.json";
    //     this.ajax(url, this.callback.loadchart18Callback);
    // },
    loadchart19: function () {
        var url = "pageOne19.json";
        this.ajax(url, this.callback.loadchart19Callback);
    },
    // loadchart20: function () {
    //     var url = "pageSix1.json";
    //     this.ajax(url, this.callback.loadchart20Callback);
    // },
    // loadchart21: function () {
    //     var url = "pageSix2.json";
    //     this.ajax(url, this.callback.loadchart21Callback);
    // },
    // loadchart22: function () {
    //     var url = "pageSix3.json";
    //     this.ajax(url, this.callback.loadchart22Callback);
    // },

    loadchart24: function () {
        var url = "pageTwo24.json";
        this.ajax(url, this.callback.loadchart24Callback);
    },
    loadchart25: function () {
        var url = "pageTwo25.json";
        this.ajax(url, this.callback.loadchart25Callback);
    },
    loadchart26: function () {
        var url = "pageTwo26.json";
        this.ajax(url, this.callback.loadchart26Callback);
    },
    loadchart27: function () {
        var url = "pageTwo27.json";
        this.ajax(url, this.callback.loadchart27Callback);
    },
    loadchart28: function () {
        var url = "pageTwo28.json";
        this.ajax(url, this.callback.loadchart28Callback);
    },
    loadchart29: function () {
        var url = "pageTwo29.json";
        this.ajax(url, this.callback.loadchart29Callback);
    },
    loadchart30: function () {
        var url = "pageTwo30.json";
        this.ajax(url, this.callback.loadchart30Callback);
    },
    loadchart31: function () {
        var url = "pageTwo31.json";
        this.ajax(url, this.callback.loadchart31Callback);
    },
    loadchart32: function () {
        var url = "pageTwo32.json";
        this.ajax(url, this.callback.loadchart32Callback);
    },
    loadchart33: function () {
        var url = "pageTwo33.json";
        this.ajax(url, this.callback.loadchart33Callback);
    },
    loadchart34: function () {
        var url = "pageTwo34.json";
        this.ajax(url, this.callback.loadchart34Callback);
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
            var fifthData = [];
            var fifthSeries1 = [];
            $.each(result, function (key, values) {
                fifthData.push(values[0]);
                fifthSeries1.push(values[1]);
            });
            console.log(fifthData, "fifthData");
            console.log(fifthSeries1, "fifthSeries1");
            var chartTwoFirst = echarts.init(document.getElementById('chartTwoFirst'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10;
            var option = {
                title: {
                    text: '',
                    x: 'center',
                    y: '2%',
                    textStyle: {
                        color: '#FFF'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [
                    {
                        name: '占比',
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        label: {
                            normal: {
                                formatter: '{b}：({d}%) '
                            }
                        },
                        data: [
                            {value: fifthSeries1[a], name: fifthData[a]},
                            {value: fifthSeries1[b], name: fifthData[b]},
                            {value: fifthSeries1[c], name: fifthData[c]},
                            {value: fifthSeries1[d], name: fifthData[c]},
                            {value: fifthSeries1[e], name: fifthData[e]},
                            {value: fifthSeries1[f], name: fifthData[f]},
                            {value: fifthSeries1[g], name: fifthData[g]},
                            {value: fifthSeries1[h], name: fifthData[h]},
                            {value: fifthSeries1[i], name: fifthData[i]},
                            {value: fifthSeries1[j], name: fifthData[j]},
                            {value: fifthSeries1[k], name: fifthData[k]},
                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#0067ff', '#ffb400', '#00fb3b', '#fb00f0', '#fe9b00', '#a5fef7', '#02f5fb', '#fecbf4', '#ffff86', '#bcdefa', '#b3ff83',
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chartTwoFirst.setOption(option);
        },
        loadchart2Callback: function (result) {
            var secondSeries1 = [];
            var secondSeries2 = [];
            var secondSeries3 = [];
            var secondSeries4 = [];
            $.each(result, function (key, values) {
                secondSeries1.push(values[0]);
                secondSeries2.push(values[1]);
                secondSeries3.push(values[2]);
                secondSeries4.push(values[3]);
            });
            var chartTwoSecond = echarts.init(document.getElementById('chartTwoSecond'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['低保户户数', '特困供养户数', '一般贫困户户数'],
                    y: '10',
                    left: '30',
                    textStyle: {
                        color: '#fff',
                    },
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: secondSeries1,
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
                        axisLabel: {
                            formatter: '{value}',
                        },
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
                        name: '低保户户数',
                        type: 'bar',
                        data: secondSeries2,
                        itemStyle: {
                            normal: {
                                color: '#b5fe0b',
                                barBorderRadius:[4,4,2,2]
                            }
                        }
                    },
                    {
                        name: '特困供养户数',
                        type: 'bar',
                        data: secondSeries3,
                        itemStyle: {
                            normal: {
                                color: '#08feb6'
                            }
                        }
                    },
                    {
                        name: '一般贫困户户数',
                        type: 'bar',
                        data: secondSeries4,
                        itemStyle: {
                            normal: {
                                color: '#4c57fe',
                                barBorderRadius:[4,4,2,2]
                            }
                        }
                    }
                ]
            };
            chartTwoSecond.setOption(option);
        },
        loadchart3Callback: function (result) {
            var thirdSeries1 = [];
            var thirdSeries2 = [];
            $.each(result, function (key, values) {
                thirdSeries1.push(values[0]);
                thirdSeries2.push(values[1]);
            });
            var chartTwoThird = echarts.init(document.getElementById('chartTwoThird'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: thirdSeries1,
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
                        name:'元',
                        axisLabel: {
                            formatter: '{value}',
                        },
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
                        name: '脱贫户人均纯收入',
                        type: 'bar',
                        data: thirdSeries2,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color:'#fff'
                            }
                        },
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#eff3a8'
                                }, {
                                    offset: 1,
                                    color: '#7c7af2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    }
                ]
            };
            chartTwoThird.setOption(option);
        },
        loadchart4Callback: function (result) {
            var FourthSeries1 = [];
            var FourthSeries2 = [];
            $.each(result, function (key, values) {
                FourthSeries1.push(values[0]);
                FourthSeries2.push(values[1]);
            });
            var chartTwoFourth = echarts.init(document.getElementById('chartTwoFourth'));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: FourthSeries1,
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
                        axisLabel: {
                            formatter: '{value}%',
                        },
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
                        name: '脱贫户健康人员占比',
                        type: 'bar',
                        data: FourthSeries2,
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
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    }
                ]
            };
            chartTwoFourth.setOption(option);
        },
        loadchart5Callback: function (result) {
            var fifthSeries1 = [];
            var fifthSeries2 = [];
            var fifthSeries3 = [];
            var fifthSeries4 = [];
            var fifthSeries5 = [];
            var fifthSeries6 = [];
            $.each(result, function (key, values) {
                fifthSeries1.push(values[0]);
                fifthSeries2.push(values[1]);
                fifthSeries3.push(values[2]);
                fifthSeries4.push(values[3]);
                fifthSeries5.push(values[4]);
                fifthSeries6.push(values[5]);
            });
            var chartTwoFifth = echarts.init(document.getElementById('chartTwoFifth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['技能劳动力', '普通劳动力', '弱劳动力或半劳动力', '丧失劳动力', '无劳动力'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: fifthSeries1,
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
                        axisLabel: {
                            formatter: '{value}',
                        },
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
                        name: '技能劳动力',
                        type: 'bar',
                        data: fifthSeries2,
                        itemStyle: {
                            normal: {
                                color: '#00f1fe',
                            },
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '普通劳动力',
                        type: 'bar',
                        data: fifthSeries3,
                        itemStyle: {
                            normal: {
                                color: '#5f0bfe'
                            }
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '弱劳动力或半劳动力',
                        type: 'bar',
                        data: fifthSeries4,
                        itemStyle: {
                            normal: {
                                color: '#fcfe85'
                            }
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '丧失劳动力',
                        type: 'bar',
                        data: fifthSeries5,
                        itemStyle: {
                            normal: {
                                color: '#fe717a'
                            }
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '无劳动力',
                        type: 'bar',
                        data: fifthSeries6,
                        itemStyle: {
                            normal: {
                                color: '#fd0ffe'
                            }
                        }
                    }
                ]
            };
            chartTwoFifth.setOption(option);
        },
        loadchart6Callback: function (result) {
            var sixthSeries1 = [];
            var sixthSeries2 = [];
            var sixthSeries3 = [];
            var sixthSeries4 = [];
            var sixthSeries5 = [];
            var sixthSeries6 = [];
            $.each(result, function (key, values) {
                sixthSeries1.push(values[0]);
                sixthSeries2.push(values[1]);
                sixthSeries3.push(values[2]);
                sixthSeries4.push(values[3]);
                sixthSeries5.push(values[4]);
                sixthSeries6.push(values[5]);
            });
            var chartTwoSixth = echarts.init(document.getElementById('chartTwoSixth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['未外出务工', '省外务工', '县外省内务工', '乡（镇）内务工', '乡（镇）外县内务工'],
                    y: '5',
                    left: '10',
                    textStyle: {
                        color: '#fff',
                    },
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
                        data: sixthSeries1,
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
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}',
                        },
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
                        name: '未外出务工',
                        type: 'bar',
                        data: sixthSeries2,
                        itemStyle: {
                            normal: {
                                color: '#0691fe'
                            }
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '省外务工',
                        type: 'bar',
                        data: sixthSeries3,
                        itemStyle: {
                            normal: {
                                color: '#bb58fe'
                            }
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '县外省内务工',
                        type: 'bar',
                        data: sixthSeries4,
                        itemStyle: {
                            normal: {
                                color: '#fe7bae'
                            }
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '乡（镇）内务工',
                        type: 'bar',
                        data: sixthSeries5,
                        itemStyle: {
                            normal: {
                                color: '#ffb98f'
                            }
                        },
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                    },
                    {
                        name: '乡（镇）外县内务工',
                        type: 'bar',
                        data: sixthSeries6,
                        itemStyle: {
                            normal: {
                                color: '#b8fe89'
                            }
                        }
                    }
                ]
            };
            chartTwoSixth.setOption(option);
        },
        // loadchart15Callback: function (result) {
        //     var fifteenthSeries1 = [];
        //     var fifteenthSeries2 = [];
        //     var fifteenthSeries3 = [];
        //     var fifteenthSeries4 = [];
        //     var fifteenthSeries5 = [];
        //     var fifteenthSeries6 = [];
        //     var fifteenthSeries7 = [];
        //     var fifteenthSeries8 = [];
        //     var fifteenthSeries9 = [];
        //     var fifteenthSeries10 = [];
        //     var fifteenthSeries11 = [];
        //     var fifteenthSeries12 = [];
        //     var fifteenthSeries13 = [];
        //     var fifteenthSeries14 = [];
        //     $.each(result, function (key, values) {
        //         fifteenthSeries1.push(values[0]);
        //         fifteenthSeries2.push(values[1]);
        //         fifteenthSeries3.push(values[2]);
        //         fifteenthSeries4.push(values[3]);
        //         fifteenthSeries5.push(values[4]);
        //         fifteenthSeries6.push(values[5]);
        //         fifteenthSeries7.push(values[6]);
        //         fifteenthSeries8.push(values[7]);
        //         fifteenthSeries9.push(values[8]);
        //         fifteenthSeries10.push(values[9]);
        //         fifteenthSeries11.push(values[10]);
        //         fifteenthSeries12.push(values[11]);
        //         fifteenthSeries13.push(values[12]);
        //         fifteenthSeries14.push(values[13]);
        //     });
        //     var chartOneFifteenth = echarts.init(document.getElementById('chartOneFifteenth'));
        //     var option = {
        //         tooltip: {
        //             trigger: 'axis'
        //         },
        //         legend: {
        //             orient: 'vertical',
        //             x: 'right',
        //             top: 35,
        //             data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
        //             textStyle: {
        //                 color: '#fff',
        //             },
        //         },
        //         grid: {
        //             left: '5%',
        //             right: '15%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis: {
        //             type: 'category',
        //             data: ['2014', '2015', '2016', '2017', '2018'],
        //             axisLine: {
        //                 lineStyle: {
        //                     color: '#FFF',
        //                 }
        //             },
        //             axisLabel: {
        //                 interval: 0,
        //             }
        //         },
        //         yAxis: {
        //             type: 'value',
        //             max: 45,
        //             axisLine: {
        //                 lineStyle: {
        //                     color: '#FFF',
        //                 }
        //             },
        //             axisLabel: {
        //                 formatter: '{value}%'
        //             },
        //             splitLine:{
        //                 show:true,
        //                 lineStyle:{
        //                     type:'dashed',
        //                     color:'#3E3A70'
        //                 }
        //             },
        //         },
        //         series: [
        //             {
        //                 name: '交通条件落后',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries1,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#00ff30"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺技术',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries2,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#faff00"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺劳力',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries3,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ff8200"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺水',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries4,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ff00ee"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺土地',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries5,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#1200ff"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺资金',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries6,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#00e7ff"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因病',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries7,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ff849c"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因残',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries8,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#86ffc6"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因婚',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries9,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ffe09f"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因丧',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries10,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#77d6c2"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因学',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries11,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#9fd692"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因灾',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries12,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#605fbd"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '自身发展动力不足',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries13,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#bd0040"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '其他',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: fifteenthSeries14,
        //                 symbol: 'circle',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#fff307"//折线颜色
        //                         }
        //                     }
        //                 }
        //             }
        //         ]
        //     };
        //     chartOneFifteenth.setOption(option);
        // },
        // loadchart17Callback: function (result) {
        //     var seventeenthSeries1 = [];
        //     var seventeenthSeries2 = [];
        //     var seventeenthSeries3 = [];
        //     var seventeenthSeries4 = [];
        //     var seventeenthSeries5 = [];
        //     var seventeenthSeries6 = [];
        //     var seventeenthSeries7 = [];
        //     var seventeenthSeries8 = [];
        //     var seventeenthSeries9 = [];
        //     var seventeenthSeries10 = [];
        //     var seventeenthSeries11 = [];
        //     var seventeenthSeries12 = [];
        //     var seventeenthSeries13 = [];
        //     var seventeenthSeries14 = [];
        //     $.each(result, function (key, values) {
        //         seventeenthSeries1.push(values[0]);
        //         seventeenthSeries2.push(values[1]);
        //         seventeenthSeries3.push(values[2]);
        //         seventeenthSeries4.push(values[3]);
        //         seventeenthSeries5.push(values[4]);
        //         seventeenthSeries6.push(values[5]);
        //         seventeenthSeries7.push(values[6]);
        //         seventeenthSeries8.push(values[7]);
        //         seventeenthSeries9.push(values[8]);
        //         seventeenthSeries10.push(values[9]);
        //         seventeenthSeries11.push(values[10]);
        //         seventeenthSeries12.push(values[11]);
        //         seventeenthSeries13.push(values[12]);
        //         seventeenthSeries14.push(values[13]);
        //     });
        //     var chartOneSeventeenth = echarts.init(document.getElementById('chartOneSeventeenth'));
        //     var option = {
        //         tooltip: {
        //             trigger: 'axis'
        //         },
        //         legend: {
        //             orient: 'vertical',
        //             x: 'right',
        //             top: 35,
        //             data: ['交通条件落后', '缺技术', '缺劳力', '缺水', '缺土地', '缺资金', '因病', '因残', '因婚', '因丧', '因学', '因灾', '自身发展动力不足', '其他'],
        //             textStyle: {
        //                 color: '#fff',
        //             },
        //         },
        //         grid: {
        //             left: '5%',
        //             right: '15%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis: {
        //             type: 'category',
        //             data: ['2014', '2015', '2016', '2017', '2018'],
        //             axisLine: {
        //                 lineStyle: {
        //                     color: '#FFF',
        //                 }
        //             },
        //             axisLabel: {
        //                 interval: 0,
        //             }
        //         },
        //         yAxis: {
        //             type: 'value',
        //             max: 65,
        //             axisLabel: {
        //                 formatter: '{value}%'
        //             },
        //             axisLine: {
        //                 lineStyle: {
        //                     color: '#FFF',
        //                 }
        //             },
        //             splitLine:{
        //                 show:true,
        //                 lineStyle:{
        //                     type:'dashed',
        //                     color:'#3E3A70'
        //                 }
        //             },
        //
        //         },
        //         series: [
        //             {
        //                 name: '交通条件落后',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries1,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#00ff30"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺技术',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries2,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#faff00"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺劳力',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries3,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ff8200"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺水',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries4,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ff00ee"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺土地',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries5,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#1200ff"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '缺资金',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries6,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#00e7ff"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因病',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries7,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ff849c"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因残',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries8,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#86ffc6"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因婚',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries9,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#ffe09f"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因丧',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries10,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#77d6c2"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因学',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries11,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#9fd692"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '因灾',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries12,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#605fbd"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '自身发展动力不足',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries13,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#bd0040"//折线颜色
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 name: '其他',
        //                 type: 'line',
        //                 smooth: true,
        //                 data: seventeenthSeries14,
        //                 symbol: 'star',//拐点样式
        //                 symbolSize: 8,//拐点大小
        //                 itemStyle: {
        //                     normal: {
        //                         lineStyle: {
        //                             width: 2,//折线宽度
        //                             color: "#fff307"//折线颜色
        //                         }
        //                     }
        //                 }
        //             }
        //         ]
        //     };
        //     chartOneSeventeenth.setOption(option);
        // },

        loadchart19Callback: function (result) {
            var nineteenthSeries1 = [];
            var nineteenthSeries2 = [];
            var nineteenthSeries3 = [];
            var nineteenthSeries4 = [];
            var nineteenthSeries5 = [];
            var nineteenthSeries6 = [];
            $.each(result, function (key, values) {
                nineteenthSeries1.push(values[0]);
                nineteenthSeries2.push(values[1]);
                nineteenthSeries3.push(values[2]);
                nineteenthSeries4.push(values[3]);
                nineteenthSeries5.push(values[4]);
                nineteenthSeries6.push(values[5]);
            });
            var chartOneNineteenth = echarts.init(document.getElementById('chartOneNineteenth'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    top: 35,
                    textStyle: {
                        color: '#fff',
                    },
                    data: ['技能劳动力', '普通劳动力', '弱劳动力或半劳动力', '丧失劳动力', '无劳动力', '其他',],
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
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: '#3E3A70'
                        }
                    },

                },
                series: [
                    {
                        name: '技能劳动力',
                        type: 'line',
                        smooth: true,
                        data: nineteenthSeries1,
                        symbol: 'arrow',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ff0000"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '普通劳动力',
                        type: 'line',
                        smooth: true,
                        data: nineteenthSeries2,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#34ff0d"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '弱劳动力或半劳动力',
                        type: 'line',
                        smooth: true,
                        data: nineteenthSeries3,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#0c1cff"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '丧失劳动力',
                        type: 'line',
                        smooth: true,
                        data: nineteenthSeries4,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ff12e3"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '无劳动力',
                        type: 'line',
                        smooth: true,
                        data: nineteenthSeries5,
                        symbol: 'circle',//拐点样式
                        symbolSize: 10,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ffb503"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '其他',
                        type: 'line',
                        smooth: true,
                        data: nineteenthSeries6
                    }
                ]
            };
            chartOneNineteenth.setOption(option);
        },

        // loadchart20Callback: function (result) {
        //     var dataxsbpkhnf = [];
        //     var dataXsbpkhsj = [];
        //     $.each(result, function (key, values) {
        //         dataxsbpkhnf.push(values[0]);
        //         dataXsbpkhsj.push(values[1]);
        //     });
        //     console.log(dataXsbpkhsj);
        //     var chart1 = echarts.init(document.getElementById('xsbpkhtj'));
        //     var option1 = {
        //         color: ['#4689ff'],
        //         tooltip: {
        //             trigger: 'item',
        //             formatter: '{a0}:{c0}',
        //             axisPointer: {
        //                 type: 'shadow'
        //             }
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '3%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         calculable: true,
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: dataxsbpkhnf,
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 splitLine: {
        //                     show: true,
        //                     lineStyle: {
        //                         type: 'dashed',
        //                         color: '#3E3A70'
        //                     }
        //                 },
        //             }
        //         ],
        //
        //         series: [
        //             {
        //                 name: '贫困户数',
        //                 smooth: true,
        //                 type: 'line',
        //                 barGap: 0,
        //                 itemStyle: {
        //                     normal: {
        //                         label: {
        //                             color:'#fff',
        //                             show: true,
        //                             type: 'solid',
        //                         },
        //                         lineStyle: {
        //                             width: 3
        //                         },
        //                         areaStyle: {
        //                             type: 'default'
        //                         },
        //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //                             offset: 0,
        //                             color: '#86fff2'
        //                         }, {
        //                             offset: 1,
        //                             color: '#ee8278'
        //                         }]),//线条渐变色#008B45
        //                     },
        //                     emphasis: {
        //                         color: '#008B45',
        //                         lineStyle: {        // 系列级个性化折线样式
        //                             width: 2,
        //                             type: 'dotted',
        //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //                                 offset: 0,
        //                                 color: '#00FFFF'
        //                             }, {
        //                                 offset: 1,
        //                                 color: '#5F9EA0'
        //                             }])
        //                         }
        //                     }
        //                 },
        //                 symbolSize: 10,
        //                 data: dataXsbpkhsj
        //             },
        //
        //         ]
        //     };
        //     chart1.setOption(option1);
        // },
        // loadchart21Callback: function (result) {
        //     var dataldlnf = [];
        //     var dataJnldl = [];
        //     var dataPtldl = [];
        //     var dataRldbld = [];
        //     var dataSsldl = [];
        //     var dataWldl = [];
        //     var dataQtldl = [];
        //     $.each(result, function (key, values) {
        //         dataldlnf.push(values[0]);
        //         dataJnldl.push(values[1]);
        //         dataPtldl.push(values[2]);
        //         dataRldbld.push(values[3]);
        //         dataSsldl.push(values[4]);
        //         dataWldl.push(values[5]);
        //         dataQtldl.push(values[6]);
        //     });
        //     console.log(dataJnldl);
        //     var chart2 = echarts.init(document.getElementById('xsbldlfx'));
        //     var option2 = {
        //         color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56', '#16ff16', '#ab14ff'],
        //         tooltip: {
        //             trigger: 'item',
        //             formatter: '{a0}:{c0}%',
        //             axisPointer: {
        //                 type: 'shadow'
        //             }
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '3%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         calculable: true,
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: dataldlnf,
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 }
        //             }
        //         ],
        //         legend: {
        //             data: ['技能劳动力', '普通劳动力', '弱劳动力或半劳动力', '丧失劳动力', '无劳动力', '其他'],
        //             type: 'scroll',
        //             orient: 'horizontal',
        //             left: 10,
        //             top: 5,
        //             textStyle: {
        //                 color: '#fff',
        //             },
        //         },
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 axisLabel: {
        //                     formatter: '{value}%'
        //                 },
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 },
        //                 splitLine: {
        //                     show: true,
        //                     lineStyle: {
        //                         type: 'dashed',
        //                         color: '#3E3A70'
        //                     }
        //                 },
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '技能劳动力',
        //                 smooth: true,
        //                 type: 'line',
        //                 barGap: 0,
        //                 data: dataJnldl
        //             },
        //             {
        //                 name: '普通劳动力',
        //                 smooth: true,
        //                 type: 'line',
        //                 barGap: 0,
        //                 data: dataPtldl
        //             },
        //             {
        //                 name: '弱劳动力或半劳动力',
        //                 smooth: true,
        //                 type: 'line',
        //                 barGap: 0,
        //                 data: dataRldbld
        //             },
        //             {
        //                 name: '丧失劳动力',
        //                 smooth: true,
        //                 type: 'line',
        //                 barGap: 0,
        //                 data: dataSsldl
        //             },
        //             {
        //                 name: '无劳动力',
        //                 smooth: true,
        //                 type: 'line',
        //                 barGap: 0,
        //                 data: dataWldl
        //             },
        //             {
        //                 name: '其他',
        //                 smooth: true,
        //                 type: 'line',
        //                 barGap: 0,
        //                 data: dataQtldl
        //             },
        //
        //         ]
        //     };
        //     chart2.setOption(option2);
        // },
        // loadchart22Callback: function (result) {
        //     var dataysnyymc = [];
        //     var dataYsnyyfx = [];
        //     $.each(result, function (key, values) {
        //         dataysnyymc.push(values[0]);
        //         dataYsnyyfx.push(values[1]);
        //     });
        //     console.log(dataysnyymc);
        //     var chart3 = echarts.init(document.getElementById('ysnyyfx'));
        //     var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
        //     var option3 = {
        //         tooltip: {
        //             trigger: 'item',
        //             formatter: "{a} <br/>{b}:{c}{d}%"
        //         },
        //         legend: {
        //             bottom: '30',
        //             data: dataysnyymc,
        //             type: 'scroll',
        //             orient: 'horizontal',
        //             x: 'center',
        //             textStyle: {
        //                 color: '#fff',
        //             }
        //         },
        //         series: [
        //             {
        //                 type: 'pie',
        //                 radius: '60%',
        //                 name: ' 2014年新识别贫困户致贫原因分析',
        //                 center: ['50%', '45%'],
        //                 selectedMode: 'single',
        //                 data: [
        //                     {value: dataYsnyyfx[a], name: dataysnyymc[a]},
        //                     {value: dataYsnyyfx[b], name: dataysnyymc[b]},
        //                     {value: dataYsnyyfx[c], name: dataysnyymc[c]},
        //                     {value: dataYsnyyfx[d], name: dataysnyymc[d]},
        //                     {value: dataYsnyyfx[e], name: dataysnyymc[e]},
        //                     {value: dataYsnyyfx[f], name: dataysnyymc[f]},
        //                     {value: dataYsnyyfx[g], name: dataysnyymc[g]},
        //                     {value: dataYsnyyfx[h], name: dataysnyymc[h]},
        //                     {value: dataYsnyyfx[i], name: dataysnyymc[i]},
        //                     {value: dataYsnyyfx[j], name: dataysnyymc[j]},
        //                     {value: dataYsnyyfx[k], name: dataysnyymc[k]},
        //                     {value: dataYsnyyfx[l], name: dataysnyymc[l]},
        //                     {value: dataYsnyyfx[m], name: dataysnyymc[m]},
        //
        //
        //                 ],
        //                 itemStyle: {
        //                     normal: {
        //                         label: {
        //                             show: true,
        //                             formatter: '{b}{d}%'
        //                         },
        //                         labelLine: {show: true},
        //                         color: function (params) {
        //                             var colorList = [
        //                                 '#af05b1', '#df1acf', '#eb68cf', '#d072f9', '#cb9cf9',
        //                                 '#b093f9', '#b3b4ff', '#8d8eee', '#65c3f9', '#7876f9',
        //                                 '#5c7bf9', '#536aff'
        //                             ];
        //                             return colorList[params.dataIndex]
        //                         }
        //                     }
        //                 }
        //             }
        //         ]
        //     };
        //     chart3.setOption(option3);
        // },

        loadchart24Callback: function (result) {
            var dataqsrjrk1 = [];
            var dataqsrjrk2 = [];
            var dataqsrjrk3 = [];
            var dataqsrjrk4 = [];
            var dataqsrjrk5 = [];
            var dataqsrjrk6 = [];
            $.each(result, function (key, values) {
                dataqsrjrk1.push(values[0]);
                dataqsrjrk2.push(values[1]);
                dataqsrjrk3.push(values[2]);
                dataqsrjrk4.push(values[3]);
                dataqsrjrk5.push(values[4]);
                dataqsrjrk6.push(values[5]);
            });
            var chart = echarts.init(document.getElementById('qsrjrk'));
            var option = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56', '#16ff16', '#ab14ff'],
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
                        data: ['2014', '2015', '2016', '2017', '2018'],
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['1人户', '2人户', '3人户', '4人户', '5人户', '大于5人户'],
                    type: 'scroll',
                    orient: 'horizontal',
                    y: '10',
                    left: '100',
                    textStyle: {
                        color: '#fff',
                    },
                },
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
                        name: '1人户',
                        smooth: true,
                        type: 'line',
                        data: dataqsrjrk1,
                        symbol: 'arrow',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ff0000"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '2人户',
                        smooth: true,
                        type: 'line',
                        data: dataqsrjrk2,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#34ff0d"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '3人户',
                        smooth: true,
                        type: 'line',
                        data: dataqsrjrk3,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#0c1cff"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '4人户',
                        smooth: true,
                        type: 'line',
                        data: dataqsrjrk4,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ff12e3"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '5人户',
                        smooth: true,
                        type: 'line',
                        data: dataqsrjrk5,
                        symbol: 'circle',//拐点样式
                        symbolSize: 10,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ffb503"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '大于5人户',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataqsrjrk6
                    },
                ]
            };
            chart.setOption(option);
        },
        loadchart25Callback: function (result) {
            var chart = echarts.init(document.getElementById('hjrk'));
            var option = {
                // color: ['#fcff01'],
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
                            }
                        },
                    }
                ]
            };
            chart.setOption(option);
        },
        loadchart26Callback: function (result) {
            var hjrkzbSeries1 = [];
            var hjrkzbSeries2 = [];
            var hjrkzbSeries3 = [];
            var hjrkzbSeries4 = [];
            var hjrkzbSeries5 = [];
            var hjrkzbSeries6 = [];
            $.each(result, function (key, values) {
                hjrkzbSeries1.push(values[0]);
                hjrkzbSeries2.push(values[1]);
                hjrkzbSeries3.push(values[2]);
                hjrkzbSeries4.push(values[3]);
                hjrkzbSeries5.push(values[4]);
                hjrkzbSeries6.push(values[5]);
            });
            var hjrkzb = echarts.init(document.getElementById('hjrkzb'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['1人户', '2人户', '3人户', '4人户', '5人户', '大于5人户',],
                    type: 'scroll',
                    orient: 'horizontal',
                    y: '10',
                    left: '100',
                    textStyle: {
                        color: '#fff',
                    },
                },
                grid: {
                    left: '3%',
                    right: '3%',
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
                    name:'户数',
                    max: 40,
                    axisLabel: {
                        formatter: '{value}%'
                    },
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

                },
                series: [
                    {
                        name: '1人户',
                        type: 'line',
                        smooth: true,
                        data: hjrkzbSeries1,
                        symbol: 'arrow',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ff0000"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '2人户',
                        type: 'line',
                        smooth: true,
                        data: hjrkzbSeries2,
                        symbol: 'rectangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#34ff0d"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '3人户',
                        type: 'line',
                        smooth: true,
                        data: hjrkzbSeries3,
                        symbol: 'triangle',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#0c1cff"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '4人户',
                        type: 'line',
                        smooth: true,
                        data: hjrkzbSeries4,
                        symbol: 'diamond',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ff12e3"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '5人户',
                        type: 'line',
                        smooth: true,
                        data: hjrkzbSeries5,
                        symbol: 'circle',//拐点样式
                        symbolSize: 10,//拐点大小
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,//折线宽度
                                    color: "#ffb503"//折线颜色
                                }
                            }
                        },
                    },
                    {
                        name: '大于5人户',
                        type: 'line',
                        smooth: true,
                        data: hjrkzbSeries6
                    }
                ]
            };
            hjrkzb.setOption(option);
        },
        loadchart27Callback: function (result) {
            var wtphldlSeries1 = [];
            var wtphldlSeries2 = [];
            var wtphldlSeries3 = [];
            var wtphldlSeries4 = [];
            var wtphldlSeries5 = [];
            var wtphldlSeries6 = [];
            $.each(result, function (key, values) {
                wtphldlSeries1.push(values[0]);
                wtphldlSeries2.push(values[1]);
                wtphldlSeries3.push(values[2]);
                wtphldlSeries4.push(values[3]);
                wtphldlSeries5.push(values[4]);
                wtphldlSeries6.push(values[5]);
            });

            var wtphldl = echarts.init(document.getElementById('wtphldl'));
            var option = {
                tooltip: {},
                legend: {
                    data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
                    orient: 'horizontal',
                    y: '10',
                    left: '30',
                    textStyle: {
                        color: '#fff',
                    },
                },
                radar: {
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
                    },
                    indicator: [
                        {name: wtphldlSeries1[0], max: 2500},
                        {name: wtphldlSeries1[1], max: 201000},
                        {name: wtphldlSeries1[2], max: 4500},
                        {name: wtphldlSeries1[3], max: 27800},
                        {name: wtphldlSeries1[4], max: 92800},
                        {name: wtphldlSeries1[5], max: 1000},
                    ]
                },
                series: [{
                    type: 'radar',
                    symbolSize: 8,
                    areaStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    data: [
                        {
                            value: wtphldlSeries2,
                            name: '2014年',
                            itemStyle: {
                                normal: {
                                    width: 6,
                                    color: '#34eff1',
                                }

                            },
                        },
                        {
                            value: wtphldlSeries3,
                            name: '2015年',
                            itemStyle: {
                                normal: {
                                    width: 6,
                                    color: '#f88c92',
                                }
                            },
                        },
                        {
                            value: wtphldlSeries4,
                            name: '2016年',
                            itemStyle: {
                                normal: {
                                    width: 6,
                                    color: '#38f2f4',
                                }
                            },
                        },
                        {
                            value: wtphldlSeries5,
                            name: '2017年',
                            itemStyle: {
                                normal: {
                                    width: 6,
                                    color: '#f8e20d',
                                }
                            },
                        },
                        {
                            value: wtphldlSeries6,
                            name: '2018年',
                            itemStyle: {
                                normal: {
                                    width: 6,
                                    color: '#FFB980',
                                }
                            },
                        },
                    ]
                }]
            };
            wtphldl.setOption(option);
        },
        loadchart28Callback: function (result) {
            var wtpkhzjSeries1 = [];
            var wtpkhzjSeries2 = [];
            $.each(result, function (key, values) {
                wtpkhzjSeries1.push(values[0]);
                wtpkhzjSeries2.push(values[1]);
            });
            var wtpkhzj = echarts.init(document.getElementById('wtpkhzj'));
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
                        data: wtpkhzjSeries1,
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
                        name:'人数',
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
                        name: '未脱贫户劳动力总计',
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
                                    color: ['rgba(132,122,255,0.3)','rgba(71,238,141,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#8470FF'
                                }, {
                                    offset: 1,
                                    color: '#47ee8d'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: wtpkhzjSeries2
                    }
                ]
            };
            wtpkhzj.setOption(option);
        },
        loadchart29Callback: function (result) {
            var tprszbData = [];
            var tprszbSeries1 = [];
            $.each(result, function (key, values) {
                tprszbData.push(values[0]);
                tprszbSeries1.push(values[1]);
            });
            console.log(tprszbData, "tprszb");
            console.log(tprszbSeries1, "tprszb");
            var tprszb = echarts.init(document.getElementById('tprszb'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10;
            var option = {
                title: {
                    text: '',
                    x: 'center',
                    y: '2%',
                    textStyle: {
                        color: '#FFF'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [
                    {
                        name: '占比',
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        label: {
                            normal: {
                                formatter: '{b}：({d}%) '
                            }
                        },
                        data: [
                            {value: tprszbSeries1[a], name: tprszbData[a]},
                            {value: tprszbSeries1[b], name: tprszbData[b]},
                            {value: tprszbSeries1[c], name: tprszbData[c]},
                            {value: tprszbSeries1[d], name: tprszbData[c]},
                            {value: tprszbSeries1[e], name: tprszbData[e]},
                            {value: tprszbSeries1[f], name: tprszbData[f]},
                            {value: tprszbSeries1[g], name: tprszbData[g]},
                            {value: tprszbSeries1[h], name: tprszbData[h]},
                            {value: tprszbSeries1[i], name: tprszbData[i]},
                            {value: tprszbSeries1[j], name: tprszbData[j]},
                            {value: tprszbSeries1[k], name: tprszbData[k]},
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
            tprszb.setOption(option);
        },
        loadchart30Callback: function (result) {
            console.log(result,"result20");
            var tpzjfxSeries1 = [];
            var tpzjfxSeries2 = [];
            var tpzjfxSeries3 = [];
            $.each(result, function (key, values) {
                tpzjfxSeries1.push(values[0]);
                tpzjfxSeries2.push(values[1]);
                tpzjfxSeries3.push(values[2]);
            });
            var tpzjfx = echarts.init(document.getElementById('tpzjfx'));
            var option = {
                title: {
                    text: '脱贫总计分析',
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
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'horizontal',
                    data:tpzjfxSeries1,
                    textStyle: {
                        color: '#fff',
                    },
                    bottom: '10',
                    x: 'center',
                },
                series : [
                    {
                        name:'占比',
                        type:'pie',
                        clockWise:false,
                        radius : [125, 150],
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
                                value:tpzjfxSeries2[0],
                                name:'全市脱贫人数'
                            },
                            {
                                value:tpzjfxSeries3[0],
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
                        name:'占比',
                        type:'pie',
                        clockWise:false,
                        radius : [100, 125],
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
                                value:tpzjfxSeries2[1],
                                name:'全市脱贫户数'
                            },
                            {
                                value:tpzjfxSeries3[1],
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
            tpzjfx.setOption(option);
        },
        loadchart31Callback: function (result) {
            var gxspkhzjSeries1 = [];
            var gxspkhzjSeries2 = [];
            $.each(result, function (key, values) {
                gxspkhzjSeries1.push(values[0]);
                gxspkhzjSeries2.push(values[1]);
            });
            var gxspkhzj = echarts.init(document.getElementById('gxspkhzj'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: gxspkhzjSeries1,
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
                        name: '总计',
                        type: 'bar',
                        data: gxspkhzjSeries2,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color:'#fff'
                            }
                        },
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#a6f3d5'
                                }, {
                                    offset: 1,
                                    color: '#7c7af2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    }
                ]
            };
            gxspkhzj.setOption(option);
        },
        loadchart32Callback: function (result) {
            var gxsldzkzjSeries1 = [];
            var gxsldzkzjSeries2 = [];
            $.each(result, function (key, values) {
                gxsldzkzjSeries1.push(values[0]);
                gxsldzkzjSeries2.push(values[1]);
            });
            var gxsldzkzj = echarts.init(document.getElementById('gxsldzkzj'));
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
                        data: gxsldzkzjSeries1,
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
                        name:'人数',
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
                        name: '脱贫人口总计',
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
                                    color: ['rgba(251,255,150,0.3)','rgba(34,238,198,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#fbff96'
                                }, {
                                    offset: 1,
                                    color: '#22eec6'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: gxsldzkzjSeries2
                    }
                ]
            };
            gxsldzkzj.setOption(option);
        },
        loadchart33Callback: function (result) {
            var fgzjSeries1 = [];
            var fgzjSeries2 = [];
            $.each(result, function (key, values) {
                fgzjSeries1.push(values[0]);
                fgzjSeries2.push(values[1]);
            });
            var fgzj = echarts.init(document.getElementById('fgzj'));
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
                        data: fgzjSeries1,
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
                        name:'人数',
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
                        name: '总计',
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
                                    color: ['rgba(48,175,255,0.3)', 'rgba(215,238,99,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#30afff'
                                }, {
                                    offset: 1,
                                    color: '#d7ee63'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: fgzjSeries2
                    }
                ]
            };
            fgzj.setOption(option);
        },
        loadchart34Callback: function (result) {
            var tpcsqkSeries1 = [];
            var tpcsqkSeries2 = [];
            var tpcsqkSeries3 = [];
            $.each(result, function (key, values) {
                tpcsqkSeries1.push(values[0]);
                tpcsqkSeries2.push(values[1]);
                tpcsqkSeries3.push(values[2]);
            });
            var tpcsqk = echarts.init(document.getElementById('tpcsqk'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['脱贫户数', '有脱贫措施户数'],
                    y: '10',
                    left: '100',
                    textStyle: {
                        color: '#fff',
                    },
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: tpcsqkSeries1,
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
                        name: '脱贫户数',
                        type: 'bar',
                        data: tpcsqkSeries2,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        itemStyle: {
                            normal: {
                                color: '#9bfafe',
                                barBorderRadius:[4,4,2,2]
                            }
                        }
                    },
                    {
                        name: '有脱贫措施户数',
                        type: 'bar',
                        data: tpcsqkSeries3,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        itemStyle: {
                            normal: {
                                color: '#fe74fd',
                                barBorderRadius:[4,4,2,2]
                            }
                        }
                    }
                ]
            };
            tpcsqk.setOption(option);
        },

    }
};


$(function () {
    service.init();
	//	页面跳转
	document.onkeydown=function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==40){ //下
			window.location.href="./pageThree.html";
		}
		if(e && e.keyCode==38){ // 上
			window.location.href="./pageOne.html";
		}
	};
});