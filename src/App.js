import Header from "./components/Organism/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, createTheme } from "@material-ui/core/";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Screens/Home";
import { lightTheme } from "./config/ThemeConfig";


function App() {
  return (
    <ThemeProvider theme={createTheme(lightTheme)}>
      <BrowserRouter>
        <CssBaseline>
          <Header />

          {/* <div className={classes.content}> */}
            <Switch>
              {/*
              public routes
            */}
              <Route path="/" exact component={Home} />
            </Switch>
          {/* </div> */}

          {/* <div className={classes.footer}>
            {/*
              Here add footer component
          

            <Footer />
          </div> */}
        </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
