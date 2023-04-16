// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/App.jsx
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Wassssup</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© Alex Mills1</footer>
    </div>
  )
}

