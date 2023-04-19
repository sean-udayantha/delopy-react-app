import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
function App() {

  const [employee, setEmployee] = useState('');
  console.log("🚀 ~ file: App.js:8 ~ App ~ employee:", employee)

  useEffect(() => {

    const getAllEmployee = async () => {
        await axios.get(`https://dummy.restapiexample.com/api/v1/employees`).then((res) => {
          setEmployee(res.data.data);
        }).catch((err) => {
            console.log(err.massage);
        })
    }
    getAllEmployee(); 
}, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {employee.map((employee,index)=>(
             <p>
              {employee.employee_name}
             </p>


        ))}
       

             <p>
                update deploy test!
             </p>
      </header>
    </div>
  );
}

export default App;
