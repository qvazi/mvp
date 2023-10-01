import axios from "axios";

export const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

service.interceptors.request.use(
  (request) => {
    console.log("service", "intr.req.success");
    return request;
  },
  (request) => {
    console.log("service", "intr.req.error");
    return request;
  },
);
service.interceptors.response.use(
  async (response) => {
    console.log("service", "intr.res.success");
    return response;
  },
  async (error) => {
    console.log("service", "intr.res.error");
    if (axios.isAxiosError(error)) {
      if (error.config?.url === "/posts/111") {
        error.config.url = "/posts/11";
        // return service(error.config);
      }
    } else {
      return Promise.reject(error);
    }
  },
);

export const storage: {
  user: null | {
    name: string;
    phone: string;
    token: string;
  };
} = {
  user: null,
};

export const apingwebInstance = axios.create({
  baseURL: "https://apingweb.com/api/",
});

apingwebInstance.interceptors.request.use(async (request) => {
  console.log(storage, "storage");
  // if (storage.user && request.url !== "/login" && request.url !== "/register") {
  //   request.headers["Authorization"] = "Bearer " + storage.user.token;
  //   request.headers["Content-Type"] = "application/json";
  // }

  return request;
});

const awaitingRequests = [];
let relogin = false;
apingwebInstance.interceptors.response.use(
  async (response) => {
    console.log("success intr.res", response.config.url);
    // if (
    //   response.status === 404 &&
    //   response.config.url !== "/login" &&
    //   response.config.url !== "/register"
    // ) {
    //   console.log(response.config.url, "intr.res");
    // }
    return response;
  },
  async (error) => {
    // console.log(error);
    if (axios.isAxiosError(error)) {
      if (
        error.response?.status === 404 &&
        error.config?.url !== "/login" &&
        error.config?.url !== "/register"
      ) {
        awaitingRequests.push(error.config);
        if (!relogin) {
          try {
            relogin = true;
            const response = await apingwebInstance.post(
              "/login",
              {
                email: "qwe@qwe",
                password: "qweqwe",
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
            relogin = false;
            awaitingRequests.forEach((config) => apingwebInstance(config));
            return;
          } catch (error) {
            return Promise.reject(error);
          }
        }
      }
    }
    return Promise.reject(error);
  },
);

export const apingweb = apingwebInstance;
