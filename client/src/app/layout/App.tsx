
import { Container, CssBaseline, createTheme, ThemeProvider  } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router";
import AboutPage from "../../features/About/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/Contact/ContactPage";
import HomePage from "../../features/Home/HomePage";
import NotFound from "../../features/NotFound/NotFound";
import Header from "./Header";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? "#eaeaea" : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Switch>
        <Route exact path='/' component={HomePage}  />
        <Route exact path='/catalog' component={Catalog}  />
        <Route exact path='/catalog/:id' component={ProductDetails}  />
        <Route exact path='/about' component={AboutPage}  />
        <Route exact path='/contact' component={ContactPage}  />
        <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
