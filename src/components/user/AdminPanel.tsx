import { useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button";

export default function AdminPanel() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Título de bienvenida */}
      <div className="bg-white shadow rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Panel de Administración</h2>
        <p className="text-gray-600 mt-2">
          Bienvenido, administrador. Aquí puedes gestionar todos los recursos del sistema.
        </p>
      </div>

      {/* Botones de gestión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button variant="primary" onClick={() => navigate("/admin/usuarios")}>
          Gestionar usuarios 👤
        </Button>
        <Button variant="primary" onClick={() => navigate("/admin/academias")}>
          Gestionar academias 🎓
        </Button>
        <Button variant="primary" onClick={() => navigate("/admin/asesorias")}>
          Gestionar asesorías 📅
        </Button>
      </div>
    </div>
  );
}
