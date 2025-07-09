// Definimos un tipo para las coordenadas
type Coordenadas = {
  latitude: number;
  longitude: number;
};

// Diccionario de ciudades de Ecuador con sus coordenadas
const ciudadesEcuador: Record<string, Coordenadas> = {
  "quito": { latitude: -0.22985, longitude: -78.52495 },
  "guayaquil": { latitude: -2.170998, longitude: -79.922359 },
  "cuenca": { latitude: -2.90055, longitude: -78.99808 },
  "manta": { latitude: -0.967653, longitude: -80.708909 },
  "loja": { latitude: -3.99313, longitude: -79.20422 },
  "ambato": { latitude: -1.24167, longitude: -78.61973 },
  "portoviejo": { latitude: -1.05413, longitude: -80.45249 },
  "machala": { latitude: -3.25861, longitude: -79.95559 },
  "esmeraldas": { latitude: 0.96818, longitude: -79.65172 },
  "ibarra": { latitude: 0.35171, longitude: -78.12233 },
  "riobamba": { latitude: -1.66355, longitude: -78.65465 },
  "tena": { latitude: -0.99144, longitude: -77.81278 },
  "puyo": { latitude: -1.48273, longitude: -77.99367 },
  "santo domingo": { latitude: -0.25306, longitude: -79.17536 },
  "latacunga": { latitude: -0.933333, longitude: -78.616667 }
};

export default ciudadesEcuador;