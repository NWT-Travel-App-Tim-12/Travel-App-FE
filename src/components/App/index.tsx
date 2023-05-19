import React, { createContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { Styled } from "./index.styled";
import TopBar from "../TopBar";
import { Outlet } from "react-router";
import { Session } from "../../utils/session";

const App = () => {
  useEffect(() => {
    return () => Session.clear();
  }, []);

  return (
    <Provider store={store}>
      <Styled.App>
        <TopBar />
        <Outlet />
      </Styled.App>
    </Provider>
  );
};

export default App;
