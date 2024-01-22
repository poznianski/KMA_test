import { IMPERIAL } from '@/constants.ts'
import { MeasurementType } from '@/types/types.ts'
import Button from '@components/Button/Button.tsx'
import Heading from '@components/Heading/Heading.tsx'
import Input from '@components/Input/Input.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'
import ToggleMetric from '@components/ToggleMetric/ToggleMetric.tsx'
import { useState } from 'react'

const MeasureView = () => {
  const [selectedType, setSelectedType] = useState<MeasurementType>(IMPERIAL)
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const allowNext = height !== '' && weight !== ''

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
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <Input
        placeholder="Current Weight"
        type={selectedType}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <Button
        text="Continue"
        isActive={allowNext}
        tooltipId="continue"
        tooltipContent="You forgot to enter values :)"
      />
    </section>
  )
}

export default MeasureView
