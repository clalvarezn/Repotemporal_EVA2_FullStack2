import { validarCorreo } from '../utils/validaciones.js'

// Estos casos documentan los dominios que el formulario permite actualmente.
describe('validarCorreo', () => {
  it('acepta correos de Duoc, profesores Duoc y Gmail', () => {
    expect(validarCorreo('usuario@duoc.cl')).toBe(true)
    expect(validarCorreo('usuario@profesor.duoc.cl')).toBe(true)
    expect(validarCorreo('usuario@gmail.com')).toBe(true)
  })

  // La validación no distingue entre letras mayúsculas y minúsculas.
  it('acepta los dominios permitidos escritos en mayúsculas', () => {
    expect(validarCorreo('Usuario@GMAIL.COM')).toBe(true)
  })

  // Rechaza proveedores no autorizados y formatos incompletos o con espacios.
  it('rechaza dominios no permitidos y correos mal formados', () => {
    expect(validarCorreo('usuario@outlook.com')).toBe(false)
    expect(validarCorreo('usuarioduoc.cl')).toBe(false)
    expect(validarCorreo('@gmail.com')).toBe(false)
    expect(validarCorreo('usuario@')).toBe(false)
    expect(validarCorreo('usuario@@gmail.com')).toBe(false)
    expect(validarCorreo('usuario @gmail.com')).toBe(false)
  })
})