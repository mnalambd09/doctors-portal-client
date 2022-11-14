import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-3xl text-center text-success">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <PrimaryButton>BOOK APPOINTMENT</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;