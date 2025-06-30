import { useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <section className="text-center">
        <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Página no encontrada</p>
        <Button onClick={() => navigate("/")} variant="primary">
          Volver al inicio
        </Button>
      </section>
    </main>
  );
}
