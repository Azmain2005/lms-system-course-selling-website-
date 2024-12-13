// import React from 'react'
import {Hero, Navbar, Admission,LiveCourseBenefits,Testimonials,Footer, Gallery,TopBar} from "../Components/Index"
import "../App.css";
function Home() {
  return (
   <>
  <TopBar />
   <Navbar/>
   <Hero/>
   <Admission />
   <LiveCourseBenefits />
   <Testimonials />
    <Gallery />

   <Footer />
   </>
  )
}

export default Home