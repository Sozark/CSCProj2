//This will contain the code in order to scrape the parking data from LSU's website. 

const axios = require('axios'); 
const cheerio = require('cheerio'); 
async function scrapeParkingData() {
    const url = 'https://www.lsu.edu/parking/availability.php'; 
}

 try {
    const {data: html} = await axios.get(url); 
    const $ = cheerio.load(html); 
    const parkingData []; 
 }

  $('table tbody tr').each((index, element) => {
    const lotName = $(element).find('td.nth-child(1)').text().trim(); 
    const availability = $(element).find('td.nth-child(2)').text().trim(); 
    const day = $(element).find('td.nth-child(3)').text().trim(); 

    parkingData.push({ lotName, availability, day});

}); 
  return parkingData;
 catch(error) {
    console.error('Error fetching or parsing data:', error);
}
module.exports = scrapeParkingData; 
