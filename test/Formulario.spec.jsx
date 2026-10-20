import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Formulario from '../src/componentes/Formulario.jsx'

describe('validación del correo en Formulario', () => {
  afterEach(() => {
    cleanup()
  })

  it('muestra un error si el correo no pertenece a un dominio permitido', () => {
    render(<Formulario tipo="login" />)

    fireEvent.change(screen.getByLabelText('Correo'), {
      target: { value: 'usuario@outlook.com' }
    })
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: 'clave123' }
    })
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(screen.getByRole('status').textContent).toBe(
      'Correo no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com.'
    )
  })

  it('acepta un correo de un dominio permitido', () => {
    render(<Formulario tipo="login" />)

    fireEvent.change(screen.getByLabelText('Correo'), {
      target: { value: 'usuario@gmail.com' }
    })
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: 'clave123' }
    })
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(screen.getByRole('status').textContent).toBe(
      'Inicio de sesión validado correctamente.'
    )
  })
})

describe('validación del comentario de contacto', () => {
  afterEach(() => {
    cleanup()
  })

  it('muestra un error si el comentario está vacío o contiene solo espacios', () => {
    render(<Formulario tipo="contacto" />)

    fireEvent.change(screen.getByLabelText('Correo'), {
      target: { value: 'usuario@gmail.com' }
    })
    fireEvent.change(screen.getByLabelText('Nombre'), {
      target: { value: 'Usuario' }
    })
    fireEvent.change(screen.getByLabelText('Comentario'), {
      target: { value: '   ' }
    })
    fireEvent.submit(screen.getByRole('button', { name: 'Enviar mensaje' }).closest('form'))

    expect(screen.getByRole('status').textContent).toBe('Ingresa un comentario.')
  })

  it('acepta un comentario con contenido y correo válido', () => {
    render(<Formulario tipo="contacto" />)

    fireEvent.change(screen.getByLabelText('Correo'), {
      target: { value: 'usuario@gmail.com' }
    })
    fireEvent.change(screen.getByLabelText('Nombre'), {
      target: { value: 'Usuario' }
    })
    fireEvent.change(screen.getByLabelText('Comentario'), {
      target: { value: 'Necesito ayuda con mi pedido.' }
    })
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }))

    expect(screen.getByRole('status').textContent).toBe(
      'Mensaje validado correctamente.'
    )
  })
})
