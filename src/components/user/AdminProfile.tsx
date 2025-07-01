import { UserResponse } from "@interfaces/user/UserResponse";

interface Props {
  admin: UserResponse;
}

export default function AdminProfile({ admin }: Props) {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-primary text-center">Perfil del Administrador</h2>

      <div>
        <label className="text-sm text-gray-600">Nombre</label>
        <p className="text-lg font-medium text-gray-800">{admin.nombre}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Correo</label>
        <p className="text-gray-700">{admin.correo}</p>
      </div>

      <div>
        <label className="text-sm text-gray-600">Rol</label>
        <p className="text-gray-700">{admin.rol}</p>
      </div>

      {admin.carrera && (
        <div>
          <label className="text-sm text-gray-600">Carrera</label>
          <p className="text-gray-700">{admin.carrera}</p>
        </div>
      )}

      {admin.horario && (
        <div>
          <label className="text-sm text-gray-600">Horario</label>
          <p className="text-gray-700">{admin.horario}</p>
        </div>
      )}
    </div>
  );
}
