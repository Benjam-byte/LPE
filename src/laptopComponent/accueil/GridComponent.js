import './gridComponent.css';
import Event from './Event';
import DrawAcc from './DrawAcc';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function GridComponent() {
  return (
    <div className="gridA">
      <div className="drAc"><DrawAcc/></div>
      <h1 className="titleA">Prochain évenements</h1>
      <div  className="item-A"><Link to="/evenement" className='link2' ><Event/> </Link></div>
      <div className="item-B"><Link to="/evenement" className='link2' ><Event /></Link></div>
      <div  className="item-C"><Link to="/evenement" className='link2' > <Event/></Link></div>
      
      
   
    </div>
  );
}

export default  GridComponent;