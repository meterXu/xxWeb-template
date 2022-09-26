// 一次性引入
import * as turf from '@turf/turf' 
// 控制能否使用 区域拾取 函数
let setGetAreaFacilities = false

/**
 * 拖拽
 */
export function dropDiv(_this) {
  var e = window.event
  _this.addEventListener('click', function(e) { console.log(111, e) })
  var dragging = false
  var boxX, boxY, mouseX, mouseY, offsetX, offsetY
  var box = _this
  // 鼠标按下的动作
  box.onmousedown = down
  // 鼠标的移动动作
  document.onmousemove = move
  // 释放鼠标的动作
  document.onmouseup = up

  // 鼠标按下后的函数,e为事件对象
  function down() {
    dragging = true

    // 获取元素所在的坐标
    boxX = box.offsetLeft
    boxY = box.offsetTop

    // 获取鼠标所在的坐标
    mouseX = parseInt(getMouseXY(e).x)
    mouseY = parseInt(getMouseXY(e).y)

    // 鼠标相对元素左和上边缘的坐标
    offsetX = mouseX - boxX
    offsetY = mouseY - boxY
  }

  // 鼠标移动调用的函数
  function move() {
    if (dragging) {
      // 获取移动后的元素的坐标
      var x = getMouseXY(e).x - offsetX
      var y = getMouseXY(e).y - offsetY

      // 计算可移动位置的大小， 保证元素不会超过可移动范围
      var width = document.documentElement.clientWidth - box.offsetWidth
      var height = document.documentElement.clientHeight - box.offsetHeight

      // min方法保证不会超过右边界，max保证不会超过左边界
      x = Math.min(Math.max(0, x), width)
      y = Math.min(Math.max(0, y), height)

      // 给元素及时定位
      box.style.left = x + 'px'
      box.style.top = y + 'px'
      box.style.cursor = 'move'
      box.style.border = '1px solid red'
    }
  }

  // 释放鼠标的函数
  function up() {
    // 鼠标按下的动作
    box.onmousedown = null
    // 鼠标的移动动作
    document.onmousemove = null
    dragging = false
    box.style.cursor = 'default'
    box.style.border = '1px solid #0073ff'
  }

  // 函数用于获取鼠标的位置
  function getMouseXY() {
    var x = 0, y = 0
    e = e || window.event

    if (e.pageX) {
      x = e.pageX
      y = e.pageY
    } else {
      x = e.clientX + document.body.scrollLeft - document.body.clientLeft
      y = e.clientY + document.body.scrollTop - document.body.clientTop
    }

    return {
      x: x,
      y: y
    }
  }
}

/**
 * 清除标记点
 */

export function clearMeasure() {
  const _targetElement = Array.prototype.slice.call(document.getElementsByClassName('measure-result'))
  if (!_targetElement.length) {
    return
  } else {
    _targetElement.map(item => {
      item.remove()
    })
  }

  var map = window.map
  var source = map.getSource('points')
  var json = {
    'type': 'FeatureCollection',
    'features': []
  }

  if (source) {
    map.getSource('points').setData(json)
    map.getSource('line-move').setData(json)
    map.getSource('line').setData(json)
  }

  var sourceArea = map.getSource('points-area')
  if (sourceArea) {
    map.getSource('points-area').setData(json)
    map.getSource('line-area').setData(json)
  }

  map.doubleClickZoom.disable()
  map.getCanvas().style.cursor = 'default'
}

/**
 * 测量距离
 */

