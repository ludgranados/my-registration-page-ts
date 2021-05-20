// Imports from dependencies
import '../App.css'


const FormComponent = () => {
    return (
      <div className='row'>
        <div className='col-6 offset-3'>

          <form action='submit' className='member-form'>

          {/** Heading */}
          <div style={{fontFamily: 'fantasy', fontSize: '300%', marginTop: '3%'}}>New Member Registration Form</div>  

            {/** First Name */}
          <div className='form-group'>
            <label htmlFor='heroName'>First Name</label>
            <input
              type='text'
              id='firstName'
              className='form-control'
            />
          </div>

          {/** Last Name */}
          <div className='form-group'>
            <label htmlFor='heroName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              className='form-control'
            />
          </div>

          {/** Email */}
          <div className='form-group'>
            <label htmlFor='heroName'>Email</label>
            <input
              type='text'
              id='Email'
              className='form-control'
            />
          </div>

          {/** Password */}
          <div className='form-group'>
            <label htmlFor='heroName'>Password</label>
            <input
              type='text'
              id='Password'
              className='form-control'
            />
          </div>

          <button className='btn btn-primary btn-block'>Submit</button>
          </form>


          


        </div>
      </div>
    );
  };
  
  export default FormComponent;