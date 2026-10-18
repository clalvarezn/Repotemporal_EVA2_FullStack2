import { useState } from 'react'
import Producto from './Producto'
import { productos } from '../data/productos'

export default function Catalogo({ agregar }) {
  const [busqueda, setBusqueda] = useState('')
  const lista = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <main className="container section">
      <p className="eyebrow">ENCUENTRA TU EQUIPO</p><h1>Productos</h1>
      <p className="lead">Hardware y accesorios seleccionados para tu setup.</p>
      <input className="search-input" value={busqueda} onChange={evento => setBusqueda(evento.target.value)} placeholder="Buscar productos..." aria-label="Buscar productos" />
      <div className="product-grid">{lista.map(producto => <Producto key={producto.id} producto={producto} onAgregar={agregar} />)}</div>
      {!lista.length && <p>No se encontraron productos.</p>}
    </main>
  )
}
