import React from "react";
import { Link } from "react-router-dom";
import { ColeccionAsesoriasResponse } from "@interfaces/coleccionAsesorias/CAsesoriasResponse";

interface Props {
  colecciones: ColeccionAsesoriasResponse[];
}

export const ColeccionAsesoriaList: React.FC<Props> = ({ colecciones }) => {
  if (colecciones.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No hay colecciones de asesorías registradas.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {colecciones.map((coleccion) => (
        <Link
          key={coleccion.id}
          to={`/asesorias/${coleccion.id}`}
          className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {coleccion.nombre}
          </h3>
          <p className="text-sm text-blue-600 mt-1 font-medium truncate">
            {coleccion.cursoNombre} · {coleccion.academiaNombre}
          </p>

          <div className="text-xs text-gray-500 mt-2">
            <strong>Modalidad:</strong> {coleccion.modalidad}
            <br />
            <strong>Asesorías:</strong> {coleccion.asesoriaIds.length}
            <br />
            <strong>Alumnos:</strong> {coleccion.alumnoIds.length}
          </div>
        </Link>
      ))}
    </div>
  );
};
