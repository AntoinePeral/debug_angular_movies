export interface ApiConfig {
  API_BASE_URL: string;
  API_AUTHORIZATION: string;
}

export const environment = {
  production: false,
  apiConfig: {} as ApiConfig// Les variables du fichier JSON seront chargées ici
};