import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={showCart}
      timeout={600}
      classNames={{
        enter: "",
        enterActive: "cartOpen",
        exit: "",
        exitActive: "cartClose",
      }}
    >
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </Card>
    </CSSTransition>
  );
};

export default Cart;
