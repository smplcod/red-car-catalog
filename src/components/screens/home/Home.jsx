import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import CarItem from "./car-item/Caritem.jsx";
import { cars as carsData } from "./cars.data.js";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";

function Home() {
  const [cars, setCars] = useState(carsData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/cars");
      const data = await response.json();
      setCars(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
