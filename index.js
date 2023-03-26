class ProductManager {
    #products

    constructor() {
        this.#products = []
    }

    //Geneacion del ID Autoincremental
    #generateId = () => {
        let id
        if (this.#products.length === 0) id = 1
        else id = this.#products[this.#products.length - 1].id + 1
        return id
    }

    getProducts = () => {
        return this.#products
    }

    //Método para devolver Producto según su Id
    getProductsById = (id) => {
        const productoEncontrado = this.#products.find(producto => producto.id === id)

        if (typeof id !== "number") throw new Error("ERROR: El Id debe ser un número, Ingrese un Número mayor a 0");

        if (!productoEncontrado) throw new Error(`ERROR: No se encontró un producto con Id Nro: ${id}`);

        return productoEncontrado;
    }

    // Agrega un nuevo producto
    addProduct = (title, description, price, thumbnail, code, stock) => {

        let newProduct = { id: this.#generateId(), title, description, price, thumbnail, code, stock }
        let productVerify = !title || !description || !price || !thumbnail || !code || !stock
        let productoExistente = this.#products.find(p => p.code === code)

        if (productVerify) console.error("ERROR: Todos los campos son obligatorios") //Validar que todos los campos esten completos              
        
        else if (productoExistente) console.error(`ERROR: Ya existe un producto con el código ${code}`) //Validacion del Campo "Code"            
        
        else this.#products.push(newProduct)
        
    }

}

const productManager = new ProductManager()


// Pruebas en la Consola

productManager.addProduct('Zapatillas', 'nike running', 20000, './images/zapatilla.png',"1235456", 20) 
productManager.addProduct('Remeras', 'T-shirt for running', 10000, './images/zapatilla.png', '45461231', 20) 
productManager.addProduct('Short', 'Short negro hombre', 12000, './images/zapatilla-negra.png', '123456789', 20) 
productManager.addProduct('Medias', 'Sox running', 5000, './images/zapatilla-blanca.png', '987654321', 12) 
productManager.addProduct('Calza termica', 'termica de invierno', 10600, './images/zapatilla-verde.png', '987wer4321', 22) 
productManager.addProduct('Campera', 'Para la lluvia', 26000, './images/zapatilla.png', '6594451', 11) 

console.log(productManager.getProducts())

try {
    const productoEncontrado = productManager.getProductsById(1); //El Id Existe.!
    console.log(productoEncontrado);
}
catch (error) {
    console.error(error.message);
}
try {
    const productoEncontrado = productManager.getProductsById(3); //El Id Existe.!
    console.log(productoEncontrado);
}
catch (error) {
    console.error(error.message);
}

try {
    const productoEncontrado = productManager.getProductsById(6); //El Id No Existe.! (ERROR)
    console.log(productoEncontrado);
}
catch (error) {
    console.error(error.message);
}

try {
    const productoEncontrado = productManager.getProductsById('1'); //El Id No es un Número.! (ERROR)
    console.log(productoEncontrado);
}
catch (error) {
    console.error(error.message);}