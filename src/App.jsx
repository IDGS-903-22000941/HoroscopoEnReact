import { useState } from 'react'
import './App.css'
import HoroscopoForm from './components/HoroscopoForm.jsx'
import HoroscopoResult from './components/HoroscopoResult.jsx'

function App() {
  const [signo, setSigno] = useState(null)
  const [horoscopo, setHoroscopo] = useState(null)
  const [nombre, setNombre] = useState('') // Agregar estado para el nombre

  const handleNewConsulta = () => {
    setSigno(null)
    setHoroscopo(null)
    setNombre('') // Limpiar el nombre también
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>MI HOROSCOPO</h1>
      </header>

      <main className="app-main">
        {!signo ? (
          <HoroscopoForm 
            onSignoCalculado={setSigno} 
            onHoroscopoGenerado={setHoroscopo}
            onNombreGuardado={setNombre} // Pasar función para guardar nombre
          />
        ) : (
          <HoroscopoResult 
            signo={signo} 
            horoscopo={horoscopo} 
            nombre={nombre} // Pasar el nombre
            onNuevaConsulta={handleNewConsulta}
          />
        )}
      </main>
    </div>
  )
}

export default App
