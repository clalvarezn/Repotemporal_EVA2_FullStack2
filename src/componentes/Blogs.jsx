import './Blogs.css'

const articulos = [
  {
    id: 1,
    titulo: 'Guía para elegir tu primera tarjeta de vídeo',
    texto: 'Antes de elegir una tarjeta gráfica, considera la resolución en la que jugarás, el rendimiento esperado, la memoria disponible, el consumo energético y la compatibilidad con tu equipo.',
    contenido: 'Elegir una tarjeta gráfica comienza por definir tu presupuesto y la resolución deseada. Para jugar en Full HD, prioriza rendimiento por precio; para 1440p o 4K, considera más potencia y memoria. Revisa consumo, conectores y espacio disponible. Confirma que la fuente y el gabinete sean compatibles con la tarjeta elegida. También compara pruebas independientes, tecnologías de escalado y garantía. Revisa opiniones sobre ruido y temperaturas, y confirma que el modelo elegido tenga conexiones adecuadas para tus monitores y ventilación adecuada.',
    imagen: 'https://images.unsplash.com/photo-1791395183740-c9d238025c7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxM3A3fDE%3D',
  },
  {
    id: 2,
    titulo: 'Mantenimiento preventivo: ¿cada cuánto limpiar tu PC?',
    texto: 'Mantener el equipo limpio ayuda a controlar las temperaturas. Revisa periódicamente filtros, ventiladores y rejillas; desconecta el equipo antes de limpiarlo y evita líquidos sobre los componentes.',
    contenido: 'Mantener tu PC limpia ayuda a conservar temperaturas estables y proteger sus componentes. Como referencia, limpia filtros y rejillas cada uno o dos meses, si tienes mascotas o mucho polvo. Apaga y desconecta el equipo antes de comenzar. Usa aire comprimido en ráfagas cortas, manteniendo ventiladores inmóviles para evitar dañarlos. Retira el polvo de filtros, ventiladores y disipadores con cuidado; nunca apliques líquidos directamente sobre las piezas. Revisa que los cables no bloqueen el flujo de aire. Si las temperaturas siguen altas, considera renovar la pasta térmica o consultar a un técnico. La frecuencia depende del ambiente y del uso.',
    imagen: 'https://images.unsplash.com/photo-1721333088976-33173bdc59a2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  },
]

export { articulos }

export default function Blogs() {
  return (
    <main className="container section">
      <p className="eyebrow">NOTICIAS Y CONSEJOS</p>
      <h1>Blogs y Noticias</h1>
      <div className="blog-grid">
        {articulos.map((articulo) => (
          <article className="about-card" key={articulo.id}>
            <h2>{articulo.titulo}</h2>
            <p>{articulo.texto}</p>
            <a className="btn-small" href={`/blogs/${articulo.id}`}>
              Leer artículo
            </a>
          </article>
        ))}
      </div>
    </main>
  )
}
