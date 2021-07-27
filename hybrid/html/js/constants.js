/*
 * @Author: zequan.wu
 * @Date: 2021-05-26 16:42:50
 * @LastEditors: zequan.wu
 * @LastEditTime: 2021-05-30 14:49:31
 * @Description: 地图页面用到的常量
 */
;(function () {
  // 路径必须是以map.html为基进行的相对路径，或者绝对路径
  window.__MARKERS_MAP__ = {
    __POINT_3_ICON__: './assets/image/point_3.png',
    __CAR_MARKER__: './assets/image/car_marker.png'
  }
  window.__SITE_TYPE_MAP__ = {
    1: './assets/image/school.png',
    2: './assets/image/hospital.png',
    3: './assets/image/beadhouse.png',
    4: './assets/image/parking_lot.png',
    5: './assets/image/pharmacy.png',
    6: './assets/image/canteen.png',
    7: './assets/image/take_refuge.png'
  }
  window.__GRIDERS_MAP__ = {
    other: './assets/image/grider.png'
  }
  window.__VEHICLE_TYPE_MAP__ = {
    1: './assets/image/law_enforcement_vehicle.png',
    2: './assets/image/operation_vehicle.png'
  }

  window.__EVENT_MAP__ = {
    other: './assets/image/event.png'
  }

  window.__GRIDERS_NEW_LOCATION_MAP__ = {
    other: './assets/image/grider.png'
  }

  // 设备状态
  window.__CAMERAS_STATUS_ICON_KEYMAP__ = {
    1: 'imageUrl',
    0: 'offlineUrl'
  }
})()
