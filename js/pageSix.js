//ajax模块化
var service = {
    init: function () {
        this.loadchart13();
        this.loadchart17();
        this.loadchart20();
        this.loadchart30();
        this.loadchart31();
        this.loadchart32();
        this.loadchart33();
        this.loadchart34();
        this.loadchart35();
        this.loadchart36();
        this.loadchart37();
        this.loadchart38();
        this.loadchart40();
        this.loadchart41();
        this.loadchart43();
        this.loadchart44();
        this.loadchart45();
        this.loadchart46();
        this.loadchart49();
        this.loadchart50();
        this.loadchart51();
    },
    loadchart13: function() {
        var url = "pageNine11.json";
        this.ajax(url, this.callback.loadchart13Callback);
    },
    loadchart17: function() {
        var url = "pageNine15.json";
        this.ajax(url, this.callback.loadchart17Callback);
    },
    loadchart20: function() {
        var url = "pageNine17.json";
        this.ajax(url, this.callback.loadchart20Callback);
    },
    loadchart30: function() {
        var url = "pageNine30.json";
        this.ajax(url, this.callback.loadchart30Callback);
    },
    loadchart31: function() {
        var url = "pageNine31.json";
        this.ajax(url, this.callback.loadchart31Callback);
    },
    loadchart32: function() {
        var url = "pageNine32.json";
        this.ajax(url, this.callback.loadchart32Callback);
    },
    loadchart33: function() {
        var url = "pageNine33.json";
        this.ajax(url, this.callback.loadchart33Callback);
    },
    loadchart34: function() {
        var url = "pageNine34.json";
        this.ajax(url, this.callback.loadchart34Callback);
    },
    loadchart35: function() {
        var url = "pageNine35.json";
        this.ajax(url, this.callback.loadchart35Callback);
    },
    loadchart36: function() {
        var url = "pageNine36.json";
        this.ajax(url, this.callback.loadchart36Callback);
    },
    loadchart37: function() {
        var url = "pageNine37.json";
        this.ajax(url, this.callback.loadchart37Callback);
    },
    loadchart38: function() {
        var url = "pageNine37.json";
        this.ajax(url, this.callback.loadchart38Callback);
    },
    loadchart40: function() {
        var url = "pageNine40.json";
        this.ajax(url, this.callback.loadchart40Callback);
    },
    loadchart41: function() {
        var url = "pageNine41.json";
        this.ajax(url, this.callback.loadchart41Callback);
    },
    loadchart43: function() {
        var url = "pageNine43.json";
        this.ajax(url, this.callback.loadchart43Callback);
    },
    loadchart44: function() {
        var url = "pageNine44.json";
        this.ajax(url, this.callback.loadchart44Callback);
    },
    loadchart45: function() {
        var url = "pageNine45.json";
        this.ajax(url, this.callback.loadchart45Callback);
    },
    loadchart46: function() {
        var url = "pageNine46.json";
        this.ajax(url, this.callback.loadchart46Callback);
    },
    loadchart49: function() {
        var url = "pageEight11.json";
        this.ajax(url, this.callback.loadchart49Callback);
    },
    loadchart50: function() {
        var url = "pageEight11.json";
        this.ajax(url, this.callback.loadchart50Callback);
    },
    loadchart51: function() {
        var url = "pageEight11.json";
        this.ajax(url, this.callback.loadchart51Callback);
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
        loadchart13Callback: function(result) {
            var datazwxq = [];
            var dataXm = [];
            var dataPg = [];
            var dataYm = [];
            var dataQt = [];
            var dataTz = [];
            $.each(result,function(key,values){
                datazwxq.push(values[0]);
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
        loadchart17Callback: function(result) {
            var datazgzwmc = [];
            var dataZgzwsl = [];
            $.each(result,function(key,values){
                datazgzwmc.push(values[0])
                dataZgzwsl.push(values[1]);
            });
            var chart15 = echarts.init(document.getElementById('zgwzjq'));
            var option15 = {
                color: ['#92cd8c'],
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
                        data:datazgzwmc,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        },
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
                        name:datazgzwmc,
                        type: 'bar',
                        barGap: 0,
                        data: dataZgzwsl,
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
                                    color: '#60f3ee'
                                }, {
                                    offset: 1,
                                    color: '#f2a367'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                    },

                ]
            };
            chart15.setOption(option15);
        },
        loadchart20Callback: function(result) {
            var datalycymc = [];
            var dataLycyfb = [];
            $.each(result,function(key,values){
                datalycymc.push(values[0]);
                dataLycyfb.push(values[1]);
            });
            var chart20 = echarts.init(document.getElementById('lycyfb'));
            var a = 0, b = 1, c = 2, d=3;
            var option20 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: datalycymc,
                    type: 'scroll',
                    orient: 'horizontal',
                    x:'center',
                    textStyle: {
                        color: '#fff',
                    }
                },
                series : [
                    {
                        type: 'pie',
                        radius: '60%',
                        name: '林业产业占比',
                        center: ['50%', '45%'],
                        selectedMode: 'single',
                        data:[
                            {value:dataLycyfb[a], name:datalycymc[a]},
                            {value:dataLycyfb[b], name:datalycymc[b]},
                            {value:dataLycyfb[c], name:datalycymc[c]},
                            {value:dataLycyfb[d], name:datalycymc[d]},
                        ],
                        itemStyle: {
                            normal: {
                                label:{
                                    show: true,
                                    formatter: '{b} {d}%'
                                },
                                color: function (params) {
                                    var colorList = [
                                        '#E8FA45', '#466DF9', '#FA4257', '#13f9d1'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart20.setOption(option20);
        },

        loadchart30Callback: function(result) {
            var datasjxq = [];
            var datanNansyynsj = [];
            var dataNvsyynsj = [];

            $.each(result,function(key,values){
                datasjxq.push(values[0]);
                datanNansyynsj.push(values[1]);
                dataNvsyynsj.push(values[2]);
            });
            var chart30 = echarts.init(document.getElementById('ldlsgyyn'));
            var option30 = {
                color: ['#48A7FF','#13F9D1'],
                legend: {
                    data:['男','女'],
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
                        data:datasjxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        name:'人数',
                        type: 'value',
                        axisLabel: {
                            formatter:'{value}人'

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
                        data: datanNansyynsj,
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
                        data: dataNvsyynsj,
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
            chart30.setOption(option30);
        },
        loadchart31Callback: function(result) {
            var datajysjxq = [];
            var datanNanjyynsj = [];
            var dataNvjyynsj = [];

            $.each(result,function(key,values){
                datajysjxq.push(values[0]);
                datanNanjyynsj.push(values[1]);
                dataNvjyynsj.push(values[2]);
            });
            console.log(datajysjxq);
            var chart31 = echarts.init(document.getElementById('ldljgyyn'));
            var option31 = {
                color: ['#58ff46','#FEE70D'],

                legend: {
                    data:['男','女'],
                    y: 5,
                    left:60,
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger:'item',
                    formatter: '{a0}:{c0}人',//鼠标放上显示值带单位
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
                        data:datajysjxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        name:'人数',
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
                        name:'男',
                        type: 'bar',
                        data: datanNanjyynsj,
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
                        data: dataNvjyynsj,
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
            chart31.setOption(option31);
        },
        loadchart32Callback: function(result) {
            var datajyysjxq = [];
            var datanNanjyyssj = [];
            var dataNvjyyssj = [];

            $.each(result,function(key,values){
                datajyysjxq.push(values[0]);
                datanNanjyyssj.push(values[1]);
                dataNvjyyssj.push(values[2]);
            });
            var chart32 = echarts.init(document.getElementById('ldljgyys'));
            var option32 = {
                color: ['#BC96EA','#63ff56'],
                legend: {
                    data:['男','女'],
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
                        data:datajyysjxq,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        name:'人数',
                        type: 'value',
                        axisLabel: {
                            formatter:'{value}人'
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
                        data: datanNanjyyssj,
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
                        data: dataNvjyyssj,
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
            chart32.setOption(option32);
        },
        loadchart33Callback: function(result) {
            var dataldlsj = [];
            var datanNaldlsj = [];
            var dataNvldlsj = [];
            $.each(result,function(key,values){
                dataldlsj.push(values[0]);
                datanNaldlsj.push(values[1]);
                dataNvldlsj.push(values[2]);
            });
            var chart33 = echarts.init(document.getElementById('ldlqusjfx'));
            var option33 = {
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
                        boundaryGap: false,
                        data:dataldlsj,
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
                        max:120000,
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
                        data: datanNaldlsj,
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
                        data: dataNvldlsj,
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
            chart33.setOption(option33);
        },
        loadchart34Callback: function (result) {
            var dataszyzxq = [];
            var dataSzyzsj = [];
            $.each(result, function (key, values) {
                dataszyzxq.push(values[0]);
                dataSzyzsj.push(values[1]);
            });
            var chart34 = echarts.init(document.getElementById('szyzhs'));
            var a = 0, b = 1, c = 2, d = 3, e = 4,f = 5, g = 6, h = 7, i = 8, j = 9,k = 10, l = 11;
            var option34 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: dataszyzxq,
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
                        name: '生猪养殖户数分布',
                        center: ['50%', '42%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataSzyzsj[a], name: dataszyzxq[a]},
                            {value: dataSzyzsj[b], name: dataszyzxq[b]},
                            {value: dataSzyzsj[c], name: dataszyzxq[c]},
                            {value: dataSzyzsj[d], name: dataszyzxq[d]},
                            {value: dataSzyzsj[e], name: dataszyzxq[e]},
                            {value: dataSzyzsj[f], name: dataszyzxq[f]},
                            {value: dataSzyzsj[g], name: dataszyzxq[g]},
                            {value: dataSzyzsj[h], name: dataszyzxq[h]},
                            {value: dataSzyzsj[i], name: dataszyzxq[i]},
                            {value: dataSzyzsj[j], name: dataszyzxq[j]},
                            {value: dataSzyzsj[k], name: dataszyzxq[k]},
                            {value: dataSzyzsj[l], name: dataszyzxq[l]},
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
                                        '#63a5f1', '#bc96ea', '#def34b', '#e8605d', '#e7c9bd', '#4feaf2', '#00f600', '#35f792', '#51f1f1', '#fe8463', '#d6f685'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart34.setOption(option34);
        },
        loadchart35Callback: function (result) {
            var datansyyzxq = [];
            var dataNsyyzsj = [];
            $.each(result, function (key, values) {
                datansyyzxq.push(values[0]);
                dataNsyyzsj.push(values[1]);
            });
            var chart35 = echarts.init(document.getElementById('nsyyzhs'));
            var a = 0, b = 1, c = 2, d = 3, e = 4,f = 5, g = 6, h = 7, i = 8, j = 9,k = 10, l = 11;
            var option35 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: datansyyzxq,
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
                        name: '奶山羊养殖户数分布',
                        center: ['50%', '45%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataNsyyzsj[a], name: datansyyzxq[a]},
                            {value: dataNsyyzsj[b], name: datansyyzxq[b]},
                            {value: dataNsyyzsj[c], name: datansyyzxq[c]},
                            {value: dataNsyyzsj[d], name: datansyyzxq[d]},
                            {value: dataNsyyzsj[e], name: datansyyzxq[e]},
                            {value: dataNsyyzsj[f], name: datansyyzxq[f]},
                            {value: dataNsyyzsj[g], name: datansyyzxq[g]},
                            {value: dataNsyyzsj[h], name: datansyyzxq[h]},
                            {value: dataNsyyzsj[i], name: datansyyzxq[i]},
                            {value: dataNsyyzsj[j], name: datansyyzxq[j]},
                            {value: dataNsyyzsj[k], name: datansyyzxq[k]},
                            {value: dataNsyyzsj[l], name: datansyyzxq[l]},
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
                                            '#fee70d', '#c5d3f1', '#f48d93', '#ADFF2F', '#00CED1', '#FF00FF', '#4F81BD', '#BDA29A', '#ffb980', '#38f6f8', '#ffb980'
                                        ];
                                        return colorList[params.dataIndex]
                                }
                            }
                        },
                    }
                ]
            };
            chart35.setOption(option35);
        },
        loadchart36Callback: function (result) {
            var dataryyzxq = [];
            var dataRyyzsj = [];
            $.each(result, function (key, values) {
                dataryyzxq.push(values[0]);
                dataRyyzsj.push(values[1]);
            });
            var chart36 = echarts.init(document.getElementById('ryyzhs'));
            var a = 0, b = 1, c = 2, d = 3, e = 4,f = 5, g = 6, h = 7, i = 8, j = 9,k = 10, l = 11;
            var option36 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: dataryyzxq,
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
                        name: '肉羊养殖户数分布',
                        center: ['50%', '43%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataRyyzsj[a], name: dataryyzxq[a]},
                            {value: dataRyyzsj[b], name: dataryyzxq[b]},
                            {value: dataRyyzsj[c], name: dataryyzxq[c]},
                            {value: dataRyyzsj[d], name: dataryyzxq[d]},
                            {value: dataRyyzsj[e], name: dataryyzxq[e]},
                            {value: dataRyyzsj[f], name: dataryyzxq[f]},
                            {value: dataRyyzsj[g], name: dataryyzxq[g]},
                            {value: dataRyyzsj[h], name: dataryyzxq[h]},
                            {value: dataRyyzsj[i], name: dataryyzxq[i]},
                            {value: dataRyyzsj[j], name: dataryyzxq[j]},
                            {value: dataRyyzsj[k], name: dataryyzxq[k]},
                            {value: dataRyyzsj[l], name: dataryyzxq[l]},
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
            chart36.setOption(option36);
        },
        loadchart37Callback: function (result) {
            var datajyzxq = [];
            var dataJyzsj = [];
            $.each(result, function (key, values) {
                datajyzxq.push(values[0]);
                dataJyzsj.push(values[1]);
            });
            var chart37 = echarts.init(document.getElementById('jyzhs'));
            var a = 0, b = 1, c = 2, d = 3, e = 4,f = 5, g = 6, h = 7, i = 8, j = 9,k = 10, l = 11;
            var option37 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: datajyzxq,
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
                        name: '鸡养殖户数分布',
                        center: ['50%', '40%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataJyzsj[a], name: datajyzxq[a]},
                            {value: dataJyzsj[b], name: datajyzxq[b]},
                            {value: dataJyzsj[c], name: datajyzxq[c]},
                            {value: dataJyzsj[d], name: datajyzxq[d]},
                            {value: dataJyzsj[e], name: datajyzxq[e]},
                            {value: dataJyzsj[f], name: datajyzxq[f]},
                            {value: dataJyzsj[g], name: datajyzxq[g]},
                            {value: dataJyzsj[h], name: datajyzxq[h]},
                            {value: dataJyzsj[i], name: datajyzxq[i]},
                            {value: dataJyzsj[j], name: datajyzxq[j]},
                            {value: dataJyzsj[k], name: datajyzxq[k]},
                            {value: dataJyzsj[l], name: datajyzxq[l]},
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
                                        '#0067ff', '#ffb400', '#00fb3b', '#fb00f0', '#fe9b00', '#a5fef7', '#02f5fb', '#fecbf4', '#ffff86', '#bcdefa', '#b3ff83',
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart37.setOption(option37);
        },
        loadchart38Callback: function (result) {
            var datarnyzxq = [];
            var dataRnyzsj = [];
            $.each(result, function (key, values) {
                datarnyzxq.push(values[0]);
                dataRnyzsj.push(values[1]);
            });
            var chart38 = echarts.init(document.getElementById('rnyzhs'));
            var a = 0, b = 1, c = 2, d = 3, e = 4,f = 5, g = 6, h = 7, i = 8, j = 9,k = 10, l = 11;
            var option38 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}{d}%"
                },
                legend: {
                    bottom: '30',
                    data: datarnyzxq,
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
                        name: '肉牛养殖户数分布',
                        center: ['50%', '40%'],
                        selectedMode: 'single',
                        data: [
                            {value: dataRnyzsj[a], name: datarnyzxq[a]},
                            {value: dataRnyzsj[b], name: datarnyzxq[b]},
                            {value: dataRnyzsj[c], name: datarnyzxq[c]},
                            {value: dataRnyzsj[d], name: datarnyzxq[d]},
                            {value: dataRnyzsj[e], name: datarnyzxq[e]},
                            {value: dataRnyzsj[f], name: datarnyzxq[f]},
                            {value: dataRnyzsj[g], name: datarnyzxq[g]},
                            {value: dataRnyzsj[h], name: datarnyzxq[h]},
                            {value: dataRnyzsj[i], name: datarnyzxq[i]},
                            {value: dataRnyzsj[j], name: datarnyzxq[j]},
                            {value: dataRnyzsj[k], name: datarnyzxq[k]},
                            {value: dataRnyzsj[l], name: datarnyzxq[l]},
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
                                        '#fee70d', '#c5d3f1', '#f48d93', '#ADFF2F', '#00CED1', '#FF00FF', '#4F81BD', '#BDA29A', '#ffb980', '#38f6f8', '#ffb980'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            chart38.setOption(option38);
        },
        loadchart40Callback: function(result) {
            var dataxmzbxq = [];
            var dataPgmj = [];
            var dataPgmjzb = [];
            $.each(result,function(key,values){
                console.log(values[0])
                dataxmzbxq.push(values[0]);
                dataPgmj.push(values[1]);
                dataPgmjzb.push(values[2]);
            });
            var chart40 = echarts.init(document.getElementById('pgcymjfb'));
            var option40 = {
                color: ['#4cbcfb', '#f25244'],

                legend: {
                    data:['种植面积（亩）','面积全市占比'],
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
                        max: 40000,
                        interval: 5000,
                        axisLabel: {
                            formatter: '{value}㎡'
                        },
                        name:'面积',
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    },
                    {
                        type:'value',
                        name:'面积占比',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#072538'
                            }
                        },

                        min: 0,
                        max: 30,
                        interval:5,
                        axisLabel: {
                            formatter: '{value} %'
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
                        name:'种植面积（亩）',
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
                        data: dataPgmj
                    },
                    {
                        name: '面积全市占比',
                        type: 'line',
                        yAxisIndex: 1,
                        data: dataPgmjzb
                    },
                ]
            };
            chart40.setOption(option40);
        },
        loadchart41Callback: function(result) {
            var datapgsrxq = [];
            var dataPgsr = [];
            var dataPgsrzb = [];
            $.each(result,function(key,values){
                console.log(values[0])
                datapgsrxq.push(values[0]);
                dataPgsr.push(values[1]);
                dataPgsrzb.push(values[2]);
            });
            var chart41 = echarts.init(document.getElementById('pgcysrfb'));
            var option41 = {
                color: ['#4cbcfb', '#f25244'],
                legend: {
                    data:['苹果总收入（万元）','苹果收入全市占比'],
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
                        data:datapgsrxq,
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
                        max: 4000,
                        interval: 500,
                        axisLabel: {
                            formatter: '{value}万元'
                        },
                        name:'收入',
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    },
                    {
                        type:'value',
                        name:'收入占比',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#072538'
                            }
                        },

                        min: 0,
                        max: 30,
                        interval:5,
                        axisLabel: {
                            formatter: '{value} %'
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
                        name:'苹果总收入（万元）',
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
                        data: dataPgsr

                    },
                    {
                        name: '苹果收入全市占比',
                        type: 'line',
                        yAxisIndex: 1,
                        data: dataPgsrzb
                    },
                ]
            };
            chart41.setOption(option41);
        },
        loadchart43Callback: function(result) {
            var datapghsrxq = [];
            var datanPgcyhjsr = [];
            var dataPgcyhjcsr = [];
            $.each(result,function(key,values){
                datapghsrxq.push(values[0]);
                datanPgcyhjsr.push(values[1]);
                dataPgcyhjcsr.push(values[2]);
            });
            var chart43 = echarts.init(document.getElementById('pgcyhjsr'));
            var option43 = {
                color: ['#3DBCC0','#ca91f1'],
                legend: {
                    data:['户均苹果收入','户均纯收入'],
                    y: 5,
                    left:60,
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    trigger:'item',
                    formatter: '{a0}:{c0}',//鼠标放上显示值带单位
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
                        data:datapghsrxq,
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
                            formatter:'{value}'

                        },
                        min: 0,
                        max: 40000,
                        interval: 5000,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    }
                ],

                series: [
                    {
                        name:'户均苹果收入',
                        type: 'bar',
                        data: datanPgcyhjsr,
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
                        name: '户均纯收入',
                        type: 'bar',
                        data: dataPgcyhjcsr,
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
            chart43.setOption(option43);
        },
        loadchart44Callback: function (result) {
            var datahsrzbxq = [];
            var dataHsrzb = [];
            $.each(result, function (key, values) {
                datahsrzbxq.push(values[0]);
                dataHsrzb.push(values[1]);
            });
            var chart44 = echarts.init(document.getElementById('pghjsrzb'));
            var option44 = {
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
                        data: datahsrzbxq,
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
                        max: 35,
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
                        name: '户均苹果收入占比',
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
                        data: dataHsrzb
                    },

                ]
            };
            chart44.setOption(option44);
        },
        loadchart45Callback: function(result) {
            var dataylpkxq = [];
            var dataYlhs = [];
            var dataYlhjsr = [];
            var dataYlsrzj = [];

            $.each(result,function(key,values){
                dataylpkxq.push(values[0]);
                dataYlhs.push(values[1]);
                dataYlhjsr.push(values[2]);
                dataYlsrzj.push(values[3]);
            });
            var chart45 = echarts.init(document.getElementById('ylpkpgsr'));
            var option45 = {
                color: ['#4cbcfb', '#f25244'],
                legend: {
                    data:['户数','户均纯收入','增加收入'],
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
                        data:dataylpkxq,
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
                        max: 30000,
                        interval: 3000,


                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    },
                    {
                        type:'value',
                        name:'增加收入',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#072538'
                            }
                        },

                        min: 0,
                        max: 250,

                        axisLabel: {
                            formatter: '{value} %'
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
                                    color: '#bc6bf3'
                                }, {
                                    offset: 1,
                                    color: '#56a1f2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataYlhs

                    },
                    {
                        name:'户均纯收入',
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
                                    color: '#a3f350'
                                }, {
                                    offset: 1,
                                    color: '#a15cff'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataYlhjsr

                    },
                    {
                        name: '增加收入',
                        type: 'line',
                        yAxisIndex: 1,
                        data: dataYlsrzj
                    },
                ]
            };
            chart45.setOption(option45);
        },
        loadchart46Callback: function(result) {
            var dataywpkxq = [];
            var dataYwhs = [];
            var dataYwhjsr = [];
            var dataYwsrzj = [];
            $.each(result,function(key,values){
                dataywpkxq.push(values[0]);
                dataYwhs.push(values[1]);
                dataYwhjsr.push(values[2]);
                dataYwsrzj.push(values[3]);
            });
            var chart46 = echarts.init(document.getElementById('ywpkpgsr'));
            var option46 = {
                color: ['#4cbcfb', '#f25244'],
                legend: {
                    data:['户数','户均纯收入','增加收入'],
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
                        data:dataywpkxq,
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
                        max: 12000,
                        interval: 2000,
                        axisLine:{
                            lineStyle:{
                                color:'#FFF',
                            }
                        }
                    },
                    {
                        type:'value',
                        name:'增加收入',
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#072538'
                            }
                        },
                        min: -5,
                        max: 20,
                        axisLabel: {
                            formatter: '{value} %'
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
                                    color: '#66e9f3'
                                }, {
                                    offset: 1,
                                    color: '#f0f299'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataYwhs

                    },
                    {
                        name:'户均纯收入',
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
                                    color: '#f39d9c'
                                }, {
                                    offset: 1,
                                    color: '#81b8ff'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
                        data: dataYwhjsr
                    },
                    {
                        name: '增加收入',
                        type: 'line',
                        yAxisIndex: 1,
                        data: dataYwsrzj
                    },
                ]
            };
            chart46.setOption(option46);
        },
        loadchart49Callback: function (result) {
            var datapaih1 = [];
            var datapaih2 = [];
            $.each(result, function (key, values) {
                datapaih1.push(values[0]);
                datapaih2.push(values[1]);
            });
            console.log(datapaih1,"datapaih1");
            var gxspgzzmj = echarts.init(document.getElementById('gxspgzzmj'));
            var option10 = {
                dataset: {
                    source: [
                        ['score', 'product'],
                        [310.27,'武功县'],
                        [443.57, '三原县'],
                        [559.08, '泾阳县'],
                        [1442.22,'兴平市'],
                        [4336.05, '乾县'],
                        [8747.48, '永寿县'],
                        [10966.58, '彬州市'],
                        [12478.98, '礼泉县'],
                        [13167.78, '淳化县'],
                        [18028.21, '旬邑县'],
                        [29265.67, '长武县'],
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
                    min: 7154.28,
                    max: 16919.12,
                    text: ['高', '低'],
                    textStyle: {
                        color: '#fff',
                    },
                    dimension: 0,
                    inRange: {
                        color: ['#FFF666', '#0CAF42','#049F8F']
                    }
                },
                series: [
                    {
                        type: 'bar',
                        name:'面积',
                        barWidth : 15,
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
            gxspgzzmj.setOption(option10);
        },
        loadchart50Callback: function (result) {
            var datapaih1 = [];
            var datapaih2 = [];
            $.each(result, function (key, values) {
                datapaih1.push(values[0]);
                datapaih2.push(values[1]);
            });
            console.log(datapaih1,"datapaih1");
            var gxspgzzsr = echarts.init(document.getElementById('gxspgzzsr'));
            var option = {
                dataset: {
                    source: [
                        ['score', 'product'],
                        [38.74,'武功县'],
                        [41.28, '泾阳县'],
                        [52.38, '三原县'],
                        [97.28,'兴平市'],
                        [306.96, '乾县'],
                        [1052.93, '淳化县'],
                        [1203.16, '永寿县'],
                        [1277.54, '彬州市'],
                        [1285.59, '礼泉县'],
                        [3229.69, '长武县'],
                        [3402.14 , '旬邑县'],
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
                    min: 35,
                    max: 3450,
                    text: ['高', '低'],
                    textStyle: {
                        color: '#fff',
                    },
                    dimension: 0,
                    inRange: {
                        color: ['#756dff', '#0CAF42','#bc6db8']
                    }
                },
                series: [
                    {
                        type: 'bar',
                        name:'总收入',
                        barWidth : 15,
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
            gxspgzzsr.setOption(option);
        },
        loadchart51Callback: function (result) {
            var datapaih1 = [];
            var datapaih2 = [];
            $.each(result, function (key, values) {
                datapaih1.push(values[0]);
                datapaih2.push(values[1]);
            });
            console.log(datapaih1,"datapaih1");
            var gxsmmsr = echarts.init(document.getElementById('gxsmmsr'));
            var option = {
                dataset: {
                    source: [
                        ['score', 'product'],
                        [674.52,'兴平市'],
                        [707.93, '乾县'],
                        [738.36, '泾阳县'],
                        [799.63, '淳化县'],
                        [1030.20, '礼泉县'],
                        [1103.58, '长武县'],
                        [1164.94, '彬州市'],
                        [1180.87, '三原县'],
                        [1248.59,'武功县'],
                        [1375.44, '永寿县'],
                        [1887.12, '旬邑县'],
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
                    min: 35,
                    max: 3450,
                    text: ['高', '低'],
                    textStyle: {
                        color: '#fff',
                    },
                    dimension: 0,
                    inRange: {
                        color: ['#75ff71', '#345aaf','#049F8F']
                    }
                },
                series: [
                    {
                        type: 'bar',
                        name:'每亩收入',
                        barWidth : 15,
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
            gxsmmsr.setOption(option);
        },

    }
};


$(function () {
    service.init();
    //	页面跳转
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==40){ //下
            window.location.href="./pageSeven.html";
        }
        if(e && e.keyCode==38){ // 上
            window.location.href="./pageFive.html";
        }
    };
});