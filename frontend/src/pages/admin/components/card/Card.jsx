import React from "react";
import style from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { deleteProductsThunk } from "../../../../redux/reducers/productSlice";

const Card = ({ item }) => {

    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(deleteProductsThunk(item._id))
    }

  return (
    <div className={style.main}>
      <div className={style.imgbox}>
        <img src={item.image} alt="" />
      </div>
      <p className={style.f}>{item.name}</p>
      <p className={style.s}>{item.title}</p>

      <button onClick={() => deleteItem()}>Delete</button>
    </div>
  );
};

export default Card;
