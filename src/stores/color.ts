import { create } from 'zustand'

export const useColorStore = create<{
  color: string
  setColor: (color: string) => void
}>(set => {
  return {
    color: 'red',
    setColor: (color: string) => {
      set({
        color
      })
    }
  }
})
