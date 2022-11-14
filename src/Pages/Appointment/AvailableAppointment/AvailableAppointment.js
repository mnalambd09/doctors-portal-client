import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
            <p className='text-secondary font-bold text-center'>Available appointment on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;