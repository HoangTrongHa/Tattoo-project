import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can add any custom logic here, such as adding authorization tokens
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle errors globally
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;