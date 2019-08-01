import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

//creating form for students to input information
//please use StudentForm to render form on page
export const EditForm = ({ history }) => {

    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });

    const {
        firstname,
        lastname,
        email
    } = student;

    //setting target values
    const handleChange = event => {
        setStudent({ ...student, [event.target.name]: event.target.value });
    };

    //created eventlistener for submit aka onsubmit
    const handleSubmit = async evt => {
        evt.preventDefault();
        const newStudent = {
            firstname,
            lastname,
            email
        };

        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            };
            const body = newStudent;
            await axios.post('https://better-professor-app-backend.herokuapp.com/api/students', body, config);
            history.push('/dashboard');
        } catch (err) {
            console.error(err.response.data);
        }
    }

    //creating form
    return (
        <div className="formBorder">
            <h1 className="large text-primary">Edit Student</h1>
            <p className="lead"><i className="fas fa-user"></i>Please fill out all text inputs</p>
            <form onSubmit={evt => handleSubmit(evt)}>
                <div className="form-group">
                    <input placeholder='First Name'
                        value={student.firstname}
                        name="firstname"
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <input placeholder='Last Name'
                        value={student.lastname}
                        name="lastname"
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <input placeholder='Email'
                        value={student.email}
                        type="email"
                        name="email"
                        onChange={handleChange} />
                </div>

                <input type="submit" className="btn btn-primary" value="Make Changes" />
            </form>
        </div>
    );

}

export default withRouter(EditForm);