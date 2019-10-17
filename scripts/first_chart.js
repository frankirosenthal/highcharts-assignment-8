// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Peaches', 'Apples', 'Bananas', 'Oranges',]
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Franki and Annie\'s house'
      }
    },
    series: [{
      name: 'Franki',
      data: [6, 1, 0, 4,]
    }, {
      name: 'Annie',
      data: [6, 5, 7, 3,]
    }]
  });
