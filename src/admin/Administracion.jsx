import { useEffect } from 'react'
import { productos } from '../data/productos'
import './admin.css'

export default function Administracion() {
  useEffect(() => {
    if (sessionStorage.getItem('levelupAdminAutenticado') !== 'true') window.location.replace('/admin')
  }, [])
  const cerrarSesion = () => { sessionStorage.removeItem('levelupAdminAutenticado'); window.location.href = '/admin' }
  if (sessionStorage.getItem('levelupAdminAutenticado') !== 'true') return null
  return <div className="admin-layout">
    <header className="admin-topbar"><a className="admin-brand" href="/admin/dashboard">LEVEL<span>UP</span> ADMIN</a><button onClick={cerrarSesion}>Cerrar sesión</button></header>
    <aside className="admin-sidebar"><a href="/admin/dashboard">▦ Dashboard</a><a href="/productos">▣ Productos de la tienda</a><a href="/">↗ Ver tienda</a></aside>
    <main className="admin-main"><p className="admin-eyebrow">LEVELUP GAMING / ADMINISTRACIÓN</p><h1>Panel administrativo</h1>
      <div className="admin-stats"><article><span>Productos en catálogo</span><strong>{productos.length}</strong></article><article><span>Sesión</span><strong>Activa</strong></article><article><span>Stock crítico</span><strong>—</strong></article></div>
      <section className="admin-panel"><h2>Gestión de productos</h2><p>Consulta los productos publicados en el catálogo de la tienda.</p><div className="admin-table-wrap"><table><thead><tr><th>Producto</th><th>Precio</th><th>Acceso</th></tr></thead><tbody>{productos.map(producto => <tr key={producto.id}><td>{producto.nombre}</td><td>{Number(producto.precio).toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })}</td><td><a href={`/producto/${producto.id}`}>Ver ficha</a></td></tr>)}</tbody></table></div></section>
    </main>
  </div>
}
