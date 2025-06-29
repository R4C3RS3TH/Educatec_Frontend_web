import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "@services/UserService";
import { UserResponse } from "@interfaces/user/UserResponse";
import { useNavigate } from "react-router-dom";

export default function UserList() {
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers()
            .then(setUsers)
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (codigo: string) => {
        const confirmDelete = window.confirm("¿Seguro que deseas eliminar este usuario?");
        if (!confirmDelete) return;

        try {
            await deleteUser(codigo);
            setUsers(users.filter((user) => user.codigo !== codigo));
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            alert("No se pudo eliminar el usuario.");
        }
    };

    if (loading) return <div className="p-4">Cargando usuarios...</div>;

    return (
        <section className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Lista de Usuarios</h1>
            <table className="w-full border-collapse border border-gray-400 text-left text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-2">Código</th>
                        <th className="border border-gray-300 p-2">Nombre</th>
                        <th className="border border-gray-300 p-2">Correo</th>
                        <th className="border border-gray-300 p-2">Rol</th>
                        <th className="border border-gray-300 p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.codigo} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-2">{user.codigo}</td>
                            <td className="border border-gray-300 p-2">{user.nombre}</td>
                            <td className="border border-gray-300 p-2">{user.correo}</td>
                            <td className="border border-gray-300 p-2 capitalize">{user.rol}</td>
                            <td className="border border-gray-300 p-2 space-x-2">
                                <button
                                    onClick={() => navigate(`/admin/usuarios/${user.codigo}`)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Ver
                                </button>
                                <button
                                    onClick={() => handleDelete(user.codigo)}
                                    className="text-red-600 hover:underline"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
