import Heading from '@components/Heading/Heading.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'

const ExerciseView = () => {
  const exerciseCards = [
    { text: 'Hardly at all' },
    { text: 'Fitness 1-2 \n' + 'times a week' },
    { text: 'Fitness 3-5 \n' + 'times a week' },
    { text: 'Fitness 5-7 \n' + 'times a week' },
  ]

  return (
    <section>
      <Heading text="Physical exercise" />

      <Paragraph
        text="Physical exercise means a lot for a woman who
wants to lose kilos and works at the office"
        color="text-textSecondary"
        className="mb-3.75 tracking-[0.25px]"
      />

      <Paragraph
        text="How active are you during the day?"
        weight="font-bold"
        color="text-textPrimary"
        className="mb-3.75 tracking-[0.2px]"
      />

      <div className="flex items-center justify-center gap-3.75">
        <img
          src="src/assets/images/other/active-girl.svg"
          alt=""
        />

        <div className="flex flex-col gap-3.75">
          {exerciseCards.map((card, index) => (
            <div
              key={index}
              className="flex h-[3.75rem] cursor-pointer items-center justify-start rounded-[0.625rem] border border-separator p-3.75 pr-8"
            >
              <span className="text-base font-medium leading-[1.375rem]">
                {card.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExerciseView
