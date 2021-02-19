import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Topheader from "./Components/Topheader/Topheader";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  const [resto, setResto] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [Cart, setCart] = useState([]);

  const fetchData = async () => {
    console.log("Fetching Data");
    try {
      const response = await axios.get(
        "https://delivroom-backend.herokuapp.com/"
      );
      setResto(response.data);
      setIsLoading(false);
      console.log("data fetched");
    } catch (e) {
      console.error("An error occured");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Topheader />
      <Header
        restoName={resto.restaurant.name}
        description={resto.restaurant.description}
        picture={resto.restaurant.picture}
      />
      <MainContent restoData={resto} cartData={Cart} setCart={setCart} />
    </div>
  );
}

export default App;
