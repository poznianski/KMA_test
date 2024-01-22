import { TextProps } from '@/types/types.ts'

const Heading = ({
  text,
  weight = 'font-bold',
  size = 'text-2xl',
  color = 'text-textPrimary',
}: TextProps) => {
  return (
    <h1 className={`text-center leading-9 ${weight} ${size} ${color}`}>
      {text}
    </h1>
  )
}

export default Heading
