import React from 'react';
import { Link } from 'react-router-dom';

function PaginaInicio({ tareas }) {
  return (
    <div class="inicio-container">
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <Link to={`/detalle/${tarea.id}`}>
              {tarea.titulo} - {tarea.descripcion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginaInicio;
