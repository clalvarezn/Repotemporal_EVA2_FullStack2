import { articulos } from './Blogs'

export default function Articulo({ id }) {
  const articulo = articulos.find(item => item.id === Number(id))
  return (
    <main className="container section"><a href="/blogs">← Volver a blogs</a>
      {articulo ? <article className="article"><p className="eyebrow">BLOG LEVELUP</p><h1>{articulo.titulo}</h1><p>{articulo.texto}</p></article> : <p>Artículo no encontrado.</p>}
    </main>
  )
}
