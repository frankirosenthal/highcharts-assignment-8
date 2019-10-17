// chart 1 is below

Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Women who hold seats in National Parliament in 5 South American Countries over 19 years'
  },
  subtitle: {
    text: 'Source: <a href="http://data.un.org/_Docs/SYB/PDFs/SYB62_T05_201905_Seats%20held%20by%20Women%20in%20Parliament.pdf">UN.org</a>'
  },
  xAxis: {
    categories: ['Brazil', 'Argentina', 'Peru', 'Colombia', 'Chile'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percentage as of February each year',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Year 2000',
    data: [5.7, 28.0, 10.8, 21.8, 10.8]
  }, {
    name: 'Year 2005',
    data: [8.6, 33.7, 18.3, 20.2, 12.5]
  }, {
    name: 'Year 2010',
    data: [8.8, 38.5, 27.5, 21.3, 14.2]
  }, {
    name: 'Year 2015',
    data: [9.0, 36.2, 22.3, 23.6, 15.8]
  }, {
    name: 'Year 2019',
    data: [15.0, 38.8, 30.0, 24.9, 22.6]
  }]
});

// chart 2 is below


Highcharts.chart('container2', {

  title: {
    text: 'Growth in Representation of Women in Parliament in the Americas, 2000-2019'
  },

  subtitle: {
    text: 'Source: data.un.org'
  },

  yAxis: {
    title: {
      text: 'Percentages of Women in Parliament'
    }
  },

  xAxis: {
   categories: ['2000', '2005', '2010', '2015', '2016', '2017', '2018', '2019']
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
     //pointStart: 2000
    }
  },

  series: [{
    name: 'South America',
    data: [12.5325, 15.7725, 19.1983, 22.2454, 22.7202, 24.4919, 24.7916, 26.1114]
  }, {
    name: 'Northern America',
    data: [16.3043, 17.4966, 18.9771, 21.7568, 22.2798, 22.2078, 22.7865, 25.0326]
  }, {
    name: 'Latin America and The Caribbean',
    data: [15.1846, 19.0095, 22.7013, 27.3829, 28.1991, 29.4076, 29.5213, 31.5839]
  }, {
    name: 'Central America',
    data: [14.3123, 17.3913, 21.5686, 30.1444, 32.5, 33.066, 32.5312, 36.2745]
  }, {
    name: 'United States of America',
    data: [13.3, 14.9, 16.8, 19.4, 19.4, 19.1, 19.5, 23.56]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
