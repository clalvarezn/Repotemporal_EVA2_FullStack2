import { useState } from 'react'
import { validarCorreo, validarRUN } from '../utils/validaciones'

const titulos = { login: 'Iniciar sesión', registro: 'Crear cuenta', contacto: 'Contacto' }

export default function Formulario({ tipo }) {
  const [mensaje, setMensaje] = useState('')
  const [correcto, setCorrecto] = useState(false)

  function enviar(evento) {
    evento.preventDefault()
    const formulario = new FormData(evento.currentTarget)
    const correo = formulario.get('correo') || ''

    // Se valida primero el dominio para detener el envío con un mensaje claro.
    if (!validarCorreo(correo)) {
      setMensaje('Correo no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com.')
      setCorrecto(false)
      return
    }
    // El RUN solo es obligatorio y se comprueba en el formulario de registro.
    if (tipo === 'registro' && !validarRUN(formulario.get('run') || '')) {
      setMensaje('El RUN ingresado no es válido.')
      setCorrecto(false)
      return
    }
    // trim evita aceptar un comentario que contenga únicamente espacios.
    if (tipo === 'contacto' && !String(formulario.get('comentario') || '').trim()) {
      setMensaje('Ingresa un comentario.')
      setCorrecto(false)
      return
    }

    setMensaje(tipo === 'contacto' ? 'Mensaje validado correctamente.' : tipo === 'registro' ? 'Registro validado correctamente.' : 'Inicio de sesión validado correctamente.')
    setCorrecto(true)
    if (tipo === 'login' && new URLSearchParams(window.location.search).get('redirect') === 'admin') window.location.href = '/admin'
  }

  return (
    <main className="container form-section">
      <form className="form-card" onSubmit={enviar}>
        <p className="eyebrow">LEVELUP GAMING</p><h1>{titulos[tipo]}</h1>
        {tipo === 'registro' && <><label>Nombre<input name="nombre" required maxLength="50" /></label><label>Apellidos<input name="apellidos" required maxLength="100" /></label><label>RUN<input name="run" required minLength="7" maxLength="9" placeholder="19011022K" /></label></>}
        <label>Correo<input name="correo" type="email" required maxLength="100" placeholder="usuario@gmail.com" /></label>
        {tipo !== 'contacto' && <label>Contraseña<input name="password" type="password" required minLength="4" maxLength="10" /></label>}
        {tipo === 'registro' && <label>Dirección<input name="direccion" required maxLength="300" /></label>}
        {tipo === 'contacto' && <><label>Nombre<input name="nombre" required maxLength="100" /></label><label>Comentario<textarea name="comentario" required maxLength="500" rows="5" /></label></>}
        <button className="btn" type="submit">{tipo === 'registro' ? 'Registrarme' : tipo === 'contacto' ? 'Enviar mensaje' : 'Ingresar'}</button>
        {mensaje && <p className={correcto ? 'form-message success' : 'form-message error'} role="status">{mensaje}</p>}
        {tipo === 'login' && <p className="form-note">¿No tienes cuenta? <a href="/registro">Regístrate</a></p>}
      </form>
    </main>
  )
}
