import React from 'react'

export default function Footer() {
  return (
    <div id="contacto" className='bg-white w-full h-44 flex items-center justify-around font-[Poppins] text-lg'>
      <img src="/logopequeño.png" alt="logo" className='w-24' />
      <div>
        <p className='font-semibold'>Gráficas Genil s. l.</p>
        <p className='flex items-center'><div><ion-icon name="logo-whatsapp"></ion-icon><span> 635 634 624</span></div></p>
        <p className='flex items-center'><div><ion-icon name="call-outline"></ion-icon><span> 958 28 38 08</span></div></p>
        <p className='flex items-center'><div><ion-icon name="location-outline"></ion-icon><span> C/ José Escritor España 23 <br></br><span className='ml-5'>18015 Granada</span></span></div></p>
        <p className='flex items-center'><ion-icon name="mail-outline"></ion-icon><span className='ml-1'>info@graficasgenil.es</span></p>
      </div>
    </div>
  )
}
