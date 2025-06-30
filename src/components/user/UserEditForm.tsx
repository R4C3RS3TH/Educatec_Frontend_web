import { useState, FormEvent } from "react";
import { Carrera } from "@mappings/Carrera";
import { CarreraDisplayMap } from "@mappings/CarreraDisplayMap";
import { UserPatch } from "@interfaces/user/UserPatch";
import { Button } from "@components/ui/Button";

interface Props {
  defaultValues?: UserPatch;
  onSubmit: (data: UserPatch) => void;
  loading?: boolean;
}

export default function UserEditForm({
  defaultValues,
  onSubmit,
  loading,
}: Props) {
  const [form, setForm] = useState<UserPatch>({
    password: defaultValues?.password || "",
    correo: defaultValues?.correo || "",
    nombre: defaultValues?.nombre || "",
    horario: defaultValues?.horario || "",
    carrera: defaultValues?.carrera || ("" as Carrera),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        name="correo"
        value={form.correo}
        onChange={handleChange}
        placeholder="Correo"
        type="email"
        className="border p-2 rounded w-full"
      />

      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Nueva contraseña"
        type="password"
        className="border p-2 rounded w-full"
      />

      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre completo"
        className="border p-2 rounded w-full"
      />

      <input
        name="horario"
        value={form.horario}
        onChange={handleChange}
        placeholder="Horario disponible"
        className="border p-2 rounded w-full"
      />

      <select>
        <option value="">Selecciona una carrera</option>
        {Object.entries(CarreraDisplayMap).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>

      <Button type="submit" disabled={loading}>
        {loading ? "Guardando..." : "Guardar Cambios"}
      </Button>
    </form>
  );
}
