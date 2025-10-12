import { useBookStore } from "../store/useBookStore";

const Cart = () => {
  const cart = useBookStore((state) => state.cart);
  const removeFromCart = useBookStore((state) => state.removeFromCart);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold text-yellow-800 mb-6 text-center">Your Cart 📚</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-xl mt-10">
          Your cart is empty. Add some books to start reading!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg flex flex-col"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="h-48 w-full object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <button
                onClick={() => removeFromCart(book.id)}
                className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
