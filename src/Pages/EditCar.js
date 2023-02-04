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
  const [errorMessage, setErrorMessage] = useState();

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

  const getData = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    try {
      const res = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
        config
      );
      setCarData(res.data);
    } catch (error) {
      setErrorMessage(error.response.message);

      // console.log(error.response);
    }

    // axios
    //   .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    //   .then((res) => {
    //     setCarData(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("tidak dapat memuat");
    //   });
  };

  const handleEdit = async () => {
    if (!name.length) {
      setErrorMessage("Please input car name first.");
    } else if (!category.length) {
      setErrorMessage("Please input category first.");
    } else if (!price.length) {
      setErrorMessage("Please input price first.");
    } else {
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

      try {
        axios.put(
          `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
          formData,
          config
        );
      } catch (error) {
        console.log(error.response);
      }
    }

    // axios
    //   .put(
    //     `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
    //     formData,
    //     config
    //   )
    //   .then((res) => {
    //     console.log("edit berhasil");
    //     navigate("/discovery");
    //   })
    //   .catch((err) => {
    //     console.log("gagal edit");
    //   });
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
          {!!errorMessage && <p>{errorMessage}</p>}
        </div>
      ) : null}
    </div>
  );
};

export default EditCar;
