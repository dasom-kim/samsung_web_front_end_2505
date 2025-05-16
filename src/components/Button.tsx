import Loader from '@/components/Loader'

export default function Button({
  children,
  color = 'primary',
  loading,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'danger' | 'success'
  loading?: boolean
}) {
  const buttonColor = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    danger: 'bg-red-500',
    success: 'bg-green-500'
  }
  return (
    <button
      {...restProps}
      className={`relative block h-[30px] min-w-[40px] rounded-md px-2 text-white ${buttonColor[color]}`}>
      {loading ? (
        <Loader
          color="white"
          size={16}
          weight={2}
        />
      ) : (
        children
      )}
    </button>
  )
}
