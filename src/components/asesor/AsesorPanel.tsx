import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button";
import { Carousel } from "@components/ui/Carousel";
import { getMisColecciones } from "@services/AsesorService";
import { ColeccionAsesoriasResponse } from "@interfaces/coleccionAsesorias/CAsesoriasResponse";

export default function AsesorPanel() {
  const [colecciones, setColecciones] = useState<ColeccionAsesoriasResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColecciones = async () => {
      try {
        const response = await getMisColecciones();
        setColecciones(response.content);
      } catch (err) {
        console.error("Error al cargar tus colecciones:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchColecciones();
  }, []);

  return (
    <>
      {/* Carrusel de colecciones */}
      <div className="bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-2">Mis colecciones de asesorías</h2>
        {loading ? (
          <p className="text-gray-500">Cargando colecciones...</p>
        ) : colecciones.length === 0 ? (
          <p className="text-gray-500">Aún no has creado ninguna colección.</p>
        ) : (
          <Carousel
            items={colecciones}
            renderItem={(coleccion) => (
              <div
                className="rounded-xl p-4 min-w-[250px] text-center shadow"
                style={{ backgroundColor: coleccion.color || "#e0f2fe" }}
              >
                <p className="font-bold text-lg">{coleccion.nombre}</p>
                <p className="text-sm text-gray-700">{coleccion.descripcion}</p>
                <p className="text-xs text-gray-600 mt-1">
                  Curso: <strong>{coleccion.cursoNombre}</strong>
                </p>
                <p className="text-xs text-gray-600">
                  Academia: <strong>{coleccion.academiaNombre}</strong>
                </p>
                <p className="text-xs text-gray-600">
                  Asesorías: {coleccion.asesoriaIds.length}
                </p>
              </div>
            )}
          />
        )}
      </div>

      {/* Botones */}
      <div className="flex justify-center gap-4 pt-4">
        <Button variant="primary" onClick={() => navigate("/asesorias/crear")}>
          Crear asesoría
        </Button>
        <Button variant="secondary" onClick={() => navigate("/academia")}>
          Ver academia
        </Button>
      </div>
    </>
  );
}
