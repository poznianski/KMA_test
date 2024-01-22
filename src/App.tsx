import Header from '@components/Header/Header.tsx'
import BehavioursView from '@components/views/BehavioursView/BehavioursView.tsx'
import ExerciseView from '@components/views/ExerciseView/ExerciseView.tsx'
import GoalView from '@components/views/GoalView/GoalView.tsx'
import MeasureView from '@components/views/MeasureView/MeasureView.tsx'
import ResultView from '@components/views/ResultView/ResultView.tsx'
import { useState } from 'react'

import './styles/main.scss'

const App = () => {
  const initialStep = 1
  const [currentStep, setCurrentStep] = useState(initialStep)

  const handleNextStep = () => {
    setCurrentStep((prevState) => prevState + 1)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <GoalView onContinue={handleNextStep} />
      case 2:
        return <MeasureView onContinue={handleNextStep} />
      case 3:
        return <BehavioursView onContinue={handleNextStep} />
      case 4:
        return <ExerciseView onContinue={handleNextStep} />
      default:
        return <ResultView />
    }
  }

  return (
    <div className="container mx-auto max-w-[23.75rem] p-2">
      <Header />
      {renderStep()}
    </div>
  )
}

export default App
