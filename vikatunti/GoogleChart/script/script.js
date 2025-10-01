google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

const url = "https://api.thingspeak.com/channels/3079298/feeds.json?api_key=ZVE32YLHU6VXAN4C"

fetch(url)
.then(response => response.json())
.then(data => {
    const feeds = data.feeds;

    const temperatures = feeds.map(feed => ({
    time: feed.created_at,
    temp: parseFloat(feed.field1)
    }));
    
    // Call drawChart with the fetched data
    drawChart(temperatures);
})
.catch(error => {
    console.error("Error fetching data:", error);
});

function drawChart(temperatures) {
  // Start with header row
  var chartData = [['Time', 'Temperature']];
  
  // Add temperature data if provided
  if (temperatures) {
    temperatures.forEach(temp => {
      chartData.push([temp.time, temp.temp]);
    });
  }

  var data = google.visualization.arrayToDataTable(chartData);

  var options = {
    title: 'Temperature Data',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}