import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarItem from "../home/car-item/Caritem";
import { CarService } from "../../../services/car.service.js";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await CarService.getById(id);
      console.log(data);
      setCar(data);
    };
    fetchData();
  }, [id]);

  if (!car?.name) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">Back</Link>
      <CarItem car={car} />
    </div>
  );
};

export default CarDetail;
