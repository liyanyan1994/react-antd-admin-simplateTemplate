import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

var myLineChart = null
export default class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expectedData: [100, 120, 161, 134, 105, 160, 165],
            actualData: [120, 82, 91, 154, 162, 140, 145]
        }
    }
    componentDidMount() {
        myLineChart = echarts.init(document.getElementById('chartId'))
        myLineChart.setOption({
            xAxis: {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                boundaryGap: false,
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: 10,
                right: 10,
                bottom: 20,
                top: 30,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                padding: [5, 10]
            },
            yAxis: {
                axisTick: {
                    show: false
                }
            },
            legend: {
                data: ['expected', 'actual']
            },
            series: [{
                name: 'expected', itemStyle: {
                    normal: {
                        color: '#FF005A',
                        lineStyle: {
                            color: '#FF005A',
                            width: 2
                        }
                    }
                },
                smooth: true,
                type: 'line',
                data: this.state.expectedData,
                animationDuration: 2800,
                animationEasing: 'cubicInOut'
            },
            {
                name: 'actual',
                smooth: true,
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#3888fa',
                        lineStyle: {
                            color: '#3888fa',
                            width: 2
                        },
                        areaStyle: {
                            color: '#f3f8ff'
                        }
                    }
                },
                data: this.state.actualData,
                animationDuration: 2800,
                animationEasing: 'quadraticOut'
            }]
        })
    }
    componentWillUnmount(){
        myLineChart.dispose()
        myLineChart =  null
        console.log(myLineChart)
    }
    render() {
        return <div id='chartId' style={{ width: '100%', height: '350px' }}></div>
    }
}

