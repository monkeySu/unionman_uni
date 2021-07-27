/*
 * @Author: ruixin
 * @Date: 2021-05-24 09:51:00
 * @LastEditors: ruixin
 * @LastEditTime: 2021-07-27 09:41:21
 * @Description: 请求的全局封装方法
 */

let domain = '';

// #ifdef APP-PLUS
// 仅在app生效
// domain = 'http://192.168.130.212:22200';
// domain = 'http://202.168.169.42:8136';
// #endif

/**
 * request
 * @param {String} url 请求的地址
 * @param {Object} params  请求的参数
 * @param {Object} config  请求的配置项，优先级最高，一般用于覆盖header的参数,还包含控制全局报错信息的展示hideError
 * @returns
 */
const request = (url, params = {}, config = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: domain + url,
      ...params,
      data: params.data,
      header: {
        ...(params.header || {})
      },
      method: params.method || 'GET',
      success: res => {
        // 通用的处理逻辑
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            resolve(res.data.data);
          } else {
            reject({
              code: res.statusCode,
              message: res.data.message || '网络似乎出现了点问题'
            });
          }
        } else {
          reject({
            ...res.data
          });
        }
      },
      fail: err => {
        reject(err);
      },
      ...config
    });
  });
};

const requestFun = (url, params, config) => {
  return new Promise((resolve, reject) => {
    request(url, params, config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        const hideError = !!config.hideError;
        if (!hideError) {
          uni.showToast({
            title: `${err.code}${err.message}`,
            icon: 'none',
            mask: true
          });
        }
        return err;
      });
  });
};

export const postBodyRequest = (url, data, config = {}) => {
  return requestFun(
    url,
    {
      data,
      method: 'POST'
    },
    config
  );
};

export const getRequest = (url, data, config = {}) => {
  return requestFun(
    url,
    {
      data,
      method: 'GET'
    },
    config
  );
};

export const putBodyRequest = (url, data, config = {}) => {
  return requestFun(
    url,
    {
      data,
      ...config,
      method: 'PUT'
    },
    config
  );
};

export const deleteBodyRequest = (url, data, config = {}) => {
  return requestFun(
    url,
    {
      data,
      method: 'DElETE'
    },
    config
  );
};

export const postFormRequest = (url, formData, config = {}) => {
  return requestFun(url, {
    method: 'POST',
    data: formData,
    config,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};
