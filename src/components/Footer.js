import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
@observer
class Footer extends Component{
  static contextTypes = {
    dataList: PropTypes.object,
  };
  render(){
    const { dataList } = this.context;
    return(
      <div className="footer">
        <p>合计: {dataList.totalPrice}元</p>
      </div>
    );
  }
} 

export default Footer;
