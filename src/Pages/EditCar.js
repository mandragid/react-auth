import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../Components/Navigation";

const EditCar = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [carData, setCarData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleEdit = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("status", false);

    axios
      .put(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
        formData,
        config
      )
      .then((res) => {
        console.log("edit berhasil");
        navigate("/discovery");
      })
      .catch((err) => {
        console.log("gagal edit");
      });
  };

  return (
    <div>
      <Navigation />

      {Object.entries(carData).length ? (
        <div>
          <input onChange={handleName} defaultValue={carData.name} />
          <input onChange={handleCategory} defaultValue={carData.category} />
          <input onChange={handlePrice} defaultValue={carData.price} />
          <input
            onChange={handleImage}
            type={"file"}
            placeholder={carData.image}
          />
          <button>
            <Link to="/discovery">Cancel</Link>
          </button>
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : null}
    </div>
  );
};

export default EditCar;
