import { createContext, useContext, useReducer } from "react";
import FilterReducer from "../reducer/filter";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, {
    sortBy: "",
    showmobiles: false,
    showlaptops: false,
    showtelevision: false,
    rating: NaN,
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
