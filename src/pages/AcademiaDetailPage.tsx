import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAcademiaByNombre } from "@services/AcademiaService";
import { AcademiaResponse } from "@interfaces/academia/AcademiaResponse";
import { AcademiaDetail } from "@components/academia/AcademiaDetail";

export default function AcademiaDetailPage() {
  const { nombre } = useParams<{ nombre: string }>();
  const [academia, setAcademia] = useState<AcademiaResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!nombre) return;

    getAcademiaByNombre(nombre)
      .then(setAcademia)
      .catch((err) => {
        console.error("Error cargando academia:", err);
        setAcademia(null);
      })
      .finally(() => setLoading(false));
  }, [nombre]);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (!academia)
    return <p className="text-center text-red-500">Academia no encontrada.</p>;

  return <AcademiaDetail/>;
}