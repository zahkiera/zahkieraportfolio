import { Route, Routes } from 'react-router-dom'
import { AboutMe } from './pages/AboutMe'
import { Portfolio } from './pages/Portfolio'
import { Experience } from './pages/Experience'
import { Connect } from './pages/Connect'
import { Home } from './pages/Home'
import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header />  
      <main className="flex-1 flex justify-center items-center">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
