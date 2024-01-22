import { useSelectedCards } from '@/hooks/useSelectedCards.tsx'
import Button from '@components/Button/Button.tsx'
import Heading from '@components/Heading/Heading.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'
import cn from 'classnames'

const GoalView = () => {
  const { selectedCards, toggleCardSelection } = useSelectedCards<number>()
  const isActive = selectedCards.length > 0

  const goalCards = [
    { src: 'src/assets/images/goals/goal-4.svg', alt: 'Lose Weight' },
    { src: 'src/assets/images/goals/goal-1.svg', alt: 'Gain Muscle' },
    { src: 'src/assets/images/goals/goal-2.svg', alt: 'Healthy Habits' },
    { src: 'src/assets/images/goals/goal-3.svg', alt: 'Healthy Habits' },
  ]

  return (
    <section>
      <Heading text="The Goal" />

      <Paragraph
        text="Focus on the health benefits you need."
        color="text-textSecondary"
        className="tracking-[0.25px]"
      />

      <Paragraph
        text="Balanced nutrition will let you achieve them"
        color="text-textSecondary"
        className="mb-3.75 leading-6 tracking-[0.25px]"
      />

      <Paragraph
        text="What are your goals?"
        weight="font-bold"
        color="text-textPrimary"
        className="mb-3.75 tracking-[0.2px]"
      />

      <div className="mb-28 grid grid-cols-2 gap-3.75">
        {goalCards.map((card, index) => (
          <div
            key={index}
            className={cn('cursor-pointer transition-all duration-300', {
              'scale-105': selectedCards.includes(index),
            })}
            onClick={() => toggleCardSelection(index)}
          >
            <img
              src={card.src}
              alt={card.alt}
            />
          </div>
        ))}
      </div>

      <Button
        text="Continue"
        isActive={isActive}
      />
    </section>
  )
}

export default GoalView
