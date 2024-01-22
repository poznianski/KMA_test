import cn from 'classnames'
import { Tooltip } from 'react-tooltip'

interface ButtonProps {
  text: string
  isActive: boolean
  tooltipId?: string
  tooltipContent?: string
  onClick?: () => void
}

const Button = ({
  text,
  isActive,
  tooltipContent,
  tooltipId,
  onClick,
}: ButtonProps) => {
  const handleClickNext = () => {
    if (isActive && onClick) {
      onClick()
    }
  }

  return (
    <>
      <button
        className={cn(
          'active:bg-primaryActive h-[3.125rem] w-full rounded-xl bg-primary text-lg font-bold text-white',
          {
            'cursor-not-allowed opacity-30': !isActive,
          },
        )}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipContent}
        tabIndex={0}
        onClick={handleClickNext}
      >
        <span className="hover-text-underline">{text}</span>
      </button>

      {!isActive && <Tooltip id={tooltipId} />}
    </>
  )
}

export default Button
