/*
 * @Author: zequan.wu
 * @Date: 2021-05-31 15:06:21
 * @LastEditors: zequan.wu
 * @LastEditTime: 2021-06-01 11:24:14
 * @Description: file content
 */
(function() {
  window.SITE_TYPE_MAP = {
    1: '学校',
    2: '医院',
    3: '养老院',
    4: '停车场',
    5: '药店',
    6: '食堂',
    7: '避难场所'
  };
  window.VEHICLE_TYPE = {
    1: '执法车',
    2: '作业车'
  };
  window.__getRequest__ = (url, params, token) => {
    return axios({
      method: 'get',
      url: `${url}`,
      params,
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    });
  };

  window.__postRequest__ = (url, data, token) => {
    return axios({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    });
  };

  window.__getDevices__ = (url, params, token) => {
    return window
      .__postRequest__(url, params, token)
      .then((res) => {
        const data = res.data.data;
        const result = {
          others: {
            resType: {},
            devices: []
          }
        };
        Array.isArray(data)
          && data.forEach((device) => {
            if (device.resType) {
              const resType = device.resType;
              delete device.resType;
              if (result[resType.name]) {
                result[resType.name].devices.push(device);
              } else {
                result[resType.name] = {
                  resType,
                  devices: [device]
                };
              }
            } else {
              result.others.devices.push(device);
            }
          });
        return result;
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };

  window.__getPlaces__ = (url, params, token) => {
    return window.__postRequest__(url, params, token).then((res) => {
      const data = res.data.data;
      const result = {};
      Array.isArray(data)
        && data.forEach((place) => {
          const placeName = window.SITE_TYPE_MAP[place.siteType];
          if (result[placeName]) {
            place.siteTypeCN = placeName;
            result[placeName].places.push(place);
          } else {
            result[placeName] = {
              resType: {
                isCustom: true,
                name: placeName,
                propMapKey: '__SITE_TYPE_MAP__',
                aggregateUrlProp: place.siteType,
                imageUrlProp: place.siteType
              },
              places: [place]
            };
          }
        });
      return result;
    });
  };

  window.__getGriders__ = (url, params, token) => {
    return window.__postRequest__(url, params, token).then((res) => {
      const data = res.data.data;
      const key = '网格员集合';
      const result = {
        [key]: {
          resType: {
            isCustom: true,
            name: '网格员集合',
            propMapKey: '__GRIDERS_MAP__',
            aggregateUrlProp: 'other',
            imageUrlProp: 'other'
          },
          griders: []
        }
      };
      Array.isArray(data)
        && data.forEach((grid) => {
          result[key].griders.push(grid);
        });
      return result;
    });
  };

  window.__getVehicles__ = (url, params, token) => {
    return window.__postRequest__(url, params, token).then((res) => {
      const data = res.data.data;
      const result = {};
      Array.isArray(data)
        && data.forEach((vehicle) => {
          const vehicleTypeName = VEHICLE_TYPE[vehicle.vehicleType];
          if (result[vehicleTypeName]) {
            vehicle.vehicleTypeCN = vehicleTypeName;
            result[vehicleTypeName].vehicles.push(vehicle);
          } else {
            result[vehicleTypeName] = {
              resType: {
                isCustom: true,
                name: vehicleTypeName,
                propMapKey: '__VEHICLE_TYPE_MAP__',
                aggregateUrlProp: vehicle.vehicleType,
                imageUrlProp: vehicle.vehicleType
              },
              vehicles: [vehicle]
            };
          }
        });
      return result;
    });
  };

  window.__getEventInfoList__ = (url, params, token) => {
    return window.__postRequest__(url, params, token).then((res) => {
      const data = res.data.data;
      const key = '告警事件集合';
      const result = {
        [key]: {
          resType: {
            isCustom: true,
            name: key,
            propMapKey: '__EVENT_MAP__',
            aggregateUrlProp: 'other',
            imageUrlProp: 'other'
          },
          events: []
        }
      };
      Array.isArray(data.records)
        && data.records.forEach((event) => {
          result[key].events.push(event);
        });
      return result;
    });
  };
}());
