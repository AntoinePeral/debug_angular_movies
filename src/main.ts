import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {environment} from './environments/environment'

// Fonction pour charger la configuration depuis config.json
function fetchConfig(): Promise<void> {
  return fetch('/assets/config.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Impossible de charger le fichier config.json');
      }
      return response.json();
    })
    .then((config) => {
      // Remplir l'environnement avec les données de configuration
      environment.apiConfig = config;
      console.log('Configuration chargée :', config);
    })
    .catch((error) => {
      console.error('Erreur lors du chargement de la configuration :', error);
    });
}


fetchConfig().
  then(()=>{
    bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  })
  .catch((err)=>{
    console.error('Erreur pendant la préparation de la configuration :', err);
  })
