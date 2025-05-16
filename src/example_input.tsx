import { useState } from 'react'

export default function App() {
  const [title, setTitle] = useState('Hello World')
  const [width, setWidth] = useState(200)

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setTitle(event.target.value)
  // }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      console.log(event.currentTarget.value)
    }
  }

  return (
    <>
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <h1 className={title.length > 12 ? 'active' : ''}>{title}</h1>
      <div
        style={{
          width: `${width}px`
        }}
        className="box"
        onClick={() => {
          setWidth(width + 50)
        }}></div>
    </>
  )
}
