
export default function Home() {
  return (
    <>
      <header className="w-full sm:h-screen">
        <img src="/PAGINA WEB FONDO.png" alt="cuentahilos" className="w-full h-4/5" />

        <div className="sm:absolute top-2/3 sm:left-20 bg-white sm:bg-white/75 sm:p-5 p-3 md:rounded shadow-md">
          <h2 className="text-center text-cyan-500 md:text-2xl font-[Georgia] font-extrabold">Imprenta OFFSET, DIGITAL y GRAN FORMATO</h2>
        </div>

        <section className="p-3 m-1 bg-white rounded shadow-md text-center font-semibold sm:text-lg md:text-xl h-1/5 flex items-center">
          <p><span>Impresión Offset y digital </span><span>| Diseño gráfico </span><span>| Plotter Laser </span><span> | Trofeos </span><span> | Camisetas </span><span> | Lonas </span><span> | Roll Up </span><span> | Displays Cartas Restaurantes</span><span> | Vinilos y Rotulación </span><span> | Personalización de Regalos </span><span> | Metacrilatos </span><span> | Sellos de Caucho</span></p>
        </section>
      </header>

      <section id="quienes-somos" className="mx-auto container mt-8">
        <h3 className="w-full m-4 text-2xl text-white text-center underline font-bold font-[Georgia]">¿Quiénes somos?</h3>
        <div className="sm:flex justify-between items-center">
          <div className="w-full lg:w-1/3 h-96 rounded p-2 h-auto text-justify mx-auto text-sm md:text-lg font-[Georgia] bg-white/25 p-6 shadow-lg">
            <p>En Gráficas Genil, s.l. realizamos impresión de todo tipo de material gráfico con posibilidad de impresión en diferentes tamaños. Disponemos de la maquinara de imprenta offset y digital más avanzada del mercado. Estamos especializados en la pequeña y mediana empresa y como tal prestamos servicio de asesoramiento constante. Una buena impresión profesional con más de 25 años de experiencia.</p>
          </div>
          <img src="/PAGINA WEB ROLAND.png" alt="logo" className="w-1/2 h-full mx-auto mt-2" />
        </div>
      </section>

      <hr className="w-1/3 mx-auto mt-12" />

      <section id="diseño" className=" mx-auto container mt-12">
        <h3 className="w-full m-4 text-2xl text-white text-center underline font-bold font-[Georgia]">Diseño Gráfico</h3>
        <div className="sm:flex justify-between items-center">
          <img src="/PAGINA WEB DISEÑO.png" alt="diseño" className="w-1/3 h-full rounded shadow-lg mx-auto mb-2" />
          <div className="w-full lg:w-1/3 h-96 rounded p-2 h-auto text-justify mx-auto text-sm md:text-lg font-[Georgia] bg-white/25 p-6 shadow-lg">
            <p>Tenemos la posibilidad de diseñar tus necesidades desde nuestro departamento de Diseño gráfico, para realizar todos sus diseños fácilmente. También puede enviar su diseño directamente. Revisamos todos los archivos antes de poner en marcha su impresión para garantizar la mayor calidad y un acabado optimo.</p>
          </div>
        </div>
      </section>

      <hr className="w-1/3 mx-auto mt-12" />

      <section id="que-hacemos" className="flex justify-end mt-12">
        <img src="/PAGINA WEB KONICA.png" alt="logo" className="w-1/2" />
      </section>
    </>
  )
}
