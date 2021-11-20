import './gridComponent.css';
import Lottie from 'react-lottie';
import Avion from '../../lottie/avion.json';
import Fish from '../../lottie/fish.json';
import EventElements from './EventElement';
import EventPrincipal from './EventPrincipal';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function GridComponent() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Avion,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultFish = {
    loop: true,
    autoplay: true,
    animationData: Fish,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="gridEs">
      <div className="containerPerso">
        <h2 className="title">Èvenements</h2>
        <Lottie
          style={{ zIndex: 3, position: 'absolute', gridColumn: 9, gridRowStart: 3, gridRowEnd: 10, width: 400 }}
          options={defaultOptions}
        />
        <Lottie
          style={{ zIndex: 3, position: 'absolute', gridColumnStart: 1, gridRowStart: 4, width: 400}}
          options={defaultFish}
        />

        <div className="item1">
          <Link to="/evenement" className='link2' >
            <EventElements type="right" />
          </Link>
        </div>

        <div className="item2">
          <Link to="/evenement" className='link2' >
            <EventElements type="left" />
          </Link>
        </div>

        <div className="item3">
          <Link to="/evenement" className='link2' >
            <EventElements type="right" />
          </Link>
        </div>

        <div className="item4">
          <Link to="/evenement" className='link2' >
            <EventElements type="left" />
          </Link>
        </div>

        <div className="item5">
          <Link to="/evenement" className='link2'>
            <EventElements type="right" />
          </Link>
        </div>

        <div className="item6">
          <Link to="/evenement" className='link2' >
            <EventElements type="left" />
          </Link>
        </div>

        <div className='item7'>
          <Link to="/evenement" className='link2' >
            <EventPrincipal />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default GridComponent;