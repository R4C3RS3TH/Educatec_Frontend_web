import { useEffect, useState } from "react";
import { Button } from "@components/ui/Button";
import { getMisAsesorias } from "@services/AlumnoService";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@components/ui/Carousel";
// import { CalendarDisplay } from "@/components/calendar/CalendarDisplay"; // Descomentar cuando esté creado

export default function DashboardPage() {
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
    <main className="p-6 space-y-6">
      {/* Título principal */}
      <h1 className="text-4xl font-extrabold text-center text-blue-700">
        Educatec
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-center text-gray-600">
        Emprende tus estudios de la mano de un experto.
      </p>

      {/* Calendario */}
      <div className="bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-2">Mi Horario</h2>
        {/* Descomenta esto cuando implementes CalendarDisplay */}
        {/* <CalendarDisplay /> */}
        <p className="text-gray-500">[Aquí va el calendario 📅]</p>
      </div>

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
            renderItem={(id) => (
              <div className="bg-blue-100 rounded-xl p-4 min-w-[200px] text-center shadow">
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
        <Button variant="secondary" onClick={() => navigate("/perfil")}>
          Ir a mi perfil
        </Button>
      </div>
    </main>
  );
}
