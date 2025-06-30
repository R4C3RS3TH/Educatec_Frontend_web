import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AcademiaResponse } from "src/interfaces/academia/AcademiaResponse";
import { getAcademiaByNombre } from "src/services/AcademiaService";
import { Button } from "../ui/button";

export const AcademiaDetail = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const [academia, setAcademia] = useState<AcademiaResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcademia = async () => {
      try {
        if (!nombre) return;
        const response = await getAcademiaByNombre(nombre);
        setAcademia(response);
      } catch (error) {
        console.error("Error al obtener la academia", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAcademia();
  }, [nombre]);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (!academia)
    return <p className="text-center text-red-500">Academia no encontrada.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold text-gray-800">{academia.nombre}</h1>

      <p className="text-yellow-600 font-medium">
        ⭐ Rating: {academia.rating.toFixed(1)}
      </p>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <strong>Cantidad de Asesores:</strong> {academia.asesorIds.length}
        </p>
        <p>
          <strong>Colecciones de Asesorías:</strong>{" "}
          {academia.coleccionAsesoriasIds.length}
        </p>
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="secondary">Editar</Button>
        <Button variant="destructive">Eliminar</Button>
      </div>
    </div>
  );
};
