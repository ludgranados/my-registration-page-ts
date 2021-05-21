// Imports from dependencies
import { FormEvent, useContext, useState } from 'react';

// Imports from components
import { GlobalContext } from '../context/GlobalContext';
import '../App.css'


const FormComponent = () => {
  // Input values
  const { addMember } = useContext(GlobalContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // debugger;

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) =>  {
    e.preventDefault();

    addMember({firstName, lastName, email, password});
    // debugger;
    
    let newMember = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    // addMember(newMember);
    console.log(newMember);
    alert('You have been registered!!!');
    
    const clearForm = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    };
  
    clearForm();
   
    };

    return (
      <div className='row'>
        <div className='col-6 offset-3'>

          {/** Registration Form */}
          <form action='submit' className='member-form'>

          {/** Heading */}
          <div style={{fontFamily: 'fantasy', fontSize: '300%', marginTop: '3%'}}>
            New Member Registration Form
          </div>  

            {/** First Name */}
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='inputFirstName'
              className='form-control'
              placeholder="First Name"
              value={firstName}
              onChange={event => {
                setFirstName(event.target.value);
              }}
            />
          </div>

          {/** Last Name */}
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              className='form-control'
              placeholder="Last Name"
              value={lastName}
              onChange={event => {
                setLastName(event.target.value);
              }}
            />
          </div>

          {/** Email */}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              className='form-control'
              placeholder="Email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </div>

          {/** Password */}
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='inputPassword'
              className='form-control'
              placeholder="Password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>
          
          {/** Button for the form */}
          <button className='btn btn-primary btn-block' onClick={handleSubmit}>Submit</button>

          </form>

        </div>
      </div>
    );
  };
  
  export default FormComponent;