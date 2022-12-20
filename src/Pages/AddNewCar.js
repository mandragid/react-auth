import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../const/endpoint";

const AddNewCar = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
  };

  const HandleCreate = () => {
    useEffect(() => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          access_token: token,
        },
      };

      const form = new FormData();

      axios
        .post(API.POST_ADMIN_CAR, config)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  };

  return (
    <div>
      <input onChange={handleName} placeholder="Name" />
      <input onChange={handleCategory} placeholder="tipe mobil" />
      <input onChange={handleImage} type="file" />
      <button>
        <Link to="/discovery">Cancel</Link>
      </button>
      <button onClick={HandleCreate}>Save</button>
    </div>
  );
};

export default AddNewCar;
