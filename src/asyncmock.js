const productos = [
    { nombre: "PC Escritorio", precio: 300000, id: "1", img: "../img/pc_escritorio.jpg", idCat: "2" },
    { nombre: "Notebook", precio: 280000, id: "2", img: "../img/notebook.jpg", idCat: "2" },
    { nombre: "Celular", precio: 170000, id: "3", img: "../img/celular.jpg", idCat: "3" },
    { nombre: "Teclado", precio: 25000, id: "4", img: "../img/teclado.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
    })
}