import React from 'react';

const Testmon = ({ testmon }) => {
    const { description, user, location, name } = testmon
    return (
        <section>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div className=" flex item-center  mt-6">
                        <div className="avatar mr-6">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user} alt="" />
                            </div>
                        </div>
                        <div>
                            <p>{name}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testmon;