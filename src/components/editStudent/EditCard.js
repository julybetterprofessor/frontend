import React from 'react';
import { Link } from 'react-router-dom'

//map over this card for Student INFO
const EditCard = (props) =>{
    const { student } = props
    return (
        <div>
            {/* <div>{student.id}</div> */}
            <div>{student.firstname}</div>
            <div>{student.lastname}</div>
            <div>{student.email}</div>
            <p>Hello World</p>
        </div>
    );
}

export default EditCard