import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

@connect(({ counting, login, loading }) => ({
  counting,
  login,
  loading: loading.effects['counting/getCount'],
}))
export default class HomePage extends Component {
  handleAdd = () => {
    this.props.dispatch({
      type: 'counting/addBtnClick',
    });
  };
  handleReduce = () => {
    this.props.dispatch({
      type: 'counting/reduceBtnClick',
    });
  };
  handleLogout = () => {
    this.props.dispatch({
      type: 'login/logout',
    });
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'counting/getCount',
    });
  }
  render() {
    return (
      <div
        style={{
          width: '300px',
          textAlign: 'center',
          margin: '100px auto 0',
          padding: '20px',
          border: '1px solid gray',
        }}
      >
        Hello world!
        <div>{this.props.counting.count}</div>
        <br />
        <Button onClick={this.handleAdd}>add</Button>
        <Button onClick={this.handleReduce} style={{ marginLeft: '20px' }}>
          reduce
        </Button>
        <br />
        <Button onClick={this.handleLogout}>退出登录</Button>
      </div>
    );
  }
}
