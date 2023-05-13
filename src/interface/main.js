import { Country } from "../domain/country.js";
import { CountryList } from "../domain/countrylist.js";

const btnAdd = document.getElementById('btn_add');
const inpName = document.getElementById('inp_name');
const inpCapital = document.getElementById('inp_capital');

const mainCountryList = new CountryList();

btnAdd.addEventListener('click', () => {
  const newCountry = new Country(inpName.value);
  newCountry.setCapital(inpCapital.value);
  mainCountryList.add(newCountry);
  console.log(newCountry.presentar());
  loadCountryList();
} );

function loadCountryList(){
  const countries = mainCountryList.getCountries();
  let seccountries = document.getElementById('seccountries');
  
  for(let i = 0; i < countries.length; i++) {
    let country = countries[i];

    let infocountry = document.createElement("div")
    infocountry.className = "infocountry";
    infocountry.innerHTML = country.presentar();
    seccountries.appendChild(infocountry);

    let saltoLinea = document.createElement('br');
    seccountries.appendChild(saltoLinea);

  }
}