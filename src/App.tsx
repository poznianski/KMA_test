import Header from '@components/Header/Header.tsx'
import GoalView from '@components/views/GoalView/GoalView.tsx'
import MeasureView from '@components/views/MeasureView/MeasureView.tsx'

import './styles/main.scss'

const App = () => {
  return (
    <div className="container mx-auto p-2 max-w-[23.75rem]">
      <Header />
      {/*<GoalView />*/}
      <MeasureView />
    </div>
  )
}

export default App
