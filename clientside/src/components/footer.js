import React from 'react';
const footerStyle = {
    justifyContent: "space-around"
}
const divStyle = {
    width: 'auto',
    paddingTop: '3%',
    paddingBottom: '3%'
}

const Footer = () => {
    return (
      <>
    
        <div className="d-flex mt-5" style={footerStyle}>
          <div style={divStyle}> 
            <h2>Contact</h2>
            <h6>+18004446574</h6>
            <h6>test@test.com</h6>
            <h6>Dallas,TX</h6>
            <h6>www.websites.com</h6>
          </div>

          <div style={divStyle}>
            <h2>Address</h2>
            <h6>+18004446574</h6>
            <h6>test@test.com</h6>
            <h6>Dallas,TX</h6>
            <h6>www.websites.com</h6>
          </div>

          <div style={divStyle}>
           <h2>About Us</h2>
           <h6>+18004446574</h6>
            <h6>test@test.com</h6>
            <h6>Dallas,TX</h6>
            <h6>www.websites.com</h6>
        </div>
         
        </div>
        </>
    );
};



export default Footer;