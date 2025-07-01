import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "@services/UserService";
import { UserResponse } from "@interfaces/user/UserResponse";

export default function UserDetail() {
    const { codigo } = useParams<{ codigo: string }>();
    const [user, setUser] = useState<UserResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!codigo) return;

        getUserById(codigo)
            .then(setUser)
            .finally(() => setLoading(false));
    }, [codigo]);

    if (loading) return <div className="p-4">Cargando datos del usuario...</div>;
    if (!user) return <div className="p-4 text-red-500">Usuario no encontrado</div>;

    return (
        <section className="p-6 max-w-3xl mx-auto bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Detalle del Usuario</h1>
            <div className="space-y-3">
                <p><strong>Código:</strong> {user.codigo}</p>
                <p><strong>Nombre:</strong> {user.nombre}</p>
                <p><strong>Correo:</strong> {user.correo}</p>
                <p><strong>Rol:</strong> {user.rol}</p>
                <p><strong>Carrera:</strong> {user.carrera}</p>
                <p><strong>Horario:</strong> {user.horario}</p>
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                    onClick={() => navigate("/admin/usuarios")}
                >
                    Volver
                </button>
            </div>
        </section>
    );
}
