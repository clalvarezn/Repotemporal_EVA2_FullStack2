import { useEffect, useState } from 'react'
import './Inicio.css'
import Producto from './Producto'
import { productos } from '../data/productos'

const imagenesCarrusel = [
  {
    src: '/imagenes/Imagen1.jpg',
    alt: 'Setups RGB: ilumina tu espacio de juego',
  },
  {
    src: '/imagenes/Imagen2.jpg',
    alt: 'Oferta especial: tarjetas gráficas de última generación',
  },
  {
    src: '/imagenes/Imagen3.jpg',
    alt: 'LevelUp Gaming: sube de nivel tu experiencia gamer',
  },
]

export default function Inicio({ agregar }) {
  const [indiceActual, setIndiceActual] = useState(0)

  // Cambiar de imagen automáticamente cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual(indice => (indice + 1) % imagenesCarrusel.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  const anterior = () => {
    setIndiceActual(indice =>
      (indice - 1 + imagenesCarrusel.length) % imagenesCarrusel.length
    )
  }

  const siguiente = () => {
    setIndiceActual(indice =>
      (indice + 1) % imagenesCarrusel.length
    )
  }

  return (
    <>
      <section className="hero-carrusel" aria-label="Promociones destacadas">
        <div className="carrusel-contenedor">
          {imagenesCarrusel.map((imagen, indice) => (
            <a
              key={imagen.src}
              href="/productos"
              className={`carrusel-slide ${
                indice === indiceActual ? 'activo' : ''
              }`}
              aria-hidden={indice !== indiceActual}
              tabIndex={indice === indiceActual ? 0 : -1}
            >
              <img src={imagen.src} alt={imagen.alt} />
            </a>
          ))}

          <button
            type="button"
            className="carrusel-flecha carrusel-anterior"
            onClick={anterior}
            aria-label="Imagen anterior"
          >
            &#10094;
          </button>

          <button
            type="button"
            className="carrusel-flecha carrusel-siguiente"
            onClick={siguiente}
            aria-label="Imagen siguiente"
          >
            &#10095;
          </button>

          <div className="carrusel-indicadores">
            {imagenesCarrusel.map((imagen, indice) => (
              <button
                key={imagen.src}
                type="button"
                className={`carrusel-indicador ${
                  indice === indiceActual ? 'activo' : ''
                }`}
                onClick={() => setIndiceActual(indice)}
                aria-label={`Mostrar imagen ${indice + 1}`}
                aria-current={indice === indiceActual ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
            <h2>⚡ Ofertas relámpago</h2>
        </div>

        <div className="product-grid">
          {productos.slice(0, 3).map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
              onAgregar={agregar}
              mostrarAgregar={false}
            />
          ))}
        </div>
      </section>

      <section className="brands">
        <div className="container">
          <h2>Marcas asociadas</h2>
          <div className="brand-list">
            <span>LOGITECH</span>
            <span>ASUS</span>
            <span>AMD</span>
            <span>NVIDIA</span>
            <span>MSI</span>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Categorías</h2>
        <div className="category-grid">
          <a href="/productos">🎧 Periféricos</a> 
          <a href="/productos">🖥️ Hardware PC</a>
          <a href="/productos">🪑 Sillas Gamer</a>
          <a href="/productos">🎮 Accesorios</a>
        </div>
      </section>
    </>
  )
}