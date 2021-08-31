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
import Protocolos from './components/Organism/Planta/Protocolos'
import Faenado from './components/Organism/Planta/Faenado'
import Areas from './components/Organism/Planta/Areas'
import Beneficios from './components/Organism/Planta/Beneficios'
import Certificaciones from './components/Organism/Planta/Certificaciones'
import Sigas from './components/Organism/Planta/Sigas'
import Produccion from "./components/Screens/Produccion";
import Timeline from "./components/Screens/Timeline";
import Libertades from "./components/Screens/Libertades";


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
              <Route path="/granja/libertades" exact component={Libertades} />
              <Route path="/planta" exact component={Protocolos} />
              <Route path="/planta/faenado" exact component={Faenado} />
              <Route path="/planta/areas" exact component={Areas} />
              <Route path="/planta/beneficios" exact component={Beneficios} />
              <Route path="/planta/certificaciones" exact component={Certificaciones} />
              <Route path="/planta/sigas" exact component={Sigas} />


              <Route path="/produccion" exact component={Produccion} />
              <Route path="/historia/timeline" exact component={Timeline} />

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
