import { useEffect, useState } from 'react';
import './App.css';
import AuthButton from './components/Authorization';

function App() {

  const [accessTime, setaccessTime] = useState(false)

  useEffect(() => {
    let expiresIn = new Date(Number(localStorage.getItem("expiresIn")))
    console.log(expiresIn)
    if (new Date() < expiresIn) {
      setaccessTime(true)
    }

  })

  return (
    <div className="main">
      {!accessTime && <AuthButton></AuthButton>}
    </div>
  );
}

export default App;
