import cn from 'classnames'

interface ButtonProps {
  text: string
  isActive: boolean
}

const Button = ({ text, isActive }: ButtonProps) => {
  return (
    <button
      className={cn(
        'text-white w-full rounded-xl bg-primary h-[3.125rem] text-bold',
        {
          'opacity-30': !isActive,
        },
      )}
    >
      {text}
    </button>
  )
}

export default Button
