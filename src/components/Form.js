import React, { useState } from 'react';
import styled from 'styled-components';

export const Form = (props) => {


    //setting states for each input
    const [inputUser, setInputUser] = useState({
          email: '',
          password: '',
    });
      //form component to handle onChange
    const handleChange = (event => {
        setInputUser({...inputUser, [event.target.name]: event.target.value})
    })

    //funciton for onSubmit + creates obj. ONSUBMIT FUNCTION
    const handleSubmit = event => {
        event.preventDefault();
        console.log('This is my input user and password', inputUser)
        setInputUser({email: '', password: '',})
    }


    return (
        <div className="App">
        <Styleform><form onSubmit={handleSubmit}>
          <label>
            <div className = 'inputEmail'>
            E-MAIL :
              <input 
              name='email'
              type='email'
              placeholder='Enter Email'
              value={inputUser.email}


                //see handChange function for details
                onChange={handleChange}
                


              />
              </div>
              <div className ='inputPassword'>
              Password :
              <input
              name='password'
              type='password'
              placeholder='Enter Password'
              value={inputUser.password}
              //see handChange function for details
              onChange={handleChange}
              
              />
              </div>
          </label>
          <button type='submit'>Submit</button>
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


