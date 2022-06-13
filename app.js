class Libro {
    constructor(titulo, precio, idioma) {
        this.titulo = titulo.toUpperCase();
        this.precio = parseFloat(precio);
        this.idioma = idioma.toUpperCase();
    }

    descuento() {
        this.precio = this.precio / 1.25;
    }
}
const libros = [];
libros.push(new Libro("el principito", "800", "español"));
libros.push(new Libro("Harry potter", "1250", "ingles"));
libros.push(new Libro("Señor de los anillos", "3000", "español"));

for (const Libro of libros) {
    Libro.descuento();
}

console.log(libros);