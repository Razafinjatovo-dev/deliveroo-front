import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartData, setCart } = props;

  // Sub Total
  let subTotal = 0;
  cartData.forEach((CartItem) => {
    subTotal += CartItem.quantity * CartItem.price;
  });

  const deliveryFees = 10;

  // Total calculation
  let total = subTotal + deliveryFees;

  return (
    <div className="CartWrapper">
      {!cartData.length ? (
        <div className='emptyCart'>
          <p>Panier vide</p>{" "}
          <p>Constituez votre panier en cliquant sur les articles</p>
        </div>
      ) : (
        <div>
          <button className="validCart">Valider mon panier</button>
          <div className="Cart">
            {cartData.map((CartItem) => {
              return (
                <>
                  <div className="itemWrapper">
                    <div className="bouton-quantité-wrapper">
                      <p
                        className="bouton-plus-moins"
                        onClick={() => {
                          let currentQuantity = CartItem.quantity;
                          if (currentQuantity >= 2) {
                            let newCart = [...cartData];
                            for (let i = 0; i < newCart.length; i++) {
                              if (newCart[i].id === CartItem.id) {
                                newCart[i].quantity--;
                              }
                              setCart(newCart);
                            }
                          } else {
                            let newCart = [...cartData];
                            let itemPosition = newCart.indexOf(CartItem);
                            newCart.splice(itemPosition, 1);
                            setCart(newCart);
                          }
                        }}
                      >
                        -
                      </p>
                      <p className="itemQuantity">{CartItem.quantity}</p>
                      <p
                        className="bouton-plus-moins"
                        onClick={() => {
                          let newCart = [...cartData];
                          for (let i = 0; i < newCart.length; i++) {
                            if (newCart[i].id === CartItem.id) {
                              newCart[i].quantity++;
                            }
                            setCart(newCart);
                          }
                        }}
                      >
                        +
                      </p>
                    </div>
                    <div className="itemName">
                      <p>{CartItem.title}</p>
                    </div>
                    <p className="itemPrice">{CartItem.price}€</p>
                  </div>
                </>
              );
            })}
            <hr></hr>
            <div className="subTotal">
              <p>Sous-total</p>
              <p>{subTotal.toFixed(2)}€</p>
            </div>
            <div className="delivery-fees">
              <p>Frais de livraison</p>
              <p>{deliveryFees}€</p>
            </div>
            <hr></hr>

            <div className="total">
              <p>TOTAL</p>
              <p>{total.toFixed(2)}€</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
