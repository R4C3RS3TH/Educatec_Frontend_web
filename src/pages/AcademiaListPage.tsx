import { useEffect, useState } from "react";
import { AcademiaResponse } from "@interfaces/academia/AcademiaResponse";
import { getAllAcademias } from "@services/AcademiaService";
import { AcademiaList } from "@components/academia/AcademiaList";

export default function AcademiaListPage() {
  const [academias, setAcademias] = useState<AcademiaResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAcademias()
      .then(setAcademias)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-blue-700">
        Lista de Academias
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Cargando academias...</p>
      ) : (
        <AcademiaList academias={academias} />
      )}
    </main>
  );
}