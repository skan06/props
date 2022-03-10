import './App.css';
import Navbr from './Components/Profile/Navbr';
import Data from './Components/Profile/Data';
import img1 from '../src/image/img1.jpg';

function App() {
  const dat=[{
    name:"Alice",
    age:26,
    bio:"hard worker",
    img:img1,
    parg:"In this present era entrepreneurs, freelancers, actors, musicians and people from different occupations want to showcase their work via an online presence. This is the best way to reach to the farthest corner of the world where at least internet access is available. To maintain online presence a personal website is a must. It helps to showcase a portfolio or a blog."

  }
]

  
  return (
    <div style={{backgroundColor: "black", color:"white"}}>
      <Navbr/>
      
    {dat.map((el)=>(<Data name={el.name} age={el.age} bio={el.bio} parg={el.parg}><img src={img1} alt=""/></Data>))}   
      
    
    </div>
    
  );
}

export default App;
