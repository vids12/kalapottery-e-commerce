import { useCart } from "../dataProvider/contexts/CartProvider"

export function totalAmount() {
    const { itemsInCart } = useCart();
    return itemsInCart.reduce(((acc,value) => value.price * value.quantity + acc),0)
}