import React, {useEffect} from 'react';
import axios from 'axios';


const Dashboard = () => {
    const getStudents = async () => {
        const config = {
          headers: {
            authorization: localStorage.getItem("token")
          }
        };
        let res = await axios.get('https://better-professor-app-backend.herokuapp.com/api/professor-student-info', config);
    };
  
    useEffect(() => {
        getStudents();
    }, []);

    return (
        <div className="dashboard">
            
        </div>
    );
};

export default Dashboard;