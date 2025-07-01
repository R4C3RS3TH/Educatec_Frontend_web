import { Outlet } from "react-router-dom";
import Navbar from "@components/ui/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
