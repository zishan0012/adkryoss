import React from 'react';
import Hero from '../components/home/Hero';
import ClientStrip from '../components/home/ClientStrip';
import ServicesSection from '../components/home/ServicesSection';
import CaseStudies from '../components/home/CaseStudies';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ClientStrip />
            <ServicesSection />
            <CaseStudies />
            <Testimonials />
            <ContactCTA />
        </div>
    );
};

export default Home;
