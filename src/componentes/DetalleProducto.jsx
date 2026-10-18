import { productos, formatoPrecio } from '../data/productos'

export default function DetalleProducto({ id, agregar }) {
  const producto = productos.find(item => item.id === Number(id)) || productos[0]
  if (!producto) return <main className="container section"><h1>Producto no encontrado</h1><a href="/productos">Volver a productos</a></main>

  return (
    <main className="container section"><a href="/productos">← Volver a productos</a>
      <article className="detail"><img src={producto.imagen} alt={producto.nombre} /><div><p className="eyebrow">HARDWARE PC</p><h1>{producto.nombre}</h1><p>{producto.detalle}</p><h2>{formatoPrecio(producto.precio)}</h2><button className="btn" onClick={() => agregar(producto)}>Añadir al carrito</button></div></article>
    </main>
  )
}
