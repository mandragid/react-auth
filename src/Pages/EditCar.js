import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../Components/Navigation";

const EditCar = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [carData, setCarData] = useState({});
  const { id } = useParams();

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    console.log(price);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
      .then((res) => {
        setCarData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("tidak dapat memuat");
      });
  };

  return (
    <div>
      <Navigation />

      {Object.entries(carData).length ? (
        <div>
          <input placeholder={carData.name} />
          <input placeholder={carData.category} />
          <input placeholder={carData.price} />
          <input type={"file"} placeholder={carData.image} />
          <button>
            <Link to="/discovery">Cancel</Link>
          </button>
          <button>Save</button>
        </div>
      ) : null}
    </div>
  );
};

export default EditCar;
