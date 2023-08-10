import React, { useState } from 'react'
import ApexCharts from "react-apexcharts";

function Charts() {
    const [series] = useState([{
        name: "Demo Plot",
        data: [10,45, 52, 10, 38, 45, 21, 19, 70, 23, 2,40]
    }]);
    const [options] = useState({
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
        xaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            enabled: false
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        colors: ['#8731DF', '#66DA26'],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        }
    });

    return (
        <div>
            <ApexCharts options={options} series={series} type="area" height={150} />
        </div>
    );
}

export default Charts
