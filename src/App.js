import React, {useState} from 'react';
import './App.css';
import Services from './assets/services.json';

export default function App() {
  const [serviceInfo, setServiceInfo] = useState(Services);

  return (
    <div className="App">
      <div className='greeting-container'>
        <h1 className='title'>DANNY CONSTRUCTION</h1>
        <p className='p-text'>Home and business remodelling and repairs. Contact me to get a free quote today!</p>
      </div>

      <div className='stats-container'>
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

      <div className='button-container'>
        <button className='photo-button'>photo gallery</button>
      </div>

      <div className='services-container'>
        {serviceInfo.map((datum, i) => (
          <div className='service-card' key={i}>
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

      <div className='info-container'>
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

    </div>
  );
}
