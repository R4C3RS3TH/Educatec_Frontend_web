import RegisterForm from "@components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <article className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Registrarse</h1>
        <RegisterForm />
      </article>
    </main>
  );
}
