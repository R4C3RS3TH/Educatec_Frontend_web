import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegisterPage";
import DashboardPage from "@pages/DashboardPage";
import NotFoundPage from "@pages/NotFoundPage";
import UserListPage from "@pages/UserListPage";
import UserDetailPage from "@pages/UserDetailPage";
import MainLayout from "@pages/MainLayout";
import AcademiaListPage from "@pages/AcademiaListPage";
import AcademiaDetailPage from "@pages/AcademiaDetailPage";
import AsesoriaListPage from "@pages/AsesoriaListPage";
import AsesoriaDetailPage from "@pages/AsesoriaDetailPage";
import PerfilPage from "@pages/PerfilPage";
import EditProfilePage from "@pages/EditProfilePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "auth",
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          {
            path: "admin/usuarios",
            children: [
              { path: "", element: <UserListPage /> },
              { path: ":codigo", element: <UserDetailPage /> },
            ],
          },
           {
            path: "admin/academias",
            children: [
              { path: "", element: <AcademiaListPage /> },
              { path: ":id", element: <AcademiaDetailPage /> },
            ],
          },
          {
            path: "admin/asesorias",
            children: [
              { path: "", element: <AsesoriaListPage /> },
              { path: ":id", element: <AsesoriaDetailPage /> },
            ],
          },
          {
            path: "perfil",
            children: [
              {path: "", element: <PerfilPage />}
            ],
          },
          {
            path: "perfil/editar",
            children: [
              {path: "", element: <EditProfilePage />}
            ],
          }
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
