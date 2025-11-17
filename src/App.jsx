import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TentangKamiPage from './pages/TentangKamiPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="relative w-full max-w-[1520px] mx-auto">

      {/* BACKGROUND WRAPPER */}
      <div className="flex justify-between absolute top-0 w-full overflow-hidden">
        <div className="w-1/2 relative">
          <img src="./blur1.png" className="w-[500px] h-[440px]" alt="" />
        </div>
        <div className="w-1/2 relative">
          <img src="./blur2.png" className="-right-20 absolute" alt="" />
        </div>
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<TentangKamiPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
