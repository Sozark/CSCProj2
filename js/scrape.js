// This will contain the code to scrape the parking data from LSU's website.
const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeParkingData() {
  const url = 'https://www.lsu.edu/parking/availability.php';

  try {
    // Fetch the HTML from the URL
    const { data: html } = await axios.get(url);

    // Load the HTML into Cheerio
    const $ = cheerio.load(html);

    // Initialize an array to store parking data
    const parkingData = [];

    // Scrape table rows for parking lot data
    $('table tbody tr').each((index, element) => {
      const lotName = $(element).find('td:nth-child(1)').text().trim();
      const availability = $(element).find('td:nth-child(2)').text().trim();
      const day = $(element).find('td:nth-child(3)').text().trim();

      // Push each parking lot data object into the array
      parkingData.push({ lotName, availability, day });
    });

    return parkingData;
  } catch (error) {
    // Handle any errors that occur during scraping
    console.error('Error fetching or parsing data:', error);
  }
}

module.exports = scrapeParkingData;
