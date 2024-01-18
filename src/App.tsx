import Header from '@components/Header/Header.tsx'
import GoalView from '@components/views/GoalView/GoalView.tsx'

import './styles/main.scss'

const App = () => {
  return (
    <div className="container mx-auto p-2 max-w-[380px]">
      <Header />
      <GoalView />
    </div>
  )
}

export default App
