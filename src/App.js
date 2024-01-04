import React from 'react';
import Services from './assets/services.json';

export default function App() {
  let serviceInfo = Services;

  return (
    <div className='m-0 p-0 h-screen flex flex-col overflow-hidden'>
      <div className='top-info-section flex-grow bg-#RRGGBB overflow-hidden'>
        <div className='container mx-auto text-center p-2 m-10'>
          <p className='text-lg font-extrabold'>DANNY CONSTRUCTION</p>
          <p className='text-sm'>Home and business remodelling and repairs.</p>
          <p className='text-sm'>Contact me to get a free quote today!</p>
        </div>

        <div className='flex justify-evenly my-4'>
          <div className='stat-card'>
            <p className='stat-num subheading'>100+</p>
            <p className='stat-desc p-text'>completed projects</p>
          </div>
          <div className='stat-card'>
            <p className='stat-num subheading'>100+</p>
            <p className='stat-desc p-text'>completed projects</p>
          </div>
          {/* <div className='stat-card'>
            <p className='stat-num'>100+</p>
            <p className='stat-desc'>completed projects</p>
          </div> */}
        </div>

        <div className='button-container flex justify-center my-6'>
          <button className='photo-button px-4 py-2 border border-black rounded-lg'>photo gallery</button>
        </div>

        <div className='services-container flex flex-row'>
          {serviceInfo.map((datum, i) => (
            <div className='service-card w-1/3 h-auto flex-grow flex justify-center border border-black' key={i}>
              <div className='service-img'>
                {datum.img}
                {i}
              </div>
              <div className='service-txt'>
                <div className='service-title'>{datum.service}</div>
                <div className='service-desc p-text'>{datum.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='info-container flex flex-row justify-evenly overflow-y-auto scrollable-section'>
          <div className='info-card location-cont'>
            <p className='subheading info-card-title'>LOCATIONS SERVICED</p>
            <div className='info-card-content'>

            </div>
          </div>
          
          <div className='info-card contact-cont'>
            <p className='subheading info-card-title'>CONTACT</p>
            <div className='info-card-content'>
              
            </div>
          </div>
      </div>


      {/* PHOTO GALLERY */}
      <div className='bg-black h-10'>

      </div>

    </div>
  );
}