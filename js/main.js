// ARREGLO DE PLATILLOS
let listaPlatillos = [
    {
        id: 1,
        nombre: "Crema de Verduras",
        descripcion: "Suave crema preparada con una variedad de verduras estacionales",
        precio: 12.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z",
    },
    {
        id: 2,
        nombre: "Albondigas con salsa Barbeque",
        descripcion:
            "Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa Bbq y espinacas",
        precio: 18.0,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    },
    {
        id: 3,
        nombre: "Hamburguesa Royal",
        descripcion: "Carne, Queso, Huevo y tomate, todo envuelto con pan",
        precio: 11.0,
        stock: 14,
        imagen: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 4,
        nombre: "Pizza de la casa",
        descripcion: "Pizza con recetea original de la casa",
        precio: 14.0,
        stock: 7,
        imagen: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 5,
        nombre: "Ceviche de la casa",
        descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
        precio: 20.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 6,
        nombre: "Ramen Fusión",
        descripcion: "Ramen preparado con ingredientes Peruanos",
        precio: 19.0,
        stock: 6,
        imagen: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
];

// ALMACENANDO DATOS EN EL DOM
function agregarAMain(item){
    // AGREGANDO TR AL BODY-RESUMEN PARA ALMACENAR EL TOTAL
    let tresumen = document.getElementById("tbody-resumen")
    let resumen = document.createElement("tr")
        resumen.innerHTML = `<td>TOTAL</td>
                             <td class="totalPagar"></td>`
    tresumen.appendChild(resumen)
    // OBTENIENDO EL CONTENIDO
    let miMain = document.getElementById("contenido")
    // RECORRIENDO EL ARRAY
    for(let i = 0; i < item.length; i++){
        // DIV TARJETA
        let miTarjeta = document.createElement("div")
        miTarjeta.classList.add("tarjeta")
        miMain.appendChild(miTarjeta)
        // DIV IMAGEN
        let miImagen = document.createElement("div")
        miImagen.classList.add("imagen")
        miTarjeta.appendChild(miImagen)
        // ETIQUETA IMG
        let miImg = document.createElement("img")
        miImg.setAttribute("src",`${item[i].imagen}`)
        miImagen.appendChild(miImg)
        // DIV TEXTO
        let miTexto = document.createElement("div")
        miTexto.classList.add("texto")
        miTarjeta.appendChild(miTexto)
        miTexto.innerHTML = `<h4>${item[i].nombre}</h4>
        <p>${item[i].descripcion}</p>`
        // DIV PRECIO
        let miPrecio = document.createElement("div")
        miPrecio.classList.add("precio")
        miTexto.appendChild(miPrecio)
        miPrecio.innerHTML = `<span>S/ ${item[i].precio}</span>`
        // ETIQUETA BUTTON
        let miBoton = document.createElement("button")
        miBoton.classList.add("btn-agregar",`boton${i}`)
        miPrecio.appendChild(miBoton)
        miBoton.innerText = "Agregar"
    // VINCULANDO Y LLAMANDO FUNCIONES
    carritoPC(item,i)
    sumaDeTotales(item,i)
    }
}

// AGREGANDO AL CARRITO PRIMERA COMPRA
function carritoPC(item,i){
    miBoton = document.querySelector(`.boton${i}`)
    let tbody = document.getElementById("tbody-carrito")
    let evento = true
    // EVENTO PARA AGREGAR AL CARRITO COMO PRIMERA COMPRA
    miBoton.addEventListener("click" ,function(){
        if(evento == true){
        let tr = document.createElement("tr")
        tr.innerHTML = `<td>${item[i].nombre}</td>
                        <td class="cantidad${i}">1</td>
                        <td>${item[i].precio}</td>
                        <td class="pagar${i}">${item[i].precio}</td>`
        tbody.appendChild(tr)
        evento = false
        agregarLS(item,i)
        }
    })
}

// SUMATORIA DE TODAS LAS CANTIDADES
let sumaTotal = 0
function sumaDeTotales(item,i){
    let total = 0
    // EVENTO PARA AUMENTAR LA CANTIDAD,EL SUB TOTAL Y EL COSTO TOTAL 
    miBoton.addEventListener("click",function(){
        total++
        let tdvalor = document.querySelector(".totalPagar")
        let cantidad = document.querySelector(`.cantidad${i}`)
        let pagar = document.querySelector(`.pagar${i}`)
        cantidad.innerText = `${total}`
        pagar.innerText = `${total * item[i].precio}`
        sumaTotal = sumaTotal + item[i].precio
        tdvalor.innerText = `${sumaTotal}`
    })
    
}

// AGREGANDO A LOCALSTORAGE
let array = []
function agregarLS(item,i){
    array.push(item[i].nombre,item[i].precio)
    let arrJSON = JSON.stringify(array)
    localStorage.setItem("PRODUCTOS",arrJSON)
}

agregarAMain(listaPlatillos)