import cn from 'classnames'
import { Tooltip } from 'react-tooltip'

interface ButtonProps {
  text: string
  isActive: boolean
  tooltipId?: string
  tooltipContent?: string
}

const Button = ({ text, isActive, tooltipContent, tooltipId }: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          'text-bold h-[3.125rem] w-full rounded-xl bg-primary text-white',
          {
            'cursor-not-allowed opacity-30': !isActive,
          },
        )}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipContent}
        tabIndex={0}
      >
        {text}
      </button>

      {!isActive && <Tooltip id={tooltipId} />}
    </>
  )
}

export default Button
