import { useNavigate } from "react-router-dom";

const genres = [
  { name: "Fiction", emoji: "📚" },   
  { name: "Fantasy", emoji: "✨" },   
  { name: "Science", emoji: "🔬" },   
  { name: "Romance", emoji: "💌" },   
  { name: "Mystery", emoji: "🧩" },   
];


const Home = () => {
  const navigate = useNavigate();
  const goToCatalog = () => navigate("/catalog");

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 space-y-10">
 
      <div className="text-center bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-10 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 mb-4">
          Welcome to BookVerse 
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Discover thousands of books, explore your favorite genres, and enjoy reading anytime, anywhere.
        </p>
        <p className="text-gray-700 text-lg">
          BookVerse makes it easy to browse, search, and filter books, keeping your reading journey organized and fun.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explore by Genre</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {genres.map((genre, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-2">{genre.emoji}</div>
              <div className="text-xl font-semibold text-gray-800">{genre.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-8 rounded-xl shadow-lg space-y-4">
        <h2 className="text-3xl font-bold text-yellow-700">Why Choose BookVerse?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Thousands of books across all genres and languages</li>
          <li>Easy search and filtering to find your favorite books</li>
          <li>Add books to your personal cart and track your reading</li>
          <li>Responsive design for desktop, tablet, and mobile</li>
          <li>Regularly updated collection with new arrivals</li>
        </ul>
      </div>

  
      <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-xl p-8 shadow-lg text-center hover:scale-105 transform transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-yellow-800">Start Your Reading Journey!</h2>
        <p className="text-gray-700 mb-6">Dive into the world of literature and discover books you'll love.</p>
        <button
          onClick={goToCatalog}
          className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
        >
          Go to Catalog
        </button>
      </div>
    </div>
  );
};

export default Home;





