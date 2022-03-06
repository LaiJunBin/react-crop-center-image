# React Crop Center Image

[English](https://github.com/LaiJunBin/react-crop-center-image#react-crop-center-image)｜繁體中文

自動把圖片裁切到指定範圍內，會等比例將圖片縮放至符合主要軸線，次要軸若超出則刪除。

# 安裝
```
$ npm i react-crop-center-image
```

# 引入
```js
import CropImage from 'react-crop-center-image'
```

# 上傳圖片範例
```jsx
import CropImage from 'react-crop-center-image'
import React, { useState } from 'react'

function Example() {
  const [src, setSrc] = useState()
  const upload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const fr = new FileReader()
      fr.onload = (e) => {
        setSrc(e.target.result)
      }
      fr.readAsDataURL(file)
    }
  }

  return (
    <div>
      <input type="file" onChange={upload} />
      <CropImage
        axis="y"
        width={350}
        height={500}
        src={src}
        className="border"
      />
    </div>
  )
}

export default Example
```

`CropImage` 組件可用的屬性：
屬性           | 描述  |
--------------|:-----:|
width    | 寬度 |
height    | 高度 |
src    | 圖片來源 |
axis    | 設定主要軸，圖片會等比例縮放至與主要軸貼齊 |
ref     | 與 React ref 相同，可以取得 canvas ref |
autofill    | 當次要軸有剩餘的空間是否自動填入白色 |
{other}    | 其他參數會自動帶入props，例如 className |