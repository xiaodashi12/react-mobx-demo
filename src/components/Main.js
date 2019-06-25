import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import {observer} from 'mobx-react';

@observer
class Main extends Component {
 // 声明需要使用的Context属性
  static contextTypes = {
    dataList: PropTypes.object,
  };
  
  render() {
    console.log(JSON.stringify(this.context));
    const {dataList} = this.context;
    console.log(dataList.list);
    return (
      <div className="main">
        {dataList.list.map((z, i) => <CartItem data={z} key={i}/>)}
      </div>
    );
  }
}
export default Main;