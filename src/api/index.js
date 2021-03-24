import axios from 'axios';
import apisauce from 'apisauce';

const axiosInstance = axios.create({
  baseURL: '/.netlify/functions/',
  headers: {
    Accept: 'application/json',
  },
});

const api = apisauce.create({ axiosInstance, timeout: 30000 });
export default {
  getCategoryVideos: () => api.get('/categoryvideos'),
  getUploadedVideos: () => api.get('/uploadedvideos'),
  getVideoDetails: (id) => api.get('/videodetails', { id }),
};
