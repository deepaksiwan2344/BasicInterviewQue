import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [capital, setCapital] = useState("");


  const fetchData = async () => {
    try {
      let apiendpoint = "https://restcountries.com/v3.1/all";
      const response = await axios(apiendpoint);
      let Data = response?.data;
      if (Data) {
        setData(Data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, [data]);

  const handleChange = (event) => {
    setCapital(event.target.value);
  };

  const filterData = () => {
    return data.filter((country) => {
      return (
        country.capital &&
        country.capital.toString().toLowerCase().includes(capital.toLowerCase())
      );
    });
  };
  
  
  const filteredCountries = filterData();
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="search..." onChange={handleChange} />
        {filteredCountries.map((item, index) => {
          return <ul style={{fontSize:"9px"}} key={index}>{item.capital}</ul>;
        })}
      </header>
    </div>

  );
}

export default App;
