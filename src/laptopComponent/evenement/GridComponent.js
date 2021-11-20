import './gridComponent.css';
import Nav from './Nav';
import Description from "./Description";
import Image from "./Image";
import Information from "./Info";

function GridComponent() {
  return (
    <div className="gridE">
      <div className="item-a"><Nav /></div>

      <div className="item-b"><Description /></div>

      <div className="item-c"><Image /></div>

      <div className="item-d"><Information /></div>

    </div>
  );
}

export default GridComponent;