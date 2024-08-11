// import React from 'react'

import AboutUsSection from "./Components/AboutUsSection/AboutUsSection"
import ServicesSection from "./Components/ServicesSection/ServicesSection"

const App = () => {
  return (
    <div className="bg-black min-h-screen px-[15%]" >

       {/* Services */}

        <div className="py-[7%]">
       <h1 className="text-white text-center pb-[2%] text-3xl font-mono tracking-wider">SERVICES</h1>
          <div className="space-x-4 flex">
            <ServicesSection/>
            <ServicesSection/>
            <ServicesSection/>
          </div>
        </div>

        {/* About Us */}
        <AboutUsSection/>

    </div>
  )
}

export default App

// import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Services from "./Components/ServicesSection/ServicesSection";
// import "./App.css"

// const App = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 1, 
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 2,
//       slidesToSlide: 1, 
//     },
//     mobile: {
//       breakpoint: { max: 767, min: 464 },
//       items: 2,
//       slidesToSlide: 1,
//     },
//   };

//   return (
//     <div className="bg-black min-h-screen px-[15%]">
//       <h1 className="text-white text-center pb-[2%] text-3xl font-mono tracking-wider">SERVICES</h1>
//       <Carousel className='caro' responsive={responsive} infinite>
//         {Services.map((service, index) => (
//           <div
//             key={index}
//             className="rounded-2xl w-[97%] flex justify-center items-end text-center slidr"
//             id="grad"
//             style={{ height: '300px' }}
//           >
//             <h1 className="text-slate-200 py-6">{service.serviceName}</h1>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   )
// }

// export default App;