export function measureLength() {
  var isMeasure = true
  var map = window.map
  // 禁止双击缩放
  map.doubleClickZoom.disable()
  map.getCanvas().style.cursor = 'default'

  clearMeasure()

  var jsonPoint = {
    'type': 'FeatureCollection',
    'features': []
  }
  var jsonLine = {
    'type': 'FeatureCollection',
    'features': []
  }
  var points = []
  const ele = document.createElement('div')
  ele.setAttribute('class', 'measure-result')
  const option = {
    element: ele,
    anchor: 'left',
    offset: [8, 0]
  }
  var tooltip = new mapmost.Marker(option)
    .setLngLat([0, 0])
    .addTo(map)
  var markers = []

  var source = map.getSource('points')
  if (source) {
    map.getSource('points').setData(jsonPoint)
    map.getSource('line-move').setData(jsonLine)
    map.getSource('line').setData(jsonLine)
  } else {
    map.addSource('points', {
      type: 'geojson',
      data: jsonPoint
    })
    map.addSource('line', {
      type: 'geojson',
      data: jsonLine
    })
    map.addSource('line-move', {
      type: 'geojson',
      data: jsonLine
    })
    map.addLayer({
      id: 'line-move',
      type: 'line',
      source: 'line-move',
      paint: {
        'line-color': '#ff7b00',
        'line-width': 2,
        'line-opacity': 0.65,
        'line-dasharray': [2, 1]
      }
    })
    map.addLayer({
      id: 'line',
      type: 'line',
      source: 'line',
      paint: {
        'line-color': '#ff7b00',
        'line-width': 2,
        'line-opacity': 0.65,
        'line-dasharray': [2, 1]
      }
    })
    map.addLayer({
      id: 'points',
      type: 'circle',
      source: 'points',
      paint: {
        'circle-color': '#ffffff',
        'circle-radius': 3,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ff0000'
      }
    })
  }
  function addPoint(coords) {
    if (jsonPoint.features.length > 0) {
      var prev = jsonPoint.features[jsonPoint.features.length - 1]
      jsonLine.features.push({
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [prev.geometry.coordinates, coords]
        }
      })
      map.getSource('line').setData(jsonLine)
    }
    jsonPoint.features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: coords
      }
    })
    map.getSource('points').setData(jsonPoint)
  }

  function getLength(coords) {
    var _points = points.concat([coords])
    var line = turf.lineString(_points)
    var len = turf.length(line)
    if (len < 1) {
      len = Math.round(len * 1000) + '米'
    } else {
      len = len.toFixed(2) + '千米'
    }
    return len
  }

  function addMeasureRes(coords) {
    const ele = document.createElement('div')
    ele.setAttribute('class', 'measure-result')
    const option = {
      element: ele,
      anchor: 'left',
      offset: [8, 0]
    }
    ele.innerHTML = points.length === 0 ? '起点' : getLength(coords)
    var marker = new mapmost.Marker(option)
      .setLngLat(coords)
      .addTo(map)
    markers.push(marker)
  }

  map.on('click', function(_e) {
    if (isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat]
      addMeasureRes(coords)
      addPoint(coords)
      points.push(coords)
    }
  })

  map.on('mousemove', function(_e) {
    if (isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat]
      if (jsonPoint.features.length > 0) {
        var prev = jsonPoint.features[jsonPoint.features.length - 1]
        var json = {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [prev.geometry.coordinates, coords]
          }
        }
        map.getSource('line-move').setData(json)
        ele.innerHTML = getLength(coords)

      } else {
        ele.innerHTML = '点击地图开始测量'
      }
      tooltip.setLngLat(coords)
    }
  })

  map.on('dblclick', function(_e) {
    if (isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat]
      addPoint(coords)
      isMeasure = false
      map.getCanvas().style.cursor = ''
      jsonPoint.features = []
      jsonLine.features = []
      tooltip.remove()
      // 添加关闭按钮
      const ele = document.createElement('div')
      ele.setAttribute('class', 'measure-result close')
      const option = {
        element: ele,
        anchor: 'bottom-left',
        offset: [-5, -10]
      }
      ele.innerHTML = '×'
      new mapmost.Marker(option)
        .setLngLat(coords)
        .addTo(map)
      ele.onclick = function(__e) {
        __e.stopPropagation()
        // map.doubleClickZoom.disable()
        clearMeasure()

        // 这里是为了可以在清除当前痕迹后，可以继续绘制
        points = []
        // 禁止双击缩放
        // map.getCanvas().style.cursor = 'default'
        isMeasure = true
      }
    }
  })

}

/**
 * 测量面积
 */
