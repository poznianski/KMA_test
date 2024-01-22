import { useSelectedCards } from '@/hooks/useSelectedCards.tsx'
import { ViewProps } from '@/types/types.ts'
import Button from '@components/Button/Button.tsx'
import Heading from '@components/Heading/Heading.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'
import { behaviourCards } from '@components/views/BehavioursView/behaviorCards.config.ts'
import cn from 'classnames'

const BehavioursView = ({ onContinue }: ViewProps) => {
  const { selectedCards, toggleCardSelection } = useSelectedCards<number>()
  const allowNext = selectedCards.length > 0

  return (
    <section>
      <Heading text="Destructive behaviors" />

      <Paragraph
        text="We all have them! Which are yours?"
        color="text-textSecondary"
        className="mb-3.75 tracking-[0.25px]"
      />

      <div className="mb-28 grid grid-cols-2 gap-3.75">
        {behaviourCards.map((card, index) => (
          <div
            key={index}
            className={cn(
              'flex h-[3.75rem] cursor-pointer items-center justify-center rounded-[0.625rem] border border-separator p-3.75 pr-8',
              {
                'scale-105': selectedCards.includes(index),
              },
            )}
            onClick={() => toggleCardSelection(index)}
          >
            <img
              src={card.src}
              alt={card.text}
              className="mr-2.5"
            />

            <span className="spacing text-xs font-normal tracking-[0.3px]">
              {card.text}
            </span>
          </div>
        ))}
      </div>

      <Button
        text="Continue"
        isActive={allowNext}
        tooltipId="continue"
        tooltipContent="Please select at least one!"
        onClick={onContinue}
      />
    </section>
  )
}

export default BehavioursView
