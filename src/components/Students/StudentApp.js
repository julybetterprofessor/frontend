import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import StudentCard from './StudentCard'
import StudentForm from './StudentForm'
import axios from 'axios'


export const StudentApp= () => {
    const [students, setStudents] = useState([
    ]);


//       useEffect( () => {
//     // list of "students"
//     axios.get('https://better-professor-app-backend.herokuapp.com/api/login')
//     .then (res => {
//       console.log(res.data);
//       // setStudents (res.data)
//     })
//   }, [])


  return (
    <div className="App">
      <StudentForm setStudents = {setStudents}/>
      {students.map(student => <StudentCard student={student} key={student.email}/>)}
    </div>
  );
}
