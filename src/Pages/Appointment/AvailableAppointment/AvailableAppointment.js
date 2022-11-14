import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOptions/AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOption, setAppointmentOption] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])
    return (
        <div className='my-10'>
            <p className='text-secondary font-bold text-center mb-5'>Available appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption = {option}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;