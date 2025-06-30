import React from "react";
import { AsesorResponse } from "@interfaces/asesor/AsesorResponse";
import { Link } from "react-router-dom";

interface AsesorListProps {
  asesores: AsesorResponse[];
}

export const AsesorList: React.FC<AsesorListProps> = ({ asesores }) => {
  if (asesores.length === 0) {
    return (
      <p className="text-center text-gray-500">No hay asesores registrados.</p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {asesores.map((asesor) => (
        <Link
          to={`/asesores/${asesor.codigo}`}
          key={asesor.codigo}
          className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            {asesor.nombre}
          </h3>
          <p className="text-sm text-gray-600 truncate">{asesor.correo}</p>

          {asesor.rating !== undefined && (
            <p className="mt-1 text-sm text-yellow-600 font-medium">
              ⭐ {asesor.rating.toFixed(1)}
            </p>
          )}

          <div className="mt-2 text-xs text-gray-500">
            <span className="block">
              <strong>Carrera:</strong> {asesor.carrera.replace(/_/g, " ")}
            </span>

            <span className="block">
              <strong>Rol:</strong>{" "}
              {Array.isArray(asesor.rol) ? asesor.rol.join(", ") : asesor.rol}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
