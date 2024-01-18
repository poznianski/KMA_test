import cn from 'classnames'

interface ButtonProps {
  text: string
  active: boolean
}

const Button = ({ text, active }: ButtonProps) => {
  return (
    <button
      className={cn(
        'text-white w-full rounded-xl bg-primary h-[3.125rem] text-bold',
        {
          'opacity-30': !active,
        },
      )}
    >
      {text}
    </button>
  )
}

export default Button
