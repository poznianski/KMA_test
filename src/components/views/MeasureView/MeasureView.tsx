import { IMPERIAL } from '@/constants.ts'
import { MeasurementType } from '@/types/types.ts'
import Input from '@components/Input/Input.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'
import Heading from '@components/TextHeader/Heading.tsx'
import ToggleMetric from '@components/ToggleMetric/ToggleMetric.tsx'
import { useState } from 'react'

const MeasureView = () => {
  const [selectedType, setSelectedType] = useState<MeasurementType>(IMPERIAL)

  const handleTypeChange = (type: MeasurementType) => {
    setSelectedType(type)
  }

  return (
    <section>
      <Heading text="Measure Yorself" />

      <Paragraph
        text="What are your height and body weight?"
        color="text-textSecondary"
        className="mb-3.75 tracking-[0.25px]"
      />

      <ToggleMetric
        type={selectedType}
        handleChange={handleTypeChange}
      />

      <Input
        placeholder="Height"
        type={selectedType}
      />

      <Input
        placeholder="Current Weight"
        type={selectedType}
      />
    </section>
  )
}

export default MeasureView
