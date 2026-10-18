import { useState } from 'react'

const enlaces = [
  ['Inicio', '/'],
  ['Productos', '/productos'],
  ['Blogs', '/blogs'],
  ['Nosotros', '/nosotros'],
  ['Contacto', '/contacto'],
  ['Ingresar', '/login'],
]

export default function Header({ cantidad }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-container">
        <a className="logo" href="/">LEVEL<span>UP</span> GAMING</a>
        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)} aria-label="Abrir menú" aria-expanded={menuAbierto}>☰</button>
        <nav className={menuAbierto ? 'nav-links abierto' : 'nav-links'}>
          {enlaces.map(([texto, url]) => <a key={url} href={url} onClick={() => setMenuAbierto(false)}>{texto}</a>)}
          <a href="/admin" onClick={() => setMenuAbierto(false)}>Admin</a>
          <a className="nav-cart" href="/carrito" onClick={() => setMenuAbierto(false)}>🛒 Carrito <b>{cantidad}</b></a>
        </nav>
      </div>
    </header>
  )
}
