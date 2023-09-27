import { service } from "../lib/axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async () => {
  try {
    const { data } = await service.get<Post[]>("/posts", {
      params: {
        _limit: 5,
      },
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPostById = async (id: string | number) => {
  try {
    const { data } = await service.get<Post>(`/posts/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
