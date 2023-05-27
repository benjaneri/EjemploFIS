import { Country } from "../country";

describe('Country class tests', () => {

    test ("Create a country", () =>{
        let country = new Country("Uruguay");
        let countryName = country.getNombre();
        let expectedName = "Uruguay";
        expect(countryName).toBe(expectedName);
    });

    test ("Invalid null country name", () =>{
        let country = new Country(null);
        let expectedErrorMessage = "El nombre del país no puede ser vacío";
        expect(() => country.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Invalid undefined country name", () =>{
        let country = new Country(undefined);
        let expectedErrorMessage = "El nombre del país no puede ser vacío";
        expect(() => country.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Invalid empty country name", () =>{
        let country = new Country("");
        let expectedErrorMessage = "El nombre del país no puede ser vacío";
        expect(() => country.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Invalid null country capital", () =>{
        let country = new Country("Uruguay");
        country.setCapital(null);
        let expectedErrorMessage = "La capital del país no puede ser vacía";
        expect(() => country.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Invalid undefined country capital", () =>{
        let country = new Country("Uruguay");
        country.setCapital(undefined);
        let expectedErrorMessage = "La capital del país no puede ser vacía";
        expect(() => country.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Invalid empty country capital", () =>{
        let country = new Country("Uruguay");
        country.setCapital("");
        let expectedErrorMessage = "La capital del país no puede ser vacía";
        expect(() => country.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Valid country", () =>{
        let country = new Country("Uruguay");
        country.setCapital("Montevideo");
        expect(country.isValid()).toBe(true);
    });

    test ("ToString country", () =>{
        let country = new Country("Uruguay");
        country.setCapital("Montevideo");
        let expectedString = "País: Uruguay - capital: Montevideo";
        expect(country.toString()).toBe(expectedString);
    });
});