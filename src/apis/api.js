import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (ACCESS_TOKEN) {
    config.headers = { Authorization: `Bearer ${ACCESS_TOKEN}` };
  } else {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }
  return config;
},
function (error){
  return Promise.reject(error);
});