import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
     
    return (
        
        <section 
       
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='pr-10 bg-black text-white rounded-lg p-5'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;