import { useEffect } from 'react';
import Card from "../components/Card";
import AOS from 'aos';
import "aos/dist/aos.css";
import Budget from '../components/Budget';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

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

      <Card id="quienes-somos" aosStyle="fade-left" aosDuration="3000" title="¿Quiénes somos?" text="En Gráficas Genil, s.l. realizamos impresión de todo tipo de material gráfico con posibilidad de impresión en diferentes tamaños. Disponemos de la maquinara de imprenta offset y digital más avanzada del mercado. Estamos especializados en la pequeña y mediana empresa y como tal prestamos servicio de asesoramiento constante. Una buena impresión profesional con más de 25 años de experiencia." image="/PAGINA WEB CUENTA HILOS.png" left />

      <hr className="w-1/3 mx-auto mt-12" />

      <Card aosStyle="fade-right" aosDuration="3000" title="Diseño Gráfico" text="Tenemos la posibilidad de diseñar tus necesidades desde nuestro departamento de Diseño gráfico, para realizar todos sus diseños fácilmente. También puede enviar su diseño directamente. Revisamos todos los archivos antes de poner en marcha su impresión para garantizar la mayor calidad y un acabado optimo." image="/PAGINA WEB DISEÑO.png" right />

      <hr className="w-1/3 mx-auto mt-12" />

      <Card aosStyle="slide-up" aosDuration="3000" title="Flyers y Folletos publicitarios" text="Uno de los productos más solicitados son los flyers, trípticos y folletos totalmente personalizados tanto en diseño como en tamaño y calidades en el papel." image="/flyer.png" left />

      <hr className="w-1/3 mx-auto mt-12" />

      <Card aosStyle="fade-left" aosDuration="3000" title="Impresión Gran Formato" text="Imprimimos en gran formato tanto en bobina como en impresión directa esto no da la posibilidad de ofrecer las mejores calidades. Las tintas empleadas en su estampación tienen una garantía al exterior de 3 a 5 años." image="/PAGINA WEB ROLAND.png" right />



      <div className="mapouter" data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="gmap_canvas">
          <iframe className='w-2/3 h-80 mx-auto rounded-lg shadow-lg' id="gmap_canvas" src="https://maps.google.com/maps?q=Graficas%20Genil&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          <a href="https://123movies-to.org"></a>
        </div>
      </div>

      <Budget />

      <section className="w-full flex justify-between mt-12">
        <div className='mr-3 flex flex-end' data-aos="slide-right" data-aos-duration="3000">
          <img src="/PAGINA WEB laser.png" alt="corte-laser" />
        </div>
        <div className='mr-3' data-aos="slide-left" data-aos-duration="3000" >
          <img src="/PAGINA WEB KONICA.png" alt="impresora" />
        </div>
      </section>

    </>
  )
}
