import { useState } from 'react'
import { calcularSigno } from '../utils/horoscopo'

function HoroscopoForm({ onSignoCalculado, onNombreGuardado }) {
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [nombre, setNombre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!fechaNacimiento || !nombre) {
      alert('Por favor completa todos los campos')
      return
    }

    const signo = calcularSigno(fechaNacimiento)
    onSignoCalculado(signo)
    onNombreGuardado(nombre) // Guardar el nombre
  }

  return (
    <div className="card">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#000', fontWeight: 'bold' }}>
        CONSULTA TU HOROSCOPO
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha de nacimiento:</label>
          <input
            type="date"
            id="fecha"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">
          CONSULTAR HOROSCOPO
        </button>
      </form>
    </div>
  )
}

export default HoroscopoForm