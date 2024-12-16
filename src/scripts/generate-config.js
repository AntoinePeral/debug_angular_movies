const fs = require('fs');
const dotenv = require('dotenv');

// Charger les variables depuis le fichier .env
const envConfig = dotenv.config().parsed;

// Transformer les variables en JSON
const jsonConfig = JSON.stringify(envConfig, null, 2);

// Écrire le fichier JSON dans src/assets/config.json
fs.writeFileSync('./src/assets/config.json', jsonConfig);

console.log('config.json generated successfully!');
