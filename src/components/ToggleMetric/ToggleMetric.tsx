import { IMPERIAL, METRIC } from '@/constants.ts'
import cn from 'classnames'
import { useState } from 'react'

const ToggleMetric = () => {
  const [selectedType, setSelectedType] = useState<string>(IMPERIAL)

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
  }

  return (
    <div className="border border-primary h-[32px] rounded-[10px] flex">
      <input
        type="radio"
        name="unit"
        id={IMPERIAL}
        value={IMPERIAL}
        onChange={() => handleTypeChange(IMPERIAL)}
        checked={selectedType === IMPERIAL}
        className="hidden"
        aria-checked={selectedType === IMPERIAL}
      />
      <input
        type="radio"
        name="unit"
        id={METRIC}
        value={METRIC}
        onChange={() => handleTypeChange(METRIC)}
        checked={selectedType === METRIC}
        className="hidden"
        aria-checked={selectedType === METRIC}
      />

      <label
        htmlFor={IMPERIAL}
        tabIndex={0}
        className={cn(
          'w-1/2 flex justify-center items-center font-extrabold text-xs text-primary cursor-pointer',
          {
            'bg-primaryLight': selectedType === IMPERIAL,
          },
        )}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            handleTypeChange(IMPERIAL)
          }
        }}
      >
        IMPERIAL
      </label>

      <label
        htmlFor={METRIC}
        tabIndex={0}
        className={cn(
          'w-1/2 flex justify-center items-center font-extrabold text-xs text-primary cursor-pointer',
          {
            'bg-primaryLight': selectedType === METRIC,
          },
        )}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            handleTypeChange(METRIC)
          }
        }}
      >
        METRIC
      </label>
    </div>
  )
}

export default ToggleMetric
