import RegisterForm from "@components/auth/RegisterForm";
import logo from "@assets/logo.png";
import fondo from "@assets/fondo1.jpg";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row text-black">
      {/* Lado izquierdo: logo + nombre */}
      <section className="w-full md:w-2/5 flex flex-col items-center justify-center bg-[#e6f0ff] p-10">
        <h1 className="text-7xl font-extrabold text-blue-700 mb-6">Educatec</h1>
        <img src={logo} alt="Logo" className="w-[32rem] h-auto" />
      </section>

      {/* Lado derecho: formulario con fondo de imagen */}
      <section
        className="relative w-full md:w-3/5 flex items-center justify-center p-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <article className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md relative z-10">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Registrarse</h2>
          <RegisterForm />
        </article>
      </section>
    </main>
  );
}
