import { IMPERIAL } from '@/constants.ts'
import { MeasurementType, ViewProps } from '@/types/types.ts'
import Button from '@components/Button/Button.tsx'
import Heading from '@components/Heading/Heading.tsx'
import Input from '@components/Input/Input.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'
import ToggleMetric from '@components/ToggleMetric/ToggleMetric.tsx'
import React, { useState } from 'react'

const MeasureView = ({ onContinue }: ViewProps) => {
  const [selectedType, setSelectedType] = useState<MeasurementType>(IMPERIAL)
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [isHeightValid, setIsHeightValid] = useState(true)
  const [isWeightValid, setIsWeightValid] = useState(true)

  const handleTypeChange = (type: MeasurementType) => {
    setSelectedType(type)
  }

  const validateInput = (value: string) => {
    return value === '' || /^\d*\.?\d*$/.test(value)
  }
  const allowNext =
    height !== '' && weight !== '' && isHeightValid && isWeightValid

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setHeight(value)
    setIsHeightValid(validateInput(value))
  }

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setWeight(value)
    setIsWeightValid(validateInput(value))
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
        onChange={handleHeightChange}
        data-tooltip-id="height"
        data-tooltip-content="only numbers please :)"
      />
      {!isHeightValid && <p className="text-red-800">Only numbers allowed</p>}

      <div className="mb-28">
        <Input
          placeholder="Current Weight"
          type={selectedType}
          value={weight}
          onChange={handleWeightChange}
        />
        {!isWeightValid && <p className="text-red-800">Only numbers allowed</p>}
      </div>

      <Button
        text="Continue"
        isActive={allowNext}
        tooltipId="continue"
        tooltipContent="You forgot to enter values :)"
        onClick={onContinue}
      />
    </section>
  )
}

export default MeasureView
