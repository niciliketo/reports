!!! 5
html(lang="en")
	head
		style(type='text/css')
			div
			{
			overflow: scroll;
			height:300px;
			width:800px;
			}
			td
			{
			border:1px solid black;
			}
			table
			{
			width:100%;
			}
		title Query Runner
		script(type="text/javascript",src=" https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
		script(type="text/javascript", src="http://localhost/highcharts/js/highcharts.js")
		script(type="text/javascript")
			$(document).ready(function() {
				$(".button").click(function() {
					var dataString = '?sql='+ sql.value;
					//alert (dataString);
					$.ajax({
						type: "GET",
						url: "query" + dataString,
						success: function(data) {
							//alert(data);
							$('#queryResults').html(data);
								}
								});
					return false;
				});
				});
	body
		h1 Query Runner
		form(name='query')
			textarea(multiline='true', row='5', cols='50',id='sql', name='sql')
				|SELECT bids.created_at, bids.price, users.login FROM bids INNER JOIN users ON bids.user_id = users.id WHERE bids.lot_id = 661 ORDER BY bids.created_at ASC
			input(type='submit', class='button', id='submit')
		div(id='queryResults')
		div(id="chart_div")
