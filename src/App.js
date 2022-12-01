import React , {useState} from "react";
import "./style.css";
import Navbar from './Navbar'

export default function App() 
{
  const [text,setText] = useState('Hello World');
  
  

  return (
    <div>
      <Navbar/>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
