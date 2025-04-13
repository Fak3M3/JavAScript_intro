class Libro {
    // Constructor
    constructor(titulo, autor, anio, estado) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
      this.estado = estado;
      this.capitulos = []; // Lista para almacenar los capítulos
    }
  
    // Método para describir el libro
    describirLibro() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
  
    // Método para agregar un capítulo
    agregarCapitulo(capitulo) {
      this.capitulos.push(capitulo);
    }
  
    // Método para eliminar un capítulo
    eliminarCapitulo(capitulo) {
      const index = this.capitulos.indexOf(capitulo);
      if (index > -1) {
        this.capitulos.splice(index, 1);
      }
    }
  
    // Método para mostrar los capítulos
    mostrarCapitulos() {
      if (this.capitulos.length === 0) {
        console.log("Este libro no tiene capítulos.");
      } else {
        console.log("Capítulos del libro:");
        this.capitulos.forEach((capitulo, index) => {
          console.log(`${index + 1}. ${capitulo}`);
        });
      }
    }
  
    // Métodos getter y setter
    getTitulo() {
      return this.titulo;
    }
  
    setTitulo(titulo) {
      this.titulo = titulo;
    }
  
    getAutor() {
      return this.autor;
    }
  
    setAutor(autor) {
      this.autor = autor;
    }
  
    getAnio() {
      return this.anio;
    }
  
    setAnio(anio) {
      this.anio = anio;
    }
  
    getEstado() {
      return this.estado;
    }
  
    setEstado(estado) {
      this.estado = estado;
    }
  }
  
  // Crear un libro
  const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
  
  // Describir el libro
  libro1.describirLibro();
  
  // Agregar capítulos al libro
  libro1.agregarCapitulo("Capítulo 1: El Inicio");
  libro1.agregarCapitulo("Capítulo 2: La Historia Continua");
  
  // Mostrar los capítulos
  libro1.mostrarCapitulos();
  
  // Cambiar el estado del libro
  libro1.setEstado("prestado");
  
  // Describir nuevamente el libro
  libro1.describirLibro();
  