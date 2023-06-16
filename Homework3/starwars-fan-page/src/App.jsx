import { useState } from 'react'
import './App.css'
import CharactersPage from './Components/CharactersPage/charactersPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CharactersPage/>
    </div>
  )
}

export default App
