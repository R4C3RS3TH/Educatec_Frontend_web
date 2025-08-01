import React, { useState } from "react";
import { AlumnoPatch } from "@interfaces/alumno/AlumnoPatch";
import { CarreraDisplayMap } from "@mappings/CarreraDisplayMap";
import { getChangedFields } from "@utils/ChangedFields";
import { useNavigate } from "react-router-dom";

interface AlumnoEditFormProps {
  initialData: AlumnoPatch;
  onSubmit: (data: AlumnoPatch) => void;
}
export const AlumnoEditForm: React.FC<AlumnoEditFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AlumnoPatch>({
    ...initialData,
    ciclo: initialData.ciclo ?? 1,
    carrera: initialData.carrera ?? undefined,
    nombre: initialData.nombre ?? "",
    correo: initialData.correo ?? "",
    password: "",
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]:
      name === "ciclo"
        ? value === "" ? 1 : Math.max(1, parseInt(value, 10))
        : value,
  }));
};


   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cicloSeguro = formData.ciclo && formData.ciclo >= 1 ? formData.ciclo : 1;
    const correctedData = { ...formData, ciclo: cicloSeguro };
    const changedFields = getChangedFields(initialData, correctedData);
    console.log("Enviando cambios:", changedFields);
    await onSubmit(changedFields);
    navigate("/perfil");
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold text-primary text-center">
        Editar Alumno
      </h2>

      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div>
        <label
          htmlFor="correo"
          className="block text-sm font-medium text-gray-700"
        >
          Correo
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div>
        <label
          htmlFor="carrera"
          className="block text-sm font-medium text-gray-700"
        >
          Carrera
        </label>
        <select
          id="carrera"
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          required
        >
          <option value="">Selecciona una carrera</option>
          {Object.entries(CarreraDisplayMap).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="ciclo"
          className="block text-sm font-medium text-gray-700"
        >
          Ciclo
        </label>
        <input
          type="number"
          id="ciclo"
          name="ciclo"
          value={Number.isInteger(formData.ciclo ?? 1) && (formData.ciclo ?? 1) >= 1 ? (formData.ciclo ?? 1) : 1}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          min={1}
          max={12}
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Nueva Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-primary/90 transition"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};
