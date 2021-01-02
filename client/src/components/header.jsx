import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <img src={"/logo.png"} style={{objectFit:'cover', position:'absolute', zIndex: '1', width: '350px', height: '150px'}} />
        <img src={"/bike.jpg"} style={{objectFit:'cover', zIndex: '0', width: '100%', height: '150px'}} />
      </div>

    );
  }
}

export default Header;