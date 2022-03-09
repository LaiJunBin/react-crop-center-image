# React Crop Center Image

English｜[繁體中文](https://github.com/LaiJunBin/react-crop-center-image/blob/main/README-zh-tw.md#react-crop-center-image)

Automatically crop the image to a specific range, scale to fit the main axis, and delete the secondary axis if overflow.

# Install
```
$ npm i react-crop-center-image
```

# Import
```js
import CropImage from 'react-crop-center-image'
```

# Upload image example
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

`CropImage` component available properties:
property           | description  |
--------------|:-----:|
width    | Width |
height    | Height |
src    | Image source |
axis    | Set the main axis, the image will be scaled to fit the main axis. |
ref     | Same as React ref, could get the canvas ref. |
autofill    | When secondary axis has remaining space, whether fill white background. |
{other}    | Other properties will automatically forward, such as className. |

`CropImage` component available events:
event           | description  |
--------------|:-----:|
onDrawEnd(ctx)    | callback after drawing the image |