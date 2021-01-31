import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [valid, setValid] = useState();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        setValid(validateEmail());
    };
    
    const onPassChange = (e) => {
        setPass(e.target.value)
    }

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div> 
            <form className="login-form">
                <input type='text' name='email' value={email} onChange={onEmailChange} placeholder='user@rapptrlabs.com'/>
                <input type='password' name="password" value={pass} onChange={onPassChange} placeholder='Password'/>
                <input type='submit' disabled={!valid} value='Login' name='submit-login' onClick={onSubmit}/>
            </form> 
        </div>
    )
}

export default Login;
