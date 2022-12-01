import React , {useState} from "react";
import "./style.css";
import Navbar from './Navbar'
import Shop from './Shop'

export default function App() 
{
  const [text,setText] = useState('Hello World');
  
  

  return (
    <div>
      <Navbar/>
      <Shop/>
    </div>
  );
}
