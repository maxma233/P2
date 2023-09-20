// built-in file system
const fs = require('fs');
const Parser = require('./parser');
const Store = require('./store');

// Check if command line arguments are correctly form
if (process.argv.length !== 4) {
  console.error('Usage: node driver.js <path to JSON data file> <tag to search for>');
  process.exit(1);
}

// initialize argment 
const filePath = process.argv[2];
const tagToSearch = process.argv[3];


const store = new Store();
const parser = new Parser(store);

// Read the JSON data from the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  const jsonData = JSON.parse(data);

  // Call the parse method to start parsing the JSON data
  parser.parseFunction(jsonData, tagToSearch);

  // Output the result to stdout
  console.log(store.toString());
  
});
