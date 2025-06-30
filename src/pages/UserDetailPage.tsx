import UserDetail from "@components/user/UserDetail";

export default function UserDetailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <section className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Detalle del Usuario</h1>
        <UserDetail />
      </section>
    </main>
  );
}
