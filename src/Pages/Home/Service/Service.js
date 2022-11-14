import React from 'react';

const Service = ({ service }) => {
    const { description, name, img } = service
    return (

        <div className=''>
            <div className='card rounded-lg'>
                <figure><img src={img} alt="Movie" /></figure>
            </div>
            <div className="card card-side shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-center text-2xl">{name}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;