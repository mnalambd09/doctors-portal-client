import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment; // treatment is appointment options just different name
    const date = format(selectedDate, 'PP')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const patient = form.patient.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            name,
            patient,
            slot,
            email,
            phone,
        }
        console.log(booking)
        setTreatment(null)
    }

    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="appointmentModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="appointmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{name}</h3>
                        <input type="text" placeholder="Type here" defaultValue={date} disabled className="input my-2 input-bordered w-full" />
                        <select name='slot' className="select select-bordered my-2 w-full">

                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Yout Name" name='patient' className="input my-2 input-bordered w-full" />
                        <input type="text" placeholder="Email" name='email' className="input my-2 input-bordered w-full" />
                        <input type="text" placeholder="Phone" name='phone' className="input my-2 input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full mt-2' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;