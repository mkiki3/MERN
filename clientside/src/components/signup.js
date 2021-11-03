import React, { useState, useEffect } from 'react';


const RegistrationForm = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [fullname, setFullname] = useState('');

	const signUp = (e) =>{
		e.preventDefault();
	
		//Check out axios - http://npmjs.com/package/axios
		const URL = `/api/user/signup`
		fetch(URL,{ 
			method: 'post',	
			body: JSON.stringify({email, password,fullname}),
			headers: {
				'Content-Type': 'application/json'
			}	
		})
		.then(res =>{
			console.log('Response: ' + JSON.stringify(res)) // Check Network Chrome dev
		}).catch(error => {
            console.log(error);
        })

	}

	useEffect(() => {
	
	}, []);

	
    return (
        <div className="container h-100 p-3">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
				</div>
				<div className="d-flex justify-content-center form_container">
				
					<form>
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="email" className="form-control input_user" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
						</div>
                        <div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="fullname" className="form-control input_user"  onChange={(e)=> setFullname(e.target.value)} placeholder="full name"/>
						</div>
                        
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="password" className="form-control input_pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
						</div>
					
						<div className="d-flex justify-content-center mt-3 login_container">
				 	        <button type="button" name="button" className="btn login_btn" onClick={(e) => signUp(e)}>Sign Up</button>
				        </div>
					</form>
				</div>
			</div>
		</div>
	</div>
    );
};


export default RegistrationForm;


