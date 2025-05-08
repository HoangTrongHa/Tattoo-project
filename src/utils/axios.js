import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance;