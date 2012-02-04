h1 Results #{results.length}

table
	thead
		tr
			each field in fields
				td=field["name"]

	tbody
	each result in results
		tr
		each field in fields
			td=result[field["name"]]

script(type="text/javascript")
	var chart;
	$(document).ready(function() {
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
		chart: {
		renderTo: 'chart_div',
		type: 'spline'
		},
		title: {
		text: 'Snow depth in the Vikjafjellet mountain, Norway'
		},
		subtitle: {
			text: 'An example of irregular time data in Highcharts JS'
		},
		xAxis: {
		type: 'datetime',
		dateTimeLabelFormats: { // don't display the dummy year
				month: '%e. %b',
				year: '%b'
		}
		},
		yAxis:{
		title:{
				text: 'Snow depth (m)'
		},
		min: 0
		},
		tooltip: {
			formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					//Highcharts.dateFormat('%e. %b', this.x) +': '+ this.y +' m';
					Highcharts.dateFormat('%a %b %e %Y %H:%M:%S', this.x) +': '+ this.y +' m';
					//Sat Jun 12 2010 00:35:00 GMT+0100 (BST)
			}
		},
		series: [{
		name: 'Winter 2007-2008',
		// Define the data points. All series have a dummy year
		// of 1970/71 in order to be compared on the same x axis. Note
		// that in JavaScript, months start at 0 for January, 1 for February etc.
		data: [
				[Date.UTC(1970,  9, 27), 0   ],
				[Date.UTC(1970, 10, 10), 0.6 ],
				[Date.UTC(1970, 10, 18), 0.7 ]
		]
		},{
			name: 'Winter 2008-2009',
			data: [
				[Date.UTC(1970,  9, 18), 0   ],
				[Date.UTC(1970,  9, 26), 0.2 ],
				[Date.UTC(1970, 11,  1), 0.47]		]
		},{
		name: 'Winter 2009-2010',
		data: [
				[Date.UTC(1970,  9,  9), 0   ],
				[Date.UTC(1970,  9, 14), 0.15],
				[Date.UTC(1970, 10, 28), 0.35]
		]
		}]
		});
		});
	});
