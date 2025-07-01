import { useEffect, useState } from "react";
import { getMe } from "@services/UserService";
import { UserResponse } from "@interfaces/user/UserResponse";
import { AlumnoResponse } from "@interfaces/alumno/AlumnoResponse";
import { getAlumnoPersonalInfo } from "@services/AlumnoService";
import { getMiPerfilAsesor } from "@services/AsesorService";
import { AsesorResponse } from "@interfaces/asesor/AsesorResponse";
import AlumnoProfile from "@components/alumno/AlumnoProfile";
import AsesorProfile from "@components/asesor/AsesorProfile";
import AdminProfile from "@components/user/AdminProfile";
import { useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button";

export default function PerfilPage() {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [alumnoData, setAlumnoData] = useState<AlumnoResponse | null>(null);
  const [asesorData, setAsesorData] = useState<AsesorResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const isAlumno =
  Array.isArray(user?.rol) && user.rol.includes("ALUMNO");
  const isAsesor = Array.isArray(user?.rol) && user.rol.some((r) => ["ASESOR", "FREELANCER", "COLIDER", "LIDER"].includes(r));
  const isAdmin =
  Array.isArray(user?.rol) && user.rol.includes("ADMIN");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  const handleEditProfile = () => {
    navigate("/perfil/editar");
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const me = await getMe();
      setUser(me);

      if (Array.isArray(me.rol) && me.rol.includes("ALUMNO")) {
        const alumno = await getAlumnoPersonalInfo();
        setAlumnoData(alumno);
      } else if (
        Array.isArray(me.rol) &&
        me.rol.some((r) => ["ASESOR", "FREELANCER", "COLIDER", "LIDER"].includes(r))
      ) {
        const asesor = await getMiPerfilAsesor();
        setAsesorData(asesor);
      }
    } catch (error) {
      console.error("Error al cargar perfil:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);



  if (loading) {
    return <p className="text-center text-gray-500">Cargando perfil...</p>;
  }

  if (!user) {
    return (
      <p className="text-center text-red-500">No se pudo obtener el usuario</p>
    );
  }

  if (isAlumno && alumnoData) {
    return (
      <>
        <AlumnoProfile alumno={alumnoData} />
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="secondary" onClick={handleEditProfile}>
            Editar Perfil
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </div>
      </>
    );
  }

  if (isAsesor && asesorData) {
    return (
      <>
        <AsesorProfile asesor={asesorData} />
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="secondary" onClick={handleEditProfile}>
            Editar Perfil
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </div>
      </>
    );
  }

  if (isAdmin) {
    return (
      <>
        <AdminProfile admin={user} />
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="destructive" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </div>
      </>
    );
  }

  return (
    <p className="text-center text-gray-500">
      No se pudo determinar el tipo de perfil.
    </p>
  );
}
