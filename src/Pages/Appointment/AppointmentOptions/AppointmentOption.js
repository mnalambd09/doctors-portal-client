import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';


const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    // const [appointmentModal, setAppointmentModal] = useState([])
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-3xl text-center text-success">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="appointmentModal" disabled = {slots.length === 0} onClick={() => setTreatment(appointmentOption)} className="btn btn-primary text-white">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;