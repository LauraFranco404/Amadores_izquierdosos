import './App.css';
//import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import About from './pages/Home/About/About';
import Stores from './pages/Home/Stores/Stores';
import Discover from './pages/Home/Discover/Discover';
import Help from './pages/Home/Help/Help';
import Login from './pages/Home/Login/Login';
//import Modal from './components/Modal/Modal';

function App(){
  //const [showModal, setShowModal] = useState(true);

  /*const onCloseModal = () => {
    setShowModal(false);
  }
  */

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
        
        {/*{showModal === true && <Modal onClose={onCloseModal}/>}*/}

      </div>

  );
}
/*
const mapStateToProps = (state) =>{
  return{
    showModal:state.ui.showModal,
  };
}
*/
export default App;
