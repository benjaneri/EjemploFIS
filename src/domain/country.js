export class Country {

  #nombre;
  #capital;

  constructor(aNombre) {
    this.#nombre = aNombre;
  }

  getNombre() {
    return this.#nombre;
  }

  setCapital(aCapital) {
    this.#capital = aCapital;
  }

  toString() {
    return `País: ${this.#nombre} - capital: ${this.#capital}`;
  }

  isValid() {
    if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
      throw new Error('El nombre del país no puede ser vacío');
    }
    if (this.#capital === undefined || this.#capital === null || this.#capital === '') {
      throw new Error('La capital del país no puede ser vacía');
    }
    return true;
  }
}