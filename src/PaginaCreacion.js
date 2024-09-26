import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaginaCreacion({ agregarTarea }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('incompleta');
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: Math.random(),
      titulo,
      descripcion,
      fechaCreacion: new Date().toISOString().split('T')[0],
      estado,
    };
    agregarTarea(nuevaTarea);
    navigate('/');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h1>Crear Nueva Tarea</h1>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Estado:</label>
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="incompleta">Incompleta</option>
          <option value="completa">Completa</option>
        </select>
      </div>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default PaginaCreacion;
