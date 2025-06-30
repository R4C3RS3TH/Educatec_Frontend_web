import React from "react";
import { AlumnoResponse } from "src/interfaces/alumno/AlumnoResponse";
import { CarreraDisplayMap } from "src/types/CarreraDisplayMap";
import { Link } from "react-router-dom";

interface AlumnoListProps {
  alumnos: AlumnoResponse[];
}

export const AlumnoList: React.FC<AlumnoListProps> = ({ alumnos }) => {
  if (alumnos.length === 0) {
    return <p className="text-center text-gray-500">No hay alumnos registrados.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {alumnos.map((alumno) => (
        <Link
          to={`/alumnos/${alumno.codigo}`}
          key={alumno.codigo}
          className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-lg font-semibold text-gray-800">{alumno.nombre}</h3>
          <p className="text-sm text-gray-600 truncate">{alumno.correo}</p>

          <div className="mt-2 text-xs text-gray-500 space-y-1">
            <div>
              <strong>Carrera:</strong> {CarreraDisplayMap[alumno.carrera]}
            </div>
            <div>
              <strong>Ciclo:</strong> {alumno.ciclo}
            </div>
            {alumno.cursoNombres?.length > 0 && (
              <div>
                <strong>Cursos:</strong>{" "}
                <span className="line-clamp-2">{alumno.cursoNombres.join(", ")}</span>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
