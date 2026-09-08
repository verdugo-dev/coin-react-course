export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 gap-4">
      <h1 className="font-crypto text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-2xl font-semibold text-gray-800">
        Este bloque no se encontró en la blockchain 🪪
      </p>
      <p className="text-gray-500 max-w-md">
        La página que buscas no existe en esta cadena. Tal vez alguien hizo un
        hard fork del enlace, o el minero perdió el bloque en el camino ⛏️
      </p>
      <a href="/" className="mt-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
        Volver al inicio 🚀
      </a>
    </div>
  )
}