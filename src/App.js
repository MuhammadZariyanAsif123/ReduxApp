import React , {useState} from "react";
import "./style.css";
import Home from './components/Home'

export default function App() 
{
  const [text,setText] = useState('Hello World');
  return (
    <div className= 'container'>
     <Home/>
     
    </div>
  );
}
