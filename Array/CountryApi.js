let data = [];
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
  


    
    let country = data;
    let asianCountryName = [];
    let lessPopulationName = [];

    let asianCountry = data.filter((item) => item.region == "Asia");
    asianCountry.map((item) => {
      asianCountryName.push(item.name.common);
    });
    console.log(asianCountryName);

    let population = data.filter((item) => item.population < 200000);
    population.map(item=> lessPopulationName.push(`${item.name.common} : ${item.population}`));
    console.log(lessPopulationName)

    country.forEach(item => {console.log(`Country Name : ${item.name.common} \nCapital : ${item.capital}\n`)
      
    });

  });
