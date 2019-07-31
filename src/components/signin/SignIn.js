import React, {useState} from 'react';
import axios from 'axios';
import '../../App.sass';

const SignIn = ({setAuth}) => {
    const [inputUser, setInputUser] = useState({
        username: '',
        password: ''
    });

    const {username, password} = inputUser;

    const handleChange = evt => setInputUser({...inputUser, [evt.target.name]: evt.target.value});

    const handleSubmit = async evt => {
        evt.preventDefault();
        const user = { username, password };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(user);
            const {data} = await axios.post('https://better-professor-app-backend.herokuapp.com/api/login', body, config);
            localStorage.setItem('token', data.token);
            setAuth(true);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="formBorder">
            <h1 className="large text-primary">Sign In </h1>
            <p>Sign in below to access your dashboard. Don’t have an account yet? <a className="createAcc"href="http://localhost:3000/register">Create one here.</a></p>
            <form className="form" onSubmit={evt => handleSubmit(evt)}>
                <div className="form-group">
                    <input 
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={evt => handleChange(evt)}
                        required />
                </div>
                <div className="form-group">
                    <input 
                        className="form-group"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={evt => handleChange(evt)}
                        required />
                </div>
                <input type="submit" className="btn btn-primary" value="Log In" />
            </form>
        </div>
    );
};

export default SignIn;