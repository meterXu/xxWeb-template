/******************************************************************
 * Copyright @ 苏州工业园区测绘地理信息有限公司 All rights reserved.
 * 创建人   :dingbh
 * 创建时间 :2020-05-12
 * 说明     :图片压缩服务
 ******************************************************************/

export default  {
  RotateImage(img, direction, canvas) {
    //最小与最大旋转方向，图片旋转4次后回到原方向
    const min_step = 0;
    const max_step = 3;
    if (img == null) return;
    //img的高度和宽度不能在img元素隐藏后获取，否则会出错
    let height = img.height;
    let width = img.width;
    let step = 2;
    if (step == null) {
      step = min_step;
    }
    if (direction == 'right') {
      step++;
      //旋转到原位置，即超过最大值
      step > max_step && (step = min_step);
    } else {
      step--;
      step < min_step && (step = max_step);
    }
    //旋转角度以弧度值为参数
    let degree = (step * 90 * Math.PI) / 180;
    let ctx = canvas.getContext('2d');
    switch (step) {
    case 0:
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0);
      break;
    case 1:
      canvas.width = height;
      canvas.height = width;
      ctx.rotate(degree);
      ctx.drawImage(img, 0, -height);
      break;
    case 2:
      canvas.width = width;
      canvas.height = height;
      ctx.rotate(degree);
      ctx.drawImage(img, -width, -height);
      break;
    case 3:
      canvas.width = height;
      canvas.height = width;
      ctx.rotate(degree);
      ctx.drawImage(img, -width, 0);
      break;
    }
  },
  /**
   * 将文件转为base64
   * @param {文件实体} file
   */
  fileToBase64(file) {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      return reader.result
    }
    reader.onerror = function (error) {
    }
  },
  /**
   * 压缩图片
   * @param {*} img
   * @param {*} Orientation
   * @returns
   */
  CompressImage(img, Orientation = '') {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    //瓦片canvas
    let tCanvas = document.createElement('canvas');
    let tctx = tCanvas.getContext('2d');
    let initSize = img.size;
    let width = img.width;
    let height = img.height;
    //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
    let ratio;
    if ((ratio = (width * height) / 4000000) > 1) {
      ratio = Math.sqrt(ratio);
      width /= ratio;
      height /= ratio;
    } else {
      ratio = 1;
    }
    canvas.width = width;
    canvas.height = height;
    //铺底色
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //如果图片像素大于1000万则使用瓦片绘制
    let count;
    if ((count = (width * height) / 10000000) > 1) {
      count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
      // 计算每块瓦片的宽和高
      let nw = ~~(width / count);
      let nh = ~~(height / count);
      tCanvas.width = nw;
      tCanvas.height = nh;
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          tctx.drawImage(
            img,
            i * nw * ratio,
            j * nh * ratio,
            nw * ratio,
            nh * ratio,
            0,
            0,
            nw,
            nh
          );
          ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
        }
      }
    } else {
      ctx.drawImage(img, 0, 0, width, height);
    }
    //修复ios上传图片的时候 被旋转的问题
    if (Orientation != '' && Orientation != 1) {
      switch (Orientation) {
      case 6: //需要顺时针（向左）90度旋转
        this.RotateImage(img, 'left', canvas);
        break;
      case 8: //需要逆时针（向右）90度旋转
        this.RotateImage(img, 'right', canvas);
        break;
      case 3: //需要180度旋转
        this.RotateImage(img, 'right', canvas); //转两次
        this.RotateImage(img, 'right', canvas);
        break;
      }
    }
    //进行最小压缩
    let ndata = canvas.toDataURL('image/jpeg', 0.2);
    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
    return ndata;

  },
  base64ToBlob(base64Data) {
    let arr = base64Data.split(','),
      fileType = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      l = bstr.length,
      u8Arr = new Uint8Array(l);

    while (l--) {
      u8Arr[l] = bstr.charCodeAt(l);
    }
    return new Blob([u8Arr], {
      type: fileType
    });
  },
  // blob转file
  blobToFile(newBlob, fileName) {
    newBlob.lastModifiedDate = new Date();
    newBlob.name = fileName;
    return newBlob;
  }
}
