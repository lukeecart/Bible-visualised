var ctx1 = document.getElementById("ganttChart").getContext('2d');
var scatterChart = new Chart(ctx1, {
    type: 'line',
    data: {
        datasets: [
            {
                label: 'Scatter Dataset',
                backgroundColor: "rgba(246,156,85,1)",
                borderColor: "rgba(246,156,85,1)",
                fill: false,
                borderWidth: 15,
                pointRadius: 0,
                data: [
                    {
                        x: 0,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }
                ]
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'top',
                ticks: {
                    beginAtzero: true,
                    stepSize: 1
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    max: 10
                }
            }]
        },
        tooltips: {
            callbacks: {
                title: function (tooltipItem, data) {
                    return data
                }
            },
            backgroundColor: '#FFF',
            titleFontSize: 16,
            titleFontColor: '#0066ff',
            bodyFontColor: '#000',
            bodyFontSize: 14,
            displayColors: false
        }
    }
});