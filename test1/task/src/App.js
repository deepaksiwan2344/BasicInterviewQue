import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

 



function App() {
  const [data, setData] = useState([]);
  const [capital, setCapital] = useState("");

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const handleChange = (event) => {
    setCapital(event.target.value);
  };

  const filterData = () => {
    return data.filter((country) => {
      return country.capital && country.capital.toString().toLowerCase().includes(capital.toLowerCase());
    });
  };

  const filteredCountries = filterData();


  return (
    <div className="App">
      <header className="App-header">
      <input
        type="text"
        placeholder="search..."
        onChange={handleChange}
      />
      {filteredCountries.map((item, index) => {
        return (
          <ul key={index}>
            {item.capital}
          </ul>
        );
      })}
      </header>
    </div>
  );
}

export default App;
