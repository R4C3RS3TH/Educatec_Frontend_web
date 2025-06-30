import React, { useState } from "react";
import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";

interface Props {
  onSearch: (params: { curso?: string; asesor?: string }) => void;
}

export const ColeccionSearch: React.FC<Props> = ({ onSearch }) => {
  const [curso, setCurso] = useState("");
  const [asesor, setAsesor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ curso: curso.trim(), asesor: asesor.trim() });
  };

  const handleReset = () => {
    setCurso("");
    setAsesor("");
    onSearch({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-xl shadow-md mb-6"
    >
      <Input
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        placeholder="Buscar por curso"
      />
      <Input
        value={asesor}
        onChange={(e) => setAsesor(e.target.value)}
        placeholder="Buscar por asesor"
      />
      <Button type="submit" className="bg-blue-600 text-white">
        Buscar
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={handleReset}
        className="border-gray-400"
      >
        Limpiar
      </Button>
    </form>
  );
};
