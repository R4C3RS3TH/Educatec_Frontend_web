import { useAuthContext } from "@contexts/AuthContext";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarreraDisplayMap } from "@mappings/CarreraDisplayMap";
import { Carrera } from "@mappings/Carrera";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import { FiMail, FiLock, FiUser, FiBookOpen, FiLayers } from "react-icons/fi";

export default function RegisterForm() {
  const { register } = useAuthContext();
  const navigate = useNavigate();

  const [role, setRole] = useState<"alumno" | "asesor">("alumno");

  const [formData, setFormData] = useState({
    correo: "",
    password: "",
    nombre: "",
    carrera: "SISTEMAS_DE_INFORMACION" as Carrera,
  });

  const [ciclo, setCiclo] = useState<number>(1);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const basePayload = {
      ...formData,
      carrera: formData.carrera as Carrera,
    };

    const payload: RegisterRequest =
      role === "alumno"
        ? { ...basePayload, ciclo: ciclo }
        : { ...basePayload, rating: 0, etiquetas: [] };

    await register(payload, role);
    navigate("/dashboard");
  }

  return (
    <section className="home-section bg-white rounded-2xl p-8 w-full max-w-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rol */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Rol</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value as "alumno" | "asesor")}
            className="w-full border border-gray-600 bg-transparent rounded-md p-2"
          >
            <option value="alumno">Alumno</option>
            <option value="asesor">Asesor</option>
          </select>
        </div>

        {/* Correo */}
        <div className="w-full relative">
          <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="w-full pl-10 border border-gray-600 rounded-md p-2 bg-transparent"
            required
          />
        </div>

        {/* Contraseña */}
        <div className="w-full relative">
          <FiLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 border border-gray-600 rounded-md p-2 bg-transparent"
            minLength={8}
            maxLength={20}
            required
          />
        </div>

        {/* Nombre */}
        <div className="w-full relative">
          <FiUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full pl-10 border border-gray-600 rounded-md p-2 bg-transparent"
            required
          />
        </div>

        {/* Carrera */}
        <div className="w-full relative">
          <FiBookOpen className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <select
            name="carrera"
            id="carrera"
            value={formData.carrera}
            onChange={handleChange}
            className="w-full pl-10 border border-gray-600 rounded-md p-2 bg-transparent"
            required
          >
            {Object.entries(CarreraDisplayMap).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Ciclo */}
        {role === "alumno" && (
          <div className="w-full">
            <div className="relative">
              <FiLayers className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
              <input
                type="number"
                id="ciclo"
                placeholder="Ej. 3"
                value={ciclo}
                onChange={(e) => setCiclo(Number(e.target.value))}
                className="w-full pl-10 border border-gray-600 rounded-md p-2 bg-transparent"
                min={1}
                max={10}
                required
              />
            </div>
            <p className="text-sm text-gray-500 mt-1 ml-1">Ingresa tu ciclo entre 1 y 10</p>
          </div>
        )}

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            id="registerSubmit"
            className="bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full hover:bg-blue-700 transition"
            type="submit"
          >
            Registrar
          </button>
          <button
            id="backButton"
            className="bg-white border border-gray-400 text-black w-full py-2 px-4 rounded-full hover:bg-gray-100 transition"
            type="button"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>
      </form>
    </section>
  );
}
