import React from 'react';
import haircut from '../../assets/haircut.jpg'
import braids from '../../assets/braids.jpg'
import product from '../../assets/product.jpg' 
import dryer from '../../assets/blowdryer.jpg'
import hairdresser from '../../assets/hairdresser.jpg' 
import hourglass from '../../assets/hourglass.png'
import calendar from '../../assets/deadline.png'
import hair from '../../assets/wavyhair.png'
import shop from '../../assets/shop.jpg'
import hours from '../../utils/storeHours.json'
import serviceTypes from '../../utils/services.json'

const SectionStyle = {
    padding: '20%',
    width: '100%',
    color: 'white',
}

const listStyle = {
    listStyleType: 'none'
}


const Home = props => {
    return (
        <div>
        <div className="homepage-background" style={SectionStyle}>
          <div className="text-center"><h1>TIFFANY'S SALON</h1></div>
        </div>
          <Services/>
          <Gallery/>
          <hr className="solid "></hr>
          <div className="p-5 text-center">
            <div> <h1>Mission Statement</h1></div> 
            <p className=" mission-statement ">Our mission at Tiffany's Salon is to provide a friendly, personalized 
            service through a team of highly skilled and creative professionals. Teamwork is our most
            valuable asset which ensures our clients are always number one, and we strive to exceed your expectations.
            We celebrate women and men in their real, most raw, authentic brilliance, who believe in themselves and are 
            ready to step into the look they love. We employ hair products with some of the most natural and r
            ich ingredients because we believe you should never expect less.We strive to reach beyond the roots (of hair), 
            and into the refinement and healing of one’s core self.With a team of most sought after stylists and colorists, 
            the salon is known for its exceptional quality services.</p>
        </div>
          <hr className="solid "></hr>
          <div className="d-flex justify-content-between p-5">
            <div className="icon  d-flex justify-content-center"><img src={hourglass} alt="service"/></div>
            <div className="icon  d-flex justify-content-center"><img src={hair} alt="hairstyles"/></div>
            <div className="icon  d-flex justify-content-center"><img src={calendar} alt="appointments"/></div>
          </div>

          <div className="d-flex  justify-content-between p-5">
            <div className="shop"><img src={shop} alt="shop"/></div>
            <div className="p-5">
            <h3 className="text-center">HAIR.BEAUTY.STYLE</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum 
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium 
            nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt 
            ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum 
            maxime adipisci amet laborum. Perspiciat</p>
            </div>
          </div>
          <hr className="solid"></hr>
        </div>
    );
};

function Services(){
    const listOfHours = hours.map((daysOfWeek) =>
    <li key={daysOfWeek.id}>{daysOfWeek.day}</li>
    );
    
    const listOfServices = serviceTypes.map((service) =>
    <li key={service.id}>{service.type}</li>
    );
    
    return (
        <div  className="p-5">
          <div  className=" d-flex justify-content-around p-5 border">
          <div>
              <h2>Our Services</h2>
              <ul style={listStyle}>{listOfServices}</ul>
          </div>
          <div>
              <h2>Opening Hours</h2>
                <ul style={listStyle}>{listOfHours}</ul>
          </div>
          </div>
        </div>
      );
}

function Gallery(){
    return (
        <div className="p-5" >
        <div className="d-flex justify-content-between p-4">
          <div className="gallery"><img src={braids} alt="braids"/></div>
          <div className="gallery"><img src={product} alt="product"/></div>
          <div className="gallery"><img src={hairdresser} alt="hairdresser"/></div>
          <div className="gallery"><img src={dryer} alt="dryer"/></div>
          <div className="gallery"><img src={haircut} alt="haircut"/></div>
          </div>
        </div>
      );
}


export default Home;

