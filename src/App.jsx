import { Routes, Route } from "react-router-dom";

import TopBar from "./components/topbar";

import Home from "./components/home";
import CoinPage from "./components/coinpage";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

{
  /* <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/:slug" element={<CoinPage />} />
  </Routes> */
}
