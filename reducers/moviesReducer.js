export function moviesReducer(state, action) {
  switch (action.type) {
    case "GETMOVIES":
      return { ...state, movies: action.payload };

    case "SETCATEGORY":
      return { ...state, category: action.payload };

    case "SEARCH":
      return { ...state, search: action.payload };

    case "TOGGLEFAVORITE":
      const exists = state.favorites.find((m) => m.id == action.payload.id);

      if (exists) {
        return {
          ...state,
          favorites: state.favorites.filter((m) => m.id != action.payload.id),
        };
      }

      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
  }

  return state;
}
