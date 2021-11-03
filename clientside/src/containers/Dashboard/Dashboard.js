import React, { useState, useEffect }  from 'react';
import user from '../../assets/user.png'
import graph from '../../assets/graph.png'



const List = () => {
 const users = [
       {user: 'Leah',role: 'Dev',appointment: 'Locks'},
       {user: 'Alex',role: 'Admin',appointment: 'Wash'},
       {user: 'Sia',role: 'Dev',appointment: 'haircut'},
       {user: 'Lisa',role: 'Dev',appointment: 'Wash'},
       {user: 'Will',role: 'Dev',appointment: 'haircut'},
       {user: 'Ciara',role: 'Dev',appointment: 'Wash'},
]

return (
    <div>
      {users.map(data => (
        <div className="row"> 
            <div className="col">{data.user}</div>
            <div className="col">{data.role}</div>
            <div className="col">{data.appointment}</div>
        </div>      
      ))}
    </div>
  );


}

const getAppointments = () => {
   
    let token = localStorage.getItem("token")
    console.log('getallappt: ' + token)
    const URL = `/api/appointment/getAllAppointment`
    fetch(URL,{ 
        method: 'get',	
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : token
        }	
    })
    .then(res =>{
    return res.json()
    }).then(data =>{
        console.log('Get Appointment Data ' )
        console.log( data)
        localStorage.setItem("token", data.token)
    }).catch(error => {
        console.log(error);
    })
    
}


const Dashboard = () => {
    const containerStyle = {
       backgroundColor: '#f6f6f6',
       borderRadius: '4px',
       height: '100%'
    }
    const divStyle = {
        backgroundColor: 'white',
        width: '49%',
        borderRadius: '4px'
    }
    const mainStyle  = {
        backgroundColor: 'white',
        height: '120%',
        borderRadius: '4px'
    }
    const bottomStyle  = {
        backgroundColor: 'white',
        height: '120%',
        borderRadius: '4px'
    }
    const iconStyle = {
        fontSize : '36px'
    }
    const headerStyle = {
        color: 'grey'
    }
    const userStyle ={
        backgroundColor: 'lightBlue',
        height: '3%'
    }

    const dataStyle = {
        backgroundColor: 'green',
        height: '3%'
    }

    useEffect(() => {
        ///getAppointments()	
        let token = localStorage.getItem("token")
        console.log('useEffect: ' + token)
    }, []); 

    return (
        <div className="p-5" style={containerStyle}>
        <div className="row p-1 justify-content-between ">
           
            <div className="col-md-2 p-3 border" style={divStyle}>
                <h4>Users</h4>
                <div className="d-flex justify-content-end">
                  <img src={user} alt="user" width="30" height="30"/>
                 <h3>250</h3>  
                </div>
                <div className="d-flex justify-content-end">Number of User</div>
                <div className="d-block w-75 bg-primary" style={userStyle}></div>
            </div>

            <div className="col-md-2  p-3 border" style={divStyle}>
                <h4>Data</h4>
                <div className="d-flex justify-content-end">
                <img src={graph} alt="graph" width="30" height="30"/>
                <h3>$1,840</h3>  
                </div>
                <div className="d-flex justify-content-end">Data Analysis</div>
                <div className="d-block w-75 bg-primary" style={dataStyle}></div>
            </div>

        </div>
        <div className="row">
            <div className="row d-flex justify-content-center mt-4 mb-4 border" style={mainStyle}>
                <div className="col p-1">Number of Customers</div> 
                <div className="row">
                <div className="col p-1" style={headerStyle}>Username</div>
                <div className="col p-1" style={headerStyle}>Role</div>
                <div className="col p-1" style={headerStyle}>Appointment</div>
                </div>
                <div className="row"> <List/></div>
            </div>
        </div>
        <div className="row">
            <div className="col d-flex justify-content-center border" style={bottomStyle}></div>
            <button type="button" name="button" className="btn login_btn" onClick={(e) => getAppointments(e)}>Log In</button>
        </div>
        <div className="row">
            <div className="col d-flex justify-content-center border" style={bottomStyle}></div>
        </div>
        <div className="row">
            <div className="col d-flex justify-content-center border" style={bottomStyle}></div>
        </div>
  
  
  
        </div>
    );
};

export default Dashboard;

