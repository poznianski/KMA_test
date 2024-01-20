import Button from '@components/Button/Button.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'
import Heading from '@components/TextHeader/Heading.tsx'
import cn from 'classnames'
import { useState } from 'react'

const GoalView = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const isActive = selectedCards.length > 0

  const goalCards = [
    { src: 'src/assets/images/goal-4.svg', alt: 'Lose Weight' },
    { src: 'src/assets/images/goal-1.svg', alt: 'Gain Muscle' },
    { src: 'src/assets/images/goal-2.svg', alt: 'Healthy Habits' },
    { src: 'src/assets/images/goal-3.svg', alt: 'Healthy Habits' },
  ]

  const handleSelect = (index: number) => {
    setSelectedCards((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index],
    )
  }

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
        className="tracking-[0.25px] mb-3.75"
      />

      <Paragraph
        text="What are your goals?"
        weight="font-bold"
        color="text-textPrimary"
        className="tracking-[0.2px] mb-3.75"
      />

      <div className="grid grid-cols-2 gap-3.75 mb-28">
        {goalCards.map((card, index) => (
          <div
            key={index}
            className={cn('cursor-pointer transition-all duration-300', {
              'scale-105': selectedCards.includes(index),
            })}
            onClick={() => handleSelect(index)}
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
