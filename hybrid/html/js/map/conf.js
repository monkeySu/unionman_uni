/*
 * @Author: jiarong.deng
 * @Date: 2021-01-17 09:34:33
 * @LastEditors: zequan.wu
 * @LastEditTime: 2021-05-28 16:16:14
 * @Description: file content
 */
;(function () {
  // polygn颜色配置
  const createPolygonOption = (color) => {
    return {
      // 边线颜色
      strokeColor: color,

      // 边线宽度
      strokeWeight: 2,

      // 边线透明度
      strokeOpacity: 1,

      // 是否在调用map.clearOverlays清除此覆盖物，默认为true
      enableMassClear: true,

      // 填充颜色
      fillColor: color,

      // 背景填充透明度
      fillOpacity: 0.05
    }
  }

  window.__POLYGON_OPTIONS__ = [
    createPolygonOption('#847e19')
    // createPolygonOption('#510990'),
    // createPolygonOption('#886724'),
    // createPolygonOption('#98056c'),
    // createPolygonOption('#1e3a89'),
    // createPolygonOption('#048990'),
    // createPolygonOption('#506412'),
    // createPolygonOption('#4d0d1b')
  ]

  // 地图label配置
  window.__LABEL_TEXT_STYLE__ = {
    maxWidth: '90px',
    height: '14px',
    border: '1px solid #ffffff',
    borderRadius: '5px',
    padding: '0px 10px',
    color: '#fff',
    fontSize: '12px',
    letterSpacing: '1px',
    lineHeight: '14px',
    backgroundColor: '#0b717f',
    fontFamily: '微软雅黑',
    transform: 'translateX(-50%)',
    cursor: 'pointer'
  }
})()
