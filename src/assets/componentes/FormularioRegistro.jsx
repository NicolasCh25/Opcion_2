import React, { useState } from "react";

function FormularioRegistro() {
  // Estados para los datos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [materias, setMaterias] = useState([{ materia: "", fecha: "" }]);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  // Manejo de cambios en los campos
  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleCorreoChange = (e) => setCorreo(e.target.value);

  const handleMateriaChange = (index, e) => {
    const newMaterias = [...materias];
    newMaterias[index][e.target.name] = e.target.value;
    setMaterias(newMaterias);
  };

  const handleAddMateria = () => {
    setMaterias([...materias, { materia: "", fecha: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (!nombre || !correo || materias.some(m => !m.materia || !m.fecha)) {
      setError("Por favor, complete todos los campos.");
      return;
    }
    setError("");
    setMensaje(`Gracias, ${nombre}! Has registrado las siguientes materias:`);
  };

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>

        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={correo}
            onChange={handleCorreoChange}
            required
          />
        </div>

        <div>
          <label>Materias Cursadas:</label>
          {materias.map((materia, index) => (
            <div key={index}>
              <input
                type="text"
                name="materia"
                value={materia.materia}
                onChange={(e) => handleMateriaChange(index, e)}
                placeholder="Materia"
                required
              />
              <input
                type="date"
                name="fecha"
                value={materia.fecha}
                onChange={(e) => handleMateriaChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddMateria}>
            Añadir otra materia
          </button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Enviar</button>
      </form>

      {mensaje && (
        <div>
          <h3>{mensaje}</h3>
          <ul>
            {materias.map((materia, index) => (
              <li key={index}>
                {materia.materia} - {materia.fecha}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormularioRegistro;
