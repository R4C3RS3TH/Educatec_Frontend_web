import React from "react";
import { Modalidad } from "src/types/Modalidad";
import { Link } from "react-router-dom";

interface ColeccionCardProps {
  id: number;
  nombre: string;
  descripcion: string;
  modalidad: Modalidad;
  color: string;
  academiaNombre?: string;
  cursoNombre?: string;
}

export const ColeccionCard: React.FC<ColeccionCardProps> = ({
  id,
  nombre,
  descripcion,
  modalidad,
  color,
  academiaNombre,
  cursoNombre,
}) => {
  return (
    <Link
      to={`/colecciones/${id}`}
      className="block p-4 rounded-2xl shadow-sm border hover:shadow-md transition bg-white"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
        <span
          className="w-4 h-4 rounded-full border"
          style={{ backgroundColor: color }}
          title={`Color: ${color}`}
        ></span>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2">{descripcion}</p>

      <div className="mt-3 grid grid-cols-2 gap-1 text-xs text-gray-700">
        <div>
          <strong>Modalidad:</strong> {modalidad}
        </div>
        {cursoNombre && (
          <div>
            <strong>Curso:</strong> {cursoNombre}
          </div>
        )}
        {academiaNombre && (
          <div>
            <strong>Academia:</strong> {academiaNombre}
          </div>
        )}
      </div>
    </Link>
  );
};
