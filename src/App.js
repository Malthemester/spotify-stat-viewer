import { useEffect, useState } from 'react';
import './App.css';

import Authenticate from './Pages/Authorization'
import DisplayStats from './Pages/DisplayStats'

function App() {

  const [accessTime, setaccessTime] = useState(false)

  useEffect(() => {
    let expiresIn = new Date(Number(localStorage.getItem("expiresIn")))
    if (new Date() < expiresIn) {
      setaccessTime(true)
    }
  }, [])

  return (

    <div>
      {accessTime ? <DisplayStats /> : <Authenticate />}
    </div>
  );
}

export default App;
