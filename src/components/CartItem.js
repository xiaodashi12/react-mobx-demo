import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
class CartItem extends Component {

  static contextTypes = {
    dataList: PropTypes.object,
  };

  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const { data } = this.props;
    const { dataList } = this.context;

    return (
      <div className="cart-item">
        <label htmlFor={`check${data.id}`} className="cart-item-box c-select">
          <input
            id={`check${data.id}`}
            type="checkbox"
            checked={data.checked}
            onChange={() => dataList.onChecked(data.id)}
          />
        </label>
        <div className="cart-item-box c-name">{data.name}</div>
        <div className="cart-item-box c-price">¥{data.price}</div>
        <div className="cart-item-box c-buyNum">
          <div onClick={() => dataList.sub(data.id)}>-</div>
          <input
            value={data.buyNum}
            readOnly
          />
          <div onClick={() => dataList.add(data.id)}>+</div>
        </div>
        <div className="cart-item-box c-subTotal">¥{data.price * data.buyNum}</div>
        <div className="cart-item-box c-delete" onClick={() => dataList.removeItem(data.id)}>删除</div>
      </div>
    );
  }
}
export default CartItem;