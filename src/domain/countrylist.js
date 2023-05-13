export class CountryList {

  #countries;

  constructor() {
    this.#countries = [];
  }

  add(country) {
    let countryInList = this.#countries.some(m => m.getNombre() == country.getNombre());
    if (!countryInList && country.isValid()) {
      this.#countries.push(country);
    } else {
      throw new Error(`No se pudo agregar. ${country.getNombre()} ya está en la lista.`);
    }
  }

  getCountries() {
    return this.#countries;
  }
}