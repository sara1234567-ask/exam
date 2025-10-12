
const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 space-y-10">
    
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 flex items-center gap-4">
        📚 BookVerse
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Step into BookVerse, your colorful universe of books! From fantasy realms to real-life stories, 
        discover endless adventures and hidden treasures. Curated for book lovers of all ages.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">🎯 Our Mission</h2>
          <p className="text-gray-700">
            Make reading fun and accessible! Explore, preview, and organize your favorite books all in one place.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">📞 Contact</h2>
          <ul className="text-gray-700 space-y-1">
            <li>Phone: +1 (555) 987-6543</li>
            <li>Email: hello@bookverse.com</li>
            <li>Instagram: @bookverse_official</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">💡 Fun Fact</h2>
          <p className="text-gray-700">
            Over <span className="font-semibold text-yellow-600">10,000+</span> books are waiting for you! 
            New titles added every week.
          </p>
        </div>
      </div>

     
      <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-xl p-8 shadow-lg text-gray-800 text-center hover:scale-105 transform transition duration-300">
        <h2 className="text-3xl font-bold mb-2">Join Our Community!</h2>
        <p>Sign up, add books to your favorites, and share your love of reading with others!</p>
      </div>
    </div>
  );
};

export default About;
