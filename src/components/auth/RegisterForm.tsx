import { useAuthContext } from "@contexts/AuthContext";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarreraDisplayMap } from "@mappings/CarreraDisplayMap";
import { Carrera } from "@mappings/Carrera";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
// hay un error los register se estan ahciendo todos de asesores no de alumnos

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

  const [ciclo, setCiclo] = useState<number>(1); // Alumno
  // Asesor no necesita campos que se llenen: rating y etiquetas se envían por defecto

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
    <section className="home-section rounded-2xl p-8 w-full max-w-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Registrarse a Educatec</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Rol
          </label>
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

        <div>
          <label
            htmlFor="correo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-transparent rounded-md p-2"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-transparent rounded-md p-2"
            minLength={8}
            maxLength={20}
            required
          />
        </div>

        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre completo
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-transparent rounded-md p-2"
            required
          />
        </div>

        <div>
          <label
            htmlFor="carrera"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Carrera
          </label>
          <select
            name="carrera"
            id="carrera"
            value={formData.carrera}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-transparent rounded-md p-2"
            required
          >
            {Object.entries(CarreraDisplayMap).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {role === "alumno" && (
          <div>
            <label
              htmlFor="ciclo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ciclo
            </label>
            <input
              type="number"
              id="ciclo"
              value={ciclo}
              onChange={(e) => setCiclo(Number(e.target.value))}
              className="w-full border border-gray-600 bg-transparent rounded-md p-2"
              min={1}
              max={20}
              required
            />
          </div>
        )}

        <button
          id="registerSubmit"
          className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
          type="submit"
        >
          Registrarse
        </button>
        <button
          id="loginButton"
          className="bg-white text-black w-full flex justify-center items-center gap-4 mx-6 py-2 px-4 rounded-lg cursor-pointer shadow-sm"
          type="button"
          onClick={() => navigate("/auth/login")}
        >
          ingresar
        </button>
      </form>
    </section>
  );
}
