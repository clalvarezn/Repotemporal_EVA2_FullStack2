export const productos = [
 {id:1,nombre:'RTX Gaming Pro',descripcion:'Tarjeta gráfica de alto rendimiento.',precio:599990,imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxSxtVf9uB4_gn47kWjeiI3TZJxf_FzAVcgoIkcAApMJ8ecnziGnaQdA&s=10',detalle:'Potencia gráfica para jugar con gran calidad de imagen.'},
 {id:2,nombre:'Teclado RGB Pro',descripcion:'Teclado mecánico para gamers.',precio:79990,imagen:'https://cdnx.jumpseller.com/fantech-esports/image/39087132/thumb/1440/1440?1754504474',detalle:'Teclas mecánicas y retroiluminación RGB.'},
 {id:3,nombre:'Mouse Gamer',descripcion:'Mouse ergonómico de alta precisión.',precio:39990,imagen:'https://media.falabella.com/falabellaCL/147668350_01/w=1200,h=1200,fit=pad',detalle:'Precisión y comodidad para largas sesiones.'},
 {id:4,nombre:'Monitor 27 Gamer',descripcion:'Monitor para gaming competitivo.',precio:249990,imagen:'https://media.falabella.com/falabellaCL/147668350_01/w=1200,h=1200,fit=pad',detalle:'Pantalla amplia para disfrutar tus juegos.'},
 {id:5,nombre:'Silla Gamer',descripcion:'Comodidad para largas sesiones.',precio:189990,imagen:'https://static.myshop.cl/fotos/3/2/4/7/1/1_1749437617000.png',detalle:'Diseño pensado para sesiones de juego prolongadas.'},
 {id:6,nombre:'Audífonos Gamer',descripcion:'Audio inmersivo para tus partidas.',precio:69990,imagen:'https://cdnx.jumpseller.com/fantech-esports/image/39087132/thumb/1440/1440?1754504474',detalle:'Audio para sumergirte en cada partida.'}
]
export const formatoPrecio = n => '$' + Number(n).toLocaleString('es-CL')
