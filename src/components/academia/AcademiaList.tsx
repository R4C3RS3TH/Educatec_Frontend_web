import React from "react";
import { Link } from "react-router-dom";
import { AcademiaResponse } from "src/interfaces/academia/AcademiaResponse";

interface Props {
  academias: AcademiaResponse[];
}

export const AcademiaList: React.FC<Props> = ({ academias }) => {
  if (academias.length === 0) {
    return <p className="text-center text-gray-500">No hay academias registradas.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {academias.map((academia) => (
        <Link
          key={academia.nombre}
          to={`/academias/${encodeURIComponent(academia.nombre)}`}
          className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {academia.nombre}
          </h3>
          <p className="text-sm text-yellow-600 mt-1 font-medium">
            ⭐ {academia.rating.toFixed(1)}
          </p>

          <div className="text-xs text-gray-500 mt-2">
            <strong>Asesores:</strong> {academia.asesorIds?.length ?? 0}
            <br />
            <strong>Colecciones:</strong> {academia.coleccionAsesoriasIds?.length ?? 0}
          </div>
        </Link>
      ))}
    </div>
  );
};
