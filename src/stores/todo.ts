import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export type Todos = Todo[] // 할 일 목록
export interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export const useTodoStore = create(
  combine(
    {
      title: '',
      todos: [] as Todos
    },
    (set, get) => {
      function setTitle(title: string) {
        set({ title })
      }

      async function fetchTodos() {
        const todos = await requestTodos({ method: 'GET' })
        set({ todos })
      }

      async function createTodo() {
        const { title } = get()
        if (!title.trim()) return
        await requestTodos({
          method: 'POST',
          data: {
            title
          }
        })
        await fetchTodos()
      }

      async function updateTodo({ id, title, done }: Todo) {
        if (!title.trim()) return
        await requestTodos({
          todoId: id,
          method: 'PUT',
          data: {
            title,
            done
          }
        })
        await fetchTodos()
      }

      async function deleteTodo({ id }: Todo) {
        await requestTodos({
          todoId: id,
          method: 'DELETE'
        })
        await fetchTodos()
      }

      return {
        setTitle,
        fetchTodos,
        createTodo,
        updateTodo,
        deleteTodo
      }
    }
  )
)

async function requestTodos({
  todoId = '',
  method,
  data
}: {
  todoId?: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: unknown
}) {
  const { data: response } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`,
    method,
    headers: {
      'content-type': 'application/json',
      apikey: 'KDT8_bcAWVpD8',
      username: 'KDT8_ParkYoungWoong'
    },
    data
  })

  return response
}
