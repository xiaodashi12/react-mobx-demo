import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
@observer
class Header extends Component{
  static contextTypes = {
    dataList: PropTypes.object,
  };
  render() {
    const { dataList } = this.context;
    return(
      <div className="head">
        <label htmlFor="selectAll" className="head-item">
          <input
            id="selectAll"
            type="checkbox"
            checked={dataList.checkedAll}
            onChange={() =>dataList.onCheckedAll()}
          /> 全选
        </label>
        <div className="head-item c-name">商品</div>
        <div className="head-item">单价</div>
        <div className="head-item c-buyNum">数量</div>
        <div className="head-item">小计</div>
        <div className="head-item">操作</div>
      </div>
    );
  }
} 

console.log('测试数据'+ PropTypes)
export default Header;