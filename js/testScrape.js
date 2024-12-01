const scrapeParkingData = require('./js/scrape');

(async () => {
  const data = await scrapeParkingData();
  console.log('Scraped Data:', data);
})();

console.log(__dirname);

