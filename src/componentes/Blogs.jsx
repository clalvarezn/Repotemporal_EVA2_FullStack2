import './Blogs.css'

const articulos = [
  {
    id: 1,
    titulo: 'Guía para elegir tu primera tarjeta de vídeo',
    texto: 'Antes de elegir una tarjeta gráfica, considera la resolución en la que jugarás, el rendimiento esperado, la memoria disponible, el consumo energético y la compatibilidad con tu equipo.',
  },
  {
    id: 2,
    titulo: 'Mantenimiento preventivo: ¿cada cuánto limpiar tu PC?',
    texto: 'Mantener el equipo limpio ayuda a controlar las temperaturas. Revisa periódicamente filtros, ventiladores y rejillas; desconecta el equipo antes de limpiarlo y evita líquidos sobre los componentes.',
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
