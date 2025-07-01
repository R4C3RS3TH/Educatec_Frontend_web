import React, { useEffect, useState } from "react";
import {
  getAlumnoPersonalInfo,
  updateAlumnoPersonalInfo,
} from "@services/AlumnoService";
import {
  getMiPerfilAsesor,
  updateAsesorPersonal,
} from "@services/AsesorService";
import { AlumnoEditForm } from "@components/alumno/AlumnoEditForm";
import { AsesorEditForm } from "@components/asesor/AsesorEditForm";
import { AlumnoPatch } from "@interfaces/alumno/AlumnoPatch";
import { AsesorPatch } from "@interfaces/asesor/AsesorPatch";
import { UserResponse } from "@interfaces/user/UserResponse";
import { toast } from "sonner";
import { getMe } from "@services/UserService";

const EditProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [initialData, setInitialData] = useState<
    AlumnoPatch | AsesorPatch | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userResponse = await getMe();
        console.log("Usuario obtenido:", userResponse);
        setUser(userResponse);

        if (userResponse.rol.includes("ALUMNO")) {
          const data = await getAlumnoPersonalInfo();
          setInitialData(data);
        } else if (
          ["ASESOR", "FREELANCER", "COLIDER", "LIDER"].some((r) =>
            userResponse.rol.includes(r)
          )
        ) {
          const data = await getMiPerfilAsesor();
          setInitialData(data);
        } else {
          console.warn("Rol no manejado:", userResponse.rol);
        }
      } catch (err) {
        console.error("Error al cargar perfil:", err);
        toast.error("Error al cargar el perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAlumnoSubmit = async (data: AlumnoPatch) => {
    try {
      await updateAlumnoPersonalInfo(data);
      toast.success("Perfil actualizado correctamente.");
    } catch (err) {
      toast.error("Error al actualizar el perfil de alumno.");
    }
  };

  const handleAsesorSubmit = async (data: AsesorPatch) => {
    try {
      await updateAsesorPersonal(data);
      toast.success("Perfil actualizado correctamente.");
    } catch (err) {
      toast.error("Error al actualizar el perfil de asesor.");
    }
  };

  if (loading) return <p className="text-center mt-8">Cargando perfil...</p>;
  if (!user || !initialData)
    return <p className="text-center mt-8">No se pudo cargar el perfil.</p>;

  const esAlumno = user.rol.includes("ALUMNO");
  const esAsesor = ["ASESOR", "FREELANCER", "COLIDER", "LIDER"].some((rol) =>
    user.rol.includes(rol)
  );

  return (
    <main className="py-10 px-4">
      {esAlumno && (
        <AlumnoEditForm
          initialData={initialData as AlumnoPatch}
          onSubmit={handleAlumnoSubmit}
        />
      )}
      {esAsesor && (
        <AsesorEditForm
          initialData={initialData as AsesorPatch}
          onSubmit={handleAsesorSubmit}
        />
      )}
    </main>
  );
};

export default EditProfilePage;
