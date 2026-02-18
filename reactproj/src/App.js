import logo from './logo.svg';
import './App.css';
import { use, useEffect, useState } from 'react';
import jsonData from './data.json';

function App() {

  const [age, setAge] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = jsonData.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
  };
  useEffect(()=>{
    setSearchResults(jsonData);
  },[]);
  return (
    <>
      {/* <h1>This is a simple program on JSX</h1>
    <h1>We have a variable called age with value {age} </h1> */}

      <div className='container' style={{ marginTop: '20px' }}>
        <h1 className='display-5'>Search customer name</h1>
        <input
          type='text'
          placeholder='Search by name'
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul>
          {searchResults.map(item => (
            <li key={item.id}><strong>{item.name}</strong></li>
          ))}
        </ul>

      </div>
    </>
  );
}

export default App;