export function measureArea() {
  var isMeasure = true
  var map = window.map
  // 禁止双击缩放
  map.doubleClickZoom.disable()
  map.getCanvas().style.cursor = 'default'

  var jsonPoint = {
    'type': 'FeatureCollection',
    'features': []
  }
  var jsonLine = {
    'type': 'FeatureCollection',
    'features': []
  }
  var points = []
  var ele = document.createElement('div')
  ele.setAttribute('class', 'measure-result')
  const option = {
    element: ele,
    anchor: 'left',
    offset: [8, 0]
  }
  var tooltip = new mapmost.Marker(option)
    .setLngLat([0, 0])
    .addTo(map)
  var source = map.getSource('points-area')
  if (source) {
    map.getSource('points-area').setData(jsonPoint)
    map.getSource('line-area').setData(jsonLine)
  } else {
    map.addSource('points-area', {
      type: 'geojson',
      data: jsonPoint
    })
    map.addSource('line-area', {
      type: 'geojson',
      data: jsonLine
    })
    map.addLayer({
      id: 'line-area',
      type: 'fill',
      source: 'line-area',
      paint: {
        'fill-color': '#ff0000',
        'fill-opacity': 0.1
      }
    })
    map.addLayer({
      id: 'line-area-stroke',
      type: 'line',
      source: 'line-area',
      paint: {
        'line-color': '#ff7b00',
        'line-width': 2,
        'line-opacity': 0.65,
        'line-dasharray': [2, 1]
      }
    })
    map.addLayer({
      id: 'points-area',
      type: 'circle',
      source: 'points-area',
      paint: {
        'circle-color': '#ffffff',
        'circle-radius': 3,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ff0000'
      }
    })
  }

  function getArea(coords) {
    var pts = points.concat([coords])
    pts = pts.concat([points[0]])
    var polygon = turf.polygon([pts])
    var area = turf.area(polygon)
    if (area < 1000) {
      area = Math.round(area) + '平方米'
    } else {
      area = (area / 1000000).toFixed(2) + '平方千米'
    }

    return area
  }
  function addPoint(coords) {
    jsonPoint.features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: coords
      }
    })
    map.getSource('points-area').setData(jsonPoint)
  }
  
  map.on('click', function(_e) {
    if (isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat]
      points.push(coords)
      addPoint(coords)
    }
  })

  map.on('dblclick', function(_e) {
    if (isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat]
      points.push(coords)
      isMeasure = false
      ele.innerHTML = getArea(coords)
      tooltip.setLngLat(coords)
      // 添加关闭按钮
      var _ele = document.createElement('div')
      _ele.setAttribute('class', 'measure-result close')
      var option = {
        element: _ele,
        anchor: 'bottom-left',
        offset: [-5, -10]
      }
      _ele.innerHTML = '×'
      new mapmost.Marker(option)
        .setLngLat(coords)
        .addTo(map)
      _ele.onclick = function(__e) {
        __e.stopPropagation()
        // map.doubleClickZoom.enable()
        // 这里是为了可以在清除当前痕迹后，可以继续绘制
        clearMeasure()
        measureArea()

      }
    }
  })

  map.on('mousemove', function(_e) {
    if (isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat]
      var len = jsonPoint.features.length
      if (len === 0) {
        ele.innerHTML = '点击地图开始测量'
      } else if (len === 1) {
        ele.innerHTML = '点击地图继续绘制'
      } else {
        var pts = points.concat([coords])
        pts = pts.concat([points[0]])
        var json = {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [pts]
          }
        }
        map.getSource('line-area').setData(json)
        ele.innerHTML = getArea(coords)
      }
      tooltip.setLngLat(coords)
    }
  })
}

/**
 * 区域拾取(查询选取区域内的设施)
 */
export function getAreaFacilities() {
  var map = window.map
  // 定义为长度为5的数组
  let coordinates = new Array(5)
  // 是否按住鼠标移动
  let mouserMove = false
  // 
  setGetAreaFacilities = true
  // 添加绘制图层
  function addDrawLayer() {
    if (map.getLayer('draw')) {
      return
    }
    

    const geoJson = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Polygon',
            'coordinates': []
          }
        }
      ]
    }
    map.addSource('draw', {
      type: 'geojson',
      data: geoJson
    })
    map.addLayer({
      id: 'draw',
      type: 'fill',
      source: 'draw',
      layout: {},
      paint: {
        'fill-color': '#ff7b00',
        'fill-opacity': 0.3
      }
    })
    map.addLayer({
      id: 'draw_line',
      type: 'line',
      source: 'draw',
      layout: {},
      paint: {
        'line-color': '#ff7b00',
        'line-width': 2,
        'line-opacity': 0.65,
        'line-dasharray': [2, 1]
      }
    })
  }
  // 更新绘制图层
  function updateDrawLayer() {
    map.getSource('draw').setData({
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'properties': { },
        'geometry': {
          'type': 'Polygon',
          'coordinates': [coordinates]
        }
      }]
    })
  }
  map.on('mousedown', (e) => {
    map.dragPan.disable() // 禁止地图拖动
    coordinates = new Array(5)
    // 点击地图开始绘制一个空白图层，并记录点击位置
    addDrawLayer()
    const point = e.lngLat
    coordinates[0] = [point.lng, point.lat] // 初始点
    coordinates[4] = [point.lng, point.lat] // 闭合
    mouserMove = true // 鼠标按下

    
  })
  map.on('mouseup', (e) => {
    mouserMove = false // 鼠标抬
    // 获取当前矩形四个点坐标
    map.dragPan.enable() // 允许地图拖动
    console.log('选取坐标点 =', coordinates)
  })
  map.on('mousemove', (e) => {
    if (mouserMove && setGetAreaFacilities) {
      // 根据矩形绘制路径，鼠标所在点应为第三个点
      const point = e.lngLat
      const firstPoint = coordinates[0]
      coordinates[2] = [point.lng, point.lat]
      // 通过第一个点和第三个点得出第二个点和第四个点
      coordinates[1] = [point.lng, firstPoint[1]] // 取第三个点的经度和第一个点的纬度
      coordinates[3] = [firstPoint[0], point.lat] // 取第一个点的经度和第三个点的纬度
      updateDrawLayer()
    }
  })

  return coordinates
  // end
}

/**
 * 清除 拾取的区域
 */
export function clearArea() {
  var map = window.map
  if (map.getLayer('draw')) {
    map.removeLayer('draw')
  }

  if (map.getLayer('draw_line')) {
    map.removeLayer('draw_line')
  }

  if (map.getSource('draw')) {
    map.removeSource('draw')
  }

  setGetAreaFacilities = false
}

