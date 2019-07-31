import React, { useState } from 'react';
import StudentCard from './StudentCard';
import StudentForm from './StudentForm';
// import axios from 'axios';

export const StudentApp= () => {
    const [students, setStudents] = useState([
    ]);
// const addStudent = student => {
//   setStudents([...students, {...student, id: Date.now()}]);
// }
  //     useEffect( () => {
  //   // list of "students"
  //   axios.get('https://better-professor-app-backend.herokuapp.com/api/professor-student-info')
  //   .then (res => {
  //     console.log(res.data);
  //     // setStudents (res.data)
  //   })
  // }, [])


  return (
    <div className="App">
      <StudentForm setStudents = {setStudents}/>
      {students.map(student => <StudentCard student={student} key={student.email}/>)}
    </div>
  );
}
