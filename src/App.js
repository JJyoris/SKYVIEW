import Header from "./components/Organism/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, createTheme } from "@material-ui/core/";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Screens/Home";
import { lightTheme } from "./config/ThemeConfig";
import Historia from "./components/Screens/Historia";
import ProcessHeader from "./components/Organism/ProcessHeader";
import OficinaCentral from "./components/Screens/OficinaCentral";
import Granja from "./components/Screens/Granja";
import Planta from "./components/Screens/Planta";
import Produccion from "./components/Screens/Produccion";


function App() {
  return (
    <ThemeProvider theme={createTheme(lightTheme)}>
      <BrowserRouter>
        <CssBaseline>
          <Header />
          <ProcessHeader/>

          {/* <div className={classes.content}> */}
            <Switch>
              {/*
              public routes
            */}
              <Route path="/" exact component={Home} />
              <Route path="/historia" exact component={Historia} />
              <Route path="/oficina" exact component={OficinaCentral} />
              <Route path="/granja" exact component={Granja} />
              <Route path="/planta" exact component={Planta} />
              <Route path="/produccion" exact component={Produccion} />

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
