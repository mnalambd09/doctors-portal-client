import React from 'react';
import Banner from '../../Pages/Home/Banner/Banner'
import AppointmentCard from './AppointmentCard/AppointmentCard';
import Contact from './Contact/Contact';
import Exceptional from './Exceptional/Exceptional';
import InfoCards from './InfoCard/InfoCards';
import Services from './Service/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentCard></AppointmentCard>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;