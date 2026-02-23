import React from 'react';
// import Hero from '../components/home/Hero';
// import ClientStrip from '../components/home/ClientStrip';
// import ServicesSection from '../components/home/ServicesSection';
// import CaseStudies from '../components/home/CaseStudies';
// import Testimonials from '../components/home/Testimonials';
// import ContactCTA from '../components/home/ContactCTA';
import HeroNewOld from '../components/home/HeroSection';
import Clients from '../components/home/About';
import ServicesTabs from '../components/home/OURCOREDIGITAL';
import VideoSection from '../components/home/VideoSection';
import TrafficGrowthSection from '../components/home/GrowthFramework';
import MeasurableImpactThatSpeaks from '../components/home/MeasurableImpactThatSpeaks';
import CaseStudySection from '../components/home/Future-ReadyMarketing';
import ClientTestimonials from '../components/home/ReadytoAccelerate';
import SearchTrendsReports from './Industry-Focused';
import GrowthPartner from '../components/home/GrowthPartner';
const Home = () => {
    return (
        <div className="home-page">
            {/* <Hero />
            <ClientStrip />
            <ServicesSection />
            <CaseStudies />
            <Testimonials />
            <ContactCTA /> */}
            <HeroNewOld/>
            <Clients/>
            <ServicesTabs/>
            <VideoSection/>
            <TrafficGrowthSection/>
            <MeasurableImpactThatSpeaks/>
            <CaseStudySection/>
            <SearchTrendsReports/>
            <GrowthPartner/>
            <ClientTestimonials/>
        </div>
    );
};

export default Home;
