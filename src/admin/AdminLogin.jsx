import { useState } from 'react'
import './admin.css'

// Acceso de demostración para el proyecto académico; no sustituye autenticación de servidor.
const CORREO_ADMIN = 'admin@duoc.cl'
const CLAVE_ADMIN = 'Admin1234'

export default function AdminLogin() {
  const [mensaje, setMensaje] = useState('')
  function ingresar(e) {
    e.preventDefault()
    const datos = new FormData(e.currentTarget)
    const correo = String(datos.get('correo') || '').trim().toLowerCase()
    const clave = String(datos.get('password') || '')
    if (correo === CORREO_ADMIN && clave === CLAVE_ADMIN) {
      sessionStorage.setItem('levelupAdminAutenticado', 'true')
      window.location.href = '/admin/dashboard'
    } else {
      setMensaje('Correo o contraseña incorrectos. Revisa las credenciales de demostración.')
    }
  }
  return <main className="admin-login-page"><form className="admin-login-card" onSubmit={ingresar}>
    <h1>Iniciar sesión</h1>
    <label htmlFor="admin-correo">Correo</label><input id="admin-correo" name="correo" type="email" autoComplete="username" required />
    <label htmlFor="admin-password">Contraseña</label><input id="admin-password" name="password" type="password" autoComplete="current-password" required />
    <button className="admin-primary-btn" type="submit">Ingresar</button>
    {mensaje && <p className="admin-login-error" role="alert">{mensaje}</p>}
  </form></main>
}
