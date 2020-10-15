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
		this.loadchart10();
		this.loadchart11();
		this.loadchart12();
		this.loadchart13();
		this.loadchart14();
		this.loadchart15();
		this.loadchart16();
		this.loadchart17();
		this.loadchart18();
		this.loadchart19();
		this.loadchart20();
		this.loadchart21();
		this.loadchart22();
		this.loadchartMap();
	},
	loadchart1: function () {
		this.callback.loadchart1Callback();
	},
	loadchart2: function () {
		this.callback.loadchart2Callback();
	},
	loadchart3: function () {
		var url = "pageOne1.json";
		this.ajax(url, this.callback.loadchart3Callback);
	},
	loadchart4: function () {
		var url = "pageOne2.json";
		this.ajax(url, this.callback.loadchart4Callback);
	},
	loadchart5: function () {
		var url = "pageOne3.json";
		this.ajax(url, this.callback.loadchart5Callback);
	},
	loadchart6: function () {
		this.callback.loadchart6Callback();
	},
	loadchart7: function () {
		this.callback.loadchart7Callback();
	},
	loadchart8: function () {
		var url = "pageOne20.json";
		this.ajax(url, this.callback.loadchart8Callback);
	},
	loadchart9: function () {
		var url = "pageSix1.json";
		this.ajax(url, this.callback.loadchart9Callback);
	},
	loadchart10: function () {
		var url = "pageEight11.json";
		this.ajax(url, this.callback.loadchart10Callback);
	},
	loadchart11: function () {
		var url = "pageEight11.json";
		this.ajax(url, this.callback.loadchart11Callback);
	},
	loadchart12: function () {
		var url = "pageOneDoor5.json";
		this.ajax(url, this.callback.loadchart12Callback);
	},
	loadchart13: function () {
		var url = "pageOne21.json";
		this.ajax(url, this.callback.loadchart13Callback);
	},
	loadchart14: function () {
		var url = "pageTwo32.json";
		this.ajax(url, this.callback.loadchart14Callback);
	},
	loadchart15: function () {
		var url = "pageOneYear5.json";
		this.ajax(url, this.callback.loadchart15Callback);
	},
	loadchart16: function () {
		var url = "pageTwo31.json";
		this.ajax(url, this.callback.loadchart16Callback);
	},
	loadchart17: function() {
		var url = "pageNine6.json";
		this.ajax(url, this.callback.loadchart17Callback);
	},
	loadchart18: function () {
		var url = "pageEight14.json";
		this.ajax(url, this.callback.loadchart18Callback);
	},
	loadchart19: function () {
		var url = "pageSix10.json";
		this.ajax(url, this.callback.loadchart19Callback);
	},
	loadchart20: function() {
		var url = "pageNine20.json";
		this.ajax(url, this.callback.loadchart20Callback);
	},
	loadchart21: function () {
		var url = "pageSeven4.json";
		this.ajax(url, this.callback.loadchart21Callback);
	},
	loadchart22: function() {
		var url = "pageEight12.json";
		this.ajax(url, this.callback.loadchart22Callback);
	},
	loadchartMap:function(){
		this.callback.loadchartMapCallback();
	},
	ajax: function (url, callback) {
		$.ajax({
			url: './data/' + url,
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
		loadchart1Callback: function() {
			var chart1 = echarts.init(
				document.getElementById('OneChart'), 'white', {renderer: 'canvas'});
			var option1 = {
				"color": [
					"#c23531",
					"#2f4554",
					"#61a0a8",
					"#d48265",
					"#749f83",
					"#ca8622",
					"#bda29a",
					"#6e7074",
					"#546570",
					"#c4ccd3",
					"#f05b72",
					"#ef5b9c",
					"#f47920",
					"#905a3d",
					"#fab27b",
					"#2a5caa",
					"#444693",
					"#726930",
					"#b2d235",
					"#6d8346",
					"#ac6767",
					"#1d953f",
					"#6950a1",
					"#918597"
				],
				"series": [
					{
						"type": "scatter3D",
						"data": [
							[
								"\u4e09\u539f\u53bf",
								"2014",
								2396.29
							],
							[
								"\u6cfe\u9633\u53bf",
								"2014",
								2505.9
							],
							[
								"\u4e7e\u53bf",
								"2014",
								2762.14
							],
							[
								"\u793c\u6cc9\u53bf",
								"2014",
								2091.77
							],
							[
								"\u6c38\u5bff\u53bf",
								"2014",
								2190.3
							],
							[
								"\u5f6c\u5dde\u5e02",
								"2014",
								2365.08
							],
							[
								"\u957f\u6b66\u53bf",
								"2014",
								2702.5
							],
							[
								"\u65ec\u9091\u53bf",
								"2014",
								2154.17
							],
							[
								"\u6df3\u5316\u53bf",
								"2014",
								2285.98
							],
							[
								"\u6b66\u529f\u53bf",
								"2014",
								2239.87
							],
							[
								"\u5174\u5e73\u5e02",
								"2014",
								2490.35
							],
							[
								"\u4e09\u539f\u53bf",
								"2015",
								2433.56
							],
							[
								"\u6cfe\u9633\u53bf",
								"2015",
								2616.97
							],
							[
								"\u4e7e\u53bf",
								"2015",
								2214.12
							],
							[
								"\u793c\u6cc9\u53bf",
								"2015",
								2244.68
							],
							[
								"\u6c38\u5bff\u53bf",
								"2015",
								2196.75
							],
							[
								"\u5f6c\u5dde\u5e02",
								"2015",
								2352.59
							],
							[
								"\u957f\u6b66\u53bf",
								"2015",
								2793.82
							],
							[
								"\u65ec\u9091\u53bf",
								"2015",
								2304.74
							],
							[
								"\u6df3\u5316\u53bf",
								"2015",
								2252.11
							],
							[
								"\u6b66\u529f\u53bf",
								"2015",
								2198.08
							],
							[
								"\u5174\u5e73\u5e02",
								"2015",
								3058.91
							],
							[
								"\u4e09\u539f\u53bf",
								"2016",
								4123.48
							],
							[
								"\u6cfe\u9633\u53bf",
								"2016",
								4586.25
							],
							[
								"\u4e7e\u53bf",
								"2016",
								4895.01
							],
							[
								"\u793c\u6cc9\u53bf",
								"2016",
								3825.86
							],
							[
								"\u6c38\u5bff\u53bf",
								"2016",
								3977.61
							],
							[
								"\u5f6c\u5dde\u5e02",
								"2016",
								5356.15
							],
							[
								"\u957f\u6b66\u53bf",
								"2016",
								3982.41
							],
							[
								"\u65ec\u9091\u53bf",
								"2016",
								4050.68
							],
							[
								"\u6df3\u5316\u53bf",
								"2016",
								3441
							],
							[
								"\u6b66\u529f\u53bf",
								"2016",
								3572.8
							],
							[
								"\u5174\u5e73\u5e02",
								"2016",
								6757.9
							],
							[
								"\u4e09\u539f\u53bf",
								"2017",
								4812.02
							],
							[
								"\u6cfe\u9633\u53bf",
								"2017",
								5568.04
							],
							[
								"\u4e7e\u53bf",
								"2017",
								5681.37
							],
							[
								"\u793c\u6cc9\u53bf",
								"2017",
								4547.61
							],
							[
								"\u6c38\u5bff\u53bf",
								"2017",
								4751.39
							],
							[
								"\u5f6c\u5dde\u5e02",
								"2017",
								5993.27
							],
							[
								"\u957f\u6b66\u53bf",
								"2017",
								4355.04
							],
							[
								"\u65ec\u9091\u53bf",
								"2017",
								5003.86
							],
							[
								"\u6df3\u5316\u53bf",
								"2017",
								4342.21
							],
							[
								"\u6b66\u529f\u53bf",
								"2017",
								3956.29
							],
							[
								"\u5174\u5e73\u5e02",
								"2017",
								5034.54
							],
							[
								"\u4e09\u539f\u53bf",
								"2018",
								7510.01
							],
							[
								"\u6cfe\u9633\u53bf",
								"2018",
								7890.33
							],
							[
								"\u4e7e\u53bf",
								"2018",
								5689
							],
							[
								"\u793c\u6cc9\u53bf",
								"2018",
								5353.6
							],
							[
								"\u6c38\u5bff\u53bf",
								"2018",
								6030.3
							],
							[
								"\u5f6c\u5dde\u5e02",
								"2018",
								7119.74
							],
							[
								"\u957f\u6b66\u53bf",
								"2018",
								9229.99
							],
							[
								"\u65ec\u9091\u53bf",
								"2018",
								6306.04
							],
							[
								"\u6df3\u5316\u53bf",
								"2018",
								7252.56
							],
							[
								"\u6b66\u529f\u53bf",
								"2018",
								5503.21
							],
							[
								"\u5174\u5e73\u5e02",
								"2018",
								6725.12
							]
						],
						"label": {
							"show": false,
							"position": "top",
							"margin": 8,
							"color":'#fff'
						}
					}
				],
				"legend": [
					{
						"data": [
							""
						],
						"selected": {},
						"show": true
					}
				],
				"tooltip": {
					"show": true,
					"trigger": "item",
					"formatter": function (a, b, c) {
						return "地区： " + a.value[0] + "</br>年份： " + a.value[1] + "</br>收入（元）： " + a.value[2]
					},
					"triggerOn": "mousemove|click",
					"axisPointer": {
						"type": "line"
					},
					"textStyle": {
						"fontSize": 14,
						"color":'#fff'
					},
					"borderWidth": 0
				},
				"visualMap": [
					{
						"type": "continuous",
						"min": 2000,
						"max": 8000,
						"textStyle": {
							color: '#fff'
						},
						"inRange": {
							"color": [
								"#313695",
								"#4575b4",
								"#74add1",
								"#abd9e9",
								"#e0f3f8",
								"#ffffbf",
								"#fee090",
								"#fdae61",
								"#f46d43",
								"#d73027",
								"#a50026"
							]
						},
						"calculable": true,
						"splitNumber": 5,
						"orient": "vertical",
						"showLabel": true
					},
					{
						"type": "continuous",
						"min": 2000,
						"max": 8000,
						"textStyle": {
							color: '#fff'
						},
						"inRange": {
							"symbolSize": [
								10,
								50
							]
						},
						"calculable": true,
						"splitNumber": 5,
						"orient": "vertical",
						"showLabel": true
					}
				],
				"xAxis3D": {
					"data": [
						"\u4e09\u539f\u53bf",
						"\u6cfe\u9633\u53bf",
						"\u4e7e\u53bf",
						"\u793c\u6cc9\u53bf",
						"\u6c38\u5bff\u53bf",
						"\u5f6c\u5dde\u5e02",
						"\u957f\u6b66\u53bf",
						"\u65ec\u9091\u53bf",
						"\u6df3\u5316\u53bf",
						"\u6b66\u529f\u53bf",
						"\u5174\u5e73\u5e02"
					],
					"name": "\u5730\u533a",
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8,
						"interval": 0
					}
				},
				"yAxis3D": {
					"data": [
						"2014",
						"2015",
						"2016",
						"2017",
						"2018"
					],
					"name": "\u5e74\u4efd",
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8
					}
				},
				"zAxis3D": {
					"name": "\u6536\u5165\uff08\u5143\uff09",
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"nameGap": 20,
					"type": "value",
					"axisLabel": {
						"margin": 8
					}
				},
				"grid3D": {
					"boxWidth": 120,
					"boxHeight": 80,
					"boxDepth": 80,
					"viewControl": {
						"autoRotate": false,
						"autoRotateSpeed": 10,
						"rotateSensitivity": 1
					}
				},
				// "title": [
				// 	{
				// 		"text": "\u5404\u53bf\u5e022014\u5e74\u81f32018\u5e74\u4eba\u5747\u6536\u5165\u53d8\u5316\u60c5\u51b5"
				// 	}
				// ]
			};
			chart1.setOption(option1);
		},
		loadchart2Callback: function(){
			var chart2 = echarts.init(
				document.getElementById('TwoChart'), 'white', {renderer: 'canvas'});
			var option2 = {
				"color": [
					"#c23531",
					"#2f4554",
					"#61a0a8",
					"#d48265",
					"#749f83",
					"#ca8622",
					"#bda29a",
					"#6e7074",
					"#546570",
					"#c4ccd3",
					"#f05b72",
					"#ef5b9c",
					"#f47920",
					"#905a3d",
					"#fab27b",
					"#2a5caa",
					"#444693",
					"#726930",
					"#b2d235",
					"#6d8346",
					"#ac6767",
					"#1d953f",
					"#6950a1",
					"#918597"
				],
				"series": [
					{
						"type": "scatter3D",
						"data": [
							[
								"\u4ea4\u901a\u6761\u4ef6\u843d\u540e",
								"2014",
								804
							],
							[
								"\u7f3a\u6280\u672f",
								"2014",
								18556
							],
							[
								"\u7f3a\u52b3\u529b",
								"2014",
								11039
							],
							[
								"\u7f3a\u6c34",
								"2014",
								612
							],
							[
								"\u7f3a\u571f\u5730",
								"2014",
								947
							],
							[
								"\u7f3a\u8d44\u91d1",
								"2014",
								18911
							],
							[
								"\u56e0\u75c5",
								"2014",
								30200
							],
							[
								"\u56e0\u6b8b",
								"2014",
								9647
							],
							[
								"\u56e0\u5a5a",
								"2014",
								0
							],
							[
								"\u56e0\u4e27",
								"2014",
								0
							],
							[
								"\u56e0\u5b66",
								"2014",
								3756
							],
							[
								"\u56e0\u707e",
								"2014",
								1032
							],
							[
								"\u81ea\u8eab\u53d1\u5c55\u52a8\u529b\u4e0d\u8db3",
								"2014",
								1798
							],
							[
								"\u5176\u4ed6",
								"2014",
								44
							],
							[
								"\u4ea4\u901a\u6761\u4ef6\u843d\u540e",
								"2015",
								507
							],
							[
								"\u7f3a\u6280\u672f",
								"2015",
								13828
							],
							[
								"\u7f3a\u52b3\u529b",
								"2015",
								8899
							],
							[
								"\u7f3a\u6c34",
								"2015",
								355
							],
							[
								"\u7f3a\u571f\u5730",
								"2015",
								681
							],
							[
								"\u7f3a\u8d44\u91d1",
								"2015",
								15111
							],
							[
								"\u56e0\u75c5",
								"2015",
								25821
							],
							[
								"\u56e0\u6b8b",
								"2015",
								10561
							],
							[
								"\u56e0\u5a5a",
								"2015",
								1
							],
							[
								"\u56e0\u4e27",
								"2015",
								0
							],
							[
								"\u56e0\u5b66",
								"2015",
								2571
							],
							[
								"\u56e0\u707e",
								"2015",
								919
							],
							[
								"\u81ea\u8eab\u53d1\u5c55\u52a8\u529b\u4e0d\u8db3",
								"2015",
								1400
							],
							[
								"\u5176\u4ed6",
								"2015",
								33
							],
							[
								"\u4ea4\u901a\u6761\u4ef6\u843d\u540e",
								"2016",
								254
							],
							[
								"\u7f3a\u6280\u672f",
								"2016",
								5928
							],
							[
								"\u7f3a\u52b3\u529b",
								"2016",
								4242
							],
							[
								"\u7f3a\u6c34",
								"2016",
								46
							],
							[
								"\u7f3a\u571f\u5730",
								"2016",
								152
							],
							[
								"\u7f3a\u8d44\u91d1",
								"2016",
								6892
							],
							[
								"\u56e0\u75c5",
								"2016",
								20824
							],
							[
								"\u56e0\u6b8b",
								"2016",
								11040
							],
							[
								"\u56e0\u5a5a",
								"2016",
								0
							],
							[
								"\u56e0\u4e27",
								"2016",
								0
							],
							[
								"\u56e0\u5b66",
								"2016",
								2097
							],
							[
								"\u56e0\u707e",
								"2016",
								487
							],
							[
								"\u81ea\u8eab\u53d1\u5c55\u52a8\u529b\u4e0d\u8db3",
								"2016",
								1390
							],
							[
								"\u5176\u4ed6",
								"2016",
								303
							],
							[
								"\u4ea4\u901a\u6761\u4ef6\u843d\u540e",
								"2017",
								140
							],
							[
								"\u7f3a\u6280\u672f",
								"2017",
								4689
							],
							[
								"\u7f3a\u52b3\u529b",
								"2017",
								3396
							],
							[
								"\u7f3a\u6c34",
								"2017",
								8
							],
							[
								"\u7f3a\u571f\u5730",
								"2017",
								72
							],
							[
								"\u7f3a\u8d44\u91d1",
								"2017",
								4075
							],
							[
								"\u56e0\u75c5",
								"2017",
								15214
							],
							[
								"\u56e0\u6b8b",
								"2017",
								10206
							],
							[
								"\u56e0\u5a5a",
								"2017",
								0
							],
							[
								"\u56e0\u4e27",
								"2017",
								0
							],
							[
								"\u56e0\u5b66",
								"2017",
								1586
							],
							[
								"\u56e0\u707e",
								"2017",
								348
							],
							[
								"\u81ea\u8eab\u53d1\u5c55\u52a8\u529b\u4e0d\u8db3",
								"2017",
								1113
							],
							[
								"\u5176\u4ed6",
								"2017",
								1206
							],
							[
								"\u4ea4\u901a\u6761\u4ef6\u843d\u540e",
								"2018",
								26
							],
							[
								"\u7f3a\u6280\u672f",
								"2018",
								1248
							],
							[
								"\u7f3a\u52b3\u529b",
								"2018",
								2729
							],
							[
								"\u7f3a\u6c34",
								"2018",
								0
							],
							[
								"\u7f3a\u571f\u5730",
								"2018",
								22
							],
							[
								"\u7f3a\u8d44\u91d1",
								"2018",
								1013
							],
							[
								"\u56e0\u75c5",
								"2018",
								6865
							],
							[
								"\u56e0\u6b8b",
								"2018",
								6961
							],
							[
								"\u56e0\u5a5a",
								"2018",
								6
							],
							[
								"\u56e0\u4e27",
								"2018",
								2
							],
							[
								"\u56e0\u5b66",
								"2018",
								571
							],
							[
								"\u56e0\u707e",
								"2018",
								166
							],
							[
								"\u81ea\u8eab\u53d1\u5c55\u52a8\u529b\u4e0d\u8db3",
								"2018",
								433
							],
							[
								"\u5176\u4ed6",
								"2018",
								179
							]
						],
						"label": {
							"show": false,
							"position": "top",
							"margin": 8,
							"color":'#fff'
						}
					}
				],
				"legend": [
					{
						"data": [
							""
						],
						"selected": {},
						"show": true
					}
				],
				"tooltip": {
					"show": true,
					"trigger": "item",
					"triggerOn": "mousemove|click",
					"formatter": function (a, b, c) {
						return "致贫原因： " + a.value[0] + "</br>年份： " + a.value[1] + "</br>户数： " + a.value[2]
					},
					"axisPointer": {
						"type": "line"
					},
					"textStyle": {
						"fontSize": 14,
						"color":'#fff'
					},
					"borderWidth": 0
				},
				"visualMap": [
					{
						"type": "continuous",
						"min": 0,
						"max": 35000,
						"textStyle": {
							color: '#fff'
						},
						"inRange": {
							"color": [
								"#313695",
								"#4575b4",
								"#74add1",
								"#abd9e9",
								"#e0f3f8",
								"#ffffbf",
								"#fee090",
								"#fdae61",
								"#f46d43",
								"#d73027",
								"#a50026"
							]
						},
						"calculable": true,
						"splitNumber": 5,
						"orient": "vertical",
						"showLabel": true
					},
					{
						"type": "continuous",
						"min": 0,
						"max": 35000,
						"textStyle": {
							color: '#fff'
						},
						"inRange": {
							"symbolSize": [
								10,
								50
							]
						},
						"calculable": true,
						"splitNumber": 5,
						"orient": "vertical",
						"showLabel": true
					}
				],
				"xAxis3D": {
					"data": [
						"\u4ea4\u901a\u6761\u4ef6\u843d\u540e",
						"\u7f3a\u6280\u672f",
						"\u7f3a\u52b3\u529b",
						"\u7f3a\u6c34",
						"\u7f3a\u571f\u5730",
						"\u7f3a\u8d44\u91d1",
						"\u56e0\u75c5",
						"\u56e0\u6b8b",
						"\u56e0\u5a5a",
						"\u56e0\u4e27",
						"\u56e0\u5b66",
						"\u56e0\u707e",
						"\u81ea\u8eab\u53d1\u5c55\u52a8\u529b\u4e0d\u8db3",
						"\u5176\u4ed6"
					],
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"name": "\u81f4\u8d2b\u539f\u56e0",
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8,
						"interval": 0,
						"color":'#fff'
					}
				},
				"yAxis3D": {
					"data": [
						"2014",
						"2015",
						"2016",
						"2017",
						"2018"
					],
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"name": "\u5e74\u4efd",
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8,
						"color":'#fff'
					}
				},
				"zAxis3D": {
					"name": "\u6237\u6570",
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"nameGap": 20,
					"type": "value",
					"axisLabel": {
						"margin": 8,
						"color":'#fff'
					}
				},
				"grid3D": {
					"boxWidth": 140,
					"boxHeight": 80,
					"boxDepth": 80,
					"viewControl": {
						"autoRotate": false,
						"autoRotateSpeed": 10,
						"rotateSensitivity": 1
					}
				},
				// "title": [
				// 	{
				// 		"text": "2014\u5e74\u81f32018\u5e74\u4e3b\u8981\u81f4\u8d2b\u539f\u56e0\u53d8\u5316\u60c5\u51b5"
				// 	}
				// ]
			};
			chart2.setOption(option2);
		},
		loadchart3Callback: function (result) {
			var firstData = [];
			var firstSeries1 = [];
			$.each(result, function (key, values) {
				firstData.push(values[0]);
				firstSeries1.push(values[1]);
			});
			var chart3 = echarts.init(document.getElementById('ThreeChart'));
			var option3 = {
				tooltip: {
					trigger: 'axis',
				},
				xAxis: [
					{
						type: 'category',
						data: firstData,
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
						min: 0,
						axisLabel: {
							formatter: '{value}'
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
						name: '人口',
						type: 'bar',
						data: firstSeries1,
						barWidth: '25',
						markPoint: {
							data: [
								{type: 'max', name: '最大值'},
								{type: 'min', name: '最小值'}
							]
						},
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#69fefe'
                                }, {
                                    offset: 1,
                                    color: '#d79df2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
					}
				]
			};
			chart3.setOption(option3);
		},
		loadchart4Callback: function (result) {
			var secondData = [];
			var secondSeries1 = [];
			var secondSeries2 = [];
			var secondSeries3 = [];
			$.each(result, function (key, values) {
				secondData.push(values[0]);
				secondSeries1.push(values[1]);
				secondSeries2.push(values[2]);
				secondSeries3.push(values[3]);
			});
			var chart4 = echarts.init(document.getElementById('FourChart'));
			var option4 = {
				tooltip: {
					trigger: 'axis',
				},
				legend: {
					data: ['2018年底贫困发生率', '2017年底贫困发生率', '降幅'],
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
				xAxis: [
					{
						type: 'category',
						data: secondData,
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
						min: 0,
						name: '贫困发生率',
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
					},
					{
						type: 'value',
						min: 0,
						name: '降幅',
						axisLine: {
							lineStyle: {
								color: '#FFF',
							}
						},
						axisLabel: {
							formatter: '{value}'
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
						name: '2018年底贫困发生率',
						type: 'bar',
						data: secondSeries1,
						itemStyle: {
							normal: {
								color: '#00e8ff'
							}
						},
						markPoint: {
							data: [
								{type: 'max', name: '最大值'},
								{type: 'min', name: '最小值'}
							]
						},
					},
					{
						name: '2017年底贫困发生率',
						type: 'bar',
						data: secondSeries2,
						itemStyle: {
							normal: {
								color: '#ff00fa'
							}
						},
						markPoint: {
							data: [
								{type: 'max', name: '最大值'},
								{type: 'min', name: '最小值'}
							]
						},
					},
					{
						name: '降幅',
						type: 'line',
						yAxisIndex: 1,
						smooth: true,
						data: secondSeries3,
						itemStyle: {
							normal: {
								color: '#ff0003'
							}
						}
					}
				]
			};
			chart4.setOption(option4);
		},
		loadchart5Callback: function (result) {
			var thirdData = [];
			var thirdSeries1 = [];
			$.each(result, function (key, values) {
				thirdData.push(values[0]);
				thirdSeries1.push(values[1]);
			});
			var chart5 = echarts.init(document.getElementById('FiveChart'));
			var option5 = {
				tooltip: {
					trigger: 'axis',
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
						data: thirdData,
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
						min: 0,
						axisLabel: {
							formatter: '{value}'
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
						name: '2018年底',
						type: 'bar',
						data: thirdSeries1,
						barWidth: '25',
						markPoint: {
							data: [
								{type: 'max', name: '最大值'},
								{type: 'min', name: '最小值'}
							]
						},
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ad7ffe'
                                }, {
                                    offset: 1,
                                    color: '#73bbf2'
                                }]),
                                barBorderRadius:[4,4,2,2]
                            }
                        },
					}
				]
			};
			chart5.setOption(option5);
		},
		loadchart6Callback: function() {
			var chart6 = echarts.init(
				document.getElementById('SixChart'), 'white', {renderer: 'canvas'});
			var option6 = {
				"color": [
					"#c23531",
					"#2f4554",
					"#61a0a8",
					"#d48265",
					"#749f83",
					"#ca8622",
					"#bda29a",
					"#6e7074",
					"#546570",
					"#c4ccd3",
					"#f05b72",
					"#ef5b9c",
					"#f47920",
					"#905a3d",
					"#fab27b",
					"#2a5caa",
					"#444693",
					"#726930",
					"#b2d235",
					"#6d8346",
					"#ac6767",
					"#1d953f",
					"#6950a1",
					"#918597"
				],
				"series": [
					{
						"type": "bar3D",
						"data": [
							[
								"\u4e09\u539f\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								1277
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								3953
							],
							[
								"\u4e7e\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								9470
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								4450
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								12485
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u4ea7\u4e1a\u6276\u8d2b",
								6796
							],
							[
								"\u957f\u6b66\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								9041
							],
							[
								"\u65ec\u9091\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								9143
							],
							[
								"\u6df3\u5316\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								8166
							],
							[
								"\u6b66\u529f\u53bf",
								"\u4ea7\u4e1a\u6276\u8d2b",
								3573
							],
							[
								"\u5174\u5e73\u5e02",
								"\u4ea7\u4e1a\u6276\u8d2b",
								2096
							],
							[
								"\u4e09\u539f\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								1557
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								3551
							],
							[
								"\u4e7e\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								6100
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								4328
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								5038
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u5c31\u4e1a\u6276\u8d2b",
								3731
							],
							[
								"\u957f\u6b66\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								3276
							],
							[
								"\u65ec\u9091\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								2130
							],
							[
								"\u6df3\u5316\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								6802
							],
							[
								"\u6b66\u529f\u53bf",
								"\u5c31\u4e1a\u6276\u8d2b",
								2644
							],
							[
								"\u5174\u5e73\u5e02",
								"\u5c31\u4e1a\u6276\u8d2b",
								2099
							],
							[
								"\u4e09\u539f\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								2012
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								4777
							],
							[
								"\u4e7e\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								8177
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								6774
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								7317
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u6559\u80b2\u6276\u8d2b",
								7011
							],
							[
								"\u957f\u6b66\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								4844
							],
							[
								"\u65ec\u9091\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								6760
							],
							[
								"\u6df3\u5316\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								4931
							],
							[
								"\u6b66\u529f\u53bf",
								"\u6559\u80b2\u6276\u8d2b",
								7191
							],
							[
								"\u5174\u5e73\u5e02",
								"\u6559\u80b2\u6276\u8d2b",
								3760
							],
							[
								"\u4e09\u539f\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								207
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								191
							],
							[
								"\u4e7e\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								1928
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								244
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								277
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u5065\u5eb7\u6276\u8d2b",
								724
							],
							[
								"\u957f\u6b66\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								1263
							],
							[
								"\u65ec\u9091\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								637
							],
							[
								"\u6df3\u5316\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								1167
							],
							[
								"\u6b66\u529f\u53bf",
								"\u5065\u5eb7\u6276\u8d2b",
								748
							],
							[
								"\u5174\u5e73\u5e02",
								"\u5065\u5eb7\u6276\u8d2b",
								232
							],
							[
								"\u4e09\u539f\u53bf",
								"\u5371\u623f\u6539\u9020",
								95
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u5371\u623f\u6539\u9020",
								244
							],
							[
								"\u4e7e\u53bf",
								"\u5371\u623f\u6539\u9020",
								802
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u5371\u623f\u6539\u9020",
								925
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u5371\u623f\u6539\u9020",
								506
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u5371\u623f\u6539\u9020",
								188
							],
							[
								"\u957f\u6b66\u53bf",
								"\u5371\u623f\u6539\u9020",
								266
							],
							[
								"\u65ec\u9091\u53bf",
								"\u5371\u623f\u6539\u9020",
								752
							],
							[
								"\u6df3\u5316\u53bf",
								"\u5371\u623f\u6539\u9020",
								526
							],
							[
								"\u6b66\u529f\u53bf",
								"\u5371\u623f\u6539\u9020",
								379
							],
							[
								"\u5174\u5e73\u5e02",
								"\u5371\u623f\u6539\u9020",
								423
							],
							[
								"\u4e09\u539f\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								3093
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								3222
							],
							[
								"\u4e7e\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								6944
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								6441
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								3563
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u515c\u5e95\u4fdd\u969c",
								4996
							],
							[
								"\u957f\u6b66\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								3560
							],
							[
								"\u65ec\u9091\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								7137
							],
							[
								"\u6df3\u5316\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								5603
							],
							[
								"\u6b66\u529f\u53bf",
								"\u515c\u5e95\u4fdd\u969c",
								3796
							],
							[
								"\u5174\u5e73\u5e02",
								"\u515c\u5e95\u4fdd\u969c",
								3636
							],
							[
								"\u4e09\u539f\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								536
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								687
							],
							[
								"\u4e7e\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								489
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								608
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								580
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								1884
							],
							[
								"\u957f\u6b66\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								5218
							],
							[
								"\u65ec\u9091\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								1192
							],
							[
								"\u6df3\u5316\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								5442
							],
							[
								"\u6b66\u529f\u53bf",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								197
							],
							[
								"\u5174\u5e73\u5e02",
								"\u751f\u6001\u8865\u507f\u6276\u8d2b",
								0
							]
						],
						"label": {
							"show": false,
							"position": "top",
							"margin": 8,
							"color":'#fff'
						}
					}
				],
				"legend": [
					{
						"data": [
							""
						],
						"selected": {},
						"show": true
					}
				],
				"tooltip": {
					"show": true,
					"trigger": "item",
					"triggerOn": "mousemove|click",
					"formatter": function (a, b, c) {
						return "地区： " + a.value[0] + "</br>脱贫措施： " + a.value[1] + "</br>户数： " + a.value[2]
					},
					"axisPointer": {
						"type": "line"
					},
					"textStyle": {
						"fontSize": 14,
						"color":'#fff'
					},
					"borderWidth": 0
				},
				"visualMap": {
					"type": "continuous",
					"min": 0,
					"max": 12000,
					"textStyle": {
						color: '#fff'
					},
					"inRange": {
						"color": [
							"#313695",
							"#4575b4",
							"#74add1",
							"#abd9e9",
							"#e0f3f8",
							"#ffffbf",
							"#fee090",
							"#fdae61",
							"#f46d43",
							"#d73027",
							"#a50026"
						]
					},
					"calculable": true,
					"splitNumber": 5,
					"orient": "vertical",
					"showLabel": true
				},
				"xAxis3D": {
					"data": [
						"\u4e09\u539f\u53bf",
						"\u6cfe\u9633\u53bf",
						"\u4e7e\u53bf",
						"\u793c\u6cc9\u53bf",
						"\u6c38\u5bff\u53bf",
						"\u5f6c\u5dde\u5e02",
						"\u957f\u6b66\u53bf",
						"\u65ec\u9091\u53bf",
						"\u6df3\u5316\u53bf",
						"\u6b66\u529f\u53bf",
						"\u5174\u5e73\u5e02"
					],
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"name": "\u5730\u533a",
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8,
						"interval": 0
					}
				},
				"yAxis3D": {
					"data": [
						"\u4ea7\u4e1a\u6276\u8d2b",
						"\u5c31\u4e1a\u6276\u8d2b",
						"\u6559\u80b2\u6276\u8d2b",
						"\u5065\u5eb7\u6276\u8d2b",
						"\u5371\u623f\u6539\u9020",
						"\u515c\u5e95\u4fdd\u969c",
						"\u751f\u6001\u8865\u507f\u6276\u8d2b"
					],
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"name": "\u8131\u8d2b\u63aa\u65bd",
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8
					}
				},
				"zAxis3D": {
					"name": "\u6237\u6570",
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"nameGap": 20,
					"type": "value",
					"axisLabel": {
						"margin": 8
					}
				},
				"grid3D": {
					"boxWidth": 120,
					"boxHeight": 80,
					"boxDepth": 80,
					"viewControl": {
						"autoRotate": false,
						"autoRotateSpeed": 10,
						"rotateSensitivity": 1
					}
				},
				// "title": [
				// 	{
				// 		"text": "\u5404\u53bf\u5e02\u8131\u8d2b\u6237\u7d2f\u8ba1\u4eab\u53d7\u8131\u8d2b\u63aa\u65bd"
				// 	}
				// ]
			};
			chart6.setOption(option6);
		},
		loadchart7Callback: function(){
			var chart7 = echarts.init(
				document.getElementById('SevenChart'), 'white', {renderer: 'canvas'});
			var option7 = {
				"color": [
					"#c23531",
					"#2f4554",
					"#61a0a8",
					"#d48265",
					"#749f83",
					"#ca8622",
					"#bda29a",
					"#6e7074",
					"#546570",
					"#c4ccd3",
					"#f05b72",
					"#ef5b9c",
					"#f47920",
					"#905a3d",
					"#fab27b",
					"#2a5caa",
					"#444693",
					"#726930",
					"#b2d235",
					"#6d8346",
					"#ac6767",
					"#1d953f",
					"#6950a1",
					"#918597"
				],
				"series": [
					{
						"type": "bar3D",
						"data": [
							[
								"\u4e09\u539f\u53bf",
								"\u5e72\u755c\u7caa",
								69
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u5e72\u755c\u7caa",
								32
							],
							[
								"\u4e7e\u53bf",
								"\u5e72\u755c\u7caa",
								37
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u5e72\u755c\u7caa",
								21
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u5e72\u755c\u7caa",
								3
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u5e72\u755c\u7caa",
								26
							],
							[
								"\u957f\u6b66\u53bf",
								"\u5e72\u755c\u7caa",
								15
							],
							[
								"\u65ec\u9091\u53bf",
								"\u5e72\u755c\u7caa",
								48
							],
							[
								"\u6df3\u5316\u53bf",
								"\u5e72\u755c\u7caa",
								1
							],
							[
								"\u6b66\u529f\u53bf",
								"\u5e72\u755c\u7caa",
								9
							],
							[
								"\u5174\u5e73\u5e02",
								"\u5e72\u755c\u7caa",
								8
							],
							[
								"\u4e09\u539f\u53bf",
								"\u7164\u70ad",
								1574
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u7164\u70ad",
								1756
							],
							[
								"\u4e7e\u53bf",
								"\u7164\u70ad",
								522
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u7164\u70ad",
								47
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u7164\u70ad",
								1035
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u7164\u70ad",
								3059
							],
							[
								"\u957f\u6b66\u53bf",
								"\u7164\u70ad",
								1260
							],
							[
								"\u65ec\u9091\u53bf",
								"\u7164\u70ad",
								1141
							],
							[
								"\u6df3\u5316\u53bf",
								"\u7164\u70ad",
								180
							],
							[
								"\u6b66\u529f\u53bf",
								"\u7164\u70ad",
								1065
							],
							[
								"\u5174\u5e73\u5e02",
								"\u7164\u70ad",
								339
							],
							[
								"\u4e09\u539f\u53bf",
								"\u5176\u4ed6",
								319
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u5176\u4ed6",
								1051
							],
							[
								"\u4e7e\u53bf",
								"\u5176\u4ed6",
								831
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u5176\u4ed6",
								531
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u5176\u4ed6",
								251
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u5176\u4ed6",
								1029
							],
							[
								"\u957f\u6b66\u53bf",
								"\u5176\u4ed6",
								187
							],
							[
								"\u65ec\u9091\u53bf",
								"\u5176\u4ed6",
								801
							],
							[
								"\u6df3\u5316\u53bf",
								"\u5176\u4ed6",
								326
							],
							[
								"\u6b66\u529f\u53bf",
								"\u5176\u4ed6",
								1266
							],
							[
								"\u5174\u5e73\u5e02",
								"\u5176\u4ed6",
								950
							],
							[
								"\u4e09\u539f\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								1304
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								2005
							],
							[
								"\u4e7e\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								1459
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								116
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								1819
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u6e05\u6d01\u80fd\u6e90",
								647
							],
							[
								"\u957f\u6b66\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								2132
							],
							[
								"\u65ec\u9091\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								242
							],
							[
								"\u6df3\u5316\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								516
							],
							[
								"\u6b66\u529f\u53bf",
								"\u6e05\u6d01\u80fd\u6e90",
								1750
							],
							[
								"\u5174\u5e73\u5e02",
								"\u6e05\u6d01\u80fd\u6e90",
								2713
							],
							[
								"\u4e09\u539f\u53bf",
								"\u67f4\u8349",
								4487
							],
							[
								"\u6cfe\u9633\u53bf",
								"\u67f4\u8349",
								10802
							],
							[
								"\u4e7e\u53bf",
								"\u67f4\u8349",
								18028
							],
							[
								"\u793c\u6cc9\u53bf",
								"\u67f4\u8349",
								16687
							],
							[
								"\u6c38\u5bff\u53bf",
								"\u67f4\u8349",
								9945
							],
							[
								"\u5f6c\u5dde\u5e02",
								"\u67f4\u8349",
								10065
							],
							[
								"\u957f\u6b66\u53bf",
								"\u67f4\u8349",
								6652
							],
							[
								"\u65ec\u9091\u53bf",
								"\u67f4\u8349",
								12984
							],
							[
								"\u6df3\u5316\u53bf",
								"\u67f4\u8349",
								11289
							],
							[
								"\u6b66\u529f\u53bf",
								"\u67f4\u8349",
								9899
							],
							[
								"\u5174\u5e73\u5e02",
								"\u67f4\u8349",
								6045
							]
						],
						"label": {
							"show": false,
							"position": "top",
							"margin": 8
						}
					}
				],
				"legend": [
					{
						"data": [
							""
						],
						"selected": {},
						"show": true
					}
				],
				"tooltip": {
					"show": true,
					"trigger": "item",
					"formatter": function(a, b, c){
						return "地区： " + a.value[0] + "</br>类型： " + a.value[1] + "</br>户数： " + a.value[2]
					},
					"triggerOn": "mousemove|click",
					"axisPointer": {
						"type": "line"
					},
					"textStyle": {
						"fontSize": 14
					},
					"borderWidth": 0
				},
				"visualMap": {
					"type": "continuous",
					"min": 0,
					"max": 20000,
					"textStyle": {
						color: '#fff'
					},
					"inRange": {
						"color": [
							"#313695",
							"#4575b4",
							"#74add1",
							"#abd9e9",
							"#e0f3f8",
							"#ffffbf",
							"#fee090",
							"#fdae61",
							"#f46d43",
							"#d73027",
							"#a50026"
						]
					},
					"calculable": true,
					"splitNumber": 5,
					"orient": "vertical",
					"showLabel": true
				},
				"xAxis3D": {
					"data": [
						"\u4e09\u539f\u53bf",
						"\u6cfe\u9633\u53bf",
						"\u4e7e\u53bf",
						"\u793c\u6cc9\u53bf",
						"\u6c38\u5bff\u53bf",
						"\u5f6c\u5dde\u5e02",
						"\u957f\u6b66\u53bf",
						"\u65ec\u9091\u53bf",
						"\u6df3\u5316\u53bf",
						"\u6b66\u529f\u53bf",
						"\u5174\u5e73\u5e02"
					],
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"name": "\u5730\u533a",
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8,
						"interval": 0
					}
				},
				"yAxis3D": {
					"data": [
						"\u5e72\u755c\u7caa",
						"\u7164\u70ad",
						"\u5176\u4ed6",
						"\u6e05\u6d01\u80fd\u6e90",
						"\u67f4\u8349"
					],
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"name": "\u7c7b\u578b",
					"nameGap": 20,
					"type": "category",
					"axisLabel": {
						"margin": 8
					}
				},
				"zAxis3D": {
					"name": "\u6237\u6570",
					axisLine: {
						lineStyle: {
							color: '#fff',
						}
					},
					"nameGap": 20,
					"type": "value",
					"axisLabel": {
						"margin": 8
					}
				},
				"grid3D": {
					"boxWidth": 140,
					"boxHeight": 80,
					"boxDepth": 80,
					"viewControl": {
						"autoRotate": false,
						"autoRotateSpeed": 10,
						"rotateSensitivity": 1
					}
				},
				// "title": [
				// 	{
				// 		"text": "\u5168\u5e022018\u5e74\u5efa\u6863\u7acb\u5361\u6237\u4e3b\u8981\u71c3\u6599\u7c7b\u578b\u5206\u6790"
				// 	}
				// ]
			};
			chart7.setOption(option7);
		},
		loadchart8Callback: function (result) {
			console.log(result);
			var rkgmSeries1 = [];
			var rkgmSeries2 = [];
			var rkgmSeries3 = [];
			$.each(result, function (key, values) {
				rkgmSeries1.push(values[0]);
				rkgmSeries2.push(values[1]);
				rkgmSeries3.push(values[2]);
			});
			var chart8 = echarts.init(document.getElementById('EightChart'));
			var option8 = {
				// title: {
				// 	text: '剩余贫困人口规模',
				// 	x: '180',
				// 	y: 'center',
				// 	itemGap: 20,
				// 	textStyle : {
				// 		color : '#fff',
				// 		fontFamily : '微软雅黑',
				// 		fontSize : 16,
				// 		fontWeight : 'bolder'
				// 	}
				// },
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
						name:'1',
						type:'pie',
						clockWise:false,
						radius : [50, 75],
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
						name:'2',
						type:'pie',
						clockWise:false,
						radius : [75, 95],
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
			chart8.setOption(option8);
		},
		loadchart9Callback: function (result) {
			var dataxsbpkhnf = [];
			var dataXsbpkhsj = [];
			$.each(result, function (key, values) {
				dataxsbpkhnf.push(values[0]);
				dataXsbpkhsj.push(values[1]);
			});
			var chart9 = echarts.init(document.getElementById('NineChart'));
			var option9 = {
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
						name: '贫困户数',
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
                                    color: ['rgba(134,255,242,0.3)','rgba(238,130,120,0.3)']
                                },
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#86fff2'
								}, {
									offset: 1,
									color: '#ee8278'
								}]),//线条渐变色#008B45
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
						symbolSize: 10,
						data: dataXsbpkhsj
					},

				]
			};
			chart9.setOption(option9);
		},
		loadchart10Callback: function (result) {
			var datapaih1 = [];
			var datapaih2 = [];
			$.each(result, function (key, values) {
				datapaih1.push(values[0]);
				datapaih2.push(values[1]);
			});
			console.log(datapaih1,"datapaih1");
			var chart10 = echarts.init(document.getElementById('TenChart'));
			var option10 = {
				dataset: {
					source: [
						['score', 'product'],
						[7154.28, '旬邑县'],
						[7578.25, '礼泉县'],
						[7618.13, '乾县'],
						[7788.97, '永寿县'],
						[8929.54, '淳化县'],
						[8956.14,'武功县'],
						[9001.53, '彬州市'],
						[10157.71, '长武县'],
						[10608.15, '三原县'],
						[11011.26, '泾阳县'],
						[16919.12,'兴平市']
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
			chart10.setOption(option10);
		},
		loadchart11Callback: function (result) {
			var datapaih1 = [];
			var datapaih2 = [];
			$.each(result, function (key, values) {
				datapaih1.push(values[0]);
				datapaih2.push(values[1]);
			});
			console.log(datapaih1,"datapaih1");
			var chart11 = echarts.init(document.getElementById('EleChart'));
			var option11 = {
				dataset: {
					source: [
						['score', 'product'],
						[143, '兴平市'],
						[287, '三原县'],
						[359, '泾阳县'],
						[1038, '武功县'],
						[1868, '礼泉县'],
						[2267, '彬州市'],
						[2311, '长武县'],
						[2336, '乾县'],
						[2352,'旬邑县'],
						[4122,'永寿县'],
						[4334,'淳化县']
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
					min: 143,
					max: 4334,
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
			chart11.setOption(option11);
		},
		loadchart12Callback: function (result) {
			var fifthDataDoor = [];
			var fifthSeriesDoor1 = [];
			$.each(result, function (key, values) {
				fifthDataDoor.push(values[0]);
				fifthSeriesDoor1.push(values[1]);
			});
			console.log(fifthSeriesDoor1,"fifthSeriesDoor1-----")
			var chart12 = echarts.init(document.getElementById('TweChart'));
			var a = 0, b = 1, c = 2;
			var option12 = {
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
			chart12.setOption(option12);
		},
		loadchart13Callback: function (result) {
			var pkrszbData = [];
			var pkrszbSeries = [];
			$.each(result, function (key, values) {
				pkrszbData.push(values[0]);
				pkrszbSeries.push(values[1]);
			});
			console.log(pkrszbData,"pkrszbData")
			var chart13 = echarts.init(document.getElementById('ThiChart'));
			var a = 0, b = 1, c = 2;
			var option13 = {
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
			chart13.setOption(option13);
		},
		loadchart14Callback: function (result) {
			var gxsldzkzjSeries1 = [];
			var gxsldzkzjSeries2 = [];
			$.each(result, function (key, values) {
				gxsldzkzjSeries1.push(values[0]);
				gxsldzkzjSeries2.push(values[1]);
			});
			var chart14 = echarts.init(document.getElementById('FourteenChart'));
			var option14 = {
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
                                    color: ['rgba(251,225,150,0.3)','rgba(34,238,198,0.3)']
                                },
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#fbff96'
								}, {
									offset: 1,
									color: '#22eec6'
								}]),//线条渐变色#008B45
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
						symbolSize: 10,
						data: gxsldzkzjSeries2
					}
				]
			};
			chart14.setOption(option14);
		},
		loadchart15Callback: function (result) {
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
			var chart15 = echarts.init(document.getElementById('FifteenChart'));
			var option15 = {
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
			chart15.setOption(option15);
		},
		loadchart16Callback: function (result) {
			var gxspkhzjSeries1 = [];
			var gxspkhzjSeries2 = [];
			$.each(result, function (key, values) {
				gxspkhzjSeries1.push(values[0]);
				gxspkhzjSeries2.push(values[1]);
			});
			var chart16= echarts.init(document.getElementById('SixteenChart'));
			var option16 = {
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
			chart16.setOption(option16);
		},
		loadchart17Callback: function(result) {
			var dataxmzbxq = [];
			var dataXmzbh = [];
			var dataXmzbsr = [];
			$.each(result,function(key,values){
				console.log(values[0])
				dataxmzbxq.push(values[0]);
				dataXmzbh.push(values[1]);
				dataXmzbsr.push(values[2]);
			});
			var chart17 = echarts.init(document.getElementById('SeventeenChart'));
			var option17 = {
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
						splitLine:{
							show:true,
							lineStyle:{
								type:'dashed',
								color:'#072538'
							}
						},
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
								barBorderRadius:[4,4,2,2]
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
			chart17.setOption(option17);
		},
		loadchart18Callback: function (result) {
			var datafpcyzj1 = [];
			var datafpcyzj2 = [];
			$.each(result, function (key, values) {
				datafpcyzj1.push(values[0]);
				datafpcyzj2.push(values[1]);
			});
			var chart18 = echarts.init(document.getElementById('EighteenChart'));
			var option18 = {
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
						name: '报销总计',
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
			chart18.setOption(option18);
		},
		loadchart19Callback: function (result) {
			var dataxsbpkhs = [];
			var dataXsbhszb = [];
			$.each(result, function (key, values) {
				dataxsbpkhs.push(values[0]);
				dataXsbhszb.push(values[1]);
			});
			console.log(dataXsbhszb);
			var chart19 = echarts.init(document.getElementById('NineteenChart'));
			var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, h = 7, i = 8, j = 9, k = 10, l = 11, m = 12;
			var option19 = {
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
			chart19.setOption(option19);
		},
		loadchart20Callback: function(result) {
			var datagxskjbf1 = [];
			var datagxskjbf2 = [];
			$.each(result, function (key, values) {
				datagxskjbf1.push(values[0]);
				datagxskjbf2.push(values[1]);
			});
			var chart20 = echarts.init(document.getElementById('TwentyChart'));
			var option20 = {
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
			chart20.setOption(option20);
		},
		loadchart21Callback: function (result) {
			var dataytprlmc = [];
			var dataRlytpfxfb = [];
			$.each(result, function (key, values) {
				dataytprlmc.push(values[0]);
				dataRlytpfxfb.push(values[1]);
			});
			var chart21 = echarts.init(document.getElementById('TwentyOneChart'));
			var a = 0, b = 1, c = 2, d = 3, e = 4;
			var option21 = {
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
									formatter: '{b} {d}%'
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
			chart21.setOption(option21);
		},
		loadchart22Callback: function (result) {
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

			var chart22 = echarts.init(document.getElementById('TwentyTwoChart'));
			var option22 = {
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
			chart22.setOption(option22);
		},
		//地图
		loadchartMapCallback: function() {
			var xyGeoCoordMap = {
				'渭城区': [108.750957, 34.436847],
				'三原县': [108.943481, 34.703996],
				'秦都区': [108.628636, 34.329801],
				'乾县': [108.247406, 34.527261],
				'泾阳县': [108.70784, 34.608493],
				'彬县': [108.083674, 35.034233],
				'礼泉县': [108.428317, 34.582583],
				'长武县': [107.795835, 35.155022],
				'淳化县': [108.510150, 34.87797],
				'永寿县': [108.083129, 34.822619],
				'旬邑县': [108.337231, 35.112234],
				'武功县': [108.192857, 34.289732],
				'兴平市': [108.408493, 34.297134]
			};
			var xyconvertData = function (data) {
				var res = [];
				// for (var i = 0; i < data.length; i++) {
				// 	var fromCoord = xyGeoCoordMap[data[i].name];
				// 	var toCoord = xyGeoCoordMap['渭城区'];
				// 	if (fromCoord && toCoord) {
				// 		res.push({
				// 			fromName: '渭城区',
				// 			toName: data[i].name,
				// 			coords: [fromCoord, toCoord]
				// 		});
				// 	}
				// }
				return res;
			};
			var _arr = [];
			var excdatafn = function (_excdata) {
				$.each(_excdata, function (i) {
					_arr.push({
						name: _excdata[i].name,
						value: xyGeoCoordMap[_excdata[i].name].concat([_excdata[i].value]),
						num:_excdata[i].value
					});

				});
				console.log(_arr)
				return _arr;
			}
			var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
			var map = echarts.init(document.getElementById('map'), 'theme');
			var mapChart_option = {
				legend: {show: false},
				tooltip: {
					trigger: 'item',
					formatter: function (params) {
						return params.name + '<br />脱贫人数' + ' : '+params.data.num;
					}
				},
				dataRange: {
					min: 0,
					max: 110,
					show: false,
					calculable: true,
					color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
					textStyle: {
						color: '#fff'
					}
				},
				geo: {
					map: 'xianyang',
					roam: false,
					left: 'center',
					bottom: 30,
					top: 30,
//          top:'middle',
					label: {
						normal: {show: false, textStyle: {color: '#ece7ff', fontSize: 9}},
						emphasis: {show: false, textStyle: {color: '#ece7ff'}}
					},
					itemStyle: {
						normal: {color: '#f00', areaColor: '#264087', borderColor: '#3977d1'},
						emphasis: {areaColor: '#3553a4', borderColor: '#3977d1'}
					}
				},
				series: [
					{
						type: 'lines',
						zlevel: 1,
						effect: {
							show: true,
							period: 4,
							trailLength: 0.5,
//                  	color: 'rgba(255,255,255,0.2)',
							color: '#84F572',
							opacity: 0.3,
							shadowBlur: 4,
							symbolSize: 4
						},
						lineStyle: {
							normal: {
								color: 'rgba(100,149,237,0.1)',
								//                  	opacity:0.1,
								width: 1,
								curveness: 0.2
							}
						},
						data: []
					},
					{
						type: 'lines',
						zlevel: 2,
						effect: {
							show: true,
							period: 4,
							trailLength: 0,
							symbol: planePath,
//                  	symbol: 'emptyCircle',
							symbolSize: 10
//                  	symbolSize:  function (v){
//		                    return 10 + v/10
//		                }
						},
						lineStyle: {
							normal: {
								width: 0,
								color: '#84F572',
								opacity: 0.1,
								curveness: 0.2
							}
						},
						data: []
					},
					{
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: {brushType: 'stroke'},
						label: {
							normal: {
								show: true, position: 'right', position: [20, -4],
								textStyle: {color: '#ece7ff'},
								formatter: function (params) {
									return params.name;
								}
							}
						},
						symbolSize: 10,
//                  symbolSize: function (val) {
//			            return val[2] / 8;
//			        },
						itemStyle: {normal: {color: '#84F572'}},
						data: []
					}
				]
			};
			$.getJSON('./data/index-map.json', function (_data) {
				if (200 === _data.status) {
					console.log(_data)
					var _cdata = _data.cdata, _arr = [];
					$.each(_cdata, function (i) {
						_arr.push({name: _cdata[i].name, value: _cdata[i].value});
					});
					mapChart_option.series[0].data = xyconvertData(_arr);
					mapChart_option.series[1].data = xyconvertData(_arr);
					mapChart_option.series[2].data = excdatafn(_arr);
					map.setOption(mapChart_option);
				}
			});
		},
	}
};

$(function () {
	service.init();
//	页面跳转
	document.onkeydown=function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==40){ //下
			window.location.href="./pages/pageOne.html";
		}
	};
});