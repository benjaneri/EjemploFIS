import { Country } from "../domain/country.js";
import { CountryList } from "../domain/countrylist.js";

const btnAdd = document.getElementById('btn-add');
const inpName = document.getElementById('inp-name');
const inpCapital = document.getElementById('inp-capital');

const mainCountryList = new CountryList();

btnAdd.addEventListener('click', () => {
  const newCountry = new Country(inpName.value);
  const countriesErrorContainer = document.getElementById("add-countries-error");
  const countriesError = document.getElementById("add-countries-error-msg");
  
  newCountry.setCapital(inpCapital.value);
  try
  {
    mainCountryList.add(newCountry);
    cleanInputs();
    countriesErrorContainer.classList.add("d-none");
    loadCountryList(newCountry);
  }
  catch (error)
  {
    countriesErrorContainer.classList.remove("d-none");
    countriesError.innerText = error;
  }
});

function cleanInputs() {
  inpName.value = "";
  inpCapital.value = "";
}

function loadCountryList(newCountry) {
  const countriesList = document.getElementById("countries-list");
  const countriesContainer = document.getElementById("countries");
  
  try {
    document.getElementById("empty-list").remove();
  } catch (error) {
    console.log(error);
  }
  countriesContainer.classList.remove("d-none");
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = newCountry.presentar();
  countriesList.appendChild(li);
}