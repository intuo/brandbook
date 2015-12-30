$(document).ready(function () {
  function setHighcharts() {
    $('.js-graph').highcharts({
      credits: {
        enabled: false
      },
      chart: {
        type: 'area',
        backgroundColor: 'transparent',
      },
      plotOptions: {
        series: {
          fillOpacity: 0.05,
          marker: {
            radius: 3,
            symbol: 'circle',
            fillColor: 'white',
            lineColor: null,
            lineWidth: 2
          }
        }
      },
      title: { text: null },
      xAxis: {
        gridLineWidth:0,
        gridLineColor: '#ECECEC',
        title: {
          text: null
        },
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0,
        minPadding: 0,
        maxPadding: 0,
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: { step: 1, enabled: true },
      },
      yAxis: {
        gridLineWidth:1,
        gridLineColor: '#ECECEC',
        labels: { enabled: false },
        title: {
          text: null
        }
      },
      labels: { enabled: true },
      tooltip: {
        valuePrefix: '%'
      },
      legend: {
        symbolHeight: 12,
        symbolWidth: 12,
        symbolRadius: 6,
        enabled:true,
        itemStyle: {
          fontSize:'15px',
          fontWeight:500,
          color: '#000'
        }
      },
      series: [{
        name: 'Engineering',
        data: [54, 79, 78, 80.9, 45, 65, 70, 45, 95, 36, 40, 90],
        color: '#469CC8',
      }, {
        name: 'Sales',
        data: [34, 46, 23, 14, 96, 86, 56, 45, 76, 60, 70, 75],
        color: '#ff550d',
      }]
    });
  }

  setHighcharts();
});
