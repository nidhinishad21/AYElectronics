import { create } from "zustand"; //state management with hooks(simplified)

const useUser = create((set) => ({
  user: null,
  setUser: (user) => set({ user }), // Removed unnecessary (_) and fixed the parentheses
}));

const useCart = create((set,state) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  clearCart: ()=>set({cart:[]}),
  shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || {},
  setShippingAddress: (shippingAddress) =>
    set((state) => ({ shippingAddress, ...state })),
  setCart: (cart) => set((state) => ({ cart, ...state })), // Changed setcart to setCart for consistency
  addToCart: (prod) =>
    set((state) => {
      const existItem = state.cart.find((x) => x.product === prod.product);
      let updatedCart;
      if (existItem) {
        updatedCart = state.cart.map((x) =>
          x.product === existItem.product ? prod : x
        );
      } else {
        updatedCart = [...state.cart, prod];
      }
      updateLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),
  removeFromCart: (prodId) =>
    set((state) => {
      const updatedCart = state.cart.filter((x) => x.product !== prodId);
      updateLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),
 
}));

const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export { useUser, useCart };
