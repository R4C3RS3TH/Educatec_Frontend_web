import React from "react";
import { AcademiaResponse } from "src/interfaces/academia/AcademiaResponse";
import { Link } from "react-router-dom";

interface AcademiaCardProps {
  academia: AcademiaResponse;
}

export const AcademiaCard: React.FC<AcademiaCardProps> = ({ academia }) => {
  return (
    <Link
      to={`/academias/${academia.nombre}`}
      className="block rounded-2xl border p-4 shadow-sm hover:shadow-md bg-white transition"
    >
      <h2 className="text-xl font-semibold text-gray-800">{academia.nombre}</h2>

      {academia.rating !== undefined && (
        <p className="mt-1 text-sm text-yellow-600 font-medium">⭐ {academia.rating.toFixed(1)}</p>
      )}

      <div className="mt-2 text-sm text-gray-600 space-y-1">
        <p>
          <strong>Asesores:</strong> {academia.asesorIds.length}
        </p>
        <p>
          <strong>Colecciones:</strong> {academia.coleccionAsesoriasIds.length}
        </p>
      </div>
    </Link>
  );
};
