import React, { useEffect, useState } from 'react';
import Medicine from '../Medicine/Medicine';

const Medicines = () => {
    const [medicines, setMedicines] = useState([])
    useEffect(() => {
        fetch('medicine.json')
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])
    return (
        <div>

            <div className="service-container">
                {
                    medicines.map(medicine => <Medicine key={medicine.id} medicine={medicine}></Medicine>)
                }

            </div>
            <br />

        </div>
    );
};

export default Medicines;