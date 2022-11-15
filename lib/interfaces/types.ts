export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data?: string;
  code?: number;
  messsage?: string;
}

export type messageTypes = "success" | "warning" | "info" | "error";

export interface IElMessage {
  message?: string;
  duration?: number;
  type?: messageTypes;
}
