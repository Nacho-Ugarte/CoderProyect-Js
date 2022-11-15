function bienvenida() {
    alert("Bienvenidos a Burgtime!")
    comprar();
};

const arrayProductos = [];

const producto1 = new Producto(1, 'simple con queso', 900);
const producto2 = new Producto(2, 'doble con bacon', 1200);
const producto3 = new Producto(3, 'ambos', 2100);

arrayProductos.push(producto1, producto2, producto3);

// Func p ordenar 
const menorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    listaOrdenada();
};

const mayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    listaOrdenada();
};
//Ordenar para visualizar...
//menorMayor();
//mayorMenor();

const listaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre + ' $' + producto.precio));
    alert('Lista de precios:' + '\n' + array.join('\n'));
};


function comprarProductos(){
let productoNombre = '';
let total= 0;
let productoCantidad = 0;
let seguirComprando = false;

    do {
        productoNombre = prompt('De que hamburguesa tenes ganas hoy?');
        productoCantidad = parseInt(prompt('Cuantas queres llevar?'));
    

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto){
            total += producto.precio * producto.productoCantidad;
        }else{
            alert('Producto erroneo o fuera de stock.');
        }


        seguirComprando = confirm('Seguir pidiendo?');

}while (seguirComprando);

aplicarDescuento(total);
};

function aplicarDescuento (totalCompra){
    if (totalCompra >= 4000) {
        totalCompra = totalCompra* 0.80;
        alert('Tenes un 20% de descuento! Felicidades :D');
    }
    calcularEnvio(totalCompra);
};

function calcularEnvio(totalCompra){
    let tieneEnvioDomicilio = confirm('Queres que te lo llevemos?');

    if (tieneEnvioDomicilio && totalCompra >= 3000){
        alert('Tenes envío gratis, tu total es solo de: '+ totalCompra);
    }else if (tieneEnvioDomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('El envio es de 700$. Tu total es de: ' + totalCompra);
    } else {
        alert('El total es de:' + totalCompra);
    };
    
};

function comprar(){
    const quieroOrdenar = confirm('Queres ordernar la lista de menor a mayor precio?');

    if(quieroOrdenar){
        menorMayor();
    }else{
        mayorMenor();
    }
    comprarProductos();
};

bienvenida();
