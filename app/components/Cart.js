import { useCart } from "../contexts/CartContext"; // Import cart context

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart(); // Access cart and actions

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <div>
            <p>Total: ${getTotalPrice().toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
