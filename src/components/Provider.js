import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Provider extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  // 声明Context对象属性
  static childContextTypes = {
    dataList: PropTypes.object,
  };
  // 返回Context对象，方法名是约定好的
  getChildContext() {
    return {
      dataList: this.props.store
    }
  }

  render() {
    return this.props.children;
  }
}