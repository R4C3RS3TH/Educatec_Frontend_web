import React from "react";
import { AlumnoResponse } from "@interfaces/alumno/AlumnoResponse";
import { CarreraDisplayMap } from "@mappings/CarreraDisplayMap";
import { Link } from "react-router-dom";

interface AlumnoCardProps {
  alumno: AlumnoResponse;
  showLink?: boolean;
}

export const AlumnoCard: React.FC<AlumnoCardProps> = ({ alumno, showLink = true }) => {
  return (
    <div className="rounded-2xl shadow p-4 bg-white hover:shadow-md transition">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-800">{alumno.nombre}</h3>
        <p className="text-sm text-gray-600">{alumno.correo}</p>

        <div className="mt-2 text-sm text-gray-500 space-y-1">
          <div>
            <strong>Carrera:</strong> {CarreraDisplayMap[alumno.carrera]}
          </div>
          <div>
            <strong>Ciclo:</strong> {alumno.ciclo}
          </div>
          {alumno.cursoNombres?.length > 0 && (
            <div>
              <strong>Cursos:</strong> {alumno.cursoNombres.join(", ")}
            </div>
          )}
        </div>

        {showLink && (
          <Link
            to={`/alumnos/${alumno.codigo}`}
            className="mt-3 text-sm text-primary font-semibold hover:underline"
          >
            Ver perfil
          </Link>
        )}
      </div>
    </div>
  );
};
