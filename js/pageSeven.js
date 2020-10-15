//ajax模块化
var service = {
    init: function () {
        this.loadchart18();
        this.loadchart19();
        this.loadchart20();
        this.loadchart21();
        this.loadchart22();
        this.loadchart25();
        this.loadchart24();
        this.loadchart26();
        this.loadchart27();
        this.loadchart28();
        this.loadchart29();
        this.loadchart30();
        this.loadchart31();
        this.loadchart32();
        this.loadchart33();
    },
    loadchart18: function () {
        var url = "pageEight15.json";
        this.ajax(url, this.callback.loadchart18Callback);
    },
    loadchart19: function() {
        var url = "pageEight16.json";
        this.ajax(url, this.callback.loadchart19Callback);
    },
    loadchart20: function() {
        var url = "pageEight17.json";
        this.ajax(url, this.callback.loadchart20Callback);
    },
    loadchart21: function() {
        var url = "pageEight18.json";
        this.ajax(url, this.callback.loadchart21Callback);
    },
    loadchart22: function() {
        var url = "pageEight19.json";
        this.ajax(url, this.callback.loadchart22Callback);
    },
    loadchart25: function() {
        var url = "pageEight22.json";
        this.ajax(url, this.callback.loadchart25Callback);
    },
    loadchart24: function() {
        var url = "pageEight21.json";
        this.ajax(url, this.callback.loadchart24Callback);
    },
    loadchart26: function() {
        var url = "pageEight23.json";
        this.ajax(url, this.callback.loadchart26Callback);
    },
    loadchart27: function() {
        var url = "pageEight24.json";
        this.ajax(url, this.callback.loadchart27Callback);
    },
    loadchart28: function () {
        var url = "pageTen1.json";
        this.ajax(url, this.callback.loadchart28Callback);
    },
    loadchart29: function () {
        var url = "pageTen3.json";
        this.ajax(url, this.callback.loadchart29Callback);
    },
    loadchart30: function () {
        var url = "pageTen2.json";
        this.ajax(url, this.callback.loadchart30Callback);
    },
    loadchart31: function () {
        var url = "pageTen4.json";
        this.ajax(url, this.callback.loadchart31Callback);
    },
    loadchart32: function () {
        var url = "pageTen5.json";
        this.ajax(url, this.callback.loadchart32Callback);
    },
    loadchart33: function () {
        var url = "pageTen6.json";
        this.ajax(url, this.callback.loadchart33Callback);
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
        loadchart18Callback: function (result) {
            var datajzxyhzzj1 = [];
            var datajzxyhzzj2 = [];
            var datajzxyhzzj3 = [];
            var datajzxyhzzj4 = [];
            var datajzxyhzzj5 = [];
            var datajzxyhzzj6 = [];
            var datajzxyhzzj7 = [];
            var datajzxyhzzj8 = [];
            $.each(result, function (key, values) {
                datajzxyhzzj1.push(values[0]);
                datajzxyhzzj2.push(values[1]);
                datajzxyhzzj3.push(values[2]);
                datajzxyhzzj4.push(values[3]);
                datajzxyhzzj5.push(values[4]);
                datajzxyhzzj6.push(values[5]);
                datajzxyhzzj7.push(values[6]);
                datajzxyhzzj8.push(values[7]);
            });
            var jzxyhzzj = echarts.init(document.getElementById('jzxyhzzj'));
            var option = {
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
                        data: datajzxyhzzj1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['行政村数', '贫困村数', '项目村数', '运转正常的协会','贫困村项目村数','2018年退出村数','退出村互助资金协会数'],
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
                        name: '行政村数',
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
                        data: datajzxyhzzj2
                    },
                    {
                        name: '贫困村数',
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
                        data: datajzxyhzzj3
                    },
                    {
                        name: '项目村数',
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
                        data: datajzxyhzzj4
                    },
                    {
                        name: '运转正常的协会',
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
                        data: datajzxyhzzj5
                    },
                    {
                        name: '贫困村项目村数',
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
                        data: datajzxyhzzj6
                    },
                    {
                        name: '2018年退出村数',
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
                        data: datajzxyhzzj7
                    },{
                        name: '退出村互助资金协会数',
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
                        data: datajzxyhzzj8
                    },

                ]
            };
            jzxyhzzj.setOption(option);
        },
        loadchart19Callback: function (result) {
            var dataxyszjzj1 = [];
            var dataxyszjzj2 = [];
            $.each(result, function (key, values) {
                dataxyszjzj1.push(values[0]);
                dataxyszjzj2.push(values[1]);
            });
            var zlfyzj = echarts.init(document.getElementById('xyszjzj'));
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
                        data: dataxyszjzj1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        axisLabel: {
                            interval:0,
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
                        name: '互助资金',
                        barWidth: 30,
                        type: 'bar',
                        barGap: 0,
                        data: dataxyszjzj2,
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
                                    color: '#fef678'
                                }, {
                                    offset: 1,
                                    color: '#77dbf2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            zlfyzj.setOption(option);
        },
        loadchart20Callback: function (result) {
            var datafpzjcz1 = [];
            var datafpzjcz2 = [];
            var datafpzjcz3 = [];
            var datafpzjcz4 = [];
            var datafpzjcz5 = [];
            var datafpzjcz6 = [];
            $.each(result, function (key, values) {
                datafpzjcz1.push(values[0]);
                datafpzjcz2.push(values[1]);
                datafpzjcz3.push(values[2]);
                datafpzjcz4.push(values[3]);
                datafpzjcz5.push(values[4]);
                datafpzjcz6.push(values[5]);
            });
            var fpzjcz = echarts.init(document.getElementById('fpzjcz'));
            var option = {
                color: ['#1381ff', '#ff7a06', '#7a7c6f', '#f9ff56'],
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
                        data: datafpzjcz1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['小计', '中央财政扶贫资金', '省级财政扶贫资金', '农户交纳互助金','其它'],
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
                        name: '小计',
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
                        data: datafpzjcz2
                    },
                    {
                        name: '中央财政扶贫资金',
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
                        data: datafpzjcz3
                    },
                    {
                        name: '省级财政扶贫资金',
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
                        data: datafpzjcz4
                    },
                    {
                        name: '农户交纳互助金',
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
                        data: datafpzjcz5
                    },
                    {
                        name: '其它',
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
                        data: datafpzjcz6
                    },
                ]
            };
            fpzjcz.setOption(option);
        },
        loadchart21Callback: function (result) {
            var dataxysczfpzj1 = [];
            var dataxysczfpzj2 = [];
            $.each(result, function (key, values) {
                dataxysczfpzj1.push(values[0]);
                dataxysczfpzj2.push(values[1]);
            });
            var zlfyzj = echarts.init(document.getElementById('xysczfpzj'));
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
                        data: dataxysczfpzj1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        axisLabel: {
                            interval:0,
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
                        data: dataxysczfpzj2,
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
                                    color: '#fed17c'
                                }, {
                                    offset: 1,
                                    color: '#d79df2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            zlfyzj.setOption(option);
        },
        loadchart22Callback: function(result) {
            var dataqshzzj1 = [];
            var dataqshzzj2 = [];
            var dataqshzzj3 = [];
            var dataqshzzj4 = [];
            $.each(result,function(key,values){
                dataqshzzj1.push(values[0]);
                dataqshzzj2.push(values[1]);
                dataqshzzj3.push(values[2]);
                dataqshzzj4.push(values[3]);
            });
            var qshzzj = echarts.init(document.getElementById('qshzzj'));
            var option = {
                color: ['#ffdf25', '#36a9ce', '#d0e17d'],
                legend: {
                    data:['总户数','常住户数','贫困户'],
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
                        data:dataqshzzj1,
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
                        name:'户数',
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
                        name:'总户数',
                        type: 'bar',
                        data: dataqshzzj2,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff',
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '常住户数',
                        type: 'bar',
                        data: dataqshzzj3,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff',
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '贫困户',
                        type: 'bar',
                        data: dataqshzzj4,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff',
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },

                ]
            };
            qshzzj.setOption(option);
        },
        loadchart24Callback: function (result) {
            var dataqsjkqk1 = [];
            var dataqsjkqk2 = [];
            var dataqsjkqk3 = [];
            $.each(result, function (key, values) {
                dataqsjkqk1.push(values[0]);
                dataqsjkqk2.push(values[1]);
                dataqsjkqk3.push(values[2]);
            });
            var qsjkqk = echarts.init(document.getElementById('qsjkqk'));
            var option = {
                color: ['#62FFCD', '#63EE4C'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['累计发放借款', '累计占用费收入'],
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
                        data: dataqsjkqk1,
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
                        name: '累计发放借款',
                        smooth: true,
                        type: 'bar',
                        symbolSize: 10,
                        data: dataqsjkqk2,
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },
                    {
                        name: '累计占用费收入',
                        smooth: true,
                        type: 'bar',
                        symbolSize: 10,
                        data: dataqsjkqk2,
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            qsjkqk.setOption(option);
        },
        loadchart25Callback: function (result) {
            var dataqshsjb1 = [];
            var dataqshsjb2 = [];
            var dataqshsjb3 = [];
            $.each(result, function (key, values) {
                dataqshsjb1.push(values[0]);
                dataqshsjb2.push(values[1]);
                dataqshsjb3.push(values[2]);
            });
            var qshsjb = echarts.init(document.getElementById('qshsjb'));
            var option = {
                color: ['#62FFCD', '#63EE4C'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['累计回收', '累计逾期'],
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
                        data: dataqshsjb1,
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
                        name: '累计回收',
                        smooth: true,
                        type: 'bar',
                        symbolSize: 10,
                        data: dataqshsjb2,
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },
                    {
                        name: '累计逾期',
                        smooth: true,
                        type: 'bar',
                        symbolSize: 10,
                        data: dataqshsjb3,
                        barWidth: '25',
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            qshsjb.setOption(option);
        },
        loadchart26Callback: function (result) {
            var dataqshzzjqkzj1 = [];
            var dataqshzzjqkzj2 = [];
            $.each(result, function (key, values) {
                dataqshzzjqkzj1.push(values[0]);
                dataqshzzjqkzj2.push(values[1]);
            });
            var zlfyzj = echarts.init(document.getElementById('qshzzjqkzj'));
            var option = {
                color: ['#2f9dd7'],
                tooltip: {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}户',
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
                        data: dataqshzzjqkzj1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        axisLabel: {
                            interval:0,
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
                        name: '合计',
                        barWidth: 30,
                        type: 'bar',
                        barGap: 0,
                        data: dataqshzzjqkzj2,
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
                                    color: '#69fef9'
                                }, {
                                    offset: 1,
                                    color: '#52f25a'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            zlfyzj.setOption(option);
        },
        loadchart27Callback: function (result) {
            var dataxysjkhsjbqk1 = [];
            var dataxysjkhsjbqk2 = [];
            $.each(result, function (key, values) {
                dataxysjkhsjbqk1.push(values[0]);
                dataxysjkhsjbqk2.push(values[1]);
            });
            var xysjkhsjbqk = echarts.init(document.getElementById('xysjkhsjbqk'));
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
                        data: dataxysjkhsjbqk1,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        },
                        axisLabel: {
                            interval:0,
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
                        name: '合计',
                        barWidth: 30,
                        type: 'bar',
                        barGap: 0,
                        data: dataxysjkhsjbqk2,
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
                                    color: '#fed17c'
                                }, {
                                    offset: 1,
                                    color: '#5fc6f2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            xysjkhsjbqk.setOption(option);
        },
        loadchart28Callback: function(result) {
            var dataxxcjxq = [];
            var dataCxxtjqk = [];
            var dataZpxxtjqk = [];
            var dataWzxxtjqk = [];
            $.each(result,function(key,values){
                dataxxcjxq.push(values[0]);
                dataCxxtjqk.push(values[1]);
                dataZpxxtjqk.push(values[2]);
                dataWzxxtjqk.push(values[3]);
            });
            console.log(dataxxcjxq);
            var chart1 = echarts.init(document.getElementById('wzzpcj'));
            var option1 = {
                color: ['#ffed75','#4689ff','#98ff79'],
                tooltip: {
                    trigger:'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data:['村信息','照片信息','位置信息'],
                    y: 5,
                    left:60,
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
                        data:dataxxcjxq,
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
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
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
                        name:'村信息',
                        smooth:true,
                        type: 'bar',
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataCxxtjqk
                    },
                    {
                        name:'照片信息',
                        smooth:true,
                        type: 'bar',
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataZpxxtjqk
                    },
                    {
                        name:'位置信息',
                        smooth:true,
                        type: 'bar',
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataWzxxtjqk
                    },
                ]
            };
            chart1.setOption(option1);
        },
        loadchart29Callback: function(result) {
            var datavrcjxq = [];
            var datVrcxxtjqk = [];
            var dataVrzpxxtjqk = [];
            $.each(result,function(key,values){
                datavrcjxq.push(values[0]);
                datVrcxxtjqk.push(values[1]);
                dataVrzpxxtjqk.push(values[2]);
            });
            console.log(datavrcjxq);
            var chart3 = echarts.init(document.getElementById('vrzpcj'));
            var option3 = {
                color: ['#ffed75','#4689ff','#98ff79'],
                tooltip: {
                    trigger:'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data:['村信息','照片信息'],
                    y: 5,
                    left:60,
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
                        data:datavrcjxq,
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
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#3E3A70'
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
                        name:'村信息',
                        smooth:true,
                        type: 'bar',
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: datVrcxxtjqk

                    },
                    {
                        name:'照片信息',
                        smooth:true,
                        type: 'bar',
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataVrzpxxtjqk

                    },

                ]
            };
            chart3.setOption(option3);
        },
        loadchart30Callback: function (result) {
            var dataxxcjpmxq = [];
            var dataXxcjpm = [];
            $.each(result, function (key, values) {
                dataxxcjpmxq.push(values[0]);
                dataXxcjpm.push(values[1]);
            });
            console.log(dataxxcjpmxq);
            var chart2 = echarts.init(document.getElementById('wzzpcjpm'));
            var option2 = {
                dataset: {
                    source: [
                        ['product', ' score'],
                        ["兴平市",98.09],
                        ["乾县",99.26],
                        ["旬邑",99.47],
                        ["武功县",99.48],
                        ["礼泉县",99.53],
                        ["淳化县",99.58],
                        ["长武县",99.75],
                        ["泾阳县",99.85],
                        ["永寿县",99.86],
                        ["彬州市",99.87],
                        ["三原县",99.94]
                    ]
                },
                grid: {containLabel: true},
                xAxis: {
                    name: 'amount',
                    show: false,
                },
                tooltip : {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}%',
                    axisPointer : {
                        type : 'shadow'
                    }
                },
                yAxis: {
                    type: 'category',
                    // show:false,
                    position: 'left',
                    boundaryGap: false,
                    // barWidth：20,
                    axisTick: {
                        show: false
                    }, // y 轴线
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#FFF',
                        }
                    }, // 分割线设置
                    splitLine: {
                        lineStyle: {
                            width: 2,
                            color: "red",
                        }
                    },
                    axisLabel: {},
                },
                visualMap: {
                    orient: 'horizontal',
                    left: 'center',
                    min: 98,
                    max: 100,
                    text: ['高', '低'],
                    textStyle: {
                        color: '#fff',
                    },
                    dimension: 0,
                    inRange: {
                        color: [ '#28da1c','#fccd23']
                    }
                },
                series: [
                    {
                        type: 'bar',
                        barWidth : 15,
                        name:'信息采集进度',
                        encode: {// Map the "amount" column to X axis.
                            x: 'amount', // Map the "product" column to Y axis
                            y: 'product'
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[10, 10, 10, 10]
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                color: '#fff'
                            }
                        },
                    }
                ]
            };
            chart2.setOption(option2);
        },
        loadchart31Callback: function (result) {
            var dataappsyxq = [];
            var dataXysytj = [];
            var dataJysytj = [];
            var dataBzsytj = [];
            var dataCwsytj = [];
            var dataYssytj = [];
            var dataChsytj = [];
            var dataXpsytj = [];
            var dataWgsytj = [];
            var dataSysytj = [];
            var dataLqsytj = [];
            var dataQxsytj = [];
            $.each(result, function (key, values) {
                dataappsyxq.push(values[0]);
                dataXysytj.push(values[1]);
                dataJysytj.push(values[2]);
                dataBzsytj.push(values[3]);
                dataCwsytj.push(values[4]);
                dataYssytj.push(values[5]);
                dataYssytj.push(values[6]);
                dataChsytj.push(values[7]);
                dataXpsytj.push(values[8]);
                dataWgsytj.push(values[9]);
                dataSysytj.push(values[10]);
                dataLqsytj.push(values[11]);
                dataQxsytj.push(values[12]);
            });
            console.log(dataQxsytj);
            var chart4 = echarts.init(document.getElementById('appsyqk'));
            var option4 = {
                color: ['#120dff', '#29b5ff', '#31fffa', '#f9ff56', '#16ff16', '#c64eff', '#ff291c', '#0eff13', '#ff041f', '#9100ff', '#94a0eb'],
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
                        data: dataappsyxq,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data: ['旬邑县' ,'泾阳县'  ,'彬州市','长武县' , '永寿县' , '淳化县' , '兴平市' , '武功县' , '三原县' ,'礼泉县','乾县'],
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
                        min: 0,
                        interval: 50000,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '旬邑县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataXysytj
                    },
                    {
                        name: '泾阳县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataJysytj
                    },
                    {
                        name: '彬州市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataBzsytj
                    },
                    {
                        name: '长武县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataCwsytj
                    },
                    {
                        name: '永寿县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataYssytj
                    },
                    {
                        name: '淳化县 ',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataChsytj
                    },
                    {
                        name: '兴平市',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataXpsytj
                    },
                    {
                        name: '武功县 ',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataWgsytj
                    },
                    {
                        name: '三原县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataSysytj
                    },
                    {
                        name: '礼泉县 ',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataLqsytj
                    },
                    {
                        name: '乾县',
                        smooth: true,
                        type: 'line',
                        barGap: 0,
                        data: dataQxsytj
                    },
                ]
            };
            chart4.setOption(option4);
        },
        loadchart32Callback: function (result) {
            var datasyzsxq = [];
            var dataAppsyzs = [];
            $.each(result, function (key, values) {
                datasyzsxq.push(values[0]);
                dataAppsyzs.push(values[1]);
            });
            console.log(dataAppsyzs);
            var chart5 = echarts.init(document.getElementById('appsyzjf'));
            var option5 = {
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
                        data: datasyzsxq,
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
                        name: '总积分',
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
                        data: dataAppsyzs
                    },

                ]
            };
            chart5.setOption(option5);
        },
        loadchart33Callback: function (result) {
            var dataappsymc = [];
            var dataAppsypm = [];
            $.each(result, function (key, values) {
                dataappsymc.push(values[0]);
                dataAppsypm.push(values[1]);
            });
            console.log(dataAppsypm);
            var chart6 = echarts.init(document.getElementById('appsypm'));
            var option6 = {
                dataset: {
                    source: [
                        ['product', ' score'],
                        ["乾县",81466],
                        ["礼泉县",95639],
                        ["三原县",129280],
                        ["武功县",138024],
                        ["兴平市",150119],
                        ["淳化县",173858],
                        ["永寿县",222448],
                        ["长武县",299162],
                        ["彬州市",305822],
                        ["泾阳县",416453],
                        ["旬邑县",900684]
                    ]
                },
                grid: {containLabel: true},
                xAxis: {
                    name: 'amount',
                    show: false,
                },
                tooltip : {
                    trigger: 'axis',

                    axisPointer : {
                        type : 'shadow'
                    }
                },
                yAxis: {
                    type: 'category',
                    // show:false,
                    position: 'left',
                    boundaryGap: false,
                    // barWidth：20,
                    axisTick: {
                        show: false
                    }, // y 轴线
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#FFF',
                        }
                    }, // 分割线设置
                    splitLine: {
                        lineStyle: {
                            width: 2,
                            color: "red",
                        }
                    },
                    axisLabel: {},
                },
                visualMap: {
                    orient: 'horizontal',
                    left: 'center',
                    min: 80000,
                    max: 1000000,
                    text: ['高', '低'],
                    textStyle: {
                        color: '#fff',
                    },
                    dimension: 0,
                    inRange: {
                        color: [ '#0ffd61','#f3ed74']
                    }
                },
                series: [
                    {
                        type: 'bar',
                        barWidth : 15,
                        name:'信息采集进度',
                        encode: {// Map the "amount" column to X axis.
                            x: 'amount', // Map the "product" column to Y axis
                            y: 'product'
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[10, 10, 10, 10]
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                color: '#fff'
                            }
                        },
                    }
                ]
            };
            chart6.setOption(option6);
        },

    }
};

$(function () {
    service.init();
    //	页面跳转
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==38){ // 上
            window.location.href="./pageSix.html";
        }
    };
});