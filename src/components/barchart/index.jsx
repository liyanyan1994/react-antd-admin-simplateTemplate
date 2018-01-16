import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import {Card} from 'antd'

var myBarChart = null
export default class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expectedData: [100, 120, 161, 134, 105, 160, 165],
            actualData: [120, 82, 91, 154, 162, 140, 145]
        }
    }
    componentDidMount() {
        myBarChart = echarts.init(document.getElementById('chartId'))
        myBarChart.setOption({
            title: {
                text: '实际负荷',
                textStyle: {
                //   color: '#fff'
                },
                x: 'left' // 靠左
              },
              legend: {
                show: false // 不显示图例
              },
              xAxis: [
                {
                  axisLabel: {
                    // color: '#fff'
                  },
                  axisLine: {
                    lineStyle: {
                      color: '#08384C' // x轴坐标线的颜色
                    }
                  },
                  data: ['1#变压器', '2#变压器', '3#变压器', '4#变压器', '5#变压器']
                }
              ],
              yAxis: [
                {
                  name: '单位:　kWh',
                  nameTextStyle: {
                    // color: '#fff',
                    fontSize: 16
                  },
                  axisLabel: {
                    // color: '#fff'
                  },
                  splitLine: { show: false }, // 去掉Y轴的网格线
                  axisLine: {
                    lineStyle: {
                      color: '#08384C'
                    }
                  },
                  type: 'value'
                }
              ],
              color: ['#3197FB'],
              grid: {
                top: '15%'
              },
              series: [
                {
                  type: 'bar',
                  barWidth: '20%', // 柱条的宽度
                  data: [78000, 40000, 48000, 60000, 54000]
                }
              ]
        })
    }
    componentWillUnmount(){
        myBarChart.dispose()
        myBarChart =  null
    }
    render() {
        return (
            <Card>
                <div id='chartId' style={{ width: '100%', height: '350px' }}></div>
            </Card>
        )
    }
}

