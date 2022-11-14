import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css';


const Banner = () => {
    return (
        <div className="hero bg-img py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg m-12 shadow-2xl lg:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold ml-12"> Your New Smile Starts Here</h1>
                    <p className="py-6 ml-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                </div>

            </div>
        </div>
    );
};

export default Banner;