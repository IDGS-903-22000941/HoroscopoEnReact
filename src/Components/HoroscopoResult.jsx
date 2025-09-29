function HoroscopoResult({ signo, horoscopo, nombre, onNuevaConsulta }) {
  return (
    <div className="card result-container">
      <div className="signo-display">{signo.emoji}</div>
      <h2 className="signo-name">{signo.nombre}</h2>
      
      <p style={{ fontSize: '1.2rem', margin: '1rem 0', fontWeight: 'bold' }}>
        {nombre}, tu horóscopo es
      </p>
      
      <div className="info-box">
        <p><strong>Fechas:</strong> {signo.fechas}</p>
        <p><strong>Elemento:</strong> {signo.elemento}</p>
        <p><strong>Planeta:</strong> {signo.planeta}</p>
        {horoscopo && <p><strong>Predicción:</strong> {horoscopo}</p>}
      </div>

      <button onClick={onNuevaConsulta} className="btn btn-secondary">
        NUEVA CONSULTA
      </button>
    </div>
  )
}

export default HoroscopoResult