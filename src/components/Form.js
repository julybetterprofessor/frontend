import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

export const Form = (props) => {


    //setting states for each input
    const [inputUser, setInputUser] = useState({
        username: '',
          password: '',
    });
    const {username, password} = inputUser; 
      //form component to handle onChange
    const handleChange = (event => {
        setInputUser({...inputUser, [event.target.name]: event.target.value})
    })

    //funciton for onSubmit + creates obj. ONSUBMIT FUNCTION
    const onSubmit = async evt => {
      evt.preventDefault();
      const user = {
          username,
          password
      };
      try {
          const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
          };
          const body = JSON.stringify(user);
          const res = await axios.post('https://better-professor-app-backend.herokuapp.com/api/login', body, config);
          console.log(res);
      } catch (err) {
          console.error(err.response.data);
      }
  }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log('This is my input user and password', inputUser)
    //     setInputUser({username: '', password: '',})
    // }


    return (
        <div className="App">
        <Styleform><form onSubmit={(evt) =>onSubmit(evt)}>
          <label>
            <div className = 'inputUser'>
            Username :
              <input 
              name='username'
              type='text'
              placeholder='Enter User'
              value={username}

                //see handChange function for details
                onChange={(evt) =>handleChange(evt)}
                

              />
              </div>
              <div className ='inputPassword'>
              Password :
              <input
              name='password'
              type='password'
              placeholder='Enter Password'
              value={password}
              //see handChange function for details
              onChange={(evt) =>handleChange(evt)}
              
              />
              </div>
          </label>
          {/* <button type='submit'>Submit</button> */}
          <input type="submit" className="btn btn-primary" value="login" />
        </form> </Styleform>
    </div>
    );
}



const Styleform = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  margin: 15% auto;
  background: #EFEFEF; 
  border-radius: 10px;
  padding: 10%
  font-size: 140%;`


