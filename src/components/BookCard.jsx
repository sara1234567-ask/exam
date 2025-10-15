import { useBookStore } from "../store/useBookStore";

const BookCard = ({ book }) => {
  const addToCart = useBookStore((state) => state.addToCart);
 const handleAddToCart = () => {
    addToCart(book);
    alert(`Книга "${book.title}" добавлена в корзину 📚`);
  };
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow flex flex-col h-full">
      <img src={book.cover} alt={book.title} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
      <p className="text-gray-600 mb-2">{book.author}</p>
      <p className="text-gray-500 text-sm mb-2">{book.genre}</p>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{book.description}</p>

      <div className="mt-auto flex justify-between gap-2">
        <a
          href={book.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition flex-1 text-center"
        >
          Read
        </a>
        <button
          onClick={() => addToCart(book)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-800 transition flex-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;


