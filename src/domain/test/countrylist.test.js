import { Country } from "../country";
import { CountryList } from "../countrylist";

describe("CountryList class tests", () => {

    test ("Create an empty country list", () =>{
        let countryList = new CountryList();
        let expectedLength = 0;
        expect(countryList.getCountries().length).toBe(expectedLength);
    });

    test ("Add a country to the list", () =>{
        let countryList = new CountryList();
        let country = new Country("Uruguay");
        country.setCapital("Montevideo");
        countryList.add(country);
        let expectedLength = 1;
        expect(countryList.getCountries().length).toBe(expectedLength);
    });

    test ("Add a repeated country to the list", () =>{
        let countryList = new CountryList();
        let country = new Country("Uruguay");
        country.setCapital("Montevideo");
        countryList.add(country);
        let expectedErrorMessage = "No se pudo agregar. Uruguay ya está en la lista.";
        expect(() => countryList.add(country)).toThrow(expectedErrorMessage);
    });

    test ("Add an invalid country to the list", () =>{
        let countryList = new CountryList();
        let country = new Country("");
        let expectedErrorMessage = "El nombre del país no puede ser vacío";
        expect(() => countryList.add(country)).toThrow(expectedErrorMessage);
    });
});