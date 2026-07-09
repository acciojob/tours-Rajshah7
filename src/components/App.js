import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { data } from "./data"

const url = "https://course-api.com/react-tours-project";

const App = () => {

  const [loading ,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try{
      setTimeout(() => {
        setTours(data);
      setLoading(false);
      },2000);
      
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  },[]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  

  if(loading){
    return <Loading />
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return(
    <main id="main">
        <Tours tours={tours} removeTour={removeTour} />

    </main>
  )
}
export default App;
