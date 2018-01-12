import './index.css'
import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

class BasicLogin extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((errs, values) => {
      if (!errs && values) {
        console.log('values', values)
        this.props.history.push('/dashboard')
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-container">
        <div className="login-form-wrapper">
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <p className="login-form-title">系统登录</p>
            <FormItem>
              {getFieldDecorator('userName', {
                initialValue: 'admin',
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                initialValue: 'admin',
                rules: [
                  { required: true, message: 'please input your password!' }
                ]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  placeholder="Password"
                  type="password"
                />
              )}
            </FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

const Login = Form.create()(BasicLogin)
export default Login
