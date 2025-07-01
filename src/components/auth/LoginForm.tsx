import { useAuthContext } from "@contexts/AuthContext";
import { LoginRequest } from "@interfaces/auth/LoginRequest";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginForm() {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<LoginRequest>({
        email: "",
        password: "",
    });

    const { login } = useAuthContext();
    const navigate = useNavigate();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(formData);
            setSuccessMessage("Sesión iniciada con éxito");
            setError(null);
            navigate("/dashboard");
        } catch (error) {
            setError(`Error al iniciar sesión: ${(error as Error).message}`);
            setSuccessMessage(null);
        }
    }

    return (
        <section className="bg-gray-50 text-black rounded-2xl p-8 w-full shadow-md flex flex-col items-center transition-colors duration-300">
            <h1 className="text-xl font-semibold text-gray-700 mb-8">Ingresar a Educatec</h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-6">
                {/* Email */}
                <div className="w-full relative">
                    <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Correo electrónico"
                        className="w-full pl-10 border border-gray-300 rounded-md p-2 bg-white text-black placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password */}
                <div className="w-full relative">
                    <FiLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Contraseña"
                        className="w-full pl-10 border border-gray-300 rounded-md p-2 bg-white text-black placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Botón de login */}
                <button
                    id="loginSubmit"
                    className="bg-blue-600 text-white w-full font-bold py-2 px-4 rounded-full cursor-pointer mt-4 transition-colors hover:bg-blue-700"
                    type="submit"
                >
                    Iniciar Sesión
                </button>
            </form>

            {/* Separador */}
            <div className="flex items-center justify-center gap-2 my-10 w-full">
                <div className="flex-grow h-[1px] bg-gray-300"></div>
                <span className="text-gray-500">o</span>
                <div className="flex-grow h-[1px] bg-gray-300"></div>
            </div>

            {/* Botón de registro */}
            <button
                id="registerButton"
                className="bg-white border border-gray-300 text-black w-full flex justify-center items-center gap-4 py-2 px-4 rounded-lg cursor-pointer shadow-sm hover:bg-gray-100 transition"
                onClick={() => navigate("/auth/register")}
            >
                Registrarse
            </button>

            {/* Mensajes */}
            {error && <div className="text-red-600 mt-4">{error}</div>}
            {successMessage && <div className="text-blue-600 mt-4">{successMessage}</div>}
        </section>
    );
}
