import { useEffect, useState } from "react";
import { useBookStore } from "../store/useBookStore";
import axios from "axios";
import BookCard from "../components/BookCard";
import GenreFilter from "../components/GenreFilter";

const Catalog = () => {
  const books = useBookStore((state) => state.books);
  const setBooks = useBookStore((state) => state.setBooks);
  const filters = useBookStore((state) => state.filters);
  const setFilters = useBookStore((state) => state.setFilters);

  const [searchTerm, setSearchTerm] = useState(filters.search);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=20`
      );

      const booksData = data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors?.join(", ") || "Unknown",
        genre: item.volumeInfo.categories?.[0] || "Unknown",
        description: item.volumeInfo.description || "No description",
        cover: item.volumeInfo.imageLinks?.thumbnail,
        previewLink: item.volumeInfo.previewLink,
      }));

      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setFilters({ ...filters, search: e.target.value });
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.genre === "All" || book.genre === filters.genre)
  );

  return (
    <div>
      
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by book title..."
        className="border p-2 rounded w-full mb-4"
      />

      <GenreFilter />

    
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-xl">Not Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;









