var service = {
    init: function () {
        this.loadchart1();
        this.loadchart2();
        this.loadchart3();
        this.loadchart4();
        this.loadchart5();
        this.loadchart6();
    },
    loadchart1: function () {
        var url = "pageTen1.json";
        this.ajax(url, this.callback.loadchart1Callback);
    },
    loadchart2: function () {
        var url = "pageTen2.json";
        this.ajax(url, this.callback.loadchart2Callback);
    },
    loadchart3: function () {
        var url = "pageTen3.json";
        this.ajax(url, this.callback.loadchart3Callback);
    },
    loadchart4: function () {
        var url = "pageTen4.json";
        this.ajax(url, this.callback.loadchart4Callback);
    },
    loadchart5: function () {
        var url = "pageTen5.json";
        this.ajax(url, this.callback.loadchart5Callback);
    },
    loadchart6: function () {
        var url = "pageTen6.json";
        this.ajax(url, this.callback.loadchart6Callback);
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
        loadchart1Callback: function(result) {
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
                        barGap: 0,

                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },

                        data: dataCxxtjqk

                    },
                    {
                        name:'照片信息',
                        smooth:true,
                        type: 'bar',
                        barGap: 0,

                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },

                        data: dataZpxxtjqk

                    },
                    {
                        name:'位置信息',
                        smooth:true,
                        type: 'bar',
                        barGap: 0,

                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },

                        data: dataWzxxtjqk

                    },

                ]
            };
            chart1.setOption(option1);
        },
        loadchart2Callback: function (result) {
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
                    min: 10,
                    max: 100,
                    text: ['高', '低'],
                    color:'#fff',
                    dimension: 0,
                    inRange: {
                        color: [ '#0CAF42','#049F8F']
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
        loadchart3Callback: function(result) {
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
                        barGap: 0,

                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },

                        data: datVrcxxtjqk

                    },
                    {
                        name:'照片信息',
                        smooth:true,
                        type: 'bar',
                        barGap: 0,

                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },

                        data: dataVrzpxxtjqk

                    },

                ]
            };
            chart3.setOption(option3);
        },
        loadchart4Callback: function (result) {
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
        loadchart5Callback: function (result) {
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
        loadchart6Callback: function (result) {
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
                    min: 10,
                    max: 100,
                    text: ['高', '低'],
                    color:'#fff',
                    dimension: 0,
                    inRange: {
                        color: [ '#0CAF42','#049F8F']
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
});