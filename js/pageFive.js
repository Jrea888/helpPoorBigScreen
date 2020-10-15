//ajax模块化
var service = {
    init: function () {
        this.loadchart7();
        this.loadchart9();
        this.loadchart12();
        this.loadchart14();
        this.loadchart15();
        this.loadchart16();
        this.loadchart18();
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
        this.loadchart32();
        this.loadchart33();
        this.loadchart34();
    },

    loadchart7: function() {
        var url = "pageNine5.json";
        this.ajax(url, this.callback.loadchart7Callback);
    },
    loadchart9: function() {
        var url = "pageNine7.json";
        this.ajax(url, this.callback.loadchart9Callback);
    },
    loadchart12: function() {
        var url = "pageNine10.json";
        this.ajax(url, this.callback.loadchart12Callback);
    },
    loadchart13: function() {
        var url = "pageNine11.json";
        this.ajax(url, this.callback.loadchart13Callback);
    },
    loadchart14: function() {
        var url = "pageNine12.json";
        this.ajax(url, this.callback.loadchart14Callback);
    },
    loadchart15: function() {
        var url = "pageNine13.json";
        this.ajax(url, this.callback.loadchart15Callback);
    },
    loadchart16: function() {
        var url = "pageNine14.json";
        this.ajax(url, this.callback.loadchart16Callback);
    },
    loadchart18: function() {
        var url = "pageNine16.json";
        this.ajax(url, this.callback.loadchart18Callback);
    },
    loadchart21: function() {
        var url = "pageNine18.json";
        this.ajax(url, this.callback.loadchart21Callback);
    },
    loadchart22: function() {
        var url = "pageNine6.json";
        this.ajax(url, this.callback.loadchart22Callback);
    },
    loadchart23: function() {
        var url = "pageNine4.json";
        this.ajax(url, this.callback.loadchart23Callback);
    },
    loadchart24: function() {
        var url = "pageNine19.json";
        this.ajax(url, this.callback.loadchart24Callback);
    },
    loadchart25: function() {
        var url = "pageNine20.json";
        this.ajax(url, this.callback.loadchart25Callback);
    },
    loadchart26: function() {
        var url = "pageNine21.json";
        this.ajax(url, this.callback.loadchart26Callback);
    },
    loadchart27: function() {
        var url = "pageNine22.json";
        this.ajax(url, this.callback.loadchart27Callback);
    },
    loadchart28: function() {
        var url = "pageNine23.json";
        this.ajax(url, this.callback.loadchart28Callback);
    },
    loadchart29: function() {
        var url = "pageNine24.json";
        this.ajax(url, this.callback.loadchart29Callback);
    },
    loadchart30: function() {
        var url = "pageNine25.json";
        this.ajax(url, this.callback.loadchart30Callback);
    },
    loadchart31: function() {
        var url = "pageNine26.json";
        this.ajax(url, this.callback.loadchart31Callback);
    },
    loadchart32: function() {
        var url = "pageNine27.json";
        this.ajax(url, this.callback.loadchart32Callback);
    },
    loadchart33: function() {
        var url = "pageNine28.json";
        this.ajax(url, this.callback.loadchart33Callback);
    },
    loadchart34: function() {
        var url = "pageNine29.json";
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
        loadchart7Callback: function(result) {
            var datajtjjxq = [];
            var dataJtjjh = [];
            var dataJtjjsr = [];
            $.each(result,function(key,values){
                datajtjjxq.push(values[0]);
                dataJtjjh.push(values[1]);
                dataJtjjsr.push(values[2]);
            });
            var chart5 = echarts.init(document.getElementById('jtsrqk'));
            var option5 = {
                color: ['#FBB730', '#31BDF2'],
                legend: {
                    data:['贫困户从事集体经济户数','贫困户从事集体经济（万元）'],
                    y: 5,
                    left:80,
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
                        data:datajtjjxq,
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
                        name:'贫困户从事集体经济户数',
                        type: 'bar',
                        // barGap: 0,
                        data: dataJtjjh,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '贫困户从事集体经济（万元）',
                        type: 'bar',
                        data: dataJtjjsr,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            chart5.setOption(option5);
        },
        loadchart9Callback: function(result) {
            var datanxldlxq = [];
            var dataNxldl = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datanxldlxq.push(values[0])
                dataNxldl.push(values[1]);
            });
            var chart7 = echarts.init(document.getElementById('nxldlqk'));
            var option7 = {
                color: ['#FBB730', '#31BDF2'],
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
                        data:datanxldlxq,
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
                        name:'男性潜在劳动力',
                        type: 'bar',
                        barGap: 0,
                        data: dataNxldl,
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
                                    color: '#6af39e'
                                }, {
                                    offset: 1,
                                    color: '#72f1f2'
                                }]),
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                ]
            };
            chart7.setOption(option7);
        },
        loadchart12Callback: function(result) {
            var datamjwzzw = [];
            var dataMjzdfb = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datamjwzzw.push(values[0])
                dataMjzdfb.push(values[1]);
            });
            var chart10 = echarts.init(document.getElementById('mjzdzwqk'));
            var option10 = {
                color: ['#70fb2f'],
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
                        data:datamjwzzw,

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
                        type: 'bar',
                        barGap: 0,
                        data: dataMjzdfb,
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
                                    color: '#eb9cf3'
                                }, {
                                    offset: 1,
                                    color: '#6ea9f2'
                                }]),
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },

                    },

                ]
            };
            chart10.setOption(option10);
        },
        loadchart13Callback: function(result) {
            var datazwxq = [];
            var dataXm = [];
            var dataPg = [];
            var dataYm = [];
            var dataQt = [];
            var dataTz = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datazwxq.push(values[0])
                dataXm.push(values[1]);
                dataPg.push(values[2]);
                dataYm.push(values[3]);
                dataQt.push(values[4]);
                dataTz.push(values[5]);
            });
            var chart11 = echarts.init(document.getElementById('zzzdzw'));
            var option11 = {
                color: ['#48A7FF', '#CE4C0F', '#969696', '#fff862', '#2e19e1'],
                legend: {
                    data:['小麦','苹果','玉米','其他蔬菜','桃'],
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
                        data:datazwxq,
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
                        },
                    }
                ],

                series: [
                    {
                        name:'小麦',
                        type: 'bar',
                        barGap: 15,
                        data: dataXm
                    },
                    {
                        name: '苹果',
                        type: 'bar',
                        data: dataPg
                    },
                    {
                        name: '玉米',
                        type: 'bar',
                        data: dataYm
                    },
                    {
                        name: '其他蔬菜',
                        type: 'bar',
                        data: dataQt
                    },
                    {
                        name: '桃',
                        type: 'bar',
                        data: dataTz
                    },

                ]
            };
            chart11.setOption(option11);
        },
        loadchart14Callback: function(result) {
            var datazwmjxq = [];
            var dataXmmj = [];
            var dataPgmj = [];
            var dataYmmj = [];
            var dataQtmj = [];
            var dataTzmj = [];
            var dataSsmj = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datazwmjxq.push(values[0])
                dataPgmj.push(values[1]);
                dataQtmj.push(values[2]);
                dataSsmj.push(values[3]);
                dataTzmj.push(values[4]);
                dataXmmj.push(values[5]);
                dataYmmj.push(values[6]);
            });
            var chart12 = echarts.init(document.getElementById('zzmjzd'));
            var option12 = {
                color: ['#48A7FF', '#CE4C0F', '#969696', '#fff862', '#2e19e1','#13ac15'],

                legend: {
                    data:['苹果','其他蔬菜','设施蔬菜','桃','小麦','玉米'],
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
                        data:datazwmjxq,
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
                        name: '苹果',
                        type: 'bar',
                        data: dataPgmj
                    },
                    {
                        name: '其他蔬菜',
                        type: 'bar',
                        data: dataQtmj
                    },
                    {
                        name: '设施蔬菜',
                        type: 'bar',
                        data: dataSsmj
                    },
                    {
                        name: '桃',
                        type: 'bar',
                        data: dataTzmj
                    },
                    {
                        name:'小麦',
                        type: 'bar',

                        data: dataXmmj
                    },

                    {
                        name: '玉米',
                        type: 'bar',
                        data: dataYmmj
                    },
                ]
            };
            chart12.setOption(option12);
        },
        loadchart15Callback: function(result) {
            var datazzymc = [];
            var dataZwzbfb = [];
            $.each(result,function(key,values){
                datazzymc.push(values[0]);
                dataZwzbfb.push(values[1]);
            });
            var chart13 = echarts.init(document.getElementById('srzbqk'));
            var a = 0, b = 1, c = 2, d=3,e = 4, f = 5, g = 6, h=7,i = 8,j = 9, k = 10, l=11,m = 12, n = 13,
                o = 14, p=15, a = 16, q = 17, r = 18, s=19,t = 20, u = 21, v = 22;
            var option13 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: datazzymc,
                    orient: 'horizontal',
                    right: 25,
                    textStyle: {
                        color: '#fff',
                    }
                },
                grid: {
                    top: 30,
                    containLabel: true
                },
                series : [
                    {
                        type: 'pie',
                        radius: '50%',
                        name: '种植业收入占比',
                        center: ['45%', '45%'],
                        selectedMode: 'single',
                        data:[
                            {value:dataZwzbfb[a], name:datazzymc[a]},
                            {value:dataZwzbfb[b], name:datazzymc[b]},
                            {value:dataZwzbfb[c], name:datazzymc[c]},
                            {value:dataZwzbfb[d], name:datazzymc[d]},
                            {value:dataZwzbfb[e], name:datazzymc[e]},
                            {value:dataZwzbfb[f], name:datazzymc[f]},
                            {value:dataZwzbfb[g], name:datazzymc[g]},
                            {value:dataZwzbfb[h], name:datazzymc[h]},
                            {value:dataZwzbfb[i], name:datazzymc[i]},
                            {value:dataZwzbfb[j], name:datazzymc[j]},
                            {value:dataZwzbfb[k], name:datazzymc[k]},
                            {value:dataZwzbfb[l], name:datazzymc[l]},
                            {value:dataZwzbfb[m], name:datazzymc[m]},
                            {value:dataZwzbfb[n], name:datazzymc[n]},
                            {value:dataZwzbfb[o], name:datazzymc[o]},
                            {value:dataZwzbfb[p], name:datazzymc[p]},
                            {value:dataZwzbfb[q], name:datazzymc[q]},
                            {value:dataZwzbfb[r], name:datazzymc[r]},
                            {value:dataZwzbfb[s], name:datazzymc[s]},
                            {value:dataZwzbfb[t], name:datazzymc[t]},
                            {value:dataZwzbfb[u], name:datazzymc[u]},
                            {value:dataZwzbfb[v], name:datazzymc[v]}

                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#65acf9', '#8dfa95', '#a4ee83', '#1ab8f9', '#00fa4f', '#9dee74', '#9d9ff9', '#fae2d8', '#0dee5a',
                                        '#63A5F1', '#faa7ac', '#c1ee90', '#2ec0f9', '#f9faa3', '#d1e6ee',
                                        '#0e05f9', '#FE8463', '#7aee4c', '#00f4f9', '#e8fa45', '#81ee59'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart13.setOption(option13);
        },
        loadchart16Callback: function(result) {
            var datazdzwmc = [];
            var dataZdzwsl = [];
            $.each(result,function(key,values){
                datazdzwmc.push(values[0])
                dataZdzwsl.push(values[1]);
            });
            var chart14 = echarts.init(document.getElementById('zdwzjq'));
            var option14 = {
                color: ['#732afb'],
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
                        data:datazdzwmc,
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
                        name:datazdzwmc,
                        type: 'bar',
                        barGap: 0,
                        data: dataZdzwsl,
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
                                    color: '#f390b9'
                                }, {
                                    offset: 1,
                                    color: '#46f2cd'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },

                    },

                ]
            };
            chart14.setOption(option14);
        },
        loadchart18Callback: function(result) {
            var datayzsfmc = [];
            var dataYzsffb = [];
            $.each(result,function(key,values){
                datayzsfmc.push(values[0]);
                dataYzsffb.push(values[1]);
            });
            var chart16 = echarts.init(document.getElementById('yzsffb'));
            var a = 0, b = 1, c = 2, d=3,e = 4, f = 5, g = 6, h=7,i = 8,j = 9, k = 10;
            var option16 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    bottom: '15',
                    data: datayzsfmc,
                    orient: 'horizontal',
                    right: 25,
                    textStyle: {
                        color: '#fff',
                    }
                },
                series : [
                    {
                        type: 'pie',
                        radius: '70%',
                        name: '贫困户养殖占比',
                        center: ['45%', '45%'],
                        selectedMode: 'single',
                        data:[
                            {value:dataYzsffb[a], name:datayzsfmc[a]},
                            {value:dataYzsffb[b], name:datayzsfmc[b]},
                            {value:dataYzsffb[c], name:datayzsfmc[c]},
                            {value:dataYzsffb[d], name:datayzsfmc[d]},
                            {value:dataYzsffb[e], name:datayzsfmc[e]},
                            {value:dataYzsffb[f], name:datayzsfmc[f]},
                            {value:dataYzsffb[g], name:datayzsfmc[g]},
                            {value:dataYzsffb[h], name:datayzsfmc[h]},
                            {value:dataYzsffb[i], name:datayzsfmc[i]},
                            {value:dataYzsffb[j], name:datayzsfmc[j]},
                            {value:dataYzsffb[k], name:datayzsfmc[k]}
                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#63a5f1', '#bc96ea', '#def34b', '#e8605d', '#e7c9bd', '#4feaf2', '#00f600', '#35f792', '#51f1f1', '#fe8463'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart16.setOption(option16);
        },
        loadchart21Callback: function(result) {
            var datazwxq = [];
            var dataXm = [];
            var dataPg = [];
            var dataYm = [];
            var dataQt = [];
            var dataTz = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datazwxq.push(values[0])
                dataXm.push(values[1]);
                dataPg.push(values[2]);
                dataYm.push(values[3]);
                dataQt.push(values[4]);
                dataTz.push(values[5]);
            });
            var chart11 = echarts.init(document.getElementById('zzzdzw'));
            var option11 = {
                color: ['#48A7FF', '#CE4C0F', '#969696', '#fff862', '#2e19e1'],
                legend: {
                    data:['小麦','苹果','玉米','其他蔬菜','桃'],
                    y: '5',
                    left:'10',
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
                        data:datazwxq,
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
                        name:'小麦',
                        type: 'bar',
                        data: dataXm
                    },
                    {
                        name: '苹果',
                        type: 'bar',
                        data: dataPg
                    },
                    {
                        name: '玉米',
                        type: 'bar',
                        data: dataYm
                    },
                    {
                        name: '其他蔬菜',
                        type: 'bar',
                        data: dataQt
                    },
                    {
                        name: '桃',
                        type: 'bar',
                        data: dataTz
                    },

                ]
            };
            chart11.setOption(option11);
        },
        loadchart22Callback: function(result) {
            var dataxmzbxq = [];
            var dataXmzbh = [];
            var dataXmzbsr = [];
            $.each(result,function(key,values){
                console.log(values[0])
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
                        name:'项目户数',
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
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#072538'
                            }
                        },
                        name:'直补收入',
                        min: 0,
                        max: 6000,
                        interval: 500,
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
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataXmzbh

                    },
                    {
                        name: '项目直补收入（万元）',
                        type: 'line',
                        yAxisIndex: 1,
                        data: dataXmzbsr
                    },
                ]
            };
            chart6.setOption(option6);
        },
        loadchart23Callback: function(result) {
            var datagfxq = [];
            var dataGfysr = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datagfxq.push(values[0]);
                dataGfysr.push(values[1]);
            });
            var chart4 = echarts.init(document.getElementById('gfcysr'));
            var option4 = {
                color: ['#118fff'],
                tooltip: {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}万元',
                    axisPointer: {
                        type: 'shadow',
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
                        data:datagfxq,
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
                        name:'万元',
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
                        name: '光伏产业收入',
                        type: 'bar',
                        data: dataGfysr,
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
                                    color: '#33e2f3'
                                }, {
                                    offset: 1,
                                    color: '#ea7cf2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    }

                ]
            };
            chart4.setOption(option4);
        },
        loadchart24Callback: function(result) {
            var datagxsztd1 = [];
            var datagxsztd2 = [];
            var datagxsztd3 = [];
            $.each(result,function(key,values){
                datagxsztd1.push(values[0]);
                datagxsztd2.push(values[1]);
                datagxsztd3.push(values[2]);
            });
            var chart5 = echarts.init(document.getElementById('gxsztd'));
            var option5 = {
                color: ['#8EE72E', '#FFF666'],
                legend: {
                    data:['户数','收入(万元)'],
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
                        data:datagxsztd1,
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
                        name:'户数',
                        type: 'bar',
                        data: datagxsztd2,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                          normal: {
                              barBorderRadius: [4, 4, 2, 2]
                          }
                      },
                    },
                    {
                        name: '收入(万元)',
                        type: 'bar',
                        data: datagxsztd3,
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
                    },
                ]
            };
            chart5.setOption(option5);
        },
        loadchart25Callback: function(result) {
            var datagxskjbf1 = [];
            var datagxskjbf2 = [];
            $.each(result, function (key, values) {
                datagxskjbf1.push(values[0]);
                datagxskjbf2.push(values[1]);
            });
            var gxskjbf = echarts.init(document.getElementById('gxskjbf'));
            var option8 = {
                color: ['#faff4d'],
                tooltip: {
                    trigger: 'item',
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
                        data: datagxskjbf1,
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
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#3E3A70'
                            }
                        },
                        min: 0,
                        interval: 1000,
                        axisLine: {
                            lineStyle: {
                                color: '#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: '科技帮扶',
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
                                    color: '#71ff65'
                                }, {
                                    offset: 1,
                                    color: '#e9a0fd'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                        data: datagxskjbf2
                    },

                ]
            };
            gxskjbf.setOption(option8);
        },
        loadchart26Callback: function(result) {
            var datagxsjrzc1 = [];
            var datagxsjrzc2 = [];
            var datagxsjrzc3 = [];
            $.each(result,function(key,values){
                datagxsjrzc1.push(values[0]);
                datagxsjrzc2.push(values[1]);
                datagxsjrzc3.push(values[2]);
            });
            var gxsjrzc = echarts.init(document.getElementById('gxsjrzc'));
            var option5 = {
                color: ['#c1ff5b', '#649ffd'],
                legend: {
                    data:['户数','收入(万元)'],
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
                        data:datagxsjrzc1,
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
                        name:'户数',
                        type: 'bar',
                        data: datagxsjrzc2,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '收入(万元)',
                        type: 'bar',
                        data: datagxsjrzc3,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            gxsjrzc.setOption(option5);
        },
        loadchart27Callback: function(result) {
            var dataqsbtldl1 = [];
            var dataqsbtldl2 = [];
            var dataqsbtldl3 = [];
            $.each(result,function(key,values){
                dataqsbtldl1.push(values[0]);
                dataqsbtldl2.push(values[1]);
                dataqsbtldl3.push(values[2]);
            });
            var qsbtldl = echarts.init(document.getElementById('qsbtldl'));
            var option5 = {
                color: ['#FF4D4D', '#30DFCB'],
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:80,
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
                        data:dataqsbtldl1,
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
                        name:'男',
                        type: 'bar',
                        data: dataqsbtldl2,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '女',
                        type: 'bar',
                        data: dataqsbtldl3,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            qsbtldl.setOption(option5);
        },
        loadchart28Callback: function(result) {
            var dataqsjnldl1 = [];
            var dataqsjnldl2 = [];
            var dataqsjnldl3 = [];
            $.each(result,function(key,values){
                dataqsjnldl1.push(values[0]);
                dataqsjnldl2.push(values[1]);
                dataqsjnldl3.push(values[2]);
            });
            var qsbtldl = echarts.init(document.getElementById('qsjnldl'));
            var option5 = {
                color: ['#5BA6F9', '#FAAE5A'],
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:70,
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
                        data:dataqsjnldl1,
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
                        name:'男',
                        type: 'bar',
                        data: dataqsjnldl2,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '女',
                        type: 'bar',
                        data: dataqsjnldl3,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            qsbtldl.setOption(option5);
        },
        loadchart29Callback: function(result) {
            var dataqsbrldl1 = [];
            var dataqsbrldl2 = [];
            var dataqsbrldl3 = [];
            $.each(result,function(key,values){
                dataqsbrldl1.push(values[0]);
                dataqsbrldl2.push(values[1]);
                dataqsbrldl3.push(values[2]);
            });
            var qsbrldl = echarts.init(document.getElementById('qsbrldl'));
            var option5 = {
                color: ['#c67cf9', '#4cfa85'],
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:80,
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
                        data:dataqsbrldl1,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        },
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                            interval: 0,
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
                        name:'男',
                        type: 'bar',
                        data: dataqsbrldl2,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '女',
                        type: 'bar',
                        data: dataqsbrldl3,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            qsbrldl.setOption(option5);
        },
        loadchart30Callback: function(result) {
            var dataqsldlzjfx1 = [];
            var dataqsldlzjfx2 = [];
            var dataqsldlzjfx3 = [];
            $.each(result,function(key,values){
                dataqsldlzjfx1.push(values[0]);
                dataqsldlzjfx2.push(values[1]);
                dataqsldlzjfx3.push(values[2]);
            });
            var qsldlzjfx = echarts.init(document.getElementById('qsldlzjfx'));
            var option = {
                color: ['#c67cf9', '#4cfa85'],
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:80,
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
                xAxis: [
                    {
                        type: 'category',
                        data:dataqsldlzjfx1,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        },
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                            interval: 0,
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
                        name:'男',
                        type: 'line',
                        data: dataqsldlzjfx2,
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
                                    color: '#31BDF2'
                                }, {
                                    offset: 1,
                                    color: '#e9a0fd'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                    },
                    {
                        name: '女',
                        type: 'line',
                        data: dataqsldlzjfx3,
                        itemStyle: {
                            normal: {
                                // label: {
                                //     color: '#fff',
                                //     show: true,
                                //     type: 'solid',
                                // },
                                lineStyle: {
                                    width: 3
                                },
                                areaStyle: {
                                    type: 'default',
                                    color: ['rgba(138,255,169,0.3)','rgba(105,176,238,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#e9a0fd'
                                }, {
                                    offset: 1,
                                    color: '#FBB730'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                    },
                ]
            };
            qsldlzjfx.setOption(option);
        },
        loadchart31Callback: function(result) {
            var dataqsqzldlnl1 = [];
            var dataqsqzldlnl2 = [];
            var dataqsqzldlnl3 = [];
            $.each(result,function(key,values){
                dataqsqzldlnl1.push(values[0]);
                dataqsqzldlnl2.push(values[1]);
                dataqsqzldlnl3.push(values[2]);
            });
            var qsqzldlnl = echarts.init(document.getElementById('qsqzldlnl'));
            var option = {
                color: ['#c67cf9', '#4cfa85'],
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:80,
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
                xAxis: [
                    {
                        type: 'category',
                        data:dataqsqzldlnl1,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        },
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                            interval: 0,
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
                        name:'男',
                        type: 'line',
                        data: dataqsqzldlnl2,
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
                                    color: ['rgba(138,255,169,0.2)','rgba(105,176,238,0.2)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#f2df6c'
                                }, {
                                    offset: 1,
                                    color: '#e9a0fd'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                    },
                    {
                        name: '女',
                        type: 'line',
                        data: dataqsqzldlnl3,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3
                                },
                                areaStyle: {
                                    type: 'default',
                                    color: ['rgba(138,255,169,0.3)','rgba(105,176,238,0.3)']
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#e9a0fd'
                                }, {
                                    offset: 1,
                                    color: '#fb5e64'
                                }]),//线条渐变色#008B45
                            },
                        },
                        symbolSize: 10,
                    },
                ]
            };
            qsqzldlnl.setOption(option);
        },
        loadchart32Callback: function(result) {
            var dataqzldl18451 = [];
            var dataqzldl18452 = [];
            var dataqzldl18453 = [];
            $.each(result,function(key,values){
                dataqzldl18451.push(values[0]);
                dataqzldl18452.push(values[1]);
                dataqzldl18453.push(values[2]);
            });
            var qzldl1845 = echarts.init(document.getElementById('qzldl1845'));
            var option5 = {
                color: ['#6bffae', '#dfa277'],
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:80,
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
                        data:dataqzldl18451,
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
                        name:'男',
                        type: 'bar',
                        data: dataqzldl18452,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '女',
                        type: 'bar',
                        data: dataqzldl18453,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            qzldl1845.setOption(option5);
        },
        loadchart33Callback: function(result) {
            var dataqzldl46601 = [];
            var dataqzldl46602 = [];
            var dataqzldl46603 = [];
            $.each(result,function(key,values){
                dataqzldl46601.push(values[0]);
                dataqzldl46602.push(values[1]);
                dataqzldl46603.push(values[2]);
            });
            var qzldl4660 = echarts.init(document.getElementById('qzldl4660'));
            var option = {
                color: ['#d872ff', '#438bdf'],
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:80,
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
                        data:dataqzldl46601,
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
                        name:'男',
                        type: 'bar',
                        data: dataqzldl46602,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '女',
                        type: 'bar',
                        data: dataqzldl46603,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            qzldl4660.setOption(option);
        },
        loadchart34Callback: function(result) {
            var dataqzldl611 = [];
            var dataqzldl612 = [];
            var dataqzldl613 = [];
            $.each(result,function(key,values){
                dataqzldl611.push(values[0]);
                dataqzldl612.push(values[1]);
                dataqzldl613.push(values[2]);
            });
            var qzldl61 = echarts.init(document.getElementById('qzldl61'));
            var option = {
                color: ['#e5ff64', '#30DFCB'],
                legend: {
                    data:['男','女'],
                    y: 5,
                    left:80,
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
                        data:dataqzldl611,
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
                        name:'男',
                        type: 'bar',
                        data: dataqzldl612,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[4, 4, 2, 2]
                            }
                        },
                    },
                    {
                        name: '女',
                        type: 'bar',
                        data: dataqzldl613,
                        barWidth: '20',
                        label: {
                            normal: {
                                color:'#fff'
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
            qzldl61.setOption(option);
        },
    }
};

$(function () {
    service.init();
    //	页面跳转
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==40){ //下
            window.location.href="./pageSix.html";
        }
        if(e && e.keyCode==38){ // 上
            window.location.href="./pageFour.html";
        }
    };
});