import React from 'react';


//map over this card for Student INFO
const StudentCard = (props) =>{
    const { student } = props
    return (
        <div>
            <div>{student.id}</div>
            <div>{student.firstname}</div>
            <div>{student.lastname}</div>
            <div>{student.email}</div>
        </div>
    );
}

export default StudentCard