import React from "react";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import { setPizzas } from "../redux/slices/pizzaSlice";
import axios from "axios";

const Home = () => {
  const { categoryId, sortType } = useSelector((state) => state.filter);
  const { pizzas } = useSelector((state) => state.pizza);

  const dispatch = useDispatch();

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const pizzasData = async () => {
    const { data } = await axios.get(
      `https://634d8c0bf5d2cc648ea8ef35.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}`
    );
    dispatch(setPizzas(data));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    pizzasData();
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {pizzas.map((obj, i) => (
          <PizzaBlock
            key={i}
            id={obj.id}
            name={obj.name}
            price={obj.price}
            imageUrl={obj.imageUrl}
            sizes={obj.sizes}
            types={obj.types}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
