import React from "react";
import type { Modalidad } from "src/types/Modalidad";

interface ColeccionDetailProps {
  nombre: string;
  descripcion: string;
  modalidad: Modalidad;
  color: string;
  academiaNombre?: string;
  cursoNombre?: string;
  cantidadAsesorias?: number;
}

export const ColeccionDetail: React.FC<ColeccionDetailProps> = ({
  nombre,
  descripcion,
  modalidad,
  color,
  academiaNombre,
  cursoNombre,
  cantidadAsesorias,
}) => {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{nombre}</h2>
        <span
          className="w-6 h-6 rounded-full border"
          style={{ backgroundColor: color }}
          title={`Color: ${color}`}
        ></span>
      </div>

      <p className="text-sm text-gray-600 mb-3">{descripcion}</p>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
        <div>
          <strong>Modalidad:</strong> {modalidad}
        </div>
        {academiaNombre && (
          <div>
            <strong>Academia:</strong> {academiaNombre}
          </div>
        )}
        {cursoNombre && (
          <div>
            <strong>Curso:</strong> {cursoNombre}
          </div>
        )}
        {typeof cantidadAsesorias === "number" && (
          <div>
            <strong>Asesorías:</strong> {cantidadAsesorias}
          </div>
        )}
      </div>
    </div>
  );
};
