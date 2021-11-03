import React, { useState, useEffect } from 'react';


const LogInForm = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const logIn = (e) => {
		e.preventDefault();

		//Check out axios - http://npmjs.com/package/axios
		const URL = `/api/user/login`
		fetch(URL,{ 
			method: 'post',	
			body: JSON.stringify({email, password}),
			headers: {
				'Content-Type': 'application/json'
			}	
		})
		.then(res =>{
			//get the response
			return res.json()
		})
		.then(data =>{
			//get and set data
			console.log( data)
			localStorage.setItem("token", data.token)
		}).catch(error => {
            console.log(error);
        })
	

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
	

	useEffect(() => {
		
	}, []);

	const getUser = () => {
		let token = localStorage.getItem("token")
		localStorage.setItem("token", token)
		const URL = `/api/user/getUser`
		fetch(URL,{ 
			method: 'get',	
			headers: {
				'Content-Type': 'application/json',
				'x-access-token' : token
			}	
		})
		.then(res =>{
		return res.json()
		}).catch(error => {
            console.log(error);
        })
	}

    return (
        <div className="container h-100 p-3">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
				</div>
				<div className="d-flex justify-content-center form_container">
				
					<form>
						<div className="input-group mb-3">
							<input type="text" name="email" className="form-control input_user" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
						</div>
                        
						<div className="input-group mb-2">
							<input type="password" name="password" className="form-control input_pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
						</div>
					
						<div className="d-flex justify-content-center mt-3 login_container">
						<button type="button" name="button" className="btn login_btn" onClick={(e) => getAppointments()}>Get Appt</button>
							<button type="button" name="button" className="btn login_btn" onClick={(e) => getUser()}>Get User</button>
				 	        <button type="button" name="button" className="btn login_btn" onClick={(e) => logIn(e)}>Log In</button>
				        </div>
					</form>
				</div>
			</div>
		</div>
	</div>
    );
};


export default LogInForm;


