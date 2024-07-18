// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.

const countriesAPI = 'https://restcountries.com/v2/all';

// Fetch data from the countries API
fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process each country object
    data.forEach(country => {
      const { name, capital, languages, population, area } = country;
      
      // Print country details
      console.log('Country:', name);
      console.log('Capital:', capital || 'N/A'); // Handle case where capital is null
      console.log('Languages:', languages.map(lang => lang.name).join(', '));
      console.log('Population:', population.toLocaleString());
      console.log('Area:', area.toLocaleString(), 'square kilometers');
      console.log('------------------------');
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });