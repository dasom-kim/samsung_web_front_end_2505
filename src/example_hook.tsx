import { useState, useMemo, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(1)
  // 계산된 데이터: useMemo(실행할 함수, 의존성 배열)
  const double = useMemo(() => count * 2, [count])
  // 데이터 감시: useEffect(실행할 함수, 의존성 배열)
  useEffect(() => {
    console.log(`double은 ${double}입니다.`)
  }, [double])

  return (
    <>
      <h1
        onClick={() => {
          setCount(count + 1)
        }}>
        Count: {count}
      </h1>
      <h2>Double: {double}</h2>
    </>
  )
}
