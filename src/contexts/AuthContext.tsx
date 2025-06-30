import { useStorageState } from "@hooks/useStorageState";
import { LoginRequest } from "@interfaces/auth/LoginRequest";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import Api from "@services/api";
import { login } from "@services/auth/login";
import { RegisterAsesor,RegisterAlumno } from "@services/auth/register";
import { createContext, ReactNode, useContext } from "react";

interface AuthContextType {
	register: (signupRequest: RegisterRequest, role: "alumno" | "asesor") => Promise<void>;
	login: (loginRequest: LoginRequest) => Promise<void>;
	logout: () => void;
	session?: string | null;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function loginHandler(
	loginRequest: LoginRequest,
	setSession: (value: string) => void,
) {
	const response = await login(loginRequest);
	setSession(response.data.token);
}

async function signupHandler(
  signupRequest: RegisterRequest,
  role: "alumno" | "asesor",
  setSession: (value: string) => void
) {
  const response =
    role === "asesor"
      ? await RegisterAsesor(signupRequest)
      : await RegisterAlumno(signupRequest);
  setSession(response.data.token);
}

export function AuthProvider(props: { children: ReactNode }) {
	const [[isLoading, session], setSession] = useStorageState("token");

	if (session)
		Api.getInstance().then((api) => {
			api.authorization = session;
		});

	return (
		<AuthContext.Provider
			value={{
				register: (signupRequest, role) =>signupHandler(signupRequest, role, setSession),
				login: (loginRequest) => loginHandler(loginRequest, setSession),
				logout: () => {
					setSession(null);
				},
				session,
				isLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error("useAuthContext must be used within a AuthProvider");
	return context;
}
