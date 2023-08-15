import { createContext, useContext, useEffect, useReducer } from "react";

import axios from "axios";

const MainProvider = createContext();

const initialState = {
  data: [],
  page: "homepage",
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "data/loaded":
        return {
          ...state,
          data: action.payload,
        };

      default:
        return state;
    }
  };

  useEffect(() => {
    const mainData = async () => {
      try {
        const response = await axios.get("data/data.json");

        dispatch({
          type: "data/loaded",
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "error",
          payload: error.message,
        });
      }
    };
    mainData();
  }, []);

  const [{ data, page }, dispatch] = useReducer(reducer, initialState);
  return (
    <MainProvider.Provider
      value={{
        dispatch,
        data,
        page,
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
