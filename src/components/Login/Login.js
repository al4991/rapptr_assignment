import axios from 'axios';
import React, { useState, useContext } from 'react';
import { MdPerson, MdLock } from 'react-icons/md';
import IconInputWrapper from '../layout/IconInputWrapper';
import AppContext from '../../context/appContext';

const Login = () => {
    const appContext = useContext(AppContext); 
    const { login } = appContext;

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [validPass, setValidPass] = useState(false);
    const [authError, setAuthError] = useState(false);

    const onEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        validateEmail(e.target.value);
        setAuthError(false);
    };
    
    const onPassChange = (e) => {
        e.preventDefault();
        setPass(e.target.value)
        validatePass(e.target.value);
        setAuthError(false);
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setValidEmail(re.test(String(email).toLowerCase()));
    }
    
    const validatePass = (pass) => { 
        setValidPass(pass.length >= 4 && pass.length <= 16)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let url = "/Tests/scripts/user-login.php";
        let bodyFormData = new FormData(); 
        bodyFormData.append('email', email)
        bodyFormData.append('password', pass)
        const res = await axios.post(url,bodyFormData,{
            headers: { 
                'Accept' : 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded', 
            }
        })
        .catch(err => {
            console.log(err)
            setAuthError(true)
        })

        if (res && res.data && res.data.user_id) {
            setAuthError(false);
            login(res.data.user_id);
        }
    }
    
    return (
        <div className='login container'> 
            <form className="login-form">

                <h1> Rapptr Labs </h1> 

                <IconInputWrapper icon={<MdPerson />} title={"Email"} optError={!validEmail && email.length > 0 && <p className="error-message">Not a valid email</p>}>
                    <input 
                        className={`login-input ${email.length === 0 ? null : validEmail ? "valid" : "err" }`}
                        type='text' 
                        name='email' 
                        value={email} 
                        onChange={onEmailChange} 
                        placeholder='user@rapptrlabs.com'
                        maxLength='50'
                    />
                </IconInputWrapper>
                    
                <IconInputWrapper icon={<MdLock/>} title={"Password"} optError={!validPass && pass.length > 0 && <p className="error-message">Password not long enough</p>}>
                    <input 
                        className={`login-input ${pass.length === 0 ? null : validPass ? "valid" : "err"}`}
                        type='password' 
                        name="password" 
                        value={pass} 
                        onChange={onPassChange} 
                        placeholder='Must be at least 4 characters'
                        minLength='4'
                        maxLength='16'
                    />
                </IconInputWrapper>
                
                <div>
                    <input 
                        type='submit' 
                        disabled={!(validPass && validEmail)} 
                        value='Login' 
                        name='submit-login' 
                        onClick={onSubmit}
                    />
                    {authError && <p className="auth-error-message">Not a valid email/password combination</p>}
                </div>
               
            </form> 
        </div>
    )
}

export default Login;
