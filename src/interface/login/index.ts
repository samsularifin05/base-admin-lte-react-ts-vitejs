export interface LoginFormData {
  email: string;
  password: string;
}
export interface ApiResponse<T> {
  success: boolean;
  status: number;
  result: T;
  message: string;
}

export interface VariableSystem {
  id: string;
  nama_toko: string;
  alamat_toko: string;
  no_hp: string;
  jenis_usaha: string;
  logo: string;
}
export interface UserLogin {
  length: number;
  id: number;
  nama_lengkap: string;
  no_hp: string;
  email: string;
  username: string;
  access_token: string;
  refresh_token: string;
  variable_system: VariableSystem;
}

export interface LoginResponse {
  success: boolean;
  status: number;
  result: UserLogin;
  message: string;
}
