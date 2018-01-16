import './index.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import { childRoutes } from '../../router/index'
import SiderBar from '../../components/sidebar/index'
import NavPath from '../../components/navpath/index'

const { Header, Content} = Layout

class App extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false
    }
    this.onCheckedChange = this.onCheckedChange.bind(this)
  }
  // 父组件接收到子组件传递过来的值，进行下一步操作
  onCheckedChange(newState) {
    this.setState({ collapsed: newState })
  }
  render() {
    return (
        <Layout className="ant-layout-has-sider">
            <SiderBar checked={this.state.collapsed} />
            <Content>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <NavPath initialChecked={this.state.collapsed} callbackParent={this.onCheckedChange}/>
                </Header>
                <Content style={{ padding: '24px 32px' }}>
                    <div style={{ minHeight: 460 }}>
                    {childRoutes.map(childRoute => {
                        if (childRoute.hasOwnProperty('child')) {
                        return childRoute.child.map(route => {
                            return (
                            <Route
                                key={route.key}
                                path={route.url}
                                component={route.component}
                                exact={route.exactly}
                            />
                            )
                        })
                        } else {
                        return (
                            <Route
                            key={childRoute.key}
                            path={childRoute.url}
                            component={childRoute.component}
                            exact={childRoute.exactly}
                            />
                        )
                        }
                    })}
                    </div>
                </Content>
            </Content>
        </Layout>
    )
  }
}

export default App
