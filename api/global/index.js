/*
 * @Author: bin.zou
 * @Date: 2021-05-27 09:24:16
 * @LastEditors: ruixin
 * @LastEditTime: 2021-06-08 14:52:22
 * @Description: file content
 */
import api from './api';
import { formatData } from './translator.js';
export default class globalService {
  static getData(params) {
    return api.getData(params).then(formatData);
  }
}
