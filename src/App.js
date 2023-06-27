import { useState } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import Report from './Components/Section/Report';

const cards =[{
  id:1,
  number:1,
  show:false,
  counter:0
},{
  id:2,
  number:2,
  show:false,
  counter:0
},{
  id:3,
  number:3,
  show:false,
  counter:0
},{
  id:4,
  number:4,
  show:false,
  counter:0
},{
  id:5,
  number:5,
  show:false,
  counter:0
},{
  id:6,
  number:6,
  show:false,
  counter:0
},{
  id:7,
  number:7,
  show:false,
  counter:0
},{
  id:8,
  number:8,
  show:false,
  counter:0
},
]

function App() {
  const [showReport, setShowReport] = useState(false)
  const handleClick =() => setShowReport(!showReport)
  return (
    <div className="App">
      <Section cards ={cards} />
      <button className='report'onClick={handleClick}>Report</button>
      {showReport ? <Report cards={cards} className="report"/>: null}
    </div>
  );
}

export default App;
