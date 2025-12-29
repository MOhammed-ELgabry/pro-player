// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   token: null,
//   user: null,
//   isAuth: false,

//   login: (token, user) =>
//     set({
//       token,
//       user,
//       isAuth: true,
//     }),

//   logout: () =>
//     set({
//       token: null,
//       user: null,
//       isAuth: false,
//     }),
// }));

// export default useAuthStore;
import { create } from "zustand";

const tokenFromStorage = localStorage.getItem("token") || sessionStorage.getItem("token");
const userFromStorage = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user") || null);

const useAuthStore = create((set) => ({
  token: tokenFromStorage,
  user: userFromStorage,
  isAuth: !!tokenFromStorage,

  login: (token, user, remember) => {
    set({ token, user, isAuth: true });
    if (remember) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  },

  logout: () => {
    set({ token: null, user: null, isAuth: false });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  },
}));

export default useAuthStore;

