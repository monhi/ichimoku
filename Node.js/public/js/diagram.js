window.onload = function () {}


function FetchFunction()
{
	fetch('http://localhost:3000/v1/getData')
	.then(data => {
	return data.json();
	})
	.then(post => {
	console.log(post.title);
	console.log(post.Date);

	let starttime = new Date(post.Date);
	
//	console.log(starttime.getDay());
//	console.log(starttime.getHours());
//	console.log(starttime.getMinutes());

	});

}

function RenderFunction(title,date,quantom,ChikouSpan,KijunSen,Kumo,TenkanSen,RawData)
{

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	title:{
		text: "Stock Price: AT&T Vs Verizon for 2016"
	},
	axisX: {
		valueFormatString: "MMM DD"
	},
	axisY: {
		includeZero:false, 
		prefix: "$",
		title: "Price (in USD)"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toogleDataSeries
	},
	data: [{
		type: "candlestick",
		showInLegend: true,
		name: "AT&T",
		yValueFormatString: "$###0.00",
		//xValueFormatString: "DD MMM, YYYY",
		dataPoints: [
			{ x: new Date(2016, 00, 01), y: [340.080002, 360.060001, 330.410000, 360.060001] },
			{ x: new Date(2016, 01, 01), y: [360.040001, 370.500000, 350.790001, 360.950001] },
			{ x: new Date(2016, 02, 01), y: [370.099998, 390.720001, 370.060001, 390.169998] },
			{ x: new Date(2016, 03, 01), y: [380.669998, 390.360001, 370.730000, 380.820000] },
			{ x: new Date(2016, 04, 01), y: [380.869999, 390.669998, 370.770000, 390.150002] },
			{ x: new Date(2016, 05, 01), y: [390.099998, 430.419998, 380.580002, 430.209999] },
			{ x: new Date(2016, 06, 01), y: [430.209999, 430.889999, 410.700001, 430.290001] },
			{ x: new Date(2016, 07, 01), y: [430.250000, 430.500000, 400.549999, 400.880001] },
			{ x: new Date(2016, 08, 01), y: [400.849998, 410.700001, 390.549999, 400.610001] },
			{ x: new Date(2016, 09, 01), y: [400.619999, 410.040001, 360.270000, 360.790001] },
			{ x: new Date(2016, 10, 01), y: [360.970001, 390.669998, 360.099998, 380.630001] },
			{ x: new Date(2016, 11, 01), y: [380.630001, 420.840000, 380.160000, 400.380001] }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Total Visit",
		markerType: "square",
		//xValueFormatString: "DD MMM, YYYY",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2016, 00, 01), y: 650 },
			{ x: new Date(2016, 01, 01), y: 700 },
			{ x: new Date(2016, 02, 01), y: 710 },
			{ x: new Date(2016, 03, 01), y: 658 },
			{ x: new Date(2016, 04, 01), y: 734 },
			{ x: new Date(2016, 05, 01), y: 963 },
			{ x: new Date(2016, 06, 01), y: 847 },
			{ x: new Date(2016, 07, 01), y: 853 },
			{ x: new Date(2016, 08, 01), y: 869 },
			{ x: new Date(2016, 09, 01), y: 943 },
			{ x: new Date(2016, 10, 01), y: 970 },
			{ x: new Date(2016, 11, 01), y: 869 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Unique Visit",
		lineDashType: "dash",
		//xValueFormatString: "DD MMM, YYYY",
		color: "#00ff00",
		dataPoints: [
			{ x: new Date(2016, 05, 01), y: 693 },
			{ x: new Date(2016, 06, 01), y: 657 },
			{ x: new Date(2016, 07, 01), y: 663 },
			{ x: new Date(2016, 08, 01), y: 639 },
			{ x: new Date(2016, 09, 01), y: 673 },
			{ x: new Date(2016, 10, 01), y: 660 },
			{ x: new Date(2016, 11, 01), y: 562 },
			{ x: new Date(2017, 01, 01), y: 562 },
			{ x: new Date(2017, 02, 01), y: 562 },
			{ x: new Date(2017, 03, 01), y: 562 },
			{ x: new Date(2017, 04, 01), y: 562 },
			{ x: new Date(2017, 05, 01), y: 562 },
			{ x: new Date(2017, 06, 01), y: 562 },
			{ x: new Date(2017, 07, 01), y: 562 },
			{ x: new Date(2017, 08, 01), y: 562 },
			{ x: new Date(2017, 09, 01), y: 562 }
			]
	}
	]
});
chart.render();

function toogleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}