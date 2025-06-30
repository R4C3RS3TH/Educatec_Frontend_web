import React from "react";
import { AlumnoResponse } from "src/interfaces/alumno/AlumnoResponse";
import { CarreraDisplayMap } from "src/types/CarreraDisplayMap";

interface AlumnoProfileProps {
  alumno: AlumnoResponse;
}

export const AlumnoProfile: React.FC<AlumnoProfileProps> = ({ alumno }) => {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-primary text-center">Perfil del Alumno</h2>

      <div>
        <label className="text-sm text-gray-600">Nombre</label>
        <p className="text-lg font-medium text-gray-800">{alumno.nombre}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Correo</label>
        <p className="text-gray-700">{alumno.correo}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Carrera</label>
        <p className="text-gray-700">{CarreraDisplayMap[alumno.carrera]}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Ciclo</label>
        <p className="text-gray-700">{alumno.ciclo}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Cursos</label>
        {alumno.cursoNombres?.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-700">
            {alumno.cursoNombres.map((curso) => (
              <li key={curso}>{curso}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Sin cursos registrados</p>
        )}
      </div>
    </div>
  );
};
