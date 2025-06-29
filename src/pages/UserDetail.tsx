import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "@services/UserService";
import { UserResponse } from "@interfaces/user/UserResponse";

export default function UserDetail() {
    const { codigo } = useParams();
    const [user, setUser] = useState<UserResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!codigo) return;

        getUserById(codigo)
            .then(setUser)
            .finally(() => setLoading(false));
    }, [codigo]);

    if (loading) return <div className="p-4">Cargando usuario...</div>;

    if (!user) return <div className="p-4 text-red-600">Usuario no encontrado.</div>;

    return (
        <section className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Detalle del Usuario</h1>
            <p><strong>Código:</strong> {user.codigo}</p>
            <p><strong>Nombre:</strong> {user.nombre}</p>
            <p><strong>Correo:</strong> {user.correo}</p>
            <p><strong>Rol:</strong> {user.rol}</p>
        </section>
    );
}
