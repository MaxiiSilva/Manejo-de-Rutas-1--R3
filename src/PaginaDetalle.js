import React from 'react';
import { useParams } from 'react-router-dom';

function PaginaDetalle({ tareas }) {
  const { id } = useParams();
  const tarea = tareas.find((t) => t.id === parseInt(id));

  return (
    <div class="inicio-container" >
      {tarea ? (
        <>
          <h1>{tarea.titulo}</h1>
          <p>{tarea.descripcion}</p>
          <p>Fecha de Creación: {tarea.fechaCreacion}</p>
          <p>Estado: {tarea.estado}</p>
        </>
      ) : (
        <p>Tarea no encontrada</p>
      )}
    </div>
  );
}

export default PaginaDetalle;
