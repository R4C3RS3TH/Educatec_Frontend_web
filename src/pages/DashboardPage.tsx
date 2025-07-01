// import { CalendarDisplay } from "@/components/calendar/CalendarDisplay"; // Descomentar cuando esté creado
import { useEffect, useState } from "react";
import AlumnoPanel from "@components/alumno/AlumnoPanel";
import AsesorPanel from "@components/asesor/AsesorPanel";
import AdminPanel from "@components/user/AdminPanel";
import { UserResponse } from "@interfaces/user/UserResponse";
import { getMe } from "@services/UserService";

export default function DashboardPage() {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then((response) => setUser(response))
      .catch((err) => console.error("Error al obtener usuario:", err))
      .finally(() => setLoading(false));
  }, []);

  const rol = user?.rol?.[0]; // El primer rol

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Cargando...</div>;
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-700">Educatec</h1>
      <p className="text-lg text-center text-gray-600">Emprende tus estudios de la mano de un experto.</p>

      {/* Calendario */}
      <div className="bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-2">Mi Horario</h2>
        <p className="text-gray-500">[Aquí va el calendario 📅]</p>
      </div>

      {/* Panel dinámico por rol */}
      <aside>
        {rol === "ALUMNO" && <AlumnoPanel />}
        {["ASESOR", "FREELANCER", "COLIDER", "LIDER"].includes(rol ?? "") && <AsesorPanel />}
        {rol === "ADMIN" && <AdminPanel />}
      </aside>
    </main>
  );
}

