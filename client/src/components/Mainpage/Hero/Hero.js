import React from 'react';
import ParticlesComp from './ParticlesComp';
import Social from './Social';
import California from './California';
import C from './C';

const Hero = () => {

  return (

    <div id='hero' className='d-flex text-white pb-5 pb-md-0 m-0'>
      <div className='container-fluid px-3 pb-3'>

        <div className='filter-glow'>
          <ParticlesComp/>
        </div>

        <div className='row w-100 vh-100 mt-5 mt-md-0 mx-0'>

          <California/>
          <C/>
          <Social />

        </div>
      </div>

    </div>
  );
}

export default Hero;
