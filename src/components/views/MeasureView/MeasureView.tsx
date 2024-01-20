import { IMPERIAL } from '@/constants.ts'
import Input from '@components/Input/Input.tsx'
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
        className="mb-3.75 tracking-[0.25px]"
      />

      <ToggleMetric />

      <Input
        placeholder="Height"
        type={IMPERIAL}
      />

      <Input
        placeholder="Current Weight"
        type={IMPERIAL}
      />
    </section>
  )
}

export default MeasureView
