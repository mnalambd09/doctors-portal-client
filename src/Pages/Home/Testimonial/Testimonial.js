import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testmon from './Testmon';




const Testimonial = () => {

    const testimonialData = [
        {
            id: 1,
            name: 'Winson Herry',
            location: 'California',
            user: people1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            id: 2,
            name: 'Winson Herry',
            location: 'California',
            user: people2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            id: 3,
            name: 'Winson Herry',
            location: 'California',
            user: people3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]

    return (
        <div>
            <section className='flex justify-between p-10'>
                <div>
                    <h4 className='text-success font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className=' w-24 lg:w-48' alt="" />
                </div>



            </section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    testimonialData.map(testmon => <Testmon
                        key={testmon.id}
                        testmon={testmon}
                    ></Testmon>)
                }
            </div>
        </div>
    );
};

export default Testimonial;