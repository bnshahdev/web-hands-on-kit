import { useDispatch, useSelector } from "react-redux";
import ResturantCard from "./ResturantCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      {cartItems.map((res) => (
        // <Link to={"/resturant/" + res.data.id}>
        <ResturantCard key={res.uuid} resturant={res} />
        // </Link>
      ))}
    </>
  );
};

export default Cart;
