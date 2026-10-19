import './Producto.css'
import { formatoPrecio } from '../data/productos'

export default function Producto({ producto, onAgregar }) {
  return <article className="producto-card">
    <img src={producto.imagen} alt={producto.nombre} loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} />
    <div className="producto-info"><p className="eyebrow">HARDWARE GAMER</p><h3>{producto.nombre}</h3><p>{producto.descripcion}</p><strong>{formatoPrecio(producto.precio)}</strong>
    <div className="producto-actions"><a className="btn-small btn-outline" href={`/producto/${producto.id}`}>Ver producto</a><button className="btn-small" onClick={() => onAgregar(producto)}>Añadir al carrito</button></div></div>
  </article>
}
