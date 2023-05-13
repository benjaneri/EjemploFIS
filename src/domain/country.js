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
    this.#capital = aCapital
  }

  presentar() {
    return `País: ${this.#nombre} - capital: ${this.#capital}`;
  }

}