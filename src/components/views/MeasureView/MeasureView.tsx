import Paragraph from '@components/Paragraph/Paragraph.tsx'
import Heading from '@components/TextHeader/Heading.tsx'
import ToggleMetric from '@components/ToggleMetric/ToggleMetric.tsx'

const MeasureView = () => {
  return (
    <section>
      <Heading text="Measure Yorself" />

      <Paragraph
        text="What are your height and body weight?"
        color="text-textSecondary"
        className="tracking-[0.25px] mb-3.75"
      />

      <ToggleMetric />
    </section>
  )
}

export default MeasureView
