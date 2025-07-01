import { useEffect, useState } from "react";
import { Button } from "@components/ui/Button";
import { getMisAsesorias } from "@services/AlumnoService";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@components/ui/Carousel";

export default function AlumnoPanel() {
  const [misAsesorias, setMisAsesorias] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAsesorias = async () => {
      try {
        const response = await getMisAsesorias();
        setMisAsesorias(response);
      } catch (err) {
        console.error("Error al cargar tus asesorías:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAsesorias();
  }, []);

  return (
    <>
      {/* Carrusel de asesorías */}
      <div className="bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-2">Mis asesorías inscritas</h2>
        {loading ? (
          <p className="text-gray-500">Cargando asesorías...</p>
        ) : misAsesorias.length === 0 ? (
          <p className="text-gray-500">
            No estás inscrito en ninguna asesoría.
          </p>
        ) : (
          <Carousel
            items={misAsesorias}
            aria-label="Mis asesorías"
            renderItem={(id) => (
              <div className="bg-blue-100 rounded-xl p-4 min-w-[200px] text-center shadow"
                role="group"
                aria-label={`Asesoría ${id}`}>
                Asesoría #{id}
              </div>
            )}
          />
        )}
      </div>

      {/* Botones */}
      <div className="flex justify-center gap-4 pt-4">
        <Button variant="primary" onClick={() => navigate("/asesorias")}>
          Agendar asesorías
        </Button>
      </div>
    </>
  );
}