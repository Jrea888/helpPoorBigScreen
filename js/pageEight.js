//ajax模块化
var service = {
    init: function() {
        this.loadchart1();
        this.loadchart2();
        this.loadchart3();
        this.loadchart4();
        this.loadchart5();
        this.loadchart6();
        this.loadchart7();
        this.loadchart8();
        this.loadchart9();
        this.loadchart10();

    },
    loadchart1: function() {
        var url = "pageEight1.json";
        this.ajax(url, this.callback.loadchart1Callback);
    },
    loadchart2: function() {
        var url = "pageEight2.json";
        this.ajax(url, this.callback.loadchart2Callback);
    },
    loadchart3: function() {
        var url = "pageEight3.json";
        this.ajax(url, this.callback.loadchart3Callback);
    },
    loadchart4: function() {
        var url = "pageEight4.json";
        this.ajax(url, this.callback.loadchart4Callback);
    },
    loadchart5: function() {
        var url = "pageEight5.json";
        this.ajax(url, this.callback.loadchart5Callback);
    },
    loadchart6: function() {
        var url = "pageEight6.json";
        this.ajax(url, this.callback.loadchart6Callback);
    },
    loadchart7: function() {
        var url = "pageEight7.json";
        this.ajax(url, this.callback.loadchart7Callback);
    },
    loadchart8: function() {
        var url = "pageEight8.json";
        this.ajax(url, this.callback.loadchart8Callback);
    },
    loadchart9: function() {
        var url = "pageEight9.json";
        this.ajax(url, this.callback.loadchart9Callback);
    },
    loadchart10: function() {
        var url = "pageEight10.json";
        this.ajax(url, this.callback.loadchart10Callback);
    },


    ajax: function(url, callback) {
        $.ajax({
            url: '../data/'+url,
            type:"GET",
            dataType:"json",
            scriptCharset:"utf-8",
            success:function(result) {
                callback(result);
            },
            error:function() {
                console.log("数据请求错误")
            }
        });
    },
    callback: {
        loadchart1Callback: function(result) {
            var datasj = [];
            var dataYbzpsj = [];
            $.each(result,function(key,values){

                datasj.push(values[0])
                dataYbzpsj.push(values[1]);

            });
            console.log(datasj)
            var chart1 = echarts.init(document.getElementById('ybzphs'));
            var option1 = {
                color: ['#4689ff'],
                title: {
                    text: '全市未脱贫户因病致贫变化情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {


                    trigger:'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:datasj,
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
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'贫困户数',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 10,
                        data: dataYbzpsj
                    },

                ]
            };
            chart1.setOption(option1);
        },
        loadchart2Callback: function(result) {
            var dataybzpzbsj = [];
            var dataYbzpzbsj = [];
            $.each(result,function(key,values){

                dataybzpzbsj.push(values[0])
                dataYbzpzbsj.push(values[1]);

            });
            console.log(dataYbzpzbsj)
            var chart2 = echarts.init(document.getElementById('ybzpzb'));
            var option2 = {
                color: ['#ff9703'],
                title: {
                    text: '致贫原因为“因病致贫”占比变化',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {
                    trigger:'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:dataybzpzbsj,
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
                        axisLabel: {
                            formatter:'{value}%'

                        },

                        min: 0,
                        max: 40,
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
                        name:'贫困户数',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 10,
                        data: dataYbzpzbsj
                    },

                ]
            };
            chart2.setOption(option2);
        },
        loadchart3Callback: function(result) {
            var datagxzpsj = [];
            var dataCwxzpsj = [];
            var dataChxzpsj = [];
            var dataXyxzpsj = [];
            var dataYsxzpsj = [];
            $.each(result,function(key,values){

                datagxzpsj.push(values[0])
                dataCwxzpsj.push(values[1]);
                dataChxzpsj.push(values[2]);
                dataXyxzpsj.push(values[3]);
                dataYsxzpsj.push(values[4]);

            });
            console.log(dataCwxzpsj)
            var chart3 = echarts.init(document.getElementById('gxybzpqk'));
            var option3 = {
                color: ['#1381ff','#ff7a06','#7a7c6f','#f9ff56'],
                title: {
                    text: '各县市历年度未脱贫户因病致贫变化情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {
                    trigger:'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:datagxzpsj,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data:['长武县','淳化县','旬邑县','永寿县'],
                    y: 'bottom',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'长武县',
                        smooth:true,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        barGap: 0,
                        data: dataCwxzpsj
                    },
                    {
                        name:'淳化县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataChxzpsj
                    },
                    {
                        name:'旬邑县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataXyxzpsj
                    },
                    {
                        name:'永寿县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
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
        loadchart4Callback: function(result) {
            var datagxzpzb = [];
            var dataChxzpzb = [];
            var dataXyxzpzb = [];
            var dataYsxzpzb = [];
            var dataCwxzpzb = [];
            $.each(result,function(key,values){

                datagxzpzb.push(values[0])
                dataChxzpzb.push(values[1]);
                dataXyxzpzb.push(values[2]);
                dataYsxzpzb.push(values[3]);
                dataCwxzpzb.push(values[4]);

            });
            console.log(dataCwxzpzb)
            var chart4 = echarts.init(document.getElementById('gxybzpqzb'));
            var option4 = {
                color: ['#1381ff','#ff7a06','#7a7c6f','#f9ff56'],
                title: {
                    text: '各县市历年度未脱贫户因病致贫占比情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {
                    trigger:'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:datagxzpzb,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data:['淳化县','旬邑县','永寿县','长武县'],
                    y: 'bottom',
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
                        min: 0,
                        max: 40,
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
                        name:'淳化县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataChxzpzb
                    },
                    {
                        name:'旬邑县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataXyxzpzb
                    },
                    {
                        name:'永寿县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataYsxzpzb
                    },
                    {
                        name:'长武县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
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
        loadchart5Callback: function(result) {
            var datagxqzpsj = [];
            var dataLqxzpsj = [];
            var dataQxzpsj = [];
            var dataSyxzpsj = [];
            var dataBzxzpsj = [];
            var dataWgxzpsj = [];
            var dataXpxzpsj = [];
            var dataJyxzpsj = [];
            $.each(result,function(key,values){

                datagxqzpsj.push(values[0])
                dataLqxzpsj.push(values[1]);
                dataQxzpsj.push(values[2]);
                dataSyxzpsj.push(values[3]);
                dataBzxzpsj.push(values[4]);
                dataWgxzpsj.push(values[5]);
                dataXpxzpsj.push(values[6]);
                dataJyxzpsj.push(values[7]);

            });
            console.log(dataLqxzpsj)
            var chart5 = echarts.init(document.getElementById('qgxybzpqk'));
            var option5 = {
                color: ['#1381ff','#ff7a06','#7a7c6f','#f9ff56','#16ff16','#ab14ff','#13ff8f'],
                title: {
                    text: '礼泉、乾县等7个县区中未脱贫户主要致贫原因为“因病致贫”户数变化情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {
                    trigger:'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:datagxqzpsj,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data:['礼泉县','乾县','三原县','彬州市','武功县','兴平市','泾阳县'],
                    y: 'bottom',
                    textStyle: {
                        color: '#fff',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'礼泉县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataLqxzpsj
                    },
                    {
                        name:'乾县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataQxzpsj
                    },
                    {
                        name:'三原县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataSyxzpsj
                    },
                    {
                        name:'彬州市',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataBzxzpsj
                    },
                    {
                        name:'武功县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataWgxzpsj
                    },
                    {
                        name:'兴平市',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataXpxzpsj
                    },
                    {
                        name:'泾阳县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataJyxzpsj
                    },

                ]
            };
            chart5.setOption(option5);
        },
        loadchart6Callback: function(result) {
            var datagxqzpzb = [];
            var dataLqxzpzb = [];
            var dataQxzpzb = [];
            var dataSyxzpzb = [];
            var dataBzxzpzb = [];
            var dataWgxzpzb = [];
            var dataXpxzpzb = [];
            var dataJyxzpzb = [];
            $.each(result,function(key,values){

                datagxqzpzb.push(values[0])
                dataLqxzpzb.push(values[1]);
                dataQxzpzb.push(values[2]);
                dataSyxzpzb.push(values[3]);
                dataBzxzpzb.push(values[4]);
                dataWgxzpzb.push(values[5]);
                dataXpxzpzb.push(values[6]);
                dataJyxzpzb.push(values[7]);

            });
            console.log(dataLqxzpzb)
            var chart6 = echarts.init(document.getElementById('qgxybzpzb'));
            var option6 = {
                color: ['#1381ff','#ff7a06','#7a7c6f','#f9ff56','#16ff16','#ab14ff','#13ff8f'],
                title: {
                    text: '礼泉、乾县等7个县区中未脱贫户主要致贫原因为“因病致贫”占比变化情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {
                    trigger:'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:datagxqzpzb,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data:['礼泉县','乾县','三原县','彬州市','武功县','兴平市','泾阳县'],
                    y: 'bottom',
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


                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'礼泉县',
                        smooth:true,

                        type: 'line',
                        barGap: 0,
                        data: dataLqxzpzb
                    },
                    {
                        name:'乾县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataQxzpzb
                    },
                    {
                        name:'三原县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataSyxzpzb
                    },
                    {
                        name:'彬州市',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataBzxzpzb
                    },
                    {
                        name:'武功县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataWgxzpzb
                    },
                    {
                        name:'兴平市',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataXpxzpzb
                    },
                    {
                        name:'泾阳县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        data: dataJyxzpzb
                    },
                ]
            };
            chart6.setOption(option6);
        },
        loadchart7Callback: function(result) {
          var datayczjsj = [];
          var dataYczpsj = [];
    $.each(result,function(key,values){

        datayczjsj.push(values[0])
        dataYczpsj.push(values[1]);

    });
    console.log(datayczjsj)
    var chart7 = echarts.init(document.getElementById('yczphs'));
    var option7 = {
        color: ['#2f9dd7'],
        title: {
            text: '全市历年度未脱贫户因残致贫变化情况',
            x:'center',
            textStyle:{
                color:'#FFF',
                top:'10%'
            }
        },



        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '10%',
            top:'10%',
            containLabel: true
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data:datayczjsj,
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
                axisLine:{
                    lineStyle:{
                        color:'#FFF',
                    }
                }
            }
        ],

        series: [
            {
                name:'贫困户数',
                barWidth:30,
                type: 'bar',
                barGap: 0,
                data: dataYczpsj
            },

        ]
    };
    chart7.setOption(option7);
},
        loadchart8Callback: function(result) {
            var datayczjzb = [];
            var dataYczpzb = [];
            $.each(result,function(key,values){

                datayczjzb.push(values[0])
                dataYczpzb.push(values[1]);

            });
            console.log(dataYczpzb)
            var chart8 = echarts.init(document.getElementById('yczpzb'));
            var option8 = {
                color: ['#faff4d'],
                title: {
                    text: '全市未脱贫户因病致贫占比变化情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {
                    trigger:'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:datayczjzb,
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
                        axisLabel: {
                            formatter:'{value}%'

                        },

                        min: 0,
                        max: 40,
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
                        name:'贫困户数',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataYczpzb
                    },

                ]
            };
            chart8.setOption(option8);
        },
        loadchart9Callback: function(result) {
            var datagxyczpzb = [];
            var dataChxyczpzb = [];
            var dataXyxyczpzb = [];
            var dataYsxyczpzb = [];
            var dataCwxyczpzb = [];
            $.each(result,function(key,values){

                datagxyczpzb.push(values[0])
                dataChxyczpzb.push(values[1]);
                dataXyxyczpzb.push(values[2]);
                dataYsxyczpzb.push(values[3]);
                dataCwxyczpzb.push(values[4]);

            });
            console.log(datagxyczpzb)
            var chart9 = echarts.init(document.getElementById('gxyczpqzb'));
            var option9= {
                color: ['#1381ff','#ff7a06','#7a7c6f','#f9ff56'],
                title: {
                    text: '各县市历年度未脱贫户因病致贫占比情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },

                tooltip: {
                    trigger:'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',

                        data:datagxyczpzb,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                legend: {
                    data:['淳化县','旬邑县','永寿县','长武县'],
                    y: 'bottom',
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
                        min: 0,
                        max: 40,
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
                        name:'淳化县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataChxyczpzb
                    },
                    {
                        name:'旬邑县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataXyxyczpzb
                    },
                    {
                        name:'永寿县',
                        smooth:true,
                        type: 'line',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
                                }
                            }
                        },
                        symbolSize: 6,
                        data: dataYsxyczpzb
                    },
                    {
                        name:'长武县',
                        smooth:true,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width:3// 0.1的线条是非常细的了
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
        loadchart10Callback: function(result) {
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
                title: {
                    text: '彬州、泾阳等7县市中未脱贫户主要致贫原因为“因残致贫”占比变化情况',
                    x:'center',
                    textStyle:{
                        color:'#FFF',
                        top:'10%'
                    }
                },
                tooltip: {

                    trigger:'item',
                    formatter: '{a0}:{c0}%',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    top:'10%',
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
                    y: 'bottom',
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
    }
};
$(function() {
    service.init();
});