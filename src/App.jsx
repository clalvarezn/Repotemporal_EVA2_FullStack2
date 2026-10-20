import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Inicio from './componentes/Inicio'
import Catalogo from './componentes/Catalogo'
import Carrito from './componentes/Carrito'
import Formulario from './componentes/Formulario'
import Nosotros from './componentes/Nosotros'
import Blogs from './componentes/Blogs'
import Articulo from './componentes/Articulo'
import DetalleProducto from './componentes/DetalleProducto'
import Administracion from './admin/Administracion'
import AdminLogin from './admin/AdminLogin'
import { agregarProducto } from './utils/carrito'

function leerCarrito() {
  try { return JSON.parse(localStorage.getItem('levelupCarrito') || '[]') }
  catch { return [] }
}

export default function App() {
  const [carrito, setCarrito] = useState(leerCarrito)

  useEffect(() => {
    localStorage.setItem('levelupCarrito', JSON.stringify(carrito))
  }, [carrito])

  const agregar = producto => {
    setCarrito(actual => agregarProducto(actual, producto))
    window.alert(`${producto.nombre} fue añadido al carrito.`)
  }

  const cantidadCarrito = useMemo(() => carrito.reduce((suma, producto) => suma + producto.cantidad, 0), [carrito])
  const ruta = decodeURI(window.location.pathname).replace(/\/$/, '') || '/'
  const segmentos = ruta.split('/')
  let pagina

  if (ruta === '/') pagina = <Inicio agregar={agregar} />
  else if (ruta === '/productos') pagina = <Catalogo agregar={agregar} />
  else if (ruta === '/carrito') pagina = <Carrito carrito={carrito} setCarrito={setCarrito} />
  else if (ruta === '/login') pagina = <Formulario tipo="login" />
  else if (ruta === '/registro') pagina = <Formulario tipo="registro" />
  else if (ruta === '/contacto') pagina = <Formulario tipo="contacto" />
  else if (ruta === '/nosotros') pagina = <Nosotros />
  else if (ruta === '/blogs') pagina = <Blogs />
  else if (segmentos[1] === 'blogs' && segmentos[2]) pagina = <Articulo id={segmentos[2]} />
  else if (segmentos[1] === 'producto' && segmentos[2]) pagina = <DetalleProducto id={segmentos[2]} agregar={agregar} />
  else if (ruta === '/admin') pagina = <AdminLogin />
  else if (ruta === '/admin/dashboard') pagina = <Administracion />
  else pagina = <main className="container section"><h1>Página no encontrada</h1><a className="btn" href="/">Volver al inicio</a></main>

  return <><Header cantidad={cantidadCarrito} />{pagina}<Footer /></>
}
