import React from 'react';
import background from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{
            background:`url(${background})`
        }}>
            <div className='text-center my-10 py-10'>
                <p className='text-success font-bold'>Contact Us</p>
                <h2 className='text-4xl text-white'>Stay Connected With Us</h2>
            </div>
            <div>
                <div className="hero">
                    <div className="hero-content">
                        <div className="card w-full shadow-2xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="Email" className="input input-xs input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Subject" className="input input-xs input-bordered" />
                                </div>
                                <textarea className="textarea textarea-primary" placeholder="Your Message"></textarea>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;