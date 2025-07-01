import { AsesorResponse } from "@interfaces/asesor/AsesorResponse";
import { CarreraDisplayMap } from "@mappings/CarreraDisplayMap";

interface Props {
  asesor: AsesorResponse;
}

export default function AsesorProfile({ asesor }: Props) {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-primary text-center">Perfil del Asesor</h2>

      <div>
        <label className="text-sm text-gray-600">Nombre</label>
        <p className="text-lg font-medium text-gray-800">{asesor.nombre}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Correo</label>
        <p className="text-gray-700">{asesor.correo}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Carrera</label>
        <p className="text-gray-700">{CarreraDisplayMap[asesor.carrera]}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Academia</label>
        <p className="text-gray-700">{asesor.academiaId ?? "No asignado"}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Asesorías</label>
        {asesor.coleccionAsesoriasIds?.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-700">
            {asesor.coleccionAsesoriasIds.map((id) => (
              <li key={id}>Asesoría #{id}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Sin asesorías registradas</p>
        )}
      </div>
    </div>
  );
}
