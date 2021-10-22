import React from 'react';
import Doctor from '../Doctor/Doctor';

const doctors = [
    {
        img: 'https://i.ibb.co/f16CPJr/doctor14jpg.jpg',
        name: 'Khorsed Alam',
        specialist: 'Medicin'
    },
    {
        img: 'https://i.ibb.co/XWtVVPM/doctor11.jpg',
        name: 'Sakib Mahmud',
        specialist: 'Diabetes',

    },
    {
        img: 'https://i.ibb.co/VBZhWCy/doctor2.jpg',
        name: 'Rahnuma Akter',
        specialist: 'Child'
    }
]

const Doctors = () => {
    return (
        <div className="container shadow-md " id="doctors">
            <h2 className="text-primary mt-5">
                Our Doctors
            </h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor key={doctor.name} doctor={doctor}></Doctor>)
                }

            </div>



        </div>
    );
};

export default Doctors;