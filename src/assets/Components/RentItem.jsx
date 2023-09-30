import React from 'react';
import { Link } from 'react-router-dom';

const RentItem = ({ image, title, year, transmission, mileage, price, id }) => {
    console.log(image)
  return (
    <div className="col-lg-4 col-md-6 mb-2">
      <div className="rent-item mb-4">
        <img className="img-fluid mb-4 car-image-size" src={image} alt={title} />
        <h4 className="text-uppercase mb-4">{title}</h4>
        <div className="d-flex justify-content-center mb-4">
          <div className="px-2">
            <i className="fa fa-car text-warning mr-1"></i>
            <span>{year}</span>
          </div>
          <div className="px-2 border-left border-right">
            <i className="fa fa-cogs text-warning mr-1"></i>
            <span>{transmission}</span>
          </div>
          <div className="px-2">
            <i className="fa fa-road text-warning mr-1"></i>
            <span>{mileage}</span>
          </div>
        </div>
        <Link className="btn btn-warning px-3" to={`/Booking/${id}`}>{price}</Link>
      </div>
    </div>
  );
};

// #1C1E32 bg pechay
export default RentItem;