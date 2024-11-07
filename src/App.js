import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import ElementTransfer from './components/ElementTransfer/ElementTransfer.js';
import InfiniteScroll from './components/Infinite-Scroll/InfiniteScroll.js';
import BoxGame from './components/box-game/BoxGame.js';
import ParentChildList from './components/parent-child/ParentChildList.js';
import SquareGrid from './components/square-box/SquareBox.js'


function App() {
  return (
    <div className="App">
      <NavBar /> 
      
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/scroll" element={<InfiniteScroll/>} />
       <Route path="/parentchild" element={<ParentChildList/>} />
       <Route path="/game" element={<BoxGame/>} />
       <Route path="/element" element={<ElementTransfer/>} />
       <Route path="/box" element={<SquareGrid />} />
     </Routes>
    </div>
  );
}

export default App;
function Home(){
  return(
    <div className='text-center mt-5'>
  <h5 >Please Click on the component titles mentioned in the Nav Bar to navigate to the tasks.</h5>
  </div>
)
}
