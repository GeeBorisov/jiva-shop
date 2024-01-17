import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

// import itemImg from '../assets/img/item-block/oil-01.jpeg';
const ItemBlock = ({ id, title, price, imageUrl, sizes, weight }) => {
  const dispath = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [activeWeight, setActiveWeight] = React.useState(weight[0]);

  const addedCount = cartItem ? cartItem.count : 0;

  const handleSizesChange = (size) => {
    setActiveSize(size);
  };

  const handleWeightChange = (weight) => {
    setActiveWeight(weight);
  };
  const pricer = activeSize ? activeSize.price : activeWeight.price;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      pricer,
      imageUrl,
      size: sizes[activeSize],
      weig: weight[activeWeight],
    };
    dispath(addItem(item));
  };

  return (
    <div className="item-block">
      <Link to={`/description/${id}`}> <img className="item-block__image" src={imageUrl} alt="" /></Link>
      <h4 className="item-block__title">{title}</h4>
      <div className="item-block__selector">
        <ul>
          {sizes.map((size) => (
            <li
              key={size.value}
              onClick={() => handleSizesChange(size)}
              className={activeSize === size ? 'active' : ''}>
              {size.value} мл.
            </li>
          ))}
        </ul>
        <ul>
          {weight.map((weight) => (
            // <li key={weight} >{weight} мг.</li>
            <li
              key={weight.value}
              onClick={() => handleWeightChange(weight)}
              className={activeWeight === weight ? 'active' : ''}>
              {weight.value} гр.
            </li>
          ))}
        </ul>
      </div>
      <div className="item-block__bottom">
        <div className="item-block__price"> {pricer} ₽ </div>
        <button onClick={onClickAdd} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default ItemBlock;
