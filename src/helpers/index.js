
export const idGenerator = () => {
    const fecha = Date.now()
    const random = Math.random().toString(36).substring(2)
    return random + fecha
  }

  export const formatDate = (date) => {
    const newDate = new Date(date)
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }
    return newDate.toLocaleDateString('es-ES', options)
}