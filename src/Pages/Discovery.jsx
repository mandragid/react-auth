import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import "./Register.css";
import axios from "axios";
import API from "../const/endpoint";

const Discovery = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    axios
      .get(API.GET_ADMIN_CAR, config)
      .then((res) => {
        setCars(res.data.cars);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navigation />
      {!!cars.length
        ? cars.map((item) => (
            <div className="discovery-container">
              <div className="card-container">
                <div className="img-container">
                  <img src={item.image} alt="gambarmobil" />
                </div>
                <div className="car-name">
                  <h1>{item.name}</h1>
                </div>
                <div className="car-price">
                  <h2>{item.price}</h2>
                </div>
                <div className="category">
                  <h3>{item.category}</h3>
                </div>
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Discovery;
