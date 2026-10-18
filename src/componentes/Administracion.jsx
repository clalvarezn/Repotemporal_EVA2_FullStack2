export default function Administracion() {
  return (
    <main className="container section"><p className="eyebrow">ADMINISTRACIÓN</p><h1>Panel de administración</h1>
      <div className="admin-grid"><a className="about-card" href="/productos">Gestión de productos <p>Revisar el catálogo disponible.</p></a><a className="about-card" href="/login">Inicio de sesión <p>Acceso de demostración.</p></a></div>
      <p className="form-note">Esta interfaz es una demostración académica; no existe autenticación ni base de datos conectada.</p>
    </main>
  )
}
