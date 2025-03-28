import axios from 'axios';

// 創建 Axios 實例
const request = axios.create({
  baseURL: 'https://geek.itheima.net/v1_0', // 替換為您的 API 根域名
  timeout: 10000, // 設置請求超時時間為 10 秒
  headers: {
    'Content-Type': 'application/json',
    // 如有需要，添加其他請求頭
  },
});

// 請求攔截器
request.interceptors.request.use(
  (config) => {
    // 在此處添加請求前的處理，例如添加授權標頭
    // config.headers['Authorization'] = 'Bearer token';
    return config;
  },
  (error) => {
    // 處理請求錯誤
    return Promise.reject(error);
  }
);

// 響應攔截器
request.interceptors.response.use(
  (response) => {
    // 在此處添加響應後的處理，例如統一處理響應數據格式
    return response;
  },
  (error) => {
    // 處理響應錯誤
    return Promise.reject(error);
  }
);

export default request;
