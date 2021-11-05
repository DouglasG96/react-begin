//import logo from './logo.svg';
import "./App.css";
//import Saludar from './components/Saludar';
import { Button, Accordion, Alert } from "react-bootstrap";
//import {ReactComponent as ReactIcon} from './assets/react-1.svg';
import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";
function App() {
  /*
  let nombre =""
  const user = {
    nombre: 'Douglas',
    apellidos: 'Guzman',
    edad: 25,
    color: "Azul"
  };
  Ejemplo de template string
  const saludarFn = (name,edad)=>{
    console.log("Hola "+name+", tiene "+edad+" años");
    console.log(`Hola ${name}, tiene ${edad} años`);
  }
  
  const enviarSaludo = nombre => {
    console.log("Hola "+nombre);
  }
  */


  //Hook de estado
  const [stateCar, setStateCar] = useState(false);
  const encenderApagar = () => {
    //setStateCar(!stateCar)

    //Es para acceder al valor del estado desde otro componente
    setStateCar(preValue => !preValue)

    setContar(contar + 1)
  };

  //Hook de efecto
  const [contar, setContar] = useState(0);
  useEffect(() => {
    console.log("Total: " + contar)
  }, [contar]);

  return (
    <div className="App">
      {/*}
        <Saludar 
          nombre={user.nombre}
          apellidos={user.apellidos}
          enviarSaludo={enviarSaludo}
        />
        <Saludar nombre="Nathaly" apellidos="Ventura"/>
      <h1> React Bootstrap</h1>
      <Button variant="primary" size="lg">
        Click
      </Button>
      <ReactIcon/>
      <Alert variant="danger">
        <Alert.Link href="#">Peligro</Alert.Link>. Give it a click if you like.
      </Alert>
      <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
      <h4>Clicks: {contar}</h4>
      <button onClick={encenderApagar}>Encender/apagar</button>
        */}
      <Router>
        <div>
          <Link to="Contacto">
            <Button>Contacto</Button>
            </Link>
          <Link to="/quien-soy">
            <Button>Quien Soy</Button>
          </Link>
        </div>

        <Routes>
          <Route path="/contacto" element={<Contacto />}>
          </Route>
          <Route path="/quien-soy" element={<QuienSoy />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
