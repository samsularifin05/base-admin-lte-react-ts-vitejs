import { ApiResponse, UserLogin } from "@/interface";
import { VITE_APP_BE, generateSignature, getItem, setItem } from "./function";
import { Axios, AxiosRequestConfig, AxiosResponse } from "../package";
import { AxiosError } from "axios";
const userData: UserLogin = getItem<UserLogin>("userdata");

interface ErrorResponse {
  status: number;
  message: string;
}

const signature = generateSignature();

const errorRegex =
  /Unauthorized|Invalid token|Invalid signature|Token Tidak Ditemukan/i;

export async function getData<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = `${VITE_APP_BE}/${endpoint}`;

  const config: AxiosRequestConfig = {
    headers: {
      "X-Signature": signature,
      Accept: "application/json",
      Authorization: `Bearer ${getItem<UserLogin>("userdata")?.access_token}`,
    },
    params: params,
  };

  return new Promise<T>((resolve, reject) => {
    Axios.get<ApiResponse<T>>(url, config)
      .then((response: AxiosResponse<ApiResponse<T>>) => {
        resolve(response.data as T);
      })
      .catch(async (error: AxiosError<ErrorResponse>) => {
        if (Axios.isAxiosError(error)) {
          const errResponse = error as AxiosError<ErrorResponse>;

          if (errResponse.response) {
            const { data } = errResponse.response;
            const message =
              data && data.message ? data.message : "Unknown error";

            if (/Token expired/i.test(message)) {
              const newToken = await refreshToken();
              setItem("userdata", {
                ...userData,
                access_token: newToken,
              });
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }

            if (errorRegex.test(message)) {
              setTimeout(() => {
                localStorage.clear();
                window.location.reload();
              }, 3000);
            }
            // Error response from the server
            reject(new Error(`${message}`));
          } else if (errResponse.request) {
            // No response received
            reject(new Error(errResponse.message));
          } else {
            // Other errors
            reject(new Error(errResponse.message));
          }
        } else {
          reject(new Error("Tidak Terhubung Ke Server"));
        }
      });
  });
}

export async function postData<T, D>(endpoint: string, data: D): Promise<T> {
  const url = `${VITE_APP_BE}/${endpoint}`;

  const config: AxiosRequestConfig = {
    headers: {
      "X-Signature": signature,
      Accept: "application/json",
      Authorization: `Bearer ${getItem<UserLogin>("userdata")?.access_token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  return new Promise<T>((resolve, reject) => {
    Axios.post<ApiResponse<T>>(url, data, config)
      .then((response: AxiosResponse<ApiResponse<T>>) => {
        resolve(response.data as T);
      })
      .catch(async (error) => {
        if (Axios.isAxiosError(error)) {
          const errResponse = error as AxiosError<ErrorResponse>;

          if (errResponse.response) {
            const { data } = errResponse.response;

            const message =
              data && data.message ? data.message : "Unknown error";

            if (/Token expired/i.test(message)) {
              const newToken = await refreshToken();
              setItem("userdata", {
                ...userData,
                access_token: newToken,
              });
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }

            if (errorRegex.test(message)) {
              setTimeout(() => {
                localStorage.clear();
                window.location.reload();
              }, 3000);
            }
            // Error response from the server
            reject(new Error(`${message}`));
          } else if (errResponse.request) {
            // No response received
            reject(
              new Error(
                errResponse.message || "Terjadi kesalahan saat mengirim data"
              )
            );
          } else {
            // Other errors
            reject(
              new Error(
                errResponse.message || "Terjadi kesalahan saat mengirim data"
              )
            );
          }
        } else {
          reject(new Error("Tidak Terhubung Ke Server"));
        }
      });
  });
}
export async function putData<T, D>(endpoint: string, data: D): Promise<T> {
  const url = `${VITE_APP_BE}/${endpoint}`;

  const config: AxiosRequestConfig = {
    headers: {
      "X-Signature": signature,
      Accept: "application/json",
      Authorization: `Bearer ${getItem<UserLogin>("userdata")?.access_token}`,
    },
  };

  return new Promise<T>((resolve, reject) => {
    Axios.put<ApiResponse<T>>(url, data, config)
      .then((response: AxiosResponse<ApiResponse<T>>) => {
        resolve(response.data as T);
      })
      .catch(async (error) => {
        if (Axios.isAxiosError(error)) {
          const errResponse = error as AxiosError<ErrorResponse>;

          if (errResponse.response) {
            const { data } = errResponse.response;

            const message =
              data && data.message ? data.message : "Unknown error";
            // Error response from the server
            if (/Token expired/i.test(message)) {
              const newToken = await refreshToken();
              setItem("userdata", {
                ...userData,
                access_token: newToken,
              });
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }

            if (errorRegex.test(message)) {
              setTimeout(() => {
                localStorage.clear();
                window.location.reload();
              }, 3000);
            }
            reject(new Error(`${message}`));
          } else if (errResponse.request) {
            // No response received
            reject(
              new Error(
                errResponse.message || "Terjadi kesalahan saat mengirim data"
              )
            );
          } else {
            // Other errors
            reject(
              new Error(
                errResponse.message || "Terjadi kesalahan saat mengirim data"
              )
            );
          }
        } else {
          reject(new Error("Tidak Terhubung Ke Server"));
        }
      });
  });
}

export async function deleteData<T>(endpoint: string): Promise<T> {
  const url = `${VITE_APP_BE}/${endpoint}`;

  const config: AxiosRequestConfig = {
    headers: {
      "X-Signature": signature,
      Accept: "application/json",
      Authorization: `Bearer ${getItem<UserLogin>("userdata")?.access_token}`,
    },
  };

  return new Promise<T>((resolve, reject) => {
    Axios.delete<ApiResponse<T>>(url, config)
      .then((response: AxiosResponse<ApiResponse<T>>) => {
        resolve(response.data as T);
      })
      .catch(async (error) => {
        if (Axios.isAxiosError(error)) {
          const errResponse = error as AxiosError<ErrorResponse>;

          if (errResponse.response) {
            // Error response from the server
            const { status, data } = errResponse.response;
            const message =
              data && data.message ? data.message : "Unknown error";

            if (/Token expired/i.test(message)) {
              const newToken = await refreshToken();
              setItem("userdata", {
                ...userData,
                access_token: newToken,
              });
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }

            if (errorRegex.test(message)) {
              setTimeout(() => {
                localStorage.clear();
                window.location.reload();
              }, 3000);
            }
            reject(new Error(`Error ${status}: ${message}`));
          } else if (errResponse.request) {
            // No response received
            reject(new Error("Request error"));
          } else {
            // Other errors
            reject(new Error("Error"));
          }
        } else {
          reject(new Error("Error"));
        }
      });
  });
}

export const refreshToken = async (): Promise<string> => {
  const url = `${VITE_APP_BE}/refreshToken`;
  const config: AxiosRequestConfig = {
    headers: {
      "X-Signature": signature,
      Accept: "application/json",
      Authorization: `Bearer ${getItem<UserLogin>("userdata")?.access_token}`,
    },
  };

  const response = await Axios.get(url, config);
  return response.data.access_token; // Mengembalikan access token baru
};
