import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="container-fluid">
      <div style={{marginTop:'20%', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
        <div>
          <h4><em>Congratulations, your order has been placed!</em></h4>
          <br />
          <Link to='/shop'>Return to the Shop</Link>
        </div>
      </div>
    </div>
  )
};

export default Confirmation;
