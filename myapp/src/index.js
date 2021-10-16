import * as React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Header, MessageList, ChatList } from "./components";
import "./App.css";

const theme = createTheme({
  dark: {
    color: "black",
  },
  light: {
    color: "white",
  },
});

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <ChatList />
    </ThemeProvider>
    <div>
      <Header />
      <MessageList />
    </div>
  </>,
  document.getElementById("root")
);
