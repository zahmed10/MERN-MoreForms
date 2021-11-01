import React, { useState } from 'react';

const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const [firstError, setFirstError] = useState("");
    const [last, setLast] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirst = (e) => {
        setFirst(e.target.value);
        if(e.target.value.length < 2) {
            setFirstError("First name must be at least 2 characters ");
        } else {
            setFirstError("");
        }
    }

    const handleLast = (e) => {
        setLast(e.target.value);
        if(e.target.value.length < 2) {
            setFirstError("Last name must be at least 2 characters ");
        } else {
            setLastError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters ");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        if (password == confirmPassword) {
            
            setPassword(e.target.value);
        } else {

        }
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters ");
        } else {
            setPasswordError("");
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first, last, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	return "Thank you for submitting the form!";
	} else {
	return "Welcome, please submit the form";
	}
    };

    return(
        <div>

        {/* <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirst(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLast(e.target.value) } />
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form> */}
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirst } />
                {
                    firstError ?
                    <p style={{color:'red'}}>{ firstError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLast } />
                {
                    lastError ?
                    <p style={{color:'red'}}>{ lastError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
        {/* <h2>Your Form Data</h2>
        <p>First Name: {first}</p>
        <p>Last Name: {last}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmpassword}</p> */}

        </div>

        
    );
}

export default UserForm;



