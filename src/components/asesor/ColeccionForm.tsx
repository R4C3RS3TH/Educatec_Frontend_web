import { useState } from "react";
import { Modalidad } from "src/types/Modalidad";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

interface ColeccionFormProps {
  initialValues?: {
    nombre: string;
    descripcion: string;
    modalidad: Modalidad;
    color: string;
  };
  onSubmit: (values: {
    nombre: string;
    descripcion: string;
    modalidad: Modalidad;
    color: string;
  }) => void;
}

const modalidades: Modalidad[] = ["PRESENCIAL", "VIRTUAL", "MIXTO"];

export const ColeccionForm: React.FC<ColeccionFormProps> = ({ initialValues, onSubmit }) => {
  const [form, setForm] = useState({
    nombre: initialValues?.nombre ?? "",
    descripcion: initialValues?.descripcion ?? "",
    modalidad: initialValues?.modalidad ?? "PRESENCIAL",
    color: initialValues?.color ?? "#1d4ed8",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold">Colección de Asesorías</h2>

      <Input label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
      <Input label="Descripción" name="descripcion" value={form.descripcion} onChange={handleChange} required />

      <div>
        <label className="block text-sm font-medium mb-1">Modalidad</label>
        <select
          name="modalidad"
          value={form.modalidad}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {modalidades.map((m) => (
            <option key={m} value={m}>
              {m.charAt(0) + m.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Color</label>
        <input
          type="color"
          name="color"
          value={form.color}
          onChange={handleChange}
          className="w-16 h-10 p-1 border rounded"
        />
      </div>

      <Button type="submit">Guardar</Button>
    </form>
  );
};
