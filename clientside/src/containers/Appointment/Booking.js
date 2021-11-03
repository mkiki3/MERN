import React, { useState, useEffect }  from 'react';

const divStyle = {
    paddingTop: '6%',
    paddingBottom: '8%',
    backgroundColor: '#f7f7f5'
}

const Booking = (e) => {
   //e.preventDefault();

	const [email, setEmail] = useState('temp@aolcom');
    const nameList = ['Leah Smith', 'Taylor Wells','Celina Wilson','Sena Cruz','Sara Johnson', 'Tyler Jones']
    let n =  nameList[Math.floor(Math.random() * nameList.length)];
    const [fullname, setFullname] = useState(n);
    const [appointmentType, setAppointment] = useState('haircut');
    let c = Math.floor(Math.random() * 10);
    const [cost, setCost] = useState(c);
    const [time, setTime] = useState('12:00');
    const [date, setDate] = useState('Oct2021');

    const book = (e) => {
    e.preventDefault();
    let token =  localStorage.getItem("token")
    const URL = `/api/appointment/createAppointment`
    fetch(URL,{ 
        method: 'post',	
        body: JSON.stringify({email,fullname,appointmentType,cost,time,date}),
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : token
        }	
    })
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        console.log('Data: ' + JSON.stringify(data))
    }).catch(error => {
        console.log(error);
    })
}

useEffect(() => {
    //const URL = `http://localhost:3001/api/user/kiki@aol.com`
}, []);

    return (
        <div style={divStyle}> 
             <div className="container p-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Questions? Book an Appointment</h2>
                        </div>
                        <form>
                
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="name">Name</label>
                                        <input id="name" name="name" type="text"  value={fullname} onChange={(e)=> setFullname(e.target.value)} placeholder="Name" className="form-control input-md"/>
                                    </div>
                                </div>
                         
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="email">Email</label>
                                        <input id="email" name="email" type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="E-Mail" className="form-control input-md"/>
                                    </div>
                                </div>
                     
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="date">Preferred Date</label>
                                        <input id="date" name="date" type="text" value={date} onChange={(e)=> setDate(e.target.value)} placeholder="Preferred Date" className="form-control input-md"/>
                                    </div>
                                </div>
                             
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="time">Preferred Time</label>
                                        <select id="time" name="time" className="form-control">
                                            <option value="time1">8:00 to 9:00</option>
                                            <option value="time2">9:00 to 10:00</option>
                                            <option value="time3">10:00 to 1:00</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="appointmentfor">Appointment Type</label>
                                        <select id="appointmentfor" name="appointmentfor" className="form-control">
                                            <option value="Service#1">Haircut</option>
                                            <option value="Service#2">Shampoo</option>
                                            <option value="Service#3">Braiding</option>
                                            <option value="Service#4">Silk Press</option>
                                            <option value="Service#4">Hair Dye</option>
                                        </select>
                                    </div>
                                </div>
                           
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-default"  onClick={(e) => book(e)}>Make An Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Why Appointment with Us</h2>
                        </div>
                        <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">24/7 Hours Available</h4>
                                <div className="feature-content">
                                    <p>Integer nec nisi sed mi hendrerit mattis. Vestibulum mi nunc, ultricies quis vehicula et, iaculis in magnestibulum.</p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Experienced Staff Available</h4>
                                <div className="feature-content">
                                    <p>Aliquam sit amet mi eu libero fermentum bibendum pulvinar a turpis. Vestibulum quis feugiat risus. </p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Low Price & Fees</h4>
                                <div className="feature-content">
                                    <p>Praesent eu sollicitudin nunc. Cras malesuada vel nisi consequat pretium. Integer auctor elementum nulla suscipit in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    );
};


export default Booking;