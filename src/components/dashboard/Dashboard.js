import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Dashboard.sass';


const Dashboard = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            const config = {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            };
            let res = await axios.get('https://better-professor-app-backend.herokuapp.com/api/students', config);
            setStudents(res.data);
        };
        getStudents();
    }, []);

    return (
        <div className="formBorder">
            {students.map(({ firstname, lastname, email, id }) => (
                <Card className='card' key={id}>
                    <CardContent>
                        <Typography className='title' gutterBottom>
                            {`${firstname} ${lastname}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">See {firstname}</Button>
                    </CardActions>
                </Card>
            ))}
            <Link to="/studentform">
                <input type="submit" className="btn btn-primary" value="Create New Student" />
            </Link>
        </div>
    );
};

export default Dashboard;