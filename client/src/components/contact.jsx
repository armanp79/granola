import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="contact-container" style={{marginTop: '110px'}}>
          <div className="contact-header" style={{textAlign:'center', padding: '30px'}}>
            <h1> CONTACT US</h1>
            <div> We would love to hear from you!</div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">

              <fieldset>
                <label>Name *</label>
                <div className="row" style={{justifyContent: 'space-between'}}>
                  <div className="col-6">
                    <label>
                      <input className="contact-input" type="textfield"></input>
                      <span style={{fontSize: '13px'}}>First Name</span>
                    </label>
                  </div>

                  <div className="col-6">
                    <label>
                      <input className="contact-input" type="textfield"></input>
                      <span style={{fontSize: '13px'}}>Last Name</span>
                    </label>
                  </div>

                </div>
              </fieldset>

              <div style={{marginTop:'15px'}}>
                <label>Email Address *</label>
                <input className="contact-input" type="textfield"></input>
              </div>

              <div style={{marginTop:'15px'}}>
                <label>Subject *</label>
                <input className="contact-input" type="textfield"></input>
              </div>

              <div style={{marginTop:'15px'}}>
                <label>Message *</label>
                <textarea className="contact-input" style={{minHeight: '100px'}}></textarea>
              </div>


              <button className="checkout-btn">SUBMIT</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;