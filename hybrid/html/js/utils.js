/*
 * @Author: zequan.wu
 * @Date: 2021-05-26 16:40:34
 * @LastEditors: zequan.wu
 * @LastEditTime: 2021-05-31 17:22:51
 * @Description: 地图相关api封装
 */
(function() {
  // TODO：生成百度地图点实例集合
  window.__GENERATE_MARKERS__ = (points, icon, storageVarKey, callbackEval) => {
    const markers = [];
    for (let i = 0, MAX = points.length; i < MAX; i++) {
      markers.push(
        window.__CREATE_COMMON_MARKER__(
          points[i],
          icon,
          storageVarKey,
          callbackEval
        )
      );
    }
    return markers;
  };

  // 创建点,并添加事件
  window.__CREATE_COMMON_MARKER__ = (
    point,
    icon,
    storageVarKey,
    callbackEval
  ) => {
    const pt = new BMap.Point(point.longitude, point.latitude);
    const marker = new BMap.Marker(pt, { icon });
    marker.targetInfo = point;
    const paramsKey = `${storageVarKey}params`;
    marker.addEventListener('click', (e) => {
      window.postMessageToBaiduMapNVue({
        action: window[paramsKey].action || 'marker-click',
        value: e.target.targetInfo
      });
      callbackEval && eval(`(${callbackEval})(e)`);
    });
    return marker;
  };

  // TODO: 设置聚合点
  window.__SET_MARKER_CLUSTERER__ = (
    points,
    resType,
    storageVarKey,
    callbackEval
  ) => {
    let imageUrl = '';
    let aggregateUrl = '';
    let iconWidth = 48;
    let iconHeight = 48;
    let marginTop = 25;
    let pointIconWidth = 35;
    const { isCustom = false } = resType;
    if (isCustom) {
      const { propMapKey, aggregateUrlProp, imageUrlProp } = resType;
      aggregateUrl = window[propMapKey][aggregateUrlProp];
      imageUrl = window[propMapKey][imageUrlProp];
      iconHeight = 60;
      // marginTop = 15;
      pointIconWidth = 28;
    } else {
      imageUrl = resType.imageUrl;
      aggregateUrl = resType.aggregateUrl;
    }
    let pointIconSizeX = pointIconWidth / 2;
    // 创建点图标对象
    const pointIcon = new BMap.Icon(
      imageUrl,
      new BMap.Size(pointIconWidth, 35),
      {
        anchor: new BMap.Size(pointIconSizeX, 35),
        imageSize: new BMap.Size(pointIconWidth, 35)
      }
    );

    // 创建百度地图点实例集合
    const markers = window.__GENERATE_MARKERS__(
      points,
      pointIcon,
      storageVarKey,
      callbackEval
    );
    const markerIcon = new BMap.Icon(
      aggregateUrl,
      new BMap.Size(iconWidth, iconHeight),
      {
        imageSize: new BMap.Size(iconWidth, iconHeight)
      }
    );
    const markerClusterer = new BMapLib.MarkerClusterer(window.map, {
      markers,
      // 最大聚合级别
      maxZoom: 16,
      gridSize: 120,
      styles: {
        icon: markerIcon
      },
      labelStyles: {
        color: '#333',
        fontSize: '14px',
        border: 'none',
        background: 'none',
        marginTop: `${marginTop}px`,
        width: '48px',
        textAlign: 'center'
      }
    });
    window[storageVarKey].push(markerClusterer);
  };
}());
// 设置聚合点
