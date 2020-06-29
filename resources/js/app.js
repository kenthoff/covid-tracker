const country_name_element = document.getElementById("NY");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

// APP VARIABLES
let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  deaths = [],
  formatedDates = [],
  ny_list = [];

let countryCode = geoplugin_countryCode();

// console.log(user_country);

fetch("https://covidtracking.com/api/v1/states/daily.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    ids = Object.keys(data);
    ids.forEach((id) => {
      let DATA = data[id];
      app_data.push(DATA);
      if (DATA["state"] == "NY") {
        cases_list.push(DATA.positive);
        recovered_list.push(DATA.recovered);
        deaths_list.push(DATA.death);
      }
    });

    let total_cases = cases_list[0];
    let total_recovered = recovered_list[0];
    let total_death = deaths_list[0];
    let new_death = deaths_list[0] - deaths_list[1];
    let new_cases = cases_list[0] - cases_list[1];
    let new_recovered = recovered_list[0] - recovered_list[1];

    country_name_element.innerHTML = "NY";
    total_cases_element.innerHTML = total_cases;
    new_cases_element.innerHTML = "+" + new_cases + " new";
    recovered_element.innerHTML = total_recovered;
    new_recovered_element.innerHTML = "+" + new_recovered + " new";
    deaths_element.innerHTML = total_death;
    new_deaths_element.innerHTML = "+" + new_death + " new";
  })
  .catch((error) => {
    console.log(error);
  });
