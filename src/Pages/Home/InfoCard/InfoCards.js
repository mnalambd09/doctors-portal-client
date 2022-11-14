import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const businessInfo = [
        {
            id: 1,
            title: 'Opening Hours',
            description: 'Opening at Morning 9am to Evening 5pm',
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            icon: clock,
        },
        {
            id: 2,
            title: 'Opening Hours',
            description: 'Opening at Morning 9am to Evening 5pm',
            bgClass: 'bg-accent',
            icon: marker,
        },
        {
            id: 3,
            title: 'Opening Hours',
            description: 'Opening at Morning 9am to Evening 5pm',
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            icon: phone,
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            {
                businessInfo.map(card =><InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;