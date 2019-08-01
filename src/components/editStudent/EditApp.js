import React, { useState } from 'react';
import EditCard from './EditCard';
import {EditForm} from './EditForm';
// import axios from 'axios';

export const EditApp= () => {
    const [students, setStudents] = useState([
    ]);

  return (
    <div className="App">
      <EditForm setStudents = {setStudents}/>
      {students.map(student => <EditCard student={student} key={student.email}/>)}
    </div>
  );
}
