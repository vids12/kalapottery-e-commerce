import { useCart } from "../dataProvider/CartProvider";
import { CartCard } from "../Components/Cart/CartCard";
import { EmptyCart } from "../Components/Cart/EmptyCart";
export function Cart() {
  const { itemsInCart } = useCart();
  return (
    <>
      <div className="bg-img cart-bgImg">
        <h2 className="page-heading">Cart</h2>
      </div>
      {itemsInCart.length !== 0 ? <CartCard /> : <EmptyCart />}
    </>
  );
}