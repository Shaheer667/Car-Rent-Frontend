import React, { useEffect, useState } from 'react';
import RentItem from '../Components/RentItem'; 
import 'bootstrap/dist/css/bootstrap.css';
import { getCars } from '../http';

const CarListing = () => {
  // Sample data for car listings
  const carListings = [
    {
      id: 1,
      image: "src/assets/img/car-rent-1.png",
      title: 'Mercedes Benz R3',
      year: '2015',
      transmission: 'AUTO',
      mileage: '25K',
      price: '$25.00/hr',
    },
    {
      id: 2,
      image: 'src/assets/img/car-rent-2.png',
      title: 'Mercedes Benz R3',
      year: '2015',
      transmission: 'AUTO',
      mileage: '25K',
      price: '$25.00/hr',
    },
    {
      id: 3,
      image: 'src/assets/img/car-rent-3.png',
      title: 'Mercedes Benz R3',
      year: '2015',
      transmission: 'AUTO',
      mileage: '25K',
      price: '$25.00/hr',
    },
    {
        id: 4,
        image: 'src/assets/img/car-rent-4.png',
        title: 'Mercedes Benz R3',
        year: '2015',
        transmission: 'AUTO',
        mileage: '25K',
        price: '$25.00/hr',
      },
      {
        id: 5,
        image: 'src/assets/img/car-rent-5.png',
        title: 'Mercedes Benz R3',
        year: '2015',
        transmission: 'AUTO',
        mileage: '25K',
        price: '$25.00/hr',
      },
      {
        id: 6,
        image: 'src/assets/img/car-rent-6.png',
        title: 'Mercedes Benz R3',
        year: '2015',
        transmission: 'AUTO',
        mileage: '25K',
        price: '$25.00/hr',
      },
    // Add more car listings here
  ];

  const [cars, setCars] = useState([]);

  useEffect(()=>{
    const load = async()=>{
      const {data} = await getCars();
      console.log(data)
      setCars(data)
    }
    load();
  },[])

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
        <div className="row">
          {cars.map((car) => (
            <RentItem
              key={car._id}
              id={car._id}
              image={car.image[0]}
              title={car.name}
              year={car.features[1]}
              transmission={"Auto"}
              mileage={car.features[0]}
              price={car.price}
            />
          ))}
          {/* {carListings.map((car) => (
            <RentItem
              key={car.id}
              image={car.image}
              title={car.title}
              year={car.year}
              transmission={car.transmission}
              mileage={car.mileage}
              price={car.price}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CarListing;