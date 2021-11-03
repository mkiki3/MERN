import React , { useState }from 'react';
import SignUp from '../signup'
import LogIn from '../login'

const PopUp = (props) => {
    const [toggle,setToggle] = useState(false)
    const popupStyle = {
        position: 'absolute',
        top: '35%',
        left: '35%'
    }

    if(props.name === 'SignUp'){
        return(
            <>
            <button onClick={() => setToggle(!toggle)}>{props.name}</button>
          {toggle && (<div style={popupStyle}><SignUp/> </div>)}
            </>
        )
    }
    else if(props.name === 'LogIn'){
        return(
        <>
        <button onClick={() => setToggle(!toggle)}>{props.name}</button>
      {toggle && (<div style={popupStyle}><LogIn/> </div>)}
        </>
    )
        }
}



export default PopUp;