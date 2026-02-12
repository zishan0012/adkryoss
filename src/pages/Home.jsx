import React from 'react';
// import Hero from '../components/home/Hero';
// import ClientStrip from '../components/home/ClientStrip';
// import ServicesSection from '../components/home/ServicesSection';
// import CaseStudies from '../components/home/CaseStudies';
// import Testimonials from '../components/home/Testimonials';
// import ContactCTA from '../components/home/ContactCTA';
import HeroNewOld from '../components/home/HeroNewOld';
import Clients from '../components/home/Clients';
import ServicesTabs from '../components/home/ServicesTabs';
import VideoSection from '../components/home/VideoSection';
import TrafficGrowthSection from '../components/home/TrafficGrowthSection';
import AwardsSection from '../components/home/AwardsSection';
import CaseStudySection from '../components/home/CaseStudySection';
import ClientTestimonials from '../components/home/ClientTestinomials';
import SearchTrendsReports from './SearchTrendsReports';
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
            <AwardsSection/>
            <CaseStudySection/>
            <SearchTrendsReports/>
            <GrowthPartner/>
            <ClientTestimonials/>
        </div>
    );
};

export default Home;
