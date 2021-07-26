/*
 * @Author: bin.zou
 * @Date: 2021-05-27 09:24:10
 * @LastEditors: ruixin
 * @LastEditTime: 2021-07-26 09:49:11
 * @Description: 事件相关接口
 */
import { getRequest } from '../request';

export default {
  // 完整的请求方法
  getData(params, config) {
    return getRequest('/static/api.json', params, config);
  }
};
