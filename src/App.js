import './App.css';
import Section from './Components/Section/Section';

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
  return (
    <div className="App">
      <Section cards ={cards} />
    </div>
  );
}

export default App;
