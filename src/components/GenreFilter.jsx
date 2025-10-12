import { useBookStore } from "../store/useBookStore";

const GenreFilter = () => {
  const books = useBookStore((state) => state.books);
  const filters = useBookStore((state) => state.filters);
  const setFilters = useBookStore((state) => state.setFilters);

  const genres = ["All", ...new Set(books.map(book => book.genre))];

  return (
    <select
      value={filters.genre}
      onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
      className="border p-2 rounded mb-4"
    >
      {genres.map((genre, idx) => (
        <option key={idx} value={genre}>{genre}</option>
      ))}
    </select>
  );
};

export default GenreFilter;

