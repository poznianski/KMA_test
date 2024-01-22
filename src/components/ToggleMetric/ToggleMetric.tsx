import { IMPERIAL, METRIC } from '@/constants.ts'
import { MeasurementType } from '@/types/types.ts'
import cn from 'classnames'

interface IToggleMetric {
  type: typeof IMPERIAL | typeof METRIC
  handleChange: (type: MeasurementType) => void
}

const ToggleMetric = ({ type, handleChange }: IToggleMetric) => {
  return (
    <div className="mb-2.5 flex h-[2rem] rounded-[0.625rem] border border-primary">
      <input
        type="radio"
        name="unit"
        id={IMPERIAL}
        value={IMPERIAL}
        onChange={() => handleChange(IMPERIAL)}
        checked={type === IMPERIAL}
        className="hidden"
      />
      <input
        type="radio"
        name="unit"
        id={METRIC}
        value={METRIC}
        onChange={() => handleChange(METRIC)}
        checked={type === METRIC}
        className="hidden"
      />

      <label
        htmlFor={IMPERIAL}
        tabIndex={0}
        className={cn(
          'label-hover-underline flex w-1/2 cursor-pointer items-center justify-center text-xs font-extrabold uppercase text-primary',
          {
            'bg-primaryLight': type === IMPERIAL,
          },
        )}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            handleChange(IMPERIAL)
          }
        }}
        aria-checked={type === IMPERIAL}
      >
        <span>imperial</span>
      </label>

      <label
        htmlFor={METRIC}
        tabIndex={0}
        className={cn(
          'label-hover-underline flex w-1/2 cursor-pointer items-center justify-center text-xs font-extrabold uppercase text-primary',
          {
            'bg-primaryLight': type === METRIC,
          },
        )}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            handleChange(METRIC)
          }
        }}
        aria-checked={type === METRIC}
      >
        <span>metric</span>
      </label>
    </div>
  )
}

export default ToggleMetric
