import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import asyncComponent from './asyncComponent'

// const Login = asyncComponent(() => import('../views/login/index'))
// const Layout = asyncComponent(() => import('../views/app/index'))
// const DashBoard = asyncComponent(() => import('../views/dashBoard/index'))
// const Page2 = asyncComponent(() => import('../views/page2/index'))
// const Card = asyncComponent(() => import('../components/card/index'))
// const Table = asyncComponent(() => import('../components/table/index'))
// const NoMatch = asyncComponent(() => import('../components/nomatch/index'))

import Login from '../views/login/index'
import Layout from '../views/app/index'
import DashBoard from '../views/dashBoard/index'
import Page2 from '../views/page2/index'
import Card from '../components/card/index'
import Table from '../components/table/index'
import NoMatch from '../components/nomatch/index'
import BarChart from '../components/barchart/index'
import LineChart from '../components/linechart/index'

export const childRoutes = [
  {
    key: '0',
    name: 'Dashboard',
    icon: 'laptop',
    url: '/dashboard',
    component: DashBoard,
    exactly: true
  },
  {
    key: 'sub1',
    name: 'Components',
    icon: 'user',
    child: [
      {
        key: '1',
        name: 'Card',
        url: '/components/card',
        component: Card
      },
      {
        key: '2',
        name: 'Table',
        url: '/components/table',
        component: Table
      }
    ]
  },
  {
    key: '3',
    name: 'Page2',
    icon: 'file',
    url: '/page2',
    component: Page2
  },
  {
    key: 'sub3',
    name: 'Chart',
    icon: 'team',
    child: [
      {
        key: '4',
        name: 'line',
        url: '/chart/line',
        component: LineChart
      },
      {
        key: '5',
        name: 'bar',
        url: '/chart/bar',
        component: BarChart
      }
    ]
  }
]

// 面包屑导航栏url对应的name
export const breadcrumbNameMap = {
    '/dashboard': 'Dashboard',
    '/components': 'Components',
    '/components/card': 'Card',
    '/components/table': 'Table',
    '/page2': 'Page2',
    '/chart': 'Chart',
    '/chart/line': 'Line',
    '/chart/bar': 'Bar',
  };


export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Redirect exact path="/" to="/login" />
          <Route component={Layout} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}
