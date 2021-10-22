import React from 'react';
import { Button } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, img, specialist } = doctor;


    return (
        <div className="col-lg-4 col-sm-6 col-12 mt-5 card  ">
            <img className="h-100 w-100" src={img} alt="" />
            <h5>Name: {name}</h5>
            <h5 className="text-warning">Specialist: {specialist}</h5>
            <Button variant="primary">Details</Button>
            <br />
            <br />

        </div>
    );
};

export default Doctor;