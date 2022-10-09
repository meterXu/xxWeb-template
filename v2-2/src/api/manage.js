import store from '../store'
import { request } from '@dpark/s2-xxweb-utils'
import {dealWithError} from '@/api/dealwithError';
const axios = request.getService(window.project)
const axiosSSO = request.getServiceSSO(window.project)
request.onResponseError(axios,(error)=>dealWithError(error))
request.onResponseError(axiosSSO,(error)=>dealWithError(error))

axios.interceptors.response.use((response) => {
  return response.data
})
axiosSSO.interceptors.response.use((response) => {
  return response.data
})

export function postAction(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}

export function putAction(url, parameter) {
  return axios({
    url: url,
    method: 'put',
    data: parameter
  })
}

export function getAction(url, parameter) {
  return axios({
    url: url,
    method: 'get',
    params: parameter
  })
}

export function deleteAction(url, parameter) {
  return axios({
    url: url,
    method: 'delete',
    params: parameter
  })
}

export function httpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  })
}