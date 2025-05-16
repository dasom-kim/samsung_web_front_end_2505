import { useNavigate } from 'react-router'

export default function Modal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center">
      <div
        className="absolute top-0 left-0 h-full w-full bg-black/70"
        onClick={() => navigate(-1)}
      />
      <div className="relative max-h-[80%] min-h-[100px] w-[600px] overflow-y-auto rounded-md bg-white">
        {children}
      </div>
    </div>
  )
}
