import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Image({
  src,
  width,
  height
}: {
  src: string
  width: number
  height: number
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    init()
  }, [])

  async function init() {
    try {
      await loadImage()
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function loadImage() {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.src = src
      img.addEventListener('load', () => resolve(img)) // 이행
      img.addEventListener('error', () => reject(new Error('이미지 로드 실패')))
    })
  }

  return (
    <div
      style={{
        width,
        height
      }}
      className="relative bg-gray-100">
      {isLoading ? <Loader /> : message ? <p>{message}</p> : <img src={src} />}
    </div>
  )
}
