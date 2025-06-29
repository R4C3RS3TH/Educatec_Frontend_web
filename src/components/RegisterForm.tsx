import { useAuthContext } from "@contexts/AuthContext";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carrera } from "src/types/Carrera";

// Mapeo para mostrar los nombres de las carreras en texto legible
const CarreraDisplayMap: Record<Carrera, string> = {
    INGENIERIA_QUIMICA: "Ingeniería Química",
    INGENIERIA_MECANICA: "Ingeniería Mecánica",
    INGENIERIA_ELECTRICA: "Ingeniería Eléctrica",
    INGENIERIA_ENERGIA: "Ingeniería de Energía",
    INGENIERIA_MECATRONICA: "Ingeniería Mecatrónica",
    BIOINGENIERIA: "Bioingeniería",
    INGENIERA_INDUSTRIAL: "Ingeniería Industrial",
    INGENIERIA_AMBIENTAL: "Ingeniería Ambiental",
    INGENIERIA_CIVIL: "Ingeniería Civil",
    SISTEMAS_DE_INFORMACION: "Sistemas de Información",
    COMPUTER_SCIENCE: "Ciencias de la Computación",
    DATA_SCIENCE: "Ciencia de Datos",
    CIBERSEGURIDAD: "Ciberseguridad",
    ADMINISTRACION_Y_NEGOCIOS_DIGITALES: "Administración y Negocios Digitales",
    ADMINISTRACION_Y_NEGOCIOS_SOSTENIBLES: "Administración y Negocios Sostenibles",
    BUSINESS_ANALYTICS: "Business Analytics",
};

export default function RegisterForm() {
    const { register } = useAuthContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<RegisterRequest>({
        correo: "",
        password: "",
        nombre: "",
        carrera: "SISTEMAS_DE_INFORMACION", // Valor por defecto válido
    });

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(formData);
        await register(formData);
        navigate("/dashboard");
    }

    return (
        <section className="home-section rounded-2xl p-8 w-full max-w-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">Registrarse a Uber</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="w-full border border-gray-600 bg-transparent rounded-md p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-600 bg-transparent rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-600 bg-transparent rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-1">Carrera</label>
                    <select
                        name="carrera"
                        id="carrera"
                        value={formData.carrera}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-600 bg-transparent rounded-md p-2"
                    >
                        {Object.entries(CarreraDisplayMap).map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    id="registerSubmit"
                    className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
                    type="submit"
                >
                    Registrarse
                </button>
            </form>
        </section>
    );
}
