import { useMemo, useState } from "react";
import styles from "./Home.module.css";
import CarItem from "./car-item/Caritem.jsx";
import { cars } from "./cars.data.js";
// const cars = [];

function Home() {
  const [filter, setFilter] = useState("");
  const filteredCars = useMemo(
    () => cars.filter((car) => car.price > 20000),
    [filter]
  );
  return (
    <div>
      <h1>Cars catalog</h1>
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
