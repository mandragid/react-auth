import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

  //   const handleCreate = () => {
  //     useEffect(() => {
  //       const token = localStorage.getItem("token");

  //       axios
  //         .post("https://bootcamp-rent-cars.herokuapp.com/admin/car")
  //         })
  //         .then((res) => {
  //           setCars(res.data.cars);
  //           console.log(res.data);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     }, []);
  //   };

  return (
    <div>
      <input onChange={handleName} placeholder="Name" />
      <input onChange={handleCategory} placeholder="tipe mobil" />
      <input onChange={handleImage} type="file" />
      <button>
        <Link to="/discovery">Cancel</Link>
      </button>
      {/* <button onClick={handleCreate}>Save</button> */}
    </div>
  );
};

export default AddNewCar;
