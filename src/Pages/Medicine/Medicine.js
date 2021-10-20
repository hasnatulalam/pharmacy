import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Medicine = ({ medicine }) => {
    const { id, name, price, description, img } = medicine;
    return (
        <div className="service ms-5 me-5 shadow-md mt-5 py-5 px-5">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>

            <Link to={`/booking/${id}`}> <Button variant="success">Get  {name.toLowerCase()}</Button>

            </Link>
            <br />
            <br />



        </div>
    );
};

export default Medicine;