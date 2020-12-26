import React from 'react';
import { images } from '../images/images.jsx';
import { Link, withRouter} from 'react-router-dom';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/confirmation');
  }

  render() {
    return(
      <div className="wrapper" style={{backgroundColor:'beige'}}>
      <div className="info-container" style={{padding:'20px'}}>


        <div className="row">
          <div className="col">
            <div className="checkout-header" style={{fontSize:'14px', marginBottom:'25px'}}>
              <h3>Granola Greg</h3>
              <span style={{color:'grey'}}>Information > Shipping ></span> <span>Payment</span> <span style={{color:'grey'}}> > Confirmation</span>
            </div>
            <div style={{marginBottom:'10px'}}><h4>Shipping To:</h4> 15265 Charlotte Ave., San Jose, CA, 95124</div>
            <div style={{marginBottom:'10px'}}><h4>Delivery Method:</h4> Ground Shipping 0.0001 bitcoin</div>
          <form>
          <fieldset className="form-group" style={{padding:'5px', border:'1px solid'}}>
            <label>Pay By Credit Card</label>
            <div style={{padding:'5px'}}><input type="text" className="form-control" placeholder="Card Number"></input></div>
            <div style={{padding:'5px'}}><input type="text" className="form-control" placeholder="Name On Card"></input></div>
            <div className="row style={{padding:'5px'}}">
              <div className="col"><input className="form-control" type="text" placeholder="Expiration Date (MM/YY)"></input></div>
              <div className="col"><input className="form-control" type="text" placeholder="Security Code"></input></div>
            </div>

          </fieldset>


          <div className="row">
            <div className="col"><Link to='/shipping'> &lt; Return to shipping</Link></div>

            <div className="col"><button onClick={this.handleClick} className="checkout-btn">make payment</button></div>
          </div>

        </form>

          </div>



          <div className="col-5" style={{minHeight:'100vh', borderLeft:'1px solid lightgrey'}}>
            <div style={{paddingRight:'50px', paddingLeft:'50px'}}>
              <h3>Cart</h3>

              <div className="row" style={{marginTop:'30px', padding:'10px'}}>
                <img src={images[5]} className="col"></img>
                <h4 className="col">Granola</h4>
                <h6 className="col">0.0002 bitcoins</h6>
              </div>
              <hr />
              <div className="row" style={{marginTop:'30px', padding:'10px'}}>
                <p className="col">Subtotal</p>
                <p className="col">0.0002 bitcoins</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(Payment);