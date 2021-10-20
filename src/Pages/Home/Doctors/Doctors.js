import React from 'react';
import Doctor from '../Doctor/Doctor';

const doctors = [
    {
        img: 'https://image.shutterstock.com/image-photo/doctor-wearing-medical-mask-gloves-260nw-1675175770.jpg',
        name: 'Abdul Hosain',
        specialist: 'Heart'
    },
    {
        img: 'https://doctoryouneed.org/wp-content/uploads/2020/01/Dr.-Md.-Noor-Uddin-Tareq.jpg',
        name: 'Nur Uddin Tarek',
        specialist: 'Diabetes',

    },
    {
        img: 'https://st.depositphotos.com/1771835/1477/i/950/depositphotos_14779771-stock-photo-portrait-of-confident-young-doctor.jpg',
        name: 'Rashed Mirzada',
        specialist: 'Medicine'
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