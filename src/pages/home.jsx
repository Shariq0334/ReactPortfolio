import React from 'react';
import IMAGE from '../assets/images/shariq.jpg'

function Home() {
  return (
    <div className='container p-5'  >
      <div  className='text-center'>
        <img style={{borderRadius:"50%"}} width="200px" src={IMAGE} alt="" />
      </div>
      <h1 className='text-center'>Hello There</h1>
      <h1 className='text-center'>Shariq Riaz</h1>
      <h4 className='text-center'>I am a Front End Developer</h4>

      <p className='pt-5 mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum
        quaerat quidem tempora. Architecto dolorum sed illum iure inventore id.
        Rerum necessitatibus culpa molestiae assumenda. Aliquid ad magnam
        deserunt laboriosam eum dolores repellat ratione eius fugiat maxime
        facilis impedit explicabo molestias cumque non eligendi corporis,
        inventore vitae culpa itaque ducimus.
      </p>

      <h2 className='my-5'>SKILLS</h2>

      <p className='fs-4'>
        HTML, CSS, JAVASCRIPT, REACT, REDUX, ANGULAR, VUE, NODE, EXPRESS,
        FLUTTER, REACT NATIVE....
      </p>

      <h2 className='my-5'>EXPERIENCE</h2>

      <p className='ms-5'>
        FRONT END DEVELOPER AT SOME SOFTWARE HOUSE (Duration 6 Months)
      </p>
      <p className='ms-5'>
        BACK END DEVELOPER AT SOME SOFTWARE HOUSE (Duration 7 Months)
      </p>
      <p className='ms-5'>
        NODE END DEVELOPER AT SOME SOFTWARE HOUSE (Duration 4 Months)
      </p>
      <p className='ms-5'>
        MERN END DEVELOPER AT SOME SOFTWARE HOUSE (Duration 3 Months)
      </p>

      <h2 className='my-5'>PROJECTS</h2>

      <div className='card w-100'>
        <div className='card-body'>
          <h5 className='card-title'>Weather Api</h5>
          <p className='card-text'>
            This is the Weather api that tell the current weather.
          </p>
          <a href='#' className='btn btn-dark'>
            Check Code
          </a>
        </div>
      </div>

      <div className='card w-100'>
        <div className='card-body'>
          <h5 className='card-title'>This is another project</h5>
          <p className='card-text'>
            This is another project that is to created soon enough so stay
            tooned.
          </p>
          <a href='#' className='btn btn-dark'>
            Check Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
