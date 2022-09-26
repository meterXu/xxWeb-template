import axios from 'axios'
import {warn} from "./utils";


const err = (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 403:
                warn('拒绝访问！')
                break
            case 500:
                warn('请求异常！')
                break
            case 404:
                warn('很抱歉，资源未找到！')
                break
            case 504:
                warn('网络超时！')
                break
            default:
                warn('请求失败！')
                break
        }
    }
    return Promise.reject(error)
};


const createRequest=function (baseApi){
    const request = axios.create({
        baseURL:baseApi,
        timeout: 15000 // 请求超时时间
    })
    request.interceptors.request.use(config => {
        return config
    },(error) => {
        return Promise.reject(error)
    })
    request.interceptors.response.use((response) => {
        return response
    }, err)
    return request
}

export default createRequest
