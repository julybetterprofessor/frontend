import React, { useState } from 'react';

//creating form for students to input information
//please use StudentForm to render form on page
export const StudentForm = (props) => {
    const { setStudents } =props;
    //use state takes these empty values until manually adding values
    const [student, setStudent] = useState({
        // id: '',
        firstname: '',
        lastname: '',
        email:'',

    });

    //setting target values
    const handleChange = event =>{
        setStudent({...student, [event.target.name] : event.target.value});
    };

    //created eventlistener for submit aka onsubmit
    const handleSubmit = event => {
        event.preventDefault();
        console.log(student)

        setStudents(students => [...students, student])
        setStudent({
            // id: '',
            firstname: '',
            lastname: '',
            email:'',
    
        })
    }

    //creating form
    return(
        <form onSubmit={handleSubmit}>
            {/* <input placeholder='id'/> */}
            <input placeholder='firstname' 
                    value={student.firstname}
                    name="firstname"
                    //see variable above
                    onChange={handleChange}/>
            <input placeholder='lastname' 
                    value={student.lastname}
                    name="lastname"
                    onChange={handleChange}/>
            <input placeholder='email' 
                    value={student.email}
                    type = "email"
                    name="email"
                    onChange={handleChange}/>
            
            <button type = 'submit'>Submit Information</button>
            
        </form>
    );

}

export default StudentForm