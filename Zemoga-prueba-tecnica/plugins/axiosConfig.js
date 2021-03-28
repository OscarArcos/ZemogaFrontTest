export default function ({ $axios }) {
  // Asigna el URL dependiendo de si está en producción o desarrollo
  const url = 'http://localhost:4000/api/'
  // Se asignan los parámetros para todas las peticiones
  $axios.setBaseURL(url)
}
