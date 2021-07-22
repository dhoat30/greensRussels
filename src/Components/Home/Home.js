import React from 'react'
// import FormSection from './FormSection/FormSection'
import HeroSection from './HeroSection/HeroSection'
import MenuSection from './MenuSection/MenuSection'
import SecondBanner from './SecondBanner/SecondBanner'
// import HomeGallery from './HomeGallery/HomeGallery'
// import ThirdBanner from './ThirdBanner/ThirdBanner'
// import FAQSection from './FAQSection/FAQSection'
// import FourthBanner from './FourthBanner/FourthBanner'
// import TestimonialSection from './TestimonialSection/TestimonialSection'
import SloganSection from './SloganSection/SloganSection'
import USP from './USP/USP'
function Home() {
    return (
        <div>
            <HeroSection />
            <SloganSection />
            <MenuSection />
            <USP />
            <SecondBanner />
            {/* <FormSection />
            
         
            <HomeGallery />
            <ThirdBanner />
            <FAQSection />
            <FourthBanner />
            <TestimonialSection /> */}
        </div>
    )
}


export default Home
