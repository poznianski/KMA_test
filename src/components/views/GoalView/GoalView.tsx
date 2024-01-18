import Paragraph from '@components/Paragraph/Paragraph.tsx'
import Heading from '@components/TextHeader/Heading.tsx'

const GoalView = () => {
  const goalCards = [
    { src: 'src/assets/images/goal-4.svg', alt: 'Lose Weight' },
    { src: 'src/assets/images/goal-1.svg', alt: 'Gain Muscle' },
    { src: 'src/assets/images/goal-2.svg', alt: 'Healthy Habits' },
    { src: 'src/assets/images/goal-3.svg', alt: 'Healthy Habits' },
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
        className="tracking-[0.25px] mb-3.75"
      />

      <Paragraph
        text="What are your goals?"
        weight="font-bold"
        color="text-textPrimary"
        className="tracking-[0.2px] mb-3.75"
      />

      <div className="grid grid-cols-2 gap-3.75">
        {goalCards.map((card, index) => (
          <img
            src={card.src}
            alt={card.alt}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default GoalView
