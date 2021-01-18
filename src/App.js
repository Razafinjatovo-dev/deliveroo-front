import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Topheader from './Components/Topheader/Topheader';
import Header from './Components/Header/Header';
import MainContent from'./Components/MainContent/MainContent';


function App() {

  const [resto, setResto] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Données-Composition Panier
  const cartContent = [
    {id: "151923", title: "Maskita", price: 10, quantity:1},
    {id: "234567", title: "Vary@anana", price: 10, quantity:1},
    {id: "153455", title: "Sôsisy", price: 10, quantity:1},
] 
  const [Cart, setCart] = useState([]);

 
  const fetchData = async () => {
    console.log("Fetching Data")
    try{
      const response = await axios.get('https://deliveroom-backend.herokuapp.com/');
      setResto(response.data);
      setIsLoading(false);
      console.log("data fetched")
    }catch(e){
      console.error("An error occured")
    }
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  ;
  
  // console.log(resto.restaurant.description)
  
  // console.log(resto.categories[0]);
    

  return isLoading ? (<span>En cours de chargement...</span>) : (
    <div className="App">
      <Topheader/>
      <Header 
        restoName = {resto.restaurant.name}
        description = {resto.restaurant.description}
        picture = {resto.restaurant.picture}  
      />
      <MainContent restoData = {resto} cartData={Cart} setCart={setCart}/>
    </div>
  );
}

export default App;
