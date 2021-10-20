
import React from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {

    const { id, name, price, description, img } = service;

    return (
        <div className="service ms-5 me-5 shadow-md ">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>

            <Link to={`/booking/${id}`}> <Button>Get  {name.toLowerCase()}</Button>

            </Link>



        </div>
    );
};

export default Service;