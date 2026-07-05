import React, { useState } from 'react'
import axios from 'axios'

function App() {

  let [username, setUsername] = useState(null)
  let [age, setAge] = useState(null)

  async function getRes() {

    // const res = await fetch("http://localhost:8000/")
    // let data = await res.json()

    // data
    //   .then((e) => {
    //     console.log(e.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   })
    //axios is used to easily handle the api req

    //axios.post for sending the data to the server

    axios.post("http://localhost:8000/", {
      // username: username,
      // age: age
      //or
      username,
      age
      //since the key and value have the same value
    })
      .then((e) => {
        console.log(e.data);
      })
      .catch((e) => {
        console.log(e)
      })
  }


  return (
    <div>
      <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />

      <button onClick={() => getRes()}>send</button>
    </div>
  )
}

export default App