import { HEIGHT, IMPERIAL, METRIC, WEIGHT } from '@/constants.ts'
import React from 'react'

interface IInput {
  placeholder: string
  type: typeof IMPERIAL | typeof METRIC
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, type, value, onChange }: IInput) => {
  const renderEnding = () => {
    const placeholderLower = placeholder.toLowerCase()

    if (type === METRIC) {
      if (placeholderLower.includes(HEIGHT)) {
        return 'cm'
      } else if (placeholderLower.includes(WEIGHT)) {
        return 'kg'
      }
    } else if (type === IMPERIAL) {
      if (placeholderLower.includes(HEIGHT)) {
        return 'ft'
      } else if (placeholderLower.includes(WEIGHT)) {
        return 'lb'
      }
    }
  }

  return (
    <input
      type="number"
      className="mb-2.5 h-[4rem] w-full rounded-[0.625rem] border border-separator pl-3.75 outline-0"
      placeholder={`${placeholder} (${renderEnding()})`}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
