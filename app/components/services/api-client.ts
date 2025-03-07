import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  success: boolean;
  message: string | null;
  data: T[];
}

export interface PostResponse<T> {
  success: boolean;
  message: string | null;
  data: Data<T>;
}

export interface DeleteResponse {
  success: boolean;
  message: string | null;
}

interface Data<T> {
  new_resource_type: T;
}

const axiosInstance = axios.create({
  baseURL: "https://dev-api.soms.gov.bd/gw/resource-service/api",
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNWM3YWRmYWI0MWY5YjA2MDc2ODExNWViOThhN2MzMzFlODUwNzZiYzdkNzU5ZGMyYTM0MDZmMDMzMWUzMDgyNTcxYzlmN2E4YTY3ZjcxMTgiLCJpYXQiOjE3NDEwMjExOTEuMzE1MzcxLCJuYmYiOjE3NDEwMjExOTEuMzE1MzczLCJleHAiOjE3NzI1NTcxOTEuMzA5MjM1LCJzdWIiOiIyMDAiLCJzY29wZXMiOltdfQ.JIMxt5zbOGiIkflsBTv7gBOp5MtyPblAKf3MjzW9GWdkM2n5MdL97563cxHQfCB8LqE9wzU3KJxfh7yCLpIUvuROXGhuLs-ZTWHec4LsPwKbEzpSGk7xErTqGh5vg2THikKGDJu209JeZpWBMUbdklwYoHB14ueQ03yTHDifgTmesnXr4Af68qbVX0-2L8pIFku2I8kkzpPGi0vb4A7DyUUTPlnmtkYDvgxgRX5A8M83vJ9htbGjLCnfLAbtm2fyjnYUw73yNvOFRoIeEEvOhCMlVzwoC467XnxDjJwqe6GXTcu24Rpn02n4rBpi_vIJuEXGiFMRaGMSkntaPlZOHe_1vfAGkDwJEf8oFkKH7lQSsXofTNJARtuRbjXOvmQ3ax8CQaQG2CAxuXAhdRRE9WxZL1JbuUFZ0mPAtU_pV9NxHnLjEI0nHVW9DN9tMMsVHtMbaYocA4pO2KRPFHOf5kWfNhg6f96PsOr8nPfqdYbGwBNqbUjzUmqf9lWWtPqMqkVVNb7sijwRrihyIpYnOcwvPZFbisePp2W5VFe8hdRQrapM5jtxfh7bf_1DWZNcf-CaaAv9RFIKlWCa5Yd-13dsT0k6P-Wh818Zx-zuwwmduz50WaCEHkmWs7YhiV-oMdPTaIQNJQ6S5q7vOZcg3VLK3dJE7TppzeqT9LxkyX4`, // Replace with your actual token
  },
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config) // ✅ Ensure correct response type
      .then((res) => res.data.data); // Returns the full API response
  };

  get = (id: number | string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endPoint}/${id}`, config)
      .then((res) => res.data);
  };

  post = (data: Partial<T>, config?: AxiosRequestConfig) => {
    return axiosInstance
      .post<PostResponse<T>>(this.endPoint, data, config)
      .then((res) => res.data.data.new_resource_type);
  };

  put = (id: number, data: Partial<T>, config?: AxiosRequestConfig) => {
    return axiosInstance
      .put<FetchResponse<T>>(`${this.endPoint}/${id}`, data, config)
      .then((res) => res.data.data);
  };

  delete = (id: number | string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .delete(`${this.endPoint}/${id}`, config)
      .then((res) => id);
  };
}

export default APIClient;
