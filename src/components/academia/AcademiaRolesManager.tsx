import React, { useState } from "react";
import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";

interface AcademiaRolesManagerProps {
  onAddLider: (email: string) => void;
  onRemoveLider: (email: string) => void;
  onAddAsesor: (email: string) => void;
  onRemoveAsesor: (email: string) => void;
  currentLideres: string[];
  currentAsesores: string[];
}

export const AcademiaRolesManager: React.FC<AcademiaRolesManagerProps> = ({
  onAddLider,
  onRemoveLider,
  onAddAsesor,
  onRemoveAsesor,
  currentLideres,
  currentAsesores,
}) => {
  const [liderEmail, setLiderEmail] = useState("");
  const [asesorEmail, setAsesorEmail] = useState("");

  return (
    <div className="space-y-6">
      {/* Lideres */}
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Líderes</h3>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Correo de líder"
            value={liderEmail}
            onChange={(e) => setLiderEmail(e.target.value)}
          />
          <Button
            variant="primary"
            onClick={() => {
              if (liderEmail) {
                onAddLider(liderEmail);
                setLiderEmail("");
              }
            }}
          >
            Agregar
          </Button>
        </div>

        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          {currentLideres.map((email) => (
            <li key={email} className="flex justify-between items-center">
              <span>{email}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onRemoveLider(email)}
              >
                Quitar
              </Button>
            </li>
          ))}
        </ul>
      </section>

      {/* Asesores */}
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Asesores</h3>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Correo de asesor"
            value={asesorEmail}
            onChange={(e) => setAsesorEmail(e.target.value)}
          />
          <Button
            variant="primary"
            onClick={() => {
              if (asesorEmail) {
                onAddAsesor(asesorEmail);
                setAsesorEmail("");
              }
            }}
          >
            Agregar
          </Button>
        </div>

        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          {currentAsesores.map((email) => (
            <li key={email} className="flex justify-between items-center">
              <span>{email}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onRemoveAsesor(email)}
              >
                Quitar
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
