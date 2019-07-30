import React, { useState } from 'react';
import axios from 'axios';

import './Register.sass';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const {
        username,
        password
    } = formData;

    const onChange = evt => setFormData({ ...formData, [evt.target.name]: evt.target.value });

    const onSubmit = async evt => {
        evt.preventDefault();
        const newUser = {
            username,
            password
        };

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const body = JSON.stringify(newUser);
            const res = await axios.post('https://better-professor-app-backend.herokuapp.com/api/register', body, config);
            console.log(res);

        } catch (err) {
            console.error(err.response.data);
        }
    }
    // 
    return (
        <>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={evt => onSubmit(evt)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        minLength="6"
                        onChange={e => onChange(e)}
                        required />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
        </>
    );
};

export default Register;