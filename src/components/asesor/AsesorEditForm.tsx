import React, { useState } from "react";
import { AsesorPatch } from "@interfaces/asesor/AsesorPatch";
import { Carrera } from "@mappings/Carrera";
import { CarreraDisplayMap } from "@mappings/CarreraDisplayMap";
import { getChangedFields } from "@utils/ChangedFields";
import { useNavigate } from "react-router-dom";

interface AsesorEditFormProps {
  initialData: AsesorPatch;
  onSubmit: (data: AsesorPatch) => void;
}

export const AsesorEditForm: React.FC<AsesorEditFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AsesorPatch>({
    nombre: initialData.nombre ?? "",
    correo: initialData.correo ?? "",
    carrera: initialData.carrera ?? undefined,
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const changedFields = getChangedFields(initialData, formData);
    await onSubmit(changedFields);
    navigate("/perfil");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold text-primary text-center">
        Editar Asesor
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
          {Object.keys(CarreraDisplayMap).map((key) => (
            <option key={key} value={key}>
              {CarreraDisplayMap[key as Carrera]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Nueva contraseña
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
