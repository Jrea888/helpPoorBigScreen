//ajax模块化
var service = {
    init: function () {
        this.loadchart1();
        this.loadchart2();
        this.loadchart3();
        this.loadchart4();
        this.loadchart5();
        this.loadchart6();
        this.loadchart7();
        this.loadchart8();
        this.loadchart9();
        this.loadchart11();
        // this.loadchart17();
        this.loadchart19();
        this.loadchart20();
        this.loadchart21();
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
    },

    loadchart1: function () {
        var url = "pageSix4.json";
        this.ajax(url, this.callback.loadchart1Callback);
    },
    loadchart2: function () {
        var url = "pageSix5.json";
        this.ajax(url, this.callback.loadchart2Callback);
    },

    loadchart3: function () {
        var url = "pageSix6.json";
        this.ajax(url, this.callback.loadchart3Callback);
    },
    loadchart4: function () {
        var url = "pageSix7.json";
        this.ajax(url, this.callback.loadchart4Callback);
    },
    loadchart5: function () {
        var url = "pageSeven1.json";
        this.ajax(url, this.callback.loadchart5Callback);
    },
    loadchart6: function () {
        var url = "pageSeven2.json";
        this.ajax(url, this.callback.loadchart6Callback);
    },
    loadchart7: function () {
        var url = "pageSeven3.json";
        this.ajax(url, this.callback.loadchart7Callback);
    },
    loadchart8: function () {
        var url = "pageSeven4.json";
        this.ajax(url, this.callback.loadchart8Callback);
    },
    loadchart9: function () {
        var url = "pageSeven5.json";
        this.ajax(url, this.callback.loadchart9Callback);
    },
    loadchart11: function () {
        var url = "pageEight2.json";
        this.ajax(url, this.callback.loadchart11Callback);
    },
    // loadchart17: function () {
    //     var url = "pageEight8.json";
    //     this.ajax(url, this.callback.loadchart17Callback);
    // },
    loadchart18: function () {
        var url = "pageEight9.json";
        this.ajax(url, this.callback.loadchart18Callback);
    },
    loadchart19: function () {
        var url = "pageSix19.json";
        this.ajax(url, this.callback.loadchart19Callback);
    },
    loadchart20: function () {
        var url = "pageSix20.json";
        this.ajax(url, this.callback.loadchart20Callback);
    },
    loadchart21: function () {
        var url = "pageSix8.json";
        this.ajax(url, this.callback.loadchart21Callback);
    },
    loadchart22: function () {
        var url = "pageSix9.json";
        this.ajax(url, this.callback.loadchart22Callback);
    },
    loadchart23: function () {
        var url = "pageSix10.json";
        this.ajax(url, this.callback.loadchart23Callback);
    },
    loadchart24: function () {
        var url = "pageSix11.json";
        this.ajax(url, this.callback.loadchart24Callback);
    },
    loadchart25: function () {
        var url = "pageSix3.json";
        this.ajax(url, this.callback.loadchart25Callback);
    },
    loadchart26: function () {
        var url = "pageSix1.json";
        this.ajax(url, this.callback.loadchart26Callback);
    },
    loadchart27: function () {
        var url = "pageSix2.json";
        this.ajax(url, this.callback.loadchart27Callback);
    },
    loadchart28: function () {
        var url = "pageSeven6.json";
        this.ajax(url, this.callback.loadchart28Callback);
    },

    loadchart29: function () {
        var url = "pageSeven7.json";
        this.ajax(url, this.callback.loadchart29Callback);
    },
    loadchart30: function () {
        var url = "pageSeven8.json";
        this.ajax(url, this.callback.loadchart30Callback);
    },
    loadchart31: function () {
        var url = "pageSeven9.json";
        this.ajax(url, this.callback.loadchart31Callback);
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
            var dataywnyymc = [];
            var dataYwnyyfx = [];
            $.each(result, function (key, values) {
                dataywnyymc.push(values[0]);
                dataYwnyyfx.push(values[1]);
            });
            var chart3 = echarts.init(document.getElementById('ywnyyfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
            var option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: dataywnyymc,
                    orient: 'horizontal',
                    x: 'center',
                    textStyle: {
                        color: '#fff',
                    },
                    left: 20,
                },
                series: [
                    {
                        type: 'pie',
                        radius: '60%',
                        name: ' 2015年新识别贫困户致贫原因分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYwnyyfx[a], name: dataywnyymc[a]},
                            {value: dataYwnyyfx[b], name: dataywnyymc[b]},
                            {value: dataYwnyyfx[c], name: dataywnyymc[c]},
                            {value: dataYwnyyfx[d], name: dataywnyymc[d]},
                            {value: dataYwnyyfx[e], name: dataywnyymc[e]},
                            {value: dataYwnyyfx[f], name: dataywnyymc[f]},
                            {value: dataYwnyyfx[g], name: dataywnyymc[g]},
                            {value: dataYwnyyfx[h], name: dataywnyymc[h]},
                            {value: dataYwnyyfx[i], name: dataywnyymc[i]},
                            {value: dataYwnyyfx[j], name: dataywnyymc[j]},
                            {value: dataYwnyyfx[k], name: dataywnyymc[k]},
                            {value: dataYwnyyfx[l], name: dataywnyymc[l]},
                            {value: dataYwnyyfx[m], name: dataywnyymc[m]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#FF695C', '#FFEF5A', '#86FF38', '#4FFFEC', '#179BFF',
                                        '#5AD97D', '#F39BFF', '#8FFEFF', '#66E385', '#d96d00',
                                        '#f98897', '#8cd7ff'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart3.setOption(option3);
        },
        loadchart2Callback: function (result) {
            var dataylnyymc = [];
            var dataYlnyyfx = [];
            $.each(result, function (key, values) {
                dataylnyymc.push(values[0]);
                dataYlnyyfx.push(values[1]);
            });
            console.log(dataYlnyyfx);
            var chart3 = echarts.init(document.getElementById('ylnyyfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
            var option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: dataylnyymc,
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
                        name: ' 2016年新识别贫困户致贫原因分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYlnyyfx[a], name: dataylnyymc[a]},
                            {value: dataYlnyyfx[b], name: dataylnyymc[b]},
                            {value: dataYlnyyfx[c], name: dataylnyymc[c]},
                            {value: dataYlnyyfx[d], name: dataylnyymc[d]},
                            {value: dataYlnyyfx[e], name: dataylnyymc[e]},
                            {value: dataYlnyyfx[f], name: dataylnyymc[f]},
                            {value: dataYlnyyfx[g], name: dataylnyymc[g]},
                            {value: dataYlnyyfx[h], name: dataylnyymc[h]},
                            {value: dataYlnyyfx[i], name: dataylnyymc[i]},
                            {value: dataYlnyyfx[j], name: dataylnyymc[j]},
                            {value: dataYlnyyfx[k], name: dataylnyymc[k]},
                            {value: dataYlnyyfx[l], name: dataylnyymc[l]},
                            {value: dataYlnyyfx[m], name: dataylnyymc[m]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#62FFCD', '#FFB156', '#FF6274', '#7E9EFF', '#BE62FF',
                                        '#F9F893', '#E7E542', '#8eee7d', '#8FD5F9', '#00f9cb',
                                        '#01b7f9', '#2db0ff'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart3.setOption(option3);
        },
        loadchart3Callback: function (result) {
            var datayqnyymc = [];
            var dataYqnyyfx = [];
            $.each(result, function (key, values) {
                datayqnyymc.push(values[0]);
                dataYqnyyfx.push(values[1]);
            });
            var chart3 = echarts.init(document.getElementById('yqnyyfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
            var option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: datayqnyymc,
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
                        name:'2017年新识别贫困户致贫原因分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYqnyyfx[a], name: datayqnyymc[a]},
                            {value: dataYqnyyfx[b], name: datayqnyymc[b]},
                            {value: dataYqnyyfx[c], name: datayqnyymc[c]},
                            {value: dataYqnyyfx[d], name: datayqnyymc[d]},
                            {value: dataYqnyyfx[e], name: datayqnyymc[e]},
                            {value: dataYqnyyfx[f], name: datayqnyymc[f]},
                            {value: dataYqnyyfx[g], name: datayqnyymc[g]},
                            {value: dataYqnyyfx[h], name: datayqnyymc[h]},
                            {value: dataYqnyyfx[i], name: datayqnyymc[i]},
                            {value: dataYqnyyfx[j], name: datayqnyymc[j]},
                            {value: dataYqnyyfx[k], name: datayqnyymc[k]},
                            {value: dataYqnyyfx[l], name: datayqnyymc[l]},
                            {value: dataYqnyyfx[m], name: datayqnyymc[m]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#ad00e5', '#90caee', '#FFEF5A', '#ED5BEA', '#F6ED2A',
                                        '#F39BFF', '#FFB156', '#00eead', '#06f94c', '#0af900',
                                        '#a4f907', '#fff608'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart3.setOption(option3);
        },
        loadchart4Callback: function (result) {
            var dataybnyymc = [];
            var dataYbnyyfx = [];
            $.each(result, function (key, values) {
                dataybnyymc.push(values[0]);
                dataYbnyyfx.push(values[1]);
            });
            var chart3 = echarts.init(document.getElementById('ybnyyfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
            var option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: dataybnyymc,
                    orient: 'horizontal',
                    x: 'center',
                    textStyle: {
                        color: '#fff',
                    }
                },
                series: [
                    {
                        type: 'pie',
                        name:'2018年新识别贫困户致贫原因分析',
                        radius: '60%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYbnyyfx[a], name: dataybnyymc[a]},
                            {value: dataYbnyyfx[b], name: dataybnyymc[b]},
                            {value: dataYbnyyfx[c], name: dataybnyymc[c]},
                            {value: dataYbnyyfx[d], name: dataybnyymc[d]},
                            {value: dataYbnyyfx[e], name: dataybnyymc[e]},
                            {value: dataYbnyyfx[f], name: dataybnyymc[f]},
                            {value: dataYbnyyfx[g], name: dataybnyymc[g]},
                            {value: dataYbnyyfx[h], name: dataybnyymc[h]},
                            {value: dataYbnyyfx[i], name: dataybnyymc[i]},
                            {value: dataYbnyyfx[j], name: dataybnyymc[j]},
                            {value: dataYbnyyfx[k], name: dataybnyymc[k]},
                            {value: dataYbnyyfx[l], name: dataybnyymc[l]},
                            {value: dataYbnyyfx[m], name: dataybnyymc[m]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#66e385', '#66E385', '#FF6274', '#00cbf9', '#00f99a',
                                        '#08f919', '#FFA5E9', '#eea16d', '#f9a408', '#f97300',
                                        '#48f98c', '#bd88ff'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart3.setOption(option3);
        },
        loadchart5Callback: function (result) {
            var datarlfxxq = [];
            var dataCcmsl = [];
            var dataGcfsl = [];
            var dataMtsl = [];
            var dataQtsl = [];
            var dataQjnysl = [];
            $.each(result, function (key, values) {
                datarlfxxq.push(values[0])
                dataCcmsl.push(values[1]);
                dataGcfsl.push(values[2]);
                dataMtsl.push(values[3]);
                dataQtsl.push(values[4]);
                dataQjnysl.push(values[5]);
            });
            var chart1 = echarts.init(document.getElementById('jdlkrlfx'));
            var option1 = {
                color: ['#48A7FF', '#CE4C0F', '#969696', '#fff862', '#2e19e1'],
                legend: {
                    data: ['柴草', '干畜粪', '煤炭', '其他', '清洁能源'],
                    y: '5',
                    left: '10',
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
                        data: datarlfxxq,
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
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
                            }
                        },
                        min: 0,
                        max: 20000,
                        interval: 2000,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '柴草',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        data: dataCcmsl
                    },
                    {
                        name: '干畜粪',
                        type: 'bar',
                        barWidth: 10,
                        data: dataGcfsl
                    },
                    {
                        name: '煤炭',
                        type: 'bar',
                        barWidth: 10,
                        data: dataMtsl
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 10,
                        data: dataQtsl
                    },
                    {
                        name: '清洁能源',
                        type: 'bar',
                        barWidth: 10,
                        data: dataQjnysl
                    },

                ]
            };
            chart1.setOption(option1);
        },
        loadchart6Callback: function (result) {
            var datarlmc = [];
            var dataRlfxfb = [];
            $.each(result, function (key, values) {
                datarlmc.push(values[0]);
                dataRlfxfb.push(values[1]);
            });
            console.log(datarlmc);
            var chart2 = echarts.init(document.getElementById('jdlkrllxfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4;
            var option2 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '15',
                    data: datarlmc,
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
                        name: '建档立卡户主要燃料类型分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataRlfxfb[a], name: datarlmc[a]},
                            {value: dataRlfxfb[b], name: datarlmc[b]},
                            {value: dataRlfxfb[c], name: datarlmc[c]},
                            {value: dataRlfxfb[d], name: datarlmc[d]},
                            {value: dataRlfxfb[e], name: datarlmc[e]},

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
                                        '#FF6274', '#FFB156', '#7E9EFF', '#BE62FF', '#62FFCD'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart2.setOption(option2);
        },
        loadchart7Callback: function (result) {
            var dataqsrlmc = [];
            var dataRlqsfxfb = [];
            $.each(result, function (key, values) {
                dataqsrlmc.push(values[0]);
                dataRlqsfxfb.push(values[1]);
            });
            console.log(dataRlqsfxfb);
            var chart3 = echarts.init(document.getElementById('sypkhrlfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4;
            var option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '15',
                    data: dataqsrlmc,
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
                        name: '全市2018年剩余贫困户主要燃料占比',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataRlqsfxfb[a], name: dataqsrlmc[a]},
                            {value: dataRlqsfxfb[b], name: dataqsrlmc[b]},
                            {value: dataRlqsfxfb[c], name: dataqsrlmc[c]},
                            {value: dataRlqsfxfb[d], name: dataqsrlmc[d]},
                            {value: dataRlqsfxfb[e], name: dataqsrlmc[e]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#62FFCD', '#FFB156', '#FF6274', '#7E9EFF', '#BE62FF'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart3.setOption(option3);
        },
        loadchart8Callback: function (result) {
            var dataytprlmc = [];
            var dataRlytpfxfb = [];
            $.each(result, function (key, values) {
                dataytprlmc.push(values[0]);
                dataRlytpfxfb.push(values[1]);
            });
            var chart3 = echarts.init(document.getElementById('ytprlfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4;
            var option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '15',
                    data: dataytprlmc,
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
                        name: '全市2018年已脱贫户主要燃料类型分析',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataRlytpfxfb[a], name: dataytprlmc[a]},
                            {value: dataRlytpfxfb[b], name: dataytprlmc[b]},
                            {value: dataRlytpfxfb[c], name: dataytprlmc[c]},
                            {value: dataRlytpfxfb[d], name: dataytprlmc[d]},
                            {value: dataRlytpfxfb[e], name: dataytprlmc[e]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#BE62FF', '#7E9EFF', '#FF6274', '#FFB156', '#62FFCD'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart3.setOption(option3);
        },
        loadchart9Callback: function (result) {
            var dataqjnynf = [];
            var dataQjnyzb = [];
            $.each(result, function (key, values) {
                dataqjnynf.push(values[0])
                dataQjnyzb.push(values[1]);
            });
            var chart5 = echarts.init(document.getElementById('qjnyzbfx'));
            var option5 = {
                color: ['#4689ff'],
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

                        data: dataqjnynf,
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
                        name: '清洁能源占比',
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
                        data: dataQjnyzb
                    },
                ]
            };
            chart5.setOption(option5);
        },




        // loadchart17Callback: function (result) {
        //     var datayczjzb = [];
        //     var dataYczpzb = [];
        //     $.each(result, function (key, values) {
        //
        //         datayczjzb.push(values[0])
        //         dataYczpzb.push(values[1]);
        //
        //     });
        //     console.log(dataYczpzb)
        //     var chart8 = echarts.init(document.getElementById('yczpzb'));
        //     var option8 = {
        //         color: ['#faff4d'],
        //         title: {
        //             text: '全市未脱贫户因病致贫占比变化情况',
        //             x: 'center',
        //             textStyle: {
        //                 color: '#FFF',
        //                 top: '10%'
        //             }
        //         },
        //
        //         tooltip: {
        //             trigger: 'item',
        //             formatter: '{a0}:{c0}%',
        //             axisPointer: {
        //                 type: 'shadow'
        //             }
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '0%',
        //             bottom: '10%',
        //             top: '10%',
        //             containLabel: true
        //         },
        //         calculable: true,
        //         xAxis: [
        //             {
        //                 type: 'category',
        //
        //                 data: datayczjzb,
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
        //                 axisLabel: {
        //                     formatter: '{value}%'
        //
        //                 },
        //
        //                 min: 0,
        //                 max: 40,
        //                 interval: 5,
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFF',
        //                     }
        //                 }
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
        //                         lineStyle: {
        //                             width: 3// 0.1的线条是非常细的了
        //                         }
        //                     }
        //                 },
        //                 symbolSize: 6,
        //                 data: dataYczpzb
        //             },
        //
        //         ]
        //     };
        //     chart8.setOption(option8);
        // },
        loadchart19Callback: function (result) {
            var gxspkfbSeries1 = [];
            var gxspkfbSeries2 = [];
            var gxspkfbSeries3 = [];
            $.each(result, function (key, values) {
                gxspkfbSeries1.push(values[0]);
                gxspkfbSeries2.push(values[1]);
                gxspkfbSeries3.push(values[2]);
            });
            var gxspkfb = echarts.init(document.getElementById('gxspkfb'));
            var option = {
                color: ['#63EE4C', '#BE62FF'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['人数', '总户数'],
                    y: '10',
                    left: '60',
                    textStyle: {
                        color: '#fff',
                    },
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: gxspkfbSeries1,
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
                        name:'人数',
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
                        name: '人数',
                        type: 'bar',
                        data: gxspkfbSeries2,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff'
                            }
                        },
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },
                    {
                        name: '总户数',
                        type: 'bar',
                        data: gxspkfbSeries3,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff'
                            }
                        },
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    }
                ]
            };
            gxspkfb.setOption(option);
        },
        loadchart20Callback: function (result) {
            var datagxsfphszb1 = [];
            var datagxsfphszb2 = [];
            $.each(result, function (key, values) {
                datagxsfphszb1.push(values[0]);
                datagxsfphszb2.push(values[1]);
            });
            var gxsfphszb = echarts.init(document.getElementById('gxsfphszb'));
            var a = 0, b = 1, c = 2, d = 3;
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{d}%"
                },
                legend: {
                    bottom: '15',
                    data: datagxsfphszb1,
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
                        name: ' 2016年新识别贫困户致贫原因分析',
                        radius: '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: datagxsfphszb2[a], name: datagxsfphszb1[a]},
                            {value: datagxsfphszb2[b], name: datagxsfphszb1[b]},
                            {value: datagxsfphszb2[c], name: datagxsfphszb1[c]},
                            {value: datagxsfphszb2[d], name: datagxsfphszb1[d]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [
                                        '#8639B8', '#FE5F5F', '#E7E542', '#6DD18D',
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            gxsfphszb.setOption(option);
        },
        loadchart21Callback: function (result) {
            var dataybnxq = [];
            var dataYbnxsbrs = [];
            var dataYbnxsbhs = [];
            $.each(result, function (key, values) {
                dataybnxq.push(values[0]);
                dataYbnxsbrs.push(values[1]);
                dataYbnxsbhs.push(values[2]);
            });
            console.log(dataybnxq);
            var chart8 = echarts.init(document.getElementById('ybxsbpkfb'));
            var option8 = {
                color: ['#62FFCD', '#63EE4C'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['新识别贫困人数', '新识别贫困户数'],
                    y: 5,
                    left: 60,
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
                        data: dataybnxq,
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
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '新识别贫困人数',
                        smooth: true,
                        type: 'bar',
                        symbolSize: 10,
                        data: dataYbnxsbrs,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff'
                            }
                        },
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },
                    {
                        name: '新识别贫困户数',
                        smooth: true,
                        type: 'bar',
                        symbolSize: 10,
                        data: dataYbnxsbhs,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff'
                            }
                        },
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            chart8.setOption(option8);
        },
        loadchart22Callback: function (result) {
            var dataxsbpkrs = [];
            var dataXsbrszb = [];
            $.each(result, function (key, values) {
                dataxsbpkrs.push(values[0]);
                dataXsbrszb.push(values[1]);
            });
            console.log(dataxsbpkrs);
            var chart9 = echarts.init(document.getElementById('xsbpkrszb'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
            var option9 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: dataxsbpkrs,
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
                        name: '新识别贫困人数占比',
                        center: ['50%', '45%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataXsbrszb[a], name: dataxsbpkrs[a]},
                            {value: dataXsbrszb[b], name: dataxsbpkrs[b]},
                            {value: dataXsbrszb[c], name: dataxsbpkrs[c]},
                            {value: dataXsbrszb[d], name: dataxsbpkrs[d]},
                            {value: dataXsbrszb[e], name: dataxsbpkrs[e]},
                            {value: dataXsbrszb[f], name: dataxsbpkrs[f]},
                            {value: dataXsbrszb[g], name: dataxsbpkrs[g]},
                            {value: dataXsbrszb[h], name: dataxsbpkrs[h]},
                            {value: dataXsbrszb[i], name: dataxsbpkrs[i]},
                            {value: dataXsbrszb[j], name: dataxsbpkrs[j]},
                            {value: dataXsbrszb[k], name: dataxsbpkrs[k]},
                            {value: dataXsbrszb[l], name: dataxsbpkrs[l]},
                            {value: dataXsbrszb[m], name: dataxsbpkrs[m]},


                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {d}%'
                                },
                                color: function (params) {
                                    var colorList = [
                                        '#62FFCD', '#FFB156', '#FF6274', '#7E9EFF', '#BE62FF', '#49fab1', '#63ee4c', '#b2f996',
                                        '#e7f98f', '#faed6c', '#ee9267', '#f98673', '#f95f6e'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart9.setOption(option9);
        },
        loadchart23Callback: function (result) {
            var dataxsbpkhs = [];
            var dataXsbhszb = [];
            $.each(result, function (key, values) {
                dataxsbpkhs.push(values[0]);
                dataXsbhszb.push(values[1]);
            });
            console.log(dataXsbhszb);
            var chart10 = echarts.init(document.getElementById('xsbpkhszb'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
            var option10 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: dataxsbpkhs,
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
                        name: '新识别贫困户数占比',
                        center: ['50%', '45%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataXsbhszb[a], name: dataxsbpkhs[a]},
                            {value: dataXsbhszb[b], name: dataxsbpkhs[b]},
                            {value: dataXsbhszb[c], name: dataxsbpkhs[c]},
                            {value: dataXsbhszb[d], name: dataxsbpkhs[d]},
                            {value: dataXsbhszb[e], name: dataxsbpkhs[e]},
                            {value: dataXsbhszb[f], name: dataxsbpkhs[f]},
                            {value: dataXsbhszb[g], name: dataxsbpkhs[g]},
                            {value: dataXsbhszb[h], name: dataxsbpkhs[h]},
                            {value: dataXsbhszb[i], name: dataxsbpkhs[i]},
                            {value: dataXsbhszb[j], name: dataxsbpkhs[j]},
                            {value: dataXsbhszb[k], name: dataxsbpkhs[k]},
                            {value: dataXsbhszb[l], name: dataxsbpkhs[l]},
                            {value: dataXsbhszb[m], name: dataxsbpkhs[m]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {d}%'
                                },
                                color: function (params) {
                                    var colorList = [
                                        '#BE62FF', '#7E9EFF', '#FF6274', '#FFB156', '#62FFCD', '#49fab1', '#63ee4c', '#b2f996',
                                        '#e7f98f', '#faed6c', '#ee9267', '#f98673', '#f95f6e'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart10.setOption(option10);
        },
        loadchart24Callback: function (result) {
            var dataxsbnf = [];
            var dataBzqk = [];
            var dataChqk = [];
            var dataJyqk = [];
            var dataLqqk = [];
            var dataQxqk = [];
            var dataSyqk = [];
            var dataWgqk = [];
            var dataXpqk = [];
            var dataXyqk = [];
            var dataYsqk = [];
            var dataCwqk = [];
            $.each(result, function (key, values) {
                dataxsbnf.push(values[0]);
                dataBzqk.push(values[1]);
                dataChqk.push(values[2]);
                dataJyqk.push(values[3]);
                dataLqqk.push(values[4]);
                dataQxqk.push(values[5]);
                dataSyqk.push(values[6]);
                dataWgqk.push(values[7]);
                dataXpqk.push(values[8]);
                dataXyqk.push(values[9]);
                dataYsqk.push(values[10]);
                dataCwqk.push(values[11]);
            });
            var chart11 = echarts.init(document.getElementById('ysybxsbfb'));
            var option11 = {
                color: ['#1702ff', '#00ecff', '#00ff98', '#04ff0f', '#bbff07', '#ffef00', '#ffa803', '#ff5108', '#ff1e02', '#16ff16', '#ab14ff'],
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
                        data: dataxsbnf,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['彬州市', '淳化县', '泾阳县', '礼泉县', '乾县', '三原县', '武功县', '兴平市', '旬邑县', '永寿县', '长武县'],

                    y: 5,
                    left: 60,
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
                        name: '彬州市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataBzqk
                    },
                    {
                        name: '淳化县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataChqk
                    },
                    {
                        name: '泾阳县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataJyqk
                    },
                    {
                        name: '礼泉县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataLqqk
                    },
                    {
                        name: '乾县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataQxqk
                    },
                    {
                        name: '三原县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataSyqk
                    },
                    {
                        name: '武功县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataWgqk
                    },
                    {
                        name: '兴平市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataXpqk
                    },
                    {
                        name: '旬邑县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataXyqk
                    },
                    {
                        name: '永寿县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataYsqk
                    },
                    {
                        name: '长武县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataCwqk
                    },

                ]
            };
            chart11.setOption(option11);
        },
        loadchart25Callback: function (result) {
            var dataysnyymc = [];
            var dataYsnyyfx = [];
            $.each(result, function (key, values) {
                dataysnyymc.push(values[0]);
                dataYsnyyfx.push(values[1]);
            });
            console.log(dataysnyymc);
            var chart3 = echarts.init(document.getElementById('ysnyyfx'));
            var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
            var option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                legend: {
                    bottom: '30',
                    data: dataysnyymc,
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
                        name: ' 2014年新识别贫困户致贫原因分析',
                        center: ['50%', '45%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataYsnyyfx[a], name: dataysnyymc[a]},
                            {value: dataYsnyyfx[b], name: dataysnyymc[b]},
                            {value: dataYsnyyfx[c], name: dataysnyymc[c]},
                            {value: dataYsnyyfx[d], name: dataysnyymc[d]},
                            {value: dataYsnyyfx[e], name: dataysnyymc[e]},
                            {value: dataYsnyyfx[f], name: dataysnyymc[f]},
                            {value: dataYsnyyfx[g], name: dataysnyymc[g]},
                            {value: dataYsnyyfx[h], name: dataysnyymc[h]},
                            {value: dataYsnyyfx[i], name: dataysnyymc[i]},
                            {value: dataYsnyyfx[j], name: dataysnyymc[j]},
                            {value: dataYsnyyfx[k], name: dataysnyymc[k]},
                            {value: dataYsnyyfx[l], name: dataysnyymc[l]},
                            {value: dataYsnyyfx[m], name: dataysnyymc[m]},
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b}{d}%'
                                },
                                labelLine: {show: true},
                                color: function (params) {
                                    var colorList = [

                                        '#08f919', '#FFA5E9', '#eea16d', '#f9a408', '#f97300',
                                        '#E7E542', '#66E385', '#FF6274', '#00cbf9', '#00f99a',
                                        '#FFB156', '#BE62FF'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart3.setOption(option3);
        },
        loadchart26Callback: function (result) {
            var dataxsbpkhnf = [];
            var dataXsbpkhsj = [];
            $.each(result, function (key, values) {
                dataxsbpkhnf.push(values[0]);
                dataXsbpkhsj.push(values[1]);
            });
            var chart1 = echarts.init(document.getElementById('xsbpkhtj'));
            var option1 = {
                color: ['#4689ff'],
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
                        data: dataxsbpkhnf,
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
                        name: '新识别贫困户数',
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
                                    color: ['rgba(134,255,234,0.3)','rgba(238,130,120,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#86fff2'
                                }, {
                                    offset: 1,
                                    color: '#ee8278'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: dataXsbpkhsj
                    },

                ]
            };
            chart1.setOption(option1);
        },
        loadchart27Callback: function (result) {
            var dataldlnf = [];
            var dataJnldl = [];
            var dataPtldl = [];
            var dataRldbld = [];
            var dataSsldl = [];
            var dataWldl = [];
            var dataQtldl = [];
            $.each(result, function (key, values) {
                dataldlnf.push(values[0]);
                dataJnldl.push(values[1]);
                dataPtldl.push(values[2]);
                dataRldbld.push(values[3]);
                dataSsldl.push(values[4]);
                dataWldl.push(values[5]);
                dataQtldl.push(values[6]);
            });
            console.log(dataJnldl);
            var chart2 = echarts.init(document.getElementById('xsbldlfx'));
            var option2 = {
                color: ['#FF6274', '#FFB156', '#62FFCD', '#7E9EFF', '#BE62FF', '#05D5FF'],
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
                        data: dataldlnf,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['技能劳动力', '普通劳动力', '弱劳动力或半劳动力', '丧失劳动力', '无劳动力', '其他'],
                    orient: 'horizontal',
                    left: 10,
                    top: 5,
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
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2
                                },
                            }
                        },
                        symbolSize: 10,
                        data: dataJnldl
                    },
                    {
                        name: '普通劳动力',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2
                                },
                            }
                        },
                        symbolSize: 10,
                        data: dataPtldl
                    },
                    {
                        name: '弱劳动力或半劳动力',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2
                                },
                            }
                        },
                        symbolSize: 10,
                        data: dataRldbld
                    },
                    {
                        name: '丧失劳动力',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2
                                },
                            }
                        },
                        symbolSize: 10,
                        data: dataSsldl
                    },
                    {
                        name: '无劳动力',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2
                                },
                            }
                        },
                        symbolSize: 10,
                        data: dataWldl
                    },
                    {
                        name: '其他',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2
                                },
                            }
                        },
                        symbolSize: 10,
                        data: dataQtldl
                    },

                ]
            };
            chart2.setOption(option2);
        },
        loadchart28Callback: function (result) {
            var dataybsyrlxq = [];
            var dataCcybsyrl = [];
            var dataGclybsyrl = [];
            var dataMtybsyrl = [];
            var dataQtybsyrl = [];
            var dataQjnyybsyrl = [];


            $.each(result, function (key, values) {

                dataybsyrlxq.push(values[0])
                dataCcybsyrl.push(values[1]);
                dataGclybsyrl.push(values[2]);
                dataMtybsyrl.push(values[3]);
                dataQtybsyrl.push(values[4]);
                dataQjnyybsyrl.push(values[5]);

            });
            console.log(dataCcybsyrl)
            var chart6 = echarts.init(document.getElementById('sypkybnlfx'));
            var option6 = {
                color: ['#5655ff', '#8fff71', '#97fff5', '#fffa72', '#ff9e50'],

                legend: {
                    data: ['柴草', '干畜粪', '煤炭', '其他', '清洁能源'],
                    y: '5',
                    left: '10',
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
                        data: dataybsyrlxq,
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
                        name: '柴草',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        data: dataCcybsyrl,
                    },
                    {
                        name: '干畜粪',
                        type: 'bar',
                        barWidth: 10,
                        data: dataGclybsyrl,
                    },
                    {
                        name: '煤炭',
                        type: 'bar',
                        barWidth: 10,
                        data: dataMtybsyrl,
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 10,
                        data: dataQtybsyrl,
                    },
                    {
                        name: '清洁能源',
                        type: 'bar',
                        barWidth: 10,
                        data: dataQjnyybsyrl,
                    },

                ]
            };
            chart6.setOption(option6);
        },
        loadchart29Callback: function (result) {
            var dataybytprlxq = [];
            var dataCcybytprl = [];
            var dataGclybytprl = [];
            var dataMtybytprl = [];
            var dataQtybytprl = [];
            var dataQjnyybytprl = [];


            $.each(result, function (key, values) {

                dataybytprlxq.push(values[0])
                dataCcybytprl.push(values[1]);
                dataGclybytprl.push(values[2]);
                dataMtybytprl.push(values[3]);
                dataQtybytprl.push(values[4]);
                dataQjnyybytprl.push(values[5]);

            });
            console.log(dataQjnyybytprl)
            var chart7 = echarts.init(document.getElementById('ytpybnlfx'));
            var option7 = {
                color: ['#5655ff', '#8fff71', '#97fff5', '#fffa72', '#ff9e50'],

                legend: {
                    data: ['柴草', '干畜粪', '煤炭', '其他', '清洁能源'],
                    y: '5',
                    left: '10',
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
                        data: dataybytprlxq,
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
                        name: '柴草',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        data: dataCcybytprl,
                    },
                    {
                        name: '干畜粪',
                        type: 'bar',
                        barWidth: 10,
                        data: dataGclybytprl,
                    },
                    {
                        name: '煤炭',
                        type: 'bar',
                        barWidth: 10,
                        data: dataMtybytprl,
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 10,
                        data: dataQtybytprl,
                    },
                    {
                        name: '清洁能源',
                        type: 'bar',
                        barWidth: 10,
                        data: dataQjnyybytprl,
                    },

                ]
            };
            chart7.setOption(option7);
        },
        loadchart30Callback: function (result) {
            var dataysrllxmc = [];
            var dataYsrllxzb = [];
            $.each(result, function (key, values) {
                dataysrllxmc.push(values[0]);
                dataYsrllxzb.push(values[1]);
            });
            var chart8 = echarts.init(document.getElementById('ysrllxzb'));
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
                        name: '2014年建档立卡户主要燃料类型占比分析',
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
                                        '#FFB156', '#FF6274', '#BE62FF', '#7E9EFF', '#62FFCD'
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
        loadchart31Callback: function (result) {
            var dataysrllxmc = [];
            var dataYsrllxzb = [];
            $.each(result, function (key, values) {
                dataysrllxmc.push(values[0]);
                dataYsrllxzb.push(values[1]);
            });
            var chart8 = echarts.init(document.getElementById('ysrllxzb2015'));
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
                        name: '2015年建档立卡户主要燃料类型占比分析',
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

    }
};


$(function () {
    service.init();
    //	页面跳转
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==40){ //下
            window.location.href="./pageFour.html";
        }
        if(e && e.keyCode==38){ // 上
            window.location.href="./pageTwo.html";
        }
    };
});