import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const findService = serviceDetails.find(singleService => singleService.id === parseInt(serviceId));

        setSingleService(findService)
    }, [serviceDetails])


    return (
        <div className="mt-5 py-5 service-container ">
            <div className="card service ms-5 px-5">
                <h1 className="mt-5 ">This is Service {serviceId}</h1>
                <img src={singleService?.img} alt="" />
                <h5>Name: {singleService?.name}</h5>
                <h6> Price: {singleService?.price}</h6>
                <strong> description: {singleService?.description}</strong>
                <br />
                <Button>Details</Button>
                <br />


            </div>


        </div>
    );
};

export default Booking;