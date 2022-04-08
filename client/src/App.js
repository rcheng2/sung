import React, { useState, useEffect } from 'react'
import Login from './components/Login';
import Logout from './components/Logout';
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch("/endpoint").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.names === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.names.map((nam, i) => (
          <p key={i}>{nam}</p>
        ))
      )}
      <div className="App">
        
        <h2>The Components way</h2>
        <Login />
        <br />
        <Logout />
        <br />
        <nav id="navbar"
          style={{
            color: '#9966ff',
            border: "solid 10px",
            padding: "10px",
          }}
        >
          <Link to="/home">Home</Link> |{" "}
          <Link to="/mylist">My List</Link> |{" "}
          <Link to="/profile">Profile</Link>
        </nav>
      
      
      </div>
    </div>
  )
}

export default App