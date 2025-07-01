import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, User } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-3 rounded-b-2xl">
      {/* Botón de retroceso */}
      <button
        onClick={() => navigate(-1)}
        className="text-gray-600 hover:text-blue-600 transition"
        title="Volver"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Botón al Dashboard */}
      <button
        onClick={() => navigate("/dashboard")}
        className="text-gray-600 hover:text-blue-600 transition"
        title="Dashboard"
      >
        <Home className="w-6 h-6" />
      </button>

      {/* Botón al Perfil */}
      <button
        onClick={() => navigate("/perfil")}
        className="text-gray-600 hover:text-blue-600 transition"
        title="Perfil"
      >
        <User className="w-6 h-6" />
      </button>
    </nav>
  );
}
