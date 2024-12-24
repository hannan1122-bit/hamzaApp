import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="mb-4 border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Price: {product.price}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
