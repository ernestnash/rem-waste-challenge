import './App.css'
import ChooseSkipSizePage from './pages/ChooseSkipSizePage'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Analytics />
      <ChooseSkipSizePage />
    </>
  )
}

export default App
