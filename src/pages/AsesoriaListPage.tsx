import { useEffect, useState } from "react";
import { ColeccionAsesoriasResponse } from "@interfaces/coleccionAsesorias/CAsesoriasResponse";
import { getAllColecciones } from "@services/CAsesoriasService";
import { ColeccionAsesoriaList } from "@components/asesor/ColeccionList";

export default function ColeccionListPage() {
  const [colecciones, setColecciones] = useState<ColeccionAsesoriasResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllColecciones()
      .then(setColecciones)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-blue-700">
        Colecciones de Asesorías
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Cargando colecciones...</p>
      ) : (
        <ColeccionAsesoriaList colecciones={colecciones} />
      )}
    </main>
  );
}