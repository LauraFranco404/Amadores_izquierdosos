import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import About from './pages/Home/About/About';
import Stores from './pages/Home/Stores/Stores';
import Discover from './pages/Home/Discover/Disvover';
import Help from './pages/Home/Help/Help';
import Login from './pages/Home/Login/Login';
/*import Modal from './components/Modal/Modal';*/
function App(){

  return (
      <div className="App">
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/stores" element ={<Stores/>}/>
          <Route path="/discover" element = {<Discover/>}/>
          <Route path="/help" element = {<Help/>}/>
          <Route path="/login" element = {<Login/>}/>
          </Routes>
        
        {/*<Modal>
        </Modal>}*/}
        {/*<h1 className="Title">Hola, mundo</h1>
        {posts.map(p=> (
          <Container
          key ={p.id}
          name = " mi Jojito lindo"
          getData={getDataFromChild}
          />
        ))
        }*/}
      </div>

  );
}

export default App;
