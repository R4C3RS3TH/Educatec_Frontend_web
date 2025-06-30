import { AuthResponse } from "@interfaces/auth/AuthResponse";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import Api from "@services/api";

export async function RegisterAsesor(registerRequest: RegisterRequest) {
    const api = await Api.getInstance();
    const response = await api.post<RegisterRequest, AuthResponse>(
        registerRequest,
        {
            url: "/auth/register/asesor",
        });
    api.authorization = response.data.token;
    return response;
}
export async function RegisterAlumno(registerRequest: RegisterRequest) {
    const api = await Api.getInstance();
    const response = await api.post<RegisterRequest, AuthResponse>(
        registerRequest,
        {
            url: "/auth/register/student",
        });
    api.authorization = response.data.token;
    return response;
}