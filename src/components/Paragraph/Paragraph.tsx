import { TextProps } from '@/types/types.ts'

const Paragraph = ({
  text,
  weight = 'font-normal',
  size = 'text-sm',
  color = 'text-textPrimary',
  className,
}: TextProps) => {
  return (
    <p
      className={`text-center leading-6 ${weight} ${size} ${color} ${className}`}
    >
      {text}
    </p>
  )
}

export default Paragraph
