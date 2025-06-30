import React, { useState } from "react";
import { AlumnoPatch } from "src/interfaces/alumno/AlumnoPatch";
import { Carrera } from "src/types/Carrera";
import { CarreraDisplayMap } from "src/types/CarreraDisplayMap";

interface AlumnoEditFormProps {
  initialData: AlumnoPatch;
  onSubmit: (data: AlumnoPatch) => void;
}

export const AlumnoEditForm: React.FC<AlumnoEditFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<AlumnoPatch>(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "ciclo" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold text-primary text-center">Editar Alumno</h2>

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
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
        <label htmlFor="carrera" className="block text-sm font-medium text-gray-700">
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
        <label htmlFor="ciclo" className="block text-sm font-medium text-gray-700">
          Ciclo
        </label>
        <input
          type="number"
          id="ciclo"
          name="ciclo"
          value={formData.ciclo}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          min={1}
          max={12}
          required
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
