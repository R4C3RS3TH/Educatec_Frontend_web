import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";
import { AcademiaRequest } from "@interfaces/academia/AcademiaRequest";
import { createAcademia, updateAcademia } from "@services/AcademiaService";

interface AcademiaFormProps {
  initialData?: AcademiaRequest;
  mode?: "create" | "edit";
  nombreActual?: string; // solo para edición
}

export const AcademiaForm: React.FC<AcademiaFormProps> = ({
  initialData = {
    nombre: "",
    asesorIds: [],
    lideresIds: [],
    coleccionAsesoriasIds: [],
  },
  mode = "create",
  nombreActual,
}) => {
  const [form, setForm] = useState<AcademiaRequest>(initialData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (mode === "create") {
        await createAcademia(form);
      } else if (mode === "edit" && nombreActual) {
        await updateAcademia(nombreActual, form);
      }
      navigate("/academias");
    } catch (err) {
      console.error("Error guardando academia:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">
        {mode === "edit" ? "Editar Academia" : "Registrar Nueva Academia"}
      </h2>

      <Input
        label="Nombre"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />

      {/* Se podrían agregar campos para agregar asesores, líderes y colecciones si se desea */}

      <div className="pt-2">
        <Button onClick={handleSubmit} loading={loading}>
          {mode === "edit" ? "Guardar Cambios" : "Crear Academia"}
        </Button>
      </div>
    </div>
  );
};
