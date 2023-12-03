// PRODUCTOS
const productos = [
    // Pasteleria y Galleteria
    {
        id: "pasteleri-01",
        titulo: "TORTA DE CHOCOLATE",
        imagen: "../img/pastel1.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria" // clave con el principal  de html
        },
        precio: 75000
    },
    {
        id: "pasteleri-02",
        titulo: "TORTA VAINILLA",
        imagen: "../img/pastel2.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria" // clave con el principal  de html id
        },
        precio: 65000
    },
    {
        id: "pasteleri-03",
        titulo: "TORTA DE TIRAMISU",
        imagen: "../img/pastel3.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"// clave con el principal  de html id 
        },
        precio: 80000
    },
    {
        id: "pasteleri-04",
        titulo: "TORTA DE TRES LECHES",
        imagen: "../img/pastel4.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"  // clave con el principal  de html id 
        },
        precio: 75000
    },
    {
        id: "pasteleri-05",
        titulo: "TORTA DE GELATINA",
        imagen: "../img/pastel5.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"  // clave con el principal  de html id
        },
        precio: 70000
    },
    {
        id: "galletas-01",
        titulo: "GALLETAS DE CHIPAS DE CHOCOLATE",
        imagen: "../img/galleta1.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"  // clave con el principal  de html id
        },
        precio: 4000
    },
    {
        id: "galletas-02",
        titulo: "GALLETAS DE MANTEQUILLA",
        imagen: "../img/galleta2.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"  // clave con el principal  de html id
        },
        precio: 3500
    },
    {
        id: "galletas-03",
        titulo: "GALLETAS DE AVENA ",
        imagen: "../img/galleta3.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"  // clave con el principal  de html id
        },
        precio: 3000
    },
    {
        id: "galletas-04",
        titulo: "GALLETAS JENJIBRE ",
        imagen: "../img/galleta4.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"  // clave con el principal  de html id
        },
        precio: 3000
    },
    {
        id: "galletas-05",
        titulo: "GALLETAS DE AZUCAR ",
        imagen: "../img/galleta5.jpg",
        categoria: {
            nombre: "Pasteleria y Galleteria",
            id: "Pasteleria y Galleteria"  // clave con el principal  de html id
        },
        precio: 3000
    },
    // Bebidas
    {
        id: "bebida-01",
        titulo: "MOCA",
        imagen: "../img/bebida1.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 6500
    },
    {
        id: "bebida-02",
        titulo: "ESPRESSO",
        imagen: "../img/bebida2.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 4000
    },
    {
        id: "bebida-03",
        titulo: "LATTE FRIO",
        imagen: "../img/bebida3.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 4500
    },
    {
        id: "bebida-04",
        titulo: "JUGOS NATURALES",
        imagen: "../img/bebida4.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 4000
    },
    {
        id: "bebida-05",
        titulo: "GRANIZADOS",
        imagen: "../img/bebida5.png",
        categoria: {
            nombre: "Bebidas",
            id: "Bebidas"
        },
        precio: 6500
    },
    
    // Banquetes 
    {
        id: "banquetes-01",
        titulo: "REFRIGERIOS EMPRESARIALES",
        imagen: "../img/banquetes1.jpg",
        categoria: {
            nombre: "Banquetes",
            id: "Banquetes"
        },
        precio: 9500 
    },
    {
        id: "banquetes-02",
        titulo: "TEPPANYAKI",
        imagen: "../img/banquete2.jfif",
        categoria: {
            nombre: "Banquetes",
            id: "Banquetes"
        },
        precio: 11000
    },
    {
        id: "banquetes-03",
        titulo: "PAELLAS",
        imagen: "../img/banquete3.jpg",
        categoria: {
            nombre: "Banquetes",
            id: "Banquetes"
        },
        precio: 12000
    },
    {
        id: "banquetes-04",
        titulo: "ESTACION DE CAFÉ",
        imagen: "../img/banquetes4.jpeg",
        categoria: {
            nombre: "Banquetes",
            id: "Banquetes"
        },
        precio: 3500
    },
    
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}