import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css'
import {Link, withRouter} from 'react-router-dom'
import axios from "axios";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        axios.post('/api/token/', values)
            .then(res => {
                localStorage.setItem('tokens', JSON.stringify(res.data))
                console.log(JSON.stringify(res.data))
                axios.defaults.headers.common['Authorization'] = `Bearer ${res.access}`
                this.props.history.push('/profile')
            })
            .catch(err => {
                console.log(err)
            })
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
      <Form onSubmit={this.handleSubmit} className="login-form"
            style={{display:"flex", alignItems:"center", flexDirection:"column", marginTop:"70px"}}>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}

        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox> )}
          <a className="login-form-forgot" href="" >
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button"
                  style={{display:"flex", alignItems:"center"}}>
            Log in
          </Button>
            <Button type="primary" htmlType="submit" className="login-form-buttonr">
                <Link to="/registration">Registrate now!</Link>
            </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

// eslint-disable-next-line no-undef
export default withRouter(WrappedNormalLoginForm);