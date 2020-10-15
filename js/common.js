//获取当前日期
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	$('#nowTime span').html(currentdate)

//获取天气
$.ajax({
	type: 'GET',
	url: 'https://www.tianqiapi.com/api/',
	data: 'version=v1&style=1001&city=',
	dataType: 'JSON',
	error: function () {
		alert('网络错误');
	},
	success: function (res) {
		// uptime = res.update_time.substring(11);
		// uptime = uptime.substring(0,uptime.length-3);
		// console.log('[' + res.city + ']' + res.data[0].wea + ' ' + res.data[0].tem1 + '/' + res.data[0].tem2 + ',' + uptime + '更新~');
		// $('#weather span').html('[ ' + res.city + ' ] '+ res.data[0].tem1 + '/' + res.data[0].tem2 );
	}
});

//---------------------倒计时----------------------------//
function ShowCountDown(year,month,day,divname)
{
	var now = new Date();
	var endDate = new Date(year, month, day);
	var leftTime=endDate.getTime()-now.getTime();
	var dd = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
	var hh = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
	var mm = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟数
	var ss = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
	dd = checkTime(dd);
	hh = checkTime(hh);
	mm = checkTime(mm);
	ss = checkTime(ss);//小于10的话加0
	$('#days').html(dd);
	$('#ss').html(hh);
	$('#ms').html(mm);
	$('#mm').html(ss);
	// cc.innerHTML = "距离" + year + "年" + month + "月" + day + "日还有：" + dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
}
function checkTime(i)
{
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
window.setInterval(function(){ShowCountDown(2019,12,31,'countdown');}, 1000);
