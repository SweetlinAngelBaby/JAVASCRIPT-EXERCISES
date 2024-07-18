// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Print out all the cat names in to catNames variable.

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Fetch data from the cats API
fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Extract cat names from the data
    const catNames = data.map(cat => cat.name);

    // Print out all cat names
    console.log('Cat Names:', catNames);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });