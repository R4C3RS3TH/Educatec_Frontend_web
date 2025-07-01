import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ColeccionDetail } from "@components/asesor/ColeccionDetail";
import { getColeccionById } from "@services/CAsesoriasService";
import { ColeccionAsesoriasResponse } from "@interfaces/coleccionAsesorias/CAsesoriasResponse";

export default function ColeccionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [coleccion, setColeccion] = useState<ColeccionAsesoriasResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await getColeccionById(Number(id));
        setColeccion(response);
      } catch (error) {
        console.error("Error al obtener la colección:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (!coleccion) return <p className="text-center text-red-500">Colección no encontrada.</p>;

  return (
    <main className="p-6">
      <ColeccionDetail
        nombre={coleccion.nombre}
        descripcion={coleccion.descripcion}
        modalidad={coleccion.modalidad}
        color={coleccion.color}
        academiaNombre={coleccion.academiaNombre}
        cursoNombre={coleccion.cursoNombre}
        cantidadAsesorias={coleccion.asesoriaIds.length}
      />
    </main>
  );
}
