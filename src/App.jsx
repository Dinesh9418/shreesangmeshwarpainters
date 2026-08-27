import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ResidentialProject from './pages/ResidentialProject.jsx'
import useScrollToHash from './hooks/useScrollToHash.js'

export default function App() {
  useScrollToHash()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/services/residential-project" element={<ResidentialProject />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
