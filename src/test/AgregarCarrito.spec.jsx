import { agregarProducto, cambiarCantidadProducto } from '../utils/carrito.js'

// Estos casos validan las reglas compartidas por la app y el carrito.
describe('carrito de compras', () => {
  const producto = {
    id: 'teclado-gamer',
    nombre: 'Teclado Gamer',
    precio: 25000
  }

  it('agrega un producto nuevo con cantidad inicial de 1', () => {
    const carrito = agregarProducto([], producto)

    expect(carrito).toEqual([{ ...producto, cantidad: 1 }])
  })

  it('incrementa la cantidad si el producto ya estaba agregado', () => {
    const carritoInicial = [{ ...producto, cantidad: 1 }]
    const carrito = agregarProducto(carritoInicial, producto)

    expect(carrito).toEqual([{ ...producto, cantidad: 2 }])
    // La actualización devuelve un carrito nuevo sin alterar el anterior.
    expect(carritoInicial[0].cantidad).toBe(1)
  })

  it('elimina el producto al reducir su cantidad a 0', () => {
    const carritoInicial = [{ ...producto, cantidad: 1 }]
    const carrito = cambiarCantidadProducto(carritoInicial, producto.id, 0)

    expect(carrito).toEqual([])
  })

  it('conserva otros productos al cambiar la cantidad de uno', () => {
    const otroProducto = { id: 'mouse-gamer', nombre: 'Mouse Gamer', cantidad: 2 }
    const carritoInicial = [
      { ...producto, cantidad: 1 },
      otroProducto
    ]
    const carrito = cambiarCantidadProducto(carritoInicial, producto.id, 0)

    expect(carrito).toEqual([otroProducto])
  })
})