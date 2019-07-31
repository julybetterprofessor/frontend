import React, {useEffect} from 'react';
import axios from 'axios';


const Dashboard = () => {
    const getStudents = async () => {
        console.log('getStudents has been run!');
        const config = JSON.stringify({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('professor')
            }
        });
        console.log(config);
        let res = await axios.get( 'https://better-professor-app-backend.herokuapp.com/api/professor-student-info', null, config);
        console.log(res);
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