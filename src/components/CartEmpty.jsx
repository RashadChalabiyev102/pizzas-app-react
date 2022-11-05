import React from "react";

const CartEmpty = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Cart is empty <icon>😕</icon>
          </h2>
          <p>
            You probably haven't ordered pizza yet.
            <br />
            To order pizza, go to the main page.
          </p>
          <img src="/img/empty-cart.png" alt="" />
          <a href="/" className="button button--black">
            <span>Вернуться назад</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
