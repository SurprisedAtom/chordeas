import { ThemeProvider } from "styled-components";
import Router from "./router/Router";

let ThemeLight = {
  white: "#ffffff",
  black: "#000000",
  blue: "#7FC1FE",
};

let ThemeDark = {
  white: "#ffffff",
  black: "#000000",
  blue: "#69e715",
};

let toggleTheme = false;

function App() {
  return (
    <ThemeProvider theme={toggleTheme ? ThemeDark : ThemeLight}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
