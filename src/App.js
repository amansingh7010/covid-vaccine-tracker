import Search from './components/Search/Search'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        Covid Vaccine Tracker India
      </header>
      <Search />
    </div>
  )
}

export default App
