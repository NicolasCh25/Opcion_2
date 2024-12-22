import React from "react";
import DatosPersonales from './assets/componentes/DatosPersonales';
import ListaEstudios from './assets/componentes/ListaEstudios';
import ListaHerramientas from './assets/componentes/ListaHerramientas';
import GaleriaDeportes from './assets/componentes/GaleriaDeportes';
import FormularioRegistro from './assets/componentes/FormularioRegistro'; // Asegúrate de que esta importación esté correcta
import "./App.css"; // Asegúrate de que los estilos sean mínimos

function App() {
  return (
    <div className="App">
      <header>
        <DatosPersonales />
        <ListaEstudios />
        <ListaHerramientas />
        <GaleriaDeportes />
      </header>
      <main>
        {/* El formulario se renderiza al final */}
        <FormularioRegistro />
      </main>
    </div>
  );
}

export default App;
