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
import IntegracionVertical from "./components/Screens/IntegracionVertical";
import Protocolos from './components/Organism/Planta/Protocolos'
import Faenado from './components/Organism/Planta/Faenado'
import Areas from './components/Organism/Planta/Areas'
import Beneficios from './components/Organism/Planta/Beneficios'
import Certificaciones from './components/Organism/Planta/Certificaciones'
import Sigas from './components/Organism/Planta/Sigas'
import Produccion from "./components/Organism/ProduccionResponsable/Tratamiento";
import Timeline from "./components/Screens/Timeline";
import Libertades from "./components/Screens/Libertades";
import BioRiles from './components/Organism/ProduccionResponsable/BioRiles';
import HuellaCarbono from './components/Organism/ProduccionResponsable/HuellaCarbono';
import EficienciaEnergetica from './components/Organism/ProduccionResponsable/EficienciaEnergetica'
import Agua from "./components/Organism/ProduccionResponsable/Agua";
import Emprendimiento from "./components/Organism/Comunidad/Emprendimiento";
import Educacion from "./components/Organism/Comunidad/Educacion";
import VidaEquilibrada from "./components/Organism/Comunidad/VidaEquilibrada";
import Voluntario from "./components/Organism/Comunidad/Voluntario";
import Proposito from "./components/Organism/Comunidad/Proposito";

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
              <Route path="/granja/integracionvertical" exact component={IntegracionVertical} />
              <Route path="/granja/libertades" exact component={Libertades} />

              <Route path="/planta" exact component={Protocolos} />
              <Route path="/planta/faenado" exact component={Faenado} />
              <Route path="/planta/areas" exact component={Areas} />
              <Route path="/planta/beneficios" exact component={Beneficios} />
              <Route path="/planta/certificaciones" exact component={Certificaciones} />
              <Route path="/planta/sigas" exact component={Sigas} />
              <Route path="/comunidad" exact component={Emprendimiento}/>
              <Route path="/comunidad/educacion" exact component={Educacion}/>
              <Route path="/comunidad/vida" exact component={VidaEquilibrada}/>
              <Route path="/comunidad/voluntario" exact component={Voluntario}/>
              <Route path="/comunidad/proposito" exact component={Proposito}/>


              <Route path="/produccion" exact component={Produccion} />
              <Route path="/produccion/bioriles" exact component={BioRiles} />
              <Route path="/produccion/carbono" exact component={HuellaCarbono} />
              <Route path="/produccion/eficiencia" exact component={EficienciaEnergetica} />
              <Route path="/produccion/agua" exact component={Agua} />
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
