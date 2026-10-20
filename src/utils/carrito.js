// Agrega el producto con cantidad inicial 1 o incrementa su cantidad si ya existe.
export function agregarProducto(carrito, producto) {
  const existente = carrito.find(item => item.id === producto.id)

  return existente
    ? carrito.map(item => item.id === producto.id
      ? { ...item, cantidad: item.cantidad + 1 }
      : item)
    : [...carrito, { ...producto, cantidad: 1 }]
}

// Actualiza solo el producto indicado y lo elimina cuando la cantidad llega a
// cero, así el carrito nunca muestra artículos con cantidad no positiva.
export function cambiarCantidadProducto(carrito, id, cantidad) {
  return carrito
    .map(producto => producto.id === id ? { ...producto, cantidad } : producto)
    .filter(producto => producto.cantidad > 0)
}
