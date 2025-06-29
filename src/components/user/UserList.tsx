// src/components/UserList.tsx
import { useEffect, useState } from "react";
import { getAllUsers } from "@services/UserService";
import { UserResponse } from "@interfaces/user/UserResponse";

export default function UserList() {
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllUsers()
            .then(setUsers)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="p-4">Cargando usuarios...</div>;

    return (
        <section className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Lista de Usuarios</h1>
            <table className="w-full border-collapse border border-gray-400 text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-2">Código</th>
                        <th className="border border-gray-300 p-2">Nombre</th>
                        <th className="border border-gray-300 p-2">Correo</th>
                        <th className="border border-gray-300 p-2">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.codigo} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-2">{user.codigo}</td>
                            <td className="border border-gray-300 p-2">{user.nombre}</td>
                            <td className="border border-gray-300 p-2">{user.correo}</td>
                            <td className="border border-gray-300 p-2">{user.rol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
