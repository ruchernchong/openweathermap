import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/createStore";

const WrapWithProvider = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

export default WrapWithProvider;
