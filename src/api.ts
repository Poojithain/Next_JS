import axios from 'axios';

export const fetchPhotos = async (page: number, perPage: number, query: string) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
    params: {
      _page: page,
      _limit: perPage,
      q: query 
    }
  });
  return response.data;

};

export const fetchPosts = async (page: number, perPage: number, query: string) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _page: page,
      _limit: perPage,
      q: query
    }
  });
  return response.data;
};
