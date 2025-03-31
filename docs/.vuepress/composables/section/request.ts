// src/utils/request.js
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 设置默认配置
axios.defaults.timeout = 50000;

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        if (config.method.toUpperCase() === 'POST') {
            config.headers['Content-Type'] = 'application/json;charset=utf-8';
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        switch (error.status) {
            case 500:
                ElMessage({ message: 'Server Error', type: 'error' });
                break;
            case 404:
                ElMessage({ message: 'API Not Found', type: 'error' });
                break;
            default:
                ElMessage({ message: error.message || error.msg, type: 'error' });
        }
        return Promise.reject(error);
    }
);

export function get(url, params) {
    return axios.get(url, { params }).then((res) => res.data);
}

export function post(url, data) {
    return axios.post(url, data).then((res) => res.data);
}