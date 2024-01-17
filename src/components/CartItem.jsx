import React from 'react';
import cross from '../assets/img/icon/cross.svg';
import iconDown from '../assets/img/icon/icon-down.svg';
import iconUp from '../assets/img/icon/icon-up.svg';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

const CartItem = ({ id, title, pricer, count, imageUrl, sizes, weight, size, weig }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      }),
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
        dispatch(removeItem(id));
    }
  };
  return (
    <div className="product">
      <div className="product__img">
        <img src={imageUrl} alt="Кедровое масло" />
      </div>
      <div className="product__wrapper">
        <div className="product__title">{title}</div>
        {/* <div className="product__subtitle">{weig}гр.</div>
    <div className="product__subtitle">{size}мл.</div> */}
      </div>
      <div className="product__count">
        <div className="count">
          <div className="count__box">
            <b>{count}</b>
          </div>
          <div className="count__controls">
            <button onClick={onClickPlus} className="count__up" type="button">
              <img src={iconUp} alt="" />
            </button>
            <button onClick={onClickMinus} className="count__down" type="button">
              <img src={iconDown} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="product__price">{pricer * count} ₽</div>
      <div className="product__controls">
        <button onClick={onClickRemove}>
          <img src={cross} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
