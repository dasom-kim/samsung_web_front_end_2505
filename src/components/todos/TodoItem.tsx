import { useState, useEffect, useRef } from 'react'
import { useTodoStore, type Todo } from '@/stores/todo'
import Button from '@/components/Button'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.focus()
    }
  }, [isEditMode])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return
    if (e.key === 'Enter') {
      updateTodo({ ...todo, title })
      setIsEditMode(false)
    }
    if (e.key === 'Escape') {
      setIsEditMode(false)
      setTitle(todo.title)
    }
  }

  function handleCancel() {
    setIsEditMode(false)
    setTitle(todo.title)
  }

  return (
    <div className="flex gap-[10px]">
      {isEditMode ? (
        <>
          <input
            ref={inputRef}
            className="rounded-md border-1 border-gray-400"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            onClick={() => {
              updateTodo({ ...todo, title })
              handleCancel()
            }}>
            저장
          </Button>
          <Button
            color={'secondary'}
            onClick={handleCancel}>
            취소
          </Button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <Button onClick={() => setIsEditMode(true)}>수정</Button>
          <Button
            color={'danger'}
            onClick={() => deleteTodo(todo)}>
            삭제
          </Button>
        </>
      )}
    </div>
  )
}
