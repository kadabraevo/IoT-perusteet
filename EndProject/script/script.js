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
      // Clean up the time string to show only day, month, and time
      const date = new Date(temp.time);
      const cleanTime = date.toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false  // 24-hour format
      });
      
      chartData.push([cleanTime, temp.temp]);
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