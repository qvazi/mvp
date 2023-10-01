import { apingweb, storage } from "../lib/axios";
export type RegisterProps = {
  name: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation: string;
};
export const apingwebService = {
  login: async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await apingweb.post<{
        token: string;
        result: {
          name: string;
          phone: string;
        };
      }>(
        "/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      storage.user = {
        name: response.data.result.name,
        phone: response.data.result.phone,
        token: response.data.token,
      };
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  register: async (props: RegisterProps) => {
    try {
      const response = await apingweb.post(
        "/register",
        {
          ...props,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getArticles: async () => {
    try {
      const response = await apingweb.get("/articles");
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getArticleById: async ({ id }: { id: string }) => {
    try {
      const response = await apingweb.get<{ result: { title: string } }>(
        `/article/${id}`,
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
