import { createContext, useEffect, useReducer } from "react";
import { moviesReducer } from "../reducers/moviesReducer";

export const moviesContext = createContext();

const initialState = {
  movies: [],
  favorites: [],
  category: "popular",
  search: "",
};

const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    fetchMovies();
  }, [state.category]);

  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${state.category}?api_key=6f9666afe4ee23dad7d7b5dc4462de11`,
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GETMOVIES",
          payload: data.results,
        });
      });
  };

  return (
    <moviesContext.Provider value={{ state, dispatch }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesContextProvider;
