interface MS {
  MAAS: string;
}

export let MICROSERVICIOS = {} as MS;

const { origin } = window.location;

if (origin.toLowerCase().includes("localhost")) {
  MICROSERVICIOS = {
    MAAS: "http://localhost:4001",
  };
} else if (origin.toLowerCase().includes("egt")) {
  MICROSERVICIOS = {
    MAAS: "https://maas-backend.egt.cl",
  };
} else {
  MICROSERVICIOS = {
    MAAS: "https://maas-backend.egt.cl",
  };
}

export const MAPS_HERE = { // Api HERE de prueba de juanitoDEV
  API_KEY: "UaKQI4RrO3WIxMr8d5If",
  APPLICATION_ID: "",
  APPLICATION_CODE: ""
};

export const MAPS_MAPBOX = { // Api MAPBOX de prueba de juanitoDEV
  API_KEY: "pk.eyJ1IjoianVhbm1hbnNpbGxhYXNlbmpvIiwiYSI6ImNreHhoa3g3NWEyMHMydnEzbnRnOHc0cGEifQ.n58c_4B9zqcf100UmCjqEw",
  APPLICATION_ID: "",
  APPLICATION_CODE: ""
};

export const MAPS_GRAPHHOPER= { // Api GRAPHHOPER de prueba de juanitoDEV
  API_KEY: "26e7c5bc-15aa-484d-9b02-9a7e345491de",
  APPLICATION_ID: "",
  APPLICATION_CODE: ""
};

export const REQUEST_TIMEOUT = 30;
