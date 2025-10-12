import create from "zustand";

export const useBookStore = create((set) => ({
  books: [],
  cart: [],
  filters: { search: "" },

  setBooks: (books) => set({ books }),
  addToCart: (book) => set((state) => ({ cart: [...state.cart, book] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(b => b.id !== id) })),
  setFilters: (filters) => set({ filters }),
}));

