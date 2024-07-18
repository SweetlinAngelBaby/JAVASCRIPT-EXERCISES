// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.


const catsAPI = 'https://api.thecatapi.com/v1/breeds';

function convertToGrams(weight) {
    return weight * 1000; 
}

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const catsWithWeight = data.filter(cat => cat.weight.metric);

    const totalWeightGrams = catsWithWeight.reduce((sum, cat) => {
        return sum + convertToGrams(parseFloat(cat.weight.metric.split(' - ')[0]));
    }, 0);
    const averageWeightGrams = totalWeightGrams / catsWithWeight.length;

    console.log('Average Weight of Cats in Metric Units (grams):', averageWeightGrams.toFixed(2));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//  ***********************************

const countries1API = 'https://restcountries.com/v2/all';
fetch(countries1API)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const largestCountries = data
        .filter(country => country.area) 
        .sort((a, b) => b.area - a.area) 
        .slice(0, 10); 
    console.log('10 Largest Countries by Area:');
    largestCountries.forEach((country, index) => {
        console.log(`${index + 1}. ${country.name} - Area: ${country.area.toLocaleString()} square kilometers`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  // *************************************

  const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const officialLanguagesCount = {};

    data.forEach(country => {
      if (country.languages && Array.isArray(country.languages)) {
        country.languages.forEach(language => {
          if (language.official) {
            if (officialLanguagesCount[language.name]) {
              officialLanguagesCount[language.name]++;
            } else {
              officialLanguagesCount[language.name] = 1;
            }
          }
        });
      }
    });

    const totalOfficialLanguages = Object.keys(officialLanguagesCount).length;

    console.log('Total Number of Official Languages:', totalOfficialLanguages);
    console.log('Official Languages Counts:', officialLanguagesCount);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });