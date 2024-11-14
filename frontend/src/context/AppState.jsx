import { doctors } from "../assets/assets";
import { AppContext } from "./AppContext";

const AppContextProvider = (props) => {
  const value = {
    doctors,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
