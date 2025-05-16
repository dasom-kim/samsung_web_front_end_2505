import { useState } from 'react'
import TextField from './components/TextField'
import Button from './components/Button'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function logIn() {
    console.log(email, password)
  }

  return (
    <>
      <TextField
        label="이메일"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        deleteValue={() => setEmail('')}
      />
      <TextField
        label="비밀번호"
        hint="대소문자를 하나 이상 포함해야 합니다."
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            console.log(e.currentTarget.value)
          }
        }}
        deleteValue={() => setPassword('')}
      />
      <Button
        type="submit"
        onClick={logIn}
        onScroll={() => {}}>
        로그인
      </Button>
    </>
  )
}
