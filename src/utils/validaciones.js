// Solo se aceptan los dominios habilitados para el formulario; la bandera i
// permite escribir el correo con mayúsculas o minúsculas.
export function validarCorreo(correo) {
  return /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correo)
}

// Limpia el RUN y valida su longitud antes de calcular el dígito verificador
// con el algoritmo módulo 11 usado para este identificador chileno.
export function validarRUN(run) {
  const limpio = run.toUpperCase().replace(/[^0-9K]/g, '')
  if (limpio.length < 7 || limpio.length > 9) return false

  const cuerpo = limpio.slice(0, -1)
  let suma = 0
  let multiplicador = 2

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * multiplicador
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1
  }

  const resultado = 11 - (suma % 11)
  const digitoVerificador = resultado === 11 ? '0' : resultado === 10 ? 'K' : String(resultado)
  // El RUN es válido únicamente si el último carácter coincide con el cálculo.
  return limpio.slice(-1) === digitoVerificador
}
