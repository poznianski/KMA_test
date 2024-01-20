import { IMPERIAL, METRIC } from '@/constants.ts'
import cn from 'classnames'
import { useState } from 'react'

const ToggleMetric = () => {
  return (
    <div className="mb-2.5 flex h-[2rem] rounded-[0.625rem] border border-primary">
      <input
        type="radio"
        name="unit"
        id={IMPERIAL}
        value={IMPERIAL}
        onChange={() => handleTypeChange(IMPERIAL)}
        checked={selectedType === IMPERIAL}
        className="hidden"
      />
      <input
        type="radio"
        name="unit"
        id={METRIC}
        value={METRIC}
        onChange={() => handleTypeChange(METRIC)}
        checked={selectedType === METRIC}
        className="hidden"
      />

      <label
        htmlFor={IMPERIAL}
        tabIndex={0}
        className={cn(
          'flex w-1/2 cursor-pointer items-center justify-center text-xs font-extrabold uppercase text-primary',
          {
            'bg-primaryLight': selectedType === IMPERIAL,
          },
        )}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            handleTypeChange(IMPERIAL)
          }
        }}
        aria-checked={selectedType === IMPERIAL}
      >
        imperial
      </label>

      <label
        htmlFor={METRIC}
        tabIndex={0}
        className={cn(
          'flex w-1/2 cursor-pointer items-center justify-center text-xs font-extrabold uppercase text-primary',
          {
            'bg-primaryLight': selectedType === METRIC,
          },
        )}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            handleTypeChange(METRIC)
          }
        }}
        aria-checked={selectedType === METRIC}
      >
        metric
      </label>
    </div>
  )
}

export default ToggleMetric
