import React, { forwardRef, useEffect, useRef, useState } from 'react'

function CropImage (props, ref) {
  const { width, height, src, axis = 'x', autofill = true, onDrawEnd = (ctx) => {}, ...rest } = props
  if (axis !== 'x' && axis !== 'y') {
    throw new Error("The axis must be 'x' or 'y'!")
  }

  if (!ref) {
    ref = useRef()
  }

  const [image, setImage] = useState(null)

  const render = () => {
    const ctx = ref.current.getContext('2d')

    if (autofill) {
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, width, height)
    }

    let params = []
    if (axis === 'x') {
      const scale = image.width / width
      params = [
        0,
        image.height / 2 - (height * scale) / 2,
        image.width,
        height * scale,
        0,
        0,
        width,
        height
      ]
    } else {
      const scale = image.height / height
      params = [
        image.width / 2 - (width * scale) / 2,
        0,
        width * scale,
        image.height,
        0,
        0,
        width,
        height
      ]
    }
    ctx.drawImage(image, ...params)
    onDrawEnd(ctx)
  }

  useEffect(() => {
    if (ref.current && image) {
      if (!src) {
        return
      }

      if (image.src === src) {
        return render()
      }

      const img = new Image()
      img.src = src
      img.onload = () => setImage(img)
    }
  }, [ref, width, height, src, axis, autofill])

  useEffect(() => {
    if (image) {
      render()
    }
  }, [image])

  return <canvas ref={ref} width={width} height={height} {...rest}></canvas>
}

export default forwardRef(CropImage)
