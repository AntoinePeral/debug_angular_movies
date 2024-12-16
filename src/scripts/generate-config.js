const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

// Charger les variables depuis le fichier .env
const envConfig = dotenv.config().parsed;

if (!envConfig) {
  console.error('Le fichier .env est introuvable ou vide.');
  process.exit(1);
}

console.log('Variables chargées depuis .env :', envConfig);

// Transformer les variables en JSON
const jsonConfig = JSON.stringify(envConfig, null, 2);

// Écrire le fichier JSON dans src/assets/config.json
const outputPath = path.resolve(__dirname, '../assets/config.json');
fs.writeFileSync(outputPath, jsonConfig);

console.log(`Config.json généré avec succès : ${outputPath}`);
