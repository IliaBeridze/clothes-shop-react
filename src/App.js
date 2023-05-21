import Mokdata from "./components/Mokdata.json";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Filter from "./components/Filter";
import { useState } from "react";

function App() {
const [mokData,setMokData]=useState({Mokdata})

function filteredData(mokdata) {
  setMokData(mokdata)
}

  return(<div className="App">
<Header />

<div className="hero-section">
<Filter filteredData={filteredData} Mokdata={Mokdata} />

<Card Mokdata={Mokdata} />
<button onClick={()=>{
  console.log(mokData)
}}>show Data</button>
</div>

  </div>)

}

export default App;
