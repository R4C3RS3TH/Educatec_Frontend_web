import React from "react";
import { ColeccionAsesoriasResponse } from "@interfaces/coleccionAsesorias/CAsesoriasResponse";
import { Link } from "react-router-dom";

interface MisAsesoriasListProps {
  asesorias: ColeccionAsesoriasResponse[];
}

export const MisAsesoriasList: React.FC<MisAsesoriasListProps> = ({ asesorias }) => {
  if (asesorias.length === 0) {
    return <p className="text-center text-gray-500">No estás inscrito en ninguna asesoría.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {asesorias.map((asesoria) => (
        <Link
          to={`/coleccion-asesorias/${asesoria.id}`}
          key={asesoria.id}
          className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-gray-800">{asesoria.nombre}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{asesoria.descripcion}</p>
          <div className="mt-2 text-xs text-gray-500">
            <span className="block"><strong>Modalidad:</strong> {asesoria.modalidad}</span>
            <span className="block"><strong>Curso:</strong> {asesoria.cursoNombre}</span>
            <span className="block"><strong>Academia:</strong> {asesoria.academiaNombre}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
