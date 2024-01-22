import Header from '@components/Header/Header.tsx'
import BehavioursView from '@components/views/BehavioursView/BehavioursView.tsx'
import ExerciseView from '@components/views/ExerciseView/ExerciseView.tsx'
import GoalView from '@components/views/GoalView/GoalView.tsx'
import MeasureView from '@components/views/MeasureView/MeasureView.tsx'

import './styles/main.scss'

const App = () => {
  return (
    <div className="container mx-auto max-w-[23.75rem] p-2">
      <Header />
      {/*<GoalView />*/}
      {/*<MeasureView />*/}
      {/*<BehavioursView />*/}
      <ExerciseView />
    </div>
  )
}

export default App
