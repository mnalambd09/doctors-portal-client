import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../AppointmentOptions/AppointmentModal';
import AppointmentOption from '../AppointmentOptions/AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState()
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
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)

                }

            </div>
            {
                treatment &&
                <AppointmentModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;