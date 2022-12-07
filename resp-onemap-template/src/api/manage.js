import { request } from '@dpark/s2-xxweb-utils';
import { dealWithError } from '@/api/dealwithError';
const axios = request.getService(window.project);
const axiosSSO = request.getServiceSSO(window.project);
const serviceAxios = request.getService(window.project, null, 'datawayUrl');
request.onResponseError(axios, (error) => dealWithError(error));
request.onResponseError(axiosSSO, (error) => dealWithError(error));
request.onResponseError(serviceAxios, (error) => dealWithError(error));

axios.interceptors.response.use((response) => {
  return response.data;
});
axiosSSO.interceptors.response.use((response) => {
  return response.data;
});
serviceAxios.interceptors.response.use((response) => {
  return response.data;
});
// 提供给地图组件使用的请求格式
export function post({ url, data, method = 'post', params }) {
  return serviceAxios({
    url: url,
    method,
    data,
    params,
  });
}
export function postAction(url, parameter) {
  return serviceAxios({
    url: url,
    method: 'post',
    data: parameter,
  });
}

export function putAction(url, parameter) {
  return serviceAxios({
    url: url,
    method: 'put',
    data: parameter,
  });
}

export function getAction(url, parameter) {
  return serviceAxios({
    url: url,
    method: 'get',
    params: parameter,
  });
}

export function deleteAction(url, parameter) {
  return serviceAxios({
    url: url,
    method: 'delete',
    params: parameter,
  });
}

export function httpAction(url, parameter, method) {
  return serviceAxios({
    url: url,
    method: method,
    data: parameter,
  });
}
