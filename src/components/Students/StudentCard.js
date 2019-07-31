import React from 'react';
import { Link } from 'react-router-dom'

//map over this card for Student INFO
const StudentCard = (props) =>{
    const { student } = props
    return (
        <div>
            {/* <div>{student.id}</div> */}
            <div>{student.firstname}</div>
            <div>{student.lastname}</div>
            <div>{student.email}</div>
            <Link to={`/edit/${student.id}`}>Edit</Link>
        </div>
    );
}

export default StudentCard