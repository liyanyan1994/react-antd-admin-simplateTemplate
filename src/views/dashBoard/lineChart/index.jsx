import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

let myLineChart = null
export default class LineChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expectedData: props.chartData.expectedData,
      actualData: props.chartData.actualData
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setChartOption({ ...nextProps.chartData })
  }
  initChart() {
    myLineChart = echarts.init(document.getElementById('chartId'))
    this.setChartOption()
  }
  setChartOption({ expectedData, actualData } = this.state) {
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
      series: [
        {
          name: 'expected',
          itemStyle: {
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
          data: expectedData,
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
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }
      ]
    })
  }
  componentDidMount() {
    this.initChart()
  }
  componentWillUnmount() {
    myLineChart.dispose()
    myLineChart = null
  }
  render() {
    return <div id="chartId" style={{ width: '100%', height: '350px' }} />
  }
}
